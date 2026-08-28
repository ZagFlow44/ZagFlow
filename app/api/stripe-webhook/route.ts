import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();

    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Stripe-Signatur fehlt." },
        { status: 400 }
      );
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
      return NextResponse.json(
        { error: "Webhook Secret fehlt." },
        { status: 500 }
      );
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      if (session.payment_status !== "paid") {
        return NextResponse.json({ received: true });
      }

      const customerEmail = session.customer_details?.email;

      if (!customerEmail) {
        console.error("Keine Kunden-E-Mail in der Stripe Session gefunden.");

        return NextResponse.json({ received: true });
      }

      const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

      const consentGiven =
        session.metadata?.withdrawal_consent === "true";

      const consentDate =
        session.metadata?.withdrawal_consent_at || "nicht verfügbar";

      await resend.emails.send({
        from: "CodeSpes <onboarding@resend.dev>",
        to: customerEmail,
        subject: "Deine CodeSpes Bestellung wurde bestätigt",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111827;">
            <h1 style="font-size: 28px;">
              Vielen Dank für deine Bestellung!
            </h1>

            <p>
              Deine Zahlung für den
              <strong>CodeSpes AI Customer Support Starter</strong>
              wurde erfolgreich bestätigt.
            </p>

            <p>
              <strong>Produkt:</strong>
              AI Customer Support Starter
              <br />
              <strong>Preis:</strong>
              79,00 €
            </p>

            <hr style="margin: 30px 0; border: 0; border-top: 1px solid #e5e7eb;" />

            <h2 style="font-size: 20px;">
              Hinweis zur sofortigen Bereitstellung
            </h2>

            <p>
              ${
                consentGiven
                  ? "Du hast ausdrücklich zugestimmt, dass CodeSpes vor Ablauf der Widerrufsfrist mit der Bereitstellung der digitalen Inhalte beginnt. Du hast bestätigt, dass dir bekannt ist, dass du dadurch mit Beginn der Vertragserfüllung dein Widerrufsrecht verlierst."
                  : "Für diese Bestellung konnte keine Zustimmung zur sofortigen Bereitstellung festgestellt werden."
              }
            </p>

            <p>
              <strong>Zeitpunkt der Zustimmung:</strong>
              ${consentDate}
            </p>

            <p>
              <a href="${siteUrl}/widerruf">
                Widerrufsbelehrung ansehen
              </a>
            </p>

            <hr style="margin: 30px 0; border: 0; border-top: 1px solid #e5e7eb;" />

            <p>
              Viele Grüße
              <br />
              <strong>CodeSpes</strong>
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({
      received: true,
    });
  } catch (error) {
    console.error("Stripe Webhook Error:", error);

    return NextResponse.json(
      {
        error: "Webhook konnte nicht verarbeitet werden.",
      },
      {
        status: 400,
      }
    );
  }
}