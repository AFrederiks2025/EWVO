import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Contactformulier-handler.
 * Verstuurt via Resend zodra RESEND_API_KEY + CONTACT_TO_EMAIL zijn gezet;
 * anders logt de route het bericht (zodat het lokaal/zonder key blijft werken).
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
    const phone = String(data.phone ?? "").trim();
    const message = String(data.message ?? "").trim();

    if (!name || !message || !email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Ongeldige invoer." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from =
      process.env.CONTACT_FROM_EMAIL || "EWVO Website <onboarding@resend.dev>";

    if (apiKey && to) {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: `Nieuw contactbericht van ${name}`,
        text: [
          `Naam: ${name}`,
          `E-mail: ${email}`,
          `Telefoon: ${phone || "-"}`,
          "",
          message,
        ].join("\n"),
      });
      if (error) {
        console.error("Resend-fout:", error);
        return NextResponse.json(
          { ok: false, error: "Verzenden mislukt." },
          { status: 502 },
        );
      }
    } else {
      // Nog geen e-mailservice gekoppeld: log het bericht.
      console.log("Nieuw contactbericht (geen RESEND_API_KEY):", {
        name,
        email,
        phone,
        message,
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Serverfout." },
      { status: 500 },
    );
  }
}
