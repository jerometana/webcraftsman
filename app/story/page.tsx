import { getPaginatedPosts } from "@/lib/sanity";
import { StoryList } from "@/components/StoryList";

export default async function StoryPage() {
  const posts = await getPaginatedPosts(0, 5); // Initial fetch
  const displayItems =
    posts.length > 0
      ? posts.map((post) => ({
          tag: post.categories?.[0]?.title || "Blog",
          title: post.title,
          slug: post.slug?.current,
          date: new Date(post.publishedAt).toLocaleDateString("th-TH", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          imgClass: "bg-primary relative",
          image: post.mainImage,
        }))
      : [];

  return (
    <main className="py-32 px-4 max-w-7xl mx-auto flex flex-col items-start min-h-screen">
      <div className="text-center mb-16 mx-auto">
        <span className="inline-block px-4 py-1.5 mb-4 text-xl font-[Outfit] font-semibold text-primary">
          Story
        </span>
        <h2 className="text-4xl md:text-6xl tracking-tight">
          คอนเทนต์เราก็ทำ{" "}
          <span className="text-text-secondary">ยอมได้ที่ไหน</span>
        </h2>
      </div>

      <StoryList initialPosts={displayItems} />
    </main>
  );
}
