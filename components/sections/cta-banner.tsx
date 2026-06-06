import { primaryCta, siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaBanner({
  title = "Klaar om zorgeloos online te groeien?",
  description = "Plan een gratis adviesgesprek. We denken graag vrijblijvend met je mee.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Container className="pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-accent px-6 py-14 text-center sm:px-12">
        <h2 className="text-3xl font-semibold tracking-tight text-accent-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-accent-foreground/80">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </ButtonLink>
          <ButtonLink
            href={siteConfig.contact.phoneHref}
            variant="outline"
            className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground"
          >
            Bel {siteConfig.contact.phone}
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}
