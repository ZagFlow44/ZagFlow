import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, website, message } = body;

    await resend.emails.send({
      from: "ZagFlow <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `Neue Anfrage von ${name}`,
      html: `
        <h2>Neue Anfrage über ZagFlow</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Unternehmen:</strong> ${company}</p>
        <p><strong>Website:</strong> ${website}</p>

        <hr>

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
} catch (error: any) {
    console.error("RESEND ERROR:", error);
  
    return NextResponse.json(
      {
        success: false,
        error,
      },
      {
        status: 500,
      }
    );
  }
}