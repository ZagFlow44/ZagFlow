import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import fs from "fs";
import path from "path";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id");
    const file = request.nextUrl.searchParams.get("file");

    if (!sessionId || !file) {
      return NextResponse.json(
        { error: "Ungültige Download-Anfrage." },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Zahlung nicht bestätigt." },
        { status: 403 }
      );
    }

    const files: Record<string, string> = {
      workflow: "CodeSpes-AI-Customer-Support-Starter.json",
      guide: "CodeSpes_AI_Customer_Support_Starter_Setup_Guide_FINAL.pdf",
    };

    const fileName = files[file];

    if (!fileName) {
      return NextResponse.json(
        { error: "Datei nicht gefunden." },
        { status: 404 }
      );
    }

    const filePath = path.join(
      process.cwd(),
      "private-downloads",
      fileName
    );

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Content-Type": "application/octet-stream",
      },
    });
  } catch (error) {
    console.error("Download error:", error);

    return NextResponse.json(
      { error: "Download konnte nicht verarbeitet werden." },
      { status: 500 }
    );
  }
}