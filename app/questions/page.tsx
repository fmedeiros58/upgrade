import QuestionCard from "@/components/QuestionCard";

const data = [
  { id: 1, stem: "Qual é a principal causa de infarto agudo do miocárdio?", options: ["Trombo em artéria coronária", "Vasoespasmo difuso", "Miocardite viral", "Dissecção de aorta"], answer: 0, tip: "A ruptura de placa aterosclerótica com trombose é o mecanismo mais comum."},
  { id: 2, stem: "Em choque séptico, qual a primeira escolha de vasopressor?", options: ["Dopamina", "Vasopressina", "Noradrenalina", "Adrenalina"], answer: 2, tip: "Recomendação das diretrizes mais atuais."},
  { id: 3, stem: "Score de Glasgow mínimo e máximo?", options: ["1–10", "3–15", "0–14", "2–12"], answer: 1 }
];

export default function QuestionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Banco de Questões (demo)</h1>
      <p className="text-slate-300">Exemplo simples. Depois conectamos ao banco (Supabase) com filtros por tema/banca.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {data.map(q => <QuestionCard key={q.id} q={q} />)}
      </div>
    </div>
  );
}
