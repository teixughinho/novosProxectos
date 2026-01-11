// src/app/api/ping-groq/route.js
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function GET() {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // modelo recomendado por Groq [web:56]
      messages: [
        {
          role: "user",
          content: "Dime en galego unha frase curta de proba para un profesor.",
        },
      ],
      temperature: 0.5,
      max_tokens: 80,
    }); // [web:41][web:57]

    const text = completion.choices?.[0]?.message?.content || "";

    return new Response(JSON.stringify({ ok: true, text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ ok: false, error: err.message }),
      { status: 500 }
    );
  }
}
