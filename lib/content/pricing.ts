/**
 * Prijspakketten (MERGE-PLAN.md §6A).
 * MKB-Start vervangt de oude externe doorverwijzing naar eenwebsitevanons.nl.
 * TODO: prijs + scope van MKB-Start definitief maken, of op "Op aanvraag" zetten (gap #10).
 */
export type PricingTier = {
  name: string;
  price: string;
  priceNote?: string;
  forWho: string;
  highlight?: boolean;
  features: string[];
  cta: { label: string; href: string };
};

export const pricingTiers: PricingTier[] = [
  {
    name: "MKB-Start",
    price: "Op aanvraag", // TODO: voorstel €1.250 — bevestigen of als "Op aanvraag" laten
    forWho: "Je eerste professionele website",
    features: [
      "Website tot ~5 pagina's",
      "Responsive & basis-SEO",
      "Contactformulier",
      "Snelle oplevering",
    ],
    cta: { label: "Vraag aan", href: "/contact" },
  },
  {
    name: "Startup",
    price: "€2.499",
    priceNote: "eenmalig",
    forWho: "Startende ondernemer met basisbehoefte",
    features: [
      "Maatwerk-light",
      "Meer pagina's",
      "SEO-basis",
      "Branding-light",
    ],
    cta: { label: "Plan een gesprek", href: "/contact" },
  },
  {
    name: "Groei",
    price: "€4.999",
    priceNote: "eenmalig",
    forWho: "Groeiend MKB dat strategie + design wil",
    highlight: true,
    features: [
      "Volledig maatwerk",
      "Strategie & branding",
      "Uitgebreide SEO",
      "Content-ondersteuning",
    ],
    cta: { label: "Plan een gesprek", href: "/contact" },
  },
  {
    name: "Enterprise",
    price: "Op aanvraag",
    forWho: "Grotere organisatie of volledig ecosysteem",
    features: [
      "Alle 5 dienstpijlers",
      "AI & automatisering",
      "Hosting & doorlopend beheer",
      "Dedicated team",
    ],
    cta: { label: "Neem contact op", href: "/contact" },
  },
];
