import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function CustomWorkflowsPage() {
  return (
    <>
    <Navbar />
    
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
        <div className="max-w-3xl">
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            Custom Workflows
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
            Automatisierungen, die zu deinem Unternehmen passen.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Nicht jeder Geschäftsprozess passt in eine Standardlösung.
            Wir entwickeln individuelle Automatisierungs-Workflows,
            die auf deine Prozesse, Systeme und Anforderungen zugeschnitten sind.
          </p>

          <div className="mt-10">
            <Link
              href="/#kontakt"
              className="inline-flex rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:bg-indigo-500"
            >
              Projekt anfragen
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-bold md:text-5xl">
          Was können wir automatisieren?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Individuelle Geschäftsprozesse",
            "KI-gestützte Workflows",
            "Automatische Datenverarbeitung",
            "Interne Benachrichtigungen und Aufgaben",
            "Mehrstufige Automatisierungsprozesse",
            "Individuelle n8n-Workflows",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-bold md:text-5xl">
          So läuft die Zusammenarbeit ab.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {[
            {
              number: "01",
              title: "Analyse",
              text: "Wir verstehen deinen Prozess und identifizieren Automatisierungspotenzial.",
            },
            {
              number: "02",
              title: "Konzept",
              text: "Wir entwickeln eine individuelle Lösung für deinen Anwendungsfall.",
            },
            {
              number: "03",
              title: "Umsetzung",
              text: "Wir bauen den Workflow und verbinden die benötigten Systeme.",
            },
            {
              number: "04",
              title: "Test",
              text: "Wir testen den gesamten Prozess und berücksichtigen Sonderfälle.",
            },
            {
              number: "05",
              title: "Optimierung",
              text: "Wir verbessern den Workflow und passen ihn bei Bedarf weiter an.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm font-semibold text-indigo-400">
                {step.number}
              </p>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-7 text-gray-400">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-indigo-500/20 bg-indigo-500/10 p-10 text-center md:p-16">
          <h2 className="text-4xl font-bold md:text-5xl">
            Du hast einen Prozess, der Zeit kostet?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Wir analysieren deinen Workflow und entwickeln eine individuelle
            Automatisierung für dein Unternehmen.
          </p>

          <div className="mt-8">
            <Link
              href="/#kontakt"
              className="inline-flex rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:bg-indigo-500"
            >
              Kostenloses Audit anfragen
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}