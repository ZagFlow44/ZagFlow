import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ZagFlow | KI-Automatisierung für Shopify & E-Commerce",
    template: "%s | ZagFlow",
  },

  description:
    "ZagFlow automatisiert Shopify- und E-Commerce-Prozesse mit KI. Spare Zeit, optimiere Produktdaten und skaliere dein Unternehmen mit intelligenten Workflows.",

  keywords: [
    "Shopify",
    "Shopify Automatisierung",
    "E-Commerce",
    "KI",
    "Künstliche Intelligenz",
    "Workflow Automation",
    "SEO",
    "Produktoptimierung",
    "Shopify SEO",
    "ZagFlow",
  ],

  authors: [{ name: "ZagFlow" }],

  creator: "ZagFlow",

  metadataBase: new URL("https://zagflow.de"),

  openGraph: {
    title: "ZagFlow",
    description:
      "KI-Automatisierung für Shopify- und E-Commerce-Unternehmen.",
    url: "https://zagflow.de",
    siteName: "ZagFlow",
    locale: "de_DE",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
