"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  _createdAt: string;
  mainImage?: {
    alt?: string;
    url?: string;
  };
  categories?: {
    title: string;
    slug: { current: string };
  }[];
}

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
          date: new Date(post._createdAt).toLocaleDateString("th-TH", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          imgClass: "bg-primary relative",
          image: post.mainImage,
        }))
      : [];

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-blue-600">
          Story
        </span>
        <h2 className="text-4xl md:text-6xl tracking-tight">
          คอนเทนต์เราก็ทำ{" "}
          <span className="text-text-secondary">ยอมได้ที่ไหน</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full max-w-7xl">
        {displayItems.map((item, idx) => {
          const isFirst = idx === 0;

          return (
            <Link
              key={idx}
              href={`/story/${item.slug}`}
              className={isFirst ? "md:col-span-2" : ""}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className={`group cursor-pointer flex flex-col w-full h-full ${
                  isFirst ? "md:flex-row gap-8 md:items-start" : ""
                }`}
              >
                <div
                  className={`w-full aspect-video rounded-3xl overflow-hidden ${item.imgClass}`}
                >
                  {item.image?.url ? (
                    <img
                      src={item.image.url}
                      alt={item.image.alt || item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-600 transition-transform duration-500 group-hover:scale-105" />
                  )}
                </div>
                <div className="p-8 flex flex-col items-start text-left">
                  <span className="text-xl font-[Outfit] text-primary mb-6">
                    {item.tag}
                  </span>
                  <h3 className="text-3xl mb-6 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xl text-text-secondary">
                    {item.date}
                  </span>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="mt-16"
      >
        <button className="px-6 py-2.5 bg-gray-50 text-blue-600 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors">
          View all
          <ChevronDown className="w-4 h-4 text-blue-600" />
        </button>
      </motion.div>
    </section>
  );
}
