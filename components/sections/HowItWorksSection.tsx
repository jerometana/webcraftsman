"use client";

import { motion } from "motion/react";

export default function HowItWorksSection() {
  return (
    <section className="py-32 max-w-7xl flex px-4 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <div className="sticky top-[20rem]">
          <span className="inline-block px-4 py-1.5 mb-4 text-md font-semibold tracking-widest text-blue-600 uppercase">
            วิธีรับบริการ
          </span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-16">
            ขั้นตอนง่าย ๆ <span className="text-text-secondary">ชัดเจน</span>
          </h2>
        </div>
      </motion.div>
      <div className="flex flex-col items-end w-full gap-16">
        <div className="sticky top-32">
          <div className="w-md h-[600px] bg-primary -rotate-1 rounded-3xl"></div>
        </div>
        <div className="sticky top-32">
          <div className="w-md h-[600px] mt-4 bg-foreground rotate-2 rounded-3xl"></div>
        </div>
        <div className="sticky top-32">
          <div className="w-md h-[600px] mt-8 bg-primary -rotate-[1.5deg] rounded-3xl"></div>
        </div>
        <div className="sticky top-32">
          <div className="w-md h-[600px] mt-12 bg-foreground rounded-3xl"></div>
        </div>
        <div className="sticky top-32">
          <div className="w-md h-[600px] mt-16 bg-primary -rotate-[1.5deg] rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
}
