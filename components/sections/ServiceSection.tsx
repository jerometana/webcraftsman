"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CodeIcon, ComponentIcon, ListChecksIcon, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  rotation: string;
  topOffset?: string;
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  rotation,
  topOffset = "0",
}: ServiceCardProps) {
  return (
    <div style={{ marginTop: topOffset }}>
      <div className="sticky top-52">
        <div
          className="mx-auto bg-foreground/90 backdrop-blur-xl h-[600px] aspect-[3/4] rounded-3xl"
          style={{ rotate: rotation }}
        >
          <div className="p-8 pb-16 flex flex-col justify-end text-center h-full">
            <div className="flex justify-center items-center h-full mb-8">
              <Icon className="w-32 h-32 text-primary" />
            </div>
            <h3 className="text-3xl mb-4 font-[Outfit]">{title}</h3>
            <p className="text-text-secondary text-xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const services: ServiceCardProps[] = [
  {
    icon: ComponentIcon,
    title: "UX/UI Design",
    description:
      "ออกแบบประสบการณ์ที่ดึงตัวตนแบรนด์ออกมาให้โดดเด่น และเปลี่ยนผู้เข้าชมให้เป็นลูกค้าที่หลงรักแบรนด์คุณ",
    rotation: "-1deg",
    topOffset: "0",
  },
  {
    icon: CodeIcon,
    title: "Web Development",
    description:
      "ปลุกงานดีไซน์ให้มีชีวิตด้วยการเขียนโค้ดที่ประณีต เว็บไซต์ที่โหลดไว ไร้รอยต่อ และพร้อมทำงานหนักเพื่อขับเคลื่อนการเติบโตให้ธุรกิจของคุณในทุกวินาที",
    rotation: "1deg",
    topOffset: "64rem",
  },
  {
    icon: ListChecksIcon,
    title: "Design Audit",
    description:
      "เจาะลึกเว็บไซต์เดิมของคุณด้วยมุมมองมืออาชีพ วิเคราะห์ทุกจุดที่ขวางทาง Conversion เพื่อเปลี่ยนดีไซน์ที่ติดขัดให้กลายเป็นเครื่องมือปิดการขายที่มีประสิทธิภาพสูงสุด",
    rotation: "-2deg",
    topOffset: "128rem",
  },
];

export default function ServiceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.4"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(16px)", "blur(0px)"],
  );

  return (
    <section ref={sectionRef}>
      {/* Headline: sticky with low z-index so cards scroll over it */}
      <div className="sticky top-0 z-0 px-16 pt-80 pb-[34rem] text-center">
        <motion.h2
          style={{ opacity, filter: blur }}
          className="text-4xl md:text-9xl tracking-tight leading-none"
        >
          งานทำเว็บ
          <br />
          เราพร้อมลุย
        </motion.h2>
      </div>
      {/* Cards: relative z-index above the headline */}
      <div className="relative z-10 flex gap-8 justify-center px-4 pb-80 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
