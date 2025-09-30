"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Player from "@/components/Player";

type Lesson = {
  slug: string;
  title: string;
  youtubeId?: string;
  muxPlaybackId?: string;
  vimeoId?: string;
  duration?: string;
  description?: string;
};

type Props = {
  courseSlug: string;
  disciplineSlug: string;
  lessons: Lesson[];
  currentLessonSlug: string;
};

export default function PlayerWithRouting({
  courseSlug,
  disciplineSlug,
  lessons,
  currentLessonSlug,
}: Props) {
  const router = useRouter();

  // garante um índice válido
  const safeIndex = useMemo(() => {
    const i = lessons.findIndex((l) => l.slug === currentLessonSlug);
    return i >= 0 ? i : 0;
  }, [lessons, currentLessonSlug]);

  const { current, prev, next } = useMemo(() => {
    const idx = Math.max(0, Math.min(safeIndex, lessons.length - 1));
    return {
      current: lessons[idx],
      prev: idx > 0 ? lessons[idx - 1] : undefined,
      next: idx < lessons.length - 1 ? lessons[idx + 1] : undefined,
    };
  }, [lessons, safeIndex]);

  const toHref = (slug: string) =>
    `/courses/${courseSlug}/${disciplineSlug}/${slug}`;

  if (!current) {
    // opcional: redirecionar para a primeira aula
    if (lessons[0]) router.replace(toHref(lessons[0].slug));
    return null;
  }

  return (
    <Player
      title={current.title}
      muxPlaybackId={current.muxPlaybackId}
      youtubeId={current.youtubeId}
      vimeoId={current.vimeoId}
      onPrev={prev ? () => router.push(toHref(prev.slug)) : undefined}
      onNext={next ? () => router.push(toHref(next.slug)) : undefined}
    />
  );
}
