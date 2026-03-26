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
import { faqs } from "@/content/faq";

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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
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
