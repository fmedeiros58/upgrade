"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Lesson = {
  slug: string;
  title: string;
  duration?: string;
};

type PDFItem = {
  slug: string;
  title: string;
  url?: string;
  pages?: number;
};

type Props = {
  courseSlug: string;
  disciplineSlug: string;
  disciplineTitle: string;
  lessons: Lesson[];
  currentLessonSlug: string;
  pdfs?: PDFItem[];
};

type Tab = "video" | "pdf" | "notes";

export default function DisciplineSidebar({
  courseSlug,
  disciplineSlug,
  disciplineTitle,
  lessons,
  currentLessonSlug,
  pdfs = [],
}: Props) {
  const [tab, setTab] = useState<Tab>("video");

  // ---------- BUSCA ----------
  const [q, setQ] = useState("");
  const filteredLessons = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return lessons;
    return lessons.filter((l) => l.title.toLowerCase().includes(term));
  }, [q, lessons]);

  // ---------- WATCHED ----------
  const watchedKey = useMemo(
    () => `watched:${courseSlug}:${disciplineSlug}`,
    [courseSlug, disciplineSlug]
  );
  const [watched, setWatched] = useState<Record<string, boolean>>({});
  useEffect(() => {
    try {
      const raw = localStorage.getItem(watchedKey);
      if (raw) setWatched(JSON.parse(raw));
    } catch {}
  }, [watchedKey]);
  const toggleWatched = (slug: string) => {
    setWatched((prev) => {
      const nx = { ...prev, [slug]: !prev[slug] };
      try {
        localStorage.setItem(watchedKey, JSON.stringify(nx));
      } catch {}
      return nx;
    });
  };

  // ---------- NOTES ----------
  const notesKey = useMemo(
    () => `notes:${courseSlug}:${disciplineSlug}`,
    [courseSlug, disciplineSlug]
  );
  const [notes, setNotes] = useState("");
  useEffect(() => {
    try {
      const raw = localStorage.getItem(notesKey);
      if (raw) setNotes(raw);
    } catch {}
  }, [notesKey]);
  useEffect(() => {
    const id = setTimeout(() => {
      try {
        localStorage.setItem(notesKey, notes);
      } catch {}
    }, 400);
    return () => clearTimeout(id);
  }, [notes, notesKey]);

  // ---------- UI helpers ----------
  const TabButton = ({
    value,
    children,
  }: {
    value: Tab;
    children: React.ReactNode;
  }) => (
    <button
      onClick={() => setTab(value)}
      className={[
        "rounded-full px-3 py-1 text-sm transition",
        tab === value
          ? "bg-indigo-600 text-white"
          : "bg-slate-100 text-slate-700 hover:bg-slate-200",
      ].join(" ")}
    >
      {children}
    </button>
  );

  return (
    <aside className="lg:sticky lg:top-24">
      <div
        className="
          rounded-2xl border border-slate-200 bg-white
          p-4 max-h-[calc(100vh-140px)] overflow-y-auto
        "
      >
        {/* Header */}
        <h3 className="text-base font-semibold">Aulas — {disciplineTitle}</h3>

        {/* Busca + Abas (em linha e distribuídas) */}
        <div className="mt-3 flex flex-col gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar aula..."
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="flex items-center justify-between gap-2">
            <TabButton value="video">Vídeo</TabButton>
            <TabButton value="pdf">PDF</TabButton>
            <TabButton value="notes">Anotações</TabButton>
          </div>
        </div>

        {/* ==== TAB: VÍDEO ==== */}
        {tab === "video" && (
          <div className="mt-4 space-y-2">
            {filteredLessons.map((l) => {
              const active = l.slug === currentLessonSlug;
              const isWatched = !!watched[l.slug];

              return (
                <div
                  key={l.slug}
                  className={[
                    "relative rounded-xl px-3 py-2 transition group",
                    active
                      ? "bg-indigo-50 ring-1 ring-indigo-200 text-indigo-900"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-800",
                  ].join(" ")}
                >
                  {/* linha inteira clicável vai para a aula */}
                  <Link
                    href={`/courses/${courseSlug}/${disciplineSlug}/${l.slug}`}
                    className="no-underline"
                  >
                    <div className="flex items-start gap-2">
                      {/* Check (assistido) */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleWatched(l.slug);
                        }}
                        title={
                          isWatched
                            ? "Marcar como não assistida"
                            : "Marcar como assistida"
                        }
                        className={[
                          "mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border",
                          isWatched
                            ? "border-emerald-500 bg-emerald-500 text-white"
                            : "border-slate-300 bg-white text-transparent",
                        ].join(" ")}
                        aria-pressed={isWatched}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </button>

                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium leading-snug">
                          {l.title}
                        </div>
                        {l.duration && (
                          <div className="text-xs text-slate-500 mt-0.5">
                            {l.duration}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>

                  {/* Kebab menu (3 pontinhos) */}
                  <div className="absolute right-2 top-2">
                    <MenuKebab
                      items={[
                        {
                          label: "Degravação",
                          onClick: () => toast("Degravação indisponível no momento."),
                        },
                        {
                          label: "Slide",
                          onClick: () => toast("Slides indisponíveis no momento."),
                        },
                        {
                          label: "Áudio da aula",
                          onClick: () => toast("Áudio não disponível."),
                        },
                        "divider",
                        {
                          label: isWatched
                            ? "Desmarcar como assistida"
                            : "Marcar como assistida",
                          onClick: () => toggleWatched(l.slug),
                        },
                        "divider",
                        {
                          label: "Baixar em PDF",
                          onClick: () => toast("PDF não fornecido."),
                        },
                        {
                          label: "Baixar em DOCX",
                          onClick: () => toast("DOCX não fornecido."),
                        },
                      ]}
                    />
                  </div>
                </div>
              );
            })}

            {filteredLessons.length === 0 && (
              <p className="text-sm text-slate-500">
                Nenhuma aula encontrada para “{q}”.
              </p>
            )}
          </div>
        )}

        {/* ==== TAB: PDF ==== */}
        {tab === "pdf" && (
          <div className="mt-4 space-y-2">
            {pdfs.length === 0 && (
              <p className="text-sm text-slate-500">
                Nenhum PDF cadastrado nesta disciplina.
              </p>
            )}
            {pdfs.map((p) => (
              <div
                key={p.slug}
                className="relative rounded-xl px-3 py-2 bg-slate-50 hover:bg-slate-100 transition"
              >
                <a
                  href={p.url ?? "#"}
                  target={p.url ? "_blank" : undefined}
                  rel="noreferrer"
                  className="no-underline"
                >
                  <div className="flex items-start gap-2">
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded border border-slate-300 bg-white text-slate-600"
                      title="PDF"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                      </svg>
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium leading-snug">
                        {p.title}
                      </div>
                      {typeof p.pages === "number" && (
                        <div className="text-xs text-slate-500 mt-0.5">
                          {p.pages} página(s)
                        </div>
                      )}
                    </div>
                  </div>
                </a>

                <div className="absolute right-2 top-2">
                  <MenuKebab
                    items={[
                      {
                        label: "Baixar em PDF",
                        onClick: () => toast("Iniciar download..."),
                      },
                      {
                        label: "Baixar em DOCX",
                        onClick: () => toast("Conversão para DOCX não disponível."),
                      },
                    ]}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==== TAB: ANOTAÇÕES ==== */}
        {tab === "notes" && (
          <div className="mt-4">
            <p className="text-sm text-slate-600 mb-2">
              Suas anotações ficam salvas automaticamente no navegador.
            </p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Digite aqui suas anotações..."
              className="w-full min-h-[240px] rounded-xl border border-slate-300 p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}
      </div>
    </aside>
  );
}

/* ---------- Kebab menu simples (3 pontinhos) ---------- */

function MenuKebab({
  items,
}: {
  items: ({ label: string; onClick: () => void } | "divider")[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onDoc = () => setOpen(false);
    if (open) document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [open]);

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-slate-200"
        title="Mais opções"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 z-20 mt-1 w-48 rounded-xl border border-slate-200 bg-white p-1 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {items.map((it, i) =>
            it === "divider" ? (
              <div key={`div-${i}`} className="my-1 border-t border-slate-200" />
            ) : (
              <button
                key={it.label + i}
                onClick={() => {
                  setOpen(false);
                  it.onClick();
                }}
                className="w-full text-left rounded-lg px-3 py-2 text-sm hover:bg-slate-100"
              >
                {it.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}

/* ---------- Toast mínimo ---------- */
function toast(msg: string) {
  try {
    alert(msg);
  } catch {}
}
