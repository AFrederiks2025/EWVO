import type { Metadata } from "next";
import { getServices } from "@/lib/cms";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";
import { ServiceCard } from "@/components/sections/service-card";
import { PricingTable } from "@/components/sections/pricing-table";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Diensten — Webdesign, Branding, AI & Hosting",
  description:
    "Complete digitale oplossingen onder één dak. Bekijk onze diensten en pakketten.",
  alternates: { canonical: "/diensten" },
};

export default async function DienstenPage() {
  const services = await getServices();

  return (
    <>
      <PageHeader
        eyebrow="Diensten"
        title="Alles voor je online groei, onder één dak"
        description="Vijf pijlers die samen een compleet digitaal ecosysteem vormen — van strategie en design tot AI, hosting en content."
      />
      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="pakketten" className="scroll-mt-16 bg-muted/40">
        <Container>
          <SectionHeading
            centered
            eyebrow="Pakketten"
            title="Een aanpak die bij je past"
            description="Van een eerste professionele website tot een volledig digitaal ecosysteem."
          />
          <div className="mt-12">
            <PricingTable />
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
