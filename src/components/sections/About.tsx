"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
            About Us
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-espresso/60">
            Caffeinated is a mobile espresso bar based in Houston, Texas. We cater corporate events,
            weddings, and private functions across the metro area. We started because we believed
            coffee catering should be as polished as the events we serve — professional, reliable,
            and effortless for the person booking it.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-espresso/60">
            Every detail is handled. Every event runs smoothly. And every guest gets a great cup of coffee.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
