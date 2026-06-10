/**
 * Blogartikelen — geschreven in EWVO's tone-of-voice. Slugs en datums volgen de
 * oorspronkelijke reeks van Een Website van Ons (2017–2026).
 */
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  author: string;
  category: string;
  imageUrl?: string; // uitgelicht beeld (seed of Sanity)
  body: string[]; // paragrafen
};

export const posts: Post[] = [
  {
    slug: "brommerwinkel-website-revisie-2026",
    title: "7 jaar bouwen. Tijd voor revisie.",
    excerpt:
      "Waarom een revisie vaak slimmer is dan een complete redesign — en hoe je dat aanpakt.",
    date: "2026-01-15",
    author: "Anton Frederiks",
    category: "Strategie",
    body: [
      "Na zeven jaar trouwe dienst voelt een website vaak als een oude jas: vertrouwd, maar her en der versleten. De grote vraag is dan: knap je hem op of gooi je hem weg en begin je opnieuw? Een complete redesign klinkt verleidelijk, maar is lang niet altijd nodig. Vaak zit de echte waarde in wat je al hebt opgebouwd: vindbaarheid, vertrouwde structuren en bezoekers die de weg kennen.",
      "Een revisie betekent gericht ingrijpen. Je behoudt wat aantoonbaar werkt: de pagina's die scoren in Google, de navigatie die mensen begrijpen, de teksten die klanten overtuigen. En je vernieuwt wat je tegenhoudt: een verouderde uitstraling, trage laadtijden, een design dat op mobiel rammelt of techniek die niet meer veilig te onderhouden is. Zo houd je het goede vast zonder alles overhoop te gooien.",
      "De afweging maak je niet op gevoel, maar op feiten. Kijk naar je cijfers: waar haken bezoekers af, welke pagina's leveren klanten op, wat kost onderhoud je nu? Soms blijkt een redesign juist verstandiger, bijvoorbeeld als de basis technisch op is. Maar vaker brengt een doordachte revisie je sneller en goedkoper vooruit. Wij denken graag met je mee over welke route bij jouw situatie past, zodat je investeert in wat echt verschil maakt.",
    ],
  },
  {
    slug: "webdesign-trends-2023",
    title: "Webdesign-trends om in de gaten te houden",
    excerpt: "De ontwikkelingen die het uiterlijk van het web bepalen.",
    date: "2023-03-10",
    author: "Team EWVO",
    category: "Design",
    imageUrl: "/blog/webdesign-trends-2023.jpg",
    body: [
      "Elk jaar duiken er nieuwe webdesign-trends op, en de meeste zijn binnen een seizoen weer vergeten. De verleiding is groot om mee te gaan met wat er hip is, maar een website is geen modeshow. Wat vandaag fris oogt, voelt over twee jaar gedateerd. Veel interessanter zijn de principes die altijd blijven werken, omdat ze niet over smaak gaan maar over hoe mensen je site echt gebruiken.",
      "Snelheid staat daarbij voorop. Een site die traag laadt, jaagt bezoekers weg voordat ze ook maar iets gezien hebben. Hetzelfde geldt voor mobiel: het merendeel van je bezoek komt via de telefoon, dus daar begint het ontwerp, niet op een breed scherm. Toegankelijkheid hoort er net zo goed bij. Voldoende contrast, leesbare tekst en duidelijke knoppen helpen iedereen, niet alleen mensen met een beperking.",
      "En misschien wel het belangrijkste: helderheid. Een mooi design dat verwarring zaait, is geen goed design. Bezoekers moeten in een oogopslag zien wat je doet en wat ze kunnen verwachten. De trend die nooit verdwijnt, is dus eigenlijk gewoon: maak het simpel en duidelijk. Wij kijken liever naar wat jouw bezoekers nodig hebben dan naar wat er toevallig in de mode is.",
    ],
  },
  {
    slug: "seo-strategie-2022",
    title: "Een SEO-strategie die echt werkt",
    excerpt: "Hoe je structureel hoger scoort in Google.",
    date: "2022-05-18",
    author: "Team EWVO",
    category: "SEO",
    body: [
      "Hoog scoren in Google is geen kwestie van een paar trucjes, hoe vaak dat ook beloofd wordt. Echte vindbaarheid bouw je op, laag voor laag, en het kost tijd. Een SEO-strategie die werkt rust op drie pijlers die elkaar versterken: een technisch gezonde website, sterke content en relevantie voor de mensen die je wilt bereiken. Mist er één, dan blijven de andere twee onder hun kunnen.",
      "De techniek vormt het fundament. Een snelle site, een nette structuur, werkende links en goede leesbaarheid voor zoekmachines: zonder dat haalt de beste content het niet. Daarbovenop komt content die antwoord geeft op de vragen die je klanten echt stellen. Niet volgepropt met zoekwoorden, maar geschreven voor mensen. Google beloont pagina's die mensen daadwerkelijk helpen, en straft holle teksten af.",
      "Het lastigste onderdeel is misschien wel geduld. SEO levert zelden van de ene op de andere week resultaat. Je bouwt aan autoriteit, en dat is een kwestie van consistent blijven publiceren en verbeteren. Wie dat volhoudt, plukt er jarenlang de vruchten van. Wij helpen je liever een fundament te leggen dat blijft staan dan je een snelle piek te beloven die net zo hard weer wegzakt.",
    ],
  },
  {
    slug: "e-commerce-optimalisatie-2021",
    title: "Je webshop optimaliseren voor meer omzet",
    excerpt: "Praktische tips om je conversie te verhogen.",
    date: "2021-09-02",
    author: "Team EWVO",
    category: "E-commerce",
    body: [
      "Meer omzet uit je webshop haal je niet altijd uit meer bezoekers. Vaak zit de grootste winst bij de mensen die er al zijn, maar die net niet afrekenen. Elke stap tussen binnenkomen en bestellen is een moment waarop iemand kan afhaken. Door die stappen onder de loep te nemen, verhoog je je conversie zonder dat je advertentiebudget hoeft te groeien.",
      "Vertrouwen is daarbij cruciaal. Een bezoeker die twijfelt of jouw shop wel betrouwbaar is, koopt niet. Duidelijke contactgegevens, eerlijke reviews, een professionele uitstraling en een veilige betaalomgeving nemen die twijfel weg. Snelheid speelt ook mee: een trage productpagina kost je verkopen, simpelweg omdat mensen niet wachten. En je productpagina's moeten alles vertellen wat iemand nodig heeft om te beslissen, zonder ruis.",
      "De checkout is vaak de plek waar het misgaat. Te veel verplichte velden, onverwachte verzendkosten of een omslachtig account aanmaken: stuk voor stuk redenen om het winkelmandje achter te laten. Maak afrekenen kort, helder en zonder verrassingen. Wij kijken graag met je mee waar in jouw webshop klanten weglopen, zodat je verbetert wat echt het verschil maakt voor je omzet.",
    ],
  },
  {
    slug: "social-media-marketing-2020",
    title: "Social media-marketing voor het MKB",
    excerpt: "Zichtbaar worden zonder groot budget.",
    date: "2020-06-22",
    author: "Team EWVO",
    category: "Marketing",
    body: [
      "Zichtbaar worden op social media hoeft geen groot budget te kosten. Voor het MKB telt iets anders veel zwaarder: focus en consistentie. Je hoeft niet op elk platform aanwezig te zijn. Veel waardevoller is het om te kiezen waar jouw klanten daadwerkelijk zitten, en daar regelmatig iets van je te laten horen. Eén kanaal dat je goed bijhoudt verslaat vijf kanalen die je halfslachtig vult.",
      "Echt contact maakt het verschil. Social media is geen prikbord waarop je alleen aanbiedingen plakt, maar een plek om te laten zien wie je bent en waar je voor staat. Vertel over je werk, je mensen, de keuzes die je maakt. Reageer op vragen, bedank klanten, wees menselijk. Mensen kopen graag bij ondernemers die ze een beetje kennen, en juist dat kun je hier laten zien.",
      "Consistentie wint het uiteindelijk van perfectie. Liever elke week iets eenvoudigs en oprechts dan eens per kwartaal een hoogglans campagne. Zo bouw je langzaam een publiek op dat je onthoudt en vertrouwt. Wij denken graag met je mee over welke aanpak bij jouw bedrijf en je klanten past, zodat je tijd in iets steekt dat ook echt iets oplevert.",
    ],
  },
  {
    slug: "website-beveiliging-2019",
    title: "Zo houd je je website veilig",
    excerpt: "De basis van websitebeveiliging uitgelegd.",
    date: "2019-11-08",
    author: "Team EWVO",
    category: "Techniek",
    body: [
      "Websitebeveiliging klinkt al snel als iets voor specialisten, maar de basis is verrassend simpel en juist daar gaat het meestal mis. De meeste problemen ontstaan niet door geniale hackers, maar door achterstallig onderhoud. Software die niet wordt bijgewerkt, een wachtwoord dat al jaren hetzelfde is, of een back-up die er net niet bleek te zijn op het moment dat het misging.",
      "Begin bij het bijwerken. Verouderde software, plugins en systemen zijn de meest gebruikte ingang voor misbruik. Werk dus regelmatig alles bij. Gebruik daarnaast sterke, unieke wachtwoorden, het liefst met tweestapsverificatie erbij, zodat één gelekt wachtwoord niet meteen de hele boel openzet. En zorg dat je site via HTTPS draait: dat beschermt de gegevens van je bezoekers en is inmiddels gewoon de norm.",
      "Maak van back-ups een gewoonte, geen bijzaak. Een actuele back-up is je vangnet als er toch iets misgaat, of dat nu door een aanval komt of door een menselijke fout. Goede hosting helpt daar enorm bij, met automatische updates, monitoring en herstelmogelijkheden. Wij richten beveiliging het liefst zo in dat je er zelf nauwelijks naar hoeft om te kijken, zodat je veilig bent zonder dat het je dagelijks werk wordt.",
    ],
  },
  {
    slug: "content-marketing-2018",
    title: "Content marketing: vertel je verhaal",
    excerpt: "Hoe goede content klanten aantrekt.",
    date: "2018-04-12",
    author: "Team EWVO",
    category: "Content",
    imageUrl: "/blog/content-marketing-2018.jpg",
    body: [
      "Content marketing draait niet om zo veel mogelijk roepen, maar om iets waardevols vertellen. Mensen zijn doodmoe van reclame die alleen maar wil verkopen. Wat wel blijft hangen, is een verhaal dat klopt: eerlijk, behulpzaam en herkenbaar. Door je kennis te delen en open te zijn over hoe je werkt, trek je precies de klanten aan die bij je passen, zonder dat je ze iets hoeft aan te smeren.",
      "Goede content beantwoordt de vragen die je klanten echt hebben. Waar lopen ze tegenaan, wat houdt ze tegen, welke keuzes moeten ze maken? Als jij daar helder en oprecht over schrijft, word je vanzelf de partij die ze vertrouwen. Je laat zien dat je weet waar je het over hebt, nog voordat er ook maar één gesprek heeft plaatsgevonden. Dat vertrouwen is uiteindelijk veel meer waard dan welke verkoopzin dan ook.",
      "Het mooie is dat eerlijke content blijft werken. Een goed artikel wordt jaren later nog gevonden en gelezen, en blijft klanten naar je toe brengen. Het vraagt wel om consistentie en de durf om je eigen verhaal te vertellen in plaats van de holle taal die iedereen gebruikt. Wij helpen je graag scherp krijgen wat jouw verhaal nu eigenlijk is, en hoe je dat zo vertelt dat het beklijft.",
    ],
  },
  {
    slug: "online-ondernemen-2017",
    title: "Beginnen met online ondernemen",
    excerpt: "De eerste stappen naar een professionele online aanwezigheid.",
    date: "2017-07-01",
    author: "Team EWVO",
    category: "Ondernemen",
    body: [
      "Beginnen met online ondernemen voelt vaak overweldigend. Er lijkt zoveel te moeten: een website, social media, vindbaarheid, webshop. Maar je hoeft niet alles tegelijk te doen. Het belangrijkste is dat je een professionele eerste indruk maakt, want online beoordelen mensen je in een paar seconden. Begin daarom met een basis die klopt en bouw van daaruit rustig verder.",
      "Die basis is een duidelijke, betrouwbare website. Bezoekers moeten meteen begrijpen wat je doet, voor wie en hoe ze contact opnemen. Een eigen domeinnaam en een professioneel e-mailadres dragen daar al flink aan bij; ze laten zien dat je het serieus aanpakt. Het hoeft niet groot of ingewikkeld te zijn. Helder en verzorgd wint het altijd van veel en rommelig.",
      "Vanaf dat fundament kun je stap voor stap groeien: beter vindbaar worden, klanten online bereiken, misschien ooit een webshop. Maar dat hoeft niet meteen. Eerst goed staan, dan uitbouwen. Wij denken graag met je mee over welke stappen voor jou nu logisch zijn en welke nog even kunnen wachten, zodat je investeert in wat op dit moment echt telt.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const postsByDate = [...posts].sort((a, b) =>
  a.date < b.date ? 1 : -1
);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
