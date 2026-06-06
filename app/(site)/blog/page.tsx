import type { Metadata } from "next";
import { getPosts } from "@/lib/cms";
import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";
import { PostCard } from "@/components/sections/post-card";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Blog — Inzichten over Webdesign, SEO & Online Groei",
  description:
    "Praktische tips en trends over webdesign, SEO, marketing en online ondernemen voor het MKB.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Kennis & inzichten"
        description="Praktische tips en trends om zorgeloos online te groeien."
      />
      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </Container>
      </Section>
      <CtaBanner />
    </>
  );
}
