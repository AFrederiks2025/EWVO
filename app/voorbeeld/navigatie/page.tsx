import type { Metadata } from "next";
import { ArrowLeft, Check } from "lucide-react";
import { MegaMenu } from "@/components/voorbeeld/mega-menu";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { getVoorbeeld } from "@/lib/voorbeelden";

export const metadata: Metadata = {
  title: "Navigatie — voorbeeld",
  description: "Een voorbeeld van een mega-menu navigatie in EWVO-stijl.",
  robots: { index: false, follow: false },
};

const v = getVoorbeeld("navigatie");

export default function NavigatieVoorbeeldPage() {
  return (
    <>
      {/* Voorbeeld-ribbon */}
      <div className="bg-foreground text-background">
        <Container className="flex items-center justify-between py-2 text-xs">
          <a
            href="https://voorbeeld.ewvo.nl"
            className="inline-flex items-center gap-1.5 opacity-80 hover:opacity-100"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Terug naar het overzicht
          </a>
          <span className="font-semibold uppercase tracking-wide opacity-70">
            Voorbeeldpagina · navigatie
          </span>
        </Container>
      </div>

      {/* Het mega-menu (de demo) */}
      <MegaMenu />

      {/* Intro + demo-hint */}
      <section className="brand-glow border-b border-border">
        <Container className="py-16 text-center sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Voorbeeld · onderdeel
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Navigatie
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Een mega-menu dat al je onderdelen overzichtelijk groepeert. Beweeg
            met je muis over{" "}
            <strong className="text-foreground">&quot;Onderdelen&quot;</strong>{" "}
            in de balk hierboven — of tik erop — om het te openen.
          </p>
        </Container>
      </section>

      {/* Wat is het + meerwaarde */}
      <Section>
        <Container className="max-w-4xl">
          {v?.wat && (
            <FadeIn>
              <SectionHeading
                eyebrow="Wat is het?"
                title="Waarom goede navigatie telt"
              />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {v.wat}
              </p>
            </FadeIn>
          )}

          {v?.impact && v.impact.length > 0 && (
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
