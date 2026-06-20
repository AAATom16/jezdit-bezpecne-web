import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Perqo — Jezdit bezpečně se vyplatí";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #1F3A4A 0%, #2D9EAA 65%, #4DB2BA 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#FFC857",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 800,
              color: "#1F3A4A",
            }}
          >
            ✓
          </div>
          <span style={{ fontSize: 30, fontWeight: 800 }}>Perqo</span>
        </div>

        <div>
          <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.05 }}>
            Jezdit bezpečně
          </div>
          <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.05 }}>
            se vyplatí.
          </div>
          <div style={{ marginTop: 24, fontSize: 28, opacity: 0.95 }}>
            Sleva za bezpečnou jízdu. Část odměn na charitu.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, fontSize: 22, opacity: 0.9 }}>
          <span>iOS · Android</span>
          <span>·</span>
          <span>jezditbezpecne.cz</span>
        </div>
      </div>
    ),
    size
  );
}
