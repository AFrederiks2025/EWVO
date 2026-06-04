"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-ring/40";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <h3 className="text-lg font-semibold">Bedankt voor je bericht!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We nemen zo snel mogelijk contact met je op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot tegen spam — door echte gebruikers niet in te vullen. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Naam</span>
          <input name="name" required className={fieldClass} />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">E-mailadres</span>
          <input name="email" type="email" required className={fieldClass} />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium">
          Telefoonnummer{" "}
          <span className="font-normal text-muted-foreground">(optioneel)</span>
        </span>
        <input name="phone" type="tel" className={fieldClass} />
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium">Je bericht</span>
        <textarea name="message" required rows={5} className={fieldClass} />
      </label>

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Versturen…" : "Verstuur bericht"}
      </Button>

      {status === "error" ? (
        <p className="text-sm text-red-500">
          Er ging iets mis. Probeer het later opnieuw of bel ons gerust.
        </p>
      ) : null}
    </form>
  );
}
