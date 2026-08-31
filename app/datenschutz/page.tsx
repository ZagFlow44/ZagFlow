import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von CodeSpes mit Informationen zur Verarbeitung personenbezogener Daten und zu eingesetzten Diensten.",
  alternates: {
    canonical: "/datenschutz",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Datenschutz() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 text-white">
      <h1 className="text-5xl font-bold">Datenschutzerklärung</h1>

      <div className="mt-10 space-y-8 leading-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold text-white">
            1. Verantwortlicher
          </h2>

          <p className="mt-4">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            CodeSpes
            <br />
            Inhaberin: Elvin Ceyran
            <br />
            Aufsicht 5
            <br />
            58256 Ennepetal
            <br />
            E-Mail: codespes44@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            2. Allgemeine Hinweise zur Datenverarbeitung
          </h2>

          <p className="mt-4">
            Wir verarbeiten personenbezogene Daten nur, soweit dies zur
            Bereitstellung unserer Website, zur Bearbeitung von Anfragen, zur
            Durchführung vorvertraglicher Maßnahmen oder zur Erbringung unserer
            Leistungen erforderlich ist.
          </p>

          <p className="mt-4">
            Personenbezogene Daten sind alle Informationen, mit denen eine
            Person direkt oder indirekt identifiziert werden kann.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            3. Kontaktaufnahme und Kontaktformular
          </h2>

          <p className="mt-4">
            Wenn du uns über das Kontaktformular oder per E-Mail kontaktierst,
            verarbeiten wir die von dir übermittelten Angaben. Dazu können
            insbesondere Name, E-Mail-Adresse, Unternehmen, Website, gewünschte
            Leistung sowie der Inhalt deiner Nachricht gehören.
          </p>

          <p className="mt-4">
            Die Verarbeitung erfolgt zur Bearbeitung deiner Anfrage. Soweit
            deine Anfrage auf den Abschluss eines Vertrags oder auf
            vorvertragliche Maßnahmen gerichtet ist, erfolgt die Verarbeitung
            auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
          </p>

          <p className="mt-4">
            In anderen Fällen erfolgt die Verarbeitung auf Grundlage unseres
            berechtigten Interesses an einer effizienten Bearbeitung von
            Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            4. E-Mail-Versand über Resend
          </h2>

          <p className="mt-4">
            Für die technische Übermittlung bestimmter E-Mails,
            Kontaktanfragen und Audit-Ergebnisse nutzen wir den Dienst Resend.
          </p>

          <p className="mt-4">
            Dabei können insbesondere E-Mail-Adressen, Namen sowie Inhalte von
            Anfragen und Audit-Ergebnisse an Resend übermittelt und dort
            verarbeitet werden, soweit dies für den Versand der jeweiligen
            Nachricht erforderlich ist.
          </p>

          <p className="mt-4">
            Die Verarbeitung erfolgt abhängig vom jeweiligen Zusammenhang auf
            Grundlage von Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f
            DSGVO.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            5. Hosting durch Netlify
          </h2>

          <p className="mt-4">
            Diese Website wird über Netlify bereitgestellt. Anbieter ist
            Netlify, Inc.
          </p>

          <p className="mt-4">
            Beim Aufruf unserer Website können technisch erforderliche Daten
            verarbeitet werden. Dazu können insbesondere IP-Adresse,
            Browserinformationen, Betriebssystem, aufgerufene Seiten sowie
            Datum und Uhrzeit des Zugriffs gehören.
          </p>

          <p className="mt-4">
            Die Verarbeitung erfolgt auf Grundlage unseres berechtigten
            Interesses an einer sicheren, stabilen und effizienten
            Bereitstellung unserer Website gemäß Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <p className="mt-4">
            Eine Verarbeitung personenbezogener Daten außerhalb der
            Europäischen Union kann im Rahmen der technischen Bereitstellung
            nicht vollständig ausgeschlossen werden. Dabei werden die jeweils
            erforderlichen datenschutzrechtlichen Schutzmechanismen
            berücksichtigt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            6. Kostenloses Automation Audit
          </h2>

          <p className="mt-4">
            Auf unserer Website bieten wir ein kostenloses Automation Audit an.
            Wenn du dieses Formular nutzt, verarbeiten wir die von dir
            eingegebenen Informationen, um mögliche
            Automatisierungspotenziale zu analysieren und einen individuellen
            Automation Blueprint zu erstellen.
          </p>

          <p className="mt-4">
            Dabei können insbesondere Name, E-Mail-Adresse, Website,
            verwendete Plattformen und Tools, Angaben zu Bestellungen und
            Supportanfragen, manuelle Prozesse, zeitaufwendige Tätigkeiten
            sowie gewünschte Automatisierungsziele verarbeitet werden.
          </p>

          <p className="mt-4">
            Die Verarbeitung erfolgt zur Durchführung vorvertraglicher
            Maßnahmen auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit das
            Audit im Zusammenhang mit einer möglichen Beauftragung von
            CodeSpes durchgeführt wird.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            7. KI-gestützte Analyse über Groq
          </h2>

          <p className="mt-4">
            Zur automatisierten Auswertung der Angaben aus dem Automation Audit
            setzen wir eine KI-Schnittstelle von Groq ein.
          </p>

          <p className="mt-4">
            Die im Audit eingegebenen Informationen können hierfür technisch an
            Groq übermittelt und automatisiert verarbeitet werden, um den
            jeweiligen Automation Blueprint zu erstellen.
          </p>

          <p className="mt-4">
            Bitte gib im Freitext des Audits keine Passwörter, Zugangsdaten,
            besonderen Kategorien personenbezogener Daten oder andere
            vertrauliche Informationen ein, die für die Analyse nicht
            erforderlich sind.
          </p>

          <p className="mt-4">
            Soweit die Verarbeitung im Zusammenhang mit einer möglichen
            Beauftragung erfolgt, stützen wir sie auf Art. 6 Abs. 1 lit. b
            DSGVO.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            8. Nutzung von Supabase
          </h2>

          <p className="mt-4">
            Für die Speicherung und technische Verarbeitung bestimmter Daten
            nutzen wir Supabase.
          </p>

          <p className="mt-4">
            Dabei können insbesondere die im Automation Audit angegebenen
            Informationen, Kontaktdaten, technische Informationen sowie der
            daraus generierte Automation Blueprint gespeichert werden.
          </p>

          <p className="mt-4">
            Die Verarbeitung erfolgt, soweit sie zur Durchführung
            vorvertraglicher Maßnahmen oder eines Vertrags erforderlich ist,
            auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
          </p>

          <p className="mt-4">
            Im Übrigen erfolgt sie auf Grundlage unseres berechtigten Interesses
            an einer sicheren und funktionalen Bereitstellung unserer Dienste
            gemäß Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <p className="mt-4">
            Eine Verarbeitung personenbezogener Daten außerhalb der
            Europäischen Union kann abhängig von der eingesetzten technischen
            Infrastruktur nicht vollständig ausgeschlossen werden. Dabei werden
            die jeweils erforderlichen datenschutzrechtlichen
            Schutzmechanismen berücksichtigt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            9. Zahlungsabwicklung über Stripe
          </h2>

          <p className="mt-4">
            Für die Zahlungsabwicklung beim Kauf unserer digitalen Produkte,
            Automatisierungs-Workflows und sonstigen kostenpflichtigen
            Leistungen nutzen wir den Zahlungsdienstleister Stripe.
          </p>

          <p className="mt-4">
            Anbieter für Kunden im Europäischen Wirtschaftsraum ist Stripe
            Payments Europe, Limited.
          </p>

          <p className="mt-4">
            Wenn du einen kostenpflichtigen Workflow oder eine andere
            kostenpflichtige Leistung über unsere Website erwirbst, werden die
            für die Zahlungsabwicklung erforderlichen Daten an Stripe
            übermittelt.
          </p>

          <p className="mt-4">
            Dazu können insbesondere Name, E-Mail-Adresse,
            Rechnungsinformationen, Zahlungsinformationen, Transaktionsdaten
            sowie technische Informationen gehören.
          </p>

          <p className="mt-4">
            Die Verarbeitung erfolgt zur Durchführung des Vertrags und der
            Zahlungsabwicklung gemäß Art. 6 Abs. 1 lit. b DSGVO sowie, soweit
            erforderlich, zur Erfüllung gesetzlicher Verpflichtungen gemäß Art.
            6 Abs. 1 lit. c DSGVO.
          </p>

          <p className="mt-4">
            Stripe kann personenbezogene Daten im Rahmen der
            Zahlungsabwicklung auch außerhalb der Europäischen Union
            beziehungsweise des Europäischen Wirtschaftsraums verarbeiten.
            Dabei kommen die jeweils erforderlichen datenschutzrechtlichen
            Schutzmechanismen zum Einsatz.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            10. Cookies und Einwilligungsverwaltung
          </h2>

          <p className="mt-4">
            Auf unserer Website setzen wir eine Einwilligungsfunktion ein, mit
            der du entscheiden kannst, ob optionale Analysefunktionen verwendet
            werden dürfen.
          </p>

          <p className="mt-4">
            Deine Auswahl wird lokal in deinem Browser gespeichert, damit wir
            deine Entscheidung bei weiteren Seitenaufrufen berücksichtigen
            können.
          </p>

          <p className="mt-4">
            Wenn du „Nur notwendige“ auswählst, wird Google Analytics nicht
            geladen. Erst wenn du „Alle akzeptieren“ auswählst, wird die
            Analysefunktion aktiviert.
          </p>

          <p className="mt-4">
            Deine Auswahl kannst du jederzeit über den Link
            „Cookie-Einstellungen“ im Footer unserer Website erneut aufrufen
            und ändern.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            11. Google Analytics
          </h2>

          <p className="mt-4">
            Wir verwenden auf unserer Website Google Analytics, einen
            Webanalysedienst von Google.
          </p>

          <p className="mt-4">
            Google Analytics hilft uns zu verstehen, wie Besucher unsere
            Website nutzen. Dabei können beispielsweise Informationen über
            Seitenaufrufe, Interaktionen, verwendete Geräte,
            Browserinformationen und technische Nutzungsdaten verarbeitet
            werden.
          </p>

          <p className="mt-4">
            Google Analytics wird auf unserer Website ausschließlich aktiviert,
            wenn du zuvor über unseren Cookie-Banner ausdrücklich zugestimmt
            hast.
          </p>

          <p className="mt-4">
            Rechtsgrundlage für diese Verarbeitung ist deine Einwilligung gemäß
            Art. 6 Abs. 1 lit. a DSGVO.
          </p>

          <p className="mt-4">
            Deine Einwilligung kannst du jederzeit mit Wirkung für die Zukunft
            über „Cookie-Einstellungen“ im Footer ändern oder widerrufen.
          </p>

          <p className="mt-4">
            Im Rahmen der Nutzung von Google Analytics kann eine Verarbeitung
            von Daten durch Unternehmen der Google-Gruppe sowie eine
            Übermittlung von Daten in Staaten außerhalb der Europäischen Union
            nicht vollständig ausgeschlossen werden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            12. Speicherdauer
          </h2>

          <p className="mt-4">
            Personenbezogene Daten werden grundsätzlich nur so lange
            gespeichert, wie dies für den jeweiligen Verarbeitungszweck
            erforderlich ist.
          </p>

          <p className="mt-4">
            Eine längere Speicherung kann erfolgen, wenn gesetzliche
            Aufbewahrungspflichten bestehen oder Daten zur Geltendmachung,
            Ausübung oder Verteidigung von Rechtsansprüchen benötigt werden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            13. Widerruf einer Einwilligung
          </h2>

          <p className="mt-4">
            Wenn eine Verarbeitung auf deiner Einwilligung beruht, kannst du
            diese Einwilligung jederzeit mit Wirkung für die Zukunft
            widerrufen.
          </p>

          <p className="mt-4">
            Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung wird
            dadurch nicht berührt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            14. Deine Rechte
          </h2>

          <p className="mt-4">
            Du hast im Rahmen der gesetzlichen Voraussetzungen insbesondere das
            Recht auf Auskunft über deine gespeicherten personenbezogenen
            Daten, Berichtigung unrichtiger Daten, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen
            bestimmte Verarbeitungen.
          </p>

          <p className="mt-4">
            Außerdem hast du das Recht, dich bei einer zuständigen
            Datenschutz-Aufsichtsbehörde zu beschweren, wenn du der Ansicht
            bist, dass die Verarbeitung deiner personenbezogenen Daten gegen
            datenschutzrechtliche Vorschriften verstößt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            15. Stand der Datenschutzerklärung
          </h2>

          <p className="mt-4">
            Stand: August 2026
          </p>
        </section>
      </div>
    </main>
  );
}