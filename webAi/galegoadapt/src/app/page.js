// app/page.tsx
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-10">
        <section className="space-y-4">
          <h1 className="text-3xl font-semibold text-slate-900">
            Plataforma ampliable de ferramentas educativas con IA en galego
          </h1>
          <p className="text-sm text-slate-600">
            Comezo cunha ferramenta para adaptar textos e PDFs a diferentes necesidades (TDAH, autismo, resumos, exercicios), pero a estrutura interna está deseñada para engadir máis aplicacións educativas usando APIs de IA gratuítas.
          </p>
          <Link
            href="/adapt"
            className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
          >
            Ir á ferramenta de adaptación
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
