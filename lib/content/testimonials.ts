/**
 * Klantreviews. Bewust leeg: we tonen liever géén placeholder-quotes dan
 * verzonnen of generieke ("Naam opdrachtgever"). Echte reviews verzamelen we
 * via Google (zie reviewCta in lib/site.ts). Voeg hier geverifieerde quotes toe
 * zodra ze er zijn — met naam + bedrijf. De reviews- en portfolio-pagina
 * verbergen de sectie automatisch zolang deze lijst leeg is.
 */
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [];
