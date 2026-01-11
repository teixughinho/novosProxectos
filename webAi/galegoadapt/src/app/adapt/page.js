// src/app/adapt/page.jsx
"use client";

import { useState } from "react";
import { AdaptForm } from "../../components/features/AdaptForm/AdaptForm";
import { AdaptModesBar } from "../../components/features/AdaptModesBar/AdaptModesBar";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AdaptPage() {
  const [output, setOutput] = useState("");
  const [modes, setModes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAdapt({ text, file }) {
 if (modes.length === 0) {
    setError("Tes que escoller polo menos un modo.");
    return;
  }
    setLoading(true);
    setError("");
    setOutput("");

    try {
      let res;

      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("modes", JSON.stringify(modes));

        res = await fetch("/api/upload-and-adapt", {
          method: "POST",
          body: formData,
        });
      } else {
        res = await fetch("/api/adapt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, modes }),
        });
      }

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro descoñecido");
        return;
      }

      setOutput(data.resultText || "");
    } catch {
      setError("Non se puido conectar coa IA.");
    } finally {
      setLoading(false);
    }
  }
  async function handleDownloadDocx() {
    try {
      const res = await fetch("/api/export-docx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: output, modes }),
      });

      if (!res.ok) {
        setError("Erro ao descargar o documento");
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "adaptacion_galegoadapt.docx";
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError("Non se puido descargar o documento");
    }
  }
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      {/* Header */}
      {/* <header>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
          GalegoAdapt
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          Ferramenta educativa para adaptar contidos a distintas necesidades.
        </p>
      </header> */}

      {/* Barra superior */}
      <AdaptModesBar modes={modes} setModes={setModes} />

      {/* Contido principal */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AdaptForm onSubmit={handleAdapt} />

        {/* Saída */}
        <section className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-4">
          <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            Vista previa
          </h2>

          {loading && (
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Xerando adaptación…
            </p>
          )}

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

          {output ? (
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {output}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Aquí aparecerá o texto adaptado unha vez procesado.
            </p>
          )}
          
          {output && (
            <button
              onClick={handleDownloadDocx}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              📥 Descargar como DOCX
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
