import { Container } from "@/components/ui/container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="brand-glow border-b border-border">
      <Container className="py-16 sm:py-20">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
