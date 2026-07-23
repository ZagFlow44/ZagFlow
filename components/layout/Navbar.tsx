"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const navItems = [
  { label: "Plattform", href: "/#plattform" },
  { label: "Lösungen", href: "/#loesungen" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Preise", href: "/#preise" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050816]/90 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
      <a href="/" className="flex items-center">
          <Image
            src="/codespes-logo.png"
            alt="CodeSpes Logo"
            width={180}
            height={60}
            className="h-10 w-auto max-w-[130px] object-contain md:h-12 md:max-w-none"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">
        {navItems.map((item) => (
  <a
    key={item.label}
    href={item.href}
    className="transition hover:text-white"
  >
    {item.label}
  </a>
))}
        </nav>

        <a href="/#kontakt">
  <Button>Audit buchen</Button>
</a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-white/10 bg-white/5 p-3 text-white md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050816]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5 text-gray-300">
          {navItems.map((item) => (
  <a
    key={item.label}
    href={item.href}
    onClick={() => setMenuOpen(false)}
    className="text-lg transition hover:text-white"
  >
    {item.label}
  </a>
))}

<a
  href="/#kontakt"
  onClick={() => setMenuOpen(false)}
  className="mt-4 rounded-xl bg-indigo-600 px-6 py-3 text-center font-semibold text-white hover:bg-indigo-500"
>
  Audit buchen
</a>
          </div>
        </div>
      )}
    </header>
  );
}