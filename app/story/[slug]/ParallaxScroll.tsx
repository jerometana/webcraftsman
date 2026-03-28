"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

export default function ParallaxScroll({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { scrollY } = useScroll();
  // Translate Y to create parallax effect (moves down slower than the scroll speed)
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
