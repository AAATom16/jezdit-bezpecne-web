import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jezdit bezpečně se vyplatí";
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
            "linear-gradient(135deg, #047857 0%, #10B981 60%, #6EE7B7 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            🛡
          </div>
          <span style={{ fontSize: 28, fontWeight: 600 }}>Jezdit bezpečně</span>
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
