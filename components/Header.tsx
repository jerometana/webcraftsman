"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="fixed top-3 left-0 right-0 z-50 flex justify-center w-full">
      <nav className="grid grid-cols-3 items-center justify-between w-[90%] max-w-2xl pl-8 pr-2 py-2 bg-[#F5F5F7]/90 backdrop-blur-md border border-[#E5E7EB]/50 rounded-full">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Home">
          <Logo className="w-10 fill-primary" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-10">
          <Link
            href="#service"
            className="font-medium text-[#4B5563] hover:text-[#111827] transition-colors"
          >
            Service
          </Link>
          <Link
            href="#project"
            className="font-medium text-[#4B5563] hover:text-[#111827] transition-colors"
          >
            Project
          </Link>
          <Link
            href="#story"
            className="font-medium text-[#4B5563] hover:text-[#111827] transition-colors"
          >
            Story
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center place-self-end">
          <Link
            href="/start"
            className="px-6 py-2.5 font-medium text-white bg-primary hover:bg-[#2b3acc] rounded-full transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}
