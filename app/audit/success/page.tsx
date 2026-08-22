"use client";

import { useEffect, useState } from "react";
import {
  PDFDocument,
  StandardFonts,
  rgb,
  PDFName,
  PDFString,
  type PDFFont,
  type PDFPage,
} from "pdf-lib";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";


type BlueprintData = {
  blueprint: string;
  name: string;
  website: string;
  platform: string;
};

export default function AuditSuccessPage() {
  const [blueprintData, setBlueprintData] =
    useState<BlueprintData | null>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("codespesBlueprint");

    if (!storedData) return;

    try {
      setBlueprintData(JSON.parse(storedData));
    } catch (error) {
      console.error("BLUEPRINT STORAGE ERROR:", error);
    }
  }, []);

  async function downloadPdf() {
    if (!blueprintData) return;

    const pdfDoc = await PDFDocument.create();

    pdfDoc.setTitle("CodeSpes AI Automation Blueprint");

pdfDoc.setAuthor("CodeSpes");

pdfDoc.setSubject("Individueller Automation Blueprint");

pdfDoc.setCreator("CodeSpes");

pdfDoc.setProducer("CodeSpes");

pdfDoc.setKeywords([
  "Automation",
  "AI",
  "Shopify",
  "CodeSpes",
  "Blueprint",
]);

    const logoResponse = await fetch("/logo.png");
const logoBytes = await logoResponse.arrayBuffer();
const logoImage = await pdfDoc.embedPng(logoBytes);

   

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
    const topMargin = 75;
    const bottomMargin = 60;

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

    const mutedColor = rgb(
      107 / 255,
      114 / 255,
      128 / 255
    );

    const lightIndigo = rgb(
      238 / 255,
      242 / 255,
      1
    );

    function cleanText(text: string) {
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

    function wrapText(
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

        const testWidth = font.widthOfTextAtSize(
          testLine,
          fontSize
        );

        if (testWidth <= maximumWidth) {
          currentLine = testLine;
          continue;
        }

        if (currentLine) {
          lines.push(currentLine);
        }

        if (
          font.widthOfTextAtSize(word, fontSize) <=
          maximumWidth
        ) {
          currentLine = word;
          continue;
        }

        let wordPart = "";

        for (const character of word) {
          const testPart = wordPart + character;

          if (
            font.widthOfTextAtSize(
              testPart,
              fontSize
            ) <= maximumWidth
          ) {
            wordPart = testPart;
          } else {
            if (wordPart) {
              lines.push(wordPart);
            }

            wordPart = character;
          }
        }

        currentLine = wordPart;
      }

      if (currentLine) {
        lines.push(currentLine);
      }

      return lines;
    }

    function addFooter(
      page: PDFPage,
      pageNumber: number
    ) {
      page.drawLine({
        start: {
          x: leftMargin,
          y: 40,
        },
        end: {
          x: pageWidth - rightMargin,
          y: 40,
        },
        thickness: 0.5,
        color: rgb(0.85, 0.87, 0.9),
      });

      page.drawText(
        "CodeSpes · AI Automation Blueprint",
        {
          x: leftMargin,
          y: 24,
          size: 8,
          font: regularFont,
          color: mutedColor,
        }
      );

      const pageText = `Seite ${pageNumber}`;

      const pageTextWidth =
        regularFont.widthOfTextAtSize(
          pageText,
          8
        );

      page.drawText(pageText, {
        x:
          pageWidth -
          rightMargin -
          pageTextWidth,
        y: 24,
        size: 8,
        font: regularFont,
        color: mutedColor,
      });
    }

    function prepareContentPage(
      page: PDFPage,
      pageNumber: number
    ) {
      page.drawText("CodeSpes", {
        x: leftMargin,
        y: pageHeight - 38,
        size: 10,
        font: boldFont,
        color: primaryColor,
      });

      page.drawLine({
        start: {
          x: leftMargin,
          y: pageHeight - 50,
        },
        end: {
          x: pageWidth - rightMargin,
          y: pageHeight - 50,
        },
        thickness: 0.8,
        color: primaryColor,
      });

      addFooter(page, pageNumber);
    }

    // Deckblatt

    const coverPage = pdfDoc.addPage([
      pageWidth,
      pageHeight,
    ]);

    coverPage.drawRectangle({
      x: 0,
      y: pageHeight - 18,
      width: pageWidth,
      height: 18,
      color: primaryColor,
    });

    const logoWidth = 165;
    const logoHeight =
      (logoImage.height / logoImage.width) * logoWidth;
    
    coverPage.drawImage(logoImage, {
      x: leftMargin,
      y: pageHeight - 150,
      width: logoWidth,
      height: logoHeight,
    });

    coverPage.drawText(
      "AI Automation Blueprint",
      {
        x: leftMargin,
        y: pageHeight - 185,
        size: 22,
        font: boldFont,
        color: darkColor,
      }
    );

    coverPage.drawLine({
      start: {
        x: leftMargin,
        y: pageHeight - 212,
      },
      end: {
        x: pageWidth - rightMargin,
        y: pageHeight - 212,
      },
      thickness: 2,
      color: primaryColor,
    });

    coverPage.drawRectangle({
      x: leftMargin,
      y: pageHeight - 410,
      width: contentWidth,
      height: 145,
      color: lightIndigo,
      borderColor: rgb(
        0.82,
        0.84,
        0.95
      ),
      borderWidth: 1,
    });

    const today =
      new Date().toLocaleDateString("de-DE");

    const customerDetails = [
      `Kunde: ${blueprintData.name || "-"}`,
      `Website: ${blueprintData.website || "-"}`,
      `Plattform: ${blueprintData.platform || "-"}`,
      `Erstellt am: ${today}`,
    ];

    customerDetails.forEach((detail, index) => {
      coverPage.drawText(detail, {
        x: leftMargin + 24,
        y: pageHeight - 305 - index * 27,
        size: 12,
        font: regularFont,
        color: textColor,
      });
    });

    coverPage.drawText(
      "Individuelle Analyse deiner Prozesse und Automatisierungsmöglichkeiten",
      {
        x: leftMargin,
        y: 105,
        size: 10,
        font: regularFont,
        color: mutedColor,
      }
    );

    addFooter(coverPage, 1);

    // Inhaltsseiten

    let currentPage = pdfDoc.addPage([
      pageWidth,
      pageHeight,
    ]);

    let pageNumber = 2;
    let y = pageHeight - topMargin;

    prepareContentPage(
      currentPage,
      pageNumber
    );

    function addNewPage() {
      currentPage = pdfDoc.addPage([
        pageWidth,
        pageHeight,
      ]);

      pageNumber += 1;

      prepareContentPage(
        currentPage,
        pageNumber
      );

      y = pageHeight - topMargin;
    }

    function ensureSpace(
      requiredHeight: number
    ) {
      if (
        y - requiredHeight <
        bottomMargin
      ) {
        addNewPage();
      }
    }

    currentPage.drawText(
      "Dein Automation Blueprint",
      {
        x: leftMargin,
        y,
        size: 21,
        font: boldFont,
        color: darkColor,
      }
    );

    y -= 42;

    const cleanedBlueprint = cleanText(
      blueprintData.blueprint
    );

    const paragraphs = cleanedBlueprint
      .split("\n")
      .map((paragraph) =>
        paragraph.trim()
      )
      .filter(Boolean);

      for (const paragraph of paragraphs) {
        const isMainHeading = /^[1-8]\.\s/.test(paragraph);
      
        const isWorkflowHeading =
          /^Workflow\s+\d+:/i.test(paragraph);
      
        const priorityMatch = paragraph.match(
          /Priorität:\s*(Hoch|Mittel|Niedrig)/i
        );
      
        const effortMatch = paragraph.match(
          /Aufwand:\s*(Hoch|Mittel|Niedrig)/i
        );
      
        const paragraphWithoutMeta = paragraph
          .replace(/Priorität:\s*(Hoch|Mittel|Niedrig)\.?/gi, "")
          .replace(/Aufwand:\s*(Hoch|Mittel|Niedrig)\.?/gi, "")
          .replace(/\s{2,}/g, " ")
          .trim();
      
        if (isMainHeading) {
          ensureSpace(45);
      
          y -= 8;
      
          currentPage.drawRectangle({
            x: leftMargin,
            y: y - 7,
            width: contentWidth,
            height: 28,
            color: lightIndigo,
          });
      
          const headingLines = wrapText(
            paragraph,
            boldFont,
            13,
            contentWidth - 24
          );
      
          for (const line of headingLines) {
            currentPage.drawText(line, {
              x: leftMargin + 12,
              y,
              size: 13,
              font: boldFont,
              color: primaryColor,
            });
      
            y -= 17;
          }
      
          y -= 20;
          continue;
        }
      
        if (isWorkflowHeading) {
          const headingLines = wrapText(
            paragraphWithoutMeta,
            boldFont,
            11.5,
            contentWidth - 16
          );
      
          ensureSpace(headingLines.length * 17 + 12);
      
          for (const line of headingLines) {
            currentPage.drawText(line, {
              x: leftMargin + 8,
              y,
              size: 11.5,
              font: boldFont,
              color: darkColor,
            });
      
            y -= 17;
          }
      
          y -= 7;
          continue;
        }
      
        if (paragraphWithoutMeta) {
          const lines = wrapText(
            paragraphWithoutMeta,
            regularFont,
            10.5,
            contentWidth
          );
      
          ensureSpace(lines.length * 16 + 10);
      
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
      
          y -= 6;
        }
      
        if (priorityMatch || effortMatch) {
          ensureSpace(34);
      
          const getBadgeColor = (value: string) => {
            if (value.toLowerCase() === "hoch") {
              return rgb(0.86, 0.95, 0.9);
            }
      
            if (value.toLowerCase() === "mittel") {
              return rgb(1, 0.96, 0.82);
            }
      
            return rgb(0.9, 0.93, 1);
          };
      
          let badgeX = leftMargin;
      
          if (priorityMatch) {
            const value = priorityMatch[1];
            const label = `Priorität: ${value}`;
      
            const badgeWidth =
              boldFont.widthOfTextAtSize(label, 9.5) + 24;
      
            currentPage.drawRectangle({
              x: badgeX,
              y: y - 4,
              width: badgeWidth,
              height: 22,
              color: getBadgeColor(value),
            });
      
            currentPage.drawText(label, {
              x: badgeX + 12,
              y: y + 2,
              size: 9.5,
              font: boldFont,
              color: darkColor,
            });
      
            badgeX += badgeWidth + 10;
          }
      
          if (effortMatch) {
            const value = effortMatch[1];
            const label = `Aufwand: ${value}`;
      
            const badgeWidth =
              boldFont.widthOfTextAtSize(label, 9.5) + 24;
      
            currentPage.drawRectangle({
              x: badgeX,
              y: y - 4,
              width: badgeWidth,
              height: 22,
              color: getBadgeColor(value),
            });
      
            currentPage.drawText(label, {
              x: badgeX + 12,
              y: y + 2,
              size: 9.5,
              font: boldFont,
              color: darkColor,
            });
          }
      
          y -= 34;
        } else {
          y -= 4;
        }
      }

      const finalPage = pdfDoc.addPage([
        pageWidth,
        pageHeight,
      ]);
      
      finalPage.drawRectangle({
        x: 0,
        y: pageHeight - 18,
        width: pageWidth,
        height: 18,
        color: primaryColor,
      });
      
      const finalLogoWidth = 150;
      const finalLogoHeight =
        (logoImage.height / logoImage.width) * finalLogoWidth;
      
      finalPage.drawImage(logoImage, {
        x: leftMargin,
        y: pageHeight - 145,
        width: finalLogoWidth,
        height: finalLogoHeight,
      });
      
      finalPage.drawText("Dein nächster Schritt", {
        x: leftMargin,
        y: pageHeight - 220,
        size: 26,
        font: boldFont,
        color: darkColor,
      });
      
      finalPage.drawLine({
        start: {
          x: leftMargin,
          y: pageHeight - 245,
        },
        end: {
          x: pageWidth - rightMargin,
          y: pageHeight - 245,
        },
        thickness: 2,
        color: primaryColor,
      });
      
      const finalText =
        "Die Empfehlungen in diesem Blueprint zeigen, welche Prozesse sich besonders gut für eine Automatisierung eignen. CodeSpes kann im nächsten Schritt prüfen, wie die vorgeschlagenen Workflows technisch umgesetzt und an deine vorhandenen Systeme angebunden werden können.";
      
      const finalLines = wrapText(
        finalText,
        regularFont,
        12,
        contentWidth
      );
      
      let finalY = pageHeight - 295;
      
      for (const line of finalLines) {
        finalPage.drawText(line, {
          x: leftMargin,
          y: finalY,
          size: 12,
          font: regularFont,
          color: textColor,
        });
      
        finalY -= 20;
      }
      
      finalPage.drawRectangle({
        x: leftMargin,
        y: finalY - 95,
        width: contentWidth,
        height: 82,
        color: lightIndigo,
        borderColor: rgb(
          0.82,
          0.84,
          0.95
        ),
        borderWidth: 1,
      });
      
      finalPage.drawText(
        "Automatisierung mit CodeSpes besprechen",
        {
          x: leftMargin + 22,
          y: finalY - 45,
          size: 14,
          font: boldFont,
          color: primaryColor,
        }
      );
      
      finalPage.drawText(
        "Nutze unsere Kontaktseite für ein unverbindliches Gespräch.",
        {
          x: leftMargin + 22,
          y: finalY - 67,
          size: 10.5,
          font: regularFont,
          color: textColor,
        }
      );
      
      const contactUrl =
      "https://quiet-salmiakki-25f200.netlify.app/kontakt";
    
    finalPage.drawText(
      "Kontaktseite öffnen",
      {
        x: leftMargin + 22,
        y: finalY - 86,
        size: 9.5,
        font: boldFont,
        color: primaryColor,
      }
    );
    
    finalPage.drawRectangle({
      x: leftMargin + 20,
      y: finalY - 90,
      width: 105,
      height: 16,
      borderColor: primaryColor,
      borderWidth: 0,
    });
    
    finalPage.node.set(
      PDFName.of("Annots"),
      pdfDoc.context.obj([
        pdfDoc.context.obj({
          Type: "Annot",
          Subtype: "Link",
          Rect: [
            leftMargin + 20,
            finalY - 92,
            leftMargin + 130,
            finalY - 74,
          ],
          Border: [0, 0, 0],
          A: {
            Type: "Action",
            S: "URI",
            URI: PDFString.of(contactUrl),
          },
        }),
      ])
    );
      
      addFooter(
        finalPage,
        pageNumber + 1
      );

    const pdfBytes =
      await pdfDoc.save();

    const blob = new Blob(
      [pdfBytes as BlobPart],
      {
        type: "application/pdf",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const downloadLink =
      document.createElement("a");

    downloadLink.href = url;

    downloadLink.download =
      `CodeSpes-Blueprint-${
        blueprintData.name || "Audit"
      }.pdf`;

    document.body.appendChild(
      downloadLink
    );

    downloadLink.click();
    downloadLink.remove();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] text-white">
        <section className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-32">
          <div className="mx-auto w-full max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-3xl text-emerald-400">
              ✓
            </div>

            <span className="mt-8 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
              Automation Audit abgeschlossen
            </span>

            <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
              Dein Audit wurde
              <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                erfolgreich analysiert.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              CodeSpes hat deine Angaben analysiert und daraus einen
              individuellen Automation Blueprint erstellt.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8">
              <h2 className="text-xl font-semibold">
                Was passiert als Nächstes?
              </h2>

              <div className="mt-6 space-y-5 text-slate-400">
                <div>
                  <p className="font-medium text-white">
                    01 — Analyse
                  </p>

                  <p className="mt-1">
                    Deine Prozesse, Tools und Automatisierungsziele wurden von
                    unserer KI ausgewertet.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-white">
                    02 — Blueprint
                  </p>

                  <p className="mt-1">
                    Daraus wurde ein individueller Automation Blueprint mit
                    konkreten Workflow-Empfehlungen erstellt.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-white">
                    03 — Nächster Schritt
                  </p>

                  <p className="mt-1">
                    CodeSpes kann anschließend prüfen, welche der
                    vorgeschlagenen Automatisierungen sich sinnvoll umsetzen
                    lassen.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={downloadPdf}
                disabled={!blueprintData}
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 font-semibold transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Blueprint als PDF herunterladen
              </button>

              <Link
                href="/"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold transition hover:bg-white/[0.06]"
              >
                Zur Startseite
              </Link>

              <Link
                href="/kontakt"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold transition hover:bg-white/[0.06]"
              >
                Mit CodeSpes sprechen
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}