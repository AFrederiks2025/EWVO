import Link from "next/link";
import { ArrowRight, Banknote, Check, Compass, ListChecks, Users } from "lucide-react";
import { getServices, getFeaturedCases, getPosts } from "@/lib/cms";
import { primaryCta, siteConfig } from "@/lib/site";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { ServiceCard } from "@/components/sections/service-card";
import { CaseCard } from "@/components/sections/case-card";
import { PostCard } from "@/components/sections/post-card";
import { PricingTable } from "@/components/sections/pricing-table";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CtaBanner } from "@/components/sections/cta-banner";

const usps = [
  "Eén vast team, van strategie tot beheer",
  "Persoonlijk én strategisch",
  "Snelle, vindbare websites",
  "Doorlopend beheer & support",
];

// TODO: vervang door echte, verifieerbare cijfers (gap #2 in MERGE-PLAN.md)
const stats = [
  { value: "10+", label: "jaar ervaring" },
  { value: "100+", label: "tevreden klanten" },
  { value: "6", label: "vaste teamleden" },
  { value: "5", label: "dienstpijlers" },
];

// Vier Scaling Up-pijlers — zo denken we strategisch met klanten mee.
const pillars = [
  {
    icon: Users,
    title: "Mensen",
    text: "De juiste mensen op de juiste plek, met heldere rollen en verantwoordelijkheden.",
  },
  {
    icon: Compass,
    title: "Strategie",
    text: "Een scherpe positionering en merkbeloften waarmee je je onderscheidt.",
  },
  {
    icon: ListChecks,
    title: "Uitvoering",
    text: "Ritme en focus, zodat plannen ook echt gebeuren — zonder gedoe.",
  },
  {
    icon: Banknote,
    title: "Cash",
    text: "Gezonde cashflow als zuurstof om door te blijven groeien.",
  },
];

export default async function HomePage() {
  const [services, featuredCases, posts] = await Promise.all([
    getServices(),
    getFeaturedCases(),
    getPosts(),
  ]);

  return (
    <>
      <section className="brand-glow">
        <Container className="flex flex-col items-center py-20 text-center sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            Voorheen {siteConfig.formerName}
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Digitale ecosystemen die{" "}
            <span className="text-brand">meegroeien</span> met jouw bedrijf
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCta.href} size="lg">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href="/werk" size="lg" variant="outline">
              Bekijk ons werk
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {usps.map((u) => (
              <li key={u} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand" />
                {u}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Wat we doen"
            title="Alles voor je online groei, onder één dak"
            description="Vijf pijlers die samen een compleet digitaal ecosysteem vormen."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Waarom EWVO"
              title="Persoonlijk als een lokaal bureau, strategisch als een agency"
              description="Veel bureaus zijn óf goedkoop en oppervlakkig, óf duur en ontoegankelijk. Wij zijn beide kanten in één team."
            />
            <p className="mt-6 text-muted-foreground">
              Of je nu je eerste professionele website nodig hebt, een revisie
              van een site die je bedrijf ontgroeid is, of een volledig digitaal
              ecosysteem: bij EWVO heb je één vast team dat met je meedenkt — van
              strategie tot beheer.
            </p>
            <ButtonLink href="/over-ons" variant="outline" className="mt-8">
              Lees ons verhaal
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <dt className="text-3xl font-semibold tracking-tight text-brand">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Onze aanpak"
            title="We denken met je mee op vier vlakken"
            description="Geïnspireerd op de bewezen Scaling Up-groeimethode kijken we verder dan je website: van mensen en strategie tot uitvoering en cashflow. Zo groei je structureel — niet bij toeval."
            centered
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-muted text-brand">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Ons werk"
              title="Resultaten waar we trots op zijn"
            />
            <Link
              href="/werk"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
            >
              Alle cases
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCases.map((study, i) => (
              <CaseCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Onze werkwijze"
            title="Van eerste idee tot blijvende groei"
            description="In vier heldere stappen werken we samen naar resultaat."
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Pakketten"
            title="Een aanpak die bij je past"
            description="Van een eerste professionele website tot een volledig digitaal ecosysteem."
            centered
          />
          <div className="mt-12">
            <PricingTable />
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Kennis & inzichten"
              title="Van het blog"
            />
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
            >
              Alle artikelen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
