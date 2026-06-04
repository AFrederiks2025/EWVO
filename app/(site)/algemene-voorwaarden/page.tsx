import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: `De algemene voorwaarden van ${siteConfig.name}.`,
  alternates: { canonical: "/algemene-voorwaarden" },
};

export default function VoorwaardenPage() {
  return (
    <>
      <PageHeader eyebrow="Juridisch" title="Algemene voorwaarden" />
      <Section>
        <Container className="max-w-2xl space-y-6 text-muted-foreground">
          <p className="rounded-xl border border-dashed border-border bg-muted/40 p-4 text-sm">
            {/* TODO: migreer de echte algemene voorwaarden van
            eenwebsitevanons.nl en actualiseer naar EWVO (statutaire naam,
            KvK, BTW). */}
            <strong className="text-foreground">Let op:</strong> dit is een
            placeholder. De definitieve algemene voorwaarden worden overgenomen
            van Een Website van Ons en bijgewerkt naar EWVO.
          </p>
          <p>
            Deze algemene voorwaarden zijn van toepassing op alle offertes,
            opdrachten en overeenkomsten met {siteConfig.name}.
          </p>
          <h2 className="text-xl font-semibold text-foreground">
            Bedrijfsgegevens
          </h2>
          <p>
            {/* TODO: vul statutaire naam, KvK-nummer en BTW-nummer in (gap #6). */}
            {siteConfig.name} — bedrijfsgegevens worden hier ingevuld zodra
            bevestigd.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>
            Vragen over deze voorwaarden? Mail naar{" "}
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
