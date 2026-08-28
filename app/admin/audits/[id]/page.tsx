"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

type Audit = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  website: string;
  platform: string;
  orders: string;
  support_requests: string;
  tools: string;
  manual_processes: string;
  biggest_time_wasters: string;
  automation_goal: string;
  blueprint: string;
  status: string;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AuditDetailPage() {
  const params = useParams();
  const router = useRouter();

  const [audit, setAudit] = useState<Audit | null>(null);
  const [loading, setLoading] = useState(true);
  const [savingStatus, setSavingStatus] = useState(false);

  useEffect(() => {
    async function loadAudit() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/admin/login");
        return;
      }

      const { data, error } = await supabase
        .from("audits")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) {
        console.error("AUDIT DETAIL ERROR:", error);
        setLoading(false);
        return;
      }

      setAudit(data);
      setLoading(false);
    }

    loadAudit();
  }, [params.id, router]);

  async function updateStatus(newStatus: string) {
    if (!audit) return;
  
    setSavingStatus(true);
  
    const { error } = await supabase
      .from("audits")
      .update({ status: newStatus })
      .eq("id", audit.id);
  
    if (error) {
      console.error("STATUS UPDATE ERROR:", error);
      setSavingStatus(false);
      return;
    }
  
    setAudit({
      ...audit,
      status: newStatus,
    });
  
    setSavingStatus(false);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050816] px-6 pt-32 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-slate-400">
            Audit wird geladen ...
          </p>
        </div>
      </main>
    );
  }

  if (!audit) {
    return (
      <main className="min-h-screen bg-[#050816] px-6 pt-32 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-slate-400">
            Audit wurde nicht gefunden.
          </p>
        </div>
      </main>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] px-6 pb-20 pt-32 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/admin"
            className="text-sm text-indigo-300 transition hover:text-indigo-200"
          >
            ← Zurück zu allen Audits
          </Link>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                Automation Audit
              </span>

              <h1 className="mt-6 text-4xl font-bold">
                {audit.name}
              </h1>

              <p className="mt-2 text-slate-400">
                {audit.email}
              </p>
            </div>

            <div className="flex flex-col gap-2">
  <label className="text-sm text-slate-400">
    Status
  </label>

  <select
    value={audit.status || "new"}
    onChange={(e) => updateStatus(e.target.value)}
    disabled={savingStatus}
    className="rounded-xl border border-white/10 bg-[#0b1020] px-4 py-2 text-sm text-white outline-none focus:border-indigo-500 disabled:opacity-50"
  >
    <option value="new">Neu</option>
    <option value="contacted">Kontaktiert</option>
    <option value="customer">Kunde</option>
  </select>

  {savingStatus && (
    <span className="text-xs text-slate-500">
      Wird gespeichert ...
    </span>
  )}
</div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <InfoCard title="Website">
              {audit.website || "-"}
            </InfoCard>

            <InfoCard title="Plattform">
              {audit.platform || "-"}
            </InfoCard>

            <InfoCard title="Bestellungen pro Monat">
              {audit.orders || "-"}
            </InfoCard>

            <InfoCard title="Support-Anfragen pro Monat">
              {audit.support_requests || "-"}
            </InfoCard>
          </div>

          <div className="mt-6 space-y-6">
            <InfoCard title="Verwendete Tools">
              {audit.tools || "-"}
            </InfoCard>

            <InfoCard title="Manuelle Prozesse">
              {audit.manual_processes || "-"}
            </InfoCard>

            <InfoCard title="Größte Zeitfresser">
              {audit.biggest_time_wasters || "-"}
            </InfoCard>

            <InfoCard title="Automatisierungsziel">
              {audit.automation_goal || "-"}
            </InfoCard>
          </div>

          <div className="mt-10 rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.06] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">
              Automation Blueprint
            </h2>

            <div className="mt-6 whitespace-pre-wrap leading-7 text-slate-300">
              {audit.blueprint || "Kein Blueprint vorhanden."}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <div className="mt-3 whitespace-pre-wrap leading-7 text-slate-300">
        {children}
      </div>
    </div>
  );
}