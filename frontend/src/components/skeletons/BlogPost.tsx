export function BlogPostSkeleton() {
  return (
    <div className="min-h-screen w-full bg-white px-6 py-12 md:px-16 lg:px-24 animate-pulse">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
        
        {/* Left Column: Title & Article Content Placeholder */}
        <div className="flex flex-col">
          {/* Main Large Title Lines */}
          <div className="h-9 w-11/12 bg-gray-200 rounded-md mb-3" />
          <div className="h-9 w-8/12 bg-gray-200 rounded-md mb-6" />
          
          {/* Date Label Bone */}
          <div className="h-3 w-40 bg-gray-200 rounded-sm mb-12" />
          
          {/* Full Paragraph Block Bones */}
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-200 rounded-sm" />
            <div className="h-4 w-full bg-gray-200 rounded-sm" />
            <div className="h-4 w-11/12 bg-gray-200 rounded-sm" />
            <div className="h-4 w-full bg-gray-200 rounded-sm" />
            <div className="h-4 w-5/6 bg-gray-200 rounded-sm" />
            <div className="h-4 w-full bg-gray-200 rounded-sm" />
            <div className="h-4 w-4/5 bg-gray-200 rounded-sm" />
          </div>

          {/* Comments Section Separator Base */}
          <div className="mt-12 pt-6 border-t border-gray-100">
            <div className="h-5 w-24 bg-gray-200 rounded-md" />
          </div>
        </div>

        {/* Right Column: Author Sidebar Card Placeholder */}
        <aside className="lg:mt-4 border border-gray-50 p-4 rounded-md">
          {/* Section Small Header */}
          <div className="h-3 w-14 bg-gray-100 rounded-sm mb-4" />
          
          <div className="flex items-start gap-3">
            {/* Avatar circle from your image shape */}
            <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" />
            
            {/* Author Information Blocks */}
            <div className="flex flex-col gap-2 w-full mt-1">
              <div className="h-4 w-16 bg-gray-200 rounded-sm" />
              <div className="h-3 w-24 bg-gray-200 rounded-sm" />
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
