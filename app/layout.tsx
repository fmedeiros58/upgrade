// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav"; // ajuste o caminho se não usa alias "@"

export const metadata: Metadata = {
  title: "Upgrade",
  description: "UFAC / NIEAD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-slate-900">
        <Nav />
        <main style={{ paddingTop: "var(--header-h, 0px)" }}>{children}</main>
      </body>
    </html>
  );
}
