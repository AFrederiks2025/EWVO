# Merge-plan: EWVO.nl × Eenwebsitevanons.nl → één website

*Samenvoeging van twee merken van hetzelfde bedrijf tot één strategische website op www.ewvo.nl, gebouwd in Next.js, met maximaal hergebruik van bestaande, echte content.*

---

## 0. Leeswijzer & status van dit document

Dit plan is **volledig opgesteld op basis van de meegeleverde input** (inventaris van beide sites, IA-, content-, SEO-, tech- en brand-ontwerponderdelen). De doelrepository (`C:/Users/frede/Documents/GitHub/EWVO`) is op dit moment **leeg** (alleen `.git`, geen broncode of sitemap van beide sites). Dat heeft één belangrijke consequentie die het hele plan kleurt:

> **META-WAARSCHUWING — dit plan is nog niet tegen bronmateriaal verifieerbaar.** Alle feitelijke claims (placeholdernaam "Stratosphere", fictief adres, `/blog/post`-404, exacte blog-slugs, klantnamen, slug `privacy-verklaring`, oprichtingsjaar) berusten uitsluitend op de aangeleverde tekstuele input en zijn **niet** gecontroleerd tegen een echte crawl of de live sitemaps van beide domeinen. Een opleverbaar redirect-/migratieplan vereist een **feitelijke crawl-export** (Screaming Frog/Sitebulb + Google Search Console-pagina's) van beide live domeinen. Zolang die ontbreekt, zijn de redirect-tabel (§7) en de feiten-tabel (§2A) **aannames, geen opleverbare artefacten**. Dit wordt opgelost in **Fase 0 als feitelijke nulmeting** (zie §9), die expliciet vóór het finaliseren van de redirect-tabel plaatsvindt.

Twee besluiten zijn **harde go/no-go-gates** vóór de bouw (zie §2B). Zolang die niet door de klant getekend zijn, is dit plan intern niet eenduidig en mag er geen code worden geschreven die erop voortbouwt.

---

## 1. Managementsamenvatting

- **EWVO.nl wordt de enige live site.** Eenwebsitevanons.nl gaat er volledig in op, met permanente 301-redirects per pagina, zodat de in twaalf jaar opgebouwde domeinautoriteit, backlinks en klantherkenning behouden blijven.
- **Echt vervangt nep.** De huidige ewvo.nl draait op template-/placeholdercontent ("Stratosphere"-naam, fictief team Alex Jansen e.a., fictief Amsterdams adres, lege blogdetailpagina). Die wordt vervangen door het échte team, de échte cases en échte contactgegevens van Eenwebsitevanons.nl.
- **Eén positionering die twee werelden verenigt:** persoonlijk en laagdrempelig als een lokaal webbureau, strategisch en compleet als een digital agency. Tagline: *"Zorgeloos online groeien. Digitale ecosystemen die meegroeien met jouw bedrijf."*
- **Diensten gededupliceerd van 4 + 7 naar 5 heldere pijlers** met eigen detailpagina's; AI & Automatisering blijft het unieke onderscheidende aanbod, de visuele diensten (video, fotografie, content, promotie) worden behouden in plaats van verloren.
- **Eén kennisarchief en werkend blog.** De 8 echte artikelen (2017–2026, inclusief het sterke revisie-artikel van Anton Frederiks) worden de basis; het SPA-probleem van ewvo.nl (alle posts naar één lege `/blog/post`, 404 bij directe fetch) wordt opgelost met server-rendered detailpagina's per slug.
- **Moderne, beheerbare technische basis:** Next.js 15 (App Router) op Vercel met Sanity als headless CMS, zodat de klant zelf teksten, blog, diensten en cases kan beheren.
- **Doorlooptijd circa 5–7 weken** in 6 fases, met een gestructureerd SEO- en redirectplan om tijdelijk rankingverlies te minimaliseren.
- **Twee go/no-go-gates blokkeren de bouw** (routetaal + oprichtingsjaar) en een **feitelijke crawl-nulmeting** blokkeert het finaliseren van de redirect-tabel. Deze drie blokkers zijn geëxpliciteerd, niet als "aandachtspunt" verstopt.

---

## 2. Uitgangspunten & keuzes

| # | Uitgangspunt | Keuze | Reden |
|---|--------------|-------|-------|
| 1 | Hoofddomein | **www.ewvo.nl** wordt de enige canonieke host | Sterkste merk- en dienstenframe; eenwebsitevanons.nl gaat erin op |
| 2 | Leidend frame | EWVO-structuur (strategische positionering, dienstenmodel met prijspakketten, 4-staps werkwijze) | Beste informatie-architectuur en conversiestructuur |
| 3 | Leidende content | Echte content van Eenwebsitevanons.nl (team, cases, blog, contactgegevens) | Authenticiteit en E-E-A-T; placeholder-content verdwijnt volledig |
| 4 | Eén team | Het echte 6-koppige team; fictieve EWVO-namen vervallen | Eén bedrijf, geen dubbele teams |
| 5 | Tone of voice | Warm + deskundig: enthousiasme van Eenwebsitevanons.nl × autoriteit van EWVO | Spreekt zowel MKB als publieke sector aan |
| 6 | CMS | Sanity (headless), Studio embedded op `/studio` | Klant wil zelf teksten beheren; actieve blog met meerdere auteurs |
| 7 | Hosting | Vercel | Eersteklas Next.js App Router-ondersteuning, ISR, preview-deploys |
| 8 | Routetaal | **Consequent Nederlandse routes** (`/diensten`, `/over-ons`, `/werk`); EN-routes (`/services`, `/about`, `/cases`, `/terms`) bestaan **uitsluitend als 301-bron**, nooit in metadata, sitemap of interne links | Eén bron van waarheid; zie **GATE-A** (§2B) |
| 9 | Domeineigendom | eenwebsitevanons.nl permanent behouden | Redirects en linkwaarde permanent actief houden |
| 10 | Historie | Oprichtingsjaar als bewijslast inzetten; foutieve template-jaartallen corrigeren | "Voorheen Een Website van Ons" als merkcontinuïteit; jaartal zelf is **GATE-A** |

### 2A. Feiten-tabel (één bronlijst, door klant af te tekenen)

Alle harde getallen en kernfeiten staan hier centraal, zodat copy, schema (Organization), IA en redirect-tabel **niet uiteenlopende aantallen claimen**. De klant tekent deze tabel af; daarna is dit de enige bron van waarheid.

| Feit | Aangenomen waarde (uit input) | Status | Gebruikt in |
|------|-------------------------------|--------|-------------|
| Oprichtingsjaar | **2014** (positionering) vs **2018** (placeholder-about) — **conflict** | ⛔ GATE-A, nog niet getekend | Copy /over-ons, Organization-schema, historie-verhaal |
| Routetaal | **NL** (`/diensten`, `/over-ons`, `/werk`) | ⛔ GATE-A, nog niet getekend | Sitemap, canonicals, interne links, redirect-doelen |
| Teamleden EWVO (echt) | **6**: Anton Frederiks, Ozcan Akgun, Thomas Bakker, Ardjan de Boo, Coen den Boer, Yorick van Schijndel | ✅ consistent in input | Teampagina, Organization-schema |
| Teamleden EWVO-placeholder (te droppen) | **4**: Alex Jansen, Sarah de Vries, Michael Bakker, Emma Visser | ✅ consistent in input (4 namen genoemd) | Drop-lijst, QA-check |
| Echte cases/opdrachtgevers | **10** genoemd in `/klanten`-analyse (Brommerwinkel, Krachtcoach, Kerk Vol Kracht, Be You Ti Ful, Approach of Life, Bnb De Oude Bank, RelatieZorg.nu, Opinzicht.nl, StayFitNL, FreerunAcademie); tekst zegt elders "8–10" | ⚠️ aantal harmoniseren (10 namen vs "8–10") | /werk, redirect-tabel cases |
| Echte blogposts (eenwebsitevanons) | **8** (2017–2026) | ✅ consistent | /blog, redirect-tabel blog |
| EWVO-blogposts (placeholder) | **6** (alle → `/blog/post`) | ✅ consistent | Drop-lijst |
| Diensten-consolidatie | **4 (EWVO) + 7 (eenwebsitevanons) → 5 pijlers** | ✅ consistent | /diensten, IA |
| Prijspakketten | **3** bestaand (€2.499 / €4.999 / op aanvraag) + **1 nieuw MKB-instappakket** (zie §6A) | ⚠️ instappakket nog te definiëren | /diensten#pakketten |

> **Let op de "8–10 cases"-discrepantie:** de overlap-analyse noemt expliciet **10 klantnamen**, terwijl andere passages "8–10 echte cases" zeggen. Dit wordt in Fase 0 tegen de live `/klanten`-pagina geverifieerd en als één getal vastgelegd.

### 2B. Go/no-go-gates (blokkerend, vóór elke regel code)

Dit zijn **geen aandachtspunten** maar **onopgeloste tegenstrijdigheden** die de bouw blokkeren. Een review-plan dat tegelijk zegt "de klant moet dit nog kiezen" én "wij gaan uit van X" is intern niet eenduidig zolang de klant niet getekend heeft. Daarom:

**GATE-A — Definitieve routetaal en oprichtingsjaar (vóór elke regel code):**
1. **Routetaal.** Kies definitief **Nederlands**: `/diensten`, `/over-ons`, `/werk`. Zodra getekend, verdwijnen ALLE EN-routes (`/services`, `/about`, `/terms`, `/cases`) uit metadata, canonicals, sitemap en interne links. Ze blijven **uitsluitend als 301-bron** in de redirect-tabel staan. Zo verdwijnt de NL/EN-dubbelzinnigheid uit de bron van waarheid. Dit plan hanteert NL als voorgestelde keuze, maar de bouw start pas na handtekening.
2. **Oprichtingsjaar.** De positionering noemt "sinds 2014"; de placeholder-about noemt 2018. Dit is een **harde go/no-go**: copy, historie-verhaal en Organization-schema kunnen niet worden geschreven zolang dit niet is bevestigd. Geen aanname in productie zonder handtekening.

**GATE-B — Feitelijke crawl-nulmeting (vóór het finaliseren van de redirect-tabel):**
3. Een geverifieerde URL-export van beide live domeinen (zie §9, Fase 0) moet de aangenomen slugs en paden bevestigen vóór de redirect-tabel als CSV wordt opgeleverd. Tot dan is §7 een concept.

> Pas wanneer GATE-A getekend is en GATE-B is uitgevoerd, gaat dit plan van "concept met aannames" naar "opleverbaar". De aannames in dit document zijn als zodanig gemarkeerd.

---

## 3. Huidige situatie (analyse + overlap)

### EWVO.nl — Digitaal Strategie Bureau (live op www.ewvo.nl)
Positioneert zich als high-end strategiebureau ("Digitale Ecosystemen Die Groeien") met een sterk, conversiegericht frame: 4 dienstkaarten, prijspakketten, 4-staps werkwijze, theme-toggle, nieuwsbriefaanmelding. **Probleem:** grotendeels template-/placeholdercontent. De naam "Stratosphere" verschijnt nog op meerdere pagina's, contactgegevens zijn fictief (info@stratosphere.nl, Innovatiestraat 123 Amsterdam), het team is verzonnen (**4 fictieve namen**), klantlogo's (Gemeente Zwolle, Hogeschool Windesheim) zijn onbevestigd, en de blog is niet-functioneel (6 posts linken allemaal naar één lege `/blog/post`, die 404 geeft bij directe fetch — een SPA-indexatieprobleem). Bestaande EWVO-routes `/privacy` en `/terms` zijn leeg/placeholder.

> *Bron-onzekerheid:* bovenstaande feiten (Stratosphere, NAW, `/blog/post`-404, lege juridische routes) komen uit de tekstuele input en zijn **nog niet geverifieerd** tegen een live crawl. Bevestiging volgt in Fase 0.

### Eenwebsitevanons.nl — Een Website van Ons
Toegankelijk MKB-bureau ("Zorgeloos zichtbaar – wij fixen alle online frustratie"). **Sterk punt:** alles is echt. Echt 6-koppig team, ~8–10 echte opdrachtgevers met live links en sectoren, 8 echte blogartikelen met werkende slug-URL's (2017–2026), echte contactgegevens en WhatsApp, en echte juridische pagina's. **Zwakker punt:** anchor-only navigatie (`#diensten`, `#team`), geen prijzen, geen AI-aanbod.

> *Bron-onzekerheid:* de exacte slug `privacy-verklaring`, de 8 blog-slugs en de individuele case-/portfolio-detail-URL's zijn **niet** tegen een live sitemap gecontroleerd. Dit zijn de belangrijkste posten die Fase 0 (GATE-B) moet verifiëren.

### Overlap (kern van de consolidatie)

| Thema | EWVO | Eenwebsitevanons.nl | Beslissing |
|-------|------|---------------------|-----------|
| Branding/Huisstijl | Strategische Branding (uitgewerkt) | Huisstijl (logo, vormgeving) | Samenvoegen → 1 dienst, EWVO leidend |
| Web | Maatwerk Webontwikkeling | Website Realisatie + Webdesign | Samenvoegen → 1 dienst |
| Hosting | Hosting & Beveiliging | Hosting & Beheer | Samenvoegen → 1 dienst |
| AI | AI & Automatisering | — | Behouden (uniek onderscheid) |
| Visuele diensten | — | Video, fotografie, content, promotie | Behouden (bundelen) |
| Team | Fictief (4) | Echt (6) | Echt team leidend, fictief dropt |
| Blog | 6 placeholders, geen URL's | 8 echte posts, eigen slugs | Echt blog leidend |
| Contact | Placeholder | Echt | Echt leidend |
| Portfolio | 5 onbevestigde logo's | ~8–10 echte cases | Echte cases leidend |

---

## 4. Nieuwe merkpositionering (één verhaal)

**EWVO is het Nederlandse digitale bureau dat het MKB én de publieke sector zorgeloos online laat groeien.** We bouwen niet zomaar websites; we bouwen digitale ecosystemen die meegroeien met je bedrijf.

Onder EWVO komen twee complementaire werelden samen: de toegankelijke, mensgerichte aanpak waarmee we als *Een Website van Ons* honderden ondernemers zorgeloos zichtbaar maakten, en de strategische, end-to-end slagkracht van een volwaardig digital agency. Dat geeft een unieke marktpositie: **persoonlijk en laagdrempelig als een lokaal webbureau, strategisch en compleet als een agency.** Veel concurrenten zijn óf goedkoop en oppervlakkig, óf duur en ontoegankelijk — wij zijn beide kanten in één team.

Of je nu je eerste professionele website nodig hebt, een **revisie** van een site die je bedrijf ontgroeid is, of een volledig digitaal ecosysteem met branding, automatisering en hosting: bij EWVO heb je één vast team dat met je meedenkt, van strategie tot beheer. Geen losse diensten en doorverwijzingen, maar één partner die alle online frustratie wegneemt.

- **Tagline:** *Zorgeloos online groeien. Digitale ecosystemen die meegroeien met jouw bedrijf.*
- **Tone of voice:** warm, deskundig en helder. Je-vorm, geen jargon, meedenken in plaats van verkopen. Iets zakelijker voor de publieke sector, geruststellend voor het MKB.
- **Merkcontinuïteit:** "Vanaf 2026 gaat Een Website van Ons verder onder EWVO. Zelfde team, zelfde persoonlijke aanpak, een nog completer aanbod." Vermeld "voorheen Een Website van Ons" zichtbaar op Over ons, in de footer en in de Organization-structured-data.

> **Let op (GATE-A):** in de copy hierboven is bewust géén hard oprichtingsjaar opgenomen ("sinds 20XX"). Het jaartal wordt pas ingevuld na bevestiging (2014 vs 2018). Dezelfde terughoudendheid geldt voor de claim over publieke-sectorklanten (Gemeente Zwolle, Windesheim): die logo's/namen worden alleen gebruikt als ze in Fase 0 als echte opdrachtgevers worden bevestigd (zie §6, drop-tenzij-verifieerbaar).

**Doelgroepsegmenten:** (1) MKB-ondernemers die een complete, persoonlijke partner zoeken; (2) gevestigde ondernemers met een ontgroeide website (revisie-propositie); (3) lokale/sectorspecifieke dienstverleners (coaching, zorg, fitness, hospitality, retail, onderwijs); (4) groeibedrijven die alles bij één bureau willen (pakketten Groei/Enterprise); (5) publieke sector en grotere organisaties.

---

## 5. Samengevoegde sitestructuur & navigatie

**Hoofdnavigatie (6 items):** Home · Diensten · Werk · Over ons · Blog · Contact — plus een vaste CTA "Plan een gratis adviesgesprek".

**Routetaal: Nederlands** (GATE-A). De sitemap hieronder gebruikt uitsluitend NL-routes als bron van waarheid. EN-equivalenten komen alleen voor in de redirect-tabel (§7).

### Sitemap

| Niveau | Pagina | Route | Bron |
|--------|--------|-------|------|
| 1 | Home | `/` | EWVO-frame + echte content |
| 1 | Diensten (overzicht + pakketten) | `/diensten` | Beide |
| 2 | Strategie & Branding | `/diensten/strategie-branding` | EWVO + Huisstijl |
| 2 | Maatwerk Webontwikkeling | `/diensten/webontwikkeling` | EWVO + Realisatie/Webdesign |
| 2 | AI & Automatisering | `/diensten/ai-automatisering` | EWVO (uniek) |
| 2 | Hosting, Beheer & Beveiliging | `/diensten/hosting-beheer` | EWVO + Beheer |
| 2 | Content, Video & Fotografie | `/diensten/content-video` | Eenwebsitevanons.nl |
| 1 | Werk / Cases | `/werk` | Eenwebsitevanons.nl `/klanten` |
| 2 | Case: Brommer Winkel Voorthuizen | `/werk/brommer-winkel-voorthuizen` | Eenwebsitevanons.nl |
| 2 | Case: Krachtcoach | `/werk/krachtcoach` | Eenwebsitevanons.nl (launch-case, zie §6B) |
| 2 | Case: StayFitNL | `/werk/stayfitnl` | Eenwebsitevanons.nl (launch-case, zie §6B) |
| 2 | Case: Approach of Life | `/werk/approach-of-life` | Eenwebsitevanons.nl (launch-case, zie §6B) |
| 2 | Overige cases (backlog) | `/werk/[slug]` | Eenwebsitevanons.nl (na launch, zie §6B) |
| 1 | Over ons (verhaal + werkwijze) | `/over-ons` | EWVO `/about` (herschreven) |
| 2 | Team | `/over-ons/team` | Echt team |
| 1 | Blog (overzicht + filter) | `/blog` | Eenwebsitevanons.nl |
| 2 | Blogartikel (detail) | `/blog/[slug]` | Eenwebsitevanons.nl |
| 1 | Contact | `/contact` | EWVO-formulier + echte gegevens |
| Footer | Privacyverklaring | `/privacy` | Eenwebsitevanons.nl |
| Footer | Algemene voorwaarden | `/algemene-voorwaarden` | Eenwebsitevanons.nl |
| Systeem | Sanity Studio | `/studio` | Nieuw |

> **Routenaamgeving is een besloten gate (GATE-A), geen open noot.** De volledige IA, SEO-metadata, canonicals en interne links gebruiken consequent de Nederlandse routes hierboven. De redirect-tabel (§7) is hierop afgestemd: oude EN-routes (`/services`, `/about`, `/cases`, `/terms`) verschijnen daar uitsluitend als 301-**bron** naar de NL-bestemming. Zolang GATE-A niet is getekend, mag deze sitemap niet in code worden omgezet.

---

## 6. Content-mapping

### Mapping-tabel

| Onderdeel | Bron | Actie | Nieuwe locatie | Toelichting |
|-----------|------|-------|----------------|-------------|
| Hero-slogan "Digitale Ecosystemen Die Groeien" | EWVO | herschrijven | `/` hero | Combineren met "zorgeloos zichtbaar" tot één claim |
| Claim "Zorgeloos zichtbaar" | Eenwebsitevanons.nl | mergen | `/` hero subkop | MKB-toon als ondersteunende boodschap |
| Dienst Strategische Branding (3 deliverables) | EWVO | mergen | `/diensten/strategie-branding` | Leidend; huisstijl/logo toevoegen |
| Dienst Maatwerk Webontwikkeling | EWVO | mergen | `/diensten/webontwikkeling` | Leidend; samen met Realisatie + Webdesign |
| Dienst AI & Automatisering | EWVO | behouden | `/diensten/ai-automatisering` | Uniek onderscheidend aanbod |
| Dienst Hosting & Beveiliging | EWVO | mergen | `/diensten/hosting-beheer` | Met "doorlopend beheer"-accent |
| Website Realisatie | Eenwebsitevanons.nl | mergen | `/diensten/webontwikkeling` | MKB-instaptoon meenemen |
| Webdesign | Eenwebsitevanons.nl | mergen | `/diensten/webontwikkeling` | Visueel-ontwerp-aspect integreren |
| Huisstijl | Eenwebsitevanons.nl | mergen | `/diensten/strategie-branding` | Logo/huisstijl-deliverable |
| Promotie | Eenwebsitevanons.nl | behouden | `/diensten/content-video` | Vult gat in EWVO-aanbod |
| Bedrijfsvideo's | Eenwebsitevanons.nl | behouden | `/diensten/content-video` | Sluit aan op motion/video-team |
| Content Creatie | Eenwebsitevanons.nl | behouden | `/diensten/content-video` | Vult contentgat |
| Prijspakketten (€2.499 / €4.999 / op aanvraag) | EWVO | behouden | `/diensten#pakketten` | Unieke conversie-asset; MKB-instappakket toevoegen (zie §6A) |
| Externe link naar eenwebsitevanons.nl | EWVO | droppen | n.v.t. | Wordt interne MKB-instaproute (verwijst naar nieuw instappakket §6A) |
| "Why Choose Us"-sectie | EWVO | behouden | `/` + `/over-ons` | Aanvullen met "meedenken met ondernemer" |
| Aanpaktekst "creativiteit + techniek" | Eenwebsitevanons.nl | mergen | `/` Why-sectie | Integreren in differentiatieblok |
| Bedrijfsverhaal / missie / 6 kernwaarden | EWVO | herschrijven | `/over-ons` | "Stratosphere" weg, fusieverhaal erin |
| 4-staps werkwijze (Discovery/Strategy/Creation/Growth) | EWVO | behouden | `/over-ons#werkwijze` | Revisie-denken als extra inzicht |
| Ervaringscijfers (15+/10+ jaar) | EWVO | herschrijven | `/over-ons` + home stats | Vervangen door echte, verifieerbare cijfers |
| EWVO-team (Alex Jansen, Sarah de Vries, Michael Bakker, Emma Visser = 4) | EWVO | droppen | n.v.t. | Fictief — volledig verwijderen |
| Echt team (6 namen, zie §2A) | Eenwebsitevanons.nl | behouden | `/over-ons/team` | Enige echte team; koppelen aan blogauteurschap |
| Testimonial Sarah Jansen | EWVO | droppen | n.v.t. | Vermoedelijk placeholder |
| Klantlogo's (Gemeente Zwolle, Windesheim) | EWVO | droppen tenzij verifieerbaar | `/werk` logobalk | Alleen bij aantoonbare samenwerking (Fase 0) |
| Opdrachtgevers/cases (10 namen, zie §2A) | Eenwebsitevanons.nl | behouden | `/werk` | Echte social proof, met live links |
| Blogartikel "Revisie 2026" (Anton Frederiks) | Eenwebsitevanons.nl | behouden | `/blog/brommerwinkel-website-revisie-2026` | Thought-leadership anker, slug behouden |
| Overige 7 blogposts (2017–2023) | Eenwebsitevanons.nl | behouden | `/blog/<slug>` | 301 per artikel; eventueel licht actualiseren |
| EWVO-blogposts (6×) | EWVO | droppen | n.v.t. | Placeholders; titels als ideeën voor nieuw |
| Placeholder-route `/blog/post` | EWVO | droppen | n.v.t. | Vervangen door `/blog/[slug]`; 301 → `/blog` |
| Contactformulier (5 velden) "Laten We Samenwerken" | EWVO | mergen | `/contact` | Structuur behouden, echte gegevens + WhatsApp |
| Placeholder-contactgegevens | EWVO | droppen | n.v.t. | Volledig fictief |
| Echte contactgegevens (+31 6 150 670 38 e.a.) | Eenwebsitevanons.nl | herschrijven | `/contact` + footer | E-mail eventueel migreren naar @ewvo.nl |
| Social media-links (incl. WhatsApp) | Eenwebsitevanons.nl | mergen | Footer site-breed | Eén geconsolideerde set |
| Nieuwsbriefaanmelding | EWVO | behouden | Footer | Koppelen aan echte e-mailtool, AVG-conform |
| Algemene Voorwaarden | Eenwebsitevanons.nl | herschrijven | `/algemene-voorwaarden` | Naam EWVO, KvK/BTW toevoegen |
| Privacy Verklaring | Eenwebsitevanons.nl | herschrijven | `/privacy` | Actualiseren naar EWVO |
| Lege EWVO-routes `/privacy`, `/terms` | EWVO | mergen | `/privacy`, `/algemene-voorwaarden` | Vullen met echte content; `/privacy` blijft zelfde pad maar wás leeg (zie §7) |
| Site-brede CTA's | EWVO | behouden | site-breed | + "Neem contact op" / WhatsApp als laagdrempelig alternatief |
| Theme toggle (licht/donker) | EWVO | behouden | header | Functionele feature, meenemen in designsysteem |

### Overlap-beslissingen (samenvattend)
- **Branding + Huisstijl** → één dienst, EWVO leidend (uitgewerkter), logo-deliverable van Eenwebsitevanons.nl erin.
- **Webontwikkeling + Realisatie + Webdesign** → één dienst; toegankelijke MKB-toon ("samen nadenken over ontwerp, logo, foto, tekst") behouden.
- **Hosting & Beveiliging + Hosting & Beheer** → één dienst.
- **Team:** echt team (6) leidend, fictief team (4) volledig drop.
- **Blog/Contact/Portfolio/Testimonials/Juridisch:** in alle gevallen de echte content van Eenwebsitevanons.nl leidend.

### 6A. Prijsstructuur — compleet, met het nieuwe MKB-/instappakket

De drie bestaande pakketten worden behouden én aangevuld met het nieuwe instappakket dat de externe doorverwijzing vervangt. Zonder dit pakket kan `/diensten#pakketten` niet worden gebouwd zoals de IA belooft. Het instappakket staat **als eerste kolom** in de pricing-tabel. Dit is een conversie-kernpagina, dus de volledige definitie moet vóór livegang vastliggen.

| | **MKB-Start (nieuw)** | **Startup** | **Groei** (populair) | **Enterprise** |
|---|---|---|---|---|
| **Prijs** | **Voorstel: €1.250 eenmalig** — *of fallback "Op aanvraag" (zie noot)* | €2.499 eenmalig | €4.999 eenmalig | Op aanvraag |
| **Voor wie** | Eerste professionele website / kleine ondernemer (voorheen het eenwebsitevanons-segment) | Startende ondernemer met basisbehoefte | Groeiend MKB dat strategie + design wil | Grotere organisatie / publieke sector / volledig ecosysteem |
| **Scope (voorstel)** | Eenvoudige website (tot ~5 pagina's), responsive, basis-SEO, contactformulier, oplevering in vaste sjablonen | Maatwerk-light, meer pagina's, SEO-basis | Maatwerk, branding-component, uitgebreide SEO, content | Volledig maatwerk, AI/automatisering, hosting, doorlopend beheer |
| **Valt eronder** | Webontwikkeling (instap) | Webontwikkeling + branding-light | Strategie & Branding + Webontwikkeling | Alle 5 pijlers |

> **Fallback (verplicht te beslissen door klant):** als de klant geen vaste instapprijs wil tonen, vervangt **"Op aanvraag" met een directe contact-CTA** de prijs in de MKB-Start-kolom. De €1.250 is een **voorstel ter invulling**, geen vastgesteld bedrag — naam, exacte prijs en scope moeten door de klant worden bevestigd (zie gap #10 en de go-live-checklist §12). De pricing-tabel is pas "bouwbaar" zodra deze kolom is ingevuld of expliciet op fallback gezet.

### 6B. Cases/portfolio — launch-scope versus backlog

Het plan claimt ~8–10 echte cases. Om te voorkomen dat `/werk` half-leeg lanceert, wordt expliciet vastgelegd welke cases **volledig uitgewerkt live gaan bij launch** en welke als **backlog na launch** komen. Voor de launch worden **minimaal 4 cases volledig uitgewerkt** (niet alleen Brommer Winkel).

**Launch-cases (volledig uitgewerkt, vóór QA in Fase 5):**
1. **Brommer Winkel Voorthuizen** — `/werk/brommer-winkel-voorthuizen` (gekoppeld aan revisie-blogartikel)
2. **Krachtcoach** — `/werk/krachtcoach` (huisstijl-case)
3. **StayFitNL** — `/werk/stayfitnl` (fitness, webdesign)
4. **Approach of Life** — `/werk/approach-of-life` (coaching/strategie)

**Casesjabloon (verplichte velden per case):**
- Klant + sector
- **Probleem** (de uitdaging)
- **Aanpak** (wat we deden, met revisie-vs-redesign-denken waar relevant)
- **Resultaat** (meetbaar waar mogelijk)
- **Beeld** (voor/na, screenshots, fotografie)
- Live link naar de site + (indien beschikbaar) klantquote/testimonial

**Backlog-cases (na launch, als concrete items met deadline):** Kerk Vol Kracht, Be You Ti Ful, Bnb De Oude Bank, RelatieZorg.nu, Opinzicht.nl, FreerunAcademie. Deze starten bij launch als **kaart met korte omschrijving + live link** in het `/werk`-overzicht (zodat de social proof er staat), maar krijgen hun volledige `/werk/[slug]`-detailpagina ná livegang. Deadline voor minimaal 2 extra uitgewerkte cases: binnen 4 weken na launch (Fase 6-backlog).

> **Eerlijke nuance:** "portfolio van beide sites verwerkt" betekent concreet: EWVO-logo's worden gedropt tenzij verifieerbaar (Fase 0), en van eenwebsitevanons gaan **4 cases volledig** + de rest als overzichtskaart live. De social-proof-laag is daarmee bij launch dunner dan "10 volledige cases", maar wel eerlijk afgebakend.

### Content-gaps (door klant aan te leveren of nieuw te schrijven)
1. Echte "Over ons"-tekst met het fusieverhaal (zonder "Stratosphere", correcte oprichtingshistorie — afhankelijk van GATE-A).
2. Echte cijfers/statistieken (aantal projecten, jaren ervaring, aantal klanten) i.p.v. 15+/10+.
3. Echte testimonials/klantquotes (Brommerwinkel, Krachtcoach, StayFitNL e.a.) — minimaal 1 per launch-case.
4. **4 volledig uitgewerkte casepagina's** (Brommer Winkel + Krachtcoach + StayFitNL + Approach of Life) volgens sjabloon §6B; overige als backlog met deadline.
5. Dienstomschrijvingen in EWVO-stijl voor Promotie, Bedrijfsvideo's en Content Creatie.
6. Volledige juridische bedrijfsgegevens: KvK, BTW, statutaire naam, vestigingsadres.
7. Geverifieerd bezoekadres + Maps-locatie, óf expliciete keuze om geen adres te tonen.
8. Definitief e-mailbeleid: info@eenwebsitevanons.nl behouden, migreren naar @ewvo.nl, of beide.
9. Beslissing welke gedateerde blogtitels (2017–2023) worden ververst en welke nieuwe AI-/ecosysteem-artikelen worden geschreven.
10. **MKB-/instappakket compleet definiëren** (naam, prijs of fallback, scope) — zie §6A.
11. Geverifieerde social-media-profielen (juiste URL's).
12. Echte beeldbank: teamportretten, projectbeelden, evt. klantlogo's.
13. Geconsolideerd designsysteem/stijlgids (kleuren, typografie, componenten, theme toggle).
14. **Team-bios en portretten** voor alle 6 teamleden — zonder deze is de teampagina niet bouwbaar (terecht als gap; pas teampagina afbouwen als dit binnen is).

---

## 7. SEO- & redirect-plan

> **Status van de redirect-tabel:** dit is een **concept op basis van aangenomen URL's** totdat GATE-B (Fase 0-crawl) de echte URL-lijst van beide domeinen heeft bevestigd. De tabel wordt opgeleverd als **CSV/spreadsheet** (niet alleen als markdown), met per gevonden URL met inkomende backlinks een expliciete 1-hop-regel. De volgorde is bewust: **eerst crawlen (Fase 0), dan tabel finaliseren** — niet andersom.

### Domeinstrategie
- **Eén canonieke host: `https://www.ewvo.nl`.** Non-www en http → altijd 301 naar www + https.
- **eenwebsitevanons.nl permanent behouden** (niet laten vervallen) en als extra domein aan het Vercel-project koppelen met **per-pagina 301-redirects**.
- Redirects op **edge/CDN-/hostingniveau**, nooit als client-side JS-redirect — Google moet een echte 301-status zien.
- **Geen redirect-ketens:** elke oude URL gaat in **één hop** naar de eindbestemming.
- **Catch-all naar homepage alleen als laatste vangnet** voor niet-gemapte paden, nooit als primaire strategie (blanket-redirect wordt deels als soft-404 gezien).
- Redirects **permanent** actief houden.
- **Canonicals:** elke pagina self-referencing canonical naar de eigen absolute www-https-URL (`metadataBase = new URL('https://www.ewvo.nl')`). Blog-detailpagina's krijgen een unieke canonical per slug. Filter-/categorie-URL's canonical naar de schone basis-URL.

### Verdeling redirecttype: `next.config` vs `middleware`

Niet "beide zonder verdeling", maar een expliciete keuze per type:

| Redirecttype | Mechanisme | Reden |
|---|---|---|
| Statische 1:1 maps (oude EWVO-routes `/services`→`/diensten`, `/about`→`/over-ons`, `/terms`→`/algemene-voorwaarden`, `/blog/post`→`/blog`; vaste blog-slugs) | **`next.config.ts` `redirects()`** | Sneller, draait op de edge, geen runtime-overhead per request |
| Host-based logica (eenwebsitevanons.nl → www.ewvo.nl), normalisatie (trailing slash + lowercase forceren), dynamische case-/blog-mapping | **`middleware.ts`** | Vereist host-inspectie en/of dynamische padlogica die `next.config` niet kan |

### Normalisatieregel (één canonieke vorm, afgedwongen in middleware)
Eén expliciete regel forceert de canonieke URL-vorm: **lowercase + zonder trailing slash + www + https**. Elke afwijkende variant (hoofdletters, trailing slash, non-www, http) krijgt één 301 naar de canonieke vorm. Dit dekt de in de checklist genoemde trailing-slash- en hoofdletter-varianten als **echte regel**, niet alleen als losse noot.

### 301-redirect-tabel (oud → nieuw) — concept, te bevestigen na GATE-B

**A. eenwebsitevanons.nl → www.ewvo.nl**

| Van (pad) | Naar | Type / noot |
|-----------|------|-------------|
| `/` | `/` | 301 |
| `/klanten` | `/werk` | 301 (portfolio-overzicht geconsolideerd) |
| `/klanten/[case-detail]` *(elke individuele case-/portfolio-detail-URL uit de live site)* | `/werk/[slug]` indien uitgewerkte case bestaat, anders `/werk` | 301 — **per case 1-hop**; exacte oude URL's te bevestigen in Fase 0 (GATE-B) |
| **Oude losse dienst-URL's** → mapping naar de 5 nieuwe pijlers: | | |
| dienst Realisatie | `/diensten/webontwikkeling` | 301 |
| dienst Webdesign | `/diensten/webontwikkeling` | 301 |
| dienst Huisstijl | `/diensten/strategie-branding` | 301 |
| dienst Promotie | `/diensten/content-video` | 301 |
| dienst Bedrijfsvideo's | `/diensten/content-video` | 301 |
| dienst Content Creatie | `/diensten/content-video` | 301 |
| dienst Hosting & Beheer | `/diensten/hosting-beheer` | 301 |
| *(NB: op eenwebsitevanons stonden diensten mogelijk als anchors `/#diensten` i.p.v. losse URL's; indien er wél losse dienst-URL's bestaan, mappen die 1-hop naar de juiste pijler hierboven. Fase 0 bevestigt of dit losse paden of anchors zijn.)* | | |
| `/blog` | `/blog` | 301 |
| `/blog/brommerwinkel-website-revisie-2026` | `/blog/brommerwinkel-website-revisie-2026` | 301 (slug behouden) |
| `/blog/webdesign-trends-2023` | `/blog/webdesign-trends-2023` | 301 |
| `/blog/seo-strategie-2022` | `/blog/seo-strategie-2022` | 301 |
| `/blog/e-commerce-optimalisatie-2021` | `/blog/e-commerce-optimalisatie-2021` | 301 |
| `/blog/social-media-marketing-2020` | `/blog/social-media-marketing-2020` | 301 |
| `/blog/website-beveiliging-2019` | `/blog/website-beveiliging-2019` | 301 |
| `/blog/content-marketing-2018` | `/blog/content-marketing-2018` | 301 |
| `/blog/online-ondernemen-2017` | `/blog/online-ondernemen-2017` | 301 |
| `/algemene-voorwaarden` | `/algemene-voorwaarden` | 301 |
| `/privacy-verklaring` | `/privacy` | 301 — *slug `privacy-verklaring` is een **aanname**; exacte oude slug bevestigen in Fase 0* |
| `/*` (overig, niet-gemapt) | `/` | 301 (catch-all, laatste vangnet) |

**B. www.ewvo.nl (oude EWVO-routes) → nieuwe NL-structuur**

| Van (pad) | Naar | Type / noot |
|-----------|------|-------------|
| `/blog/post` | `/blog` | 301 (verwijdert SPA-placeholder) |
| `/services` | `/diensten` | 301 (NL-route consolidatie, GATE-A) |
| `/about` | `/over-ons` | 301 |
| `/terms` | `/algemene-voorwaarden` | 301 |
| `/privacy` | `/privacy` | **Geen pad-wijziging**, maar de oude pagina was **leeg/placeholder**; de nieuwe `/privacy` krijgt echte content. Expliciet vermeld omdat de bestaande route hergebruikt wordt (geen redirect nodig, wél contentvervanging + QA-check dat de oude lege versie niet geïndexeerd blijft). |

**C. Host-normalisatie**

| Van | Naar | Type |
|-----|------|------|
| ewvo.nl (non-www / http) `/*` | `https://www.ewvo.nl/*` | 301 |
| eenwebsitevanons.nl (non-www / http) `/*` | `https://www.ewvo.nl/...` (per pad) | 301 |
| Elke variant met hoofdletters / trailing slash | canonieke lowercase, geen trailing slash | 301 (normalisatie-middleware, zie boven) |

### Anchor-afhandeling — UX/interne-links, GEEN redirect-regels

De oude `/#diensten`, `/#team`, `/#contact` van eenwebsitevanons.nl zijn **geen aparte redirects**. Een `#hash`-fragment wordt door de browser nooit naar de server gestuurd; een server-side 301 op een hash-pad is technisch niet uitvoerbaar. De redirect treft alleen het pad (`/`), en de hash gaat sowieso verloren. Voor SEO maakt dit niet uit (een hash wordt niet als losse URL geïndexeerd).

Daarom worden deze **niet** als 301-regel in de tabel opgenomen, maar als **interne-link/UX-aandachtspunt** behandeld:
- Externe links of bookmarks naar `eenwebsitevanons.nl/#diensten` landen via de `/`-redirect op `www.ewvo.nl/` (de hash valt weg). Dit is acceptabel en vereist geen serveractie.
- **Interne navigatie** die vroeger naar `#diensten`/`#team`/`#contact` wees, wordt in de nieuwe site herschreven naar de echte routes (`/diensten`, `/over-ons/team`, `/contact`).
- Geen actie nodig op SEO-niveau; puur een UX-/interne-link-migratie.

### Technische SEO-checklist
- [ ] **Fase 0-crawl uitgevoerd (GATE-B)** en redirect-tabel als CSV gefinaliseerd vóór bouw §7.
- [ ] **sitemap.xml** via `app/sitemap.ts`, uitsluitend canonieke 200-URL's (NL-routes), met `lastModified` per blogpost. Geen redirectende of oude URL's, geen `/blog/post`.
- [ ] **robots.txt** via `app/robots.ts`: `Allow: /`, blokkeer `/api` en preview-routes, verwijs naar de sitemap. Op eenwebsitevanons.nl **geen** blokkerende robots.txt, zodat Google de 301's kan volgen.
- [ ] **Organization/ProfessionalService schema** (root layout, JSON-LD): naam EWVO, url, logo, contactPoint, `sameAs` socials, en een veld dat "Een Website van Ons" als voormalige handelsnaam vermeldt. Aantallen (team = 6) consistent met feiten-tabel §2A.
- [ ] **BlogPosting/Article schema** per artikel. **BreadcrumbList** op diepere pagina's. **Service-schema** op dienstpagina's.
- [ ] **Alle placeholders verwijderd** vóór livegang: "Stratosphere", fictieve NAW, fictief team (4 namen), onbevestigde klantlogo's — **geautomatiseerd afgedwongen in CI** (zie §12).
- [ ] **Google Search Console:** beide properties verifiëren → **Change of Address-tool** → nieuwe sitemap indienen → dekkingsrapport monitoren.
- [ ] **Backlink-behoud:** backlinks inventariseren (GSC + Ahrefs/Semrush), elke pagina met inkomende links een 1-hop 301 geven, belangrijkste verwijzers proactief vragen de link te updaten.
- [ ] **Redirect-mapping testen:** pre-launch crawl van beide oude domeinen — elke URL → 301 (geen 302/404/keten) naar een 200-URL. Trailing slashes, hoofdletters en hash-URL's expliciet conform de normalisatieregel.
- [ ] **Taal:** `<html lang="nl">`, NL-metadata en -schema. Géén EN-routes in zichtbare URL's/interne links (GATE-A).
- [ ] **Core Web Vitals:** SSR/SSG met echte, individueel crawlbare URL's per blogpost (lost SPA-404 op).
- [ ] **Monitoring** 4–8 weken na livegang: rankings, impressies, 404-rapporten, redirect-status; 404-alerting instellen.

### Metadata (titles & descriptions) — uitsluitend NL-routes

| Route | Title | Description (kort) |
|-------|-------|--------------------|
| `/` | EWVO \| Digitaal Strategiebureau voor Groeiende Bedrijven | Digitale ecosystemen die groeien: strategie, webdesign, branding, AI en hosting. Voorheen Een Website van Ons. |
| `/diensten` | Diensten \| Webdesign, Branding, AI & Hosting \| EWVO | Complete digitale oplossingen onder één dak. Bekijk diensten en pakketten. |
| `/over-ons` | Over EWVO \| Strategisch Digitaal Team | Eén team van strategen, designers en developers. Werkwijze en de mensen achter EWVO. |
| `/werk` | Cases & Opdrachtgevers \| Ons Werk \| EWVO | Websites voor coaching, zorg, hospitality, fitness en retail, w.o. Brommer Winkel Voorthuizen. |
| `/blog` | Blog \| Inzichten over Webdesign, SEO & Online Groei \| EWVO | Praktische tips en trends voor het MKB. |
| `/blog/brommerwinkel-website-revisie-2026` | 7 jaar bouwen. Tijd voor revisie. \| EWVO Blog | Waarom een revisie vaak beter is dan een redesign. Door Anton Frederiks. |
| `/contact` | Contact \| Plan een Gratis Adviesgesprek \| EWVO | Bel +31 6 150 670 38, mail of vul het formulier in. |

> Alle metadata gebruikt NL-routes. De eerder in de input voorkomende EN-paden (`/services`, `/about`, `/cases`) zijn hier bewust verwijderd conform GATE-A.

### Risico's (SEO)
- Tijdelijk rankingverlies (enkele weken tot ~3 mnd) → mitigatie: 1-op-1 mapping, Change of Address, sitemap, interne links direct naar canonieke URL's.
- Verlies merkbekendheid "Een Website van Ons" → domein behouden, "voorheen…" vermelden, oude naam tijdelijk in content.
- Soft-404 bij blanket-redirect → per-pagina mapping.
- Redirect-ketens/loops → 1-hop testen met crawler.
- Indexatie van placeholder-content → alles vervangen vóór livegang (CI-check §12).
- SPA-indexatieprobleem → SSR/SSG met echte slugs.
- Cannibalisatie/duplicate content → consolideren tot één sterke pagina per onderwerp.
- NAP-inconsistentie → één set echte gegevens overal identiek.
- **Onvolledige redirect-tabel door ontbrekende crawl** → GATE-B (Fase 0) afdwingen vóór finalisatie.

---

## 8. Technische aanpak in Next.js

### Stack
- **Next.js 15** (App Router, React 19, Server Components als standaard) — **TypeScript** (strict)
- **Tailwind CSS v4** + CSS-variabelen voor design tokens; **shadcn/ui** (Radix + Tailwind); **next-themes**; **lucide-react**
- **Sanity** (headless CMS) + **next-sanity** + **GROQ** + **@portabletext/react**
- **Zod** + **React Hook Form**; **Resend** (transactionele e-mail)
- **Vercel Analytics + Speed Insights**; lichte consent-banner (of Cookiebot) voor AVG
- **ESLint + Prettier + Husky/lint-staged**; **pnpm**

### Mappenstructuur

```
ewvo/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                     # Homepage
│   │   ├── diensten/
│   │   │   ├── page.tsx                 # Diensten-overzicht + pakketten
│   │   │   └── [slug]/page.tsx          # Dienstdetailpagina (uit Sanity)
│   │   ├── over-ons/
│   │   │   ├── page.tsx                 # Verhaal / missie / werkwijze
│   │   │   └── team/page.tsx            # Teampagina
│   │   ├── werk/
│   │   │   ├── page.tsx                 # Cases/opdrachtgevers-overzicht
│   │   │   └── [slug]/page.tsx          # Case-detail (uit Sanity)
│   │   ├── blog/
│   │   │   ├── page.tsx                 # Blog-overzicht + categoriefilter
│   │   │   └── [slug]/page.tsx          # Blogartikel-detail (uit Sanity)
│   │   ├── contact/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── algemene-voorwaarden/page.tsx
│   ├── api/
│   │   ├── contact/route.ts             # POST (Resend + Zod + honeypot)
│   │   ├── newsletter/route.ts
│   │   └── revalidate/route.ts          # Sanity webhook -> on-demand ISR
│   ├── studio/[[...tool]]/page.tsx      # Embedded Sanity Studio (/studio)
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── ui/                              # shadcn/ui primitives
│   ├── layout/                          # header, footer, main-nav, mobile-nav, theme-toggle
│   ├── sections/                        # hero, services-grid, why-choose-us, pricing-table,
│   │                                    #   process-steps, team-grid, testimonial, case-grid,
│   │                                    #   blog-card, cta-banner, newsletter-signup
│   ├── forms/                           # contact-form, newsletter-form
│   ├── blog/                            # portable-text, category-filter
│   └── seo/json-ld.tsx
├── sanity/
│   ├── schemaTypes/                     # zie velddefinities hieronder
│   ├── lib/                             # client.ts, queries.ts (GROQ), image.ts
│   └── env.ts
├── lib/                                 # utils.ts, metadata.ts, validations.ts (Zod)
├── public/
├── sanity.config.ts
├── next.config.ts                       # statische 1:1 redirects (zie §7)
├── tailwind.config.ts
├── middleware.ts                        # host-based + normalisatie-redirects (zie §7)
└── package.json
```

### Content-model (Sanity) — concrete velddefinities

Headless CMS (**Sanity**) als primair contentmodel, met optionele MDX-fallback alleen voor zeldzame technische statische pagina's. Motivatie: de klant wil zelf teksten beheren en er is een actieve blog met meerdere auteurs. Sanity biedt een Nederlandstalige Portable-Text-editor, gestructureerde content, embedded Studio op `/studio`, GROQ en on-demand ISR via webhooks; gekozen boven Contentful vanwege lagere kosten, code-gedefinieerde schema's (in Git) en de embedded Studio.

Minimale velddefinities per schema (i.p.v. alleen schemanamen):

- **`post`** (blog): `title`, `slug` (uniek, behoud oude slugs), `excerpt`, `body` (PortableText), `author` (ref → `teamMember`/`author`), `category` (ref → `category`), `publishedAt`, `updatedAt`, `coverImage`, `seoTitle`, `seoDescription`, `relatedService` (ref), `relatedCase` (ref).
- **`service`** (dienst): `title`, `slug` (één van de 5 pijler-slugs), `summary`, `deliverables` (array of string), `body` (PortableText), `icon`, `ctaLabel`, `ctaHref`, `order`, `seoTitle`, `seoDescription`.
- **`caseStudy`** (werk): `clientName`, `slug`, `sector`, `liveUrl`, `problem` (text), `approach` (PortableText), `result` (text), `images` (array, voor/na), `testimonial` (ref → `testimonial`), `relatedService` (ref), `featured` (boolean, voor homepage-highlights), `isLaunchCase` (boolean, §6B), `seoTitle`, `seoDescription`.
- **`teamMember`**: `name`, `role`, `bio` (text — **gap #14**), `portrait` (image — **gap #14**), `socials` (array), `order`, `isAuthor` (boolean, koppelt aan blog).
- **`siteSettings`** (singleton): `companyName`, `formerName` ("Een Website van Ons"), `kvk`, `btw`, `legalName`, `visitAddress` (optioneel), `email`, `phone`, `whatsapp`, `openingHours`, `socials` (array), `foundingYear` (**GATE-A**), `navigation`, `footerText`.
- *(Aanvullend, optioneel maar aanbevolen):* `testimonial` (`quote`, `author`, `clientCompany`, `caseRef`), `pricingPlan` (`name`, `price` of `onRequest` boolean, `audience`, `scope`, `features[]`, `popular` boolean, `order` — dekt §6A incl. MKB-Start), `author`, `category`.

### ISR-revalidatie + webhook-flow (revalidateTag per content-type)

- **`/api/revalidate/route.ts`** valideert een **webhook-secret** (header `x-sanity-webhook-secret`, vergeleken met env `SANITY_REVALIDATE_SECRET`); zonder geldige secret → 401.
- Sanity stuurt bij publicatie het document-`_type` mee. De route mapt `_type` → **`revalidateTag`** per content-type:
  - `post` → `revalidateTag('post')` + `revalidateTag('blog-index')`
  - `service` → `revalidateTag('service')` + `revalidateTag('diensten-index')`
  - `caseStudy` → `revalidateTag('case')` + `revalidateTag('werk-index')`
  - `teamMember` → `revalidateTag('team')`
  - `siteSettings` → `revalidateTag('site-settings')` (raakt header/footer/contact site-breed)
- Fetches in de queries (`sanity/lib/queries.ts`) taggen hun data met dezelfde tags (`{ next: { tags: ['post', ...] } }`), zodat alleen de relevante content herbouwt — niet de hele site.
- Aparte webhook-secrets en datasets voor **Preview** vs **Production** (Vercel env vars).

### Integraties
- **Contactformulier:** `/api/contact` met Zod + Resend naar info@ewvo.nl; honeypot + lichte rate limiting (Upstash Redis of in-memory); optioneel auto-reply.
- **Nieuwsbrief:** `/api/newsletter` gekoppeld aan Mailchimp/Brevo/Resend Audiences (double opt-in i.v.m. AVG).
- **Analytics:** Vercel Analytics + Speed Insights; optioneel Plausible/GA4.
- **Cookie-consent:** lichte eigen banner (of Cookiebot), alleen bij tracking-cookies.
- **WhatsApp:** directe `wa.me/31615067038`-link in header/footer en op contact.
- **Google Maps:** lazy-loaded embed of statische link (alleen bij geverifieerd adres).
- **Sanity webhook → `/api/revalidate`** voor on-demand ISR (zie revalidateTag-flow boven).
- **301-redirects** verdeeld over `next.config.ts` (statische 1:1) en `middleware.ts` (host-based + normalisatie) — zie §7.

### Hosting
**Vercel** (edge/serverless functions, automatische ISR/CDN-caching, preview-deployments per branch, ingebouwde Analytics/Speed Insights). Productiedomein www.ewvo.nl; eenwebsitevanons.nl als extra domein met permanente 301. Sanity Studio embedded op `/studio`; Sanity host de dataset zelf. Resend voor e-mail. Environment variables (Sanity-tokens, Resend-key, nieuwsbrief-API, `SANITY_REVALIDATE_SECRET`) in Vercel, met aparte waarden voor Preview en Production.

---

## 9. Migratie-stappenplan & tijdlijn

### Stappen
0. **Fase 0 — feitelijke nulmeting (GATE-B) & inventarisatie.** Greenfield repo. **Crawl beide live domeinen met Screaming Frog/Sitebulb** en exporteer de **echte URL-lijst**; haal de **GSC-pagina's** (geïndexeerde URL's) en het **backlink-rapport** (GSC + Ahrefs/Semrush) op. Vervang de aangenomen slugs in §7 door de geverifieerde URL's. Voeg per URL met inkomende backlinks een expliciete 1-hop-regel toe. **Lever de redirect-tabel als CSV/spreadsheet.** Verzamel echte bedrijfsgegevens (KvK, BTW, adres, e-mail, telefoon, openingstijden). **Laat GATE-A tekenen** (routetaal + oprichtingsjaar). Pas hierna is de redirect-tabel opleverbaar.
1. **Project-scaffold** — `create-next-app` (TS, App Router, Tailwind v4, ESLint), pnpm, Prettier, Husky. shadcn/ui + next-themes. Design tokens, basis-layout. Push naar GitHub, Vercel koppelen. **CI-grep-check toevoegen** (zie §12).
2. **Sanity opzetten** — Project + dataset, schema's met concrete velden (§8), embedded Studio op `/studio`, next-sanity client + GROQ + image-builder, read-token en **webhook-secret** in env.
3. **Content modelleren & migreren** — Overlappende content consolideren. Bestaande artikelen + **4 launch-cases** invoeren in Sanity. Echte contactgegevens in siteSettings. Klant krijgt toegang + uitleg.
4. **Pagina's & componenten bouwen** — Alle routes (home, diensten + detail, over-ons + team, werk + detail, blog + detail, contact, privacy, voorwaarden). SSG + ISR met `generateStaticParams`, `generateMetadata` en `revalidateTag`.
5. **Integraties** — Contactformulier, nieuwsbrief, revalidate-webhook, Analytics/Speed Insights, consent, WhatsApp/Maps, JSON-LD, sitemap.ts, robots.ts.
6. **SEO, redirects & toegankelijkheid** — Geverifieerde 301-redirect-map (CSV) implementeren: statische 1:1 in `next.config`, host-based + normalisatie in `middleware`. Metadata, OG-images, canonicals, nl-locale. Lighthouse/axe-checks.
7. **QA & staging-review** — Volledige test op Vercel preview: formulieren, e-mailbezorging, CMS-publicatie + revalidatie, responsive/dark mode, gebroken links, redirect-tests. **Go-live-checklist §12 afvinken.** Klantakkoord op content. Juridische review privacy + voorwaarden.
8. **Go-live** — www.ewvo.nl als productiedomein, DNS bijwerken (lage TTL vooraf), eenwebsitevanons.nl koppelen met domain-level 301. Productie-env vars. Sanity-webhook naar productie. Sitemap + Change of Address in GSC.
9. **Nazorg & monitoring** — GSC op crawlfouten/redirect-dekking, 404's afvangen, Analytics/Speed Insights. Overdracht + CMS-handleiding. Backlog: **minimaal 2 extra uitgewerkte casepagina's binnen 4 weken** (§6B), testimonials, A/B op CTA's.

### Tijdlijn

| Fase | Duur | Opleverpunten |
|------|------|---------------|
| 0 — Discovery & nulmeting (GATE-A + GATE-B) | Week 1 (3–4 dgn) | **Getekende GATE-A**, **crawl-export + CSV-redirect-map**, bevestigde inventaris, echte bedrijfsgegevens, content-consolidatieplan, goedgekeurde sitemap + design tokens, ingevulde feiten-tabel §2A |
| 1 — Scaffold & designsysteem | Week 1–2 (4–5 dgn) | Next.js-project op GitHub, Vercel preview live, header/footer/theme-toggle, basis-componentenbibliotheek, **CI-placeholder-check** |
| 2 — Sanity & contentmodel | Week 2 (3–4 dgn) | Schema's met velddefinities, Studio op `/studio`, GROQ-queries + tags, geconsolideerde content ingevoerd |
| 3 — Pagina's & componenten | Week 3–4 (7–9 dgn) | Alle routes gebouwd + gekoppeld aan Sanity, **4 launch-cases volledig**, responsive + dark mode |
| 4 — Integraties & SEO | Week 4–5 (4–5 dgn) | Contactformulier + e-mail, nieuwsbrief, analytics/consent, revalidate-webhook (revalidateTag), 301's (verdeeld), sitemap/robots, JSON-LD, OG-images |
| 5 — QA, klantreview & go-live | Week 5–6 (4–5 dgn) | Volledige QA, **go-live-checklist §12 groen**, klantakkoord, DNS-omzetting, domeinkoppeling + 301, productie-env, GSC-indiening — **site live** |
| 6 — Nazorg | Week 6–7 (2–3 dgn actief) | Monitoring, klant-overdracht + CMS-handleiding, 2 extra cases, kleine optimalisaties |

**Totale doorlooptijd: circa 5–7 weken** (mits GATE-A tijdig getekend; vertraging op GATE-A schuift de hele planning op).

---

## 10. Risico's & aandachtspunten

| Risico | Impact | Mitigatie |
|--------|--------|-----------|
| **GATE-A niet getekend (routetaal/jaar)** | Bouw kan niet starten; bron van waarheid dubbelzinnig | Blokkerende gate; geen code vóór handtekening |
| **Redirect-tabel zonder crawl (GATE-B)** | Onvolledige/foutieve 301's, linkwaardeverlies | Fase 0-crawl vóór finalisatie; CSV-oplevering |
| SEO-/rankingverlies bij domeinconsolidatie | Tijdelijke dip in leads | 1-op-1 301-mapping, GSC Change of Address, sitemap, interne links naar canonieke URL's |
| Verlies linkwaarde bij blanket-redirect (soft-404) | Diepe linkwaarde weg | Per-pagina mapping; catch-all alleen als vangnet |
| Redirect-ketens/loops | Verdunde linkwaarde, traag crawlen | Elke redirect in 1 hop; testen met crawler |
| Placeholder-content lekt naar productie | E-E-A-T- en juridisch risico | Centraliseren in Sanity siteSettings + **CI-grep-check (§12)** + QA-checklist |
| Onvolledige cases bij launch | Dunne social proof | 4 launch-cases volledig (§6B), rest als overzichtskaart + backlog |
| Onvolledige pricing | `/diensten#pakketten` niet bouwbaar | MKB-instappakket vooraf definiëren of fallback "Op aanvraag" (§6A) |
| Ontbrekende team-bios/portretten | Teampagina niet bouwbaar | Gap #14; teampagina pas afbouwen als materiaal binnen is |
| Dubbele/tegenstrijdige content | Cannibalisatie, inconsistente positionering | Contentconsolidatie als aparte stap; één bron van waarheid in Sanity |
| Verlies merkbekendheid "Een Website van Ons" | Daling op brand-queries | Domein behouden, "voorheen…" vermelden, oude naam tijdelijk in content |
| CMS-adoptie door niet-technische klant | Studio rommelig gebruikt | Doordachte schema's met previews/validatie, NL-handleiding, overdrachtssessie |
| Spam op contactformulier | Bot-inzendingen | Honeypot, server-side Zod, rate limiting; evt. hCaptcha |
| AVG/cookie-consent | Compliance-risico | Privacyvriendelijke analytics, consent alleen bij tracking, juridische review |
| DNS-/MX-overgang | Downtime/e-mailverstoring | TTL vooraf verlagen, alleen web-records wijzigen, MX ongemoeid laten, go-live buiten piekuren |
| Scope creep / vendor lock-in | Budget/planning | Content exporteerbaar (Sanity export), scope-afbakening, backlog |

---

## 11. Volgende stap — wat we van jou nodig hebben om te starten met bouwen

Om Fase 0 af te ronden en direct te kunnen bouwen, hebben we het volgende van je nodig. **De eerste twee zijn blokkerende gates (GATE-A).**

1. **⛔ GATE-A — Definitieve routetaal:** akkoord op Nederlandse routes (`/diensten`, `/over-ons`, `/werk`). Daarna verdwijnen alle EN-routes uit bron van waarheid.
2. **⛔ GATE-A — Definitief oprichtingsjaar:** "sinds 2014" of 2018? Geen copy/schema vóór bevestiging.
3. **Bedrijfsgegevens (juridisch):** statutaire naam, KvK-nummer, BTW-nummer en (eventueel) vestigingsadres.
4. **Definitieve contactkeuzes:** e-mailbeleid (behouden / migreren naar **info@ewvo.nl** / beide), wel/geen zichtbaar bezoekadres + Maps, actieve social-media-URL's.
5. **Kerncijfers:** echte cijfers (aantal projecten, klanten, jaren ervaring) ter vervanging van 15+/10+.
6. **Akkoord op positionering en tagline** ("Zorgeloos online groeien…").
7. **Team-input (gap #14):** korte bio's en professionele portretten van alle 6 teamleden (Anton Frederiks, Ozcan Akgun, Thomas Bakker, Ardjan de Boo, Coen den Boer, Yorick van Schijndel).
8. **Cases & testimonials:** per **launch-case** (Brommer Winkel + Krachtcoach + StayFitNL + Approach of Life) probleem/aanpak/resultaat + beeld, en minimaal 1 klantquote per case.
9. **Klantlogo's verifiëren:** zijn Gemeente Zwolle en Hogeschool Windesheim échte opdrachtgevers (mogen we het logo tonen)? Zo niet, dan vervallen ze.
10. **Prijsbeslissing (gap #10):** akkoord op de drie bestaande pakketten én **definitie van het MKB-instappakket** (naam, prijs of fallback "Op aanvraag", scope) — zie §6A.
11. **Blogbeslissing:** welke gedateerde artikelen (2017–2023) actualiseren, welke nieuwe onderwerpen (AI, ecosystemen) schrijven.
12. **Toegangen:** registrar/DNS van beide domeinen, GitHub, GSC + Vercel + Sanity. **Crawl-toegang** voor de Fase 0-nulmeting (GATE-B).
13. **Merkmateriaal:** logo's (vector), huisstijlkleuren/typografie, eventueel bestaande beeldbank.

> Zodra **punten 1–4, 7, 12 en 13** binnen zijn — inclusief getekende GATE-A en uitgevoerde Fase 0-crawl (GATE-B) — kunnen we Fase 0 afsluiten en starten met scaffolding (Fase 1). De overige punten kunnen parallel tijdens Fase 2–3 worden aangeleverd, mits ze uiterlijk vóór de QA-fase (Fase 5) compleet zijn.

---

## 12. Go-live-checklist (blokkerend) + geautomatiseerde CI-check

Geen livegang zolang één placeholder ("Stratosphere", fictief adres, fictief team, onbevestigde klantlogo's) nog in de productie-build zit. Deze checklist koppelt de blokkerende afhankelijkheden uit §11 (punten 1–4, 10, 12) aan de fasen en mag niet van handmatige QA afhangen.

**Geautomatiseerde CI-check (faalt de build):**
- Een grep-/lint-stap in CI (en in Husky pre-commit) die de build **laat falen** bij voorkomen van: `Stratosphere`, `stratosphere.nl`, `Innovatiestraat`, `Alex Jansen`, `Sarah de Vries`, `Michael Bakker`, `Emma Visser`, `+31 6 12345678`, `info@stratosphere.nl`, en het placeholder-pad `/blog/post`. Voorbeeld-stap:
  ```bash
  # ci-placeholder-check: exit 1 bij verboden tekst in src/, content/, sanity/
  ! grep -rniE "stratosphere|innovatiestraat|alex jansen|sarah de vries|michael bakker|emma visser|12345678|/blog/post" ./app ./components ./sanity ./lib
  ```
- Optioneel: een script dat de Sanity-dataset checkt op dezelfde verboden waarden vóór een productie-deploy.

**Handmatige go/no-go-poort (vóór DNS-omzetting):**
- [ ] GATE-A getekend (routetaal NL + oprichtingsjaar) — §2B
- [ ] GATE-B uitgevoerd: crawl-export aanwezig, redirect-tabel als CSV gefinaliseerd — §7/§9
- [ ] CI-placeholder-check groen (geen verboden tekst in build én dataset)
- [ ] Feiten-tabel §2A door klant afgetekend (team = 6, cases-aantal geharmoniseerd, etc.)
- [ ] MKB-instappakket gedefinieerd of op fallback "Op aanvraag" gezet — §6A
- [ ] 4 launch-cases volledig uitgewerkt; overige als overzichtskaart — §6B
- [ ] Team-bios + portretten van alle 6 leden aanwezig — gap #14
- [ ] Klantlogo's geverifieerd of verwijderd (Gemeente Zwolle / Windesheim)
- [ ] Juridische pagina's (privacy + voorwaarden) met KvK/BTW, juridisch nagelopen
- [ ] Redirect-tests: elke oude URL → 1-hop 301 → 200 (geen 302/404/keten), normalisatie (lowercase/trailing slash) actief
- [ ] `/privacy` (oud leeg) gevuld met echte content; oude lege versie niet geïndexeerd
- [ ] GSC Change of Address voorbereid; sitemap klaar voor indiening

Pas wanneer zowel de geautomatiseerde check groen is als alle handmatige punten zijn afgevinkt, vindt de DNS-omzetting (go-live) plaats.

---

Belangrijkste wijzigingen t.o.v. het origineel: nieuwe leeswijzer met META-waarschuwing over onverifieerbaarheid (§0); feiten-tabel + expliciete go/no-go-gates GATE-A/GATE-B (§2A/§2B); routetaal en oprichtingsjaar van "noot" naar harde gate; aangevulde redirect-tabel met oude dienst-URL's → 5 pijlers, case-detail-URL's, normalisatieregel (trailing slash/lowercase), `/privacy`-vermelding, en bron-onzekerheid expliciet gemarkeerd (§7); anchor-`#hash`-regels uit de redirect-tabel gehaald en herclassificeerd als UX/interne links (§7); verdeling `next.config` vs `middleware` per redirecttype (§7/§8); compleet gemaakte prijsstructuur met MKB-Start-instappakket + fallback (§6A); cases gesplitst in 4 launch-cases vs backlog met sjabloon (§6B); team-bios/portretten als blokkerende gap #14; Sanity-schema's met concrete velddefinities + revalidateTag-webhook-flow (§8); Fase 0 herschikt tot feitelijke crawl-nulmeting vóór redirect-finalisatie (§9); go-live-checklist met geautomatiseerde CI-grep-check (§12); harde getallen geharmoniseerd (team 6, placeholder 4, cases 8–10-discrepantie gemarkeerd).
