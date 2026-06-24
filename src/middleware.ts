import { NextResponse, type NextRequest } from "next/server";

/**
 * "Coming soon" gate. When the env var COMING_SOON=1 is set on the running
 * server, every request is rewritten to /coming-soon and marked noindex —
 * the full site stays in the build, it's just hidden. Set COMING_SOON=0
 * (or unset) and redeploy to bring the real site back; no rebuild needed
 * since both modes ship in the same image.
 */
export function middleware(req: NextRequest) {
  if (process.env.COMING_SOON !== "1") return NextResponse.next();

  const { pathname } = req.nextUrl;

  // Let the placeholder itself + brand assets render normally.
  if (
    pathname === "/coming-soon" ||
    pathname.startsWith("/perqo-") || // /perqo-logo.png, /perqo-icon.png, /perqo-mark.png
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/coming-soon";
  const res = NextResponse.rewrite(url);
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export const config = {
  // Run on everything except Next internals + static image assets.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
