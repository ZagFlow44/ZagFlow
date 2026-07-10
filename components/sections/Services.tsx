import {
  Bot,
  PackageSearch,
  RefreshCw,
  Mail,
  Plug,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: PackageSearch,
    title: "Product Automation",
    description:
      "Produkttexte, Meta-Titel, Meta-Beschreibungen, Alt-Texte und SEO-Daten automatisch optimieren und in Shopify speichern.",
  },
  {
    icon: Bot,
    title: "Customer Support Automation",
    description:
      "Bestellstatus, Versandfragen, Retourenfragen, FAQ und Ticket-Kategorisierung automatisieren.",
  },
  {
    icon: RefreshCw,
    title: "Returns Automation",
    description:
      "Retourenprozesse, Status-E-Mails, interne Benachrichtigungen und Rückgabeformulare automatisieren.",
  },
  {
    icon: Mail,
    title: "Email & SMS Automation",
    description:
      "Warenkorbabbruch, Willkommensserie, Review-Anfragen und Winback-Kampagnen automatisieren.",
  },
  {
    icon: Plug,
    title: "System Integrations",
    description:
      "Shopify mit CRM, ERP, Google Sheets, Slack, Klaviyo und individuellen APIs verbinden.",
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description:
      "Individuelle Automatisierungen für spezielle E-Commerce-Prozesse entwickeln.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
          Leistungen
        </span>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
          Automatisierung für moderne E-Commerce-Teams.
        </h2>

        <p className="mt-6 text-lg text-gray-400">
          ZagFlow kombiniert eigene Software mit individuellen Services, damit
          dein Shop schneller, effizienter und skalierbarer arbeitet.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:bg-white/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 transition group-hover:bg-indigo-500 group-hover:text-white">
                <Icon size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}