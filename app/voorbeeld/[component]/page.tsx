import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Hammer } from "lucide-react";
import { voorbeelden, getVoorbeeld } from "@/lib/voorbeelden";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";

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
    description: v.description,
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
          <span className="rounded-full border border-brand/30 bg-brand-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
            Voorbeeldpagina
          </span>
        </Container>
      </header>

      <section className="brand-glow">
        <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
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
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            {v.description}
          </p>
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm text-muted-foreground">
            <Hammer className="h-4 w-4 text-brand" />
            Binnenkort vind je hier voorbeelden van {v.title.toLowerCase()}.
          </div>
        </Container>
      </section>
    </>
  );
}
