import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/content/site";
import { packages } from "@/content/packages";

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
    "book a barista for corporate event Houston",
    "mobile espresso cart for wedding Houston TX",
    "office coffee catering near me",
    "coffee truck for company party Houston",
    "how much does coffee catering cost Houston",
    "cold brew catering Houston",
    "coffee cart for corporate event Houston",
    "event coffee service Houston TX",
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
  "@type": "FoodEstablishment",
  "@id": `${siteUrl}/#business`,
  name: "Caffeinated",
  description:
    "Mobile espresso cart for corporate events, weddings, and private functions in Houston, TX.",
  url: siteUrl,
  email: "hello@caffeinatedhtx.com",
  telephone: "", // TODO: Add phone number
  image: `${siteUrl}/opengraph-image`,
  sameAs: [
    "https://www.instagram.com/caffeinatedhtx/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.7604,
    longitude: -95.3698,
  },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Katy" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "City", name: "The Woodlands" },
    { "@type": "City", name: "Pearland" },
    { "@type": "City", name: "Clear Lake" },
  ],
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
  currenciesAccepted: "USD",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Coffee Catering Packages",
    itemListElement: packages.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.description,
      price: p.price.replace(/[$,]/g, ""),
      priceCurrency: "USD",
    })),
  },
  knowsAbout: [
    "Coffee Catering",
    "Mobile Espresso Bar",
    "Corporate Event Catering",
    "Wedding Coffee Service",
    "Office Coffee Catering",
    "Cold Brew Catering",
    "Mobile Coffee Cart",
    "Event Barista Service",
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
