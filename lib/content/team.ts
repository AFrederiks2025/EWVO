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
    role: "Developer", // TODO: rol bevestigen
    bio: "Zorgt dat alles technisch klopt, van front-end tot integraties.",
  },
  {
    slug: "coen-den-boer",
    name: "Coen den Boer",
    role: "Content & Video", // TODO: rol bevestigen
    bio: "Maakt beeld en content die merken tot leven brengen.",
  },
  {
    slug: "yorick-van-schijndel",
    name: "Yorick van Schijndel",
    role: "Marketing & Strategie", // TODO: rol bevestigen
    bio: "Helpt klanten zichtbaar te worden en te groeien.",
  },
];
