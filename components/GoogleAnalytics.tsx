"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    function updateConsent() {
      setConsent(
        localStorage.getItem("codespes-cookie-consent")
      );
    }

    updateConsent();

    window.addEventListener(
      "codespes-consent-updated",
      updateConsent
    );

    return () => {
      window.removeEventListener(
        "codespes-consent-updated",
        updateConsent
      );
    };
  }, []);

  if (consent !== "accepted") {
    return null;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9PW9FNVX6Q"
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9PW9FNVX6Q');
        `}
      </Script>
    </>
  );
}