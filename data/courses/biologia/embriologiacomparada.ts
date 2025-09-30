// data/courses/biologia/embriologiacomparada.ts
import type { Discipline } from "../types";

const embriologiaComparada: Discipline = {
  slug: "embriologia-comparada",
  title: "Embriologia Comparada", // mantém sem caixa alta
  description: "Introdução aos princípios da embriologia comparada e aplicações.",
  heroVideo: { youtubeId: "-" },
  lessons: [
    {
      slug: "introducao-a-embriologia-comparada",
      title: "Introdução à Embriologia Comparada",
      youtubeId: "9w5fyMlFEAE",
      duration: "12:34",
      description: "Panorama geral da disciplina e objetivos do curso.",
    },
    {
      slug: "gametogenese-e-fecundacao",
      title: "Gametogênese e Fecundação",
      youtubeId: "PnBxOknz-zs",
      duration: "18:20",
      description: "Processos celulares e comparações entre grupos animais.",
    },
    {
      slug: "segmentacao-e-gastrulacao",
      title: "Segmentação e Gastrulação",
      youtubeId: "eY52Zsg-KVI",
      duration: "22:05",
      description: "Padrões de segmentação e etapas iniciais do desenvolvimento.",
    },

    // --- Novas aulas ---
    {
      slug: "tipos-de-clivagem-mosaico-vs-regulativa",
      title: "Tipos de Clivagem: Mosaico vs. Regulativa",
      youtubeId: "dQw4w9WgXcQ",
      duration: "14:10",
      description: "Comparação entre clivagem determinativa e regulativa em diferentes filos.",
    },
    {
      slug: "modos-de-gastrulacao",
      title: "Modos de Gastrulação (invaginação, involução, epibolia…)",
      youtubeId: "dQw4w9WgXcQ",
      duration: "16:45",
      description: "Como diferentes embriões reorganizam as camadas germinativas.",
    },
    {
      slug: "neurulacao-e-formacao-do-tubo-neural",
      title: "Neurulação e Formação do Tubo Neural",
      youtubeId: "dQw4w9WgXcQ",
      duration: "17:20",
      description: "Fechamento do tubo neural e variações entre vertebrados.",
    },
    {
      slug: "crista-neural-origens-e-derivados",
      title: "Crista Neural: Origens e Derivados",
      youtubeId: "dQw4w9WgXcQ",
      duration: "15:30",
      description: "Migração, diferenciação e importância evolutiva da crista neural.",
    },
    {
      slug: "somitos-e-somitogenese",
      title: "Somitos e Somitogênese",
      youtubeId: "dQw4w9WgXcQ",
      duration: "13:55",
      description: "Relógio de segmentação e formação de esclerótomo, miótomo e dermátomo.",
    },
    {
      slug: "organogenese-de-membros",
      title: "Organogênese: Desenvolvimento de Membros",
      youtubeId: "dQw4w9WgXcQ",
      duration: "18:40",
      description: "AER/ZPA, gradientes morfogenéticos e variações entre espécies.",
    },
    {
      slug: "desenvolvimento-cardiaco-inicial",
      title: "Desenvolvimento Cardíaco Inicial",
      youtubeId: "dQw4w9WgXcQ",
      duration: "19:05",
      description: "Do tubo cardíaco primitivo à formação de câmaras: comparação entre vertebrados.",
    },
    {
      slug: "arcos-faringeos-e-derivados",
      title: "Arcos Faríngeos e seus Derivados",
      youtubeId: "dQw4w9WgXcQ",
      duration: "14:25",
      description: "Padrões de desenvolvimento craniofacial e homologia entre grupos.",
    },
    {
      slug: "organizadores-eixos-e-hox",
      title: "Organizadores, Eixos Embrionários e Genes Hox",
      youtubeId: "dQw4w9WgXcQ",
      duration: "20:10",
      description: "Centro de Spemann-Mangold, dorsalização e o papel dos Hox na regionalização.",
    },
    {
      slug: "vias-de-sinalizacao-bmp-wnt-shh",
      title: "Vias de Sinalização: BMP, Wnt, Shh e FGF",
      youtubeId: "dQw4w9WgXcQ",
      duration: "18:15",
      description: "Circuitos conservados e como eles moldam planos corporais.",
    },
    {
      slug: "membranas-extraembrionarias",
      title: "Membranas Extraembrionárias (Âmnio, Cório, Alantoide, Saco Vitelino)",
      youtubeId: "dQw4w9WgXcQ",
      duration: "12:50",
      description: "Comparação em amniotas e adaptações à vida terrestre.",
    },
    {
      slug: "placentacao-e-tipos-de-placenta",
      title: "Placentação e Tipos de Placenta",
      youtubeId: "dQw4w9WgXcQ",
      duration: "16:00",
      description: "Estratégias materno-fetais e paralelos em mamíferos.",
    },
    {
      slug: "metamorfose-e-regeneracao",
      title: "Metamorfose e Regeneração",
      youtubeId: "dQw4w9WgXcQ",
      duration: "15:40",
      description: "Mudanças pós-embrionárias e capacidades regenerativas comparadas.",
    },
    {
      slug: "heterocronia-e-evo-devo",
      title: "Heterocronia e Evo-Devo",
      youtubeId: "dQw4w9WgXcQ",
      duration: "17:30",
      description: "Mudanças temporais no desenvolvimento e suas consequências evolutivas.",
    },
    {
      slug: "teratogenese-e-janelas-criticas",
      title: "Teratogênese e Janelas Críticas",
      youtubeId: "dQw4w9WgXcQ",
      duration: "14:35",
      description: "Fatores ambientais/medicamentos e períodos sensíveis do desenvolvimento.",
    },
    {
      slug: "modelos-animais-xenopus-zebrafish-galinha-camundongo",
      title: "Modelos Animais: Xenopus, Zebrafish, Galinha e Camundongo",
      youtubeId: "dQw4w9WgXcQ",
      duration: "19:25",
      description: "Forças e limitações de cada modelo para perguntas clássicas em embriologia.",
    },
  ],
};

export default embriologiaComparada;
