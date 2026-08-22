import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST() {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    
  const session = await stripe.checkout.sessions.create({
  mode: "payment",
  line_items: [
    {
      price_data: {
        currency: "eur",
        product_data: {
          name: "CodeSpes AI Customer Support Starter",
        },
        unit_amount: 7900,
      },
      quantity: 1,
    },
  ],

  success_url: `${siteUrl}/products/ai-customer-support/success?session_id={CHECKOUT_SESSION_ID}`,
  
  cancel_url: `${siteUrl}/products/ai-customer-support`,
});
    

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      { error: "Checkout konnte nicht erstellt werden." },
      { status: 500 }
    );
  }
}