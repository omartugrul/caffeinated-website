import { ImageResponse } from "next/og";

export const alt = "Caffeinated - Houston's Mobile Espresso Bar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Load Plus Jakarta Sans 800 Italic (matches our logo exactly)
  const plusJakartaBoldItalic = await fetch(
    "https://fonts.gstatic.com/s/plusjakartasans/v12/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ2lDh_Q.ttf"
  ).then((res) => res.arrayBuffer());

  // Load Geist Sans Regular (matches our body text)
  const geistRegular = await fetch(
    "https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-400-normal.ttf"
  ).then((res) => res.arrayBuffer());

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
        }}
      >
        {/* Logo wordmark — exact match to Navbar styling */}
        <div
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: 80,
            fontWeight: 800,
            fontStyle: "italic",
            letterSpacing: "-0.03em",
            textTransform: "lowercase" as const,
            background: "linear-gradient(to right, #C8773A 0%, #8B4513 40%, #1A1713 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
          }}
        >
          caffeinated.
        </div>

        {/* Tagline — Geist Sans, same muted espresso color as site body text */}
        <div
          style={{
            fontFamily: "Geist Sans",
            fontSize: 26,
            color: "#2D1B14",
            marginTop: 20,
            opacity: 0.55,
            letterSpacing: "-0.01em",
          }}
        >
          Houston&apos;s Mobile Espresso Bar
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Plus Jakarta Sans",
          data: plusJakartaBoldItalic,
          weight: 800,
          style: "italic",
        },
        {
          name: "Geist Sans",
          data: geistRegular,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
