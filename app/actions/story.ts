"use server";

import { getPaginatedPosts } from "@/lib/sanity";

export async function fetchMoreStories(start: number, limit: number = 6) {
  const posts = await getPaginatedPosts(start, limit);

  if (!posts || posts.length === 0) return [];

  return posts.map((post) => ({
    tag: post.categories?.[0]?.title || "Blog",
    title: post.title,
    slug: post.slug?.current,
    date: new Date(post.publishedAt).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    imgClass: "bg-primary relative",
    image: post.mainImage,
  }));
}
