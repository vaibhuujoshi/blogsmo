export function ArticleCardSkeleton() {
  return (
    <div className="py-8 border-b border-gray-100 grid grid-cols-[1fr_100px] sm:grid-cols-[1fr_120px] md:grid-cols-[1fr_160px] gap-6 md:gap-12 items-start animate-pulse">

      {/* Left Column: Text Content Info */}
      <div className="flex flex-col gap-2 w-full">

        {/* Author Header Row Placeholder */}
        <div className="flex items-center gap-2">
          {/* Avatar circle */}
          <div className="w-5 h-5 rounded-full bg-gray-200" />
          {/* Author name text bone */}
          <div className="h-3 w-12 bg-gray-200 rounded-sm" />
          <span className="text-gray-200 text-xs">•</span>
          {/* Date text bone */}
          <div className="h-3 w-10 bg-gray-200 rounded-sm" />
        </div>

        {/* Title and Excerpt Content Placeholders */}
        <div className="flex flex-col gap-2.5 mt-1">
          {/* Multi-line Title Footprint Bars */}
          <div className="h-6 w-11/12 bg-gray-200 rounded-md" />
          <div className="h-6 w-3/4 bg-gray-200 rounded-md" />

          {/* Content Excerpt Description Lines */}
          <div className="space-y-2 mt-2">
            <div className="h-4 w-full bg-gray-200 rounded-sm" />
            <div className="h-4 w-5/6 bg-gray-200 rounded-sm" />
          </div>
        </div>

        {/* Card Interactive Footer Row */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3">
            {/* Tag pill shape bone */}
            <div className="h-6 w-16 bg-gray-200 rounded-full" />
            {/* Reading time indicator bone */}
            <div className="h-3 w-14 bg-gray-200 rounded-sm" />
          </div>

          {/* Interactive Action Icon Block Placeholders */}
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 bg-gray-200 rounded-xs" />
            <div className="w-5 h-5 bg-gray-200 rounded-full" />
            <div className="w-5 h-5 bg-gray-200 rounded-full" />
          </div>
        </div>

      </div>

      {/* Right Column: Image Thumbnail Frame Placeholder */}
      <div className="w-25 h-25 sm:w-30 sm:h-30 md:w-40 md:h-27.5 bg-gray-200 rounded-xs shrink-0" />

    </div>
  );
}