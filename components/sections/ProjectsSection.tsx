"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const projects = [
  {
    name: "Data Echooo",
    image: "/projects/data-echooo/website.png",
    logo: "/projects/data-echooo/logo.png",
  },
  {
    name: "Amazing Friend",
    image: "/projects/amazing-friend/website.png",
    logo: "/projects/amazing-friend/logo.png",
  },
  {
    name: "Data Echooo",
    image: "/projects/data-echooo/website.png",
    logo: "/projects/data-echooo/logo.png",
  },
  {
    name: "Amazing Friend",
    image: "/projects/amazing-friend/website.png",
    logo: "/projects/amazing-friend/logo.png",
  },
  // {
  //   name: "Data Echooo",
  //   image: "/projects/data-echooo/website.png",
  //   logo: "/projects/data-echooo/logo.png",
  // },
  // {
  //   name: "Amazing Friend",
  //   image: "/projects/amazing-friend/website.png",
  //   logo: "/projects/amazing-friend/logo.png",
  // },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section id="project" ref={ref} className="p-8 pb-30 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <Image
                src={project.image}
                alt={project.name}
                width={800}
                height={800}
                className="w-full aspect-[9/16] object-cover object-top rounded-3xl overflow-clip bg-foreground border border-gray-300"
              />
            </div>
            <div className="flex items-center gap-6 p-4">
              <div
                className={`w-16 h-16 rounded-full overflow-clip shrink-0  border border-gray-300`}
              >
                <Image
                  src={project.logo}
                  alt="Project 1"
                  width={800}
                  height={800}
                />
              </div>
              <span className="font-[Outfit] text-2xl">{project.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
