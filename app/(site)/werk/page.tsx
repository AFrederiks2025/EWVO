import type { Metadata } from "next";
import { getCases } from "@/lib/cms";
import { testimonials } from "@/lib/content/testimonials";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";
import { ClientDirectory } from "@/components/sections/client-directory";
import { CaseCard } from "@/components/sections/case-card";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Klanten & cases — Ons werk",
  description:
    "Een greep uit de opdrachtgevers die met EWVO online groeien — van coaching en zorg tot hospitality, fitness en retail.",
  alternates: { canonical: "/werk" },
};

export default async function WerkPage() {
  const cases = await getCases();
  const featured = cases.filter((c) => c.featured);

  return (
    <>
      <PageHeader
        eyebrow="Klanten & portfolio"
        title="Opdrachtgevers die met ons groeien"
        description="Van lokale ondernemers tot groeiende organisaties — een greep uit de klanten en projecten waar we trots op zijn."
      />

      {/* Logowall — alle klanten */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Vertrouwd door"
            title="Onze klanten"
            description="Filter op branche en bekijk wat we voor vergelijkbare organisaties hebben gedaan. Klik op een klant voor de bijbehorende case."
          />
          <div className="mt-12">
            <ClientDirectory clients={cases} />
          </div>
        </Container>
      </Section>

      {/* Uitgelichte cases */}
      {featured.length > 0 && (
        <Section className="bg-muted/40">
          <Container>
            <SectionHeading
              eyebrow="Uitgelicht"
              title="Projecten waar we trots op zijn"
              description="Een dieper kijkje in een aantal recente trajecten."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((study, i) => (
                <CaseCard key={study.slug} study={study} index={i} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Reviews */}
      {testimonials.length > 0 && (
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Reviews"
              title="Wat klanten zeggen"
              description="Persoonlijk, strategisch en zorgeloos — dat horen we het vaakst terug."
              centered
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CtaBanner />
    </>
  );
}
