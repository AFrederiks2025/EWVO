import Link from "next/link";
import { formatDate, type Post } from "@/lib/content/posts";

type PostCardData = Pick<
  Post,
  "slug" | "title" | "excerpt" | "date" | "author" | "category"
>;

export function PostCard({ post }: { post: PostCardData }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/50"
    >
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="rounded-full bg-brand-muted px-2.5 py-1 font-medium text-brand">
          {post.category}
        </span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
      <h3 className="mt-4 text-lg font-semibold transition-colors group-hover:text-brand">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
      <span className="mt-4 text-sm text-muted-foreground">
        Door {post.author}
      </span>
    </Link>
  );
}
