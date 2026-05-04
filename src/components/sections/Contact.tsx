"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeading, Button, Input } from "@/components/ui";
import { packages } from "@/content/packages";

interface FormData {
  eventType: string;
  packageId: string;
  date: string;
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

const packageOptions = [
  ...packages.map((p) => ({
    value: p.name,
    label: p.name,
    price: p.price,
    description: p.formDescription,
  })),
  {
    value: "not-sure",
    label: "Not sure yet",
    price: "Let's talk",
    description: "Tell us about your event and we'll find the right fit.",
  },
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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(0);

  const loadingMessages = [
    "Reviewing your event details",
    "Checking availability",
    "Putting together your quote",
    "Almost there",
  ];

  useEffect(() => {
    if (!submitting) return;
    setLoadingIndex(0);
    const interval = setInterval(() => {
      setLoadingIndex((i) => Math.min(i + 1, loadingMessages.length - 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [submitting]);

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
      packageId: "",
      date: "",
      name: "",
      email: "",
      phone: "",
    },
  });

  const form = watch();

  const advanceToStep1 = async () => {
    const valid = await trigger(["eventType", "packageId", "date"]);
    if (valid) setStep(1);
  };

  const handleSubmit = async () => {
    const valid = await trigger(["name", "email", "phone"]);
    if (!valid) return;

    setSubmitting(true);
    setSubmitError(false);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      const res = await fetch("https://formspree.io/f/xdabealj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          event_type: form.eventType,
          package: form.packageId,
          date: form.date,
          _subject: `Quote request from ${form.name}`,
          _replyto: form.email,
        }),
      });

      if (res.ok) {
        setStep(2);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      clearTimeout(timeout);
      setSubmitting(false);
    }
  };

  return (
    <Section id="contact" bg="white" maxWidth="xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading subtitleColor="text-espresso/60" subtitle="Tell us about your event and we'll send you a custom quote.">
          Let&apos;s Plan Your Event
        </SectionHeading>

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

        <form className="mt-8 min-h-[320px]" noValidate onSubmit={(e) => e.preventDefault()}>
          <AnimatePresence mode="wait">
            {/* Loading */}
            {submitting && (
              <motion.div
                key="loading"
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center justify-center py-16 gap-5"
              >
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2, ease: "easeInOut" }}
                      className="w-2 h-2 rounded-full bg-amber inline-block"
                    />
                  ))}
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={loadingIndex}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-espresso/50"
                  >
                    {loadingMessages[loadingIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            )}

            {/* Step 1: Event Details */}
            {!submitting && step === 0 && (
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
                  <p className="text-sm font-medium text-espresso mb-3" id="event-type-label">What type of event?</p>
                  <input type="hidden" {...register("eventType", { required: true })} />
                  <div role="radiogroup" aria-labelledby="event-type-label" className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {eventTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        role="radio"
                        aria-checked={form.eventType === type.value}
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

                <div>
                  <p className="text-sm font-medium text-espresso mb-3" id="package-label">Which package fits best?</p>
                  <input type="hidden" {...register("packageId", { required: true })} />
                  <div role="radiogroup" aria-labelledby="package-label" className="grid grid-cols-2 gap-3">
                    {packageOptions.map((pkg) => (
                      <button
                        key={pkg.value}
                        type="button"
                        role="radio"
                        aria-checked={form.packageId === pkg.value}
                        onClick={() => setValue("packageId", pkg.value, { shouldValidate: true })}
                        className={`rounded-xl border px-4 py-3 text-sm text-left transition-all cursor-pointer ${
                          form.packageId === pkg.value
                            ? "border-amber bg-amber/5"
                            : errors.packageId
                              ? "border-red-300 hover:border-espresso/30"
                              : "border-espresso/10 hover:border-espresso/30"
                        }`}
                      >
                        <div className="font-medium text-espresso text-sm">{pkg.label}</div>
                        <div className={`text-xs font-semibold mt-0.5 mb-1 ${
                          form.packageId === pkg.value ? "text-amber" : "text-espresso/40"
                        }`}>
                          {pkg.price}
                        </div>
                        <div className="text-xs text-espresso/50 leading-snug">{pkg.description}</div>
                      </button>
                    ))}
                  </div>
                  {errors.packageId && (
                    <p className="mt-2 text-xs text-red-500">Please select a package</p>
                  )}
                </div>

                <Input
                  label="Event date"
                  type="date"
                  min={getMinDate()}
                  error={errors.date?.message}
                  {...register("date", {
                    required: "Please select a date",
                    validate: (v) => {
                      const selected = new Date(v);
                      const min = new Date();
                      min.setDate(min.getDate() + 3);
                      min.setHours(0, 0, 0, 0);
                      return selected >= min || "Date must be at least 3 days out";
                    },
                  })}
                />

                <Button
                  type="button"
                  onClick={advanceToStep1}
                  size="full"
                  className="mt-2"
                >
                  Continue
                </Button>
              </motion.div>
            )}

            {/* Step 2: Contact Info */}
            {!submitting && step === 1 && (
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

                <Input
                  label="Name"
                  type="text"
                  placeholder="Your name"
                  error={errors.name?.message}
                  {...register("name", {
                    required: "Please enter your name",
                    minLength: { value: 2, message: "Name is too short" },
                  })}
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="you@company.com"
                  error={errors.email?.message}
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />

                <Input
                  label="Phone"
                  type="tel"
                  placeholder="(713) 555-0100"
                  error={errors.phone?.message}
                  {...register("phone", {
                    required: "Please enter your phone number",
                    pattern: {
                      value: /^[+]?[\d\s()-]{7,20}$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                />

                {submitError && (
                  <p className="text-xs text-red-500 text-center">
                    Something went wrong. Please try again or reach out on Instagram.
                  </p>
                )}

                <div className="flex gap-3 mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(0)}
                    disabled={submitting}
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    size="full"
                    className="flex-1"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : "Get My Quote"}
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Confirmation */}
            {!submitting && step === 2 && (
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
                  We&apos;ll review your request and send a custom quote to <span className="text-espresso font-medium">{form.email}</span>.
                </p>
                {/* TODO: add "check out our menu" or Instagram link once those are ready */}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </Section>
  );
}
