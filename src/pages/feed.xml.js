import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import pkg from '../../package.json' with { type: 'json' };

export async function GET(context) {
  const posts = (await getCollection("post"))
    .sort((a, b) => {
      return new Date(b.data.dateCreated) - new Date(a.data.dateCreated);
    })
    .slice(0, 10);

  return rss({
    title: pkg.name
      .split(/[\W+]/)
      .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
      .join(" "),
    description: pkg.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `${import.meta.env.BASE_URL}posts/${post.id}/`,
      pubDate: post.data.dateCreated,
    })),
    customData: `<language>en-US</language>`,
  });
}
