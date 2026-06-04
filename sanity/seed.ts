/**
 * Seed-script: zet de lokale voorbeeldcontent (lib/content/*) in Sanity.
 *
 * Uitvoeren (na het invullen van .env.local en `npx sanity login`):
 *   npx sanity@latest exec sanity/seed.ts --with-user-token
 *
 * Dit bestand wordt bewust uitgesloten van de Next-typecheck (zie tsconfig).
 */
import { getCliClient } from "sanity/cli";
import { services } from "../lib/content/services";
import { team } from "../lib/content/team";
import { cases } from "../lib/content/cases";
import { posts } from "../lib/content/posts";
import { siteConfig } from "../lib/site";

const client = getCliClient();

function textToBlocks(paragraphs) {
  return paragraphs.map((text, i) => ({
    _type: "block",
    _key: `b${i}`,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `s${i}`, text, marks: [] }],
  }));
}

const docs = [
  ...services.map((s, i) => ({
    _id: `service-${s.slug}`,
    _type: "service",
    title: s.title,
    slug: { _type: "slug", current: s.slug },
    tagline: s.tagline,
    summary: s.summary,
    icon: s.icon,
    features: s.features,
    intro: s.intro,
    order: i,
  })),
  ...team.map((m, i) => ({
    _id: `team-${m.slug}`,
    _type: "teamMember",
    name: m.name,
    slug: { _type: "slug", current: m.slug },
    role: m.role,
    bio: m.bio,
    order: i,
  })),
  ...cases.map((c, i) => ({
    _id: `case-${c.slug}`,
    _type: "caseStudy",
    client: c.client,
    slug: { _type: "slug", current: c.slug },
    sector: c.sector,
    summary: c.summary,
    featured: c.featured,
    url: c.url,
    problem: c.problem,
    approach: c.approach,
    result: c.result,
    quote: c.quote,
    order: i,
  })),
  ...posts.map((p) => ({
    _id: `post-${p.slug}`,
    _type: "post",
    title: p.title,
    slug: { _type: "slug", current: p.slug },
    excerpt: p.excerpt,
    date: new Date(p.date).toISOString(),
    author: p.author,
    category: p.category,
    body: textToBlocks(p.body),
  })),
  {
    _id: "siteSettings",
    _type: "siteSettings",
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    phone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    whatsapp: siteConfig.contact.whatsapp,
    hours: siteConfig.contact.hours,
    socials: [],
  },
];

async function run() {
  const tx = client.transaction();
  docs.forEach((doc) => tx.createOrReplace(doc));
  await tx.commit();
  console.log(`✓ ${docs.length} documenten geseed in dataset "${client.config().dataset}".`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
