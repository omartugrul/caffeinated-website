import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { suburbs, getSuburbBySlug } from "@/content/suburbs";
import { packages } from "@/content/packages";
import { siteUrl } from "@/content/site";
import { Section, SectionHeading, Button } from "@/components/ui";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    areaServed: {
      "@type": "City",
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
      "Coffee Catering",
      "Mobile Espresso Bar",
      "Corporate Event Catering",
      "Wedding Coffee Service",
      "Cold Brew Catering",
    ],
  };

  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(suburbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Header */}
      <Section bg="cream" className="pt-36">
        <h1 className="text-center text-4xl font-bold tracking-tight text-espresso sm:text-5xl">
          {suburb.headline}
        </h1>
        <p className="mt-6 text-center text-lg leading-relaxed text-espresso/70 max-w-3xl mx-auto">
          {suburb.intro}
        </p>
      </Section>

      {/* Venues */}
      <Section bg="white">
        <SectionHeading subtitle={`Popular spots where we set up in ${suburb.name}.`}>
          Local Venues &amp; Spaces We Serve
        </SectionHeading>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {suburb.venues.map((venue) => (
            <li
              key={venue}
              className="flex items-start gap-3 rounded-xl bg-cream px-5 py-4"
            >
              <span className="mt-0.5 text-accent" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.145c.186-.1.429-.24.713-.427.568-.374 1.292-.944 2.009-1.71C14.7 15.197 16 12.806 16 10a6 6 0 00-12 0c0 2.806 1.3 5.197 2.663 6.64a13.076 13.076 0 002.009 1.71 8.51 8.51 0 00.713.427 5.741 5.741 0 00.281.145l.018.008.006.003zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-sm font-medium text-espresso/80">{venue}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Packages */}
      <Section bg="cream">
        <SectionHeading subtitle="Simple pricing, no hidden fees.">
          Our Packages
        </SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border p-6 flex flex-col ${
                pkg.highlighted
                  ? "border-accent bg-white shadow-md"
                  : "border-espresso/10 bg-white"
              }`}
            >
              <h3 className="text-lg font-bold text-espresso">{pkg.name}</h3>
              <p className="mt-1 text-2xl font-bold text-accent">{pkg.price}</p>
              <p className="mt-2 text-sm text-espresso/60 flex-1">{pkg.description}</p>
              <Button href="/#contact" variant="primary" size="full" className="mt-6">
                Get a Quote
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="white">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
            Ready to book in {suburb.name}?
          </h2>
          <p className="mt-4 text-espresso/60 text-lg">
            Tell us about your event and we&apos;ll send a custom quote within 24 hours.
          </p>
          <div className="mt-8">
            <Button href="/#contact" variant="amber" size="default">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
