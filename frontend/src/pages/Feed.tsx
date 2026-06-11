import { useEffect, useState } from "react";
import { ArticleCard, type ArticleData } from "../components/ArticleCard";
import { getAllPosts } from "../api/post";
import { ArticleCardSkeleton } from "../components/skeletons/ArticleCard";

export default function HomeFeedPage() {
  const [posts, setPosts] = useState<ArticleData[]>([]);

  useEffect(() => {
    getAllPosts().then(data => setPosts(data || []));
  }, []);

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 pt-8">

        {/* Navigation Tab line */}
        <div className="flex items-center gap-6 border-b border-gray-100 text-sm font-normal text-gray-500 mb-2">
          <button className="text-black font-medium border-b border-black pb-3 relative -bottom-px">
            For you
          </button>
        </div>

        {/* Stream List */}
        <div className="flex flex-col">
          {posts.length === 0 ? (
            // 1. Render skeletons while the state array remains empty
            Array.from({ length: 2 }).map((_, index) => (
              <ArticleCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : (
            // 2. Map through live data elements once populated
            posts.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          )}
        </div>

      </div>
    </div>
  );
}