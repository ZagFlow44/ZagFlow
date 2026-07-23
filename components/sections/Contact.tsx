"use client";

import { useState } from "react";
import { Mail, Building2, Globe, User } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      website: formData.get("website"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
          Kontakt
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
          Lass uns deinen Shop automatisieren.
        </h2>

        <p className="mt-6 text-lg text-gray-400">
          Buche ein kostenloses Strategiegespräch und erfahre, welche Prozesse
          in deinem Shop automatisiert werden können.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-300">Name</label>
              <div className="flex items-center rounded-xl border border-white/10 bg-[#0F172A] px-4">
                <User size={18} className="text-gray-500" />
                <input name="name" required type="text" placeholder="Max Mustermann" className="w-full bg-transparent p-4 text-white outline-none" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Unternehmen</label>
              <div className="flex items-center rounded-xl border border-white/10 bg-[#0F172A] px-4">
                <Building2 size={18} className="text-gray-500" />
                <input name="company" type="text" placeholder="Mein Shop" className="w-full bg-transparent p-4 text-white outline-none" />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">E-Mail</label>
            <div className="flex items-center rounded-xl border border-white/10 bg-[#0F172A] px-4">
              <Mail size={18} className="text-gray-500" />
              <input name="email" required type="email" placeholder="max@email.de" className="w-full bg-transparent p-4 text-white outline-none" />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">Website</label>
            <div className="flex items-center rounded-xl border border-white/10 bg-[#0F172A] px-4">
              <Globe size={18} className="text-gray-500" />
              <input name="website" type="text" placeholder="https://deinshop.de" className="w-full bg-transparent p-4 text-white outline-none" />
            </div>
          </div>

          <div>
  <label className="mb-2 block text-sm text-gray-300">
    Gewünschte Leistung
  </label>

  <select
    name="service"
    required
    defaultValue=""
    className="w-full rounded-xl border border-white/10 bg-[#0F172A] p-4 text-white outline-none"
  >
    <option value="" disabled>
      Bitte auswählen
    </option>
    <option value="Product Automation">Product Automation</option>
    <option value="Customer Support Automation">
      Customer Support Automation
    </option>
    <option value="Returns Automation">Returns Automation</option>
    <option value="Email & SMS Automation">Email & SMS Automation</option>
    <option value="System Integrations">System Integrations</option>
    <option value="Custom Workflows">Custom Workflows</option>
  </select>
</div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">Nachricht</label>
            <textarea name="message" required rows={5} placeholder="Beschreibe kurz dein Projekt..." className="w-full rounded-xl border border-white/10 bg-[#0F172A] p-4 text-white outline-none" />
          </div>

          <button disabled={status === "loading"} className="w-full rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60">
            {status === "loading" ? "Wird gesendet..." : "Kostenloses Audit anfragen"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm text-green-400">
              ✅ Danke! Deine Anfrage wurde erfolgreich gesendet.
            </p>
          )}

          {status === "error" && (
            <p className="text-center text-sm text-red-400">
              ❌ Etwas ist schiefgelaufen. Bitte versuche es erneut.
            </p>
          )}

          <div className="flex flex-col gap-2 text-center text-sm text-gray-400">
            <p>✅ Antwort innerhalb von 24 Stunden</p>
            <p>🔒 100 % unverbindlich</p>
            <p>⭐ Kostenloses Erstgespräch</p>
          </div>
        </form>
      </div>
    </section>
  );
}