"use client";

import Link from "next/link";

/** Selo vermelho em cima do cartão */
function PlanBadge() {
  return (
    <span className="inline-flex items-center rounded-full border border-rose-300/70 text-rose-600 bg-rose-50 px-3 py-1 text-[11px] font-semibold tracking-wide">
      ASSINATURA ILIMITADA ✕
    </span>
  );
}

/** Lista de benefícios (a mesma para os 3 planos) */
const benefits = [
  "Videoaulas, PDFs e Audiobooks para você estudar do jeito que quiser",
  "App nº 1 para concursos: todo o conteúdo na palma da mão",
  "Professores didáticos, de cargos de maior escalão do país",
  "Cronograma automático de estudos: organização na certa!",
  "Mais de 25 mil cursos",
  "Todas as carreiras públicas disponíveis",
  "3 milhões de questões",
  "Garantia de atualização pós-edital",
  "Fórum de dúvidas",
  "7 dias de garantia",
];

/** Um item com “check” azul */
function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <svg
        viewBox="0 0 24 24"
        className="mt-[3px] h-4 w-4"
        fill="none"
        stroke="#2563eb"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span className="text-[13px] leading-5 text-slate-700">{children}</span>
    </li>
  );
}

type PlanCardProps = {
  title: string;
  subtitle: string;
  oldPerMonth?: string; // “R$ 149,90” (opcional p/ riscado)
  newPerMonth: string;  // “59,90”
  perPersonNote?: string; // “R$ 41,95 por pessoa (72% de desconto)”
  noLimitLink?: boolean;  // mostra o link “Sem limite no cartão?...”
};

function PlanCard({
  title,
  subtitle,
  oldPerMonth,
  newPerMonth,
  perPersonNote,
  noLimitLink = true,
}: PlanCardProps) {
  return (
    <div className="relative rounded-3xl bg-white ring-1 ring-blue-200/60 shadow-[0_10px_30px_-12px_rgba(37,99,235,.15)]">
      {/* Cabeçalho do cartão */}
      <div className="px-8 pt-6">
        <PlanBadge />
        <h3 className="mt-4 text-[22px] font-extrabold tracking-tight text-slate-800">
          {title}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-500">{subtitle}</p>
      </div>

      {/* Bloco interno com preço, CTA e benefícios */}
      <div className="px-6 pb-8 pt-5">
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5">
          {/* Linha “De: 12x R$ ... Por:” */}
          <p className="text-center text-[12px] text-slate-500">
            De: 12x{" "}
            {oldPerMonth ? (
              <span className="line-through">R$ {oldPerMonth}</span>
            ) : (
              <span className="line-through opacity-60">—</span>
            )}{" "}
            Por:
          </p>

          {/* Preço principal */}
          <div className="mt-2 text-center">
            <div className="text-[12px] font-medium text-slate-600">12x R$</div>
            <div className="text-4xl font-extrabold tracking-tight text-slate-900">
              {newPerMonth}
            </div>

            {/* Nota “por pessoa” (apenas Dupla/Amigos) */}
            {perPersonNote && (
              <div className="mt-2 text-[12px] text-slate-500">{perPersonNote}</div>
            )}

            {/* Link “Sem limite no cartão?” */}
            {noLimitLink && (
              <Link
                href="/pricing"
                className="mt-3 inline-flex items-center gap-2 text-[12px] text-slate-500 hover:text-slate-700"
              >
                Sem limite no cartão? Sem problemas!
                <span className="text-slate-400">↘</span>
              </Link>
            )}
          </div>

          {/* Botão vermelho */}
          <div className="mt-4 flex justify-center">
            <Link
              href="/checkout"
              className="inline-flex w-full items-center justify-center rounded-xl bg-rose-600 px-5 py-3 text-[14px] font-bold text-white hover:bg-rose-500"
            >
              Comece hoje
            </Link>
          </div>

          {/* Lista de benefícios */}
          <ul className="mt-5 space-y-3">
            {benefits.map((b) => (
              <CheckItem key={b}>{b}</CheckItem>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** 
 * Componente principal
 * – Seção com leve fundo azul, 3 colunas e cards iguais à referência.
 */
export default function SocialPlans() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {/* 1) Individual Social */}
          <PlanCard
            title="Individual Social"
            subtitle="Para 1 pessoa"
            oldPerMonth="149,90"
            newPerMonth="59,90"
          />

          {/* 2) Dupla Social */}
          <PlanCard
            title="Dupla Social"
            subtitle="Para 2 pessoas"
            oldPerMonth="299,80"
            newPerMonth="83,90"
            perPersonNote="R$ 41,95 por pessoa (72% de desconto)"
          />

          {/* 3) Amigos Social */}
          <PlanCard
            title="Amigos Social"
            subtitle="Para 4 pessoas"
            oldPerMonth="599,60"
            newPerMonth="149,90"
            perPersonNote="R$ 37,48 por pessoa (75% de desconto)"
          />
        </div>
      </div>
    </section>
  );
}
