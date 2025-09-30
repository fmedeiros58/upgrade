import type { Course } from "../types";

// importe TODAS as disciplinas do curso Biologia (caminhos com a MESMA caixa do nome do arquivo):
import embriologiaComparada from "./embriologiacomparada";
import geneticaBasica from "./geneticabasica";
import zoologiaDosMetazoarios from "./ZoologiadosMetazoarios"; // <-- atenção ao Z maiúsculo
import FisiologiaHumana from "./fisiologiahumana";
import biologiaCelular from "./biologiacelular";
import botanicaEstrutural from "./botanicaestrutural";

const biologia: Course = {
  slug: "biologia",
  title: "Biologia",
  description: "Curso de Biologia com múltiplas disciplinas.",
  disciplines: [
    embriologiaComparada,
    geneticaBasica,
    zoologiaDosMetazoarios,
    FisiologiaHumana,
    biologiaCelular,
    botanicaEstrutural,
  ],
};

export default biologia;

