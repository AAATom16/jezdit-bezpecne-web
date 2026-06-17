import { NextResponse, type NextRequest } from "next/server";
import { APP_LINKS } from "@/lib/links";

// One QR for both platforms: this endpoint sniffs the device and forwards to
// the right store. Desktop scanners land on the homepage (both store buttons).
export const dynamic = "force-dynamic";

export function GET(req: NextRequest) {
  const ua = req.headers.get("user-agent") ?? "";
  if (/android/i.test(ua)) return NextResponse.redirect(APP_LINKS.android);
  if (/iphone|ipad|ipod/i.test(ua)) return NextResponse.redirect(APP_LINKS.ios);
  return NextResponse.redirect(new URL("/", req.url));
}
