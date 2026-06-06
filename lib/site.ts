/**
 * Centrale site-configuratie en "feiten-tabel" (zie MERGE-PLAN.md §2A).
 * Eén bron van waarheid voor naam, contactgegevens en navigatie.
 * Items met TODO moeten door de klant worden bevestigd vóór livegang.
 */
export const siteConfig = {
  name: "EWVO",
  // TODO: statutaire naam + KvK/BTW bevestigen (gap #6 in MERGE-PLAN.md)
  legalName: "EWVO",
  formerName: "Een Website van Ons",
  // TODO (GATE-A): oprichtingsjaar bevestigen — 2014 (positionering) vs 2018 (oude ewvo.nl)
  foundedYear: 2014,
  url: "https://www.ewvo.nl",
  domain: "www.ewvo.nl",
  locale: "nl_NL",
  tagline: "Zorgeloos online groeien.",
  description:
    "EWVO is het Nederlandse digitale bureau dat het MKB én de publieke sector zorgeloos online laat groeien. Strategie, webdesign, branding, AI en hosting — onder één dak.",
  contact: {
    phone: "+31 6 150 670 38",
    phoneHref: "tel:+31615067038",
    whatsapp: "https://wa.me/31615067038",
    // TODO: definitief e-mailbeleid — info@eenwebsitevanons.nl behouden of migreren naar @ewvo.nl (gap #8)
    email: "info@eenwebsitevanons.nl",
    emailHref: "mailto:info@eenwebsitevanons.nl",
    hours: "ma–vr 08:30–17:00",
    // TODO: geverifieerd bezoekadres of expliciet geen adres tonen (gap #7)
    address: null as string | null,
  },
  // TODO: geverifieerde social-profielen invullen (gap #11)
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
} as const;

export type NavItem = { label: string; href: string; children?: NavItem[] };

/** Hoofdnavigatie — Nederlandse routes (GATE-A). */
export const mainNav: NavItem[] = [
  { label: "Diensten", href: "/diensten" },
  { label: "Werk", href: "/werk" },
  { label: "Reviews", href: "/reviews" },
  {
    label: "Over ons",
    href: "/over-ons",
    children: [
      { label: "Over ons", href: "/over-ons" },
      { label: "Team EWVO", href: "/over-ons/team" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta = { label: "Plan een gratis adviesgesprek", href: "/contact" };

/** Externe Google-link om een review te schrijven (header, footer en /reviews). */
export const reviewCta = {
  label: "Schrijf een review voor de impact van deze samenwerking",
  href: "https://search.google.com/local/writereview?placeid=ChIJ-1l-OzLfx0cR6Ahm-jUHHN8",
};
