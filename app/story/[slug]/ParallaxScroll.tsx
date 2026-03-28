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
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  return (
    <motion.div style={{ y, scale }} className={className}>
      {children}
    </motion.div>
  );
}
