"use client";

import { motion } from "motion/react";

export default function WhyUsSection() {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-4xl m-auto"
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-md font-semibold tracking-widest text-blue-600 uppercase">
          เราดียังไง
        </span>
        <h2 className="text-4xl md:text-6xl tracking-tight leading-tight mb-16">
          สะกดทุกสายตา
        </h2>
      </motion.div>
      <div className="grid grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full bg-foreground aspect-square rounded-3xl"></div>
          <div className="w-full px-6 py-8 text-center">
            <h3 className="text-3xl mb-4">ดีไซน์งานละเอียด</h3>
            <p className="text-text-secondary text-xl">
              การจัดวาง ลูกเล่น อนิเมชั่น เราจัดให้หมด
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="w-full bg-foreground aspect-square rounded-3xl"></div>
          <div className="w-full px-6 py-8 text-center">
            <h3 className="text-3xl mb-4">ดึงตัวตนแบรนด์</h3>
            <p className="text-text-secondary text-xl">
              สะท้อนจิตวิญญาณของธุรกิจ
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full bg-foreground aspect-square rounded-3xl"></div>
          <div className="w-full px-6 py-8 text-center">
            <h3 className="text-3xl mb-4">คุณภาพคับจอ</h3>
            <p className="text-text-secondary text-xl">
              ลื่นไหลและทรงพลังบนทุกอุปกรณ์
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
