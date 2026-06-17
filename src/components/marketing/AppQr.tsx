import QRCode from "qrcode";
import { SITE_URL } from "@/lib/links";

// Real scannable QR (not decorative). Encodes the smart /stahnout redirect so a
// single code sends iOS → App Store and Android → Google Play. Generated as SVG
// at render time on the server — no client JS, no third-party QR service.
export async function AppQr({ className = "h-32 w-32" }: { className?: string }) {
  const target = `${SITE_URL}/stahnout`;
  const svg = await QRCode.toString(target, {
    type: "svg",
    margin: 1,
    errorCorrectionLevel: "M",
    color: { dark: "#0F172A", light: "#FFFFFF" },
  });
  return (
    <div
      className={className}
      role="img"
      aria-label="QR kód pro stažení aplikace"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
