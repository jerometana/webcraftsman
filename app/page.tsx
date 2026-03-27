import ScrollExpansion from "@/components/ScrollExpansion";
import HeroSection from "@/components/sections/HeroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import WhyUsDetailedSection from "@/components/sections/WhyUsDetailedSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import StorySection from "@/components/sections/StorySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <HeroSection />
      <WhyUsSection />
      <WhyUsDetailedSection />

      <ScrollExpansion>
        <h2 className="text-4xl md:text-[80px] font-medium mb-6">
          ให้ผลงาน
          <br />
          เป็นเครื่องพิสูจน์
        </h2>
      </ScrollExpansion>

      <ProjectsSection />
      <HowItWorksSection />
      <TestimonialSection />
      <StorySection />
      <Footer />
    </main>
  );
}
