import type { Metadata } from "next";
import { Manrope, Outfit, Prompt } from "next/font/google";
import "./globals.css"; // Global styles
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "WEBCRAFTSMAN",
  description:
    "A Next.js project featuring Sanity CMS, Framer Motion, Resend, React Hook Form, and Lenis smooth scrolling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${prompt.className} font-sans transition-colors duration-500`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
