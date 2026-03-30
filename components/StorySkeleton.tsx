"use client";

import { motion } from "motion/react";

export function StorySkeleton() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full aspect-video rounded-3xl overflow-hidden bg-gray-200/30 relative">
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
        />
      </div>
      <div className="p-8 flex flex-col items-start gap-4">
        <div className="w-24 h-6 bg-gray-200/30 rounded-full relative overflow-hidden">
             <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
        </div>
        <div className="w-full h-8 bg-gray-200/30 rounded-lg relative overflow-hidden">
             <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
        </div>
        <div className="w-3/4 h-8 bg-gray-200/30 rounded-lg relative overflow-hidden">
             <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
        </div>
        <div className="w-32 h-6 bg-gray-200/30 rounded-full mt-2 relative overflow-hidden">
             <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
        </div>
      </div>
    </div>
  );
}
