"use client";

import { useEffect, useMemo, useState } from "react";
import { Printer, RotateCcw } from "lucide-react";
import {
  scalingUpPillars,
  type SUBlock,
  type SUField,
} from "@/lib/content/scaling-up";

const STORAGE_KEY = "ewvo-scaling-up-v1";

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-ring/30";

type Answers = Record<string, string | boolean>;

function collectFields(): SUField[] {
  const out: SUField[] = [];
  for (const pillar of scalingUpPillars) {
    for (const tool of pillar.tools) {
      for (const block of tool.blocks) {
        if (block.kind === "fields") out.push(...block.fields);
        else if (block.kind === "checklist") out.push(...block.items);
        else for (const row of block.rows) out.push(...row.cells);
      }
    }
  }
  return out;
}

function isFilled(field: SUField, value: string | boolean | undefined) {
  return field.type === "check"
    ? value === true
    : typeof value === "string" && value.trim() !== "";
}

export function ScalingUpWorksheet() {
  const [answers, setAnswers] = useState<Answers>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setAnswers(JSON.parse(raw) as Answers);
    } catch {
      /* genegeerd — corrupte opslag valt terug op leeg */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {
      /* opslag vol of geblokkeerd — stilletjes overslaan */
    }
  }, [answers, hydrated]);

  const fields = useMemo(collectFields, []);
  const filled = useMemo(
    () => fields.filter((f) => isFilled(f, answers[f.id])).length,
    [fields, answers],
  );
  const total = fields.length;
  const pct = total ? Math.round((filled / total) * 100) : 0;

  const set = (id: string, value: string | boolean) =>
    setAnswers((prev) => ({ ...prev, [id]: value }));

  const reset = () => {
    if (window.confirm("Weet je zeker dat je alle antwoorden wist?")) {
      setAnswers({});
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* niets */
      }
    }
  };

  const renderField = (field: SUField) => {
    const value = answers[field.id];
    if (field.type === "check") {
      return (
        <label key={field.id} className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            checked={value === true}
            onChange={(e) => set(field.id, e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-input accent-[#ff6600]"
          />
          <span className="text-muted-foreground">{field.label}</span>
        </label>
      );
    }
    const control =
      field.type === "textarea" ? (
        <textarea
          rows={field.rows ?? 3}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => set(field.id, e.target.value)}
          placeholder={field.placeholder}
          className={fieldClass}
        />
      ) : (
        <input
          type="text"
          value={typeof value === "string" ? value : ""}
          onChange={(e) => set(field.id, e.target.value)}
          placeholder={field.placeholder}
          className={fieldClass}
        />
      );
    if (!field.label) return <div key={field.id}>{control}</div>;
    return (
      <div key={field.id}>
        <label className="mb-1.5 block text-sm font-medium">{field.label}</label>
        {control}
      </div>
    );
  };

  const renderBlock = (block: SUBlock, key: string) => {
    if (block.kind === "fields") {
      return (
        <div key={key} className="mt-6">
          {block.heading && (
            <h4 className="mb-3 font-medium">{block.heading}</h4>
          )}
          {block.help && (
            <p className="mb-3 text-sm text-muted-foreground">{block.help}</p>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            {block.fields.map(renderField)}
          </div>
        </div>
      );
    }
    if (block.kind === "checklist") {
      return (
        <div key={key} className="mt-6 rounded-2xl border border-border bg-muted/30 p-5">
          {block.heading && (
            <h4 className="mb-3 text-sm font-semibold">{block.heading}</h4>
          )}
          <div className="space-y-2.5">{block.items.map(renderField)}</div>
        </div>
      );
    }
    // table → per rij een kaart (responsief, geen horizontaal scrollen)
    return (
      <div key={key} className="mt-6">
        {block.heading && <h4 className="mb-3 font-medium">{block.heading}</h4>}
        {block.help && (
          <p className="mb-3 text-sm text-muted-foreground">{block.help}</p>
        )}
        <div className="space-y-4">
          {block.rows.map((row, ri) => (
            <div
              key={ri}
              className="rounded-2xl border border-border bg-card p-4"
            >
              <p className="mb-3 text-sm font-semibold text-brand">{row.label}</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {row.cells.map((cell, ci) => (
                  <div key={cell.id}>
                    <label className="mb-1 block text-xs font-medium text-muted-foreground">
                      {block.columns[ci]}
                    </label>
                    {renderField(cell)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Toolbar: voortgang + acties */}
      <div className="rounded-2xl border border-border bg-card p-5 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium">
              {hydrated ? `${filled} van ${total} velden ingevuld` : "Laden…"}
            </p>
            <div className="mt-2 h-2 w-56 max-w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-brand transition-all"
                style={{ width: `${hydrated ? pct : 0}%` }}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              <Printer className="h-4 w-4" />
              Print / PDF
            </button>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
            >
              <RotateCcw className="h-4 w-4" />
              Wis alles
            </button>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Je antwoorden worden automatisch in deze browser bewaard.
        </p>
      </div>

      {/* Snelnavigatie naar de pijlers */}
      <nav className="mt-6 flex flex-wrap gap-2 print:hidden">
        {scalingUpPillars.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            {p.name}
          </a>
        ))}
      </nav>

      {/* Pijlers → tools → blokken */}
      {scalingUpPillars.map((pillar) => (
        <section key={pillar.id} id={pillar.id} className="mt-14 scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {pillar.name}
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            {pillar.description}
          </p>

          {pillar.tools.map((tool) => (
            <div
              key={tool.id}
              className="mt-8 rounded-3xl border border-border bg-card p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold">{tool.title}</h3>
              {tool.subtitle && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {tool.subtitle}
                </p>
              )}
              {tool.intro && (
                <p className="mt-3 text-sm text-muted-foreground">{tool.intro}</p>
              )}
              {tool.blocks.map((block, bi) =>
                renderBlock(block, `${tool.id}-${bi}`),
              )}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
