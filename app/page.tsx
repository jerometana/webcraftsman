import ScrollExpansion from "@/components/ScrollExpansion";
import HeroSection from "@/components/sections/HeroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServiceSection from "@/components/sections/ServiceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import StorySection from "@/components/sections/StorySection";
import Footer from "@/components/Footer";
import { getLatestPosts } from "@/lib/sanity";
import CtaSection from "@/components/sections/CtaSection";

export default async function Home() {
  const posts = await getLatestPosts(3);

  return (
    <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <HeroSection />
      <WhyUsSection />
      <ServiceSection />
      <div className="h-[200vh] relative">
        <div className="absolute top-0 w-full z-10">
          <ScrollExpansion>
            <h2 className="text-4xl md:text-[80px] mb-6">
              ให้ผลงาน
              <br />
              เป็นเครื่องพิสูจน์
            </h2>
          </ScrollExpansion>
        </div>
        <div className="sticky top-20">
          <ProjectsSection />
        </div>
      </div>
      <HowItWorksSection />
      <TestimonialSection />
      <StorySection posts={posts} />
      <CtaSection />
      <Footer />
    </main>
  );
}
