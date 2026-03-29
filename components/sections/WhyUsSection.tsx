"use client";

import { motion } from "motion/react";

const items = [
  {
    title: "ดีไซน์งานละเอียด",
    description: "การจัดวาง ลูกเล่น อนิเมชั่น เราจัดให้หมด",
    className: "",
  },
  {
    title: "ดึงตัวตนแบรนด์",
    description: "สะท้อนจิตวิญญาณของธุรกิจ",
    className: "md:mt-8",
  },
  {
    title: "คุณภาพคับจอ",
    description: "ลื่นไหลและทรงพลังบนทุกอุปกรณ์",
    className: "",
  },
];

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
        <span className="inline-block px-4 py-1.5 mb-4 text-lg font-semibold tracking-widest text-primary uppercase">
          เราดียังไง
        </span>
        <h2 className="text-5xl mdtext-6xl tracking-tight leading-tight mb-12 md:mb-16">
          สะกดทุกสายตา
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-16">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 100, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: index * 0.2, duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className={
              "flex flex-col sm:flex-row lg:flex-col items-center" +
              item.className
            }
          >
            <div className="w-full bg-foreground aspect-square rounded-3xl" />
            <div className="w-full m-auto px-6 py-8 text-center sm:text-start lg:text-center">
              <h3 className="text-2xl md:text-3xl mb-2 md:mb-4">
                {item.title}
              </h3>
              <p className="text-text-secondary text-lg md:text-xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
