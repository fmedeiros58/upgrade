"use client";
import { useState } from "react";

type Q = { id: number; stem: string; options: string[]; answer: number; tip?: string };

export default function QuestionCard({ q }: { q: Q }) {
  const [choice, setChoice] = useState<number | null>(null);
  const correct = choice !== null && choice === q.answer;
  return (
    <div className="card space-y-3">
      <p className="font-medium">{q.stem}</p>
      <ul className="space-y-2">
        {q.options.map((opt, i) => (
          <li key={i}>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name={`q-${q.id}`}
                onChange={() => setChoice(i)}
                className="accent-indigo-600"
              />
              <span>{opt}</span>
            </label>
          </li>
        ))}
      </ul>
      {choice !== null && (
        <div className={`rounded-xl p-3 ${correct ? "bg-emerald-900/40" : "bg-rose-900/40"}`}>
          {correct ? "✅ Correto!" : `❌ Incorreto. Resposta: ${String.fromCharCode(65 + q.answer)}`}
          {q.tip && <p className="text-slate-300 mt-2">💡 {q.tip}</p>}
        </div>
      )}
    </div>
  );
}
