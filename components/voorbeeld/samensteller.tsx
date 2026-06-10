"use client";

import { useState, type ChangeEvent, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight, Check, ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { secties } from "@/components/voorbeeld/preview/sections";
import {
  MerkContext,
  standaardMerk,
  type Merk,
} from "@/components/voorbeeld/preview/brand-context";

function leesAlsDataUrl(file: File): Promise<string> {
  return new Promise((res) => {
    const r = new FileReader();
    r.onload = () => res(r.result as string);
    r.readAsDataURL(file);
  });
}

const veld =
  "w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-brand";

function MerkStap({
  merk,
  setMerk,
}: {
  merk: Merk;
  setMerk: (m: Merk) => void;
}) {
  const [geenWebsite, setGeenWebsite] = useState(false);

  const onLogo = async (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setMerk({ ...merk, logo: await leesAlsDataUrl(f) });
  };
  const onAfb = async (e: ChangeEvent<HTMLInputElement>) => {
    const fs = Array.from(e.target.files ?? []).slice(0, 3);
    const urls = await Promise.all(fs.map(leesAlsDataUrl));
    setMerk({ ...merk, afbeeldingen: urls });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Jouw merk</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Vul je gegevens in — de preview rechts wordt meteen persoonlijk.
        </p>
      </div>

      {/* Website / geen website */}
      <div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">
            {geenWebsite ? "Bedrijfsnaam" : "Website"}
          </label>
          <label className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <input
              type="checkbox"
              className="accent-brand"
              checked={geenWebsite}
              onChange={(e) => setGeenWebsite(e.target.checked)}
            />
            Ik heb (nog) geen website
          </label>
        </div>
        <div className="mt-2 flex gap-2">
          <input
            className={veld}
            placeholder={geenWebsite ? "Jouw bedrijfsnaam" : "jouwbedrijf.nl"}
            value={merk.naam}
            onChange={(e) => setMerk({ ...merk, naam: e.target.value })}
          />
          {!geenWebsite && (
            <button
              type="button"
              disabled
              title="Binnenkort: gegevens automatisch ophalen"
              className="shrink-0 cursor-not-allowed rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted-foreground opacity-60"
            >
              Ophalen
            </button>
          )}
        </div>
        {!geenWebsite && (
          <p className="mt-1.5 text-xs text-muted-foreground">
            Hiermee halen we straks automatisch je gegevens, logo en kleuren op.
          </p>
        )}
      </div>

      {/* KvK */}
      <div>
        <label className="text-sm font-medium">KvK-nummer</label>
        <input
          className={cn(veld, "mt-2")}
          placeholder="12345678"
          inputMode="numeric"
          value={merk.kvk}
          onChange={(e) =>
            setMerk({ ...merk, kvk: e.target.value.replace(/\D/g, "").slice(0, 8) })
          }
        />
        <p className="mt-1.5 text-xs text-muted-foreground">
          Voor kloppende bedrijfsgegevens in de footer (KvK-koppeling volgt).
        </p>
      </div>

      {/* Logo */}
      <div>
        <label className="text-sm font-medium">Logo</label>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-border bg-card">
            {merk.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={merk.logo} alt="" className="h-full w-full object-contain" />
            ) : (
              <ImagePlus className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
          <label className="cursor-pointer rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted">
            Logo uploaden
            <input type="file" accept="image/*" className="hidden" onChange={onLogo} />
          </label>
          {merk.logo && (
            <button
              type="button"
              disabled
              title="Binnenkort: achtergrond automatisch verwijderen"
              className="cursor-not-allowed rounded-lg border border-border px-3 py-2 text-xs text-muted-foreground opacity-60"
            >
              Achtergrond verwijderen
            </button>
          )}
        </div>
      </div>

      {/* Afbeeldingen */}
      <div>
        <label className="text-sm font-medium">Afbeeldingen (max. 3)</label>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-border bg-card"
              >
                {merk.afbeeldingen[i] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={merk.afbeeldingen[i]} alt="" className="h-full w-full object-cover" />
                ) : (
                  <ImagePlus className="h-4 w-4 text-muted-foreground/50" />
                )}
              </div>
            ))}
          </div>
          <label className="cursor-pointer rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted">
            Kies afbeeldingen
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={onAfb}
            />
          </label>
        </div>
      </div>

      {/* Kleuren */}
      <div className="grid grid-cols-2 gap-4">
        {(
          [
            ["Primaire kleur", "primair"],
            ["Secundaire kleur", "secundair"],
          ] as const
        ).map(([label, key]) => (
          <div key={key}>
            <label className="text-sm font-medium">{label}</label>
            <div className="mt-2 flex items-center gap-2">
              <input
                type="color"
                value={merk[key]}
                onChange={(e) => setMerk({ ...merk, [key]: e.target.value })}
                className="h-9 w-12 cursor-pointer rounded border border-border bg-card"
              />
              <span className="text-xs uppercase text-muted-foreground">
                {merk[key]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Samensteller() {
  const [merk, setMerk] = useState<Merk>(standaardMerk);
  const [actief, setActief] = useState(0);
  const [selecties, setSelecties] = useState<number[]>(() =>
    secties.map(() => 0),
  );

  const stappen = ["Jouw merk", ...secties.map((s) => s.label)];
  const opMerk = actief === 0;
  const sIndex = actief - 1;
  const sectie = opMerk ? null : secties[sIndex];
  const kies = (v: number) =>
    setSelecties((s) => s.map((x, i) => (i === sIndex ? v : x)));

  const vars = {
    "--brand": merk.primair,
    "--accent": merk.secundair,
  } as CSSProperties;

  return (
    <MerkContext.Provider value={merk}>
      <div className="grid gap-8 lg:grid-cols-[1fr_440px]">
        {/* Kiezer */}
        <div>
          <div className="flex flex-wrap gap-2">
            {stappen.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => setActief(i)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                  i === actief
                    ? "bg-brand text-white"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {i + 1}. {label}
              </button>
            ))}
          </div>

          <div className="mt-6">
            {opMerk || !sectie ? (
              <MerkStap merk={merk} setMerk={setMerk} />
            ) : (
              <>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                  Stap {actief + 1} van {stappen.length}
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  Kies een {sectie.label.toLowerCase()}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Klik op een variant — de preview rechts past zich meteen aan.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {sectie.varianten.map((naam, v) => {
                    const gekozen = selecties[sIndex] === v;
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
                        <div
                          className="pointer-events-none h-28 overflow-hidden bg-background"
                          style={vars}
                        >
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
              </>
            )}
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
                setActief((i) => Math.min(stappen.length - 1, i + 1))
              }
              disabled={actief === stappen.length - 1}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-40"
            >
              {opMerk ? "Begin met samenstellen" : "Volgende"}
              <ArrowRight className="h-4 w-4" />
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
                {merk.naam || "jouw-website.nl"}
              </span>
            </div>
            <div className="h-[560px] overflow-y-auto bg-background">
              <div style={{ zoom: 0.5, ...vars }}>
                {secties.map((s, i) => (
                  <s.Render key={s.id} variant={selecties[i]} />
                ))}
              </div>
            </div>
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Eerste opzet — kleuren, logo, naam en beeld werken live mee.
          </p>
        </div>
      </div>
    </MerkContext.Provider>
  );
}
