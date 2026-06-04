import { NextResponse } from "next/server";

/**
 * Contactformulier-handler.
 * TODO: koppel een echte e-mailservice (bijv. Resend) — zie MERGE-PLAN.md §8.
 * Nu logt de route het bericht en geeft succes terug.
 */
export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Record<string, unknown>;

    // Honeypot: gevuld = bot.
    if (typeof data.company === "string" && data.company.length > 0) {
      return NextResponse.json({ ok: true });
    }

    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const message = String(data.message ?? "").trim();

    if (!name || !message || !email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Ongeldige invoer." },
        { status: 400 },
      );
    }

    // TODO: vervang door verzending via Resend / e-mailservice.
    console.log("Nieuw contactbericht:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Serverfout." },
      { status: 500 },
    );
  }
}
