/**
 * Showcase-onderdelen. Elk onderdeel krijgt een eigen subdomein
 * (<slug>.ewvo.nl) dat via proxy.ts naar /voorbeeld/<slug> wijst. De inhoud
 * (echte voorbeelden) wordt later ingevuld; nu staan er placeholders.
 */
export type Voorbeeld = { slug: string; title: string; description: string };

export const voorbeelden: Voorbeeld[] = [
  { slug: "header", title: "Header", description: "De bovenbalk met logo en navigatie." },
  { slug: "navigatie", title: "Navigatie", description: "Menustructuur en links." },
  { slug: "hero", title: "Hero", description: "De eerste indruk bovenaan de pagina." },
  { slug: "footer", title: "Footer", description: "De onderbalk met info, links en contact." },
  { slug: "cta", title: "Call-to-action", description: "Knoppen die tot actie aanzetten." },
  { slug: "contact", title: "Contact", description: "Contactsecties en formulieren." },
  { slug: "reviews", title: "Reviews", description: "Klantbeoordelingen tonen." },
  { slug: "prijzen", title: "Prijzen", description: "Pakketten en prijstabellen." },
  { slug: "faq", title: "FAQ", description: "Veelgestelde vragen." },
  { slug: "portfolio", title: "Portfolio", description: "Werk en cases tonen." },
  { slug: "diensten", title: "Diensten", description: "Je aanbod presenteren." },
  { slug: "team", title: "Team", description: "De mensen achter je bedrijf." },
  { slug: "carousel", title: "Carousel", description: "Schuivende sliders en galerijen." },
  { slug: "blog", title: "Blog", description: "Artikeloverzichten en kaarten." },
  { slug: "breadcrumbs", title: "Breadcrumbs", description: "Kruimelpad-navigatie." },
  { slug: "cookiebanner", title: "Cookiebanner", description: "Toestemming voor cookies." },
  { slug: "popup", title: "Popup", description: "Pop-ups en modals." },
  { slug: "buttons", title: "Buttons", description: "Knopstijlen en varianten." },
  { slug: "cards", title: "Cards", description: "Kaart-componenten." },
  { slug: "tabs", title: "Tabs", description: "Tabbladen." },
  { slug: "paginering", title: "Paginering", description: "Bladeren door meerdere pagina's." },
  { slug: "statistieken", title: "Statistieken", description: "Cijfers, tellers en kerngetallen." },
  { slug: "logobalk", title: "Logobalk", description: "Logo's van klanten of partners." },
];

export const voorbeeldSlugs = voorbeelden.map((v) => v.slug);

export const getVoorbeeld = (slug: string) =>
  voorbeelden.find((v) => v.slug === slug);
