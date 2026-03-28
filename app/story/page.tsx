import { StoryCard } from "@/components/StoryCard";
import { getAllPosts } from "@/lib/sanity";
import Link from "next/link";

export default async function StoryPage() {
  const posts = await getAllPosts();
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
    <main className="py-32 px-4 max-w-7xl mx-auto flex flex-col items-start">
      <div className="text-center mb-16 mx-auto">
        <span className="inline-block px-4 py-1.5 mb-4 text-xl font-[Outfit] font-semibold text-primary">
          Story
        </span>
        <h2 className="text-4xl md:text-6xl tracking-tight">
          คอนเทนต์เราก็ทำ{" "}
          <span className="text-text-secondary">ยอมได้ที่ไหน</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full max-w-7xl">
        {displayItems.map((item, idx) => {
          const isFirst = idx === 0;
          return (
            <StoryCard key={idx} item={item} idx={idx} isFirst={isFirst} />
          );
        })}
      </div>

      {/* <div className="w-full grid grid-cols-3 gap-8 mt-16">
        <div>
          <div className="aspect-[9/14] w-full rounded-4xl bg-foreground"></div>
          <div className="p-8 text-2xl">ฟหกด</div>
        </div>
        <div>
          <div className="aspect-[9/14] w-full rounded-4xl bg-foreground"></div>
          <div className="p-8 text-2xl">ฟหกด</div>
        </div>
        <div>
          <div className="aspect-[9/14] w-full rounded-4xl bg-foreground"></div>
          <div className="p-8 text-2xl">ฟหกด</div>
        </div>
      </div> */}
    </main>
  );
}
