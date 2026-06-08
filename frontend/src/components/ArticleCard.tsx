import { useNavigate } from "react-router-dom";

export interface ArticleData {
  id: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  date: string;
  title: string;
  content: string;
  thumbnailUrl: string;
  tag: string;
  readingTime: string;
}

interface ArticleCardProps {
  article: ArticleData;
}


export function ArticleCard({ article }: ArticleCardProps) {
  const navigate = useNavigate();
  return (
    <div className="py-8 border-b border-gray-100 grid grid-cols-[1fr_100px] sm:grid-cols-[1fr_120px] md:grid-cols-[1fr_160px] gap-6 md:gap-12 items-start">
      
      {/* Left Column: Text & Content Information */}
      <div className="flex flex-col gap-2">
        
        {/* Author Header Row */}
        <div className="flex items-center gap-2 text-xs text-gray-600 font-normal">
          <img 
            src={article.author.avatarUrl} 
            alt={article.author.name} 
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="text-black font-medium hover:underline cursor-pointer">
            {article.author.name}
          </span>
          <span className="text-gray-300">•</span>
          <span>{article.date}</span>
        </div>

        {/* Title and content */}
        <div onClick={() => navigate(`/blog/${article.id}`)} className="flex flex-col gap-1 cursor-pointer group">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-snug group-hover:text-gray-600 transition-colors">
            {article.title}
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-serif font-normal leading-relaxed line-clamp-2">
            {article.content}
          </p>
        </div>

        {/* Card Interactive Footer */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-2.5 py-1 rounded-full cursor-pointer transition-colors">
              {article.tag}
            </span>
            <span>{article.readingTime}</span>
          </div>
          
          {/* Action Icons Panel */}
          <div className="flex items-center gap-3 text-gray-400">
            <button className="hover:text-black transition-colors cursor-pointer" aria-label="Save story">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            </button>
            <button className="hover:text-black transition-colors cursor-pointer" aria-label="Show less like this">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="hover:text-black transition-colors cursor-pointer" aria-label="More options">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      {/* Right Column: Image Thumbnail */}
      <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[110px] bg-gray-50 rounded-xs overflow-hidden cursor-pointer shrink-0">
        <img 
          src={article.thumbnailUrl} 
          alt="Article cover" 
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}