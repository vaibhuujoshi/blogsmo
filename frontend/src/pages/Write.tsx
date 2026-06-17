import { useState } from "react";
import { StoryEditor } from "../components/StoryEditor";
import { PublishSidebar } from "../components/PublishSidebar";
import { createPost } from "../api/post";
import { useNavigate } from "react-router-dom";

export default function WritePage() {
  // Global form state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [tags, setTags] = useState("");

  const navigate = useNavigate();

  const handlePublish = () => {
    // In a real app, you would parse the comma-separated tags here
    // const formattedTags = tags.split(",").map(tag => tag.trim()).filter(Boolean);

    createPost(title, content, thumbnailUrl, tags)
      .then(() => navigate('/feed'));
    alert("Post published!");
  };

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 font-sans flex flex-col lg:flex-row">

      {/* Main Editor Section (Takes up remaining space) */}
      <main className="flex-1 w-full flex justify-center">
        <StoryEditor
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
        />
      </main>

      {/* Sidebar Section (Fixed width on desktop, full width on mobile) */}
      <aside className="w-full lg:w-90 xl:w-100 shrink-0">
        <PublishSidebar
          thumbnailUrl={thumbnailUrl}
          setThumbnailUrl={setThumbnailUrl}
          tags={tags}
          setTags={setTags}
          onPublish={handlePublish}
        />
      </aside>

    </div>
  );
}