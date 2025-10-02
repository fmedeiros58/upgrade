// app/dashboard/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

import Player from "@/components/Player";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!mounted) return;
      if (!data.user) {
        router.replace("/login?redirect=/dashboard"); // volta pro login, preserva destino
      } else {
        setChecking(false);
      }
    })();
    return () => { mounted = false; };
  }, [router]);

  if (checking) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-10">
        <p className="text-sm text-neutral-500">Carregando…</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Minha área</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Player title="Aula de Cardiologia — Arritmias" vimeoId="000000000" />
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Progresso</h2>
          <ul className="text-slate-300 space-y-1">
            <li>Horas assistidas: 2h</li>
            <li>Questões feitas: 25</li>
            <li>Acertos: 72%</li>
          </ul>
          <Link href="/questions" className="btn btn-primary mt-4 w-full">
            Continuar questões
          </Link>
        </div>
      </div>
    </div>
  );
}
