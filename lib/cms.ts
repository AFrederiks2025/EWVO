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

const seedPostsByDate = [...seedPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

/* ---------------------------------- Diensten ---------------------------------- */

export function getServices(): Promise<Service[]> {
  return safeFetch(async () => {
    const data = await client.fetch<Service[]>(q.servicesQuery);
    return data?.length ? data : seedServices;
  }, seedServices);
}

export function getService(slug: string): Promise<Service | null> {
  return safeFetch(
    async () => {
      const data = await client.fetch<Service | null>(q.serviceQuery, { slug });
      return data ?? seedServices.find((s) => s.slug === slug) ?? null;
    },
    seedServices.find((s) => s.slug === slug) ?? null,
  );
}

export function getServiceSlugs(): Promise<string[]> {
  return safeFetch(async () => {
    const data = await client.fetch<string[]>(q.serviceSlugsQuery);
    return data?.length ? data : seedServices.map((s) => s.slug);
  }, seedServices.map((s) => s.slug));
}

/* ------------------------------------ Team ------------------------------------ */

export function getTeam(): Promise<TeamMemberItem[]> {
  return safeFetch(async () => {
    const data = await client.fetch<TeamMemberItem[]>(q.teamQuery);
    return data?.length ? data : seedTeam;
  }, seedTeam);
}

/* ------------------------------------ Cases ----------------------------------- */

export function getCases(): Promise<CaseStudy[]> {
  return safeFetch(async () => {
    const data = await client.fetch<CaseStudy[]>(q.casesQuery);
    return data?.length ? data : seedCases;
  }, seedCases);
}

export async function getFeaturedCases(): Promise<CaseStudy[]> {
  return (await getCases()).filter((c) => c.featured);
}

export function getCase(slug: string): Promise<CaseStudy | null> {
  return safeFetch(
    async () => {
      const data = await client.fetch<CaseStudy | null>(q.caseQuery, { slug });
      return data ?? seedCases.find((c) => c.slug === slug) ?? null;
    },
    seedCases.find((c) => c.slug === slug) ?? null,
  );
}

export function getCaseSlugs(): Promise<string[]> {
  return safeFetch(async () => {
    const data = await client.fetch<string[]>(q.caseSlugsQuery);
    return data?.length ? data : seedCases.map((c) => c.slug);
  }, seedCases.map((c) => c.slug));
}

/* ------------------------------------ Blog ------------------------------------ */

export function getPosts(): Promise<PostListItem[]> {
  return safeFetch(async () => {
    const data = await client.fetch<PostListItem[]>(q.postsQuery);
    return data?.length ? data : seedPostsByDate;
  }, seedPostsByDate);
}

export function getPost(slug: string): Promise<PostDetail | null> {
  const seedFallback = (): PostDetail | null => {
    const p = seedPosts.find((post) => post.slug === slug);
    return p ? { ...p, body: textToBlocks(p.body) } : null;
  };
  return safeFetch(async () => {
    const data = await client.fetch<
      (Omit<Post, "body"> & { body?: PortableTextBlock[] }) | null
    >(q.postQuery, { slug });
    return data ? { ...data, body: data.body ?? [] } : seedFallback();
  }, seedFallback());
}

export function getPostSlugs(): Promise<string[]> {
  return safeFetch(async () => {
    const data = await client.fetch<string[]>(q.postSlugsQuery);
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
    const data = await client.fetch<Partial<SiteSettings> | null>(
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
