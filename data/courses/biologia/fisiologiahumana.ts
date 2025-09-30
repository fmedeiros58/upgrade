// data/courses/biologia/FisiologiaHumana.ts
import type { Discipline } from "../types";

const FisiologiaHumana: Discipline = {
  slug: "fisiologia-humana",
  title: "Fisiologia Humana",
  description:
    "Funcionamento integrado de sistemas orgânicos: membranas, sinalização, sistemas cardiovascular, respiratório, renal, digestório, endócrino e nervoso.",
  heroVideo: { youtubeId: "cnhKVVcyh9U" }, // troque pelo ID real do seu vídeo de destaque
  lessons: [
    {
      slug: "introducao-a-fisiologia",
      title: "Introdução à Fisiologia",
      youtubeId: "dQw4w9WgXcQ",
      duration: "11:40",
      description: "Conceitos básicos, níveis de organização e homeostase.",
    },
    {
      slug: "homeostase-e-feedback",
      title: "Homeostase e Mecanismos de Feedback",
      youtubeId: "dQw4w9WgXcQ",
      duration: "14:20",
      description: "Feedback negativo e positivo, set-point e alostase.",
    },
    {
      slug: "transporte-de-membrana",
      title: "Transporte de Membrana",
      youtubeId: "dQw4w9WgXcQ",
      duration: "16:05",
      description:
        "Difusão, osmose, transporte ativo, cotransporte e canais iônicos.",
    },
    {
      slug: "potencial-de-membrana",
      title: "Potencial de Membrana e Potencial de Ação",
      youtubeId: "dQw4w9WgXcQ",
      duration: "18:10",
      description:
        "Gradientes eletroquímicos, canais dependentes de voltagem e condução.",
    },
    {
      slug: "fisiologia-muscular",
      title: "Fisiologia Muscular (Esquelético, Cardíaco e Liso)",
      youtubeId: "dQw4w9WgXcQ",
      duration: "19:00",
      description:
        "Acoplamento excitação–contração e diferenças entre os tipos de músculo.",
    },
    {
      slug: "sistema-nervoso-basico",
      title: "Sistema Nervoso: Organização e Sinapses",
      youtubeId: "dQw4w9WgXcQ",
      duration: "17:30",
      description:
        "Neurônios, glia, neurotransmissores, sinapses químicas e elétricas.",
    },
    {
      slug: "sistema-autonomo",
      title: "Sistema Nervoso Autônomo (Simpático e Parassimpático)",
      youtubeId: "dQw4w9WgXcQ",
      duration: "13:50",
      description:
        "Vias, receptores adrenérgicos/colinérgicos e efeitos em órgãos-alvo.",
    },
    {
      slug: "fisiologia-cardiovascular-i",
      title: "Cardiovascular I: Coração e Eletrofisiologia",
      youtubeId: "dQw4w9WgXcQ",
      duration: "18:45",
      description:
        "Nodo SA/AV, sistema de condução e ciclo cardíaco.",
    },
    {
      slug: "fisiologia-cardiovascular-ii",
      title: "Cardiovascular II: Hemodinâmica e Pressão Arterial",
      youtubeId: "dQw4w9WgXcQ",
      duration: "19:15",
      description:
        "Débito cardíaco, resistência periférica, controle barorreflexo.",
    },
    {
      slug: "fisiologia-respiratoria-i",
      title: "Respiratório I: Mecânica Ventilatória",
      youtubeId: "dQw4w9WgXcQ",
      duration: "16:25",
      description:
        "Pressões, complacência, volumes e capacidades pulmonares.",
    },
    {
      slug: "fisiologia-respiratoria-ii",
      title: "Respiratório II: Trocas Gasosas e Transporte",
      youtubeId: "dQw4w9WgXcQ",
      duration: "17:40",
      description:
        "Difusão O₂/CO₂, curva de dissociação da hemoglobina, efeito Bohr/Haldane.",
    },
    {
      slug: "fisiologia-renal-i",
      title: "Renal I: Nefron, Filtração e Reabsorção",
      youtubeId: "dQw4w9WgXcQ",
      duration: "18:05",
      description:
        "Taxa de filtração glomerular, manejo de sódio/água e transporte tubular.",
    },
    {
      slug: "fisiologia-renal-ii",
      title:
        "Renal II: Regulação Ácido–Base e Sistema Renina–Angiotensina–Aldosterona",
      youtubeId: "dQw4w9WgXcQ",
      duration: "17:55",
      description:
        "Balanço ácido–base, HCO₃⁻ e mecanismos hormonais de controle de PA.",
    },
    {
      slug: "fisiologia-digestoria-i",
      title: "Digestório I: Motilidade e Secreções",
      youtubeId: "dQw4w9WgXcQ",
      duration: "16:35",
      description:
        "Peristaltismo, secreções gástricas/pancreáticas e bile.",
    },
    {
      slug: "fisiologia-digestoria-ii",
      title: "Digestório II: Digestão e Absorção de Nutrientes",
      youtubeId: "dQw4w9WgXcQ",
      duration: "15:50",
      description:
        "Carboidratos, proteínas, lipídios e micronutrientes.",
    },
    {
      slug: "endocrinologia-basica",
      title: "Endócrino: Princípios e Eixos Hipotalâmico–Hipofisários",
      youtubeId: "dQw4w9WgXcQ",
      duration: "18:30",
      description:
        "Tipos de hormônios, receptores, sinalização e eixos HPA/HPG/HPT.",
    },
    {
      slug: "metabolismo-e-insulina-glucagon",
      title: "Metabolismo: Insulina, Glucagon e Controle Glicêmico",
      youtubeId: "dQw4w9WgXcQ",
      duration: "15:45",
      description:
        "Jejum/alimentado, gliconeogênese, glicogênese e papel dos tecidos.",
    },
    {
      slug: "termorregulacao",
      title: "Termorregulação e Balanço Hídrico",
      youtubeId: "dQw4w9WgXcQ",
      duration: "12:50",
      description:
        "Produção/perda de calor, sudorese, vasomotricidade e sede.",
    },
    {
      slug: "fisiologia-reprodutiva",
      title: "Fisiologia Reprodutiva (Masculina e Feminina)",
      youtubeId: "dQw4w9WgXcQ",
      duration: "17:10",
      description:
        "Gametogênese, ciclo menstrual, hormônios e gestação (noções).",
    },
    {
      slug: "integracao-exercicio",
      title: "Integração: Respostas ao Exercício",
      youtubeId: "dQw4w9WgXcQ",
      duration: "16:20",
      description:
        "Ajustes cardiovascular, respiratório e metabólico agudos e crônicos.",
    },
  ],
};

export default FisiologiaHumana;

