import { Search, ClipboardList, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Kostenloses Audit",
    description:
      "Wir analysieren deinen Shop, deine Produktdaten und wiederkehrende manuelle Prozesse.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Automation Blueprint",
    description:
      "Du erhältst einen klaren Plan, welche Automatisierungen den größten Nutzen bringen.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Umsetzung in 14 Tagen",
    description:
      "Wir bauen die Workflows, verbinden Tools und integrieren deine Systeme sauber miteinander.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Optimierung",
    description:
      "Wir überwachen Ergebnisse, verbessern Abläufe und halten deine Automatisierungen stabil.",
  },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          Prozess
        </span>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
          Von der Analyse zur Automatisierung.
        </h2>

        <p className="mt-6 text-lg text-gray-400">
          Wir bauen keine zufälligen Workflows. Wir finden die Prozesse, die
          Zeit sparen, Fehler reduzieren und messbaren Mehrwert schaffen.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-white/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-500 group-hover:text-white">
                <Icon size={28} />
              </div>

              <p className="text-sm font-semibold text-indigo-400">
                {step.number}
              </p>

              <h3 className="mt-4 text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}