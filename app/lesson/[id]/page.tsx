import Player from "@/components/Player";

export default function LessonPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Aula {params.id}</h1>
      <Player title={`Aula ${params.id}`} vimeoId="000000000" />
      <div className="card">
        <h2 className="text-xl font-semibold mb-2">Resumo</h2>
        <p className="text-slate-300">Coloque aqui tópicos da aula, materiais de apoio e referências.</p>
      </div>
    </div>
  );
}
