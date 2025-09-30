import type { Course } from "../types";

// importe TODAS as disciplinas do curso Biologia:
import embriologiaComparada from "./embriologiacomparada";
import geneticaBasica from "./geneticabasica";
import zoologiaDosMetazoarios from "./zoologiadosmetazoarios";
import FisiologiaHumana from "./fisiologiahumana"; // ⬅ importa com a mesma caixa do arquivo
import biologiaCelular from "./biologiacelular";   // ⬅ disciplina adicionada
import botanicaEstrutural from "./botanicaestrutural"; // ⬅ nova disciplina adicionada

const biologia: Course = {
  slug: "biologia",
  title: "Biologia",
  description: "Curso de Biologia com múltiplas disciplinas.",
  disciplines: [
    embriologiaComparada,
    geneticaBasica,
    zoologiaDosMetazoarios,
    FisiologiaHumana,    // ⬅ usa o mesmo identificador do import
    biologiaCelular,     // ⬅ disciplina adicionada
    botanicaEstrutural,  // ⬅ nova disciplina adicionada
  ],
};

export default biologia;
