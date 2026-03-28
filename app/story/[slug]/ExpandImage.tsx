"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function ExpandImage({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 0%"],
  });

  // Calculate dynamic properties based on scroll position
  // Starts with max-w-7xl (1280px) and goes to 100% width
  const maxWidth = useTransform(scrollYProgress, [0, 1], ["1280px", "100%"]);

  // Starts with px-4 (1rem) so it matches the padding of the rest of the content, expands to 0 padding
  const padding = useTransform(scrollYProgress, [0, 1], ["16rem", "0rem"]);

  // Starts heavily rounded, unrolls to none
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["4rem", "0rem"]);

  return (
    <motion.div
      ref={ref}
      style={{ maxWidth, paddingLeft: padding, paddingRight: padding }}
      className="w-full mx-auto mb-12"
    >
      <motion.div
        style={{ borderRadius }}
        className="w-full aspect-video overflow-hidden relative bg-foreground flex items-center justify-center text-white/50 shadow-2xl"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
