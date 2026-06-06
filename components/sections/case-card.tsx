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
      <div className="relative aspect-[16/10]">
        {study.image ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={study.image}
              alt={`Website van ${study.client}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent" />
          </>
        ) : (
          // Geen screenshot → merk-gradiënt (blijft binnen de huisstijl, uniform)
          <div
            className={cn(
              "absolute inset-0 bg-linear-to-br",
              brandGradients[index % brandGradients.length],
            )}
          />
        )}
        <span className="absolute bottom-3 left-3 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur">
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
