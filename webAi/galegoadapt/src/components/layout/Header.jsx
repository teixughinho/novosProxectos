// src/components/layout/Header.jsx
"use client";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-sky-600 px-2 py-1 text-xs font-semibold text-white">
            GalegoAdapt
          </span>
          <p className="text-xs text-slate-600">
            Adaptación de contidos para TDAH, TEA, resumos e exercicios.
          </p>
        </div>

        <div className="hidden text-xs text-slate-500 sm:block">
          Feito con ♥ para profesorado galego
        </div>
      </div>
    </header>
  );
}
