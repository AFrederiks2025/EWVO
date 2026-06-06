import Link from "next/link";
import { cn } from "@/lib/utils";
import { brandGradients } from "@/lib/gradients";
import type { CaseStudy } from "@/lib/content/cases";

/** Initialen als merk-placeholder zolang er geen echt logo is. */
function initials(name: string) {
  const words = name
    .replace(/[^\p{L}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words
    .map((w) => w[0])
    .slice(0, 3)
    .join("")
    .toUpperCase();
}

/**
 * Compacte klant-tegel voor de logowall op /werk.
 * Toont initialen in een merk-gradiënt als placeholder.
 * TODO: vervang de initialen door echte klantlogo's zodra aangeleverd.
 */
export function ClientTile({
  client,
  index = 0,
}: {
  client: CaseStudy;
  index?: number;
}) {
  return (
    <Link
      href={`/werk/${client.slug}`}
      className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-brand/50"
    >
      <span
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br text-sm font-bold text-white",
          brandGradients[index % brandGradients.length],
        )}
        aria-hidden
      >
        {initials(client.client)}
      </span>
      <span className="text-sm font-medium leading-tight transition-colors group-hover:text-brand">
        {client.client}
      </span>
      <span className="text-xs text-muted-foreground">{client.sector}</span>
    </Link>
  );
}
