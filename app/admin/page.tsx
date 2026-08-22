"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

type Audit = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  website: string;
  platform: string;
  status: string;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminPage() {
  const router = useRouter();

  const [audits, setAudits] = useState<Audit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSessionAndLoadAudits() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/admin/login");
        return;
      }

      const { data, error } = await supabase
        .from("audits")
        .select(
          "id, created_at, name, email, website, platform, status"
        )
        .order("created_at", { ascending: false });

      if (error) {
        console.error("ADMIN AUDITS ERROR:", error);
        setLoading(false);
        return;
      }

      setAudits(data || []);
      setLoading(false);
    }

    checkSessionAndLoadAudits();
  }, [router]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] px-6 pb-20 pt-32 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
              CodeSpes Admin
            </span>

            <h1 className="mt-6 text-4xl font-bold">
              Automation Audits
            </h1>

            <p className="mt-3 text-slate-400">
              Übersicht aller eingegangenen Audit-Anfragen.
            </p>
          </div>

          {loading ? (
            <p className="text-slate-400">
              Audits werden geladen ...
            </p>
          ) : audits.length === 0 ? (
            <p className="text-slate-400">
              Noch keine Audits vorhanden.
            </p>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
              <table className="w-full text-left">
                <thead className="border-b border-white/10 bg-white/[0.03] text-sm text-slate-400">
                  <tr>
                    <th className="px-5 py-4">Name</th>
                    <th className="px-5 py-4">E-Mail</th>
                    <th className="px-5 py-4">Website</th>
                    <th className="px-5 py-4">Plattform</th>
                    <th className="px-5 py-4">Datum</th>
                    <th className="px-5 py-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {audits.map((audit) => (
                    <tr
                      key={audit.id}
                      className="border-b border-white/5 last:border-b-0"
                    >
                      <td className="px-5 py-4 font-medium">
                        {audit.name}
                      </td>

                      <td className="px-5 py-4 text-slate-300">
                        {audit.email}
                      </td>

                      <td className="px-5 py-4 text-slate-300">
                        {audit.website || "-"}
                      </td>

                      <td className="px-5 py-4 text-slate-300">
                        {audit.platform || "-"}
                      </td>

                      <td className="px-5 py-4 text-slate-400">
                        {new Date(
                          audit.created_at
                        ).toLocaleDateString("de-DE")}
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                          {audit.status || "new"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </>
  );
}