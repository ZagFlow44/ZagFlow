"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Wie lange dauert die Umsetzung?",
    answer:
      "Die meisten Automatisierungen werden innerhalb von 7–14 Tagen umgesetzt. Größere Projekte planen wir individuell.",
  },
  {
    question: "Arbeitet CodeSpes nur mit Shopify?",
    answer:
      "Unser Fokus liegt auf Shopify, wir integrieren aber auch Klaviyo, Slack, Google Sheets, ERP-, CRM- und weitere Systeme.",
  },
  {
    question: "Brauche ich technische Vorkenntnisse?",
    answer:
      "Nein. Wir übernehmen die komplette Einrichtung und erklären dir anschließend alle Workflows verständlich.",
  },
  {
    question: "Wie läuft das kostenlose Audit ab?",
    answer:
      "Wir analysieren deinen Shop, identifizieren Automatisierungspotenziale und erstellen einen konkreten Maßnahmenplan.",
  },
  {
    question: "Gibt es laufenden Support?",
    answer:
      "Ja. Auf Wunsch übernehmen wir Wartung, Monitoring und die kontinuierliche Optimierung deiner Automatisierungen.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
          FAQ
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
          Häufig gestellte Fragen
        </h2>

        <p className="mt-6 text-lg text-gray-400">
          Alles Wichtige rund um CodeSpes und unsere Automatisierungslösungen.
        </p>
      </div>

      <div className="mt-16 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-white/10 bg-white/5"
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span className="text-lg font-semibold text-white">
                {faq.question}
              </span>

              <ChevronDown
                className={`transition ${
                  open === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {open === index && (
              <div className="px-6 pb-6 text-gray-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}