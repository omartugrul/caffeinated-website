"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      {/* Background image */}
      <Image
        src="/photos/hero-placeholder.jpg"
        alt="Barista preparing espresso at a mobile coffee cart"
        fill
        className="object-cover sepia-[.3] brightness-[0.9]"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-espresso/60" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-[0.15em] text-white/70"
        >
          Houston&apos;s Mobile Espresso Bar
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-7xl"
        >
          Great Coffee.
          <br />
          Zero Hassle.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-white/80 sm:text-xl max-w-xl mx-auto"
        >
          We bring the full espresso bar to your corporate event, wedding, or private function.
          You just pick a date.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-block rounded-full bg-accent px-8 py-4 text-base font-medium text-white hover:opacity-90 transition-opacity"
          >
            Get a Free Quote
          </a>
          <a
            href="#packages"
            className="inline-block rounded-full border border-white/30 px-8 py-4 text-base font-medium text-white hover:bg-white/10 transition-colors"
          >
            See Packages
          </a>
        </motion.div>
      </div>
    </section>
  );
}
