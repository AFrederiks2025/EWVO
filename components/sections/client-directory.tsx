"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/content/cases";
import { ClientTile } from "@/components/sections/client-tile";

const ALL = "Alle";

/**
 * Klanten-logowall met branche-filter. Bezoekers kunnen op sector filteren
 * om te zien wat we voor vergelijkbare organisaties hebben gedaan.
 */
export function ClientDirectory({ clients }: { clients: CaseStudy[] }) {
  const tags = useMemo(() => {
    const unique = Array.from(new Set(clients.map((c) => c.sector))).sort(
      (a, b) => a.localeCompare(b, "nl"),
    );
    return [ALL, ...unique];
  }, [clients]);

  const [active, setActive] = useState(ALL);

  const filtered =
    active === ALL ? clients : clients.filter((c) => c.sector === active);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter klanten op branche"
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

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {filtered.map((client, i) => (
          <ClientTile key={client.slug} client={client} index={i} />
        ))}
      </div>
    </div>
  );
}
