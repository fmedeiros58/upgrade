// data/courses/types.ts

export interface Video {
  slug: string;
  title: string;
  youtubeId?: string;
  muxPlaybackId?: string;
  vimeoId?: string;
  duration?: string;
  description?: string;
}

export interface Discipline {
  slug: string;
  title: string;
  description?: string;
  heroVideo?: { youtubeId?: string; muxPlaybackId?: string; vimeoId?: string };
  lessons: Video[]; // também será lido como "videos" no front
}

export interface Course {
  slug: string;
  title: string;
  description?: string;
  disciplines: Discipline[]; // também será lido como "subjects" no front
}

// ---- helpers usados nos seus módulos (makeDiscipline/makeCourse)
const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function makeDiscipline(
  title: string,
  description?: string,
  heroVideo?: { youtubeId?: string; muxPlaybackId?: string; vimeoId?: string },
  lessons: Video[] = []
): Discipline {
  return { slug: slugify(title), title, description, heroVideo, lessons };
}

export function makeCourse(
  title: string,
  disciplines: Discipline[],
  description?: string
): Course {
  return { slug: slugify(title), title, description, disciplines };
}
