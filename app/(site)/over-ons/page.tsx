import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTeam } from "@/lib/cms";
import { siteConfig } from "@/lib/site";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";
import { ProcessSteps } from "@/components/sections/process-steps";
import { TeamAvatar } from "@/components/sections/team-avatar";
import { CtaBanner } from "@/components/sections/cta-banner";
import { YouTubeLite } from "@/components/sections/youtube-lite";

export const metadata: Metadata = {
  title: "Over EWVO — Strategisch Digitaal Team",
  description:
    "Eén team van strategen, designers en developers. Maak kennis met de mensen achter EWVO.",
  alternates: { canonical: "/over-ons" },
};

const values = [
  {
    title: "Persoonlijk",
    text: "Geen nummer, maar een vast team dat je kent en met je meedenkt.",
  },
  {
    title: "Strategisch",
    text: "We beginnen bij je doelen, niet bij een sjabloon. Alles met een reden.",
  },
  {
    title: "Zorgeloos",
    text: "Van strategie tot beheer: wij nemen de online frustratie uit handen.",
  },
];

/** #vragenrondje — videoreeks van weleer (Een Website van Ons, 2020). */
const vragenrondjeVideos = [
  { id: "N2HvDkjErQU", title: "#vragenrondje | Wie zijn wij?" },
  { id: "SkwFT5oOYhQ", title: "Copywriting? | met Ardjan de Boo" },
  { id: "x52ZLSmiwlc", title: "Filmmaken? | met Romme Kamps" },
  { id: "-a4jesNgyj4", title: "Websites bouwen? | met Ozcan Akgun" },
  { id: "fQcCBK2uVf8", title: "Business strategie? | met Anton Frederiks" },
  { id: "bUsho9j-8Ng", title: "Fotografie? | met Thomas Bakker" },
];

/** Oprichtingsverhaal / tijdlijn. */
const history = [
  {
    year: "2013",
    title: "Het begon met een tip van een slimme huisgenoot",
    text: "Goede vriend én huisgenoot Joachim den Hertog — iemand die eigenlijk professor had moeten worden — zocht voor Anton uit welke VPS hij nodig had. Anton liet er geen gras over groeien: nog geen dag later schafte hij op z'n 22e zijn eerste lease-server aan. Op vrijdag 31 mei 2013 werd eenwebsitevanons.nl geregistreerd — de officiële oprichting.",
  },
  {
    year: "Vanaf 2013",
    title: "Samen websites bouwen",
    text: "Met Edwin van Veluwen bouwde Anton de eerste WordPress-websites: toegankelijk, persoonlijk en met aandacht. Zo werden honderden ondernemers zorgeloos online zichtbaar.",
  },
  {
    year: "2023",
    title: "Het beste van het beste voor onze klanten",
    text: "We stapten over naar hostingpartner Yourhosting. Na meerdere gesprekken op kantoor regelden we de allerbeste hosting voor onze klanten.",
  },
  {
    year: "2026",
    title: "Verder als EWVO",
    text: "Zelfde team, zelfde persoonlijke aanpak, een nog completer aanbod — voortaan onder één naam: EWVO.",
  },
];

export default async function OverOnsPage() {
  const team = await getTeam();

  return (
    <>
      <PageHeader
        eyebrow="Over ons"
        title="Eén team dat met je meedenkt — van strategie tot beheer"
        description="EWVO laat het MKB én de publieke sector zorgeloos online groeien."
      />

      <Container className="pt-10 sm:pt-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/team-office.jpg"
          alt="Het team van EWVO aan het werk"
          className="w-full rounded-2xl border border-border object-cover shadow-sm"
        />
      </Container>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Ons verhaal" title="Samen verder onder EWVO" />
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Wat in 2013 begon als {siteConfig.formerName} — een toegankelijk
                webbureau dat honderden ondernemers zorgeloos zichtbaar maakte —
                groeide uit tot een volwaardig digital agency. Vanaf 2026 gaan
                we verder onder één naam: EWVO.
              </p>
              <p>
                Zelfde team, zelfde persoonlijke aanpak, een nog completer
                aanbod. We combineren de laagdrempeligheid van een lokaal bureau
                met de strategische slagkracht van een agency. Dat is precies wat
                ons onderscheidt.
              </p>
              <p>
                Of je nu je eerste website nodig hebt of een volledig digitaal
                ecosysteem met branding, automatisering en hosting — bij ons heb
                je één partner die alle online frustratie wegneemt.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Onze geschiedenis"
            title="Hoe het allemaal begon"
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <ol className="relative space-y-10 before:absolute before:top-2 before:bottom-2 before:left-0 before:w-px before:bg-border">
              {history.map((item) => (
                <li key={item.year} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-brand ring-4 ring-background" />
                  <p className="text-sm font-semibold text-brand">{item.year}</p>
                  <h3 className="mt-1 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
            <aside className="h-fit rounded-2xl border border-border bg-muted/40 p-6">
              <h3 className="font-semibold">Wat is een VPS?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Een VPS (Virtual Private Server) is je eigen, afgeschermde deel
                van een krachtige server: de snelheid en controle van een eigen
                machine, zonder de kosten daarvan. Precies de betrouwbare basis
                waarop je websites draait — en waar het voor Anton in 2013
                allemaal mee begon.
              </p>
            </aside>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Onze werkwijze"
            title="Van eerste idee tot blijvende groei"
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Het team" title="De mensen achter EWVO" />
            <Link
              href="/over-ons/team"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
            >
              Bekijk het hele team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(0, 3).map((member, i) => (
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
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Uit de oude doos · 2020"
            title="#vragenrondje — zo speelden we destijds in"
          />
          <p className="mt-4 max-w-2xl rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              Even met een knipoog:
            </span>{" "}
            deze video&apos;s uit 2020 zijn inmiddels flink verouderd (en een
            paar collega&apos;s zijn gewisseld), maar het is een leuk voorbeeld
            van hoe we destijds al inspeelden op de vragen van ondernemers. De
            vorm verandert, de persoonlijke aanpak niet.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vragenrondjeVideos.map((v) => (
              <figure key={v.id}>
                <YouTubeLite id={v.id} title={v.title} />
                <figcaption className="mt-3 text-sm font-medium">
                  {v.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
