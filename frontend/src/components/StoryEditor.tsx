interface StoryEditorProps {
  title: string;
  setTitle: (val: string) => void;
  content: string;
  setContent: (val: string) => void;
}

export function StoryEditor({ title, setTitle, content, setContent }: StoryEditorProps) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-8 py-12 md:py-24">
      <div className="flex items-start gap-4 mb-6">
        {/* Floating Action Button & Divider */}
        <div className="flex items-center gap-4 pt-2">
          <button 
            className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 hover:border-black hover:text-black transition-colors"
            aria-label="Add media"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
          <div className="h-12 w-px bg-gray-300"></div>
        </div>

        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-5xl md:text-[56px] font-serif text-black placeholder:text-gray-300 focus:outline-none bg-transparent leading-tight"
        />
      </div>

      {/* Story Content Textarea */}
      <div className="ml-17"> {/* Aligns with the title text, skipping the button width */}
        <textarea
          placeholder="Tell your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full text-xl md:text-2xl font-serif text-gray-800 placeholder:text-gray-300 focus:outline-none bg-transparent resize-none min-h-[50vh]"
        />
      </div>
    </div>
  );
}