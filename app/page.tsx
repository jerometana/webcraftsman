'use client';

import { motion } from 'motion/react';
import ContactForm from '@/components/ContactForm';
import { ArrowRight, Code, Mail, Zap, Database, MousePointer2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            The Ultimate Starter Template
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
            MODERN <br />
            <span className="text-blue-600 italic">TECH STACK</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Next.js 15, TypeScript, Tailwind CSS, Sanity CMS, Framer Motion, Resend, React Hook Form, and Lenis smooth scrolling.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2 group shadow-lg shadow-gray-200">
              Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm">
              View Documentation
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-300 to-transparent" />
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="w-6 h-6 text-yellow-500" />}
            title="Framer Motion"
            description="Production-ready animations for React. Smooth transitions and interactive elements."
          />
          <FeatureCard
            icon={<Database className="w-6 h-6 text-red-500" />}
            title="Sanity CMS"
            description="The platform for structured content. Build better digital experiences with a real-time headless CMS."
          />
          <FeatureCard
            icon={<Mail className="w-6 h-6 text-blue-500" />}
            title="Resend"
            description="The best way to send emails. Simple, reliable, and developer-friendly email infrastructure."
          />
          <FeatureCard
            icon={<Code className="w-6 h-6 text-green-500" />}
            title="React Hook Form"
            description="Performant, flexible and extensible forms with easy-to-use validation."
          />
          <FeatureCard
            icon={<MousePointer2 className="w-6 h-6 text-purple-500" />}
            title="Lenis Scroll"
            description="Smooth scrolling for the web. Lightweight and high-performance scroll experience."
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6 text-orange-500" />}
            title="Tailwind CSS"
            description="A utility-first CSS framework for rapid UI development without leaving your HTML."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to build <br />
              <span className="text-blue-600">something amazing?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              This template is designed to give you a head start on your next project. 
              All the tools you need are pre-configured and ready to use.
            </p>
            <ul className="space-y-4">
              {['Optimized for Performance', 'SEO Friendly', 'Fully Responsive', 'Developer Experience Focused'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Modern Tech Stack Starter. Built with passion.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
