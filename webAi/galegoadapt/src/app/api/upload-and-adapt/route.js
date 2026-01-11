// src/app/api/upload-and-adapt/route.js
import Groq from "groq-sdk";
import { buildAdaptPrompt } from "../../../lib/prompt/buildPrompt";
import mammoth from "mammoth";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function extractTextFromDocx(buffer) {
  const result = await mammoth.extractRawText({ buffer }); // [web:109]
  return result.value || "";
}

export async function POST(req) {
  try {
    const formData = await req.formData();

    const file = formData.get("file");
    const modesRaw = formData.get("modes");

    if (!file || typeof file === "string") {
      return new Response(
        JSON.stringify({ error: "Non se recibiu ningún ficheiro" }),
        { status: 400 }
      );
    }

    const modes = modesRaw ? JSON.parse(modesRaw) : [];
    if (!modes.length) {
      return new Response(
        JSON.stringify({ error: "Faltan modos de adaptación" }),
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const filename = file.name || "";
    const lower = filename.toLowerCase();

    if (!lower.endsWith(".docx")) {
      return new Response(
        JSON.stringify({ error: "Agora mesmo só se aceptan ficheiros DOCX" }),
        { status: 400 }
      );
    }

    const originalText = await extractTextFromDocx(buffer);

    if (!originalText.trim()) {
      return new Response(
        JSON.stringify({ error: "Non se puido extraer texto do DOCX" }),
        { status: 400 }
      );
    }

    const prompt = buildAdaptPrompt(originalText, modes);

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4,
      max_tokens: 1200,
    }); // [web:41][web:57]

    const resultText =
      completion.choices?.[0]?.message?.content || "Sen resposta da IA.";

    return new Response(JSON.stringify({ resultText }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Erro ao procesar o ficheiro DOCX" }),
      { status: 500 }
    );
  }
}
