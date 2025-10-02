// app/page.tsx
"use client";

import Link from "next/link";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";



/* Usado no Hero e no Countdown */
import { useEffect, useState } from "react";

/* =============================================================================
   HERO (compacto) — com comentários de ajuste “🔧”
============================================================================= */

const HERO_IMAGE = "/images/hero-upgrade.png"; // 🔧 troque aqui o arquivo do hero (fica em /public/images)

function Hero() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        min-h-[520px]    /* 🔧 ALTURA do hero: ex. 520px → 480px para deixar mais baixo */
      "
    >
      {/* Fundo com imagem + degradê */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `
            /* 🔧 Degradê: mude o ângulo (90deg) ou a opacidade dos RGBA p/ mais/menos escuridão */
            linear-gradient(
              90deg,
              rgba(0,0,0,.88) 0%,
              rgba(0,0,0,.78) 22%,
              rgba(0,0,0,.50) 48%,
              rgba(0,0,0,.20) 68%,
              rgba(0,0,0,0) 100%
            ),
            url(${HERO_IMAGE})
          `,
        }}
      />

      {/* 🔧 mesma régua do Nav: max-w-7xl + px-6
          Altura vertical via padding: reduza/eleve estes valores p/ “apertar/soltar” o hero */}
      <div className="mx-auto w-full max-w-7xl px-6 py-8 md:py-12">
        <div className="max-w-2xl text-white">
          <p className="text-xs md:text-sm font-semibold text-rose-300">
            ⚡ MAIS DE 130 MIL VAGAS PREVISTAS
          </p>

          <h1
            className="
              mt-2 md:mt-3
              text-[20px] md:text-5xl   /* 🔧 TAMANHO do título: md:text-5xl → md:text-4xl p/ menor */
              leading-tight
              font-extrabold tracking-tight
              filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]  /* 🔧 Sombra p/ legibilidade */
            "
          >
            <span className="text-white">A CHAVE DE ACESSO</span>
            <br />
            <span className="text-white">PARA SUA </span>
            <span className="text-[#ff375f]">APROVAÇÃO</span>
            <br />
            <span className="text-[#ff375f]">AINDA EM 2025</span>
          </h1>

          <p
            className="
              mt-2
              text-white/90
              text-[14px] md:text-base  /* 🔧 TAMANHO do parágrafo */
            "
          >
            Só a única <strong className="text-white">Assinatura ilimitada</strong> de verdade
            oferece preparação completa, com os melhores professores. Alcance sua
            aprovação em uma das 130 mil vagas previstas até o fim do ano.
          </p>

          {/* BLOCO: Contador (timer) */}
          <div className="mt-3  /* 🔧 Espaço acima do timer */">
            <p className="text-xs md:text-sm font-extrabold tracking-wide">
              AS OFERTAS ACABAM EM:
            </p>
            <Countdown to={hoursFromNow(12)} className="mt-1" />
          </div>

          {/* BLOCO: Cards de preço */}
          <div
            className="
              mt-3                /* 🔧 Espaço acima dos cards */
              grid gap-3          /* 🔧 Espaço ENTRE os cards */
              sm:gap-4 sm:grid-cols-2
            "
          >
            <PriceCard
              badge="ACESSO POR 1 ANO"
              title={["ASSINATURA", "ILIMITADA 1 ANO"]}
              price="57,90"
              old="149,90"
              button="Ativar desconto"
              href="/checkout?plan=12x-57-90"
              accent="rose"
              compact
            />
            <PriceCard
              badge="ACESSO VITALÍCIO"
              title={["ASSINATURA", "ILIMITADA VITALÍCIA"]}
              price="149,90"
              old="449,90"
              button="Ativar desconto"
              href="/checkout?plan=12x-149-90"
              accent="rose"
              compact
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================================
   PriceCard — cartão do Hero
============================================================================= */
function PriceCard({
  badge,
  title,
  price,
  old,
  button,
  href,
  accent = "rose",
  compact = false,
}: {
  badge: string;
  title: [string, string];
  price: string;
  old?: string;
  button: string;
  href: string;
  accent?: "rose" | "indigo" | "emerald" | "sky" | "amber";
  compact?: boolean;
}) {
  const styles = {
    rose:   { badge: "bg-rose-200",   btn: "bg-rose-500 hover:bg-rose-400" },
    indigo: { badge: "bg-indigo-200", btn: "bg-indigo-600 hover:bg-indigo-500" },
    emerald:{ badge: "bg-emerald-200",btn: "bg-emerald-600 hover:bg-emerald-500" },
    sky:    { badge: "bg-sky-200",    btn: "bg-sky-600 hover:bg-sky-500" },
    amber:  { badge: "bg-amber-200",  btn: "bg-amber-500 hover:bg-amber-400" },
  } as const;
  const cls = styles[accent];

  const pad     = compact ? "px-4 py-3" : "px-5 py-4";
  const titleSz = compact ? "text-lg" : "text-xl";
  const priceSz = compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl";
  const btnPad  = compact ? "px-4 py-2.5 text-sm" : "px-5 py-3 text-[15px]";

  return (
    <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
      <div className={`${pad} pt-3 bg-transparent`}>
        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${cls.badge} text-slate-900/90`}>
          {badge}
        </span>
      </div>

      <div className={`${pad} pt-2`}>
        <h3 className={`text-slate-900 font-extrabold leading-tight ${titleSz}`}>
          {title[0]}<br />{title[1]}
        </h3>
      </div>

      <div className={`${pad} pt-1 text-slate-600 text-[12px]`}>
        {old && (
          <div>
            De: 12x <span className="line-through">R$ {old}</span>{" "}
            <span className="text-slate-500">Por a partir de 12x:</span>
          </div>
        )}
      </div>

      <div className={`${pad} pt-0 pb-2`}>
        <div className="flex items-end gap-1">
          <span className="text-slate-700 text-sm">R$</span>
          <span className={`text-slate-900 font-extrabold tracking-tight ${priceSz}`}>{price}</span>
        </div>
      </div>

      <div className={`${pad} pb-4`}>
        <Link href={href} className={`w-full inline-flex items-center justify-center rounded-xl ${cls.btn} text-white ${btnPad} font-bold no-underline`}>
          {button}
          <span className="ml-2 text-lg leading-none">→</span>
        </Link>
      </div>
    </div>
  );
}

/* =============================================================================
   Countdown — usado no Hero
============================================================================= */
function Countdown({ to, className }: { to: Date; className?: string }) {
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, to.getTime() - now.getTime());
  const total = Math.floor(diff / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;

  const Box = ({ label, value }: { label: string; value: number }) => (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-extrabold tabular-nums">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-[10px] md:text-[11px] tracking-wide text-white/80 mt-1">{label}</div>
    </div>
  );

  return (
    <div className={["flex items-center gap-4", className].join(" ")}>
      <Box label="HORAS" value={h} />
      <span className="text-xl md:text-2xl -mt-1">:</span>
      <Box label="MIN" value={m} />
      <span className="text-xl md:text-2xl -mt-1">:</span>
      <Box label="SEG" value={s} />
    </div>
  );
}

/* 🔧 Muda a duração do countdown alterando as horas +h */
function hoursFromNow(h: number) {
  const d = new Date();
  d.setHours(d.getHours() + h);
  return d;
}

/* =============================================================================
   Seções auxiliares (features/planStrip/blue/faq)
============================================================================= */

function FeatureGrid({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((f) => (
          <div key={f.title} className="rounded-2xl p-6 border bg-white shadow-sm">
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PlanStrip({
  plans,
}: {
  plans: { tag: string; title: string; price: string; href: string }[];
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="grid sm:grid-cols-2 gap-4">
        {plans.map((c) => (
          <div key={c.title} className="rounded-2xl p-6 border bg-white shadow-sm">
            <span className="inline-block text-[11px] font-semibold bg-emerald-100 text-emerald-700 rounded-full px-2 py-1">
              {c.tag}
            </span>
            <h3 className="mt-2 text-lg font-bold text-slate-900">{c.title}</h3>
            <div className="mt-1 text-slate-500 text-xs">12x R$</div>
            <div className="text-3xl font-extrabold text-slate-900">{c.price}</div>
            <Link href={c.href} className="mt-4 inline-flex rounded-xl bg-rose-500 hover:bg-rose-400 text-white px-4 py-2 text-sm font-semibold no-underline">
              Ativar desconto →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function BlueBanner() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="rounded-3xl p-8 md:p-10 text-white" style={{ background: "linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%)" }}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-[#0EA5E9] via-[#0F172A] to-[#7C3AED] shadow-2xl" />
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">Sem limite no cartão? Não tem problema!</h3>
            <p className="mt-3 text-white/90">Cobramos apenas o valor da parcela mensal no modo recorrente.</p>
            <Link href="/pricing" className="mt-5 inline-flex rounded-xl bg-white/90 text-blue-700 hover:bg-white px-4 py-2 font-semibold no-underline">
              Comprar agora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10">
      <h2 className="text-2xl font-semibold">Perguntas frequentes</h2>
      <div className="mt-6 space-y-4">
        {items.map((f) => (
          <details key={f.q} className="rounded-2xl p-6 border bg-white shadow-sm">
            <summary className="cursor-pointer text-base font-semibold">{f.q}</summary>
            <p className="mt-2 text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* =============================================================================
   REGISTRY / CONFIG  (⚠️ sem o 'hero' aqui!)
============================================================================= */
// --- dados separados para ficar limpo ---
const plansData = [
  { tag: "ACESSO POR 1 ANO", title: "ASSINATURA ILIMITADA 1 ANO", price: "57,90", href: "/pricing" },
  { tag: "ACESSO VITALÍCIO", title: "ASSINATURA ILIMITADA VITALÍCIA", price: "149,90", href: "/pricing" },
];

const featuresData = [
  { title: "Videoaulas + PDFs + Áudio", desc: "Estude no desktop ou app (offline)." },
  { title: "Questões comentadas", desc: "Filtros por tema, banca e dificuldade." },
  { title: "Trilhas inteligentes", desc: "Cronogramas e revisões espaçadas." },
  { title: "Comunidade & Dúvidas", desc: "Interação com professores e alunos." },
  { title: "Atualização pós-edital", desc: "Conteúdo alinhado ao edital vigente." },
  { title: "Simulados & Desempenho", desc: "Acompanhe sua evolução com métricas." },
];

const faqData = [
  { q: "Como funciona o acesso às disciplinas?", a: "Escolha o curso, entre nas trilhas e estude com aulas, PDFs e questões por tema." },
  { q: "Posso cancelar quando quiser?", a: "Planos mensais cancelam a qualquer momento. Anuais seguem as regras da oferta." },
  { q: "Existe garantia?", a: "7 dias para experimentar. Se não curtir, cancelamos sem burocracia." },
];

// --- ESTE É O “registry”: controla a ORDEM das seções ---
const sections: Array<
  | { type: "hero" }
  | { type: "pricing" }
  | { type: "plans"; plans: typeof plansData }
  | { type: "features"; items: typeof featuresData }
  | { type: "blue" }
  | { type: "faq"; items: typeof faqData }
> = [
  { type: "hero" },
  { type: "pricing" },                 // ✅ Pricing logo abaixo do Hero
  { type: "plans", plans: plansData },
  { type: "features", items: featuresData },
  { type: "blue" },
  { type: "faq", items: faqData },
];


/* =============================================================================
   🔹 PLACEHOLDER — Social Plans (substitua por sua versão completa)
   - Isto evita erro de compilação até você colar o componente verdadeiro.
============================================================================= */
function SocialPlansInline() {
  return null; // ⬅️ substitua este retorno pelo componente completo dos Planos Sociais
}

/* =============================================================================
   HOME — renderiza Hero, Social Plans e depois as demais seções
============================================================================= */
export default function Home() {
  return (
    <>
      <main className="pb-24">
        {sections.map((s, i) => {
          if (s.type === "hero")     return <Hero key={i} />;
          if (s.type === "pricing")
            return (
              <section key={i} className="mx-auto w-full max-w-7xl px-6 py-10">
                <Pricing />
              </section>
            );
          if (s.type === "plans")    return <PlanStrip key={i} plans={s.plans} />;
          if (s.type === "features") return <FeatureGrid key={i} items={s.items} />;
          if (s.type === "blue")     return <BlueBanner key={i} />;
          if (s.type === "faq")      return <FAQ key={i} items={s.items} />;
          return null;
        })}
      </main>

      {/* Footer no final da Home */}
      <Footer
        brand="UPGRADE"
        privacyHref="/privacy"
        termsHref="/terms"
        cookiesHref="/cookies"
        showContact
        email="contato@seudominio.com"
        whatsapp="https://wa.me/5599999999999"
      />
    </>
  );
}


/* ===================================================================
   📌 ONDE INSERIR O CÓDIGO COMPLETO DO “SOCIAL PLANS”:
   - Cole a implementação completa do componente SocialPlansInline
     **no lugar deste placeholder**, logo acima do export default Home,
     substituindo:

        function SocialPlansInline() { return null; }

     pelo componente real que te passei (com título, abas, countdown e
     os 3 cartões: Individual, Dupla e Amigos Social).
   - Se preferir manter em um arquivo próprio, crie
     `components/SocialPlans.tsx` e troque o placeholder por:

        import SocialPlansInline from "@/components/SocialPlans";

     mantendo a chamada <SocialPlansInline /> no JSX da Home.
   =================================================================== */
