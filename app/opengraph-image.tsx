import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/config/site";

export const alt = `${siteConfig.name}, ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "flex-start",
        background: "#08111b",
        color: "#e7ecea",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px 80px",
        width: "100%",
      }}
    >
      <div
        style={{
          color: "#42c7a5",
          display: "flex",
          fontSize: 24,
          letterSpacing: "0.12em",
        }}
      >
        SOFTWARE · MACHINE LEARNING · SYSTEMS
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: "-0.045em",
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ color: "#a6b3b0", display: "flex", fontSize: 38 }}>
          {siteConfig.title}
        </div>
      </div>
      <div style={{ color: "#a6b3b0", display: "flex", fontSize: 22 }}>
        Intelligent energy · Computer vision · Data platforms
      </div>
    </div>,
    size,
  );
}
