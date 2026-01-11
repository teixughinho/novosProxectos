"use client";

const MODES = [ { id: "TDAH", label: "TDAH", icon: "⚡", desc: "Texto máis estruturado e claro" }, { id: "AUTISMO", label: "TEA", icon: "🧩", desc: "Texto máis predecible e literal" }, { id: "RESUMO", label: "Resumo", icon: "✂️", desc: "Resumo das ideas principais" }, { id: "EXERCICIOS", label: "Exercicios", icon: "📝", desc: "Actividades a partir do texto" }, ];

export function AdaptModesBar({ modes, setModes }) {
  function toggleMode(id) {
    setModes((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  }

  return (
    <section className="sticky top-0 z-30 bg-white/20 dark:bg-slate-900/50 backdrop-blur-lg rounded-none shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 space-y-3">
        {/* Cabeceira */}
        <div>
          <h3 className="text-sm font-bold tracking-wide text-slate-900 dark:text-slate-50">
            Tipo de adaptación
          </h3>
          <p className="text-xs text-slate-700 dark:text-slate-300">
            Selecciona un ou varios modos
          </p>
        </div>

        {/* Botóns */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {MODES.map((mode) => {
            const active = modes.includes(mode.id);

            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => toggleMode(mode.id)}
                className={`
                  relative flex items-center gap-3 rounded-xl px-5 py-3
                  font-bold text-sm transition-all duration-200
                  shadow-md hover:scale-105 hover:shadow-lg
                  ${
                    active
                      ? "bg-gradient-to-r from-sky-300 via-indigo-300 to-violet-300 text-slate-900 shadow-xl"
                      : "border border-slate-300 bg-white/40 dark:bg-slate-800/40 text-slate-700 dark:text-slate-200 hover:bg-gradient-to-r hover:from-sky-100 hover:via-indigo-100 hover:to-violet-100"
                  }
                `}
              >
                {/* Icona */}
                <span
                  className={`
                    flex h-8 w-8 items-center justify-center rounded-lg text-lg
                    ${
                      active
                        ? "bg-white/30 text-slate-900"
                        : "bg-slate-100/50 dark:bg-slate-700/50 text-slate-500"
                    }
                  `}
                >
                  {mode.icon}
                </span>

                {/* Texto */}
                <div className="leading-tight">
                  <p className="text-sm font-bold tracking-wide">
                    {mode.label}
                  </p>
                  <p className={`text-[11px] ${active ? "text-slate-900/90" : "text-slate-500/90 dark:text-slate-300/80"}`}>
                    {mode.desc}
                  </p>
                </div>

                {/* Glow activo */}
                {active && (
                  <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/30 blur-md" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}


// "use client";

// const MODES = [
//   { id: "TDAH", label: "TDAH", icon: "⚡", desc: "Estrutura" },
//   { id: "AUTISMO", label: "TEA", icon: "🧩", desc: "Literal" },
//   { id: "RESUMO", label: "Resumo", icon: "✂️", desc: "Síntese" },
//   { id: "EXERCICIOS", label: "Exercicios", icon: "📝", desc: "Práctica" },
// ];

// export function AdaptModesBar({ modes, setModes }) {
//   function toggleMode(id) {
//     setModes((prev) =>
//       prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
//     );
//   }

//   return (
//     <section className="sticky top-0 z-30 bg-white/20 dark:bg-slate-900/50 backdrop-blur-lg rounded-none shadow-sm">
//       <div className="mx-auto max-w-6xl px-4 py-3 space-y-3">
//         {/* Cabeceira */}
//         <div>
//           <h3 className="text-sm font-bold tracking-wide text-slate-900 dark:text-slate-50">
//             Tipo de adaptación
//           </h3>
//           <p className="text-xs text-slate-700 dark:text-slate-300">
//             Selecciona un ou varios modos
//           </p>
//         </div>

//         {/* Botóns */}
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
//           {MODES.map((mode) => {
//             const active = modes.includes(mode.id);

//             return (
//               <button
//                 key={mode.id}
//                 type="button"
//                 onClick={() => toggleMode(mode.id)}
//                 className={`
//                   relative flex items-center gap-3 rounded-2xl px-5 py-3
//                   font-semibold text-sm transition-all duration-200
//                   shadow-md hover:scale-105 hover:shadow-lg
//                   ${
//                     active
//                       ? "bg-gradient-to-r from-sky-300 via-indigo-300 to-violet-300 text-slate-900 shadow-xl"
//                       : "border border-slate-300 bg-white text-slate-700 hover:bg-gradient-to-r hover:from-sky-100 hover:via-indigo-100 hover:to-violet-100"
//                   }
//                 `}
//               >
//                 {/* Icona */}
//                 <span
//                   className={`
//                     flex h-8 w-8 items-center justify-center rounded-lg text-lg
//                     ${
//                       active
//                         ? "bg-white/30 text-slate-900"
//                         : "bg-slate-100 text-slate-500"
//                     }
//                   `}
//                 >
//                   {mode.icon}
//                 </span>

//                 {/* Texto */}
//                 <div className="leading-tight">
//                   <p className="text-sm font-bold tracking-wide">
//                     {mode.label}
//                   </p>
//                   <p className={`text-[11px] ${active ? "text-slate-900/90" : "text-slate-500"}`}>
//                     {mode.desc}
//                   </p>
//                 </div>

//                 {/* Glow activo */}
//                 {active && (
//                   <span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/30 blur-md" />
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
