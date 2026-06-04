import Link from "next/link";
import { cn } from "@/lib/utils";
import { brandGradients } from "@/lib/gradients";
import type { CaseStudy } from "@/lib/content/cases";

export function CaseCard({
  study,
  index = 0,
}: {
  study: CaseStudy;
  index?: number;
}) {
  return (
    <Link
      href={`/werk/${study.slug}`}
      className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-brand/50"
    >
      <div
        className={cn(
          "flex aspect-[16/10] items-end bg-linear-to-br p-5",
          brandGradients[index % brandGradients.length],
        )}
      >
        <span className="rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {study.sector}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold transition-colors group-hover:text-brand">
          {study.client}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{study.summary}</p>
      </div>
    </Link>
  );
}
