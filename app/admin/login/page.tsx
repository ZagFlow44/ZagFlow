"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage("E-Mail oder Passwort ist nicht korrekt.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
          CodeSpes Admin
        </span>

        <h1 className="mt-6 text-3xl font-bold">
          Admin Login
        </h1>

        <p className="mt-2 text-slate-400">
          Melde dich an, um die Automation Audits zu verwalten.
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              E-Mail
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none transition focus:border-indigo-500"
              placeholder="deine@email.de"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Passwort
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none transition focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>

          {errorMessage && (
            <p className="text-sm text-red-400">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 font-semibold transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Anmeldung ..." : "Anmelden"}
          </button>
        </form>
      </div>
    </main>
  );
}