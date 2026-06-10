import type { PortableTextBlock } from "@portabletext/types";
import { isSanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import * as q from "@/sanity/lib/queries";

import { services as seedServices, type Service } from "@/lib/content/services";
import { team as seedTeam, type TeamMember } from "@/lib/content/team";
import { cases as seedCases, type CaseStudy } from "@/lib/content/cases";
import { posts as seedPosts, type Post } from "@/lib/content/posts";
import { siteConfig } from "@/lib/site";

export type { Service, CaseStudy };
export type PostListItem = Omit<Post, "body">;
export type PostDetail = Omit<Post, "body"> & { body: PortableTextBlock[] };
export type TeamMemberItem = Omit<TeamMember, "image">;

export type SiteSettings = {
  tagline: string;
  description: string;
  phone: string;
  email: string;
  whatsapp: string;
  hours: string;
  socials: { label: string; href: string }[];
};

/**
 * Voert een Sanity-query uit; valt bij élke fout (of als er geen project is
 * gekoppeld) terug op de meegegeven seed-data. Zo kan een CMS-storing of
 * netwerkprobleem de build/site nooit breken.
 */
async function safeFetch<T>(run: () => Promise<T>, fallback: T): Promise<T> {
  if (!isSanityConfigured) return fallback;
  try {
    return await run();
  } catch (err) {
    console.error("[cms] Sanity-fetch mislukt, terugval op seed-content:", err);
    return fallback;
  }
}

/** Zet seed-paragrafen (string[]) om naar Portable Text. */
function textToBlocks(paragraphs: string[]): PortableTextBlock[] {
  return paragraphs.map((text, i) => ({
    _type: "block",
    _key: `seed-${i}`,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `seed-${i}-0`, text, marks: [] }],
  })) as unknown as PortableTextBlock[];
}

function cfetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  // Next.js ISR: ververs CMS-content elke 60s zonder rebuild.
  return client.fetch(query, params, {
    next: { revalidate: 60 },
  }) as Promise<T>;
}

const seedPostsByDate = [...seedPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

/* ---------------------------------- Diensten ---------------------------------- */

export function getServices(): Promise<Service[]> {
  return safeFetch(async () => {
    const data = await cfetch<Service[]>(q.servicesQuery);
    return data?.length ? data : seedServices;
  }, seedServices);
}

export function getService(slug: string): Promise<Service | null> {
  return safeFetch(
    async () => {
      const data = await cfetch<Service | null>(q.serviceQuery, { slug });
      return data ?? seedServices.find((s) => s.slug === slug) ?? null;
    },
    seedServices.find((s) => s.slug === slug) ?? null,
  );
}

export function getServiceSlugs(): Promise<string[]> {
  return safeFetch(async () => {
    const data = await cfetch<string[]>(q.serviceSlugsQuery);
    return data?.length ? data : seedServices.map((s) => s.slug);
  }, seedServices.map((s) => s.slug));
}

/* ------------------------------------ Team ------------------------------------ */

/**
 * Seed is leidend voor `role` en `bio` (de bevestigde functies/omschrijvingen),
 * zodat Sanity geen verouderde rollen terugzet. Sanity mag wél de naam en een
 * eventueel portret (image) aanleveren. Zelfde principe als bij de cases.
 */
function mergeTeamWithSeed(sanity: TeamMemberItem[]): TeamMemberItem[] {
  const sanityBySlug = new Map(sanity.map((m) => [m.slug, m]));
  const merged = seedTeam.map((seed) => {
    const s = sanityBySlug.get(seed.slug);
    return s
      ? { ...s, name: s.name || seed.name, role: seed.role, bio: seed.bio }
      : seed;
  });
  const seedSlugs = new Set(seedTeam.map((m) => m.slug));
  return [...merged, ...sanity.filter((m) => !seedSlugs.has(m.slug))];
}

export function getTeam(): Promise<TeamMemberItem[]> {
  return safeFetch(async () => {
    const data = await cfetch<TeamMemberItem[]>(q.teamQuery);
    return data?.length ? mergeTeamWithSeed(data) : seedTeam;
  }, seedTeam);
}

/* ------------------------------------ Cases ----------------------------------- */

/**
 * Voegt een Sanity-case samen met de bijbehorende seed-case.
 * De seed is leidend voor `image` (onze screenshots) en `featured`; Sanity
 * mag de tekstvelden overschrijven zolang die gevuld zijn. Zo blijven onze
 * screenshots en uitgelichte selectie staan, ook als Sanity ze (nog) niet kent.
 */
function mergeCaseWithSeed(seed: CaseStudy, sanity: CaseStudy): CaseStudy {
  return {
    ...seed,
    sector: sanity.sector || seed.sector,
    summary: sanity.summary || seed.summary,
    url: sanity.url || seed.url,
    // Seed leidend voor de uitwerking (Sanity bevat nog oude placeholders).
    problem: seed.problem || sanity.problem,
    approach: seed.approach || sanity.approach,
    result: seed.result || sanity.result,
    quote: sanity.quote || seed.quote,
    image: sanity.image || seed.image,
  };
}

function mergeCases(sanity: CaseStudy[]): CaseStudy[] {
  const sanityBySlug = new Map(sanity.map((c) => [c.slug, c]));
  const merged = seedCases.map((seed) => {
    const s = sanityBySlug.get(seed.slug);
    return s ? mergeCaseWithSeed(seed, s) : seed;
  });
  const seedSlugs = new Set(seedCases.map((c) => c.slug));
  // Eventuele Sanity-only cases (zonder seed-tegenhanger) achteraan toevoegen.
  return [...merged, ...sanity.filter((c) => !seedSlugs.has(c.slug))];
}

export function getCases(): Promise<CaseStudy[]> {
  return safeFetch(async () => {
    const data = await cfetch<CaseStudy[]>(q.casesQuery);
    return data?.length ? mergeCases(data) : seedCases;
  }, seedCases);
}

export async function getFeaturedCases(): Promise<CaseStudy[]> {
  return (await getCases()).filter((c) => c.featured);
}

export function getCase(slug: string): Promise<CaseStudy | null> {
  return safeFetch(
    async () => {
      const data = await cfetch<CaseStudy | null>(q.caseQuery, { slug });
      const seed = seedCases.find((c) => c.slug === slug) ?? null;
      if (!seed) return data;
      return data ? mergeCaseWithSeed(seed, data) : seed;
    },
    seedCases.find((c) => c.slug === slug) ?? null,
  );
}

export function getCaseSlugs(): Promise<string[]> {
  return safeFetch(async () => {
    const data = await cfetch<string[]>(q.caseSlugsQuery);
    // Unie van Sanity- en seed-slugs, zodat ook seed-only cases (SL-Audio) een
    // statisch gerenderde detailpagina krijgen.
    return [...new Set([...(data ?? []), ...seedCases.map((c) => c.slug)])];
  }, seedCases.map((c) => c.slug));
}

/* ------------------------------------ Blog ------------------------------------ */

/**
 * Seed is leidend voor `imageUrl` (onze aangeleverde blog-covers): zo
 * overschrijft Sanity onze beelden niet met een lege waarde. Sanity blijft
 * leidend voor de tekst.
 */
function mergePostImage<T extends { slug: string; imageUrl?: string }>(
  post: T,
): T {
  const seed = seedPosts.find((p) => p.slug === post.slug);
  return seed?.imageUrl ? { ...post, imageUrl: seed.imageUrl } : post;
}

export function getPosts(): Promise<PostListItem[]> {
  return safeFetch(async () => {
    const data = await cfetch<PostListItem[]>(q.postsQuery);
    return data?.length ? data.map(mergePostImage) : seedPostsByDate;
  }, seedPostsByDate);
}

export function getPost(slug: string): Promise<PostDetail | null> {
  const seedFallback = (): PostDetail | null => {
    const p = seedPosts.find((post) => post.slug === slug);
    return p ? { ...p, body: textToBlocks(p.body) } : null;
  };
  return safeFetch(async () => {
    const seed = seedPosts.find((post) => post.slug === slug);
    const data = await cfetch<
      (Omit<Post, "body"> & { body?: PortableTextBlock[] }) | null
    >(q.postQuery, { slug });
    if (!data) return seedFallback();
    return mergePostImage({
      ...data,
      // Seed is leidend voor de artikeltekst (Sanity bevat nog oude placeholders).
      body: seed ? textToBlocks(seed.body) : data.body ?? [],
    });
  }, seedFallback());
}

export function getPostSlugs(): Promise<string[]> {
  return safeFetch(async () => {
    const data = await cfetch<string[]>(q.postSlugsQuery);
    return data?.length ? data : seedPosts.map((p) => p.slug);
  }, seedPosts.map((p) => p.slug));
}

/* -------------------------------- Site settings ------------------------------- */

export function getSiteSettings(): Promise<SiteSettings> {
  const fallback: SiteSettings = {
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    phone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    whatsapp: siteConfig.contact.whatsapp,
    hours: siteConfig.contact.hours,
    socials: siteConfig.socials.map((s) => ({ label: s.label, href: s.href })),
  };
  return safeFetch(async () => {
    const data = await cfetch<Partial<SiteSettings> | null>(
      q.siteSettingsQuery,
    );
    if (!data) return fallback;
    return {
      tagline: data.tagline || fallback.tagline,
      description: data.description || fallback.description,
      phone: data.phone || fallback.phone,
      email: data.email || fallback.email,
      whatsapp: data.whatsapp || fallback.whatsapp,
      hours: data.hours || fallback.hours,
      socials: data.socials?.length ? data.socials : fallback.socials,
    };
  }, fallback);
}
