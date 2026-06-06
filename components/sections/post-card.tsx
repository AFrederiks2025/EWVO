import Link from "next/link";
import {
  Compass,
  Megaphone,
  Newspaper,
  Palette,
  PenLine,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { brandGradients } from "@/lib/gradients";
import { formatDate, type Post } from "@/lib/content/posts";

type PostCardData = Pick<
  Post,
  "slug" | "title" | "excerpt" | "date" | "author" | "category" | "imageUrl"
>;

/** Categorie → passend icoon voor de cover als er (nog) geen foto is. */
const categoryIcons: Record<string, typeof Compass> = {
  Strategie: Compass,
  Design: Palette,
  SEO: Search,
  "E-commerce": ShoppingCart,
  Marketing: Megaphone,
  Techniek: ShieldCheck,
  Content: PenLine,
  Ondernemen: Rocket,
};

export function PostCard({
  post,
  index = 0,
}: {
  post: PostCardData;
  index?: number;
}) {
  const Icon = categoryIcons[post.category] ?? Newspaper;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-brand/50"
    >
      <div className="relative aspect-[16/10]">
        {post.imageUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.imageUrl}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Huisstijl-filter: blauwgrijze duotone-tint voor uniformiteit */}
            <div className="absolute inset-0 bg-accent/55 mix-blend-multiply" />
            <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent" />
          </>
        ) : (
          // Geen foto → merk-gradiënt met categorie-icoon (uniforme cover)
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center bg-linear-to-br",
              brandGradients[index % brandGradients.length],
            )}
            aria-hidden
          >
            <Icon className="h-12 w-12 text-white/70" strokeWidth={1.5} />
          </div>
        )}
        <span className="absolute bottom-3 left-3 rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <time dateTime={post.date} className="text-xs text-muted-foreground">
          {formatDate(post.date)}
        </time>
        <h3 className="mt-2 text-lg font-semibold transition-colors group-hover:text-brand">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">
          {post.excerpt}
        </p>
        <span className="mt-4 text-sm text-muted-foreground">
          Door {post.author}
        </span>
      </div>
    </Link>
  );
}
