import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: `Hoe ${siteConfig.name} omgaat met je persoonsgegevens.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Juridisch" title="Privacyverklaring" />
      <Section>
        <Container className="max-w-2xl space-y-6 text-muted-foreground">
          <p className="rounded-xl border border-dashed border-border bg-muted/40 p-4 text-sm">
            {/* TODO: migreer de echte privacyverklaring van eenwebsitevanons.nl
            en actualiseer naar EWVO (KvK, contactgegevens, verwerkers). */}
            <strong className="text-foreground">Let op:</strong> dit is een
            placeholder. De definitieve privacyverklaring wordt overgenomen van
            Een Website van Ons en bijgewerkt naar EWVO.
          </p>
          <p>
            {siteConfig.name} respecteert je privacy en verwerkt
            persoonsgegevens in overeenstemming met de AVG. Op deze pagina lees
            je welke gegevens we verzamelen en waarvoor.
          </p>
          <h2 className="text-xl font-semibold text-foreground">
            Welke gegevens we verwerken
          </h2>
          <p>
            We verwerken de gegevens die je zelf aan ons verstrekt, bijvoorbeeld
            via het contactformulier: je naam, e-mailadres en eventueel je
            telefoonnummer en bericht.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>
            Vragen over je privacy? Mail naar{" "}
            <a
              href={siteConfig.contact.emailHref}
              className="text-brand hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
