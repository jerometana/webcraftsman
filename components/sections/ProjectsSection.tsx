"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section className="p-8 pb-30 mx-auto bg-black">
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
            <div className="w-full aspect-[4/5] rounded-3xl overflow-clip">
              <Image
                src="/projects/dataechooo.png"
                alt="Project 1"
                width={800}
                height={800}
              />
            </div>
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
              <span className="font-medium font-[Outfit] text-white text-2xl">
                {project.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
