"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Download, Mail, Printer, RotateCcw, Upload } from "lucide-react";
import {
  scalingUpPillars,
  type SUBlock,
  type SUField,
} from "@/lib/content/scaling-up";

const STORAGE_KEY = "ewvo-scaling-up-v1";

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-ring/30";

const toolbarBtn =
  "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted";

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
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setAnswers(JSON.parse(raw) as Answers);
    } catch {
      /* corrupte opslag → leeg */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {
      /* opslag vol/geblokkeerd → overslaan */
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
      setStatus(null);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* niets */
      }
    }
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify({ version: 1, answers }, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `scaling-up-ewvo-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJson = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result)) as
          | { answers?: Answers }
          | Answers;
        const next =
          parsed && typeof parsed === "object" && "answers" in parsed
            ? parsed.answers
            : (parsed as Answers);
        if (next && typeof next === "object") {
          setAnswers(next as Answers);
          setStatus("Bestand geïmporteerd.");
        } else {
          setStatus("Dit bestand bevat geen geldige antwoorden.");
        }
      } catch {
        setStatus("Kon dit bestand niet lezen. Is het een geldig export-bestand?");
      }
    };
    reader.readAsText(file);
  };

  const sendEmail = async () => {
    if (!email.includes("@")) {
      setStatus("Vul een geldig e-mailadres in.");
      return;
    }
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch("/api/scaling-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, answers }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        delivered?: boolean;
        error?: string;
      };
      if (res.ok && data.ok && data.delivered) {
        setStatus("Verstuurd! Check je inbox.");
      } else if (res.ok && data.ok && !data.delivered) {
        setStatus(
          "E-mailservice is nog niet ingesteld op de server. Gebruik zolang 'Exporteren' om je plan op te slaan.",
        );
      } else {
        setStatus(data.error || "Versturen mislukt.");
      }
    } catch {
      setStatus("Versturen mislukt. Probeer het later opnieuw.");
    } finally {
      setSending(false);
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
          {block.heading && <h4 className="mb-3 font-medium">{block.heading}</h4>}
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
        <div
          key={key}
          className="mt-6 rounded-2xl border border-border bg-muted/30 p-5"
        >
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
            <div key={ri} className="rounded-2xl border border-border bg-card p-4">
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
      {/* Toolbar: voortgang, opslaan/delen & acties */}
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
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={exportJson} className={toolbarBtn}>
              <Download className="h-4 w-4" />
              Exporteren
            </button>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className={toolbarBtn}
            >
              <Upload className="h-4 w-4" />
              Importeren
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) importJson(f);
                e.target.value = "";
              }}
            />
            <button
              type="button"
              onClick={() => window.print()}
              className={toolbarBtn}
            >
              <Printer className="h-4 w-4" />
              Print / PDF
            </button>
            <button
              type="button"
              onClick={reset}
              className={`${toolbarBtn} text-muted-foreground`}
            >
              <RotateCcw className="h-4 w-4" />
              Wis alles
            </button>
          </div>
        </div>

        {/* Centraal bewaren: per e-mail naar jezelf sturen */}
        <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4 sm:flex-row sm:items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jouw@e-mailadres.nl"
            className={`${fieldClass} sm:max-w-xs`}
          />
          <button
            type="button"
            onClick={sendEmail}
            disabled={sending}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-foreground hover:opacity-90 disabled:opacity-50"
          >
            <Mail className="h-4 w-4" />
            {sending ? "Versturen…" : "Mail mijn plan"}
          </button>
        </div>

        {status && <p className="mt-3 text-sm text-muted-foreground">{status}</p>}
        <p className="mt-3 text-sm text-muted-foreground">
          Je antwoorden worden automatisch in deze browser bewaard. Gebruik
          Exporteren/Importeren of e-mail om ze centraal te bewaren of op een
          ander apparaat te gebruiken.
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
              {tool.blocks.map((block, bi) => renderBlock(block, `${tool.id}-${bi}`))}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
