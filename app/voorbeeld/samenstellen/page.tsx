import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Samensteller } from "@/components/voorbeeld/samensteller";

export const metadata: Metadata = {
  title: "Stel je website samen — voorbeeld",
  description:
    "Kies per onderdeel een variant en zie live hoe je pagina eruit komt te zien.",
  robots: { index: false, follow: false },
};

export default function SamenstellenPage() {
  return (
    <>
      <header className="border-b border-border">
        <Container className="flex items-center justify-between py-4">
          <a
            href="https://voorbeeld.ewvo.nl"
            className="flex items-center gap-2 font-semibold"
          >
            <Logo className="h-8 w-8 rounded-lg" />
            <span>EWVO</span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://voorbeeld.ewvo.nl"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Overzicht
            </a>
            <ThemeToggle />
          </div>
        </Container>
      </header>

      <Section>
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Samensteller
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Stel je website samen
            </h1>
            <p className="mt-3 text-muted-foreground">
              Loop de onderdelen langs, kies per stuk een variant en zie rechts
              meteen hoe je pagina eruitziet.
            </p>
          </div>
          <div className="mt-10">
            <Samensteller />
          </div>
        </Container>
      </Section>
    </>
  );
}
