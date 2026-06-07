"use client";

import { useMemo, useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/content/cases";
import { ClientTile } from "@/components/sections/client-tile";
import { ClientThumb } from "@/components/sections/client-thumb";

const ALL = "Alle";
type View = "grid" | "rows";

/**
 * Filterbare portfolio-galerij met twee weergaven:
 * - "grid"  : compacte tegels, 4 naast elkaar (standaard)
 * - "rows"  : grote code-cards onder elkaar (met browser-frame)
 */
export function ClientDirectory({ clients }: { clients: CaseStudy[] }) {
  const tags = useMemo(() => {
    const unique = Array.from(new Set(clients.map((c) => c.sector))).sort(
      (a, b) => a.localeCompare(b, "nl"),
    );
    return [ALL, ...unique];
  }, [clients]);

  const [active, setActive] = useState(ALL);
  const [view, setView] = useState<View>("grid");

  const filtered =
    active === ALL ? clients : clients.filter((c) => c.sector === active);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter op branche"
        >
          {tags.map((tag) => {
            const isActive = tag === active;
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(tag)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand text-brand-foreground"
                    : "border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div
          className="flex shrink-0 items-center gap-1 self-start rounded-full border border-border bg-card p-1"
          role="group"
          aria-label="Weergave"
        >
          <button
            type="button"
            onClick={() => setView("grid")}
            aria-pressed={view === "grid"}
            aria-label="Compacte weergave"
            className={cn(
              "inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors",
              view === "grid"
                ? "bg-brand text-brand-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setView("rows")}
            aria-pressed={view === "rows"}
            aria-label="Grote weergave"
            className={cn(
              "inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors",
              view === "rows"
                ? "bg-brand text-brand-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "mt-8 grid",
          view === "grid"
            ? "grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-1 gap-6",
        )}
      >
        {filtered.map((client, i) =>
          view === "grid" ? (
            <ClientThumb key={client.slug} client={client} index={i} />
          ) : (
            <ClientTile key={client.slug} client={client} index={i} />
          ),
        )}
      </div>
    </div>
  );
}
