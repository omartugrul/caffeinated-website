import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { suburbs, getSuburbBySlug } from "@/content/suburbs";
import { faqs } from "@/content/faq";
import { siteUrl } from "@/content/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Hero,
  LogoCarousel,
  HowItWorks,
  Packages,
  Menu,
  Gallery,
  FAQ,
  Contact,
} from "@/components/sections";

export function generateStaticParams() {
  return suburbs.map((suburb) => ({ suburb: suburb.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ suburb: string }>;
}): Promise<Metadata> {
  const { suburb: slug } = await params;
  const suburb = getSuburbBySlug(slug);
  if (!suburb) return {};

  const title = `Coffee Catering in ${suburb.name} | Caffeinated`;
  const canonical = `${siteUrl}/${suburb.slug}`;

  return {
    title,
    description: suburb.description,
    alternates: { canonical },
    openGraph: {
      title,
      description: suburb.description,
      url: canonical,
      siteName: "Caffeinated",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: suburb.description,
    },
  };
}

export default async function SuburbPage({
  params,
}: {
  params: Promise<{ suburb: string }>;
}) {
  const { suburb: slug } = await params;
  const suburb = getSuburbBySlug(slug);
  if (!suburb) notFound();

  const suburbJsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": `${siteUrl}/${suburb.slug}#business`,
    name: "Caffeinated",
    description: suburb.description,
    url: `${siteUrl}/${suburb.slug}`,
    image: `${siteUrl}/opengraph-image`,
    email: "hello@caffeinatedhtx.com",
    sameAs: [
      "https://www.instagram.com/caffeinatedhtx/",
    ],
    areaServed: {
      "@type": suburb.areaType,
      name: suburb.name,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: suburb.name,
      addressRegion: "TX",
      addressCountry: "US",
    },
    priceRange: "$$",
    currenciesAccepted: "USD",
    knowsAbout: [
      `Coffee Catering in ${suburb.name}`,
      "Mobile Coffee Bar",
      "Corporate Event Catering",
      "Wedding Coffee Service",
      "Cold Brew Catering",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(suburbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero
          headline={suburb.headline}
          subtitle={suburb.subtitle}
          showLogo={false}
        />
        <section className="bg-cream py-16 px-6">
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-espresso/70">
            {suburb.intro}
          </p>
        </section>
        <LogoCarousel />
        <HowItWorks />
        <Packages />
        <Menu />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
