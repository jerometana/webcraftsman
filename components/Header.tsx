"use client";

import Link from "next/link";
import Logo from "./Logo";
import { motion } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <div className="sticky top-3 left-0 right-0 z-50 flex justify-center w-full">
      <motion.nav
        initial={{ width: "76px", paddingRight: "20px" }} // 20px pl + 36px logo + 20px pr = 76px
        animate={{ width: isMobile ? "90%" : "50%", paddingRight: "10px" }}
        transition={{ type: "spring", bounce: 0.3, duration: 1, delay: 0.4 }} // spring easing
        className="flex items-center justify-between py-2.5 bg-foreground/80 backdrop-blur-md rounded-full overflow-hidden"
        style={{ paddingLeft: "20px", transformOrigin: "center" }}
      >
        {/* Logo */}
        <motion.div
          initial={{ width: "36px" }}
          animate={{ width: "20%" }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.8,
            delay: 0.4,
          }}
          className="flex items-center shrink-0"
        >
          <Link href="/" aria-label="Home" className="flex items-center">
            <Logo className="w-9 fill-primary shrink-0" />
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden md:flex flex-1 justify-center items-center gap-10 whitespace-nowrap min-w-max px-4"
        >
          <Link
            href="#service"
            className="font-medium text-[#4B5563] hover:text-[#111827] transition-colors"
          >
            บริการ
          </Link>
          <Link
            href="#project"
            className="font-medium text-[#4B5563] hover:text-[#111827] transition-colors"
          >
            ผลงาน
          </Link>
          <Link
            href="#story"
            className="font-medium text-[#4B5563] hover:text-[#111827] transition-colors"
          >
            เรื่องราว
          </Link>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center justify-end shrink-0 w-[20%]"
        >
          <Link
            href="/start"
            className="px-4 py-3 font-medium text-white bg-primary hover:bg-primary-hover rounded-full transition-all duration-200 whitespace-nowrap"
          >
            เริ่มโปรเจค
          </Link>
        </motion.div>
      </motion.nav>
    </div>
  );
}
