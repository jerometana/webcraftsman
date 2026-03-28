"use client";

import { urlFor } from "@/lib/sanity";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function StoryCard({
  item,
  idx,
  isFirst,
}: {
  item: {
    tag: string;
    title: string;
    slug: string;
    date: string;
    imgClass: string;
    image:
      | {
          url?: string | undefined;
          alt?: string | undefined;
        }
      | undefined;
  };
  idx: number;
  isFirst: boolean;
}) {
  const imageUrl = item.image
    ? urlFor(item.image).width(800).height(450).url()
    : "/placeholder-image.svg";

  return (
    <Link
      key={idx}
      href={`/story/${item.slug}`}
      className={isFirst ? "md:col-span-2" : ""}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
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
          <Image
            src={imageUrl}
            alt={item.image?.alt || item.title}
            width={500}
            height={500}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-8 flex flex-col items-start text-left">
          <span className="text-xl font-[Outfit] text-primary mb-6">
            {item.tag}
          </span>
          <h3 className="text-3xl mb-6 leading-snug group-hover:text-primary-hover transition-colors">
            {item.title}
          </h3>
          <span className="text-xl text-text-secondary">{item.date}</span>
        </div>
      </motion.div>
    </Link>
  );
}
