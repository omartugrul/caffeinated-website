"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      <Image
        src="/photos/hero-placeholder.jpg"
        alt="Barista preparing espresso at a mobile coffee cart"
        fill
        className="object-cover sepia-[.3] brightness-[0.9]"
        priority
      />
      <div className="absolute inset-0 bg-espresso/60" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Logo wordmark */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl tracking-[-0.03em] lowercase leading-none"
          style={{
            fontFamily: "var(--font-plus-jakarta)",
            fontWeight: 800,
            fontStyle: "italic",
            color: "transparent",
            WebkitTextStroke: "1.5px #B07840",
          }}
        >
          caffeinated.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 text-3xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.3)]"
        >
          Your next event,{" "}
          <span className="hero-shimmer">elevated.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-base text-white/70 sm:text-lg max-w-lg mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
        >
          Mobile espresso bar for corporate events, weddings, and private functions in Houston.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Book Your Event
          </a>
        </motion.div>
      </div>
    </section>
  );
}
