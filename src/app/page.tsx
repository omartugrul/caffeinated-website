import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Hero,
  LogoCarousel,
  HowItWorks,
  Menu,
  Packages,
  About,
  Gallery,
  Testimonials,
  FAQ,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCarousel />
        <HowItWorks />
        <Menu />
        <Packages />
        <About />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
