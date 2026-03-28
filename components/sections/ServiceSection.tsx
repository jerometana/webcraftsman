"use client";

import { motion } from "motion/react";

export default function ServiceSection() {
  return (
    <section className="py-32 px-4 grid grid-cols-3 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="sticky top-64 px-8">
          <span className="inline-block px-4 py-1.5 mb-4 text-md font-semibold tracking-widest text-blue-600 uppercase">
            บริการของเรา
          </span>
          <h2 className="text-4xl md:text-6xl tracking-tight leading-tight mb-16">
            งานทำเว็บ <br />
            <span className="text-text-secondary">เราพร้อมลุย</span>
          </h2>
        </div>
      </motion.div>
      <div className="flex flex-col col-span-2 gap-16">
        <div className="flex gap-8">
          <div className="w-full">
            <div className="sticky top-40 bg-foreground h-[600px] rounded-3xl"></div>
          </div>
          <div className="w-full">
            <div className="px-6 py-8 sticky top-80">
              <h3 className="text-3xl mb-4 font-[Outfit]">
                UX/UI Design
              </h3>
              <p className="text-text-secondary text-xl">
                การจัดวาง ลูกเล่น อนิเมชั่น เราจัดให้หมด
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="bg-foreground w-full h-[600px] rounded-3xl"></div>
          <div className="w-full">
            <div className="px-6 py-8 sticky top-80">
              <h3 className="text-3xl mb-4 font-[Outfit]">
                Web Development
              </h3>
              <p className="text-text-secondary text-xl">
                การจัดวาง ลูกเล่น อนิเมชั่น เราจัดให้หมด
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="bg-foreground w-full h-[600px] rounded-3xl"></div>
          <div className="w-full">
            <div className="px-6 py-8 sticky top-80">
              <h3 className="text-3xl mb-4 font-[Outfit]">
                Design Audit
              </h3>
              <p className="text-text-secondary text-xl">
                การจัดวาง ลูกเล่น อนิเมชั่น เราจัดให้หมด
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
