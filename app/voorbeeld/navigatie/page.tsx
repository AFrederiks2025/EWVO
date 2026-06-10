import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { MegaMenu } from "@/components/voorbeeld/mega-menu";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Navigatie — voorbeeld",
  description: "Een voorbeeld van een mega-menu navigatie in EWVO-stijl.",
  robots: { index: false, follow: false },
};

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

      {/* Uitleg */}
      <section className="brand-glow">
        <Container className="py-16 text-center sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Voorbeeld · onderdeel
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Navigatie
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Een mega-menu dat al je diensten overzichtelijk groepeert. Beweeg met
            je muis over{" "}
            <strong className="text-foreground">&quot;Wat we doen&quot;</strong>{" "}
            in de balk hierboven — of tik erop — om het te openen.
          </p>
        </Container>
      </section>
    </>
  );
}
