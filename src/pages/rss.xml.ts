import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { SITE_TITLE } from '../consts';
import { getPublishedPosts, postHref } from '../utils/posts';

export const GET: APIRoute = async (context) => {
	const posts = await getPublishedPosts();

	const items = [];
	for (const post of posts) {
		if (!post.data.publishedAt) continue;
		items.push({
			title: post.data.title,
			description: post.data.excerpt,
			pubDate: post.data.publishedAt,
			link: postHref(post.data),
		});
	}

	return rss({
		title: SITE_TITLE,
		description: SITE_TITLE,
		site: context.site!,
		items,
	});
};
