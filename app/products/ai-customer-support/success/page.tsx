import Link from "next/link";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type SuccessPageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

export default async function SuccessPage({
  searchParams,
}: SuccessPageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;

  if (!sessionId) {
    return (
      <main className="min-h-screen bg-[#050816] text-white">
        <section className="mx-auto max-w-3xl px-6 py-32 text-center">
          <h1 className="text-3xl font-bold">
            Zahlung konnte nicht bestätigt werden
          </h1>

          <p className="mt-4 text-gray-400">
            Es wurde keine gültige Checkout-Session gefunden.
          </p>

          <Link
            href="/products/ai-customer-support"
            className="mt-8 inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-semibold"
          >
            Zurück zum Produkt
          </Link>
        </section>
      </main>
    );
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  const paid = session.payment_status === "paid";

  

  if (!paid) {
    return (
      <main className="min-h-screen bg-[#050816] text-white">
        <section className="mx-auto max-w-3xl px-6 py-32 text-center">
          <h1 className="text-3xl font-bold">
            Zahlung noch nicht bestätigt
          </h1>

          <p className="mt-4 text-gray-400">
            Sobald Stripe die Zahlung bestätigt hat, wird dein Download
            freigeschaltet.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <div className="rounded-3xl border border-indigo-500/20 bg-white/[0.03] p-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/10 text-2xl text-indigo-300">
            ✓
          </div>

          <h1 className="mt-6 text-4xl font-bold">
            Zahlung erfolgreich
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-400">
            Deine Zahlung wurde bestätigt.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
  <a
    href={`/api/download?session_id=${sessionId}&file=workflow`}
    className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
  >
    n8n Workflow herunterladen
  </a>

  <a
    href={`/api/download?session_id=${sessionId}&file=guide`}
    className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
  >
    Setup Guide herunterladen
  </a>
</div>

<div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
  <p className="text-sm font-semibold text-white">
    Hinweis zur sofortigen Bereitstellung
  </p>

  <p className="mt-3 text-sm leading-6 text-gray-400">
    Du hast ausdrücklich zugestimmt, dass CodeSpes vor Ablauf der
    Widerrufsfrist mit der Bereitstellung der digitalen Inhalte beginnt.
    Du hast außerdem bestätigt, dass dir bekannt ist, dass du mit Beginn
    der Vertragserfüllung dein Widerrufsrecht verlierst.
  </p>

  <Link
    href="/widerruf"
    className="mt-3 inline-flex text-sm text-indigo-300 underline transition hover:text-indigo-200"
  >
    Widerrufsbelehrung ansehen
  </Link>
</div>
</div>
</section>
    </main>
  );
}