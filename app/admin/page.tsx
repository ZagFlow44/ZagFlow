"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

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
  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  const [audits, setAudits] = useState<Audit[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
const [statusFilter, setStatusFilter] = useState("all");

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

  const filteredAudits = audits.filter((audit) => {
    const matchesSearch =
      audit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      audit.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (audit.website || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
  
    const matchesStatus =
      statusFilter === "all" || audit.status === statusFilter;
  
    return matchesSearch && matchesStatus;
  });

  const totalAudits = audits.length;
const newAudits = audits.filter((audit) => audit.status === "new").length;
const contactedAudits = audits.filter(
  (audit) => audit.status === "contacted"
).length;
const customerAudits = audits.filter(
  (audit) => audit.status === "customer"
).length;

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

            <button
  type="button"
  onClick={handleLogout}
  className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
>
  Abmelden
</button>

            <p className="mt-3 text-slate-400">
              Übersicht aller eingegangenen Audit-Anfragen.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
    <p className="text-sm text-slate-400">Alle Audits</p>
    <p className="mt-2 text-3xl font-bold">{totalAudits}</p>
  </div>

  <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.06] p-5">
    <p className="text-sm text-indigo-300">Neu</p>
    <p className="mt-2 text-3xl font-bold">{newAudits}</p>
  </div>

  <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] p-5">
    <p className="text-sm text-amber-300">Kontaktiert</p>
    <p className="mt-2 text-3xl font-bold">{contactedAudits}</p>
  </div>

  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-5">
    <p className="text-sm text-emerald-300">Kunden</p>
    <p className="mt-2 text-3xl font-bold">{customerAudits}</p>
  </div>
</div>

          <div className="mb-8 mt-8 flex flex-col gap-4 md:flex-row">
  <input
    type="text"
    placeholder="Nach Name, E-Mail oder Website suchen ..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500"
  />

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none transition focus:border-indigo-500"
  >
    <option value="all">Alle Status</option>
    <option value="new">Neu</option>
    <option value="contacted">Kontaktiert</option>
    <option value="customer">Kunde</option>
  </select>
</div>
          
          {loading ? (
            <p className="text-slate-400">
              Audits werden geladen ...
            </p>
          ) : filteredAudits.length === 0 ? (
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
                {filteredAudits.map((audit) => (
                    <tr
                    key={audit.id}
                    className="border-b border-white/5 last:border-b-0"
                  >
                    <td className="px-5 py-4 font-medium">
                      <Link
                        href={`/admin/audits/${audit.id}`}
                        className="cursor-pointer text-white underline decoration-indigo-500/40 underline-offset-4 transition hover:text-indigo-300"
                      >
                        {audit.name}
                      </Link>
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
                      {new Date(audit.created_at).toLocaleDateString("de-DE")}
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