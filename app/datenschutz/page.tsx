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
              2. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p className="mt-4">
              Wenn du unser Kontaktformular nutzt, verarbeiten wir die von dir
              eingegebenen Daten wie Name, E-Mail-Adresse, Unternehmen, Website
              und Nachricht, um deine Anfrage zu bearbeiten.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. Zweck der Verarbeitung
            </h2>
            <p className="mt-4">
              Die Verarbeitung erfolgt zur Beantwortung von Anfragen, zur
              Vorbereitung von Angeboten und zur Kommunikation mit Interessenten.
            </p>
          </section>
  
          <section>
  <h2 className="text-2xl font-semibold text-white">
    4. Kontaktformular und E-Mail-Versand
  </h2>

  <p className="mt-4">
    Wenn du uns über das Kontaktformular kontaktierst, verarbeiten wir die von
    dir eingegebenen Angaben, insbesondere Name, E-Mail-Adresse, Unternehmen,
    Website, gewünschte Leistung und Nachricht, um deine Anfrage zu bearbeiten.
  </p>

  <p className="mt-4">
    Zur technischen Übermittlung der Kontaktanfragen nutzen wir den Dienst
    Resend. Dabei können die eingegebenen Daten an Resend übermittelt und dort
    verarbeitet werden.
  </p>

  <p className="mt-4">
    Die Verarbeitung erfolgt, soweit deine Anfrage auf den Abschluss eines
    Vertrags gerichtet ist, auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
    In anderen Fällen erfolgt sie auf Grundlage unseres berechtigten Interesses
    an der Bearbeitung von Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO.
  </p>
</section>
  
<section>
  <h2 className="text-2xl font-semibold text-white">
    5. Hosting durch Netlify
  </h2>

  
</section>

  <section>
  <h2 className="text-2xl font-semibold text-white">
    6. Zahlungsabwicklung über Stripe
  </h2>

  <p className="mt-4">
    Für die Zahlungsabwicklung nutzen wir den Zahlungsdienstleister Stripe.
    Anbieter ist Stripe Payments Europe, Limited.
  </p>

  <p className="mt-4">
    Wenn du ein Produkt kaufst, werden die für die Zahlungsabwicklung
    erforderlichen Daten an Stripe übermittelt. Dazu können insbesondere
    Name, E-Mail-Adresse, Zahlungsinformationen, Rechnungsdaten,
    Transaktionsdaten sowie technische Informationen gehören.
  </p>

  <p className="mt-4">
    Die Verarbeitung erfolgt zur Durchführung des Vertrags und der
    Zahlungsabwicklung gemäß Art. 6 Abs. 1 lit. b DSGVO sowie, soweit
    erforderlich, zur Erfüllung gesetzlicher Verpflichtungen gemäß
    Art. 6 Abs. 1 lit. c DSGVO.
  </p>

  <p className="mt-4">
    Stripe kann personenbezogene Daten auch außerhalb der Europäischen Union
    verarbeiten. Für solche Datenübermittlungen werden die jeweils
    erforderlichen datenschutzrechtlichen Schutzmechanismen eingesetzt.
  </p>
</section>

  <p className="mt-4">
    Diese Website wird über Netlify bereitgestellt. Anbieter ist Netlify, Inc.
    Beim Aufruf der Website können technisch erforderliche Daten verarbeitet
    werden, insbesondere IP-Adresse, Browserinformationen, Betriebssystem sowie
    Datum und Uhrzeit des Zugriffs.
  </p>

  <p className="mt-4">
    Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an
    einer sicheren, stabilen und effizienten Bereitstellung unserer Website
    gemäß Art. 6 Abs. 1 lit. f DSGVO.
  </p>

  <p className="mt-4">
    Eine Verarbeitung von Daten außerhalb der Europäischen Union kann nicht
    ausgeschlossen werden. Netlify verwendet für internationale
    Datenübermittlungen geeignete Schutzmechanismen, darunter
    Standardvertragsklauseln.
  </p>




<section>
  <h2 className="text-2xl font-semibold text-white">
    7. Nutzung von Supabase
  </h2>

  <p className="mt-4">
    Für bestimmte technische Funktionen dieser Website nutzen wir Supabase.
    Dabei können personenbezogene Daten verarbeitet werden, wenn diese im
    Rahmen der Nutzung entsprechender Funktionen eingegeben oder technisch
    übermittelt werden.
  </p>

  <p className="mt-4">
    Zu den verarbeiteten Daten können insbesondere E-Mail-Adressen,
    Nutzungsdaten, technische Informationen sowie weitere Angaben gehören,
    die für die jeweilige Funktion erforderlich sind.
  </p>

  <p className="mt-4">
    Die Verarbeitung erfolgt, soweit sie zur Durchführung eines Vertrags oder
    vorvertraglicher Maßnahmen erforderlich ist, auf Grundlage von Art. 6
    Abs. 1 lit. b DSGVO. Im Übrigen erfolgt sie auf Grundlage unseres
    berechtigten Interesses an einer sicheren und funktionalen Bereitstellung
    unserer Dienste gemäß Art. 6 Abs. 1 lit. f DSGVO.
  </p>

  <p className="mt-4">
    Eine Verarbeitung personenbezogener Daten außerhalb der Europäischen Union
    kann je nach eingesetzter Infrastruktur nicht vollständig ausgeschlossen
    werden. Dabei werden die jeweils erforderlichen datenschutzrechtlichen
    Schutzmechanismen berücksichtigt.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold text-white">
    8. Speicherdauer
  </h2>

  <p className="mt-4">
    Personenbezogene Daten werden nur so lange gespeichert, wie dies für die
    Bearbeitung deiner Anfrage erforderlich ist. Eine längere Speicherung kann
    erfolgen, wenn gesetzliche Aufbewahrungspflichten bestehen.
  </p>
</section>
  
<section>
  <h2 className="text-2xl font-semibold text-white">
    9. Deine Rechte
  </h2>

  <p className="mt-4">
    Du hast im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht
    auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
    Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung deiner
    personenbezogenen Daten.
  </p>

  <p className="mt-4">
    Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu
    beschweren, wenn du der Ansicht bist, dass die Verarbeitung deiner
    personenbezogenen Daten gegen die DSGVO verstößt.
  </p>
</section>
        </div>
      </main>
    );
  }