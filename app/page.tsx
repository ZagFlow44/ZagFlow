import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Platform from "../components/sections/Platform";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Pricing from "../components/sections/Pricing";
import Footer from "../components/layout/Footer";
import Faq from "../components/sections/Faq";
import Contact from "../components/sections/Contact";
import Solutions from "@/components/sections/Solutions";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816]">
      <Navbar />
      <Hero />
      <Platform />
      <Solutions />
      <Services />
      <Process />
      <Pricing />
      <Faq />
      <section className="mx-auto max-w-7xl px-6 py-24">
  <div className="mx-auto max-w-3xl text-center">
    <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
      So arbeiten wir
    </span>

    <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
      Von der ersten Anfrage bis zur fertigen Automatisierung.
    </h2>

    <p className="mt-6 text-lg text-gray-400">
      Wir begleiten dich Schritt für Schritt – von der Analyse deiner Prozesse
      bis zur fertigen und getesteten Automatisierung.
    </p>
  </div>

  <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        number: "01",
        title: "Anfrage",
        text: "Du beschreibst uns kurz deinen Prozess und was du automatisieren möchtest.",
      },
      {
        number: "02",
        title: "Analyse",
        text: "Wir analysieren deinen aktuellen Ablauf, deine Systeme und mögliche Zeitfresser.",
      },
      {
        number: "03",
        title: "Konzept",
        text: "Wir planen eine passende Automatisierung und definieren den technischen Ablauf.",
      },
      {
        number: "04",
        title: "Umsetzung",
        text: "Wir bauen den Workflow und verbinden die benötigten Systeme miteinander.",
      },
      {
        number: "05",
        title: "Test",
        text: "Wir testen die Automatisierung, prüfen Sonderfälle und optimieren den Ablauf.",
      },
      {
        number: "06",
        title: "Übergabe",
        text: "Du erhältst die fertige Lösung und eine verständliche Einführung in den Prozess.",
      },
    ].map((step) => (
      <div
        key={step.number}
        className="rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <p className="text-sm font-semibold text-indigo-400">
          {step.number}
        </p>

        <h3 className="mt-4 text-2xl font-bold text-white">
          {step.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {step.text}
        </p>
      </div>
    ))}
  </div>
</section>
      <Contact />
      <Footer />
    </main>
  );
}