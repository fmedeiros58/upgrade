// app/courses/[course]/[discipline]/page.tsx
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { COURSES } from "@/data/courses";

type Params = {
  params: { course: string; discipline: string };
};

export default function DisciplinePage({ params }: Params) {
  const { course: courseSlug, discipline: disciplineSlug } = params;

  const course = COURSES.find((c) => c.slug === courseSlug);
  if (!course) return notFound();

  const discipline = (course.disciplines ?? []).find((d) => d.slug === disciplineSlug);
  if (!discipline) return notFound();

  const lessons = discipline.lessons ?? [];

  // ✅ Se houver aulas, redireciona para a 1ª (tela com player + sidebar)
  if (lessons.length > 0) {
    redirect(`/courses/${course.slug}/${discipline.slug}/${lessons[0].slug}`);
  }

  // ✅ Se não houver aulas, mostra um fallback simples (sem input “fake”)
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="mb-4">
        <Link
          href={`/courses/${course.slug}`}
          className="text-sm text-slate-700 no-underline hover:text-slate-900"
        >
          ← Voltar para {course.title}
        </Link>
      </div>

      <h1 className="text-2xl md:text-3xl font-semibold">{discipline.title}</h1>
      {discipline.description && (
        <p className="mt-2 text-slate-600">{discipline.description}</p>
      )}

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-600">
        Nenhuma aula cadastrada ainda para esta disciplina.
      </div>
    </main>
  );
}
