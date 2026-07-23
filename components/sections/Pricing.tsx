const plans = [
    {
      name: "Audit",
      price: "Kostenlos",
      description: "Für Shops, die herausfinden wollen, wo Automatisierung möglich ist.",
      features: [
        "Shop-Analyse",
        "Prozess-Check",
        "SEO- und Produktdaten-Check",
        "Automatisierungs-Potenziale",
        "Konkreter Maßnahmenplan",
      ],
      cta: "Audit buchen",
      href: "/#kontakt",
    },
    {
      name: "Automation Sprint",
      price: "ab 1.500 €",
      description: "Für Shops, die innerhalb von 14 Tagen erste Prozesse automatisieren wollen.",
      features: [
        "2–4 Automatisierungen",
        "Shopify-Integration",
        "Product Automation Setup",
        "E-Mail- oder Support-Workflow",
        "Dokumentation & Übergabe",
      ],
      cta: "Projekt anfragen",
      href: "/#kontakt",
      highlighted: true,
    },
    {
      name: "Growth Partner",
      price: "monatlich",
      description: "Für Shops, die langfristig automatisieren und optimieren wollen.",
      features: [
        "Laufende Betreuung",
        "Neue Workflows pro Monat",
        "Monitoring & Optimierung",
        "Reporting",
        "Priorisierter Support",
      ],
      cta: "Termin buchen",
      href: "/#kontakt",
    },
  ];
  
  export default function Pricing() {
    return (
      <section id="preise" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Preise
          </span>
  
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Starte mit einem klaren Automatisierungsplan.
          </h2>
  
          <p className="mt-6 text-lg text-gray-400">
            Ob kostenloses Audit, schneller Sprint oder langfristige Betreuung —
            CodeSpes passt sich an die aktuelle Phase deines Shops an.
          </p>
        </div>
  
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.highlighted
                  ? "rounded-3xl border border-indigo-500/60 bg-indigo-500/10 p-8 shadow-2xl shadow-indigo-500/10"
                  : "rounded-3xl border border-white/10 bg-white/5 p-8"
              }
            >
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold text-white">{plan.price}</p>
              <p className="mt-4 leading-7 text-gray-400">{plan.description}</p>
  
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-300">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
  
              <a
  href={plan.href}
  className={
    plan.highlighted
      ? "mt-8 block w-full rounded-xl bg-indigo-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-indigo-500"
      : "mt-8 block w-full rounded-xl border border-white/20 px-6 py-3 text-center text-white transition hover:bg-white/5"
  }
>
  {plan.cta}
</a>
            </div>
          ))}
        </div>
      </section>
    );
  }