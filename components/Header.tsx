"use client";

import Link from "next/link";
import Logo from "./Logo";
import { motion, AnimatePresence } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

export default function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#service", label: "บริการ" },
    { href: "/#project", label: "ผลงาน" },
    { href: "/story", label: "เรื่องราว" },
  ];

  return (
    <div className="fixed top-3 left-0 right-0 z-50 flex justify-center w-full">
      <motion.nav
        initial={{ width: "76px", paddingRight: "20px" }} // 20px pl + 36px logo + 20px pr = 76px
        animate={{ width: isMobile ? "95%" : "60%", paddingRight: "10px" }}
        transition={{ type: "spring", bounce: 0.3, duration: 1, delay: 0.4 }} // spring easing
        className=" bg-foreground/90 backdrop-blur-md rounded-[2.5rem] overflow-hidden"
        style={{ paddingLeft: "20px", transformOrigin: "center" }}
      >
        <div className="flex items-center justify-between py-2.5">
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
            className="hidden lg:flex flex-1 justify-center items-center gap-10 whitespace-nowrap min-w-max px-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#4B5563] hover:text-[#111827] transition-colors"
              >
                {link.label}
              </Link>
            ))}
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
              className="px-4 py-3 text-white bg-primary hover:bg-primary-hover rounded-full transition-all duration-200 whitespace-nowrap text-sm lg:text-base"
            >
              เริ่มต้นรับบริการ
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-4 rounded-full text-text-secondary cursor-pointer flex flex-col justify-center items-center gap-1.5 relative w-12 h-12"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-current rounded-full"
              />
            </button>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="pt-4 pb-10 text-xl flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    // initial={{ opacity: 0, x: -20 }}
                    // animate={{ opacity: 1, x: 0 }}
                    // exit={{ opacity: 0, x: -20 }}
                    // transition={{ delay: i * 0.1, duration: 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-text-primary font-medium transition-colors hover:text-primary block w-full"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
