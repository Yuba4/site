import { getEmDashCollection } from 'emdash';
import type { Post } from '../../.emdash/types';

export type { Post };

export async function getPublishedPosts() {
  const { entries } = await getEmDashCollection<'posts', Post>(
    'posts',
    import.meta.env.DEV ? {} : { status: 'published' }
  );
  return entries.sort(
    (a, b) => (b.data.publishedAt?.getTime() ?? 0) - (a.data.publishedAt?.getTime() ?? 0)
  );
}

export function postHref(post: Post): string {
  return `/blog/${post.slug ?? post.id}/`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Tokyo'
  });
}

export function toDateAttr(date: Date): string {
  return date.toISOString().slice(0, 10);
}
