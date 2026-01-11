// src/lib/ai/iaClient.ts
// Función simulada para adaptar texto
// Máis adiante integrarás APIs reais de IA (Hugging Face, Groq, etc.)

export async function adaptTextLocally(text: string, mode: string): Promise<string> {
  // Simulación: agarda 1 segundo e devolve unha resposta predeterminada
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return `[Modo: ${mode}]\n\nTexto adaptado:\n${text}\n\n(Esta é unha resposta simulada. Máis adiante integraranse APIs de IA gratuitas como Hugging Face ou Groq.)`;
}
