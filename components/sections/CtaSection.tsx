"use client";

import { motion } from "motion/react";

export default function CtaSection() {
  return (
    <section className="p-8 pb-0">
      <div className="flex flex-col items-center bg-primary rounded-4xl pt-48 h-[80vh] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 64, filter: "blur(16px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-8xl text-center"
        >
          เริ่มได้เลย
          <br />
          เราพร้อมมาก
        </motion.h2>
      </div>
    </section>
  );
}
