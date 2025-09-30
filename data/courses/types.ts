// data/courses/types.ts
export type VideoRef = {
  title: string;
  slug: string;
  youtubeId?: string;
  muxPlaybackId?: string;
  vimeoId?: string;
  duration?: string;
  description?: string;
};

export type Subject = {
  title: string;
  slug: string;
  description?: string;
  // aceitamos os dois:
  lessons?: VideoRef[];
  videos?: VideoRef[];

  // opcional: vídeo de capa
  heroVideo?: {
    youtubeId?: string;
    muxPlaybackId?: string;
    vimeoId?: string;
  };
};

export type Course = {
  title: string;
  slug: string;
  description?: string;
  // aceitamos os dois:
  subjects?: Subject[];
  disciplines?: Subject[];
};
