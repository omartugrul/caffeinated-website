"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Our team couldn't stop talking about it. The drinks were incredible and the setup looked so professional. We've already booked them for our next quarterly.",
    author: "Sarah M.",
    role: "Office Manager, Tech Company",
  },
  {
    quote:
      "They made our wedding cocktail hour so special. Guests were raving about the oat milk lattes. The branded cups were a perfect touch.",
    author: "Priya & David",
    role: "Wedding, River Oaks",
  },
  {
    quote:
      "I've booked a lot of vendors for corporate events. Caffeinated was the easiest experience I've had — from quote to day-of, everything was seamless.",
    author: "Marcus T.",
    role: "Event Coordinator",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
          What People Say
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-espresso/10 bg-cream p-8 flex flex-col"
            >
              <p className="text-espresso/70 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-espresso">{t.author}</p>
                <p className="text-xs text-espresso/40 mt-0.5">{t.role}</p>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
