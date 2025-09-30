// app/courses/[course]/page.tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCourseBySlug } from "@/data/courses";

// Paleta por card (faixa e badge) — mesma usada em /courses/page.tsx
const SCHEMES = [
  { bar: "from-indigo-500 to-indigo-600", badge: "bg-indigo-50 ring-indigo-200" },
  { bar: "from-rose-500 to-rose-600",   badge: "bg-rose-50 ring-rose-200" },
  { bar: "from-emerald-500 to-emerald-600", badge: "bg-emerald-50 ring-emerald-200" },
  { bar: "from-amber-500 to-amber-600", badge: "bg-amber-50 ring-amber-200" },
  { bar: "from-sky-500 to-sky-600",     badge: "bg-sky-50 ring-sky-200" },
  { bar: "from-violet-500 to-violet-600", badge: "bg-violet-50 ring-violet-200" },
];

type Props = { params: { course: string } };

export default function CoursePage({ params }: Props) {
  const course = getCourseBySlug(params.course);

  if (!course) {
    return (
      <main className="mx-auto w-full max-w-7xl px-6 py-10">
        <div className="mb-6">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-base font-medium text-indigo-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Voltar para Cursos
          </Link>
        </div>
        <p className="text-slate-800">Curso não encontrado.</p>
      </main>
    );
  }

  const disciplines = course.disciplines ?? [];

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="mb-6">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-base font-medium text-indigo-600 hover:text-emerald-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Voltar para Cursos
        </Link>
      </div>

      <h1 className="text-3xl font-bold uppercase">{course.title}</h1>
      {course.description && (
        <p className="mt-2 text-slate-600">{course.description}</p>
      )}

      {/* painel com fundo diferente do branco */}
      <section className="mt-8 rounded-3xl border border-slate-200 ring-1 ring-slate-200/60 bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((d, i) => {
            const s = SCHEMES[i % SCHEMES.length];
            const lessonsCount = (d.lessons ?? []).length;

            return (
              <div
                key={d.slug}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                {/* faixa colorida no topo */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${s.bar}`} />

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {/* TÍTULO DA DISCIPLINA JUSTIFICADO */}
                      <h2 className="text-xl font-semibold text-slate-900 text-justify">
                        {d.title}
                      </h2>

                      {d.description && (
                        <p className="mt-1 text-sm text-slate-600 text-justify">
                          {d.description}
                        </p>
                      )}

                      {/* badge com contagem de aulas */}
                      <span
                        className={[
                          "mt-2 inline-flex w-fit items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ring-1",
                          s.badge,
                          "text-slate-800",
                        ].join(" ")}
                      >
                        {lessonsCount} {lessonsCount === 1 ? "AULA" : "AULAS"}
                      </span>
                    </div>

                    {/* Botão: azul → verde no hover */}
                    <Link
                      href={`/courses/${course.slug}/${d.slug}`}
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

