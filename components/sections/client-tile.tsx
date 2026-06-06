import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { brandGradients } from "@/lib/gradients";
import type { CaseStudy } from "@/lib/content/cases";

/** Initialen als merk-placeholder zolang er geen screenshot is. */
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

function domainFromUrl(url?: string) {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

/**
 * Portfolio-kaart voor de filterbare galerij op /werk — volledig in code
 * (geen losse beeld-bestanden): links de tekst + sector + CTA, rechts de
 * website-screenshot in een browser-frame. Uniform voor alle cases.
 */
export function ClientTile({
  client,
  index = 0,
}: {
  client: CaseStudy;
  index?: number;
}) {
  const domain = domainFromUrl(client.url);
  return (
    <Link
      href={`/werk/${client.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:border-brand/50 hover:shadow-md sm:grid sm:grid-cols-5"
    >
      {/* Tekstpaneel */}
      <div className="flex flex-col justify-between gap-6 p-6 sm:col-span-2 sm:p-8">
        <div>
          <span className="inline-flex rounded-full bg-brand-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
            {client.sector}
          </span>
          <h3 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">
            {client.client}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{client.summary}</p>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
          Bekijk de case
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>

      {/* Browser-frame met screenshot */}
      <div className="bg-muted/40 p-4 sm:col-span-3 sm:p-6">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-3 py-2">
            <span className="flex gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            <span className="ml-1 flex-1 truncate rounded-md bg-background px-2 py-0.5 text-[11px] text-muted-foreground">
              {domain ?? ""}
            </span>
          </div>
          <div className="relative aspect-[16/10]">
            {client.image ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.image}
                  alt={`Website van ${client.client}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </>
            ) : (
              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-center bg-linear-to-br text-2xl font-bold text-white",
                  brandGradients[index % brandGradients.length],
                )}
                aria-hidden
              >
                {initials(client.client)}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
