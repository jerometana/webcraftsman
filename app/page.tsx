"use client";

import { motion } from "motion/react";
import ContactForm from "@/components/ContactForm";
import {
  ArrowRight,
  Code,
  Mail,
  Zap,
  Database,
  MousePointer2,
} from "lucide-react";
import ScrollExpansion from "@/components/ScrollExpansion";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center pt-30 px-5 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-md font-semibold tracking-widest text-blue-600 uppercase">
            The Ultimate Starter Template
          </span>
          <h1 className="text-6xl md:text-[80px] font-medium tracking-tight leading-tight mb-8">
            เล่าเรื่องผ่านดีไซน์ <br />
            <span className="text-text-secondary">
              เพื่อผลลัพธ์ที่จับต้องได้
            </span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-6 py-4 bg-primary text-white rounded-full font-medium text-2xl hover:bg-primary-hover transition-all flex items-center gap-2 group">
              เริ่มต้นรับบริการ
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Why us Grid */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl m-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-md font-semibold tracking-widest text-blue-600 uppercase">
            ทำไมต้องเรา
          </span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-16">
            สะกดทุกสายตา
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <div className="w-full bg-foreground aspect-square rounded-3xl"></div>
            <div className="w-full px-6 py-8 text-center">
              <h3 className="text-3xl font-medium mb-4">ดีไซน์งานละเอียด</h3>
              <p className="text-text-secondary text-xl">
                การจัดวาง ลูกเล่น อนิเมชั่น เราจัดให้หมด
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="w-full bg-foreground aspect-square rounded-3xl"></div>
            <div className="w-full px-6 py-8 text-center">
              <h3 className="text-3xl font-medium mb-4">ดึงตัวตนแบรนด์</h3>
              <p className="text-text-secondary text-xl">
                สะท้อนจิตวิญญาณของธุรกิจ
              </p>
            </div>
          </div>
          <div>
            <div className="w-full bg-foreground aspect-square rounded-3xl"></div>
            <div className="w-full px-6 py-8 text-center">
              <h3 className="text-3xl font-medium mb-4">คุณภาพคับจอ</h3>
              <p className="text-text-secondary text-xl">
                ลื่นไหลและทรงพลังบนทุกอุปกรณ์
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 grid grid-cols-3 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="sticky top-64">
            <span className="inline-block px-4 py-1.5 mb-4 text-md font-semibold tracking-widest text-blue-600 uppercase">
              ทำไมต้องเรา
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-16">
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
                <h3 className="text-3xl font-medium mb-4">ดีไซน์งานละเอียด</h3>
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
                <h3 className="text-3xl font-medium mb-4">ดีไซน์งานละเอียด</h3>
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
                <h3 className="text-3xl font-medium mb-4">ดีไซน์งานละเอียด</h3>
                <p className="text-text-secondary text-xl">
                  การจัดวาง ลูกเล่น อนิเมชั่น เราจัดให้หมด
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollExpansion>
        <h2 className="text-4xl md:text-[80px] font-medium mb-6">
          ให้ผลงาน
          <br />
          เป็นเครื่องพิสูจน์
        </h2>
      </ScrollExpansion>

      {/* Projects Grid */}
      <section className="p-8 pb-30 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {[
            {
              name: "Data Echooo",
              logoClass:
                "bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold leading-tight tracking-tighter",
              logoText: "Data\nEchooo",
            },
            { name: "Amazing Thailand", logoClass: "bg-gray-100" },
            { name: "Data Echooo", logoClass: "bg-gray-100" },
            { name: "Data Echooo", logoClass: "bg-gray-100" },
            { name: "Data Echooo", logoClass: "bg-gray-100" },
            { name: "Data Echooo", logoClass: "bg-gray-100" },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-full aspect-[4/5] bg-gray-50 rounded-3xl"></div>
              <div className="flex items-center gap-6 px-2">
                <div
                  className={`w-16 h-16 rounded-full shrink-0 ${project.logoClass}`}
                >
                  {project.logoText && (
                    <div className="text-center">
                      {project.logoText.split("\n").map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  )}
                </div>
                <span className="font-medium text-2xl">{project.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to build <br />
              <span className="text-blue-600">something amazing?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              This template is designed to give you a head start on your next
              project. All the tools you need are pre-configured and ready to
              use.
            </p>
            <ul className="space-y-4">
              {[
                "Optimized for Performance",
                "SEO Friendly",
                "Fully Responsive",
                "Developer Experience Focused",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-medium text-gray-700"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Modern Tech Stack Starter. Built
          with passion.
        </p>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
