import type { Metadata } from "next";
import { getTeam } from "@/lib/cms";
import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";
import { TeamAvatar } from "@/components/sections/team-avatar";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Het team",
  description:
    "Maak kennis met het team van EWVO — strategen, designers, developers en contentmakers.",
  alternates: { canonical: "/over-ons/team" },
};

export default async function TeamPage() {
  const team = await getTeam();

  return (
    <>
      <PageHeader
        eyebrow="Het team"
        title="De mensen achter EWVO"
        description="Een vast team dat je leert kennen en dat met je meedenkt."
      />
      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <div
                key={member.slug}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <TeamAvatar
                  name={member.name}
                  index={i}
                  className="h-20 w-20 rounded-2xl"
                />
                <h2 className="mt-4 text-lg font-semibold">{member.name}</h2>
                <p className="text-sm text-brand">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBanner />
    </>
  );
}
