"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button, Logo } from "@/components/ui";

const rotatingLabels = [
  "Corporate Events.",
  "Office Parties.",
  "Weddings.",
  "Private Events.",
];

interface HeroProps {
  headline?: React.ReactNode;
  subtitle?: string;
  showLogo?: boolean;
}

export default function Hero({
  headline,
  subtitle = "We bring the coffee bar to your event. You just pick a date.",
  showLogo = true,
}: HeroProps) {
  const [labelIndex, setLabelIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLabelIndex((i) => (i + 1) % rotatingLabels.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      <Image
        src="/photos/hero-placeholder.jpg"
        alt="Barista preparing cold brew at a mobile coffee cart"
        fill
        sizes="100vw"
        className="object-cover sepia-[.3] brightness-[0.9]"
        priority
      />
      <div className="absolute inset-0 bg-espresso/60" />

      <div className="relative mx-auto max-w-3xl text-center">
        {showLogo && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Logo variant="outline" size="lg" />
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`${showLogo ? "mt-8" : ""} text-3xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.3)]`}
        >
          {headline ?? (
            <>
              Houston&apos;s Mobile Coffee Bar for
              <span className="block h-[1.2em] relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={labelIndex}
                    className="hero-shimmer absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    {rotatingLabels[labelIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-base text-white/70 sm:text-lg max-w-lg mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex flex-col items-center gap-2">
            <Button href="#contact">Book My Event</Button>
            <span className="text-xs text-white/40">No commitment &middot; Same-day response</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
