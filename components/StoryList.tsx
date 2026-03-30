"use client";

import { useEffect, useRef, useState } from "react";
import { StoryCard } from "@/components/StoryCard";
import { fetchMoreStories } from "@/app/actions/story";

interface StoryItem {
  tag: string;
  title: string;
  slug: string;
  date: string;
  imgClass: string;
  image: any;
}

interface StoryListProps {
  initialPosts: StoryItem[];
}

import { StorySkeleton } from "@/components/StorySkeleton";

export function StoryList({ initialPosts }: StoryListProps) {
  const [posts, setPosts] = useState<StoryItem[]>(initialPosts);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(initialPosts.length);
  const loaderRef = useRef<HTMLDivElement>(null);

  const fetchMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const morePosts = await fetchMoreStories(offset);
      if (morePosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prev) => [...prev, ...morePosts]);
        setOffset((prev) => prev + morePosts.length);
      }
    } catch (error) {
      console.error("Error fetching more stories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          fetchMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loading, hasMore, offset]);

  return (
    <div className="w-full flex flex-col gap-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full max-w-7xl">
        {posts.map((item, idx) => {
          const isFirst = idx === 0;
          return (
            <StoryCard key={`${item.slug}-${idx}`} item={item} idx={idx} isFirst={isFirst} />
          );
        })}
        
        {loading && (
          <>
            <StorySkeleton />
            <StorySkeleton />
          </>
        )}
      </div>

      {hasMore && (
        <div 
          ref={loaderRef} 
          className="w-full h-10 mt-8"
        />
      )}
    </div>
  );
}
