import Link from "next/link";
import { ArrowRight, Banknote, Check, Compass, ListChecks, Users } from "lucide-react";
import { getServices, getFeaturedCases, getPosts, getTeam } from "@/lib/cms";
import { primaryCta, siteConfig } from "@/lib/site";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { ServiceCard } from "@/components/sections/service-card";
import { CaseCard } from "@/components/sections/case-card";
import { TeamAvatar } from "@/components/sections/team-avatar";
import { PostCard } from "@/components/sections/post-card";
import { PricingTable } from "@/components/sections/pricing-table";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";
import { Counter } from "@/components/motion/counter";
import { Parallax, ScrollFade } from "@/components/motion/parallax";

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
  const [services, featuredCases, posts, team] = await Promise.all([
    getServices(),
    getFeaturedCases(),
    getPosts(),
    getTeam(),
  ]);

  return (
    <>
      <section className="brand-glow relative overflow-hidden">
        <Parallax
          speed={0.3}
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
        >
          <div className="mt-[-120px] h-[460px] w-[720px] max-w-full rounded-full bg-accent/12 blur-3xl" />
        </Parallax>
        <Container className="hero-enter flex flex-col items-center py-20 text-center sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            Voorheen {siteConfig.formerName}
          </span>
          <ScrollFade className="mt-6 w-full">
            <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Digitale ecosystemen die{" "}
              <span className="text-brand">meegroeien</span> met jouw bedrijf
            </h1>
          </ScrollFade>
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
          <FadeIn>
            <SectionHeading
              eyebrow="Wat we doen"
              title="Alles voor je online groei, onder één dak"
              description="Vijf pijlers die samen een compleet digitaal ecosysteem vormen."
            />
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
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
          </FadeIn>
          <dl className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <dt className="text-3xl font-semibold tracking-tight tabular-nums text-brand">
                    <Counter value={stat.value} />
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              </FadeIn>
            ))}
          </dl>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Onze aanpak"
              title="We denken met je mee op vier vlakken"
              description="Geïnspireerd op de bewezen Scaling Up-groeimethode kijken we verder dan je website: van mensen en strategie tot uitvoering en cashflow. Zo groei je structureel — niet bij toeval."
              centered
            />
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          </Stagger>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <FadeIn className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Het team"
              title="De mensen achter EWVO"
              description="Eén vast team dat je leert kennen en dat met je meedenkt."
            />
            <Link
              href="/over-ons/team"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
            >
              Bekijk het team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <div
                key={member.slug}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <TeamAvatar
                  name={member.name}
                  index={i}
                  className="h-16 w-16 rounded-2xl"
                />
                <h3 className="mt-4 font-semibold">{member.name}</h3>
                <p className="text-sm text-brand">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn className="flex flex-wrap items-end justify-between gap-4">
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
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCases.map((study, i) => (
              <CaseCard key={study.slug} study={study} index={i} />
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Onze werkwijze"
              title="Van eerste idee tot blijvende groei"
              description="In vier heldere stappen werken we samen naar resultaat."
            />
          </FadeIn>
          <FadeIn className="mt-12">
            <ProcessSteps />
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Pakketten"
              title="Een aanpak die bij je past"
              description="Van een eerste professionele website tot een volledig digitaal ecosysteem."
              centered
            />
          </FadeIn>
          <div className="mt-12">
            <PricingTable />
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <FadeIn className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Kennis & inzichten" title="Van het blog" />
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
            >
              Alle artikelen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </Stagger>
        </Container>
      </Section>

      <FadeIn>
        <CtaBanner />
      </FadeIn>
    </>
  );
}
