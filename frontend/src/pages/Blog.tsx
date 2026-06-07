import { AuthorCard } from "../components/AuthorCard";
import { BlogContent } from "../components/BlogContent";
import { BlogHeader } from "../components/BlogHeader";

// TypeScript definition matching your expected backend data structure
interface BlogPostProps {
  post: {
    title: string;
    date: string;
    content: string[]; // Array of strings to cleanly map out paragraphs
    author: {
      name: string;
      bio: string;
      avatarUrl?: string;
    };
  };
}

export default function BlogPostPage({ post }: BlogPostProps) {
  // Graceful fallback state if backend data hasn't loaded yet
  if (!post) return <div className="p-8 text-center text-gray-500">Loading article...</div>;

  return (
    <div className="min-h-screen w-full bg-white px-6 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
        
        {/* Left Main Article Column */}
        <article className="flex flex-col">
          <BlogHeader title={post.title} date={post.date} />
          <BlogContent paragraphs={post.content} />
          
          {/* Subtle line for the upcoming comments section */}
          <div className="mt-12 pt-6 border-t border-gray-100">
            <h2 className="text-lg font-bold text-black">Comments</h2>
          </div>
        </article>

        {/* Right Sidebar Column */}
        <aside className="lg:sticky lg:top-8 lg:mt-4">
          <AuthorCard
            name={post.author.name} 
            bio={post.author.bio} 
            avatarUrl={post.author.avatarUrl} 
          />
        </aside>

      </div>
    </div>
  );
}