"use client";

import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollExpansionProps {
  children?: ReactNode;
  containerClassName?: string;
  contentClassName?: string;
}

export default function ScrollExpansion({
  children,
  containerClassName = "bg-primary flex flex-col items-center justify-center text-white relative shadow-2xl overflow-hidden",
  contentClassName = "z-10 text-center px-4 max-w-3xl",
}: ScrollExpansionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // ใช้ useScroll ของ Framer Motion เพื่อติดตามการ Scroll ภายใน Section นี้
  // เปลี่ยน offset: ["start end", "end end"] หมายถึงเริ่มนับ 0 ทันทีที่ขอบบนของกล่องเข้ามาในจอ (จากขอบล่าง)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  // กำหนดจุดสิ้นสุดของการขยายที่ 1/6 ของระยะ Scroll ทั้งหมด
  const expandEnd = 2 / 3;

  // แปลงค่า Progress (0 ถึง 1) ให้เป็น Style ที่ต้องการ
  // ช่วงจาก 0 ถึง 1/6 จะเปลี่ยนจาก 80% เป็น 100% (หลังจาก 1/6 จะค้างที่ 100% ไปจนจบ)
  const boxWidth = useTransform(
    scrollYProgress,
    [0, expandEnd],
    ["80%", "100%"],
  );
  const boxHeight = useTransform(
    scrollYProgress,
    [0, expandEnd],
    ["80vh", "100vh"],
  );
  const borderRadius = useTransform(
    scrollYProgress,
    [0, expandEnd],
    ["40px", "0px"],
  );

  // ให้เนื้อหาด้านในโชว์ขึ้นมาเมื่อขยายไปได้ 80% ของระยะ expandEnd
  const contentStart = expandEnd * 0.8;
  const contentOpacity = useTransform(
    scrollYProgress,
    [contentStart, expandEnd],
    [0, 1],
  );
  const contentTranslateY = useTransform(
    scrollYProgress,
    [contentStart, expandEnd],
    [20, 0],
  );

  return (
    <div className="overflow-x-hidden">
      {/* --- Section ที่ทำ Scroll Expand Effect --- */}
      <section ref={sectionRef} className="h-screen relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* ใช้ motion.div และแนบ Style ที่ได้จาก useTransform */}
          <motion.div
            className={containerClassName}
            style={{
              width: boxWidth,
              height: boxHeight,
              borderRadius: borderRadius,
            }}
          >
            {/* เนื้อหาด้านในใช้ motion.div เช่นกัน */}
            <motion.div
              className={contentClassName}
              style={{
                opacity: contentOpacity,
                y: contentTranslateY,
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
