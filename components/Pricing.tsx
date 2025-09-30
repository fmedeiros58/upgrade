// components/Pricing.tsx
"use client";

import Link from "next/link";

/**
 * Pricing (Planos Sociais)
 * - 3 colunas: Individual Social, Dupla Social, Amigos Social
 * - Visual idêntico ao mock: selo, preço antigo/novo, botão, checklist
 * - Sem "vidro fosco". Cartões sólidos, borda e sombra leve.
 */

const PLANS: Plan[] = [
  {
    ribbon: "ASSINATURA ILIMITADA",
    title: "Individual Social",
    subtitle: "Para 1 pessoa",
    from: "12x R$ 149,90",
    price: "59,90",
    perPersonNote: undefined,
    noLimitText: "Sem limite no cartão? Sem problemas!",
    href: "/checkout?plan=individual-social-59-90",
  },
  {
    ribbon: "ASSINATURA ILIMITADA",
    title: "Dupla Social",
    subtitle: "Para 2 pessoas",
    from: "12x R$ 299,80",
    price: "83,90",
    perPersonNote: "R$ 41,95 por pessoa (72% de desconto)",
    noLimitText: "Sem limite no cartão? Sem problemas!",
    href: "/checkout?plan=dupla-social-83-90",
    highlighted: true,
  },
  {
    ribbon: "ASSINATURA ILIMITADA",
    title: "Amigos Social",
    subtitle: "Para 4 pessoas",
    from: "12x R$ 599,60",
    price: "149,90",
    perPersonNote: "R$ 37,48 por pessoa (75% de desconto)",
    noLimitText: "Sem limite no cartão? Sem problemas!",
    href: "/checkout?plan=amigos-social-149-90",
  },
];

type Plan = {
  ribbon: string;
  title: string;
  subtitle: string;
  from: string;  // “De: 12x R$ 599,60”
  price: string; // “149,90”
  perPersonNote?: string;
  noLimitText: string;
  href: string;
  highlighted?: boolean;
};

export default function Pricing() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <PlanCard key={p.title} plan={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== UI: Card do Plano ====================== */
function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const ring = plan.highlighted ? "ring-2 ring-blue-300" : "ring-1 ring-slate-200";

  return (
    <article className={["relative rounded-[24px] bg-white shadow-sm", ring, "px-6 pt-5 pb-6"].join(" ")}>
      {/* Selo superior */}
      <Ribbon text={plan.ribbon} />

      {/* Título e subtítulo */}
      <header className="mt-2 text-center">
        <h3 className="text-[#0B3B65] text-[22px] font-extrabold tracking-tight">{plan.title}</h3>
        <p className="text-slate-500 text-sm mt-1">{plan.subtitle}</p>
      </header>

      {/* Cartucho branco com preços/CTA */}
      <div className="mt-6 rounded-[16px] border border-slate-200 bg-white px-6 py-6">
        <p className="text-center text-slate-500 text-[13px]">
          De: <span className="line-through">{plan.from}</span> Por:
        </p>

        {/* Preço grande */}
        <div className="mt-3 text-center">
          <div className="text-slate-600 text-xs">12x R$</div>
          <div className="text-[40px] leading-none font-extrabold text-slate-900">{formatPrice(plan.price)}</div>

          {plan.perPersonNote && (
            <div className="mt-2 text-[11px] text-slate-500">{plan.perPersonNote}</div>
          )}

          {/* No limit line */}
          <Link
            href="/sem-limite-cartao"
            className="mt-3 inline-flex items-center gap-1 text-[12px] text-slate-500 hover:text-slate-700 no-underline"
          >
            {plan.noLimitText} <span aria-hidden>→</span>
          </Link>
        </div>

        {/* CTA */}
        <Link
          href={plan.href}
          className="mt-5 inline-flex w-full items-center justify-center rounded-[12px] bg-rose-500 px-5 py-3 text-white font-bold no-underline hover:bg-rose-400"
        >
          Comece hoje
        </Link>
      </div>

      {/* Checklist de features */}
      <ul className="mt-6 space-y-3 text-[13px] text-slate-700">
        {FEATURES.map((f) => (
          <li key={`${plan.title}-${f}`} className="flex items-start gap-3">
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ====================== Dados fixos: features ====================== */
const FEATURES: string[] = [
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

/* ====================== Elementos visuais ====================== */
function Ribbon({ text }: { text: string }) {
  return (
    <div className="flex justify-center">
      <span className="inline-flex items-center rounded-full border border-rose-300 bg-rose-50 px-3 py-[6px] text-[11px] font-bold tracking-wide text-rose-600">
        {text} <span className="ml-1">✕</span>
      </span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-[2px] h-4 w-4 flex-none" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" className="fill-blue-50" />
      <path
        d="M7 12.5l3 3 7-7"
        stroke="#2563EB"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ====================== Utils ====================== */
function formatPrice(p: string) {
  // só para garantir que “149,90” não quebre
  return p;
}



