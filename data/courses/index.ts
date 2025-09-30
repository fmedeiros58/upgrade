import type { Course, Discipline } from "./types";
import biologia from "./biologia/course";
import matematica from "./matematica/course"; // ⬅ novo curso adicionado

export const COURSES: Course[] = [
  biologia,
  matematica, // ⬅ agora Matemática também faz parte da lista
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getDiscipline(course: Course, disciplineSlug: string): Discipline | undefined {
  const list = (course as any).disciplines ?? (course as any).subjects ?? [];
  return list.find((d: Discipline) => d.slug === disciplineSlug);
}
