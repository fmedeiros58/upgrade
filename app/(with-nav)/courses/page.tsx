// app/courses/page.tsx
import Link from "next/link";
import { COURSES } from "@/data/courses";

// Paleta por card (faixa e badge)
const SCHEMES = [
  { bar: "from-indigo-500 to-indigo-600", badge: "bg-indigo-50 ring-indigo-200" },
  { bar: "from-rose-500 to-rose-600", badge: "bg-rose-50 ring-rose-200" },
  { bar: "from-emerald-500 to-emerald-600", badge: "bg-emerald-50 ring-emerald-200" },
  { bar: "from-amber-500 to-amber-600", badge: "bg-amber-50 ring-amber-200" },
  { bar: "from-sky-500 to-sky-600", badge: "bg-sky-50 ring-sky-200" },
  { bar: "from-violet-500 to-violet-600", badge: "bg-violet-50 ring-violet-200" },
];

export default function CoursesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-bold">Cursos</h1>

      {/* painel com fundo diferente do branco */}
      <section className="mt-8 rounded-3xl border border-slate-200 ring-1 ring-slate-200/60 bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course, i) => {
            const s = SCHEMES[i % SCHEMES.length];

            // ✅ garante array mesmo se vier undefined
            const disciplines = course.disciplines ?? [];
            const dcount = disciplines.length;

            return (
              <div
                key={course.slug}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                {/* faixa colorida no topo */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${s.bar}`} />

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {/* TÍTULO DO CURSO EM CAIXA ALTA */}
                      <h2 className="text-xl font-semibold text-slate-900 uppercase">
                        {course.title}
                      </h2>

                      {course.description && (
                        <p className="mt-1 text-sm text-slate-600">
                          {course.description}
                        </p>
                      )}

                      {/* badge com contagem de disciplinas */}
                      <span
                        className={[
                          "mt-2 inline-flex w-fit items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ring-1",
                          s.badge,
                          "text-slate-800",
                        ].join(" ")}
                      >
                        {dcount} {dcount === 1 ? "DISCIPLINA" : "DISCIPLINAS"}
                      </span>
                    </div>

                    {/* Botão: azul → verde no hover */}
                    <Link
                      href={`/courses/${course.slug}`}
                      className={[
                        "inline-flex items-center rounded-xl px-3 py-1.5 text-sm font-semibold text-white",
                        "shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                        "bg-indigo-600 hover:bg-emerald-600 active:bg-emerald-700 focus-visible:ring-emerald-300",
                        "transition-colors",
                      ].join(" ")}
                    >
                      Abrir
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
