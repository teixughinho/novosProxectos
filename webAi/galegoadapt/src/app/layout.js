// app/layout.js
import "./globals.css";

export const metadata = {
  title: "GalegoAdapt",
  description: "Adaptación de textos educativos en galego con IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="gl">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}

