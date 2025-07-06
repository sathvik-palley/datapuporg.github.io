import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf();
  });

  return rss({
    title: 'DataPup Blog',
    description: 'Updates, tutorials, and insights from the DataPup team',
    site: context.site,
    items: sortedPosts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.pubDate),
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}