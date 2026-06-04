/**
 * De 5 dienstpijlers (geconsolideerd uit 4 EWVO + 7 Een Website van Ons diensten).
 * Zie MERGE-PLAN.md §5/§6. `icon` verwijst naar een lucide-react icoonnaam.
 */
export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  icon: string;
  features: string[];
  /** Langere intro voor de detailpagina. */
  intro: string;
};

export const services: Service[] = [
  {
    slug: "strategie-branding",
    title: "Strategie & Branding",
    tagline: "Een sterk merk met een helder verhaal.",
    summary:
      "Van positionering en merkstrategie tot logo, huisstijl en tone of voice. We bouwen een merk dat blijft hangen en meegroeit.",
    icon: "Compass",
    features: [
      "Merkstrategie & positionering",
      "Logo & huisstijl",
      "Tone of voice & boodschap",
      "Designsysteem & merkrichtlijnen",
    ],
    intro:
      "We beginnen niet bij het ontwerp, maar bij de strategie. Wie ben je, voor wie ben je er en waarin onderscheid je je? Dat vertalen we naar een merk dat klopt — van logo en huisstijl tot de manier waarop je communiceert.",
  },
  {
    slug: "webontwikkeling",
    title: "Maatwerk Webontwikkeling",
    tagline: "Razendsnelle websites die converteren.",
    summary:
      "Van een eerste professionele website tot een volledig maatwerkplatform. Snel, veilig, schaalbaar en gebouwd om te groeien.",
    icon: "Code",
    features: [
      "Website- & webdesign",
      "Maatwerk in Next.js / React",
      "Webshops & platforms",
      "Toegankelijk & SEO-vriendelijk",
    ],
    intro:
      "We bouwen websites die er niet alleen goed uitzien, maar ook echt werken: snel, vindbaar en gericht op resultaat. Of je nu je eerste site nodig hebt of een platform dat met je bedrijf meegroeit — we denken met je mee over ontwerp, structuur en techniek.",
  },
  {
    slug: "ai-automatisering",
    title: "AI & Automatisering",
    tagline: "Slimmer werken, minder handwerk.",
    summary:
      "We zetten AI en automatisering in om processen te versnellen, leads op te volgen en je team werk uit handen te nemen.",
    icon: "Sparkles",
    features: [
      "AI-chatbots & assistenten",
      "Workflow-automatisering",
      "Slimme content & personalisatie",
      "Integraties met je systemen",
    ],
    intro:
      "AI hoeft geen buzzword te zijn. Wij vertalen het naar concrete oplossingen die tijd besparen: van een chatbot die je klanten 24/7 helpt tot automatiseringen die handmatig werk overbodig maken.",
  },
  {
    slug: "hosting-beheer",
    title: "Hosting, Beheer & Beveiliging",
    tagline: "Zorgeloos online, dag en nacht.",
    summary:
      "Snelle, veilige hosting met doorlopend beheer, updates en monitoring. Wij zorgen dat je website blijft draaien.",
    icon: "ShieldCheck",
    features: [
      "Snelle, veilige hosting",
      "Updates & onderhoud",
      "Back-ups & monitoring",
      "Doorlopende support",
    ],
    intro:
      "Een website is nooit af. Wij houden 'm snel, veilig en up-to-date met doorlopend beheer, automatische back-ups en proactieve monitoring — zodat jij je geen zorgen hoeft te maken over de techniek.",
  },
  {
    slug: "content-video",
    title: "Content, Video & Fotografie",
    tagline: "Beeld en tekst die jouw verhaal vertellen.",
    summary:
      "Professionele bedrijfsvideo's, fotografie, copywriting en contentcreatie die je merk laten zien zoals het is.",
    icon: "Clapperboard",
    features: [
      "Bedrijfsvideo's & motion",
      "Fotografie",
      "Copywriting & content",
      "Promotie & social",
    ],
    intro:
      "De beste website komt pas tot leven met sterke content. We maken professionele video's, fotografie en teksten die jouw verhaal vertellen en je merk laten opvallen — online en daarbuiten.",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
