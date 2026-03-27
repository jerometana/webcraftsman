import ScrollExpansion from "@/components/ScrollExpansion";
import HeroSection from "@/components/sections/HeroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServiceSection from "@/components/sections/ServiceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import StorySection from "@/components/sections/StorySection";
import Footer from "@/components/Footer";
import { client } from "@/lib/sanity";
import DarkVeil from "@/components/DarkVeil";

const POSTS_QUERY = `*[ _type == "post" ] | order(_createdAt desc)[0...4] {
  _id,
  title,
  slug,
  _createdAt,
  mainImage {
    alt,
    "url": asset->url
  },
  categories[]-> {
    title,
    slug
  }
}`;

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <HeroSection />
      <WhyUsSection />
      <ServiceSection />
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
      <StorySection posts={posts} />
      <Footer />
    </main>
  );
}
