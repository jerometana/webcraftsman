"use client";

import { motion } from "motion/react";

interface StepCardProps {
  step: string;
  title: string;
  description: string;
  variant?: "primary" | "foreground";
  rotation?: string;
  topOffset?: string;
}

function StepCard({
  step,
  title,
  description,
  variant = "primary",
  rotation = "0deg",
  topOffset = "0",
}: StepCardProps) {
  const isPrimary = variant === "primary";

  return (
    <div className="sticky top-32">
      <div
        className={`w-md h-[600px] rounded-3xl p-16 text-center flex flex-col justify-between backdrop-blur-xl ${
          isPrimary ? "bg-primary text-white" : "bg-foreground/90"
        }`}
        style={{ rotate: rotation, marginTop: topOffset }}
      >
        <p className="text-4xl font-[Outfit]">{title}</p>
        <p
          className={`text-[128px] font-[Manrope] font-semibold tracking-tighter ${
            isPrimary ? "" : "text-primary"
          }`}
        >
          {step}
        </p>
        <p className={`text-xl ${isPrimary ? "" : "text-text-secondary"}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

const steps: Omit<StepCardProps, "rotation" | "topOffset">[] = [
  {
    step: "01",
    title: "Fill the form",
    description:
      "เริ่มต้นง่ายๆ เพียงบอกเป้าหมาย และความต้องการของคุณผ่าน แบบฟอร์มสั้น ๆ",
    variant: "primary",
  },
  {
    step: "02",
    title: "Discovery",
    description: "เราออกแบบ Roadmap ที่ผสมผสานงานดีไซน์ และกลยุทธ์การขาย",
    variant: "foreground",
  },
  {
    step: "03",
    title: "Roadmap",
    description: "เราออกแบบ Roadmap ที่ผสมผสานงานดีไซน์ และกลยุทธ์การขาย",
    variant: "primary",
  },
  {
    step: "04",
    title: "Craft 'em",
    description: "เราออกแบบ Roadmap ที่ผสมผสานงานดีไซน์ และกลยุทธ์การขาย",
    variant: "foreground",
  },
  {
    step: "05",
    title: "Launch",
    description: "ส่งมอบเว็บไซต์ พร้อมดูแลเป็นพาร์ทเนอร์ เคียงข้างคุณตลอดไป",
    variant: "primary",
  },
];

const rotations = ["-1deg", "2deg", "-1.5deg", "0deg", "-1.5deg"];
const topOffsets = ["0", "1rem", "2rem", "3rem", "4rem"];

export default function HowItWorksSection() {
  return (
    <section className="py-32 max-w-7xl flex px-4 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <div className="sticky my-48 top-[20rem]">
          <span className="inline-block px-4 py-1.5 mb-4 text-lg font-semibold tracking-widest text-primary uppercase">
            วิธีรับบริการ
          </span>
          <h2 className="text-4xl md:text-6xl tracking-tight leading-tight mb-16">
            ขั้นตอนง่าย ๆ <br />
            <span className="text-text-secondary">ชัดเจนแจ่มแจ้ง</span>
          </h2>
        </div>
      </motion.div>
      <div className="flex flex-col items-end w-full gap-16">
        {steps.map((step, i) => (
          <StepCard
            key={step.step}
            {...step}
            rotation={rotations[i]}
            topOffset={topOffsets[i]}
          />
        ))}
      </div>
    </section>
  );
}
