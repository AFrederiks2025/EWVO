/**
 * Blogartikelen — bron: eenwebsitevanons.nl (8 echte posts, 2017–2026).
 * LET OP: de slugs en datums zijn overgenomen uit MERGE-PLAN.md en nog NIET
 * geverifieerd tegen de live site (GATE-B / Fase 0). De `body` is placeholder —
 * TODO: echte artikelteksten migreren (gap #9).
 */
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  author: string;
  category: string;
  body: string[]; // paragrafen
};

export const posts: Post[] = [
  {
    slug: "brommerwinkel-website-revisie-2026",
    title: "7 jaar bouwen. Tijd voor revisie.",
    excerpt:
      "Waarom een revisie vaak slimmer is dan een complete redesign — en hoe je dat aanpakt.",
    date: "2026-01-15",
    author: "Anton Frederiks",
    category: "Strategie",
    body: [
      "Na een aantal jaren is bijna elke website toe aan vernieuwing. Maar betekent dat altijd helemaal opnieuw beginnen? Vaak niet.",
      "In dit artikel leggen we uit waarom een gerichte revisie — behouden wat werkt, vernieuwen wat moet — meestal sneller, goedkoper én beter is dan een complete redesign.",
      "TODO: volledige artikeltekst migreren vanaf eenwebsitevanons.nl.",
    ],
  },
  {
    slug: "webdesign-trends-2023",
    title: "Webdesign-trends om in de gaten te houden",
    excerpt: "De ontwikkelingen die het uiterlijk van het web bepalen.",
    date: "2023-03-10",
    author: "Team EWVO",
    category: "Design",
    body: ["TODO: artikeltekst migreren."],
  },
  {
    slug: "seo-strategie-2022",
    title: "Een SEO-strategie die echt werkt",
    excerpt: "Hoe je structureel hoger scoort in Google.",
    date: "2022-05-18",
    author: "Team EWVO",
    category: "SEO",
    body: ["TODO: artikeltekst migreren."],
  },
  {
    slug: "e-commerce-optimalisatie-2021",
    title: "Je webshop optimaliseren voor meer omzet",
    excerpt: "Praktische tips om je conversie te verhogen.",
    date: "2021-09-02",
    author: "Team EWVO",
    category: "E-commerce",
    body: ["TODO: artikeltekst migreren."],
  },
  {
    slug: "social-media-marketing-2020",
    title: "Social media-marketing voor het MKB",
    excerpt: "Zichtbaar worden zonder groot budget.",
    date: "2020-06-22",
    author: "Team EWVO",
    category: "Marketing",
    body: ["TODO: artikeltekst migreren."],
  },
  {
    slug: "website-beveiliging-2019",
    title: "Zo houd je je website veilig",
    excerpt: "De basis van websitebeveiliging uitgelegd.",
    date: "2019-11-08",
    author: "Team EWVO",
    category: "Techniek",
    body: ["TODO: artikeltekst migreren."],
  },
  {
    slug: "content-marketing-2018",
    title: "Content marketing: vertel je verhaal",
    excerpt: "Hoe goede content klanten aantrekt.",
    date: "2018-04-12",
    author: "Team EWVO",
    category: "Content",
    body: ["TODO: artikeltekst migreren."],
  },
  {
    slug: "online-ondernemen-2017",
    title: "Beginnen met online ondernemen",
    excerpt: "De eerste stappen naar een professionele online aanwezigheid.",
    date: "2017-07-01",
    author: "Team EWVO",
    category: "Ondernemen",
    body: ["TODO: artikeltekst migreren."],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const postsByDate = [...posts].sort((a, b) =>
  a.date < b.date ? 1 : -1
);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
