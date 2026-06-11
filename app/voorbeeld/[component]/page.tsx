import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { voorbeelden, getVoorbeeld } from "@/lib/voorbeelden";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/layout/logo";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { FadeIn } from "@/components/motion/fade-in";
import { OnderdeelVoorbeelden } from "@/components/voorbeeld/preview/onderdeel-voorbeelden";

type Params = { params: Promise<{ component: string }> };

export function generateStaticParams() {
  // 'navigatie' heeft een eigen statische route (het mega-menu-voorbeeld).
  return voorbeelden
    .filter((v) => v.slug !== "navigatie")
    .map((v) => ({ component: v.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { component } = await params;
  const v = getVoorbeeld(component);
  if (!v) return {};
  return {
    title: `${v.title} — voorbeeld`,
    description: v.wat ?? v.description,
    robots: { index: false, follow: false },
  };
}

export default async function VoorbeeldComponentPage({ params }: Params) {
  const { component } = await params;
  const v = getVoorbeeld(component);
  if (!v) notFound();

  return (
    <>
      <header className="border-b border-border">
        <Container className="flex items-center justify-between py-4">
          <a
            href="https://voorbeeld.ewvo.nl"
            className="flex items-center gap-2 font-semibold"
          >
            <Logo className="h-8 w-8 rounded-lg" />
            <span>{siteConfig.name}</span>
          </a>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-brand/30 bg-brand-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
              Voorbeeldpagina
            </span>
            <ThemeToggle />
          </div>
        </Container>
      </header>

      {/* Kop van het onderdeel */}
      <section className="brand-glow border-b border-border">
        <Container className="py-16 text-center sm:py-20">
          <a
            href="https://voorbeeld.ewvo.nl"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar het overzicht
          </a>
          <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-brand">
            Voorbeeld · onderdeel
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {v.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {v.description}
          </p>
        </Container>
      </section>

      {/* Voorbeelden van dit onderdeel */}
      <Section>
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Voorbeelden"
              title={`Zo kan een ${v.title.toLowerCase()} eruitzien`}
            />
          </FadeIn>
          <div className="mt-10">
            <OnderdeelVoorbeelden slug={v.slug} />
          </div>
        </Container>
      </Section>

      {/* Wat is het + meerwaarde */}
      <Section className="bg-muted/40">
        <Container className="max-w-4xl">
          {v.wat && (
            <FadeIn>
              <SectionHeading
                eyebrow="Wat is het?"
                title={`Waarom een goede ${v.title.toLowerCase()} telt`}
              />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {v.wat}
              </p>
            </FadeIn>
          )}

          {v.impact && v.impact.length > 0 && (
            <div className="mt-14">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
                Waarom de juiste keuze impact heeft
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {v.impact.map((it) => (
                  <div
                    key={it.label}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-muted text-brand">
                      <Check className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold">{it.label}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {it.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </Container>
      </Section>
    </>
  );
}
