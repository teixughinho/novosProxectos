import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from "docx";

// Converte **negriñas** en runs bold
function markdownToRuns(line, baseSize) {
  const parts = line.split(/\*\*(.+?)\*\*/g); // texto fóra/dentro de **
  const runs = [];

  parts.forEach((part, index) => {
    if (!part) return;
    const isBold = index % 2 === 1;
    runs.push(
      new TextRun({
        text: part,
        bold: isBold,
        size: baseSize,
      })
    );
  });

  return runs;
}

// Limpeza básica de markdown estrutural
const normalizeLine = (line) => {
  let t = line.trim();

  // eliminar subliñados tipo ==== ou ----
  if (/^=+$/.test(t) || /^-+$/.test(t)) return "";

  // quitar # iniciais (títulos markdown)
  t = t.replace(/^[#]+\s*/, "");

  // quitar ==== finais se as hai
  t = t.replace(/\s*=+$/, "");

  return t.trim();
};

export async function POST(req) {
  try {
    const { text, modes } = await req.json();

    if (!text) {
      return new Response(JSON.stringify({ error: "Falta contido" }), {
        status: 400,
      });
    }

    const lines = text.split("\n");
    const paragraphs = [];

    // Cabeceira fixa (máis grande e en negriña)
    paragraphs.push(
      new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [
          new TextRun({
            text: "Adaptación GalegoAdapt",
            size: 32, // ~16pt
            bold: true,
          }),
        ],
        spacing: { after: 300 },
      })
    );

    // Modos aplicados
    paragraphs.push(
      new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [
          new TextRun({
            text: `Modos aplicados: ${modes.join(", ")}`,
            italics: true,
            size: 24, // ~12pt
          }),
        ],
        spacing: { after: 300 },
      })
    );

    // Liña separadora
    paragraphs.push(
      new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [
          new TextRun({
            text: " ",
            size: 24,
          }),
        ],
        spacing: { after: 200 },
      })
    );

    // Corpo
    for (const rawLine of lines) {
      const cleaned = normalizeLine(rawLine);

      if (!cleaned) {
        paragraphs.push(
          new Paragraph({
            text: "",
            spacing: { after: 120 },
          })
        );
        continue;
      }

      // TÍTULOS en maiúsculas e curtos
      if (cleaned.length < 40 && cleaned === cleaned.toUpperCase()) {
        paragraphs.push(
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun({
                text: cleaned,
                size: 30, // ~15pt
                bold: true,
              }),
            ],
            spacing: { before: 200, after: 200 },
          })
        );
        continue;
      }

      // Listas numeradas "1. texto"
      const numberedMatch = cleaned.match(/^(\d+)\.\s+(.+)$/);
      if (numberedMatch) {
        const runs = markdownToRuns(
          `${numberedMatch[1]}. ${numberedMatch[2]}`,
          26 // ~13pt
        );

        paragraphs.push(
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: runs,
            spacing: { before: 60, after: 60 },
          })
        );
        continue;
      }

      // Listas con viñetas "- texto" ou "* texto"
      const bulletMatch = cleaned.match(/^[-*]\s+(.+)$/);
      if (bulletMatch) {
        const runs = markdownToRuns(bulletMatch[1], 26);

        paragraphs.push(
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun({
                text: "• ",
                size: 26,
              }),
              ...runs,
            ],
            spacing: { before: 60, after: 60 },
          })
        );
        continue;
      }

      // Parágrafo normal (texto corrido, 13pt, con **negriñas**)
      const runs = markdownToRuns(cleaned, 26); // 26 ≈ 13pt

      paragraphs.push(
        new Paragraph({
          alignment: AlignmentType.LEFT, // aliñado á esquerda (mellor para TDAH)
          children: runs,
          spacing: { line: 360, after: 120 },
        })
      );
    }

    // Documento con marxes cómodas
    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 720, // 720 = 0,5 inch; se queres máis marxe, usa 1440 (~2,5 cm)
                bottom: 720,
                left: 1440, // ~2,5 cm
                right: 1440,
              },
            },
          },
          children: paragraphs,
        },
      ],
    });

    const buffer = await Packer.toBuffer(doc);

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition":
          'attachment; filename="adaptacion_galegoadapt.docx"',
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Erro ao xerar DOCX" }), {
      status: 500,
    });
  }
}
