import { ImageResponse } from "next/og";

export const alt = "Caffeinated - Houston's Mobile Espresso Bar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F9F6F1",
          padding: "60px",
        }}
      >
        {/* Logo wordmark */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            fontStyle: "italic",
            letterSpacing: "-0.03em",
            textTransform: "lowercase",
            background: "linear-gradient(to right, #C8773A 0%, #8B4513 40%, #1A1713 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
          }}
        >
          caffeinated.
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#2D1B14",
            marginTop: 24,
            opacity: 0.7,
            letterSpacing: "-0.01em",
          }}
        >
          Houston's Mobile Espresso Bar
        </div>

        {/* Service line */}
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 40,
            fontSize: 18,
            color: "#2D1B14",
            opacity: 0.4,
          }}
        >
          <span>Corporate Events</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>Weddings</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>Private Functions</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
