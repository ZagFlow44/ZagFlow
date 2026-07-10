import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src="/logo.png"
            alt="ZagFlow Logo"
            width={180}
            height={60}
            className="h-12 w-auto object-contain"
          />

          <p className="mt-5 max-w-md text-gray-400">
            ZagFlow hilft E-Commerce-Unternehmen, Produktdaten, Support,
            Marketing und interne Prozesse effizient zu automatisieren.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Leistungen</h4>
          <ul className="mt-4 space-y-3 text-gray-400">
  <li>
    <Link href="/" className="hover:text-white transition">
      Startseite
    </Link>
  </li>

  <li>
    <Link href="/impressum" className="hover:text-white transition">
      Impressum
    </Link>
  </li>

  <li>
    <Link href="/datenschutz" className="hover:text-white transition">
      Datenschutz
    </Link>
  </li>

  <li>
    <a href="#kontakt" className="hover:text-white transition">
      Kontakt
    </a>
  </li>
</ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Unternehmen</h4>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li>Plattform</li>
            <li>Preise</li>
            <li>Kontakt</li>
            <li>Impressum</li>
            <li>Datenschutz</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
        <p>© 2026 ZagFlow. Alle Rechte vorbehalten.</p>
        <p>Built for modern eCommerce teams.</p>
      </div>
    </footer>
  );
}