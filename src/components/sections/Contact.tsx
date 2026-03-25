"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
            Get Your Free Quote
          </h2>
          <p className="mt-4 text-center text-espresso/60">
            Tell us about your event. We&apos;ll get back to you within a few hours with a custom quote.
          </p>
          <form className="mt-10 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First name"
                className="rounded-lg border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-accent focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                className="rounded-lg border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-accent focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="rounded-lg border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-accent focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone (optional)"
              className="rounded-lg border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-accent focus:outline-none"
            />
            <select className="rounded-lg border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso/40 focus:border-accent focus:outline-none">
              <option value="">Event type</option>
              <option>Corporate Event</option>
              <option>Wedding</option>
              <option>Private Function</option>
              <option>Office Pop-Up</option>
              <option>Other</option>
            </select>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="date"
                className="rounded-lg border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso/40 focus:border-accent focus:outline-none"
              />
              <input
                type="number"
                placeholder="Guest count"
                className="rounded-lg border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-accent focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Anything else we should know? (optional)"
              rows={3}
              className="rounded-lg border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-accent focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="mt-2 rounded-full bg-accent py-4 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            >
              Send My Quote Request
            </button>
            <p className="text-center text-xs text-espresso/30">
              No spam. We&apos;ll only use this to send your quote.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
