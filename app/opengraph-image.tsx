import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — digitaal strategiebureau`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Standaard social-share-afbeelding (OG/Twitter) voor de hele site. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              width: "96px",
              height: "96px",
              borderRadius: "20px",
              backgroundColor: "#91b3bf",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "56px",
              fontWeight: 700,
              fontStyle: "italic",
            }}
          >
            w.
          </div>
          <div style={{ fontSize: "64px", fontWeight: 700, color: "#10242c" }}>
            {siteConfig.name}
          </div>
        </div>
        <div
          style={{
            marginTop: "40px",
            fontSize: "46px",
            fontWeight: 600,
            color: "#10242c",
            lineHeight: 1.2,
            maxWidth: "920px",
          }}
        >
          Digitale ecosystemen die meegroeien met jouw bedrijf
        </div>
        <div style={{ marginTop: "28px", fontSize: "30px", color: "#51616a" }}>
          Strategie · webdesign · branding · SEO · hosting
        </div>
        <div
          style={{
            marginTop: "48px",
            width: "120px",
            height: "8px",
            borderRadius: "4px",
            backgroundColor: "#ff6600",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
