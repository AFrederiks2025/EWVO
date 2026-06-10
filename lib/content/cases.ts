/**
 * Cases / opdrachtgevers — bron: eenwebsitevanons.nl (/klanten).
 * `featured: true` = launch-case (volledig uitgewerkt, zie MERGE-PLAN.md §6B).
 * `image` = echte website-screenshot in public/cases/<slug>.jpg.
 * `card`  = (legacy) samengestelde EWVO-portfoliokaart; /werk rendert de kaart
 *           nu in code, dus `card` wordt niet meer gebruikt voor weergave.
 * TODO: echte teksten, resultaten en quotes aanleveren (gap #3/#4).
 */
export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  summary: string;
  featured: boolean;
  image?: string;
  card?: string;
  url?: string;
  problem?: string;
  approach?: string;
  result?: string;
  quote?: { text: string; author: string };
};

export const cases: CaseStudy[] = [
  {
    slug: "brommer-winkel-voorthuizen",
    client: "Brommer Winkel Voorthuizen",
    sector: "Retail",
    summary:
      "Na 7 jaar toe aan een revisie: een snellere, frissere website die meegroeit met de winkel.",
    featured: true,
    image: "/cases/brommer-winkel-voorthuizen.jpg",
    url: "https://brommer-winkel.nl",
    problem:
      "Een website die na jaren niet meer paste bij het bedrijf: traag, gedateerd en lastig te onderhouden.",
    approach:
      "In plaats van een volledige redesign kozen we voor een gerichte revisie — behouden wat werkt, vernieuwen wat moet.",
    result:
      "Een snellere, modernere site die beter converteert en eenvoudig te beheren is.",
  },
  {
    slug: "krachtcoach",
    client: "Krachtcoach",
    sector: "Coaching",
    summary:
      "Een persoonlijke huisstijl en website die de kracht van de coach uitstraalt.",
    featured: true,
    image: "/cases/krachtcoach.jpg",
    url: "https://krachtcoach.nl",
    problem:
      "Een coach onderscheidt zich met persoonlijkheid en vertrouwen, maar dat kwam online nog onvoldoende uit de verf. De uitstraling moest de kracht en betrokkenheid van de coach direct voelbaar maken.",
    approach:
      "We bouwden een persoonlijke huisstijl en website rond de coach zelf: warme beeldtaal, heldere taal en een opbouw die bezoekers rustig meeneemt van kennismaking naar contact.",
    result:
      "Een website die de kracht van de coach uitstraalt en de stap naar een eerste gesprek klein maakt.",
  },
  {
    slug: "stayfitnl",
    client: "StayFitNL",
    sector: "Fitness",
    summary: "Een energieke website die leden inspireert om in beweging te komen.",
    featured: true,
    image: "/cases/stayfitnl.jpg",
    url: "https://stayfitnl.nl",
    problem:
      "Een fitnessmerk leeft van energie en beweging. De oude uitstraling bracht dat onvoldoende over en zette bezoekers niet aan tot actie.",
    approach:
      "We kozen voor een energieke, dynamische uitstraling met sprekende beeldtaal en een heldere structuur die leden snel naar de juiste informatie en aanmelding leidt.",
    result:
      "Een energieke website die inspireert om in beweging te komen en leden moeiteloos de weg wijst.",
  },
  {
    slug: "approach-of-life",
    client: "Approach of Life",
    sector: "Coaching",
    summary: "Een rustige, professionele uitstraling die vertrouwen wekt.",
    featured: true,
    image: "/cases/approach-of-life.jpg",
    url: "https://approachoflife.nl",
    problem:
      "Voor een coachingstraject is vertrouwen alles. De website moest rust en professionaliteit uitstralen en twijfelende bezoekers net dat duwtje geven om contact op te nemen.",
    approach:
      "We kozen voor een rustige, professionele uitstraling met heldere taal en een logische opbouw, met één duidelijke vervolgstap: een vrijblijvend kennismakingsgesprek.",
    result:
      "Een serene, betrouwbare website die vertrouwen wekt en bezoekers uitnodigt tot contact.",
  },
  {
    slug: "sl-audio",
    client: "SL-Audio",
    sector: "Live audio",
    summary:
      "Een strakke, sfeervolle website die de audio-regie voor live events laat spreken.",
    featured: true,
    image: "/cases/sl-audio.jpg",
    url: "https://sl-audio.ewvo.nl",
    problem:
      "SL-Audio is geen kistenboer maar audio-regiepartner — de technische rustbrenger van een live event. Dat onderscheid moest de website direct overbrengen: strak en sfeervol, zonder in standaard ‘geluidstechniek’-clichés te vervallen.",
    approach:
      "Een donkere, sfeervolle uitstraling met live-event-beeld, een scherpe positionering (‘jouw audio-regiepartner voor live events’) en heldere bewijsvoering — rust onder druk, front-row geluid, soundcheck tot eindmix — die naar één duidelijke stap leidt: plan een intake.",
    result:
      "Een professionele site die SL-Audio neerzet als betrouwbare regiepartner in plaats van losse techniek, met een heldere route naar contact.",
  },
  {
    slug: "de-sprong-voorwaarts",
    client: "De Sprong Voorwaarts",
    sector: "Zorg",
    summary:
      "Een rustige, warme website die ruimte geeft aan ervarings- en lichaamsgerichte therapie.",
    featured: true,
    image: "/cases/de-sprong-voorwaarts.jpg",
    url: "https://www.desprongvoorwaarts.nl",
    problem:
      "De praktijk richt zich op mensen die zich ‘vast, op en uitgeblust’ voelen en vaak twijfelen om hulp te zoeken. De website moest rust en veiligheid uitstralen, de stap naar contact klein maken en een gevoelsmatige, lichaamsgerichte aanpak uitleggen zonder jargon — waar een klinische of drukke site juist zou afschrikken.",
    approach:
      "We kozen rust en ruimte als ontwerpprincipe: warme, jargonvrije taal in de eigen tone-of-voice van de praktijk (‘je hoeft je hier niet uit te leggen’), een heldere opbouw — de therapeut, de therapie, de aanpak en praktische info — en één duidelijke, laagdrempelige vervolgstap: ‘plan een intake’.",
    // TODO: meetbare resultaten (bijv. intake-aanvragen) + echte klantquote aanleveren.
    result:
      "Een serene, toegankelijke website die de praktijk professioneel en uitnodigend neerzet, de drie principes — lichaamsgericht, ervaringsgericht en in verbinding — helder uitlegt en bezoekers rustig naar een intake leidt.",
  },
  // Backlog-cases (overzichtskaart bij launch, detailpagina volgt — §6B)
  {
    slug: "tim-ging-op-reis",
    client: "Tim ging op Reis",
    sector: "Auteur & boek",
    summary:
      "Niet de bouw van de website, maar de strategie erachter: EWVO helpt Jeroen Struik scherp krijgen wat hij online wil bereiken met zijn voorleesboek — en wat daarvoor nodig is.",
    featured: false,
    image: "/cases/tim-ging-op-reis.jpg",
    url: "https://www.timgingopreis.nl",
    problem:
      "Jeroen Struik heeft met ‘Tim ging op reis’ een prachtig voorleesboek (én bijbehorend kleurboek). De vraag was niet technisch — de website stond er al — maar strategisch: welke doelen wil hij online bereiken, en wat is daarvoor allemaal nodig?",
    approach:
      "EWVO stapte in als strategisch sparringpartner, niet als websitebouwer. We brachten de doelstellingen scherp in beeld en vertaalden die naar een concreet online plan: positionering, de juiste kanalen en vindbaarheid om (groot)ouders en kinderen te bereiken.",
    // TODO: concrete mijlpalen/resultaten en een klantquote aanvullen zodra bekend.
    result:
      "Een helder doel en een online strategie waar Jeroen op kan sturen, met EWVO als meedenkende partner op de achtergrond — de basis om het boek breder onder de aandacht te brengen.",
  },
  {
    slug: "kerk-vol-kracht",
    client: "Kerk Vol Kracht",
    sector: "Non-profit",
    summary: "Een warme, uitnodigende website voor de gemeenschap.",
    featured: false,
    // TODO: juiste screenshot aanleveren — het eerdere beeld was per ongeluk De Sprong Voorwaarts.
  },
  {
    slug: "be-you-ti-ful",
    client: "Be You Ti Ful",
    sector: "Beauty",
    summary: "Een stijlvolle website die de salon laat stralen.",
    featured: false,
    image: "/cases/be-you-ti-ful.jpg",
    url: "https://beyoutiful.nl",
  },
  {
    slug: "bnb-de-oude-bank",
    client: "Bnb De Oude Bank",
    sector: "Hospitality",
    summary: "Een sfeervolle site die gasten direct laat boeken.",
    featured: false,
    image: "/cases/bnb-de-oude-bank.jpg",
    url: "https://bnb-deoudebank.nl",
  },
  {
    slug: "relatiezorg-nu",
    client: "RelatieZorg.nu",
    sector: "Zorg",
    summary: "Een toegankelijke website die drempels wegneemt.",
    featured: false,
    image: "/cases/relatiezorg-nu.jpg",
    url: "https://relatiezorg.nu",
  },
  {
    slug: "opinzicht",
    client: "Opinzicht.nl",
    sector: "Dienstverlening",
    summary: "Een heldere website die overzicht brengt.",
    featured: false,
    image: "/cases/opinzicht.jpg",
    url: "https://opinzicht.nl",
  },
  {
    slug: "freerun-academie",
    client: "FreerunAcademie",
    sector: "Sport",
    summary: "Een dynamische website vol beweging en energie.",
    featured: false,
    image: "/cases/freerun-academie.jpg",
    url: "https://freerun-academie.nl",
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);
export const featuredCases = cases.filter((c) => c.featured);
