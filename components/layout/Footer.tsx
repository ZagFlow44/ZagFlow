import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src="/logo.png"
            alt="CodeSpes Logo"
            width={180}
            height={60}
            className="h-12 w-auto object-contain"
          />

          <p className="mt-5 max-w-md text-gray-400">
            CodeSpes hilft E-Commerce-Unternehmen, Produktdaten, Support,
            Marketing und interne Prozesse effizient zu automatisieren.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Leistungen</h4>
          <ul className="mt-4 space-y-3 text-gray-400">
  <li>
    <Link
      href="/services/product-automation"
      className="transition hover:text-white"
    >
      Product Automation
    </Link>
  </li>

  <li>
    <Link
      href="/services/customer-support-automation"
      className="transition hover:text-white"
    >
      Customer Support
    </Link>
  </li>

  <li>
    <Link
      href="/services/returns-automation"
      className="transition hover:text-white"
    >
      Returns Automation
    </Link>
  </li>

  <li>
    <Link
      href="/services/email-sms-automation"
      className="transition hover:text-white"
    >
      E-Mail & SMS Automation
    </Link>
  </li>

  <li>
    <Link
      href="/services/system-integrations"
      className="transition hover:text-white"
    >
      System Integrations
    </Link>
  </li>

  <li>
    <Link
      href="/services/custom-workflows"
      className="transition hover:text-white"
    >
      Custom Workflows
    </Link>
  </li>
</ul>
        </div>

        <div>
  <h4 className="font-semibold text-white">Unternehmen</h4>
  <ul className="mt-4 space-y-3 text-gray-400">
    <li>
      <a href="/#plattform" className="transition hover:text-white">
        Plattform
      </a>
    </li>

    <li>
      <a href="/#preise" className="transition hover:text-white">
        Preise
      </a>
    </li>

    <li>
      <a href="/#kontakt" className="transition hover:text-white">
        Kontakt
      </a>
    </li>

    <li>
      <Link href="/impressum" className="transition hover:text-white">
        Impressum
      </Link>
    </li>

    <li>
      <Link href="/datenschutz" className="transition hover:text-white">
        Datenschutz
      </Link>
    </li>
  </ul>
</div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
        <p>© 2026 CodeSpes. Alle Rechte vorbehalten.</p>
        <p>Built for modern eCommerce teams.</p>
      </div>
    </footer>
  );
}