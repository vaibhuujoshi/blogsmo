interface PublishSidebarProps {
  thumbnailUrl: string;
  setThumbnailUrl: (val: string) => void;
  tags: string;
  setTags: (val: string) => void;
  onPublish: () => void;
}

export function PublishSidebar({ thumbnailUrl, setThumbnailUrl, tags, setTags, onPublish }: PublishSidebarProps) {
  return (
    <div className="w-full h-full bg-gray-50 border-t lg:border-t-0 lg:border-l border-gray-200 p-6 lg:p-8 flex flex-col gap-8 lg:sticky lg:top-0 lg:h-screen overflow-y-auto">
      
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">Post Settings</span>
        <button 
          onClick={onPublish}
          className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors cursor-pointer"
        >
          Publish
        </button>
      </div>

      <hr className="border-gray-200" />

      {/* Thumbnail Form */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-black">Thumbnail URL</label>
        <input 
          type="url" 
          placeholder="https://example.com/image.jpg"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
          className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all"
        />
        {thumbnailUrl && (
          <div className="mt-2 w-full aspect-video bg-gray-200 rounded-md overflow-hidden border border-gray-200">
            <img src={thumbnailUrl} alt="Thumbnail preview" className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      {/* Tags Form */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-black">Tags</label>
        <p className="text-xs text-gray-500">Separate tags with commas</p>
        <textarea 
          placeholder="technology, coding, web development..."
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all resize-none"
        />
      </div>

    </div>
  );
}