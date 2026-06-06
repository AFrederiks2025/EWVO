import { NextResponse } from "next/server";
import { Resend } from "resend";
import { scalingUpPillars } from "@/lib/content/scaling-up";

type Answers = Record<string, string | boolean>;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Bouwt per tool een lijst van ingevulde antwoorden (lege velden overgeslagen). */
function buildSections(answers: Answers) {
  const sections: {
    pillar: string;
    tool: string;
    lines: { label: string; value: string }[];
  }[] = [];

  for (const pillar of scalingUpPillars) {
    for (const tool of pillar.tools) {
      const lines: { label: string; value: string }[] = [];
      for (const block of tool.blocks) {
        if (block.kind === "fields") {
          for (const f of block.fields) {
            const v = answers[f.id];
            if (typeof v === "string" && v.trim())
              lines.push({ label: f.label ?? "—", value: v.trim() });
          }
        } else if (block.kind === "checklist") {
          for (const item of block.items) {
            if (answers[item.id] === true)
              lines.push({ label: "✓", value: item.label ?? "" });
          }
        } else {
          for (const row of block.rows) {
            row.cells.forEach((cell, ci) => {
              const v = answers[cell.id];
              if (typeof v === "string" && v.trim())
                lines.push({
                  label: `${row.label} · ${block.columns[ci]}`,
                  value: v.trim(),
                });
            });
          }
        }
      }
      if (lines.length) sections.push({ pillar: pillar.name, tool: tool.title, lines });
    }
  }
  return sections;
}

/**
 * Verstuurt het ingevulde Scaling Up-plan per e-mail (env-gated via Resend).
 * Zonder RESEND_API_KEY antwoordt de route { ok: true, delivered: false },
 * zodat de UI netjes naar 'Exporteren' kan verwijzen.
 */
export async function POST(request: Request) {
  try {
    const data = (await request.json()) as { email?: unknown; answers?: unknown };
    const email = String(data.email ?? "").trim();
    if (!email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Ongeldig e-mailadres." },
        { status: 400 },
      );
    }

    const answers = (
      data.answers && typeof data.answers === "object" ? data.answers : {}
    ) as Answers;
    const sections = buildSections(answers);
    const filled = sections.reduce((n, s) => n + s.lines.length, 0);

    const apiKey = process.env.RESEND_API_KEY;
    const from =
      process.env.CONTACT_FROM_EMAIL || "EWVO Website <onboarding@resend.dev>";

    if (!apiKey) {
      // Geen e-mailservice gekoppeld: laat de UI naar Exporteren verwijzen.
      return NextResponse.json({ ok: true, delivered: false });
    }

    const html = [
      `<h1>Scaling Up-plan — EWVO</h1>`,
      `<p>${filled} ingevulde velden.</p>`,
      ...sections.map(
        (s) =>
          `<h2>${escapeHtml(s.pillar)} — ${escapeHtml(s.tool)}</h2><ul>` +
          s.lines
            .map(
              (l) =>
                `<li><strong>${escapeHtml(l.label)}:</strong> ${escapeHtml(l.value)}</li>`,
            )
            .join("") +
          `</ul>`,
      ),
      `<hr/><p style="color:#666;font-size:13px">Voor herimport: bewaar onderstaande JSON en plak/gebruik 'Importeren' op /scaling-up.</p>`,
      `<pre style="white-space:pre-wrap;font-size:12px;background:#f4f5f8;padding:12px;border-radius:8px">${escapeHtml(
        JSON.stringify({ version: 1, answers }),
      )}</pre>`,
    ].join("");

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: email,
      subject: `Scaling Up-plan EWVO — ${filled} velden ingevuld`,
      html,
    });
    if (error) {
      console.error("Resend-fout (scaling-up):", error);
      return NextResponse.json(
        { ok: false, error: "Verzenden mislukt." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Serverfout." },
      { status: 500 },
    );
  }
}
