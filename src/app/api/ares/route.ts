import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Official ARES (Czech business registry) REST API. Called server-side so the
// browser isn't subject to ARES CORS; the form hits our same-origin /api/ares.
const ARES_BASE =
  "https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty";

type LegalForm = "s.r.o." | "a.s." | "OSVČ" | "jiné";

/** Map an ARES `pravniForma` code to the form's legal-form enum. */
function mapLegalForm(code?: string, name?: string): LegalForm {
  switch (code) {
    case "112": // Společnost s ručením omezeným
      return "s.r.o.";
    case "121": // Akciová společnost
      return "a.s.";
    case "101": // Fyzická osoba podnikající tuzemská
    case "100":
    case "424":
    case "425":
      return "OSVČ";
    default:
      break;
  }
  const n = (name ?? "").toLowerCase();
  if (n.includes("s.r.o") || n.includes("s. r. o")) return "s.r.o.";
  if (n.includes("a.s") || n.includes("akciová")) return "a.s.";
  return "jiné";
}

type AresSubject = {
  ico?: string;
  obchodniJmeno?: string;
  pravniForma?: string;
  sidlo?: { textovaAdresa?: string };
};

function normalize(s: AresSubject) {
  return {
    ico: s.ico ?? "",
    name: s.obchodniJmeno ?? "",
    legalForm: mapLegalForm(s.pravniForma, s.obchodniJmeno),
    address: s.sidlo?.textovaAdresa ?? "",
  };
}

async function fetchAres(input: RequestInfo, init?: RequestInit) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 8000);
  try {
    return await fetch(input, {
      ...init,
      signal: ctrl.signal,
      headers: { accept: "application/json", ...(init?.headers ?? {}) },
    });
  } finally {
    clearTimeout(t);
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const ico = (url.searchParams.get("ico") ?? "").replace(/\D/g, "");
  const q = (url.searchParams.get("q") ?? "").trim();

  try {
    // 1) Exact lookup by IČO (8 digits)
    if (ico) {
      if (ico.length !== 8) {
        return NextResponse.json({ error: "ico-invalid" }, { status: 400 });
      }
      const res = await fetchAres(`${ARES_BASE}/${ico}`);
      if (res.status === 404) {
        return NextResponse.json({ error: "not-found" }, { status: 404 });
      }
      if (!res.ok) {
        return NextResponse.json({ error: "upstream" }, { status: 502 });
      }
      const data = (await res.json()) as AresSubject;
      return NextResponse.json({ subject: normalize(data) });
    }

    // 2) Fulltext search by company name → suggestions
    if (q.length >= 2) {
      const res = await fetchAres(`${ARES_BASE}/vyhledat`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ obchodniJmeno: q, pocet: 8, start: 0 }),
      });
      if (!res.ok) {
        return NextResponse.json({ error: "upstream" }, { status: 502 });
      }
      const data = (await res.json()) as { ekonomickeSubjekty?: AresSubject[] };
      const items = (data.ekonomickeSubjekty ?? []).map(normalize).filter((s) => s.ico);
      return NextResponse.json({ items });
    }

    return NextResponse.json({ error: "missing-query" }, { status: 400 });
  } catch {
    // Includes the 8s timeout abort — fail soft so the form stays usable.
    return NextResponse.json({ error: "ares-unavailable" }, { status: 503 });
  }
}
