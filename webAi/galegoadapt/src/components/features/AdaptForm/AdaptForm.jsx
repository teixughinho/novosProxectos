"use client";

import { useState } from "react";

const MODES = [
  { id: "TDAH", label: "TDAH", icon: "⚡", desc: "Texto máis estruturado e claro" },
  { id: "AUTISMO", label: "TEA", icon: "🧩", desc: "Texto máis predecible e literal" },
  { id: "RESUMO", label: "Resumo", icon: "✂️", desc: "Resumo das ideas principais" },
  { id: "EXERCICIOS", label: "Exercicios", icon: "📝", desc: "Actividades a partir do texto" },
];

export function AdaptForm({ onSubmit }) {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    const f = e.target.files?.[0];
    setFile(f || null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!file && !text.trim()) return;
    onSubmit({ text, file });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Paso 2: introducir texto ou ficheiro */}
      <section className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 space-y-4">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          2. Engade o contido
        </h2>

        {/* Texto manual */}
        <label className="block text-xs font-medium text-slate-700 dark:text-slate-200">
          Texto ou contido a adaptar
          <span className="ml-1 font-normal text-slate-500 dark:text-slate-400">
            (opcional se subes un ficheiro)
          </span>
          <textarea
            className="mt-1 w-full min-h-[140px] rounded-md border border-slate-300 dark:border-slate-600 p-2 text-sm md:text-base bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            placeholder="Pega aquí o texto ou escribe directamente..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>

        {/* Ficheiro opcional */}
        <div className="space-y-1">
          <p className="text-xs font-medium text-slate-700 dark:text-slate-200">
            Ou sube un ficheiro (DOCX)
          </p>
          <input
            type="file"
            accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFileChange}
            className="block w-full text-xs text-slate-700 dark:text-slate-200 file:mr-2 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-slate-700 hover:file:bg-slate-200 dark:file:bg-slate-800 dark:file:text-slate-100 dark:hover:file:bg-slate-700"
          />
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Se subes un DOCX, extraerase o texto interno para adaptalo. Se non,
            usarase o texto escrito enriba.
          </p>
        </div>
      </section>

      {/* Paso 3: botón procesar */}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      >
        <span>✨ Procesar contido</span>
      </button>
    </form>
  );
}
