import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  MousePointerClick,
  Sparkles,
  Target,
} from "lucide-react";
import { siteConfig, primaryCta } from "@/lib/site";
import { MegaMenu } from "@/components/voorbeeld/mega-menu";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { voorbeelden } from "@/lib/voorbeelden";
import { onderdeelPreviews } from "@/components/voorbeeld/preview/onderdelen";

export const metadata: Metadata = {
  title: "Voorbeeld-landingspagina",
  description:
    "Een voorbeeld van een landingspagina door EWVO: één pagina, één doel, meer aanvragen.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://voorbeeld.ewvo.nl" },
};

const voordelen = [
  {
    icon: Target,
    title: "Focus op één doel",
    text: "Geen menu vol keuzes en geen omwegen. Alles op de pagina leidt naar de actie die telt.",
  },
  {
    icon: Sparkles,
    title: "Heldere boodschap",
    text: "In één oogopslag duidelijk wat je aanbiedt en waarom het de moeite waard is.",
  },
  {
    icon: BarChart3,
    title: "Meetbaar & datagedreven",
    text: "Elke klik en aanmelding is meetbaar, zodat je je marketing en campagnes kunt bijsturen.",
  },
  {
    icon: MousePointerClick,
    title: "Snel te lanceren",
    text: "Ideaal voor een actie, dienst of event: live in dagen, niet in maanden.",
  },
];

export default function VoorbeeldLandingsPage() {
  return (
    <>
      {/* Mega-menu als header — het navigatie-voorbeeld, meteen zichtbaar */}
      <MegaMenu />

      {/* Hero */}
      <section className="brand-glow border-b border-border">
        <Container className="flex flex-col items-center py-20 text-center sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            Een voorbeeld van EWVO
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Eén pagina. Eén doel.{" "}
            <span className="text-brand">Meer aanvragen.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Dit is een voorbeeld van een landingspagina die EWVO maakt. Geen druk
            menu, geen afleiding — alles werkt naar één duidelijke actie toe.
            Precies wat een goede landingspagina doet.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCta.href} size="lg">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href="/" size="lg" variant="outline">
              Ontdek EWVO
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Start met samenstellen */}
      <Section className="border-b border-border">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-brand/30 bg-brand-muted/50 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Nieuw
              </span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Stel je eigen website samen
              </h2>
              <p className="mt-2 max-w-md text-muted-foreground">
                Kies per onderdeel een variant en zie in een live preview meteen
                hoe je pagina eruitziet.
              </p>
            </div>
            <a
              href="https://voorbeeld.ewvo.nl/samenstellen"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Start met samenstellen
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </Section>

      {/* Wat is dit? */}
      <Section>
        <Container className="max-w-3xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Wat is dit?"
              title="Een landingspagina met één taak"
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Een landingspagina is een losse pagina met één doel: de bezoeker
                tot actie aanzetten. Een aanmelding, een aanvraag, een download
                of een gesprek. Door alle afleiding weg te laten en de boodschap
                scherp te houden, zet zo&apos;n pagina veel meer bezoekers om in
                leads dan een gewone website-pagina.
              </p>
              <p>
                Deze pagina is een <strong className="text-foreground">voorbeeld</strong>.
                Zo laten we zien hoe focus, heldere copy en een sterke
                call-to-action samenwerken — en hoe je er meteen data mee
                verzamelt om je marketing slimmer te maken.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Waarom het werkt */}
      <Section className="bg-muted/40">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Waarom het werkt"
              title="Vier dingen die een landingspagina sterk maken"
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {voordelen.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-muted text-brand">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Voorbeelden per onderdeel */}
      <Section className="bg-muted/40">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Onderdelen"
              title="Bekijk de voorbeelden per onderdeel"
              description="Elk onderdeel staat op z'n eigen pagina. Klik door en zie hoe het eruit kan zien."
            />
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {voorbeelden.map((v) => (
              <a
                key={v.slug}
                href={`https://${v.slug}.ewvo.nl`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-brand/50 hover:shadow-md"
              >
                {/* Mini-weergave van het onderdeel zelf */}
                <div className="flex h-40 items-center justify-center overflow-hidden border-b border-border bg-muted/30 p-4">
                  {onderdeelPreviews[v.slug]?.()}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/80">
                    Dit is een
                  </p>
                  <h3 className="mt-0.5 font-semibold transition-colors group-hover:text-brand">
                    {v.title}
                  </h3>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">
                    {v.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand">
                    Meer voorbeelden
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Slot-CTA */}
      <Section>
        <Container>
          <div className="brand-glow mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 text-center sm:p-14">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Wil je zo&apos;n pagina voor jouw actie of event?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Of het nu gaat om aanmeldingen voor een event, een nieuwe dienst of
              een campagne — EWVO denkt mee over de strategie en zet de eerste
              opzet voor je neer.
            </p>
            <ButtonLink href={primaryCta.href} size="lg" className="mt-8">
              {primaryCta.label}
              <ArrowRight className="ml-1 h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Mini-footer */}
      <footer className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            Voorbeeldpagina van {siteConfig.name}. Voorheen{" "}
            {siteConfig.formerName}.
          </p>
          <Link href="/" className="hover:text-foreground">
            www.ewvo.nl
          </Link>
        </Container>
      </footer>
    </>
  );
}
