/**
 * Showcase-onderdelen. Elk onderdeel krijgt een eigen subdomein
 * (<slug>.ewvo.nl) dat via proxy.ts naar /voorbeeld/<slug> wijst. `group`
 * bepaalt de indeling in het mega-menu op voorbeeld.ewvo.nl.
 */
export type Voorbeeld = {
  slug: string;
  title: string;
  description: string;
  group: string;
};

export const voorbeelden: Voorbeeld[] = [
  { slug: "header", title: "Header", description: "De bovenbalk met logo en navigatie.", group: "Structuur" },
  { slug: "navigatie", title: "Navigatie", description: "Menustructuur en links.", group: "Structuur" },
  { slug: "footer", title: "Footer", description: "De onderbalk met info, links en contact.", group: "Structuur" },
  { slug: "breadcrumbs", title: "Breadcrumbs", description: "Kruimelpad-navigatie.", group: "Structuur" },
  { slug: "logobalk", title: "Logobalk", description: "Logo's van klanten of partners.", group: "Structuur" },

  { slug: "hero", title: "Hero", description: "De eerste indruk bovenaan de pagina.", group: "Boven de vouw" },
  { slug: "cta", title: "Call-to-action", description: "Knoppen die tot actie aanzetten.", group: "Boven de vouw" },
  { slug: "carousel", title: "Carousel", description: "Schuivende sliders en galerijen.", group: "Boven de vouw" },
  { slug: "statistieken", title: "Statistieken", description: "Cijfers, tellers en kerngetallen.", group: "Boven de vouw" },

  { slug: "diensten", title: "Diensten", description: "Je aanbod presenteren.", group: "Pagina's & content" },
  { slug: "portfolio", title: "Portfolio", description: "Werk en cases tonen.", group: "Pagina's & content" },
  { slug: "blog", title: "Blog", description: "Artikeloverzichten en kaarten.", group: "Pagina's & content" },
  { slug: "team", title: "Team", description: "De mensen achter je bedrijf.", group: "Pagina's & content" },
  { slug: "reviews", title: "Reviews", description: "Klantbeoordelingen tonen.", group: "Pagina's & content" },
  { slug: "prijzen", title: "Prijzen", description: "Pakketten en prijstabellen.", group: "Pagina's & content" },
  { slug: "faq", title: "FAQ", description: "Veelgestelde vragen.", group: "Pagina's & content" },

  { slug: "contact", title: "Contact", description: "Contactsecties en formulieren.", group: "Componenten" },
  { slug: "buttons", title: "Buttons", description: "Knopstijlen en varianten.", group: "Componenten" },
  { slug: "cards", title: "Cards", description: "Kaart-componenten.", group: "Componenten" },
  { slug: "tabs", title: "Tabs", description: "Tabbladen.", group: "Componenten" },
  { slug: "paginering", title: "Paginering", description: "Bladeren door meerdere pagina's.", group: "Componenten" },
  { slug: "popup", title: "Popup", description: "Pop-ups en modals.", group: "Componenten" },
  { slug: "cookiebanner", title: "Cookiebanner", description: "Toestemming voor cookies.", group: "Componenten" },
];

export const voorbeeldSlugs = voorbeelden.map((v) => v.slug);

export const voorbeeldGroepen = [
  "Structuur",
  "Boven de vouw",
  "Pagina's & content",
  "Componenten",
];

export const getVoorbeeld = (slug: string) =>
  voorbeelden.find((v) => v.slug === slug);
