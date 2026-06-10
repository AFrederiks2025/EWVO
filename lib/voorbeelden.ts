/**
 * Showcase-onderdelen. Elk onderdeel krijgt een eigen subdomein
 * (<slug>.ewvo.nl) dat via proxy.ts naar /voorbeeld/<slug> wijst. `group`
 * bepaalt de indeling in het mega-menu op voorbeeld.ewvo.nl. `wat` + `impact`
 * leggen per onderdeel uit wat het is en waarom de juiste keuze verschil maakt.
 */
export type Voorbeeld = {
  slug: string;
  title: string;
  description: string;
  group: string;
  /** Korte uitleg: wat is het en waarom maakt de juiste keuze verschil. */
  wat?: string;
  /** Meerwaarde/impact-punten (gebruiksgemak, uitstraling, vertrouwen …). */
  impact?: { label: string; text: string }[];
};

export const voorbeelden: Voorbeeld[] = [
  {
    slug: "header",
    title: "Header",
    description: "De bovenbalk met logo en navigatie.",
    group: "Structuur",
    wat: "De bovenbalk met je logo en navigatie staat op elke pagina en is letterlijk het eerste wat mensen zien. Een rustige, duidelijke header zorgt dat bezoekers meteen weten wie je bent en waar ze heen kunnen. Kies je hier verkeerd, dan voelt de hele site rommelig.",
    impact: [
      { label: "Herkenning", text: "Je logo en huisstijl staan altijd in beeld, zodat mensen direct weten op wiens site ze zijn." },
      { label: "Gebruiksgemak", text: "Een vaste, voorspelbare bovenbalk laat bezoekers op elke pagina snel hun weg vinden." },
      { label: "Uitstraling", text: "Een strakke header geeft meteen een professionele eerste indruk." },
    ],
  },
  {
    slug: "navigatie",
    title: "Navigatie",
    description: "Menustructuur en links.",
    group: "Structuur",
    wat: "Je menu bepaalt hoe makkelijk bezoekers vinden wat ze zoeken. Een logische structuur met heldere labels voorkomt dat mensen verdwalen en afhaken. Hoe simpeler de keuzes, hoe sneller iemand bij de juiste pagina komt.",
    impact: [
      { label: "Overzicht", text: "Een doordachte menustructuur laat in één oogopslag zien wat je te bieden hebt." },
      { label: "Gebruiksgemak", text: "Duidelijke labels zorgen dat bezoekers zonder nadenken de juiste pagina vinden." },
      { label: "Conversie", text: "Wie snel vindt wat hij zoekt, blijft langer en neemt eerder contact op." },
    ],
  },
  {
    slug: "footer",
    title: "Footer",
    description: "De onderbalk met info, links en contact.",
    group: "Structuur",
    wat: "De onderbalk staat onderaan elke pagina en bundelt praktische info: contactgegevens, links, openingstijden en soms je socials. Veel bezoekers scrollen hier bewust naartoe als ze iets zoeken. Een verzorgde footer maakt je site af en helpt mensen verder.",
    impact: [
      { label: "Vertrouwen", text: "Zichtbare contactgegevens en bedrijfsinfo laten zien dat er een echt bedrijf achter de site zit." },
      { label: "Overzicht", text: "Belangrijke links gebundeld onderaan helpen bezoekers snel verder." },
      { label: "Vindbaarheid", text: "Adres en gegevens in de footer maken je beter vindbaar, ook lokaal." },
    ],
  },
  {
    slug: "breadcrumbs",
    title: "Breadcrumbs",
    description: "Kruimelpad-navigatie.",
    group: "Structuur",
    wat: "Een kruimelpad is het rijtje links bovenaan een pagina dat laat zien waar je je bevindt, zoals 'Home > Diensten > Webdesign'. Het helpt bezoekers de weg terug te vinden en snel een stap omhoog te springen. Vooral op grotere sites houdt het mensen op koers.",
    impact: [
      { label: "Overzicht", text: "Bezoekers zien in één oogopslag waar ze zitten binnen je site." },
      { label: "Gebruiksgemak", text: "Met één klik spring je terug naar een vorige laag, zonder zoeken." },
      { label: "Vindbaarheid", text: "Een duidelijke paginastructuur helpt ook zoekmachines je site beter te begrijpen." },
    ],
  },
  {
    slug: "logobalk",
    title: "Logobalk",
    description: "Logo's van klanten of partners.",
    group: "Structuur",
    wat: "Een logobalk toont de logo's van klanten of partners waarmee je hebt gewerkt. Bekende of vertrouwde namen geven nieuwe bezoekers meteen het gevoel dat ze bij je in goede handen zijn. Het is bewijs zonder woorden.",
    impact: [
      { label: "Vertrouwen", text: "Logo's van eerdere klanten laten zien dat anderen je al vertrouwden." },
      { label: "Geloofwaardigheid", text: "Herkenbare namen geven je verhaal direct meer gewicht." },
      { label: "Uitstraling", text: "Een nette rij logo's onderstreept dat je serieus werk levert." },
    ],
  },

  {
    slug: "hero",
    title: "Hero",
    description: "De eerste indruk bovenaan de pagina.",
    group: "Boven de vouw",
    wat: "Het hero-blok is het grote vlak bovenaan je homepagina: vaak een pakkende kop, een korte boodschap en een knop. Dit is je eerste indruk en bepaalt of iemand blijft of wegklikt. Een scherpe boodschap hier maakt direct duidelijk wat je doet en voor wie.",
    impact: [
      { label: "Eerste indruk", text: "In een paar seconden weet de bezoeker of hij bij jou aan het juiste adres is." },
      { label: "Conversie", text: "Een duidelijke boodschap met knop zet bezoekers meteen aan tot de volgende stap." },
      { label: "Uitstraling", text: "Een sterk beeld bovenaan zet direct de toon voor je hele merk." },
    ],
  },
  {
    slug: "cta",
    title: "Call-to-action",
    description: "Knoppen die tot actie aanzetten.",
    group: "Boven de vouw",
    wat: "Een call-to-action is de knop of zin die bezoekers tot actie aanzet, zoals 'Vraag een offerte aan' of 'Plan een gesprek'. De juiste tekst en plek bepalen of iemand de stap zet of twijfelt. Zonder duidelijke CTA weten mensen niet wat je van ze verwacht.",
    impact: [
      { label: "Conversie", text: "Een heldere knop op het juiste moment verandert kijkers in aanvragen." },
      { label: "Duidelijkheid", text: "Bezoekers weten precies welke stap ze kunnen zetten en wat dat oplevert." },
      { label: "Gebruiksgemak", text: "Goed geplaatste knoppen maken contact opnemen zo laagdrempelig mogelijk." },
    ],
  },
  {
    slug: "carousel",
    title: "Carousel",
    description: "Schuivende sliders en galerijen.",
    group: "Boven de vouw",
    wat: "Een carousel is een schuivende slider waarmee je meerdere beelden of items in dezelfde ruimte toont. Goed ingezet houdt het een pagina compact en levendig zonder dat het rommelig wordt. Maar overdaad leidt af, dus de juiste dosering is alles.",
    impact: [
      { label: "Overzicht", text: "Je toont meerdere voorbeelden of producten zonder dat de pagina eindeloos lang wordt." },
      { label: "Uitstraling", text: "Subtiele beweging maakt een pagina levendig en eigentijds." },
      { label: "Gebruiksgemak", text: "Bezoekers bladeren in hun eigen tempo door wat je laat zien." },
    ],
  },
  {
    slug: "statistieken",
    title: "Statistieken",
    description: "Cijfers, tellers en kerngetallen.",
    group: "Boven de vouw",
    wat: "Een statistiekenblok toont kerngetallen zoals jaren ervaring, afgeronde projecten of tevreden klanten. Concrete cijfers maken je verhaal tastbaar en geloofwaardig in één oogopslag. Mits eerlijk en relevant gekozen, zeggen ze meer dan een lange tekst.",
    impact: [
      { label: "Geloofwaardigheid", text: "Concrete cijfers maken je ervaring en resultaten in één oogopslag tastbaar." },
      { label: "Vertrouwen", text: "Heldere kerngetallen geven bezoekers houvast dat je weet wat je doet." },
      { label: "Overzicht", text: "In een paar getallen vertel je je verhaal zonder dat iemand veel hoeft te lezen." },
    ],
  },

  {
    slug: "diensten",
    title: "Diensten",
    description: "Je aanbod presenteren.",
    group: "Pagina's & content",
    wat: "De dienstensectie maakt duidelijk wat je precies aanbiedt en voor wie. Helder omschreven diensten zorgen dat de juiste mensen zich aangesproken voelen en de rest niet voor verrassingen komt te staan. Goed gekozen woorden hier trekken de klanten aan die bij je passen.",
    impact: [
      { label: "Duidelijkheid", text: "Bezoekers zien in één oogopslag of jij doet wat zij nodig hebben." },
      { label: "Overzicht", text: "Je aanbod overzichtelijk gebundeld voorkomt dat mensen iets over het hoofd zien." },
      { label: "Conversie", text: "Wie zich herkent in je aanbod, zet eerder de stap naar contact." },
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    description: "Werk en cases tonen.",
    group: "Pagina's & content",
    wat: "Je portfolio toont eerder werk en cases, zodat mensen zien wat je echt kunt in plaats van wat je beweert. Goede voorbeelden laten je stijl en niveau spreken voor zich. De juiste selectie trekt precies de klanten aan die je zoekt.",
    impact: [
      { label: "Geloofwaardigheid", text: "Echt werk laat zien wat je kunt, overtuigender dan welke belofte ook." },
      { label: "Uitstraling", text: "Sterke cases tonen meteen je stijl en kwaliteitsniveau." },
      { label: "Conversie", text: "Wie iets ziet dat past bij wat hij zoekt, neemt sneller contact op." },
    ],
  },
  {
    slug: "blog",
    title: "Blog",
    description: "Artikeloverzichten en kaarten.",
    group: "Pagina's & content",
    wat: "Een blogoverzicht bundelt je artikelen en laat zien dat je actief bent en verstand van zaken hebt. Het geeft je ruimte om vragen van klanten te beantwoorden en helpt je beter gevonden worden. Een nette indeling zorgt dat mensen blijven lezen.",
    impact: [
      { label: "Vindbaarheid", text: "Artikelen over onderwerpen die jouw klanten zoeken, helpen je hoger in Google te komen." },
      { label: "Geloofwaardigheid", text: "Door kennis te delen laat je zien dat je weet waar je het over hebt." },
      { label: "Overzicht", text: "Een heldere indeling helpt lezers snel het artikel te vinden dat ze zoeken." },
    ],
  },
  {
    slug: "team",
    title: "Team",
    description: "De mensen achter je bedrijf.",
    group: "Pagina's & content",
    wat: "De teamsectie laat de mensen achter je bedrijf zien, met naam en gezicht. Dat maakt je benaderbaar en laat voelen met wie iemand straks samenwerkt. Mensen doen nu eenmaal liever zaken met mensen dan met een logo.",
    impact: [
      { label: "Vertrouwen", text: "Echte gezichten maken duidelijk dat er mensen van vlees en bloed achter de site zitten." },
      { label: "Persoonlijk", text: "Bezoekers krijgen een gevoel bij met wie ze straks contact hebben." },
      { label: "Uitstraling", text: "Een verzorgde teampagina laat zien dat je trots bent op wie je bent." },
    ],
  },
  {
    slug: "reviews",
    title: "Reviews",
    description: "Klantbeoordelingen tonen.",
    group: "Pagina's & content",
    wat: "Klantbeoordelingen laten anderen vertellen hoe goed je werk is, en dat overtuigt vaak meer dan je eigen woorden. Echte reviews met naam en gezicht nemen twijfel weg bij wie je nog niet kent. Het is het verschil tussen 'mooi verhaal' en 'dit werkt echt'.",
    impact: [
      { label: "Vertrouwen", text: "Ervaringen van anderen geven nieuwe bezoekers het laatste zetje om voor jou te kiezen." },
      { label: "Geloofwaardigheid", text: "Echte namen en foto's maken de lovende woorden meteen geloofwaardiger." },
      { label: "Conversie", text: "Bewijs van tevreden klanten haalt twijfel weg vlak voor iemand contact opneemt." },
    ],
  },
  {
    slug: "prijzen",
    title: "Prijzen",
    description: "Pakketten en prijstabellen.",
    group: "Pagina's & content",
    wat: "Een prijzenoverzicht of pakkettentabel laat zien wat mensen voor hun geld krijgen. Duidelijkheid over prijs schept vertrouwen en voorkomt dat mensen afhaken omdat ze het niet durven vragen. De juiste opzet stuurt bezoekers naar het pakket dat bij hen past.",
    impact: [
      { label: "Duidelijkheid", text: "Bezoekers zien meteen wat iets kost en wat ze ervoor krijgen, zonder te hoeven mailen." },
      { label: "Vertrouwen", text: "Open zijn over prijzen geeft het gevoel dat je niets te verbergen hebt." },
      { label: "Conversie", text: "Een goed opgebouwde tabel helpt mensen kiezen en sneller beslissen." },
    ],
  },
  {
    slug: "faq",
    title: "FAQ",
    description: "Veelgestelde vragen.",
    group: "Pagina's & content",
    wat: "Een veelgestelde-vragen-blok beantwoordt de twijfels die mensen tegenhouden, nog voordat ze hoeven te mailen. Het neemt onzekerheid weg en scheelt jou tijd aan dezelfde vragen. Goede vragen kiezen is hier belangrijker dan veel vragen.",
    impact: [
      { label: "Vertrouwen", text: "Eerlijke antwoorden op lastige vragen laten zien dat je weet waar je het over hebt." },
      { label: "Gebruiksgemak", text: "Mensen vinden zelf antwoord en hoeven niet te wachten op een reactie." },
      { label: "Conversie", text: "Door twijfels weg te nemen houd je mensen op je site in plaats van dat ze afhaken." },
    ],
  },

  {
    slug: "contact",
    title: "Contact",
    description: "Contactsecties en formulieren.",
    group: "Componenten",
    wat: "De contactsectie en het formulier zijn waar interesse omslaat in een gesprek. Hoe makkelijker je het maakt om contact op te nemen, hoe meer mensen het doen. Een kort formulier en zichtbare gegevens nemen drempels weg.",
    impact: [
      { label: "Conversie", text: "Een eenvoudig formulier zorgt dat meer bezoekers daadwerkelijk de stap naar contact zetten." },
      { label: "Vertrouwen", text: "Meerdere manieren om contact op te nemen geven mensen het gevoel dat ze je echt kunnen bereiken." },
      { label: "Gebruiksgemak", text: "Korte, duidelijke velden maken het invullen een kwestie van seconden." },
    ],
  },
  {
    slug: "buttons",
    title: "Buttons",
    description: "Knopstijlen en varianten.",
    group: "Componenten",
    wat: "Knoppen zijn de plekken waar bezoekers klikken om iets te doen, en hun stijl bepaalt of ze opvallen. Consistente, herkenbare knoppen sturen mensen vanzelf naar de juiste actie. Onduidelijke knoppen laten mensen twijfelen of er überhaupt iets gebeurt.",
    impact: [
      { label: "Gebruiksgemak", text: "Herkenbare knoppen maken meteen duidelijk waar je kunt klikken." },
      { label: "Conversie", text: "Een knop die opvalt op het juiste moment trekt mensen naar de belangrijkste actie." },
      { label: "Uitstraling", text: "Consistente knopstijlen geven je hele site een verzorgde, doordachte indruk." },
    ],
  },
  {
    slug: "cards",
    title: "Cards",
    description: "Kaart-componenten.",
    group: "Componenten",
    wat: "Kaarten zijn de losse blokjes waarmee je items netjes naast elkaar toont, zoals diensten, cases of artikelen. Ze brengen rust en structuur in een pagina en maken informatie makkelijk te overzien. De juiste opzet zorgt dat alles overzichtelijk en aanklikbaar blijft.",
    impact: [
      { label: "Overzicht", text: "Gelijke blokjes naast elkaar maken een pagina meteen rustig en scanbaar." },
      { label: "Gebruiksgemak", text: "Elke kaart is een duidelijk afgebakend item dat uitnodigt om aan te klikken." },
      { label: "Uitstraling", text: "Nette, consistente kaarten geven je site een opgeruimde uitstraling." },
    ],
  },
  {
    slug: "tabs",
    title: "Tabs",
    description: "Tabbladen.",
    group: "Componenten",
    wat: "Tabbladen laten je veel informatie in dezelfde ruimte tonen, waarbij de bezoeker zelf kiest wat hij ziet. Zo houd je een pagina compact zonder informatie weg te laten. Handig als je verschillende doelgroepen of opties naast elkaar wilt aanbieden.",
    impact: [
      { label: "Overzicht", text: "Veel informatie blijft behapbaar doordat bezoekers alleen zien wat ze nodig hebben." },
      { label: "Gebruiksgemak", text: "Met één klik wissel je van onderwerp, zonder eindeloos te scrollen." },
      { label: "Snelheid", text: "Mensen vinden sneller wat voor hen relevant is, zonder de rest door te hoeven." },
    ],
  },
  {
    slug: "paginering",
    title: "Paginering",
    description: "Bladeren door meerdere pagina's.",
    group: "Componenten",
    wat: "Paginering laat bezoekers door meerdere pagina's bladeren, bijvoorbeeld bij veel artikelen of producten. Het houdt elke pagina licht en overzichtelijk in plaats van een eindeloze lijst. Duidelijke knoppen zorgen dat mensen niet de weg kwijtraken.",
    impact: [
      { label: "Overzicht", text: "Resultaten in hapklare pagina's verdeeld voorkomen een overweldigende lijst." },
      { label: "Snelheid", text: "Kortere pagina's laden vlotter dan één lange lijst met alles tegelijk." },
      { label: "Gebruiksgemak", text: "Duidelijke bladerknoppen houden bezoekers grip op waar ze zijn." },
    ],
  },
  {
    slug: "popup",
    title: "Popup",
    description: "Pop-ups en modals.",
    group: "Componenten",
    wat: "Een pop-up of modal is een venster dat over de pagina verschijnt om aandacht te vragen, bijvoorbeeld voor een aanbieding of melding. Op het juiste moment ingezet werkt het, maar te vroeg of te vaak werkt het juist tegen je. De timing en dosering maken het verschil.",
    impact: [
      { label: "Conversie", text: "Een goed getimede pop-up zet bezoekers op het juiste moment aan tot actie." },
      { label: "Aandacht", text: "Belangrijke boodschappen krijgen even alle focus, zonder dat ze tussen de rest verdwijnen." },
      { label: "Gebruiksgemak", text: "Een makkelijk te sluiten venster respecteert bezoekers die gewoon verder willen." },
    ],
  },
  {
    slug: "cookiebanner",
    title: "Cookiebanner",
    description: "Toestemming voor cookies.",
    group: "Componenten",
    wat: "De cookiebanner vraagt bezoekers om toestemming voor het bijhouden van gegevens. Het hoort er wettelijk gewoon bij, maar de manier waarop je het vraagt zegt iets over je. Een nette, niet-opdringerige banner respecteert je bezoeker en je merk.",
    impact: [
      { label: "Vertrouwen", text: "Netjes om toestemming vragen laat zien dat je zorgvuldig met gegevens omgaat." },
      { label: "Toegankelijkheid", text: "Duidelijke keuzes zorgen dat iedereen makkelijk kan beslissen wat hij wil." },
      { label: "Uitstraling", text: "Een banner in je eigen stijl voelt verzorgd in plaats van als een storend blok." },
    ],
  },
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
