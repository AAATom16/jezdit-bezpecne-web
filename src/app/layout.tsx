import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { PROGRAM_TAGLINE, SITE_NAME, SITE_URL } from "@/lib/links";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#00A79D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${PROGRAM_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Aplikace, která mění tvůj bezpečný styl jízdy na slevy u partnerů. Privacy-first, bez sledování. Část odměn jde na charitu.",
  keywords: [
    "bezpečná jízda",
    "slevy pro řidiče",
    "ISA",
    "charita",
    "telematics",
    "Česko",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "Bezpečná jízda se vyplatí — sbírej skóre, uplatni slevy, podpoř charitu.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Bezpečná jízda se vyplatí — sbírej skóre, uplatni slevy, podpoř charitu.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
