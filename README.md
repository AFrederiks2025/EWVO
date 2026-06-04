# EWVO

De gecombineerde website van **EWVO** (voorheen *Een Website van Ons*). Gebouwd
met Next.js (App Router) en een optionele **Sanity CMS**-koppeling.

## Lokaal starten

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> Zonder Sanity-koppeling draait de site automatisch op de lokale
> voorbeeldcontent in `lib/content/*`. Alles werkt dus direct.

## Sanity CMS koppelen

De site schakelt automatisch over op Sanity zodra de env-variabelen zijn gezet.

1. **Maak een gratis project** op [sanity.io](https://sanity.io) (of via de CLI:
   `npx sanity@latest login`).
2. **Kopieer `.env.example` naar `.env.local`** en vul je gegevens in:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=<jouw-project-id>
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
   SANITY_REVALIDATE_SECRET=<zelf-verzinnen>
   ```
3. **Zet de huidige content in Sanity** (eenmalig):
   ```bash
   npx sanity@latest exec sanity/seed.ts --with-user-token
   ```
4. **Open de editor** op [http://localhost:3000/studio](http://localhost:3000/studio)
   en beheer diensten, team, cases, blog en site-instellingen.
5. **CORS:** voeg in Sanity (Manage → API → CORS origins) je URL's toe
   (`http://localhost:3000` en je productie-URL).
6. **Live updates:** stel een webhook in naar
   `POST /api/revalidate?secret=<SANITY_REVALIDATE_SECRET>` zodat gepubliceerde
   wijzigingen direct verschijnen.

## Structuur

| Map | Inhoud |
|-----|--------|
| `app/(site)/` | Publieke pagina's (header/footer) |
| `app/studio/` | Sanity Studio (`/studio`, schermvullend) |
| `app/api/` | Contactformulier + revalidatie-webhook |
| `components/` | UI-, layout- en sectiecomponenten |
| `lib/cms.ts` | Data-laag: Sanity óf lokale fallback |
| `lib/content/` | Lokale seed-/voorbeeldcontent |
| `sanity/` | Schema's, client, queries, seed-script |

## Scripts

```bash
npm run dev     # ontwikkelserver
npm run build   # productie-build
npm run start   # productie-server (na build)
npm run lint    # ESLint
```

## Deployen

Aanbevolen: [Vercel](https://vercel.com/new). Zet daar dezelfde env-variabelen,
koppel `www.ewvo.nl` als hoofd­domein en `eenwebsitevanons.nl` als extra domein
(de redirects staan al in `next.config.ts` en `proxy.ts`).

Zie [`MERGE-PLAN.md`](./MERGE-PLAN.md) voor het volledige plan en de openstaande
`TODO`-punten.
