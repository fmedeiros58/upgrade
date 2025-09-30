// components/Hero.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// imagem dentro de /public/images
const HERO_IMAGE = "/images/hero-upgrade.png";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[668px]">
      {/* Fundo full-bleed com degradê + imagem */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `
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

      {/* mesmo container do Nav: max-w-7xl + px-6 */}
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16 lg:py-20">
        <div className="max-w-2xl text-white">
          <p className="text-sm md:text-base font-semibold text-rose-300">
            ⚡ MAIS DE 130 MIL VAGAS PREVISTAS
          </p>

          <h1 className="mt-3 md:mt-4 text-[34px] leading-[1.1] md:text-6xl font-extrabold">
            A CHAVE DE ACESSO
            <br />
            PARA SUA <span className="text-rose-400">APROVAÇÃO</span>
            <br />
            <span className="text-rose-400">AINDA EM 2025</span>
          </h1>

          <p className="mt-4 text-white/85 text-[15px] md:text-lg">
            Só a única <strong>Assinatura ilimitada</strong> de verdade oferece
            preparação completa, com os melhores professores. Alcance sua
            aprovação em uma das 130 mil vagas previstas até o fim do ano.
          </p>

          {/* Contador */}
          <div className="mt-7">
            <p className="text-sm md:text-base font-extrabold tracking-wide">
              AS OFERTAS ACABAM EM:
            </p>
            <Countdown to={hoursFromNow(12)} className="mt-2" />
          </div>

          {/* Cards de preço */}
          <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2">
            <PriceCard
              badge="ACESSO POR 1 ANO"
              title={["ASSINATURA", "ILIMITADA 1 ANO"]}
              price="57,90"
              old="149,90"
              button="Ativar desconto"
              href="/checkout?plan=12x-57-90"
              accent="rose"
            />
            <PriceCard
              badge="ACESSO VITALÍCIO"
              title={["ASSINATURA", "ILIMITADA VITALÍCIA"]}
              price="149,90"
              old="449,90"
              button="Ativar desconto"
              href="/checkout?plan=12x-149-90"
              accent="rose"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== auxiliares ===== */

function PriceCard({
  badge,
  title,
  price,
  old,
  button,
  href,
  accent = "rose",
}: {
  badge: string;
  title: [string, string];
  price: string;
  old?: string;
  button: string;
  href: string;
  accent?: "rose" | "indigo" | "emerald" | "sky" | "amber";
}) {
  // classes estáticas (compatível com o purge do Tailwind)
  const styles = {
    rose: { badge: "bg-rose-200", btn: "bg-rose-500 hover:bg-rose-400" },
    indigo: { badge: "bg-indigo-200", btn: "bg-indigo-600 hover:bg-indigo-500" },
    emerald: { badge: "bg-emerald-200", btn: "bg-emerald-600 hover:bg-emerald-500" },
    sky: { badge: "bg-sky-200", btn: "bg-sky-600 hover:bg-sky-500" },
    amber: { badge: "bg-amber-200", btn: "bg-amber-500 hover:bg-amber-400" },
  } as const;
  const cls = styles[accent];

  return (
    <div className="rounded-3xl bg-white/95 backdrop-blur ring-1 ring-black/5 shadow-xl overflow-hidden">
      <div className="px-5 pt-4">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold ${cls.badge} text-slate-900/90`}
        >
          {badge}
        </span>
      </div>

      <div className="px-5 pt-3">
        <h3 className="text-slate-900 font-extrabold leading-tight text-xl">
          {title[0]}
          <br />
          {title[1]}
        </h3>
      </div>

      <div className="px-5 pt-2 text-slate-600 text-[13px]">
        {old && (
          <div>
            De: 12x <span className="line-through">R$ {old}</span>{" "}
            <span className="text-slate-500">Por a partir de 12x:</span>
          </div>
        )}
      </div>

      <div className="px-5 pt-1 pb-3">
        <div className="flex items-end gap-1">
          <span className="text-slate-700">R$</span>
          <span className="text-slate-900 font-extrabold text-4xl md:text-5xl tracking-tight">
            {price}
          </span>
        </div>
      </div>

      <div className="px-5 pb-5">
        <Link
          href={href}
          className={`w-full inline-flex items-center justify-center rounded-2xl ${cls.btn} text-white px-5 py-3 text-[15px] font-bold no-underline`}
        >
          {button}
          <span className="ml-2 text-xl leading-none">→</span>
        </Link>
      </div>
    </div>
  );
}

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
      <div className="text-3xl md:text-4xl font-extrabold tabular-nums">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-[11px] md:text-xs tracking-wide text-white/80 mt-1">
        {label}
      </div>
    </div>
  );

  return (
    <div
      className={[
        "flex items-center gap-5",
        "aria-[label='contador']:text-white",
        className,
      ].join(" ")}
      aria-label="contador"
    >
      <Box label="HORAS" value={h} />
      <span className="text-2xl md:text-3xl -mt-2">:</span>
      <Box label="MIN" value={m} />
      <span className="text-2xl md:text-3xl -mt-2">:</span>
      <Box label="SEG" value={s} />
    </div>
  );
}

function hoursFromNow(h: number) {
  const d = new Date();
  d.setHours(d.getHours() + h);
  return d;
}
