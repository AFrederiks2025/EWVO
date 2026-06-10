import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getCase, getCaseSlugs } from "@/lib/cms";
import { Container, Section } from "@/components/ui/container";
import { CtaBanner } from "@/components/sections/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getCaseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCase(slug);
  if (!study) return {};
  return {
    title: `${study.client} — Case`,
    description: study.summary,
    alternates: { canonical: `/portfolio/${study.slug}` },
  };
}

function DetailBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
        {title}
      </h2>
      <p className="mt-3 text-muted-foreground">{text}</p>
    </div>
  );
}

export default async function CaseDetailPage({ params }: Params) {
  const { slug } = await params;
  const study = await getCase(slug);
  if (!study) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
          { name: study.client, url: `/portfolio/${study.slug}` },
        ]}
      />
      <section className="brand-glow border-b border-border">
        <Container className="py-16 sm:py-20">
          <Link
            href="/portfolio"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Portfolio
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand">
            {study.sector}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {study.client}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {study.summary}
          </p>
          {study.url ? (
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
            >
              Bekijk de live website
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </Container>
      </section>

      {study.image ? (
        <Container className="pt-10 sm:pt-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={study.image}
            alt={`Website van ${study.client}`}
            className="w-full rounded-2xl border border-border object-cover object-top shadow-sm"
          />
        </Container>
      ) : null}

      <Section>
        <Container>
          {study.problem || study.approach || study.result ? (
            <div className="grid gap-6 lg:grid-cols-3">
              {study.problem ? (
                <DetailBlock title="De uitdaging" text={study.problem} />
              ) : null}
              {study.approach ? (
                <DetailBlock title="Onze aanpak" text={study.approach} />
              ) : null}
              {study.result ? (
                <DetailBlock title="Het resultaat" text={study.result} />
              ) : null}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-muted/40 p-8 text-center">
              <p className="text-muted-foreground">
                De volledige uitwerking van deze case volgt binnenkort.
              </p>
            </div>
          )}

          {study.quote ? (
            <figure className="mt-12 rounded-2xl border border-border bg-card p-8">
              <blockquote className="text-xl font-medium leading-relaxed">
                “{study.quote.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                — {study.quote.author}
              </figcaption>
            </figure>
          ) : null}
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
