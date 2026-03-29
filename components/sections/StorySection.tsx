"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { StoryCard } from "../StoryCard";
import { Post } from "@/lib/sanity";

interface StorySectionProps {
  posts?: Post[];
}

export default function StorySection({ posts = [] }: StorySectionProps) {
  const displayItems =
    posts.length > 0
      ? posts.map((post) => ({
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
        }))
      : [];

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto flex flex-col items-start">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 mx-auto"
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-xl font-[Outfit] font-semibold text-primary">
          Story
        </span>
        <h2 className="text-5xl md:text-6xl tracking-tight leading-tight">
          คอนเทนต์เราก็ทำ{" "}
          <span className="text-text-secondary">ยอมได้ที่ไหน</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full max-w-7xl">
        {displayItems.map((item, idx) => {
          const isFirst = idx === 0;

          return (
            <StoryCard key={idx} item={item} idx={idx} isFirst={isFirst} />
          );
        })}
      </div>

      {/* <div className="w-full grid grid-cols-3 gap-8 mt-16">
        <div>
          <div className="aspect-[9/14] w-full rounded-4xl bg-foreground"></div>
          <div className="p-8 text-2xl">ฟหกด</div>
        </div>
        <div>
          <div className="aspect-[9/14] w-full rounded-4xl bg-foreground"></div>
          <div className="p-8 text-2xl">ฟหกด</div>
        </div>
        <div>
          <div className="aspect-[9/14] w-full rounded-4xl bg-foreground"></div>
          <div className="p-8 text-2xl">ฟหกด</div>
        </div>
      </div> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="mt-16 mx-auto"
      >
        <Link
          href="/story"
          className="px-4 py-3 bg-gray-50 text-primary text-base rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          ดูทั้งหมด
        </Link>
      </motion.div>
    </section>
  );
}
