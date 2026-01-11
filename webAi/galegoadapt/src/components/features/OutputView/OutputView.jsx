// src/components/features/OutputView/OutputView.jsx
"use client";

export function OutputView({ output }) {
    if (!output) return null;

    function handleCopy() {
        navigator.clipboard.writeText(output).catch(() => { });
    }

    return (
        <section className="mt-6 space-y-3 rounded-md border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-800">
                    Resultado da adaptación
                </h2>
                <button
                    onClick={handleCopy}
                    className="rounded-md border border-slate-300 px-2 py-1 text-xs text-slate-700 hover:bg-slate-50"
                >
                    Copiar
                </button>
            </div>
            <pre className="max-h-96 overflow-auto whitespace-pre-wrap text-sm text-slate-800">
                {output}
            </pre>
        </section>
    );
}

