import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const target = process.env.PARTNERS_BACKEND_URL;

    if (!target) {
      console.info("[partners/signup] received (no backend configured)", {
        ic: body?.step1?.ic,
        email: body?.step2?.email,
      });
      return NextResponse.json({ ok: true, mocked: true }, { status: 202 });
    }

    const res = await fetch(target, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "upstream" },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "bad-request" }, { status: 400 });
  }
}
