import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Sanity-webhook → on-demand revalidatie.
 * Stel in Sanity (Manage → API → Webhooks) een webhook in naar:
 *   POST https://www.ewvo.nl/api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
 * zodat gepubliceerde wijzigingen direct live komen.
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const expected = process.env.SANITY_REVALIDATE_SECRET;

  if (!expected || secret !== expected) {
    return NextResponse.json(
      { ok: false, message: "Ongeldige of ontbrekende secret." },
      { status: 401 },
    );
  }

  // Revalideer de hele site (eenvoudig en robuust).
  revalidatePath("/", "layout");

  return NextResponse.json({ ok: true, revalidated: true });
}
