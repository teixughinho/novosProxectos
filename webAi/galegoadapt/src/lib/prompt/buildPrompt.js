// src/lib/prompt/buildPrompt.js
import { MODE_DESCRIPTIONS } from "./presets";

export function buildAdaptPrompt(text, modes) {
  const activeModes = modes && modes.length ? modes : ["TDAH"];

  const modeInstructions = activeModes
    .map((m) => MODE_DESCRIPTIONS[m] || "")
    .join("\n");

  return `
Es ti unha docente experta en deseño universal da aprendizaxe e adaptacións curriculares para alumnado con necesidades específicas.

Tarefa:
A partir do TEXTO ORIXINAL que verás ao final, xera unha versión adaptada que cumpra TODAS estas condicións ao mesmo tempo (son acumulables):

${modeInstructions}

Regras xerais:
- Mantén o contido en galego.
- Respecta o máximo posible o significado do texto orixinal.
- Se algunha instrución parece contraditoria, prioriza sempre claridade, estrutura e accesibilidade.

TEXTO ORIXINAL:
""" 
${text}
"""
`;
}
