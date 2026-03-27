"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  eventType: string;
  date: string;
  guestCount: string;
  name: string;
  email: string;
  phone: string;
}

const eventIcons: Record<string, React.ReactNode> = {
  corporate: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  wedding: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  private: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  office: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
    </svg>
  ),
  other: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  ),
};

const eventTypes = [
  { value: "corporate", label: "Corporate Event" },
  { value: "wedding", label: "Wedding" },
  { value: "private", label: "Private Function" },
  { value: "office", label: "Office Pop-Up" },
  { value: "other", label: "Other" },
];

const stepVariants = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

function getMinDate() {
  const d = new Date();
  d.setDate(d.getDate() + 3);
  return d.toISOString().split("T")[0];
}

export default function Contact() {
  const [step, setStep] = useState(0);

  const {
    register,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onTouched",
    defaultValues: {
      eventType: "",
      date: "",
      guestCount: "",
      name: "",
      email: "",
      phone: "",
    },
  });

  const form = watch();

  const advanceToStep1 = async () => {
    const valid = await trigger(["eventType", "date", "guestCount"]);
    if (valid) setStep(1);
  };

  const handleSubmit = async () => {
    const valid = await trigger(["name", "email", "phone"]);
    if (valid) {
      // TODO: POST to /api/submit-quote -> Attio + Resend
      setStep(2);
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:outline-none transition-colors ${
      errors[field]
        ? "border-red-400 focus:border-red-400"
        : "border-espresso/20 focus:border-amber"
    }`;

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
            Let&apos;s Plan Your Event
          </h2>
          <p className="mt-4 text-center text-espresso/60">
            Tell us about your event. We respond within 2 hours with a custom quote.
          </p>

          {/* Progress bar */}
          {step < 2 && (
            <div className="mt-8 flex gap-2">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    i <= step ? "bg-amber" : "bg-espresso/10"
                  }`}
                />
              ))}
            </div>
          )}

          <div className="mt-8 min-h-[320px]">
            <AnimatePresence mode="wait">
              {/* Step 1: Event Details */}
              {step === 0 && (
                <motion.div
                  key="step0"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <p className="text-sm font-medium text-espresso mb-3">What type of event?</p>
                    <input type="hidden" {...register("eventType", { required: true })} />
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {eventTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setValue("eventType", type.value, { shouldValidate: true })}
                          className={`rounded-xl border px-4 py-3 text-sm text-left transition-all cursor-pointer ${
                            form.eventType === type.value
                              ? "border-amber bg-amber/5 text-espresso"
                              : errors.eventType
                                ? "border-red-300 text-espresso/60 hover:border-espresso/30"
                                : "border-espresso/10 text-espresso/60 hover:border-espresso/30"
                          }`}
                        >
                          <span className={`block mb-1.5 ${
                            form.eventType === type.value ? "text-amber" : "text-espresso/30"
                          }`}>
                            {eventIcons[type.value]}
                          </span>
                          {type.label}
                        </button>
                      ))}
                    </div>
                    {errors.eventType && (
                      <p className="mt-2 text-xs text-red-500">Please select an event type</p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-espresso mb-1.5">
                        Event date
                      </label>
                      <input
                        type="date"
                        min={getMinDate()}
                        {...register("date", {
                          required: "Please select a date",
                          validate: (v) => {
                            const selected = new Date(v);
                            const min = new Date();
                            min.setDate(min.getDate() + 2);
                            return selected > min || "Date must be at least 3 days out";
                          },
                        })}
                        className={inputClass("date")}
                      />
                      {errors.date && (
                        <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-espresso mb-1.5">
                        Guest count
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 75"
                        {...register("guestCount", {
                          required: "Please enter a guest count",
                          min: { value: 1, message: "Must be at least 1" },
                          max: { value: 10000, message: "Please contact us directly for 10,000+" },
                        })}
                        className={inputClass("guestCount")}
                      />
                      {errors.guestCount && (
                        <p className="mt-1 text-xs text-red-500">{errors.guestCount.message}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={advanceToStep1}
                    className="mt-2 rounded-full bg-accent py-3.5 text-sm font-medium text-white hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {/* Step 2: Contact Info */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-5"
                >
                  <p className="text-sm text-espresso/50">
                    Almost there. Where should we send your quote?
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-espresso mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      {...register("name", {
                        required: "Please enter your name",
                        minLength: { value: 2, message: "Name is too short" },
                      })}
                      className={inputClass("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-espresso mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      {...register("email", {
                        required: "Please enter your email",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Please enter a valid email",
                        },
                      })}
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-espresso mb-1.5">
                      Phone <span className="text-espresso/30 font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="For a faster response"
                      {...register("phone", {
                        pattern: {
                          value: /^[+]?[\d\s()-]{7,20}$/,
                          message: "Please enter a valid phone number",
                        },
                      })}
                      className={inputClass("phone")}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setStep(0)}
                      className="rounded-full border border-espresso/15 px-6 py-3.5 text-sm font-medium text-espresso/60 hover:text-espresso transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="flex-1 rounded-full bg-accent py-3.5 text-sm font-medium text-white hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      Get My Quote
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-amber/10 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-espresso">
                    You&apos;re all set, {form.name.split(" ")[0]}!
                  </h3>
                  <p className="mt-3 text-espresso/60 max-w-sm">
                    We&apos;ll have a custom quote in your inbox within 2 hours. Keep an eye on <span className="text-espresso font-medium">{form.email}</span>.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
