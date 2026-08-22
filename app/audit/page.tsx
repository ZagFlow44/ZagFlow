"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";

export default function AuditPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    platform: "",
    orders: "",
    supportRequests: "",
    tools: "",
    manualProcesses: "",
    biggestTimeWasters: "",
    automationGoal: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  
    if (isSubmitting) return;
  
    setIsSubmitting(true);
  
    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || "Audit konnte nicht gesendet werden.");
      }
      
      sessionStorage.setItem(
        "codespesBlueprint",
        JSON.stringify({
          blueprint: result.blueprint,
          name: formData.name,
          website: formData.website,
          platform: formData.platform,
        })
      );
      
      window.location.href = "/audit/success";
      
    } catch (error) {
      console.error("AUDIT SEND ERROR:", error);
  
      alert("Beim Senden ist etwas schiefgelaufen.");
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] text-white">
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-32">
          <div className="mx-auto max-w-3xl">
            <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
              AI Automation Audit
            </span>

            <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
              Wo steckt das größte
              <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Automatisierungspotenzial?
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Beantworte ein paar Fragen zu deinem Unternehmen, deinen Tools und
              deinen aktuellen Prozessen. CodeSpes analysiert daraus später die
              wichtigsten Möglichkeiten für sinnvolle Automatisierungen.
            </p>

            <form onSubmit={handleSubmit} className="mt-14 space-y-10">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <h2 className="text-xl font-semibold">1. Dein Unternehmen</h2>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 outline-none transition focus:border-indigo-500"
                      placeholder="Max Mustermann"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 outline-none transition focus:border-indigo-500"
                      placeholder="max@unternehmen.de"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm text-slate-300">
                      Website oder Shop
                    </label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 outline-none transition focus:border-indigo-500"
                      placeholder="https://deinshop.de"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <h2 className="text-xl font-semibold">2. Dein Shop</h2>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Welche Plattform nutzt du?
                    </label>

                    <select
                      name="platform"
                      value={formData.platform}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 outline-none transition focus:border-indigo-500"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="Shopify">Shopify</option>
                      <option value="WooCommerce">WooCommerce</option>
                      <option value="Shopware">Shopware</option>
                      <option value="Amazon">Amazon</option>
                      <option value="Other">Andere</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Bestellungen pro Monat
                    </label>
                    <input
                      type="text"
                      name="orders"
                      value={formData.orders}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 outline-none transition focus:border-indigo-500"
                      placeholder="z. B. 500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm text-slate-300">
                      Support-Anfragen pro Monat
                    </label>
                    <input
                      type="text"
                      name="supportRequests"
                      value={formData.supportRequests}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 outline-none transition focus:border-indigo-500"
                      placeholder="z. B. 150"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <h2 className="text-xl font-semibold">
                  3. Tools & aktuelle Prozesse
                </h2>

                <div className="mt-6 space-y-6">
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Welche Tools nutzt du aktuell?
                    </label>
                    <textarea
                      name="tools"
                      value={formData.tools}
                      onChange={handleChange}
                      rows={4}
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 outline-none transition focus:border-indigo-500"
                      placeholder="z. B. Shopify, Klaviyo, Gmail, Google Sheets, HubSpot ..."
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Welche Prozesse laufen noch manuell?
                    </label>
                    <textarea
                      name="manualProcesses"
                      value={formData.manualProcesses}
                      onChange={handleChange}
                      rows={5}
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 outline-none transition focus:border-indigo-500"
                      placeholder="Beschreibe kurz Aufgaben, die regelmäßig manuell erledigt werden."
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Was kostet dich aktuell am meisten Zeit?
                    </label>
                    <textarea
                      name="biggestTimeWasters"
                      value={formData.biggestTimeWasters}
                      onChange={handleChange}
                      rows={4}
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 outline-none transition focus:border-indigo-500"
                      placeholder="z. B. Support, Retouren, Produktpflege oder Datenübertragung"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.05] p-6 sm:p-8">
                <h2 className="text-xl font-semibold">
                  4. Dein Automatisierungsziel
                </h2>

                <div className="mt-6">
                  <label className="mb-2 block text-sm text-slate-300">
                    Was würdest du am liebsten automatisieren?
                  </label>

                  <textarea
                    name="automationGoal"
                    value={formData.automationGoal}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 outline-none transition focus:border-indigo-500"
                    placeholder="Beschreibe, welcher Prozess für dich idealerweise automatisch laufen sollte."
                  />
                </div>
              </div>

              <button
  type="submit"
  disabled={isSubmitting}
  className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-4 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
>
  {isSubmitting ? "Audit wird analysiert …" : "Automation Audit abschließen"}
</button>

              <p className="text-center text-sm text-slate-500">
                Deine Angaben werden vertraulich behandelt und ausschließlich
                zur Analyse deiner Automatisierungsmöglichkeiten verwendet.
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}