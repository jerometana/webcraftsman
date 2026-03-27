import type { Metadata } from "next";
import { Manrope, Prompt } from "next/font/google";
import "./globals.css"; // Global styles
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Modern Tech Stack Starter",
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
      <body className={`${manrope.variable} ${prompt.variable} font-sans`} suppressHydrationWarning>
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
