"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

const metrics = [
  { label: "SEO Score", value: "98%" },
  { label: "Automatisierte Produkte", value: "1.248" },
  { label: "Aktive Workflows", value: "37" },
  { label: "Zeit eingespart", value: "180 Std./Monat" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32">
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-2 text-xs text-indigo-300 md:px-4 md:text-sm">
            Das Betriebssystem für moderne E-Commerce-Unternehmen
          </span>

          <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
            Automatisiere deinen E-Commerce-Betrieb.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            CodeSpes hilft Shopify- und E-Commerce-Unternehmen, Produktdaten,
            Support, E-Mail-Marketing und interne Prozesse effizient zu
            automatisieren.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-300">
            {["Produkt-SEO", "Support", "Operations", "E-Mail-Flows"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  {tag}
                </span>
              ),
            )}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
  <a href="/#kontakt">
    <Button>Kostenloses Audit buchen</Button>
  </a>

  <a href="/#plattform">
    <Button variant="secondary">Plattform ansehen</Button>
  </a>
</div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-indigo-500/20 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0F172A] p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-gray-400">CodeSpes Plattform</p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    Commerce Kontrollzentrum
                  </h3>
                </div>

                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">
                  Live
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="mt-2 text-3xl font-bold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-5">
                <p className="text-sm text-indigo-300">
                  Nächste empfohlene Automatisierung
                </p>
                <p className="mt-2 font-semibold text-white">
                KI hat 243 Produkte erkannt, die für bessere Google-Rankings optimiert werden können.
                </p>
                <div className="mt-4 h-2 rounded-full bg-white/10">
                <motion.div
  initial={{ width: 0 }}
  animate={{ width: "75%" }}
  transition={{ duration: 1.5, delay: 0.8 }}
  className="h-2 rounded-full bg-indigo-500"
/>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}