"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  CodeIcon,
  ComponentIcon,
  ListChecksIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  type LucideIcon,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div style={{ marginTop: isDesktop ? topOffset : "0" }}>
      <div className="sticky top-52">
        <div
          className="mx-auto max-w-sm bg-foreground/90 backdrop-blur-xl w-full aspect-[3/4] rounded-3xl"
          style={{ rotate: isDesktop ? rotation : "0deg" }}
        >
          <div className="p-4 pb-8 xl:p-8 xl:pb-16 flex flex-col justify-end text-center h-full">
            <div className="flex justify-center items-center h-full mb-8">
              <Icon className="w-16 h-16 xl:w-24 xl:h-24 text-primary" />
            </div>
            <h3 className="text-2xl xl:text-3xl mb-4 font-[Outfit]">{title}</h3>
            <p className="text-text-secondary text-base xl:text-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col bg-foreground rounded-3xl gap-6 select-none cursor-grab active:cursor-grabbing">
      <div className="w-full py-24 flex items-center justify-center">
        <Icon className="w-16 h-16 text-primary" />
      </div>
      <div className="flex flex-col gap-2 px-8 pb-8">
        <h3 className="text-2xl font-[Outfit] text-text-primary">{title}</h3>
        <p className="text-text-secondary text-lg w-full leading-relaxed">
          {description}
        </p>
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
      "ปลุกงานดีไซน์ให้มีชีวิตด้วยการเขียนโค้ดที่ประณีต เว็บไซต์ที่โหลดไว ไร้รอยต่อ",
    rotation: "1deg",
    topOffset: "64rem",
  },
  {
    icon: ListChecksIcon,
    title: "Design Audit",
    description:
      "เจาะลึกเว็บไซต์เดิมของคุณด้วยมุมมองมืออาชีพ วิเคราะห์ทุกจุดที่ขวางทาง Conversion",
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
    <section id="service" ref={sectionRef}>
      {/* Headline: sticky with low z-index so cards scroll over it */}
      <div className="lg:sticky top-0 z-0 px-8 lg:px-16 pb-12 pt-20 lg:pt-80 lg:pb-[34rem] text-center">
        <motion.h2
          style={{ opacity, filter: blur }}
          className="text-5xl md:text-9xl tracking-tight leading-none"
        >
          งานทำเว็บ
          <br />
          เราพร้อมลุย
        </motion.h2>
      </div>
      {/* Desktop Cards: relative z-index above the headline */}
      <div className="relative z-10 hidden lg:grid grid-cols-3 gap-8 justify-center px-16 pb-80 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden relative z-10 pl-8 pb-32 overflow-hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          className="overflow-visible"
        >
          {services.map((service) => (
            <SwiperSlide key={service.title}>
              <MobileServiceCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-end gap-3 mt-12 pr-8">
          <button className="swiper-button-prev-custom w-14 h-14 rounded-full bg-foreground/[0.05] flex items-center justify-center transition-colors hover:bg-foreground/[0.08] [&.swiper-button-disabled]:opacity-20 [&.swiper-button-disabled]:cursor-not-allowed">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button className="swiper-button-next-custom w-14 h-14 rounded-full bg-foreground/[0.05] flex items-center justify-center transition-colors hover:bg-foreground/[0.08] [&.swiper-button-disabled]:opacity-20 [&.swiper-button-disabled]:cursor-not-allowed">
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
