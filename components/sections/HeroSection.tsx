"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center pt-30 px-5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl"
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-md font-semibold tracking-widest text-blue-600 uppercase">
          The Ultimate Starter Template
        </span>
        <h1 className="text-6xl md:text-[80px] font-medium tracking-tight leading-tight mb-8">
          เล่าเรื่องผ่านดีไซน์ <br />
          <span className="text-text-secondary">
            เพื่อผลลัพธ์ที่จับต้องได้
          </span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="px-6 py-4 bg-primary text-white rounded-full font-medium text-2xl hover:bg-primary-hover transition-all flex items-center gap-2 group">
            เริ่มต้นรับบริการ
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
