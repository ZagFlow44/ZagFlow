export default function Solutions() {
    const solutions = [
      {
        title: "Weniger manuelle Arbeit",
        text: "Wiederkehrende Aufgaben werden automatisiert, damit dein Team mehr Zeit für wichtige Aufgaben hat.",
      },
      {
        title: "Schnellere Kundenkommunikation",
        text: "E-Mails, Support-Anfragen und Benachrichtigungen können automatisch verarbeitet und beantwortet werden.",
      },
      {
        title: "Besser verbundene Systeme",
        text: "Shop, CRM, E-Mail, Tabellen und andere Tools werden miteinander verbunden und tauschen Daten automatisch aus.",
      },
      {
        title: "Mehr Übersicht",
        text: "Automatisierte Prozesse sorgen für klarere Abläufe, weniger Fehler und besser nachvollziehbare Daten.",
      },
      {
        title: "Skalierbare Prozesse",
        text: "Deine Abläufe wachsen mit deinem Unternehmen, ohne dass jede neue Aufgabe zusätzliche manuelle Arbeit verursacht.",
      },
      {
        title: "Individuelle Automatisierungen",
        text: "Wir entwickeln Workflows, die genau zu deinen bestehenden Prozessen und Systemen passen.",
      },
    ];
  
    return (
      <section id="loesungen" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            Lösungen
          </span>
  
          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Automatisierung für deine täglichen Geschäftsprozesse.
          </h2>
  
          <p className="mt-6 text-lg text-gray-400">
            Wir identifizieren wiederkehrende Aufgaben, verbinden deine Systeme
            und entwickeln Automatisierungen, die Zeit sparen und deine Abläufe
            effizienter machen.
          </p>
        </div>
  
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-bold text-white">
                {solution.title}
              </h3>
  
              <p className="mt-4 leading-7 text-gray-400">
                {solution.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }