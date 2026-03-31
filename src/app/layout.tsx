import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["800"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Caffeinated | Houston's Mobile Espresso Bar",
  description:
    "Mobile espresso cart for corporate events, weddings, and private functions in Houston, TX. Book a barista in 60 seconds.",
  keywords: [
    "coffee catering Houston",
    "mobile coffee cart Houston",
    "espresso bar for events Houston",
    "corporate coffee catering Houston",
    "wedding coffee bar Houston",
    "coffee cart for office Houston",
    "mobile espresso cart Houston",
    "book a barista Houston",
  ],
  openGraph: {
    title: "Caffeinated | Houston's Mobile Espresso Bar",
    description:
      "Mobile espresso cart for corporate events, weddings, and private functions in Houston, TX. Book a barista in 60 seconds.",
    url: siteUrl,
    siteName: "Caffeinated",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caffeinated | Houston's Mobile Espresso Bar",
    description:
      "Mobile espresso cart for corporate events, weddings, and private functions in Houston, TX. Book a barista in 60 seconds.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Caffeinated",
  description:
    "Mobile espresso cart for corporate events, weddings, and private functions in Houston, TX.",
  url: siteUrl,
  telephone: "", // TODO: Add phone number
  areaServed: {
    "@type": "City",
    name: "Houston",
    containedInPlace: {
      "@type": "State",
      name: "Texas",
    },
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 29.7604,
      longitude: -95.3698,
    },
    geoRadius: "80467", // ~50 miles in meters
  },
  priceRange: "$$",
  knowsAbout: [
    "Coffee Catering",
    "Mobile Espresso Bar",
    "Corporate Event Catering",
    "Wedding Coffee Service",
    "Office Coffee Catering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${plusJakarta.variable} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
