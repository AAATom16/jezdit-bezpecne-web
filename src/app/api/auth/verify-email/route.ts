import { NextResponse } from "next/server";

// Server-side proxy to the NestJS API (no browser CORS). Mirrors password-reset.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const API_BASE = process.env.API_BASE_URL ?? "https://jezdit-api-production.up.railway.app";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad-request" }, { status: 400 });
  }

  const data = (body ?? {}) as Record<string, unknown>;
  const token = typeof data.token === "string" ? data.token : "";
  if (token.length < 10) {
    return NextResponse.json({ ok: false, error: "invalid-input" }, { status: 400 });
  }

  try {
    const res = await fetch(`${API_BASE}/v1/auth/verify-email/confirm`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ token }),
    });
    if (!res.ok) {
      const code = res.status >= 500 ? "upstream" : "token-invalid";
      return NextResponse.json({ ok: false, error: code }, { status: res.status >= 500 ? 502 : 400 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "network" }, { status: 502 });
  }
}
