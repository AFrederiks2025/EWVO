/**
 * Klantreviews voor de /werk-pagina.
 *
 * LET OP — PLACEHOLDER-CONTENT. De auteurs zijn bewust generiek
 * ("Naam opdrachtgever") zodat zichtbaar is dat hier nog écht geverifieerde
 * quotes moeten komen. De teksten beschrijven onze werkwijze in algemene zin
 * en bevatten geen verzonnen, meetbare claims.
 * TODO: vervang door echte klantquotes met naam + bedrijf (gap #4, MERGE-PLAN.md).
 */
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "review-1",
    quote:
      "Vanaf het eerste gesprek dachten ze met ons mee. Van strategie tot oplevering verliep alles persoonlijk en zonder zorgen.",
    author: "Naam opdrachtgever",
    role: "Coaching",
  },
  {
    id: "review-2",
    quote:
      "Eén vast aanspreekpunt dat snel schakelt en doet wat is afgesproken. Precies wat we zochten in een digitaal partner.",
    author: "Naam opdrachtgever",
    role: "Hospitality",
  },
  {
    id: "review-3",
    quote:
      "Onze nieuwe website oogt professioneel en is eenvoudig zelf te beheren. We blijven op support kunnen rekenen.",
    author: "Naam opdrachtgever",
    role: "Retail",
  },
];
