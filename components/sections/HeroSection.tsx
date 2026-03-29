"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center pt-30 px-5 overflow-hidden">
      <div className="text-center max-w-4xl">
        <span className="inline-block px-4 py-1.5 mb-6 text-xl tracking-wider text-primary uppercase">
          ออกแบบและพัฒนาเว็บไซต์สมัยใหม่
        </span>
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-[80px] tracking-tight leading-tight mb-4"
        >
          เล่าเรื่องผ่านดีไซน์ <br />
          <span className="text-text-secondary">เพื่อผลลัพธ์ที่จับต้องได้</span>
        </motion.h1>
        <p className="text-text-secondary text-2xl mb-16">
          พรีเมียม ลื่นไหล และปิดการขายได้จริง
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="px-6 py-4 bg-primary text-white rounded-full text-2xl hover:bg-primary-hover transition-all flex items-center gap-2 group">
            เริ่มต้นรับบริการ
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
