import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { getService, services } from "@/lib/content/services";
import { Container, Section } from "@/components/ui/container";
import { ServiceIcon } from "@/components/sections/icon";
import { ButtonLink } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/diensten/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="brand-glow border-b border-border">
        <Container className="py-16 sm:py-20">
          <Link
            href="/diensten"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Alle diensten
          </Link>
          <div className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-muted text-brand">
            <ServiceIcon name={service.icon} className="h-7 w-7" />
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {service.tagline}
          </p>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {service.intro}
            </p>
            <ButtonLink href="/contact" className="mt-8">
              Plan een gratis adviesgesprek
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Wat je krijgt
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight">
            Andere diensten
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/diensten/${other.slug}`}
                className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/50"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted text-brand">
                  <ServiceIcon name={other.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-medium transition-colors group-hover:text-brand">
                  {other.title}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
