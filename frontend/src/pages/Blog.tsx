import { useParams } from "react-router-dom";
import { AuthorCard } from "../components/AuthorCard";
import { BlogContent } from "../components/BlogContent";
import { BlogHeader } from "../components/BlogHeader";
import { useEffect, useState } from "react";
import type { ArticleData } from "../components/ArticleCard";
import { getPostById } from "../api/post";
import { BlogPostSkeleton } from "../components/skeletons/BlogPost";
import { formatDate } from "../lib/blogUtils";

export default function BlogPostPage() {
  let {id} = useParams();
  id = `${id}`;
  console.log(id);
  const [post, setPost] = useState<ArticleData>();

  useEffect(() => {
    getPostById(id).then(data => setPost(data));
  }, []);
  // Graceful fallback state if backend data hasn't loaded yet
  if (!post) return <BlogPostSkeleton />;

  return (
    <div className="min-h-screen w-full bg-white px-6 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">

        {/* Left Main Article Column */}
        <article className="flex flex-col">
          <BlogHeader title={post.title} date={formatDate(post.date)} />
          <BlogContent paragraphs={post.content} />

          {/* Subtle line for the upcoming comments section */}
          <div className="mt-12 pt-6 border-t border-gray-100">
            <h2 className="text-lg font-bold text-black">Comments</h2>
          </div>
        </article>

        {/* Right Sidebar Column */}
        <aside className="lg:sticky lg:top-8 lg:mt-4">
          <AuthorCard
            name={"yo yo"}
            bio={"Life is Enjoy"}
            avatarUrl={"https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"}
          />
        </aside>

      </div>
    </div>
  );
}