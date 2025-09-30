// components/Nav.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient"; // mantém

export default function Nav() {
  const pathname = usePathname();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setEmail(session?.user?.email ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      {/* ====== LINHA 1: logo | anúncio | CTA | entrar ====== */}
      <div className="mx-auto w-full max-w-7xl px-6 py-2 flex items-center gap-4">
        {/* Wordmark UPGRADE */}
        <Link href="/" className="no-underline select-none leading-none" aria-label="Upgrade — Início">
          <span className="inline-flex items-baseline gap-1">
            <span className="text-rose-500 text-3xl md:text-4xl font-black tracking-tight">U</span>
            <span className="text-slate-900 text-3xl md:text-4xl font-black tracking-tight">PGRADE</span>
          </span>
        </Link>

        {/* anúncio central (maior) */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-base md:text-lg text-slate-900 text-center">
            <span className="font-semibold text-rose-600">Assinatura ilimitada:</span>{" "}
            comece hoje e mude sua vida para sempre!
          </p>
        </div>

        {/* CTA vermelho (desktop) */}
        <Link
          href="/pricing"
          className="hidden md:inline-flex no-underline rounded-2xl bg-rose-500 hover:bg-rose-400 text-white px-6 py-3 text-lg font-bold"
        >
          Conheça os planos →
        </Link>

        {/* Entrar / Minha área com ícone */}
        <div className="ml-2">
          {email ? (
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 no-underline rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-800 hover:bg-slate-50"
            >
              <AvatarSquare />
              Minha área
            </Link>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center gap-3 no-underline rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 text-sm font-semibold"
            >
              <AvatarSquare color="white" borderColor="transparent" bg="bg-indigo-500/0" />
              Entrar
            </Link>
          )}
        </div>
      </div>

      {/* ====== LINHA 2: menu ====== */}
      {/* 🔧 DISTÂNCIA VERTICAL ENTRE LINHAS: ajuste mt-* se quiser mais/menos espaço */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-2 mt-3 md:mt-6">
        {/* 🔧 TAMANHO DOS ITENS: ajuste os text-[..] abaixo */}
        <nav className="w-full flex flex-wrap justify-between gap-x-3 md:gap-x-4 gap-y-2 text-[16px] md:text-[17px]">
          <NavItem href="/dashboard" active={isActive("/dashboard")}>Questões Grátis</NavItem>
          <NavItem href="/aprovados" active={isActive("/aprovados")}>Aprovados</NavItem>
          <NavItem href="/courses" active={isActive("/courses")}>Cursos</NavItem>
          <NavItem href="/questions" active={isActive("/questions")}>Questões</NavItem>
          <NavItem href="/dashboard" active={isActive("/dashboard")}>Minha área</NavItem>
          {/* extras — ajuste nomes/rotas como quiser */}
          <NavItem href="/mentorias" active={isActive("/mentorias")}>Mentorias</NavItem>
          <NavItem href="/conteudo-gratuito" active={isActive("/conteudo-gratuito")}>Conteúdo gratuito</NavItem>
          <NavItem href="/blog" active={isActive("/blog")}>Blog</NavItem>
        </nav>
      </div>
    </nav>
  );
}

/* ====== Item do menu com "box" de hover/focus (acessível) ====== */
function NavItem({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={[
        // área clicável maior + cantos arredondados
        "no-underline px-3 py-1.5 rounded-lg",
        // transição suave + foco teclado visível
        "transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        // ESTADOS (ajuste as cores como preferir)
        active
          ? "text-indigo-900 bg-indigo-100 ring-1 ring-indigo-200" // ativo
          : "text-slate-800 hover:text-indigo-900 hover:bg-indigo-50 hover:ring-1 hover:ring-indigo-200 focus-visible:bg-indigo-90 focus-visible:text-indigo-900"
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

/* ====== Ícone "bonequinho" em quadrado arredondado ====== */
function AvatarSquare({
  color = "currentColor",
  borderColor = "#CBD5E1", // slate-300
  bg = "bg-transparent",
}: {
  color?: string;
  borderColor?: string;
  bg?: string;
}) {
  return (
    <span
      className={`inline-flex h-8 w-10 items-center justify-center rounded-lg ${bg}`}
      style={{ border: `1px solid ${borderColor}` }}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8.5" r="6" />
        <path d="M4 19.5c1.9-3.2 5-4.8 8-4.8s6.1 1.6 8 4.8" />
      </svg>
    </span>
  );
}
