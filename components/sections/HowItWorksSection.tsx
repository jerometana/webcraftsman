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
        <div className="sticky my-48 top-[20rem]">
          <span className="inline-block px-4 py-1.5 mb-4 text-lg font-semibold tracking-widest text-blue-600 uppercase">
            วิธีรับบริการ
          </span>
          <h2 className="text-4xl md:text-6xl tracking-tight leading-tight mb-16">
            ขั้นตอนง่าย ๆ <br />
            <span className="text-text-secondary">ชัดเจนแจ่มแจ้ง</span>
          </h2>
        </div>
      </motion.div>
      <div className="flex flex-col items-end w-full gap-16">
        <div className="sticky top-32">
          <div className="w-md h-[600px] bg-primary -rotate-1 rounded-3xl p-16 text-center flex flex-col justify-between text-white">
            <p className="text-4xl font-[Outfit]">Fill the form</p>
            <p className="text-[128px] font-[Manrope] font-semibold tracking-tighter">
              01
            </p>
            <p className="text-xl">
              เริ่มต้นง่ายๆ เพียงบอกเป้าหมาย และความต้องการของคุณผ่าน
              แบบฟอร์มสั้น ๆ
            </p>
          </div>
        </div>
        <div className="sticky top-32">
          <div className="w-md h-[600px] mt-4 bg-foreground rotate-2 rounded-3xl p-16 text-center flex flex-col justify-between">
            <p className="text-4xl font-[Outfit]">Discovery</p>
            <p className="text-[128px] font-[Manrope] font-semibold tracking-tighter text-primary">
              02
            </p>
            <p className="text-xl text-text-secondary">
              เราออกแบบ Roadmap ที่ผสมผสานงานดีไซน์ และกลยุทธ์การขาย
            </p>
          </div>
        </div>
        <div className="sticky top-32">
          <div className="w-md h-[600px] mt-8 bg-primary -rotate-[1.5deg] rounded-3xl p-16 text-center flex flex-col justify-between text-white">
            <p className="text-4xl font-[Outfit]">Roadmap</p>
            <p className="text-[128px] font-[Manrope] font-semibold tracking-tighter">
              03
            </p>
            <p className="text-xl">
              เราออกแบบ Roadmap ที่ผสมผสานงานดีไซน์ และกลยุทธ์การขาย
            </p>
          </div>
        </div>
        <div className="sticky top-32">
          <div className="w-md h-[600px] mt-12 bg-foreground rounded-3xl p-16 text-center flex flex-col justify-between">
            <p className="text-4xl font-[Outfit]">Craft ’em</p>
            <p className="text-[128px] font-[Manrope] font-semibold tracking-tighter text-primary">
              04
            </p>
            <p className="text-xl text-text-secondary">
              เราออกแบบ Roadmap ที่ผสมผสานงานดีไซน์ และกลยุทธ์การขาย
            </p>
          </div>
        </div>
        <div className="sticky top-32">
          <div className="w-md h-[600px] mt-16 bg-primary -rotate-[1.5deg] rounded-3xl p-16 text-center flex flex-col justify-between text-white">
            <p className="text-4xl font-[Outfit]">Launch</p>
            <p className="text-[128px] font-[Manrope] font-semibold tracking-tighter">
              05
            </p>
            <p className="text-xl">
              ส่งมอบเว็บไซต์ พร้อมดูแลเป็นพาร์ทเนอร์ เคียงข้างคุณตลอดไป
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
