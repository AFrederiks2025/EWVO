import type { Metadata } from "next";
import { Star } from "lucide-react";
import { reviewCta } from "@/lib/site";
import { testimonials } from "@/lib/content/testimonials";
import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { ButtonLink } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Ervaringen van ondernemers en organisaties die met EWVO samenwerken. Lees reviews en deel zelf jouw ervaring.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="Wat klanten over ons zeggen"
        description="Echte ervaringen van de ondernemers en organisaties waarmee we samenwerken."
      />

      {testimonials.length > 0 && (
        <Section>
          <Container>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Schrijf-een-review CTA → Google */}
      <Section className="bg-muted/40">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
            <div className="flex items-center justify-center gap-1 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" aria-hidden />
              ))}
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
              {reviewCta.label}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Heb je met ons samengewerkt? We horen graag hoe je het hebt
              ervaren — jouw review helpt anderen een keuze te maken.
            </p>
            <ButtonLink
              href={reviewCta.href}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="mt-8"
            >
              Schrijf een review op Google
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
