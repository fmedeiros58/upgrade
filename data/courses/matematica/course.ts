import type { Course } from "../types";

// importe TODAS as disciplinas do curso Matemática:
import calculo1 from "./calculo1"; // ⬅ disciplina inicial

const matematica: Course = {
  slug: "matematica",
  title: "Matemática",
  description: "Curso de Matemática com múltiplas disciplinas.",
  disciplines: [
    calculo1, // ⬅ por enquanto só Cálculo 1, mas pode adicionar mais
  ],
};

export default matematica;
