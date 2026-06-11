/**
 * Het echte team (6 personen) — bron: eenwebsitevanons.nl.
 * TODO: rollen, bio's en portretten bevestigen/aanleveren (gap #14 in MERGE-PLAN.md).
 * `image` is optioneel; zonder afbeelding tonen we een gekleurde placeholder.
 */
export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  /** Toont een "Senior"-badge op de teamkaart. */
  senior?: boolean;
};

export const team: TeamMember[] = [
  {
    slug: "anton-frederiks",
    name: "Anton Frederiks",
    role: "Oprichter & Strateeg", // TODO: rol bevestigen
    bio: "Denkt mee over strategie en groei, en schrijft over revisie versus redesign.",
  },
  {
    slug: "ozcan-akgun",
    name: "Ozcan Akgun",
    role: "Webontwikkelaar", // TODO: rol bevestigen
    bio: "Bouwt snelle, schaalbare websites en platforms.",
  },
  {
    slug: "thomas-bakker",
    name: "Thomas Bakker",
    role: "Designer", // TODO: rol bevestigen
    bio: "Vertaalt merken naar helder, doordacht ontwerp.",
  },
  {
    slug: "ardjan-de-boo",
    name: "Ardjan de Boo",
    role: "Tekstschrijver",
    bio: "Schrijft heldere, overtuigende teksten die je merk laten spreken.",
  },
  {
    slug: "coen-den-boer",
    name: "Coen den Boer",
    role: "Animator",
    bio: "Maakt animaties die merken in beweging brengen.",
  },
  {
    slug: "yorick-van-schijndel",
    name: "Yorick van Schijndel",
    role: "Bedrijfsvideo & fotografie",
    bio: "Maakt bedrijfsvideo's en foto's die je verhaal in beeld vertellen.",
  },
  {
    slug: "sipko-hoogsteen",
    name: "Sipko Hoogsteen",
    role: "Senior consultant", // TODO: rol/specialisme bevestigen
    bio: "Senior adviseur die met ruime ervaring meedenkt over strategie en groei.",
    senior: true,
  },
  {
    slug: "karel-jan-voogd",
    name: "Karel Jan Voogd",
    role: "Senior consultant", // TODO: rol/specialisme bevestigen
    bio: "Senior adviseur die projecten met overzicht en ervaring op koers houdt.",
    senior: true,
  },
];
