"use client";

import { motion } from "motion/react";
import { CodeIcon, ComponentIcon, ListChecksIcon } from "lucide-react";

export default function ServiceSection() {
  return (
    <section>
      {/* Headline: sticky with low z-index so cards scroll over it */}
      <div className="sticky top-0 z-0 px-16 pt-80 pb-[34rem] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 64, filter: "blur(16px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-9xl  tracking-tight leading-none"
        >
          งานทำเว็บ
          <br />
          เราพร้อมลุย
        </motion.h2>
      </div>
      {/* Cards: relative z-index above the headline */}
      <div className="relative z-10 flex gap-8 justify-center px-4 pb-80 mx-auto">
        <div>
          <div className="sticky top-52">
            <div className="mx-auto bg-foreground h-[600px] aspect-[3/4] rounded-3xl -rotate-1">
              <div className="p-8 pb-16 flex flex-col justify-end text-center h-full">
                <div className="flex justify-center items-center h-full mb-8">
                  <ComponentIcon className="w-32 h-32 text-primary" />
                </div>
                <h3 className="text-3xl mb-4 font-[Outfit]">UX/UI Design</h3>
                <p className="text-text-secondary text-xl">
                  ออกแบบประสบการณ์ที่ดึงตัวตนแบรนด์ออกมาให้โดดเด่น
                  และเปลี่ยนผู้เข้าชมให้เป็นลูกค้าที่หลงรักแบรนด์คุณ
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[64rem]">
          <div className="sticky top-52">
            <div className="mx-auto bg-foreground h-[600px] aspect-[3/4] rounded-3xl rotate-1">
              <div className="p-8 pb-16 flex flex-col justify-end text-center h-full">
                <div className="flex justify-center items-center h-full mb-8">
                  <CodeIcon className="w-32 h-32 text-primary" />
                </div>
                <h3 className="text-3xl mb-4 font-[Outfit]">Web Development</h3>
                <p className="text-text-secondary text-xl">
                  ปลุกงานดีไซน์ให้มีชีวิตด้วยการเขียนโค้ดที่ประณีต
                  เว็บไซต์ที่โหลดไว ไร้รอยต่อ
                  และพร้อมทำงานหนักเพื่อขับเคลื่อนการเติบโตให้ธุรกิจของคุณในทุกวินาที
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[128rem]">
          <div className="sticky top-52">
            <div className="mx-auto bg-foreground h-[600px] aspect-[3/4] rounded-3xl -rotate-2">
              <div className="p-8 pb-16 flex flex-col justify-end text-center h-full">
                <div className="flex justify-center items-center h-full mb-8">
                  <ListChecksIcon className="w-32 h-32 text-primary" />
                </div>
                <h3 className="text-3xl mb-4 font-[Outfit]">Design Audit</h3>
                <p className="text-text-secondary text-xl">
                  เจาะลึกเว็บไซต์เดิมของคุณด้วยมุมมองมืออาชีพ
                  วิเคราะห์ทุกจุดที่ขวางทาง Conversion
                  เพื่อเปลี่ยนดีไซน์ที่ติดขัดให้กลายเป็นเครื่องมือปิดการขายที่มีประสิทธิภาพสูงสุด
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function ServiceSection() {
//   return (
//     <section className="py-32 px-4 grid grid-cols-3 mx-auto">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <div className="sticky top-32 px-16 pt-32">
//           <span className="inline-block px-4 py-1.5 mb-4 text-lg font-semibold tracking-widest text-primary uppercase">
//             บริการของเรา
//           </span>
//           <h2 className="text-4xl md:text-6xl tracking-tight leading-tight mb-16">
//             งานทำเว็บ <br />
//             <span className="text-text-secondary">เราพร้อมลุย</span>
//           </h2>
//         </div>
//       </motion.div>
//       <div className="flex flex-col col-span-2 gap-16">
//         <div className="grid grid-cols-2 gap-8 sticky top-32">
//           <div className="sticky top-40">
//             <div className="mx-auto bg-foreground h-[600px] aspect-[3/4] rounded-3xl"></div>
//           </div>
//           <div className="">
//             <div className="px-6 py-8 flex flex-col justify-center h-full">
//               <h3 className="text-3xl mb-4 font-[Outfit]">UX/UI Design</h3>
//               <p className="text-text-secondary text-xl">
//                 ออกแบบประสบการณ์ที่ดึงตัวตนแบรนด์ออกมาให้โดดเด่น
//                 และเปลี่ยนผู้เข้าชมให้เป็นลูกค้าที่หลงรักแบรนด์คุณ
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-8 sticky top-32">
//           <div className="sticky top-40">
//             <div className="mx-auto bg-foreground h-[600px] aspect-[3/4] rounded-3xl"></div>
//           </div>
//           <div className="">
//             <div className="px-6 py-8 flex flex-col justify-center h-full">
//               <h3 className="text-3xl mb-4 font-[Outfit]">Web Development</h3>
//               <p className="text-text-secondary text-xl">
//                 ปลุกงานดีไซน์ให้มีชีวิตด้วยการเขียนโค้ดที่ประณีต
//                 เว็บไซต์ที่โหลดไว ไร้รอยต่อ
//                 และพร้อมทำงานหนักเพื่อขับเคลื่อนการเติบโตให้ธุรกิจของคุณในทุกวินาที
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-8 sticky top-32">
//           <div className="sticky top-40">
//             <div className="mx-auto bg-foreground h-[600px] aspect-[3/4] rounded-3xl"></div>
//           </div>
//           <div className="">
//             <div className="px-6 py-8 flex flex-col justify-center h-full">
//               <h3 className="text-3xl mb-4 font-[Outfit]">Design Audit</h3>
//               <p className="text-text-secondary text-xl">
//                 เจาะลึกเว็บไซต์เดิมของคุณด้วยมุมมองมืออาชีพ
//                 วิเคราะห์ทุกจุดที่ขวางทาง Conversion
//                 เพื่อเปลี่ยนดีไซน์ที่ติดขัดให้กลายเป็นเครื่องมือปิดการขายที่มีประสิทธิภาพสูงสุด
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
