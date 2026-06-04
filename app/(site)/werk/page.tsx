import type { Metadata } from "next";
import { getCases } from "@/lib/cms";
import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";
import { CaseCard } from "@/components/sections/case-card";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Cases & Opdrachtgevers — Ons Werk",
  description:
    "Websites voor coaching, zorg, hospitality, fitness en retail. Bekijk ons werk en de resultaten.",
  alternates: { canonical: "/werk" },
};

export default async function WerkPage() {
  const cases = await getCases();

  return (
    <>
      <PageHeader
        eyebrow="Ons werk"
        title="Resultaten waar we trots op zijn"
        description="Van lokale ondernemers tot groeiende organisaties — we helpen ze zorgeloos online groeien."
      />
      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((study, i) => (
              <CaseCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </Container>
      </Section>
      <CtaBanner />
    </>
  );
}
