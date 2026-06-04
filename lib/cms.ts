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

/** Zet seed-paragrafen (string[]) om naar Portable Text, zodat de blogdetail
 *  altijd via dezelfde renderer kan (PortableText). */
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

export async function getServices(): Promise<Service[]> {
  if (!isSanityConfigured) return seedServices;
  const data = await client.fetch<Service[]>(q.servicesQuery);
  return data?.length ? data : seedServices;
}

export async function getService(slug: string): Promise<Service | null> {
  if (!isSanityConfigured)
    return seedServices.find((s) => s.slug === slug) ?? null;
  const data = await client.fetch<Service | null>(q.serviceQuery, { slug });
  return data ?? null;
}

export async function getServiceSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return seedServices.map((s) => s.slug);
  const data = await client.fetch<string[]>(q.serviceSlugsQuery);
  return data?.length ? data : seedServices.map((s) => s.slug);
}

/* ------------------------------------ Team ------------------------------------ */

export async function getTeam(): Promise<TeamMemberItem[]> {
  if (!isSanityConfigured) return seedTeam;
  const data = await client.fetch<TeamMemberItem[]>(q.teamQuery);
  return data?.length ? data : seedTeam;
}

/* ------------------------------------ Cases ----------------------------------- */

export async function getCases(): Promise<CaseStudy[]> {
  if (!isSanityConfigured) return seedCases;
  const data = await client.fetch<CaseStudy[]>(q.casesQuery);
  return data?.length ? data : seedCases;
}

export async function getFeaturedCases(): Promise<CaseStudy[]> {
  return (await getCases()).filter((c) => c.featured);
}

export async function getCase(slug: string): Promise<CaseStudy | null> {
  if (!isSanityConfigured) return seedCases.find((c) => c.slug === slug) ?? null;
  const data = await client.fetch<CaseStudy | null>(q.caseQuery, { slug });
  return data ?? null;
}

export async function getCaseSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return seedCases.map((c) => c.slug);
  const data = await client.fetch<string[]>(q.caseSlugsQuery);
  return data?.length ? data : seedCases.map((c) => c.slug);
}

/* ------------------------------------ Blog ------------------------------------ */

export async function getPosts(): Promise<PostListItem[]> {
  if (!isSanityConfigured) return seedPostsByDate;
  const data = await client.fetch<PostListItem[]>(q.postsQuery);
  return data?.length ? data : seedPostsByDate;
}

export async function getPost(slug: string): Promise<PostDetail | null> {
  if (!isSanityConfigured) {
    const p = seedPosts.find((post) => post.slug === slug);
    return p ? { ...p, body: textToBlocks(p.body) } : null;
  }
  const data = await client.fetch<
    (Omit<Post, "body"> & { body?: PortableTextBlock[] }) | null
  >(q.postQuery, { slug });
  return data ? { ...data, body: data.body ?? [] } : null;
}

export async function getPostSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return seedPosts.map((p) => p.slug);
  const data = await client.fetch<string[]>(q.postSlugsQuery);
  return data?.length ? data : seedPosts.map((p) => p.slug);
}

/* -------------------------------- Site settings ------------------------------- */

export async function getSiteSettings(): Promise<SiteSettings> {
  const fallback: SiteSettings = {
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    phone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    whatsapp: siteConfig.contact.whatsapp,
    hours: siteConfig.contact.hours,
    socials: siteConfig.socials.map((s) => ({ label: s.label, href: s.href })),
  };
  if (!isSanityConfigured) return fallback;
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
}
