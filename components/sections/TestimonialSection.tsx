"use client";

import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="w-full p-16">
            <Image
              src="/quote.svg"
              alt="Quote"
              width={80}
              height={80}
              className="mb-8"
            />
            <p className="mb-16 text-[40px] font-medium leading-tight">
              เข้าใจใน branding ของเราจริง ๆ <br />
              <span className="text-text-secondary">
                ทำให้เว็บไซต์ที่ออกมา ไม่ใช่แค่สวย แต่ยังสะท้อนตัวตน
                ของแบรนด์ได้อย่างชัดเจน
              </span>
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-full"></div>
              <div className="font-medium font-[Outfit] text-2xl">
                <p className="mb-1">Jatawat Xie</p>
                <p className="text-xl text-text-secondary">
                  CEO, Data Echooo
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full bg-foreground aspect-[4/5] rounded-3xl p-8"></div>
        </div>
      </div>
    </section>
  );
}
