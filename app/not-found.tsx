import { Container, Section } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section>
      <Container className="flex flex-col items-center py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Pagina niet gevonden
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          De pagina die je zoekt bestaat niet (meer). Misschien helpt een van
          deze links je verder.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Naar de homepage</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Neem contact op
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
