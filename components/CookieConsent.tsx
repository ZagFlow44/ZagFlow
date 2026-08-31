"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("codespes-cookie-consent");
  
    if (!consent) {
      setVisible(true);
    }
  
    function openCookieConsent() {
      setVisible(true);
    }
  
    window.addEventListener(
      "codespes-open-cookie-consent",
      openCookieConsent
    );
  
    return () => {
      window.removeEventListener(
        "codespes-open-cookie-consent",
        openCookieConsent
      );
    };
  }, []);

  function acceptCookies() {
    localStorage.setItem("codespes-cookie-consent", "accepted");
    window.dispatchEvent(new Event("codespes-consent-updated"));
    setVisible(false);
  }

  function rejectCookies() {
    localStorage.setItem("codespes-cookie-consent", "rejected");
    window.dispatchEvent(new Event("codespes-consent-updated"));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-2xl rounded-2xl border border-white/10 bg-[#0b1020] p-6 text-white shadow-2xl">
      <h2 className="text-lg font-semibold">
        Datenschutz & Cookies
      </h2>

      <p className="mt-3 text-sm leading-6 text-gray-300">
        Wir verwenden technisch notwendige Funktionen und – nur mit deiner
        Zustimmung – Google Analytics, um die Nutzung unserer Website besser
        zu verstehen.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={acceptCookies}
          className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500"
        >
          Alle akzeptieren
        </button>

        <button
          type="button"
          onClick={rejectCookies}
          className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
        >
          Nur notwendige
        </button>
      </div>
    </div>
  );
}