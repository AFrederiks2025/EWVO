import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";
import { ScalingUpWorksheet } from "@/components/sections/scaling-up-worksheet";

export const metadata: Metadata = {
  title: "Scaling Up — Groeiplan",
  description:
    "Interactief Scaling Up-werkblad: vul alle tools in voor Mensen, Strategie, Uitvoering en Cash.",
  alternates: { canonical: "/scaling-up" },
  // Intern werkblad — niet door zoekmachines laten indexeren.
  robots: { index: false, follow: false },
};

export default function ScalingUpPage() {
  return (
    <>
      <PageHeader
        eyebrow="Scaling Up"
        title="Ons groeiplan volgens Scaling Up"
        description="Zo denken we strategisch mee — met onszelf én met onze klanten. Vul per pijler (Mensen, Strategie, Uitvoering, Cash) alle vragen in. Je antwoorden blijven bewaard in deze browser."
      />
      <Section>
        <Container>
          <ScalingUpWorksheet />
          <p className="mt-12 text-xs text-muted-foreground">
            Tools gebaseerd op de Scaling Up Growth Tools (Rockefeller Habits
            2.0) — © Gazelles. Zie ScalingUp.com. Hier als invulbare werkversie.
          </p>
        </Container>
      </Section>
    </>
  );
}
