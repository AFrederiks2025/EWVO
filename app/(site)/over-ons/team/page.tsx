import type { Metadata } from "next";
import { getTeam } from "@/lib/cms";
import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";
import { TeamAvatar } from "@/components/sections/team-avatar";
import { Stagger } from "@/components/motion/stagger";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Team EWVO",
  description:
    "Maak kennis met het team van EWVO — strategen, designers, developers en contentmakers die met je meedenken.",
  alternates: { canonical: "/over-ons/team" },
};

export default async function TeamPage() {
  const team = await getTeam();

  return (
    <>
      <PageHeader
        eyebrow="Team EWVO"
        title="De mensen achter EWVO"
        description="Eén vast team dat je leert kennen en dat met je meedenkt — van strategie tot beheer."
      />
      <Section>
        <Container>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <div
                key={member.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/50"
              >
                <TeamAvatar
                  name={member.name}
                  index={i}
                  className="h-20 w-20 rounded-2xl"
                />
                <h2 className="mt-5 text-lg font-semibold">{member.name}</h2>
                <p className="text-sm font-medium text-brand">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </Stagger>
        </Container>
      </Section>
      <CtaBanner />
    </>
  );
}
