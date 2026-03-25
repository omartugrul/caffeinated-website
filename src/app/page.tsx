import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorSwitcher from "@/components/ColorSwitcher";
import {
  Hero,
  LogoCarousel,
  HowItWorks,
  Packages,
  WhyCaffeinated,
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
        <Packages />
        <WhyCaffeinated />
        <About />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ColorSwitcher />
    </>
  );
}
