import type { Metadata } from "next";
import { getCases } from "@/lib/cms";
import { testimonials } from "@/lib/content/testimonials";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";
import { ClientDirectory } from "@/components/sections/client-directory";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Stagger } from "@/components/motion/stagger";

export const metadata: Metadata = {
  title: "Klanten & cases — Ons werk",
  description:
    "Een greep uit de opdrachtgevers die met EWVO online groeien — van coaching en zorg tot hospitality, fitness en retail.",
  alternates: { canonical: "/werk" },
};

export default async function WerkPage() {
  const cases = await getCases();

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
            <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </Stagger>
          </Container>
        </Section>
      )}

      <CtaBanner />
    </>
  );
}
