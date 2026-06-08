import { useSearchParams } from "react-router-dom";
import { AuthorCard } from "../components/AuthorCard";
import { BlogContent } from "../components/BlogContent";
import { BlogHeader } from "../components/BlogHeader";

// TypeScript definition matching your expected backend data structure
// interface BlogPostProps {
//   post: {
//     id: String;
//     title: string;
//     date: string;
//     content: string[]; // Array of strings to cleanly map out paragraphs
//     author: {
//       name: string;
//       bio: string;
//       avatarUrl?: string;
//     };
//   };
// }

export default function BlogPostPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  const post = {
    id: "123",
    title: "The Rise of Seedhe Maut: Redefining Desi Hip-Hop",
    date: "August 24, 2023",
    content: [
      "Seedhe Maut, the Delhi-based duo comprising Siddhant Sharma (Calm) and Abhijay Negi (Encore ABJ), has engineered one of the most explosive ascents in Indian music history. Formed in 2015, they transformed from underground battle rappers in the Spit Dope cypher circuit into a multi-platinum independent powerhouse. Their rise represents a crucial turning point where regional Hindi rap shattered mainstream pop barriers without losing its raw, counter-culture edge.The duo’s breakthrough came through a creative partnership with legendary producer Sez on the Beat, yielding their seminal 2018 album, Bayaan. This project laid the blueprint for modern Desi Hip-Hop, blending Encore’s intricate, poetic storytelling with Calm’s razor-sharp, technical flows. Subsequent projects like Nayaab and Lunchbreak solidified their dominance, capturing the anxieties, hustles, and realities of Indian youth.What truly sets Seedhe Maut apart is their hyper-loyal fanbase, the 'Seedhe Maut Nation.' By pioneering high-octane mosh-pit culture in India and transitioning into a fully independent ecosystem during their DL91 era, they proved that subcultural authenticity could generate millions of global streams. Today, Seedhe Maut stands not just as a rap group, but as the definitive voice of a generation."
    ],
    author: {
      name: "Jokester",
      bio: "Master of mirth, purveyor of puns, and the funniest person in the kingdom.",
      avatarUrl: ""
    }
  };
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