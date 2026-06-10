"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { secties } from "@/components/voorbeeld/preview/sections";

export function Samensteller() {
  const [actief, setActief] = useState(0);
  const [selecties, setSelecties] = useState<number[]>(() =>
    secties.map(() => 0),
  );

  const sectie = secties[actief];
  const kies = (v: number) =>
    setSelecties((s) => s.map((x, i) => (i === actief ? v : x)));

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_440px]">
      {/* Kiezer */}
      <div>
        {/* Stappen */}
        <div className="flex flex-wrap gap-2">
          {secties.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActief(i)}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                i === actief
                  ? "bg-brand text-white"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground",
              )}
            >
              {i + 1}. {s.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Stap {actief + 1} van {secties.length}
          </p>
          <h2 className="mt-1 text-2xl font-semibold">
            Kies een {sectie.label.toLowerCase()}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Klik op een variant — de preview rechts past zich meteen aan.
          </p>
        </div>

        {/* Varianten */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {sectie.varianten.map((naam, v) => {
            const gekozen = selecties[actief] === v;
            return (
              <button
                key={v}
                type="button"
                onClick={() => kies(v)}
                className={cn(
                  "group overflow-hidden rounded-xl border text-left transition-all",
                  gekozen
                    ? "border-brand ring-2 ring-brand/30"
                    : "border-border hover:border-brand/50",
                )}
              >
                <div className="pointer-events-none h-28 overflow-hidden bg-background">
                  <div style={{ zoom: 0.34 }}>
                    <sectie.Render variant={v} />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-border bg-card px-3 py-2">
                  <span className="text-sm font-medium">{naam}</span>
                  {gekozen && <Check className="h-4 w-4 shrink-0 text-brand" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigatie */}
        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setActief((i) => Math.max(0, i - 1))}
            disabled={actief === 0}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" /> Vorige
          </button>
          <button
            type="button"
            onClick={() =>
              setActief((i) => Math.min(secties.length - 1, i + 1))
            }
            disabled={actief === secties.length - 1}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-40"
          >
            Volgende <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Live preview */}
      <div className="lg:sticky lg:top-6 lg:self-start">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Live preview
        </p>
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <div className="flex items-center gap-1.5 border-b border-border bg-muted/60 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="ml-2 flex-1 truncate rounded bg-background px-2 py-0.5 text-[11px] text-muted-foreground">
              jouw-website.nl
            </span>
          </div>
          <div className="h-[560px] overflow-y-auto bg-background">
            <div style={{ zoom: 0.5 }}>
              {secties.map((s, i) => (
                <s.Render key={s.id} variant={selecties[i]} />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Dit is een eerste opzet — we breiden de varianten en onderdelen verder uit.
        </p>
      </div>
    </div>
  );
}
