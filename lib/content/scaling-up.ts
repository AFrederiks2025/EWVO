/**
 * Scaling Up — alle one-page tools als invulbaar werkblad (intern, /scaling-up).
 * Vragen overgenomen uit de Scaling Up Growth Tools (Rockefeller Habits 2.0).
 * Tools © Gazelles — zie ScalingUp.com. Hier als invulbare werkversie voor EWVO.
 *
 * Eén bron van waarheid: de /scaling-up-pagina rendert dit en slaat antwoorden
 * lokaal op (localStorage) per veld-id. Zo is controleerbaar dat álle vragen
 * erin staan.
 */
export type SUFieldType = "text" | "textarea" | "check";

export type SUField = {
  id: string;
  type: SUFieldType;
  label?: string;
  placeholder?: string;
  rows?: number;
};

export type SUBlock =
  | { kind: "fields"; heading?: string; help?: string; fields: SUField[] }
  | {
      kind: "table";
      heading?: string;
      help?: string;
      columns: string[];
      rows: { label: string; cells: SUField[] }[];
    }
  | { kind: "checklist"; heading?: string; help?: string; items: SUField[] };

export type SUTool = {
  id: string;
  title: string;
  subtitle?: string;
  intro?: string;
  blocks: SUBlock[];
};

export type SUPillar = {
  id: string;
  name: string;
  description: string;
  tools: SUTool[];
};

/* Korte helpers om de data compact en consistent te houden. */
const txt = (id: string, label?: string, placeholder?: string): SUField => ({
  id,
  type: "text",
  label,
  placeholder,
});
const area = (id: string, label?: string, rows = 3): SUField => ({
  id,
  type: "textarea",
  label,
  rows,
});
const chk = (id: string, label: string): SUField => ({ id, type: "check", label });

export const scalingUpPillars: SUPillar[] = [
  /* ----------------------------------- MENSEN ---------------------------------- */
  {
    id: "mensen",
    name: "Mensen",
    description:
      "De juiste mensen op de juiste plek, met heldere rollen, processen en verantwoordelijkheden.",
    tools: [
      {
        id: "oppp",
        title: "One-Page Personal Plan (OPPP)",
        intro:
          "Levensgebieden om in mee te nemen: Geloof, Familie, Vrienden, Gezondheid, Financiën.",
        blocks: [
          {
            kind: "fields",
            fields: [txt("oppp-naam", "Naam"), txt("oppp-datum", "Datum")],
          },
          {
            kind: "table",
            help: "Vul per tijdshorizon in voor elk van de vier kolommen.",
            columns: ["Relaties", "Prestaties", "Gewoonten", "Vermogen (€)"],
            rows: [
              {
                label: "10–25 jaar (ambities)",
                cells: [
                  area("oppp-amb-rel", undefined, 2),
                  area("oppp-amb-pre", undefined, 2),
                  area("oppp-amb-gew", undefined, 2),
                  area("oppp-amb-ver", undefined, 2),
                ],
              },
              {
                label: "1 jaar (activiteiten)",
                cells: [
                  area("oppp-1jr-rel", undefined, 2),
                  area("oppp-1jr-pre", undefined, 2),
                  area("oppp-1jr-gew", undefined, 2),
                  area("oppp-1jr-ver", undefined, 2),
                ],
              },
              {
                label: "90 dagen — Start",
                cells: [
                  area("oppp-start-rel", undefined, 2),
                  area("oppp-start-pre", undefined, 2),
                  area("oppp-start-gew", undefined, 2),
                  area("oppp-start-ver", undefined, 2),
                ],
              },
              {
                label: "90 dagen — Stop",
                cells: [
                  area("oppp-stop-rel", undefined, 2),
                  area("oppp-stop-pre", undefined, 2),
                  area("oppp-stop-gew", undefined, 2),
                  area("oppp-stop-ver", undefined, 2),
                ],
              },
            ],
          },
        ],
      },
      {
        id: "rollen",
        title: "Overzicht Rollen en Verantwoordelijkheden",
        intro:
          "Benoem per rol de verantwoordelijke, de voorspellende KPI's en de resultaten (winst/verlies, balans).",
        blocks: [
          {
            kind: "table",
            help: "Identificeer: 1) meer dan één persoon op één positie, 2) één persoon op meer dan één positie, 3) lege posities, 4) wie neem je enthousiast opnieuw aan? (rehire?)",
            columns: [
              "Naam verantwoordelijke",
              "Voorspellende KPI's",
              "Resultaten (winst/verlies, balans)",
            ],
            rows: [
              "Algemeen Directeur",
              "Marketing",
              "R&D / Innovatie",
              "Verkoop",
              "Bedrijfsvoering",
              "Financieel Beheer",
              "Controller",
              "ICT",
              "Personeelszaken / HRM",
              "Talent Ontwikkeling / Opleiding",
              "Customer Advocacy",
              "Afdelingsleider / Vestiging 1",
              "Afdelingsleider / Vestiging 2",
            ].map((role, i) => ({
              label: role,
              cells: [
                txt(`rollen-${i}-naam`),
                area(`rollen-${i}-kpi`, undefined, 2),
                area(`rollen-${i}-res`, undefined, 2),
              ],
            })),
          },
        ],
      },
      {
        id: "kernprocessen",
        title: "Overzicht Kernprocessen en Verantwoordelijkheden",
        intro: "Identificeer de 4–9 processen die cruciaal zijn voor de organisatie.",
        blocks: [
          {
            kind: "table",
            columns: [
              "Naam verantwoordelijke",
              "Naam van het proces",
              "KPI's (beter, sneller, goedkoper)",
            ],
            rows: [1, 2, 3, 4, 5, 6].map((n) => ({
              label: `Proces ${n}`,
              cells: [
                txt(`proces-${n}-naam`),
                txt(`proces-${n}-proces`),
                area(`proces-${n}-kpi`, undefined, 2),
              ],
            })),
          },
        ],
      },
    ],
  },

  /* ---------------------------------- STRATEGIE -------------------------------- */
  {
    id: "strategie",
    name: "Strategie",
    description:
      "Een scherpe positionering, merkbeloften en een 3–5 jaar strategie om groei te versnellen.",
    tools: [
      {
        id: "swt",
        title: "Sterkten, Zwaktes en Trends",
        blocks: [
          {
            kind: "fields",
            fields: [
              area(
                "swt-trends",
                "Trends — significante veranderingen (technologie, distributie, productinnovatie, markten, gebruikers, sociale trends) die impact kunnen hebben op de industrie en jouw organisatie",
                4,
              ),
              area(
                "swt-sterkten",
                "Sterkten / Kerncompetenties — de inherente sterkten van de organisatie die de bron zijn van het succes",
                4,
              ),
              area(
                "swt-zwakten",
                "Zwakten — de inherente zwakten van de organisatie die vermoedelijk niet veranderen",
                4,
              ),
            ],
          },
        ],
      },
      {
        id: "zeven-lagen",
        title: "De Zeven Lagen",
        blocks: [
          {
            kind: "fields",
            fields: [
              txt("zl-organisatie", "Naam organisatie"),
              area("zl-mindshare", "1. Eigenaarschap van woorden (mindshare)"),
            ],
          },
          {
            kind: "table",
            heading: "2. De Zandbak en Merkbeloften",
            columns: [
              "Wie / Waar (kernklanten)",
              "Wat (producten en diensten)",
              "Merkbeloften",
              "KPI's",
            ],
            rows: [1, 2, 3].map((n) => ({
              label: `Rij ${n}`,
              cells: [
                area(`zl-zandbak-${n}-wie`, undefined, 2),
                area(`zl-zandbak-${n}-wat`, undefined, 2),
                area(`zl-zandbak-${n}-belofte`, undefined, 2),
                area(`zl-zandbak-${n}-kpi`, undefined, 2),
              ],
            })),
          },
          {
            kind: "fields",
            fields: [
              area(
                "zl-garantie",
                "3. Garantie van merkbeloften (katalyserend mechanisme)",
              ),
              area("zl-een-zin", "4. Strategie in één zin (winstgevend kernproces)"),
              area(
                "zl-onderscheidend",
                "5. Onderscheidend vermogen (3–5 kernactiviteiten / 'hoe')",
              ),
              area("zl-xfactor", "6. X-Factor (10x–100x onderliggend voordeel)"),
              txt("zl-winst-x", "7. Winst/X (economische motor)"),
              txt("zl-bhag", "BHAG® (10–25 jaardoelstelling)"),
            ],
          },
        ],
      },
      {
        id: "opsp",
        title: "One-Page Strategic Plan (OPSP)",
        blocks: [
          {
            kind: "fields",
            fields: [txt("opsp-organisatie", "Naam organisatie")],
          },
          {
            kind: "fields",
            heading: "Mensen (reputatie-aandrijvers) — noem er 1–3 per groep",
            fields: [
              area("opsp-medewerkers", "Medewerkers"),
              area("opsp-klanten", "Klanten / Opdrachtgevers"),
              area("opsp-aandeelhouders", "Aandeelhouders"),
            ],
          },
          {
            kind: "fields",
            heading: "Kernwaarden & missie",
            fields: [
              area(
                "opsp-kernwaarden",
                "Kernwaarden en normen (wat hoort wel / niet)",
                4,
              ),
              area("opsp-missie", "Missie (why / reden van bestaan)", 4),
            ],
          },
          {
            kind: "fields",
            heading: "Doelen (3–5 jaar) — Zandbak",
            fields: [
              txt("opsp-doel-datum", "Datum toekomst"),
              txt("opsp-doel-omzet", "Omzet"),
              txt("opsp-doel-winst", "Winst"),
              txt("opsp-doel-marktwaarde", "Marktwaarde"),
            ],
          },
          {
            kind: "fields",
            heading: "Acties (1 jaar)",
            fields: [
              txt("opsp-1jr-eind", "Jaar eindigend"),
              txt("opsp-1jr-omzet", "Omzet"),
              txt("opsp-1jr-winst", "Winst"),
              txt("opsp-1jr-marktwaarde", "Marktwaarde"),
              txt("opsp-1jr-brutomarge", "Brutomarge"),
              txt("opsp-1jr-cash", "Cash"),
              txt("opsp-1jr-debdagen", "Debiteurendagen"),
              txt("opsp-1jr-voorraad", "Dagen voorraad"),
              txt("opsp-1jr-omzmedew", "Omzet / medewerker"),
            ],
          },
          {
            kind: "fields",
            heading: "Acties om normen, waarden, missie & BHAG® tot leven te brengen",
            fields: [1, 2, 3, 4, 5].map((n) => txt(`opsp-actie-${n}`, `${n}.`)),
          },
          {
            kind: "fields",
            heading: "Kernactiviteiten / Speerpunten (3–5 jaar prioriteiten)",
            fields: [1, 2, 3, 4, 5].map((n) =>
              txt(`opsp-speerpunt-${n}`, `${n}.`),
            ),
          },
          {
            kind: "fields",
            heading: "Kerninitiatieven (1 jaar prioriteiten)",
            fields: [1, 2, 3, 4, 5].map((n) =>
              txt(`opsp-initiatief-${n}`, `${n}.`),
            ),
          },
          {
            kind: "fields",
            heading: "Winst/X, BHAG® & merkbeloften",
            fields: [
              txt("opsp-winst-x", "Winst/X"),
              txt("opsp-bhag", "BHAG®"),
              area("opsp-kpi-merkbeloften", "KPI's van merkbeloften"),
              area("opsp-merkbeloften", "Merkbeloften"),
            ],
          },
          {
            kind: "fields",
            heading: "Cruciaal getal",
            fields: [
              txt("opsp-cruciaal-mensen", "Cruciaal getal: mensen of balans"),
              txt("opsp-cruciaal-proces", "Cruciaal getal: proces of winst/verlies"),
            ],
          },
          {
            kind: "fields",
            heading: "Sterkten / Kerncompetenties & zwakten",
            fields: [
              txt("opsp-sterkte-1", "Sterkte 1"),
              txt("opsp-sterkte-2", "Sterkte 2"),
              txt("opsp-sterkte-3", "Sterkte 3"),
              txt("opsp-zwakte-1", "Zwakte 1"),
              txt("opsp-zwakte-2", "Zwakte 2"),
              txt("opsp-zwakte-3", "Zwakte 3"),
            ],
          },
        ],
      },
      {
        id: "visie-overzicht",
        title: "Visie-overzicht",
        subtitle: "Samenvatting van het strategisch plan op één overzicht.",
        blocks: [
          {
            kind: "fields",
            heading: "Visie",
            fields: [
              area("visie-kernwaarden", "Kernwaarden"),
              area("visie-missie", "Missie"),
              area("visie-merkbeloften", "Merkbeloften"),
              txt("visie-bhag", "BHAG®"),
            ],
          },
          {
            kind: "fields",
            heading: "Strategische prioriteiten",
            fields: [
              area("visie-prio-35jr", "3–5 jaar"),
              area("visie-prio-1jr", "1 jaar"),
              area("visie-prio-kwartaal", "Per kwartaal"),
            ],
          },
          {
            kind: "fields",
            fields: [txt("visie-naam", "Jouw naam")],
          },
          {
            kind: "table",
            heading: "KPI's",
            columns: ["KPI", "Doelstelling"],
            rows: [1, 2, 3].map((n) => ({
              label: `KPI ${n}`,
              cells: [txt(`visie-kpi-${n}`), txt(`visie-kpi-${n}-doel`)],
            })),
          },
          {
            kind: "fields",
            heading: "Cruciaal getal",
            fields: [
              txt("visie-cruciaal-mensen", "Mensen of balans"),
              txt("visie-cruciaal-proces", "Proces of winst/verlies"),
            ],
          },
          {
            kind: "table",
            heading: "Kwartaalprioriteiten",
            columns: ["Kwartaalprioriteit", "Einddatum"],
            rows: [1, 2, 3, 4, 5].map((n) => ({
              label: `Prioriteit ${n}`,
              cells: [txt(`visie-kwprio-${n}`), txt(`visie-kwprio-${n}-datum`)],
            })),
          },
        ],
      },
    ],
  },

  /* --------------------------------- UITVOERING -------------------------------- */
  {
    id: "uitvoering",
    name: "Uitvoering",
    description:
      "Ritme, focus en heldere verantwoordelijkheden, zodat plannen ook echt gebeuren — zonder gedoe.",
    tools: [
      {
        id: "www",
        title: "Wie, Wat, Wanneer (WWW)",
        blocks: [
          {
            kind: "table",
            columns: ["Wie", "Wat", "Wanneer"],
            rows: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
              label: `Actie ${n}`,
              cells: [
                txt(`www-${n}-wie`),
                area(`www-${n}-wat`, undefined, 2),
                txt(`www-${n}-wanneer`),
              ],
            })),
          },
        ],
      },
      {
        id: "rockefeller",
        title: "Rockefeller Habits Checklist™",
        intro: "Vink af welke gewoonten al leven binnen de organisatie.",
        blocks: [
          {
            kind: "checklist",
            heading:
              "1. Zoals het het directieteam vergaat, zo vergaat het de rest van de organisatie.",
            items: [
              chk(
                "rh-1a",
                "Teamleden begrijpen elkaars verschillen, prioriteiten en stijlen.",
              ),
              chk(
                "rh-1b",
                "Het team vergadert regelmatig (idealiter wekelijks) over strategie en vernieuwing.",
              ),
              chk(
                "rh-1c",
                "Het team doet aan doorlopende educatie (maandelijks is aanbevolen).",
              ),
              chk(
                "rh-1d",
                "Het team kan constructieve discussies voeren en alle teamleden voelen zich comfortabel om deel te nemen.",
              ),
            ],
          },
          {
            kind: "checklist",
            heading:
              "2. Iedereen zit op één lijn met de nr. 1 prioriteit voor dit kwartaal om de organisatie vooruit te laten gaan.",
            items: [
              chk(
                "rh-2a",
                "Het cruciale getal is geïdentificeerd en afgestemd op de nr. 1 prioriteit.",
              ),
              chk(
                "rh-2b",
                "3–5 prioriteiten (Rocks) zijn geïdentificeerd en op prioriteit gerangschikt voor het kwartaal.",
              ),
              chk(
                "rh-2c",
                "Een kwartaalthema, de viering van het succes en beloning zijn vastgesteld en gecommuniceerd aan alle medewerkers.",
              ),
              chk(
                "rh-2d",
                "Het thema / cruciale getal is zichtbaar door het hele bedrijf en alle medewerkers zijn elke week op de hoogte van de voortgang.",
              ),
            ],
          },
          {
            kind: "checklist",
            heading:
              "3. Communicatieritme is vastgesteld. Informatie gaat accuraat en snel door de organisatie.",
            items: [
              chk(
                "rh-3a",
                "Alle werknemers nemen deel aan een 'Daily Huddle' die minder dan 15 minuten duurt.",
              ),
              chk("rh-3b", "Alle teams hebben wekelijks een tactisch overleg (Weekly)."),
              chk(
                "rh-3c",
                "Het top- en middelmanagement heeft maandelijks een strategische meeting (idealiter 1 dag) voor grote vraagstukken, leren en DNA-overdracht.",
              ),
              chk(
                "rh-3d",
                "Het top- en middelmanagement heeft ieder kwartaal en jaar een overleg (idealiter 2 dagen) om aan de 4 Beslissingen te werken.",
              ),
            ],
          },
          {
            kind: "checklist",
            heading:
              "4. Binnen iedere afdeling is één persoon verantwoordelijk voor het behalen van de gestelde doelen.",
            items: [
              chk(
                "rh-4a",
                "Het 'Overzicht Functies en Verantwoordelijkheden' is ingevuld (de juiste mensen doen de juiste dingen goed).",
              ),
              chk(
                "rh-4b",
                "Inkomsten (winst/verlies), kasstroom en jaarbalansposten hebben personen toegewezen gekregen voor iedere activiteit.",
              ),
              chk(
                "rh-4c",
                "Voor elk van de 4–9 processen op het 'Overzicht Processen en Verantwoordelijkheden' is iemand verantwoordelijk.",
              ),
              chk(
                "rh-4d",
                "Voor elke 3–5 kernactiviteiten is een expert aangesteld in de adviesraad, indien deze expertise intern niet aanwezig is.",
              ),
            ],
          },
          {
            kind: "checklist",
            heading:
              "5. Gestructureerde en continue terugkoppeling van medewerkers wordt gebruikt voor het identificeren van obstakels en kansen.",
            items: [
              chk(
                "rh-5a",
                "Het topmanagement (en middelmanagement) heeft wekelijks een 'Start/Stop/Continue'-gesprek met minimaal 1 medewerker.",
              ),
              chk(
                "rh-5b",
                "De inzichten uit de gesprekken met medewerkers worden wekelijks gedeeld tijdens de topmanagementmeeting.",
              ),
              chk(
                "rh-5c",
                "De input van medewerkers (obstakels en kansen) wordt wekelijks verzameld.",
              ),
              chk(
                "rh-5d",
                "Een middelmanagementteam is verantwoordelijk voor het proces van identificeren en aanpakken van obstakels en kansen.",
              ),
            ],
          },
          {
            kind: "checklist",
            heading:
              "6. Rapportage en analyse van feedback van opdrachtgevers is net zo frequent en accuraat als die van de financiële gegevens.",
            items: [
              chk(
                "rh-6a",
                "Alle topmanagers (en middelmanagers) hebben wekelijks een vier-vragen-gesprek met minimaal 1 opdrachtgever / eindgebruiker.",
              ),
              chk(
                "rh-6b",
                "De inzichten uit gesprekken met opdrachtgevers / eindgebruikers worden wekelijks gedeeld tijdens de topmanagementmeeting.",
              ),
              chk("rh-6c", "Alle medewerkers zijn betrokken bij het verzamelen van klantgegevens."),
              chk(
                "rh-6d",
                "Een middelmanagementteam is verantwoordelijk voor het verzamelen en oppakken van de feedback van opdrachtgevers.",
              ),
            ],
          },
          {
            kind: "checklist",
            heading: "7. Normen, kernwaarden en missie 'leven' binnen de organisatie.",
            items: [
              chk(
                "rh-7a",
                "Normen, kernwaarden en missie zijn gedefinieerd en bekend bij alle medewerkers.",
              ),
              chk(
                "rh-7b",
                "Topmanagers en middelmanagers verwijzen naar de kernwaarden en missie bij complimenten en feedback.",
              ),
              chk(
                "rh-7c",
                "Personeelsprocessen zijn in lijn met de kernwaarden en missie (werving, beoordelingen, erkenning, etc.).",
              ),
              chk(
                "rh-7d",
                "Elk kwartaal zijn er acties opgesteld en uitgevoerd om de kernwaarden en missie te versterken.",
              ),
            ],
          },
          {
            kind: "checklist",
            heading:
              "8. Medewerkers kunnen de volgende kerncomponenten van de bedrijfsstrategie nauwkeurig verwoorden:",
            items: [
              chk(
                "rh-8a",
                "Big Hairy Audacious Goal (BHAG®) — vooruitgang wordt gemeten en is zichtbaar.",
              ),
              chk("rh-8b", "De kernklant(en) — hun profiel in maximaal 25 woorden."),
              chk(
                "rh-8c",
                "3 merkbeloften — en de bijbehorende KPI's worden wekelijks gerapporteerd.",
              ),
              chk(
                "rh-8d",
                "'Elevator Pitch' — een overtuigend antwoord op de vraag “Wat doet uw bedrijf?”.",
              ),
            ],
          },
          {
            kind: "checklist",
            heading:
              "9. Alle medewerkers kunnen kwantitatief rapporteren of ze een goede dag/week hebben gehad (kolom 7 van het OPSP).",
            items: [
              chk("rh-9a", "1 of 2 KPI's worden wekelijks gerapporteerd voor elke rol / persoon."),
              chk(
                "rh-9b",
                "Elke medewerker heeft 1 cruciaal getal dat in lijn is met het cruciale getal van de organisatie voor dat kwartaal.",
              ),
              chk(
                "rh-9c",
                "Ieder individu / team heeft 3–5 kwartaalprioriteiten / Rocks die in lijn zijn met die van het bedrijf.",
              ),
              chk(
                "rh-9d",
                "Alle top- en middelmanagers hebben een coach (of peer-coach) voor verantwoording over gedragsveranderingen.",
              ),
            ],
          },
          {
            kind: "checklist",
            heading: "10. De bedrijfsplannen en resultaten zijn voor iedereen zichtbaar.",
            items: [
              chk(
                "rh-10a",
                "Een 'Situation Room' is in het leven geroepen voor de wekelijkse vergaderingen (fysiek of virtueel).",
              ),
              chk(
                "rh-10b",
                "Normen, kernwaarden, missie en prioriteiten zijn door het hele bedrijf verspreid.",
              ),
              chk(
                "rh-10c",
                "Er zijn overal scoreborden om de voortgang op KPI's en cruciale getallen visueel weer te geven.",
              ),
              chk(
                "rh-10d",
                "Er is een systeem voor het bijhouden en beheren van de trapsgewijze prioriteiten en KPI's.",
              ),
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------ CASH ----------------------------------- */
  {
    id: "cash",
    name: "Cash",
    description:
      "Gezonde cashflow als zuurstof om door te kunnen groeien — een kortere cash conversion cycle.",
    tools: [
      {
        id: "cash-strategieen",
        title: "Cashversnellingsstrategieën (CASh)",
        intro:
          "Bekijk per manier drie lenzen: doorlooptijd reduceren · fouten elimineren · businessmodel & W/V verbeteren.",
        blocks: [
          {
            kind: "fields",
            heading: "A — Manieren om de verkoopcyclus te verbeteren",
            fields: [1, 2, 3, 4, 5].map((n) =>
              area(`cash-verkoop-${n}`, `${n}.`, 2),
            ),
          },
          {
            kind: "fields",
            heading: "B — Manieren om de productie- & voorraadcyclus te verbeteren",
            fields: [1, 2, 3, 4, 5].map((n) =>
              area(`cash-productie-${n}`, `${n}.`, 2),
            ),
          },
          {
            kind: "fields",
            heading: "C — Manieren om de leveringscyclus te verbeteren",
            fields: [1, 2, 3, 4, 5].map((n) =>
              area(`cash-levering-${n}`, `${n}.`, 2),
            ),
          },
          {
            kind: "fields",
            heading: "D — Manieren om de facturering- & betalingscyclus te verbeteren",
            fields: [1, 2, 3, 4, 5].map((n) =>
              area(`cash-facturering-${n}`, `${n}.`, 2),
            ),
          },
        ],
      },
      {
        id: "kracht-van-een",
        title: "De kracht van één",
        intro:
          "Bereken de impact van kleine verbeteringen op je netto cashflow en EBIT.",
        blocks: [
          {
            kind: "fields",
            heading: "Huidige positie",
            fields: [
              txt("kve-huidig-cashflow", "Netto cashflow (€)"),
              txt("kve-huidig-ebit", "EBIT (€)"),
            ],
          },
          {
            kind: "table",
            heading: "Jouw 'kracht van één' — verandering die je graag doorvoert",
            columns: ["Verandering", "Impact op cashflow (€)", "Impact op EBIT (€)"],
            rows: [
              "Toename in prijs (%)",
              "Toename in volume (%)",
              "Reductie in kostprijs (%)",
              "Reductie in overheadkosten (%)",
              "Afname debiteurendagen (dagen)",
              "Afname voorraaddagen (dagen)",
              "Toename crediteurendagen (dagen)",
            ].map((lever, i) => ({
              label: lever,
              cells: [
                txt(`kve-${i}-verandering`),
                txt(`kve-${i}-cashflow`),
                txt(`kve-${i}-ebit`),
              ],
            })),
          },
          {
            kind: "fields",
            heading: "Jouw aangepaste positie",
            fields: [
              txt("kve-aangepast-cashflow", "Netto cashflow (€)"),
              txt("kve-aangepast-ebit", "EBIT (€)"),
            ],
          },
        ],
      },
    ],
  },
];
