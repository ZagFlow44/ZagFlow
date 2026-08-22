import { Resend } from "resend";
import { NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from "pdf-lib";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      website,
      platform,
      orders,
      supportRequests,
      tools,
      manualProcesses,
      biggestTimeWasters,
      automationGoal,
    } = body;

    // 1. Audit durch Groq analysieren
    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          messages: [
            {
              role: "system",
              content: `
            Du bist ein erfahrener AI-Automation-Berater von CodeSpes.
            
            CodeSpes hilft E-Commerce-Unternehmen dabei, manuelle Prozesse durch sinnvolle Automatisierungen zu ersetzen.
            
            Analysiere die Angaben des Interessenten und erstelle einen professionellen Automation Blueprint auf Deutsch.
            
            WICHTIGE FORMATREGELN:
            
            - Verwende kein Markdown.
            - Verwende keine Tabellen.
            - Verwende keine Sternchen.
            - Verwende keine Rautezeichen.
            - Verwende keine Trennlinien.
            - Verwende keine senkrechten Striche.
            - Verwende keine Emojis.
            - Schreibe keine extrem langen Zeilen.
            - Schreibe kurze Absätze mit maximal 3 Sätzen.
            - Setze zwischen jedem Abschnitt eine Leerzeile.
            - Jeder empfohlene Workflow muss in einem eigenen Absatz stehen.
            - Beginne jeden Workflow mit einer kurzen Bezeichnung.
            - Schreibe klar, professionell und verständlich.
            - Verwende nur normale deutsche Sätze und nummerierte Überschriften.
            
            Verwende genau diese Struktur:
            
            1. Zusammenfassung
            
            Beschreibe die aktuelle Situation in 2 bis 3 kurzen Sätzen.
            
            2. Größtes Automatisierungspotenzial
            
            Nenne den wichtigsten Bereich, der zuerst automatisiert werden sollte.
            Erkläre in 2 bis 3 kurzen Sätzen, warum dieser Bereich Priorität hat.
            
            3. Empfohlene Workflows
            
            Workflow 1: [Kurzer Name]
            
            Beschreibe den Ablauf in höchstens 4 kurzen Sätzen.
            Nenne, welche Tools beteiligt sein könnten.
            Nenne am Ende:
            Priorität: Hoch, Mittel oder Niedrig.
            Aufwand: Niedrig, Mittel oder Hoch.
            
            Workflow 2: [Kurzer Name]
            
            Beschreibe den Ablauf in höchstens 4 kurzen Sätzen.
            Nenne, welche Tools beteiligt sein könnten.
            Nenne am Ende:
            Priorität: Hoch, Mittel oder Niedrig.
            Aufwand: Niedrig, Mittel oder Hoch.
            
            Workflow 3: [Kurzer Name]
            
            Beschreibe den Ablauf in höchstens 4 kurzen Sätzen.
            Nenne, welche Tools beteiligt sein könnten.
            Nenne am Ende:
            Priorität: Hoch, Mittel oder Niedrig.
            Aufwand: Niedrig, Mittel oder Hoch.
            
            4. Benötigte Tools und Systeme
            
            Nenne die wichtigsten vorhandenen und zusätzlichen Tools.
            Schreibe jeden Tool-Vorschlag in eine eigene kurze Zeile.
            
            5. Empfohlene Reihenfolge
            
            Nenne die sinnvolle Umsetzungsreihenfolge als nummerierte Liste mit genau 3 Punkten.
            
            6. Geschätzter Gesamtaufwand
            
            Ordne den gesamten technischen Aufwand als Niedrig, Mittel oder Hoch ein.
            Begründe die Einschätzung in 2 kurzen Sätzen.
            
            7. Erwarteter Nutzen
            
            Erkläre konkret, welche manuellen Tätigkeiten reduziert werden könnten.
            Erkläre außerdem, welche Fehler, Verzögerungen oder Doppelarbeiten vermieden werden könnten.
            
            8. Nächster sinnvoller Schritt
            
            Nenne einen konkreten nächsten Schritt für den Interessenten.
            
            Wichtig:
            
            - Keine unrealistischen Versprechen.
            - Keine garantierten Einsparungen.
            - Keine erfundenen Zahlen.
            - Keine Zeitersparnis in Minuten oder Stunden nennen, wenn sie nicht aus den Angaben hervorgeht.
            - Empfehlungen müssen sich direkt auf die Angaben des Interessenten beziehen.
            - Verwende keine Begriffe oder Tools, die nicht sinnvoll zum beschriebenen Unternehmen passen.
            - Wiederhole nicht ständig dieselben Informationen.
            - Halte den gesamten Blueprint kompakt und gut lesbar.
              `,
            },
            {
              role: "user",
              content: `
Erstelle einen Automation Blueprint für diesen Interessenten:

Name: ${name}
Website / Shop: ${website || "Keine Angabe"}
Shop-Plattform: ${platform || "Keine Angabe"}
Bestellungen pro Monat: ${orders || "Keine Angabe"}
Support-Anfragen pro Monat: ${supportRequests || "Keine Angabe"}

Aktuell verwendete Tools:
${tools || "Keine Angabe"}

Manuelle Prozesse:
${manualProcesses || "Keine Angabe"}

Größte Zeitfresser:
${biggestTimeWasters || "Keine Angabe"}

Gewünschtes Automatisierungsziel:
${automationGoal || "Keine Angabe"}
              `,
            },
          ],
          temperature: 0.3,
        }),
      }
    );

    if (!groqResponse.ok) {
      const groqError = await groqResponse.text();

      console.error("GROQ ERROR:", groqError);

      return NextResponse.json(
        {
          success: false,
          error: "KI-Analyse konnte nicht erstellt werden.",
        },
        {
          status: 500,
        }
      );
    }

    const groqData = await groqResponse.json();

    console.log("GROQ DATA:", JSON.stringify(groqData, null, 2));

    const blueprint =
      groqData.choices?.[0]?.message?.content ||
      "Es konnte kein Blueprint erstellt werden.";

      const { error: supabaseError } = await supabase
  .from("audits")
  .insert({
    name,
    email,
    website,
    platform,
    orders,
    support_requests: supportRequests,
    tools,
    manual_processes: manualProcesses,
    biggest_time_wasters: biggestTimeWasters,
    automation_goal: automationGoal,
    blueprint,
    status: "new",
  });

if (supabaseError) {
  console.error("SUPABASE ERROR:", supabaseError);
}

      const pdfDoc = await PDFDocument.create();

const regularFont = await pdfDoc.embedFont(
  StandardFonts.Helvetica
);

const boldFont = await pdfDoc.embedFont(
  StandardFonts.HelveticaBold
);

const pageWidth = 595.28;
const pageHeight = 841.89;

const leftMargin = 62;
const rightMargin = 62;
const topMargin = 70;
const bottomMargin = 55;

const contentWidth =
  pageWidth - leftMargin - rightMargin;

const primaryColor = rgb(
  79 / 255,
  70 / 255,
  229 / 255
);

const darkColor = rgb(
  31 / 255,
  41 / 255,
  55 / 255
);

const textColor = rgb(
  55 / 255,
  65 / 255,
  81 / 255
);

function cleanPdfText(text: string) {
  return text
    .replace(/\*\*/g, "")
    .replace(/#{1,6}\s?/g, "")
    .replace(/---/g, "")
    .replace(/\|/g, " ")
    .replace(/\t/g, " ")
    .replace(/\u00a0/g, " ")
    .replace(/[\u200b-\u200d\ufeff]/g, "")
    .replace(/[\u2010\u2011\u2012\u2013\u2014\u2212]/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\u2026/g, "...")
    .replace(/\u2022/g, "-")
    .replace(/ {2,}/g, " ")
    .trim();
}

function wrapPdfText(
  text: string,
  font: PDFFont,
  fontSize: number,
  maximumWidth: number
) {
  const words = text.split(/\s+/);
  const lines: string[] = [];

  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine
      ? `${currentLine} ${word}`
      : word;

    if (
      font.widthOfTextAtSize(testLine, fontSize) <=
      maximumWidth
    ) {
      currentLine = testLine;
    } else {
      if (currentLine) {
        lines.push(currentLine);
      }

      currentLine = word;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

const firstPage = pdfDoc.addPage([
  pageWidth,
  pageHeight,
]);

firstPage.drawText("CodeSpes", {
  x: leftMargin,
  y: pageHeight - 120,
  size: 30,
  font: boldFont,
  color: primaryColor,
});

firstPage.drawText(
  "AI Automation Blueprint",
  {
    x: leftMargin,
    y: pageHeight - 160,
    size: 20,
    font: boldFont,
    color: darkColor,
  }
);

const today =
  new Date().toLocaleDateString("de-DE");

firstPage.drawText(
  `Kunde: ${name || "-"}`,
  {
    x: leftMargin,
    y: pageHeight - 220,
    size: 11,
    font: regularFont,
    color: textColor,
  }
);

firstPage.drawText(
  `Website: ${website || "-"}`,
  {
    x: leftMargin,
    y: pageHeight - 242,
    size: 11,
    font: regularFont,
    color: textColor,
  }
);

firstPage.drawText(
  `Plattform: ${platform || "-"}`,
  {
    x: leftMargin,
    y: pageHeight - 264,
    size: 11,
    font: regularFont,
    color: textColor,
  }
);

firstPage.drawText(
  `Erstellt am: ${today}`,
  {
    x: leftMargin,
    y: pageHeight - 286,
    size: 11,
    font: regularFont,
    color: textColor,
  }
);

let currentPage = pdfDoc.addPage([
  pageWidth,
  pageHeight,
]);

let y = pageHeight - topMargin;

currentPage.drawText(
  "Dein Automation Blueprint",
  {
    x: leftMargin,
    y,
    size: 20,
    font: boldFont,
    color: darkColor,
  }
);

y -= 40;

const cleanedBlueprint =
  cleanPdfText(blueprint);

const paragraphs = cleanedBlueprint
  .split("\n")
  .map((paragraph) => paragraph.trim())
  .filter(Boolean);

for (const paragraph of paragraphs) {
  const lines = wrapPdfText(
    paragraph,
    regularFont,
    10.5,
    contentWidth
  );

  if (
    y - lines.length * 16 <
    bottomMargin
  ) {
    currentPage = pdfDoc.addPage([
      pageWidth,
      pageHeight,
    ]);

    y = pageHeight - topMargin;
  }

  for (const line of lines) {
    currentPage.drawText(line, {
      x: leftMargin,
      y,
      size: 10.5,
      font: regularFont,
      color: textColor,
    });

    y -= 16;
  }

  y -= 8;
}

const pdfBytes = await pdfDoc.save();

const pdfAttachment =
  Buffer.from(pdfBytes).toString("base64");

    // 2. Zeilenumbrüche für die E-Mail
    const blueprintHtml = blueprint.replace(/\n/g, "<br>");

    // 3. Audit + Blueprint per E-Mail senden
    const { data, error } = await resend.emails.send({
      from: "CodeSpes <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Automation Blueprint – ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h1>CodeSpes Automation Audit</h1>

          <h2>Interessent</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Website / Shop:</strong> ${website || "-"}</p>
          <p><strong>Plattform:</strong> ${platform || "-"}</p>
          <p><strong>Bestellungen pro Monat:</strong> ${orders || "-"}</p>
          <p>
            <strong>Support-Anfragen pro Monat:</strong>
            ${supportRequests || "-"}
          </p>

          <hr>

          <h2>Aktuelle Situation</h2>

          <p><strong>Tools:</strong></p>
          <p>${tools || "-"}</p>

          <p><strong>Manuelle Prozesse:</strong></p>
          <p>${manualProcesses || "-"}</p>

          <p><strong>Größte Zeitfresser:</strong></p>
          <p>${biggestTimeWasters || "-"}</p>

          <p><strong>Automatisierungsziel:</strong></p>
          <p>${automationGoal || "-"}</p>

          <hr>

          <h1>AI Automation Blueprint</h1>

          <div
            style="
              background: #f4f4f5;
              padding: 24px;
              border-radius: 12px;
              margin-top: 20px;
            "
          >
            ${blueprintHtml}
          </div>
        </div>
      `,
      attachments: [
        {
          filename: `CodeSpes-Blueprint-${name || "Audit"}.pdf`,
          content: pdfAttachment,
        },
      ],
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    const { error: customerEmailError } = await resend.emails.send({
      from: "CodeSpes <onboarding@resend.dev>",
      to: email,
      subject: "Dein persönlicher CodeSpes Automation Blueprint",
      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 700px;
            margin: 0 auto;
            padding: 30px;
            color: #111827;
          "
        >
          <p style="font-size: 14px; color: #6366f1; font-weight: bold;">
            CODESPES AUTOMATION AUDIT
          </p>
    
          <h1 style="font-size: 30px; margin-bottom: 10px;">
            Hallo ${name},
          </h1>
    
          <p style="font-size: 16px; line-height: 1.7; color: #4b5563;">
            vielen Dank für deine Teilnahme am CodeSpes Automation Audit.
            Auf Grundlage deiner Angaben wurde dein persönlicher
            Automation Blueprint erstellt.
          </p>
    
          <div
            style="
              margin-top: 30px;
              padding: 25px;
              background: #f4f4f5;
              border-radius: 14px;
              line-height: 1.7;
            "
          >
            ${blueprintHtml}
          </div>
    
          <div style="margin-top: 35px;">
            <h2 style="font-size: 20px;">
              Möchtest du eine Automatisierung umsetzen?
            </h2>
    
            <p style="color: #4b5563; line-height: 1.7;">
              CodeSpes kann mit dir prüfen, welche der empfohlenen Workflows
              für dein Unternehmen sinnvoll sind und wie sie technisch
              umgesetzt werden können.
            </p>
    
            <a
              href="https://quiet-salmiakki-25f200.netlify.app/kontakt"
              style="
                display: inline-block;
                margin-top: 15px;
                padding: 14px 22px;
                background: #6366f1;
                color: white;
                text-decoration: none;
                border-radius: 10px;
                font-weight: bold;
              "
            >
              Automatisierung besprechen
            </a>
          </div>
    
          <p style="margin-top: 40px; font-size: 13px; color: #9ca3af;">
            CodeSpes · AI Automation für moderne Unternehmen
          </p>
        </div>
      `,
      attachments: [
        {
          filename: `CodeSpes-Blueprint-${name || "Audit"}.pdf`,
          content: pdfAttachment,
        },
      ],
    });
    
    if (customerEmailError) {
      console.error("CUSTOMER EMAIL ERROR:", customerEmailError);
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      blueprint,
    });
  } catch (error) {
    console.error("AUDIT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Audit konnte nicht verarbeitet werden.",
      },
      {
        status: 500,
      }
    );
  }
}