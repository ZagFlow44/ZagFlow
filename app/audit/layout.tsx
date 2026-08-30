import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kostenloser AI Automation Audit",
  description:
    "Finde heraus, welche Prozesse in deinem E-Commerce-Unternehmen sich mit KI automatisieren lassen. Erhalte deinen persönlichen CodeSpes Automation Blueprint.",
  alternates: {
    canonical: "/audit",
  },
  openGraph: {
    title: "Kostenloser AI Automation Audit | CodeSpes",
    description:
      "Analysiere dein Automatisierungspotenzial und erhalte einen individuellen Automation Blueprint für dein E-Commerce-Unternehmen.",
    url: "https://www.codespes.com/audit",
  },
};

export default function AuditLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}