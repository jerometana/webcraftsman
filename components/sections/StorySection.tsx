"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function StorySection() {
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
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
          คอนเทนต์เราก็ทำ{" "}
          <span className="text-text-secondary">ยอมได้ที่ไหน</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full max-w-7xl">
        {[
          {
            tag: "Youtube",
            title: "ควรทำเว็บไซต์ขนาดกี่หน้า แต่ละแบบต่างกันยังไง?",
            date: "11 มีนาคม 2469",
            imgClass: "bg-primary",
          },
          {
            tag: "Youtube",
            title: "เว็บไซต์ยังจำเป็นอยู่ไหมในยุค Social Media",
            date: "11 มีนาคม 2469",
            imgClass: "bg-primary",
          },
          {
            tag: "Youtube",
            title: "เว็บไซต์ยังจำเป็นอยู่ไหมในยุค Social Media",
            date: "11 มีนาคม 2469",
            imgClass: "bg-primary",
          },
          {
            tag: "Youtube",
            title: "เว็บไซต์ยังจำเป็นอยู่ไหมในยุค Social Media",
            date: "11 มีนาคม 2469",
            imgClass: "bg-primary",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
            className="group cursor-pointer flex flex-col"
          >
            <div
              className={`w-full aspect-[16/10] rounded-3xl overflow-hidden ${item.imgClass}`}
            >
              {/* Images would go here */}
            </div>
            <div className="mt-6 flex flex-col items-start text-left">
              <span className="text-xl font-medium text-primary mb-2">
                {item.tag}
              </span>
              <h3 className="text-3xl font-medium mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <span className="text-xl text-gray-400 font-medium">
                {item.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="mt-16"
      >
        <button className="px-6 py-2.5 bg-gray-50 text-blue-600 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors">
          View all
          <ChevronDown className="w-4 h-4 text-blue-600" />
        </button>
      </motion.div>
    </section>
  );
}
