"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function AiCustomerSupportPage() {
  const [businessConfirmed, setBusinessConfirmed] = useState(false);
const [termsAccepted, setTermsAccepted] = useState(false);
const [checkoutError, setCheckoutError] = useState(false);

  const handleCheckout = async () => {
    if (!businessConfirmed || !termsAccepted) {
      setCheckoutError(true);
      return;
    }
    
    setCheckoutError(false);

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        businessConfirmed,
        termsAccepted,
      }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Checkout konnte nicht gestartet werden.");
    }
  };
  
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] text-white">
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              CodeSpes Automation Product
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              AI Customer Support
              <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Starter
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Automatisiere wiederkehrende Kundenanfragen mit KI.
              Eingehende Support-E-Mails werden analysiert, kategorisiert,
              priorisiert und als fertige Gmail-Antwortentwürfe vorbereitet.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#buy"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
              >
                Jetzt für 79 € kaufen
              </Link>

              <Link
                href="#features"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-200 transition hover:bg-white/10"
              >
                Funktionen ansehen
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-400">
              <span>✓ Einmalzahlung</span>
              <span>✓ n8n Workflow inklusive</span>
              <span>✓ Setup Guide inklusive</span>
              <span>✓ Eigene API-Credentials</span>
            </div>
          </div>
        </section>
        <section id="features" className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-24">
    <div className="max-w-3xl">
      <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
        Automatisierter Support
      </span>

      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Was automatisiert der Starter?
      </h2>

      <p className="mt-4 text-lg leading-8 text-gray-400">
        Eingehende Kundenanfragen werden automatisch erkannt, sortiert und
        für dein Support-Team vorbereitet.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Versand",
          text: "Fragen zu Versandkosten, Lieferzeiten und Versandinformationen werden automatisch erkannt.",
        },
        {
          title: "Retouren",
          text: "Rückgabeanfragen werden anhand deiner hinterlegten Shop-Regeln beantwortet.",
        },
        {
          title: "Bestellstatus",
          text: "Bestellanfragen werden erkannt und zur sicheren manuellen Prüfung vorbereitet.",
        },
        {
          title: "Produktfragen",
          text: "Fragen zu Produkten, Größen oder Varianten werden automatisch kategorisiert.",
        },
        {
          title: "Beschwerden",
          text: "Kritische Kundenanfragen werden erkannt und bei Bedarf als dringend markiert.",
        },
        {
          title: "Allgemeine Anfragen",
          text: "Sonstige Supportfragen werden ebenfalls automatisch analysiert und vorbereitet.",
        },
      ].map((feature) => (
        <div
          key={feature.title}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-indigo-500/30 hover:bg-white/[0.05]"
        >
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
            ✓
          </div>

          <h3 className="text-lg font-semibold text-white">
            {feature.title}
          </h3>

          <p className="mt-3 leading-7 text-gray-400">
            {feature.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-24">
    <div className="max-w-3xl">
      <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
        So funktioniert es
      </span>

      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Vom Posteingang zum fertigen Antwortentwurf
      </h2>

      <p className="mt-4 text-lg leading-8 text-gray-400">
        Der Workflow übernimmt die wiederkehrenden Schritte im Support und
        lässt die finale Kontrolle beim Menschen.
      </p>
    </div>

    <div className="mt-12 grid gap-6 lg:grid-cols-5">
      {[
        {
          number: "01",
          title: "E-Mail",
          text: "Eine neue Kundenanfrage geht im verbundenen Gmail-Postfach ein.",
        },
        {
          number: "02",
          title: "KI-Analyse",
          text: "Die Nachricht wird automatisch analysiert und verstanden.",
        },
        {
          number: "03",
          title: "Kategorie",
          text: "Die Anfrage erhält eine passende Kategorie und Priorität.",
        },
        {
          number: "04",
          title: "Antwort",
          text: "Die KI erstellt eine passende Antwort anhand deiner Shopdaten.",
        },
        {
          number: "05",
          title: "Prüfung",
          text: "Der fertige Entwurf wird in Gmail gespeichert und kann geprüft werden.",
        },
      ].map((step) => (
        <div
          key={step.number}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <span className="text-sm font-bold text-indigo-400">
            {step.number}
          </span>

          <h3 className="mt-4 text-lg font-semibold text-white">
            {step.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            {step.text}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-10 rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.06] p-6">
      <p className="text-gray-300">
        <span className="font-semibold text-white">Human-in-the-loop:</span>{" "}
        Der Starter verschickt keine KI-Antwort automatisch. Dein Team behält
        die Kontrolle und entscheidet selbst, wann eine Antwort gesendet wird.
      </p>
    </div>
  </div>
</section>
<section className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-24">
    <div className="max-w-3xl">
      <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
        Im Paket enthalten
      </span>

      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Alles, was du für den Start brauchst
      </h2>

      <p className="mt-4 text-lg leading-8 text-gray-400">
        Du erhältst nicht nur einen Workflow, sondern ein vollständiges
        Starter-Paket für die Einrichtung deines KI-gestützten Supports.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {[
        {
          title: "Fertiger n8n Workflow",
          text: "Importierbarer Workflow mit Gmail, Groq, Kategorien, Prioritäten und automatischen Support-Labels.",
        },
        {
          title: "Setup Guide",
          text: "Schritt-für-Schritt-Anleitung für Gmail, Groq, Shopdaten, Labels und den ersten Funktionstest.",
        },
        {
          title: "Fertige KI-Logik",
          text: "Vorkonfigurierte Prompt-Logik für Versand, Retouren, Bestellstatus, Produktfragen, Beschwerden und allgemeine Anfragen.",
        },
        {
          title: "Anpassbare Shopdaten",
          text: "Shopname, Lieferzeit, Rückgabefrist, Versandkosten und Support-Adresse können zentral angepasst werden.",
        },
        {
          title: "Prioritäts-Erkennung",
          text: "Kritische Fälle können automatisch als HOCH erkannt und zusätzlich mit DRINGEND markiert werden.",
        },
        {
          title: "Human-in-the-loop",
          text: "Antworten werden als Gmail-Entwürfe vorbereitet. Dein Team prüft und versendet sie selbst.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 font-semibold text-indigo-300">
            ✓
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-2 leading-7 text-gray-400">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section id="buy" className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-24">
    <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
      <div>
        <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
          Starter-Paket
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Starte deinen KI-gestützten Kundenservice
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
          Importiere den Workflow in n8n, verbinde deine eigenen Accounts,
          passe deine Shopdaten an und teste deinen neuen Support-Ablauf.
        </p>

        <div className="mt-8 space-y-4 text-gray-300">
          <p>✓ Einmalige Zahlung</p>
          <p>✓ Kein CodeSpes-Abo erforderlich</p>
          <p>✓ Eigene Gmail- und Groq-Zugänge</p>
          <p>✓ Setup Guide inklusive</p>
          <p>✓ Für n8n ausgelegt</p>
        </div>
      </div>

      <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/10 to-violet-500/5 p-8 shadow-2xl shadow-indigo-950/20">
  <p className="text-sm font-semibold text-indigo-300">
    AI Customer Support Starter
  </p>

  <div className="mt-5 flex items-end gap-2">
    <span className="text-5xl font-bold text-white">79 €</span>
    <span className="pb-1 text-gray-400">einmalig</span>
  </div>

  <p className="mt-4 text-sm leading-6 text-gray-400">
    Digitales Produkt. Nach erfolgreicher Zahlung erhältst du Zugriff
    auf den n8n-Workflow und den Setup Guide.
  </p>

  <div className="mt-6 space-y-4">
  <div className="flex items-start gap-3">
    <input
      id="businessConfirmation"
      type="checkbox"
      checked={businessConfirmed}
      onChange={(e) => {
        setBusinessConfirmed(e.target.checked);

        if (e.target.checked && termsAccepted) {
          setCheckoutError(false);
        }
      }}
      className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-indigo-600"
    />

    <label
      htmlFor="businessConfirmation"
      className="cursor-pointer text-sm leading-6 text-gray-400"
    >
      Ich bestätige, dass ich als Unternehmer im Sinne des § 14 BGB handle
      und den Kauf für meine gewerbliche oder selbständige berufliche
      Tätigkeit tätige.
    </label>
  </div>

  <div className="flex items-start gap-3">
    <input
      id="termsAccepted"
      type="checkbox"
      checked={termsAccepted}
      onChange={(e) => {
        setTermsAccepted(e.target.checked);

        if (e.target.checked && businessConfirmed) {
          setCheckoutError(false);
        }
      }}
      className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-indigo-600"
    />

    <label
      htmlFor="termsAccepted"
      className="cursor-pointer text-sm leading-6 text-gray-400"
    >
      Ich habe die{" "}
      <Link
        href="/agb"
        target="_blank"
        className="text-indigo-300 underline transition hover:text-indigo-200"
      >
        AGB und Lizenzbedingungen
      </Link>{" "}
      gelesen und akzeptiere sie.
    </label>
  </div>

  {checkoutError && (
    <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-300">
      Bitte bestätige beide Angaben, bevor du mit der Bestellung fortfährst.
    </div>
  )}
</div>
  <button
    type="button"
    onClick={handleCheckout}
    className="mt-6 w-full rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-500"
  >
    Zahlungspflichtig für 79 € bestellen
  </button>

  <div className="mt-6 border-t border-white/10 pt-6">
    <p className="text-sm font-medium text-white">
      Du benötigst:
    </p>

    <ul className="mt-3 space-y-2 text-sm text-gray-400">
      <li>• n8n</li>
      <li>• Gmail-Konto</li>
      <li>• Groq API-Key</li>
    </ul>
  </div>
  </div>
  </div>
    </div>
  </section>
</main>
</>
);
}