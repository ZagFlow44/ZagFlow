import Link from "next/link";

export default function ReturnsAutomationPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
        <div className="max-w-3xl">
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            Returns Automation
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
            Automatisiere deine Retourenprozesse.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Wir helfen E-Commerce-Unternehmen dabei, Retourenanfragen schneller
            zu bearbeiten, Kunden automatisch zu informieren und interne Abläufe
            effizienter zu gestalten.
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
          Was kann automatisiert werden?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Retourenanfragen automatisch erfassen",
            "Status-E-Mails automatisch versenden",
            "Rückgabegründe kategorisieren",
            "Interne Teams automatisch benachrichtigen",
            "Rückgabeformulare automatisieren",
            "Rückerstattungsprozesse vorbereiten",
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
              text: "Wir analysieren deinen aktuellen Retourenprozess.",
            },
            {
              number: "02",
              title: "Planung",
              text: "Wir definieren die Schritte, die automatisiert werden können.",
            },
            {
              number: "03",
              title: "Integration",
              text: "Wir verbinden Shop, E-Mail und interne Systeme.",
            },
            {
              number: "04",
              title: "Test",
              text: "Wir testen Rückgaben, Sonderfälle und Benachrichtigungen.",
            },
            {
              number: "05",
              title: "Übergabe",
              text: "Du erhältst einen stabilen automatisierten Retourenprozess.",
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
            Weniger manueller Aufwand bei jeder Retoure.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Wir entwickeln einen Retouren-Workflow, der zu deinem Shop und deinen
            bestehenden Systemen passt.
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
  );
}