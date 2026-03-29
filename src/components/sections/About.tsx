"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui";

export default function About() {
  return (
    <Section id="about" bg="white" maxWidth="3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <SectionHeading>About Us</SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-espresso/60">
            Caffeinated is a mobile espresso bar based in Houston, Texas. We cater corporate events,
            weddings, and private functions across the metro area. We started because we believed
            coffee catering should be as polished as the events we serve. Professional, reliable,
            and effortless for the person booking it.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-espresso/60">
            Every detail is handled. Every event runs smoothly. And every guest gets a great cup of coffee.
          </p>
        </motion.div>
    </Section>
  );
}
