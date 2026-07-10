export default function Impressum() {
    return (
      <main className="mx-auto max-w-4xl px-6 py-24 text-white">
        <h1 className="text-5xl font-bold">Impressum</h1>
  
        <div className="mt-10 space-y-8 text-gray-300 leading-8">
  
          <section>
            <h2 className="text-2xl font-semibold text-white">
              Angaben gemäß § 5 TMG
            </h2>
  
            <p className="mt-4">
              ZagFlow
              <br />
              Inhaber: [Dein Vor- und Nachname]
              <br />
              [Straße + Hausnummer]
              <br />
              [PLZ] [Ort]
              <br />
              Deutschland
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-white">
              Kontakt
            </h2>
  
            <p className="mt-4">
              E-Mail: kontakt@zagflow.de
              <br />
              Telefon: [Telefonnummer]
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-white">
              Umsatzsteuer
            </h2>
  
            <p className="mt-4">
              Umsatzsteuer-Identifikationsnummer gemäß §27a
              Umsatzsteuergesetz:
              <br />
              Wird nach Eintragung ergänzt.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-white">
              Verantwortlich für den Inhalt
            </h2>
  
            <p className="mt-4">
              [Dein Vor- und Nachname]
              <br />
              [Adresse]
            </p>
          </section>
  
        </div>
      </main>
    );
  }