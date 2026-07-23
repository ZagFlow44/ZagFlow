import Link from "next/link";

export default function SystemIntegrationsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
        <div className="max-w-3xl">
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            System Integrations
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
            Verbinde deine Systeme miteinander.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Wir verbinden deine bestehenden Tools und Plattformen, damit Daten
            automatisch zwischen deinen Systemen ausgetauscht werden und
            manuelle Arbeit reduziert wird.
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
          Was können wir verbinden?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Shop-Systeme und E-Commerce-Plattformen",
            "CRM- und Kundensysteme",
            "E-Mail- und Kommunikationssysteme",
            "Google Workspace und Kalender",
            "APIs und externe Plattformen",
            "Individuelle Systeme über n8n",
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
              text: "Wir analysieren deine bestehenden Systeme und Prozesse.",
            },
            {
              number: "02",
              title: "Planung",
              text: "Wir definieren, welche Systeme miteinander verbunden werden.",
            },
            {
              number: "03",
              title: "Integration",
              text: "Wir verbinden deine Systeme und automatisieren den Datenaustausch.",
            },
            {
              number: "04",
              title: "Test",
              text: "Wir testen Datenübertragung, Fehlerfälle und Zuverlässigkeit.",
            },
            {
              number: "05",
              title: "Übergabe",
              text: "Du erhältst eine stabile und dokumentierte Integration.",
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
            Deine Systeme. Ein automatisierter Workflow.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Wir verbinden deine Tools und entwickeln einen Datenfluss, der zu
            deinen Geschäftsprozessen passt.
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