export default function Solutions() {
  const solutions = [
    {
      title: "Produktdaten automatisch pflegen",
      text: "Produktbeschreibungen, Meta-Titel, Meta-Beschreibungen und Alt-Texte können automatisch erstellt und aktualisiert werden.",
    },
    {
      title: "Support-Anfragen schneller bearbeiten",
      text: "Wiederkehrende Kundenfragen zu Bestellungen, Versand, Retouren oder Produkten können automatisch vorsortiert und beantwortet werden.",
    },
    {
      title: "E-Mail-Prozesse automatisieren",
      text: "Willkommens-Mails, Follow-ups, Erinnerungen und andere wiederkehrende E-Mail-Abläufe können automatisch ausgelöst werden.",
    },
    {
      title: "Shop und Tools verbinden",
      text: "Shopify, E-Mail, CRM, Tabellen und weitere Systeme können miteinander verbunden werden, damit Daten automatisch weitergegeben werden.",
    },
    {
      title: "Manuelle Abläufe reduzieren",
      text: "Wiederkehrende Aufgaben werden automatisiert, damit dein Team weniger Zeit mit Copy-Paste, Dateneingabe und Routinearbeit verbringt.",
    },
    {
      title: "Individuelle Workflows entwickeln",
      text: "Wir bauen Automatisierungen passend zu deinen bestehenden Prozessen, Tools und Anforderungen.",
    },
  ];
  
    return (
      <section id="loesungen" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            Lösungen
          </span>
  
          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Weniger Routinearbeit. Mehr automatisierte Abläufe. 
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