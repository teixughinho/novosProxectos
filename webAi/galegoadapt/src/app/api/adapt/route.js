// import Groq from "groq-sdk";

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });
// src/app/api/adapt/route.js
import Groq from "groq-sdk";
import { buildAdaptPrompt } from "../../../lib/prompt/buildPrompt";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const { text, modes } = await req.json();

    if (!text || !text.trim()) {
      return new Response(
        JSON.stringify({ error: "Falta texto para adaptar" }),
        { status: 400 }
      );
    }

    const prompt = buildAdaptPrompt(text, modes || []);

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4,
      max_tokens: 1200,
    }); // patrón recomendado nos docs de chat de Groq [web:41][web:57]

    const resultText =
      completion.choices?.[0]?.message?.content || "Sen resposta da IA.";

    return new Response(JSON.stringify({ resultText }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Erro ao chamar á IA" }),
      { status: 500 }
    );
  }
}
