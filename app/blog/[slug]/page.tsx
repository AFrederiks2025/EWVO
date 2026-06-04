import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { formatDate, getPost, posts } from "@/lib/content/posts";
import { Container, Section } from "@/components/ui/container";
import { CtaBanner } from "@/components/sections/cta-banner";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="brand-glow border-b border-border">
        <Container className="py-16 sm:py-20">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Alle artikelen
          </Link>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full bg-brand-muted px-2.5 py-1 font-medium text-brand">
              {post.category}
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-muted-foreground">Door {post.author}</p>
        </Container>
      </section>

      <Section>
        <Container>
          <article className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </article>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
