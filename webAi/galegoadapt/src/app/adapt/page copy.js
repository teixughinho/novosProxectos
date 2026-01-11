"use client";

import { useState } from "react";
import { AdaptForm } from "@/components/features/AdaptForm/AdaptForm";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AdaptPage() {
  const [output, setOutput] = useState("");
  const [modes, setModes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAdapt({ text, modes: selectedModes, file }) {
    setLoading(true);
    setError("");
    setOutput("");
    setModes(selectedModes);

    try {
      let res;

      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("modes", JSON.stringify(selectedModes));

        res = await fetch("/api/upload-and-adapt", {
          method: "POST",
          body: formData,
        });
      } else {
        res = await fetch("/api/adapt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, modes: selectedModes }),
        });
      }

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro descoñecido");
        return;
      }

      setOutput(data.resultText || "");
    } catch (e) {
      setError("Non se puido conectar coa API.");
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
    <div className="space-y-6">
      <AdaptForm onSubmit={handleAdapt} />

      {loading && (
        <p className="text-sm text-slate-600">Xerando adaptación...</p>
      )}

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}

      {/* Vista previa formateada */}
      {output && (
        <section className="mt-1 w-full min-h-[200px] rounded-md border border-slate-300 dark:border-slate-600 p-2 text-sm md:text-base bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
>
          <h2 className="mb-2 text-sm font-semibold text-slate-700">
            Vista previa formateada
          </h2>
          <div className="prose prose-sm max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {output}
            </ReactMarkdown>
          </div>
        </section>
      )}

      {/* Texto bruto (markdown) editable/copiable */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-slate-700">
          Texto adaptado (markdown)
        </p>
     <textarea
  className="mt-1 w-full min-h-[200px] rounded-md border border-slate-300 p-2 text-sm md:text-base"
  value={output}
  onChange={(e) => setOutput(e.target.value)}
  placeholder="Aquí aparecerá o texto adaptado..."
/>
      </div>

      {output && (
        <button
          onClick={handleDownloadDocx}
          className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          📥 Descargar como DOCX
        </button>
      )}
    </div>
  );
}


// // src/app/adapt/page.jsx
// "use client";

// import { useState } from "react";
// import { AdaptForm } from "@/components/features/AdaptForm/AdaptForm";

// export default function AdaptPage() {
//   const [output, setOutput] = useState("");
//   const [modes, setModes] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   async function handleAdapt({ text, modes: selectedModes, file }) {
//     setLoading(true);
//     setError("");
//     setOutput("");
//     setModes(selectedModes);

//     try {
//       let res;

//       if (file) {
//         // 1) Hai ficheiro: mandamos FormData a /api/upload-and-adapt
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("modes", JSON.stringify(selectedModes));

//         res = await fetch("/api/upload-and-adapt", {
//           method: "POST",
//           body: formData,
//         });
//       } else {
//         // 2) Sen ficheiro: usamos texto directo con /api/adapt
//         res = await fetch("/api/adapt", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ text, modes: selectedModes }),
//         });
//       }

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Erro descoñecido");
//         return;
//       }

//       setOutput(data.resultText || "");
//     } catch (e) {
//       setError("Non se puido conectar coa API.");
//     } finally {
//       setLoading(false);
//     }
//   }


//   async function handleDownloadDocx() {
//     try {
//       const res = await fetch("/api/export-docx", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text: output, modes }),
//       });

//       if (!res.ok) {
//         setError("Erro ao descargar o documento");
//         return;
//       }

//       const blob = await res.blob();
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = "adaptacion_galegoadapt.docx";
//       a.click();
//       URL.revokeObjectURL(url);
//     } catch (e) {
//       setError("Non se puido descargar o documento");
//     }
//   }

//   return (
//     <div className="space-y-6">
//       <AdaptForm onSubmit={handleAdapt} />

//       {loading && (
//         <p className="text-sm text-slate-600">Xerando adaptación...</p>
//       )}

//       {error && (
//         <p className="text-sm text-red-600">
//           {error}
//         </p>
//       )}

//       <div className="space-y-2">
//         <p className="text-sm font-medium text-slate-700">
//           Resultado adaptado
//         </p>
//         <textarea
//           className="mt-1 w-full min-h-[200px] rounded-md border border-slate-300 p-2 text-sm bg-slate-50"
//           value={output}
//           onChange={(e) => setOutput(e.target.value)}
//           placeholder="Aquí aparecerá o texto adaptado..."
//         />
//       </div>

//       {output && (
//         <button
//           onClick={handleDownloadDocx}
//           className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//         >
//           📥 Descargar como DOCX
//         </button>
//       )}
//     </div>
//   );
// }
