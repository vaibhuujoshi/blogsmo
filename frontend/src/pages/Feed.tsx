import { ArticleCard, type ArticleData } from "../components/ArticleCard";

const mockArticlesData: ArticleData[] = [
  {
    id: "123",
    author: {
      name: "Peter V.",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop"
    },
    date: "Dec 3, 2023",
    title: "How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing",
    content: "No need to create a fancy and modern website with hundreds of pages to make money online. — Making money online is the dream for man...",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&auto=format&fit=crop",
    tag: "Side Hustle",
    readingTime: "3 min read"
  },
  {
    id: "2",
    author: {
      name: "Payam Saderi",
      avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop"
    },
    date: "Oct 2, 2023",
    title: "To PM2, or Not to PM2: Embracing Docker for Node.js",
    content: "We've got this teeny-tiny service written Node.js, and like all services in the world its availability is very important to us. we're talking BC-era code here! Back in those dark ages, Docker didn't exist yet. We had to...",
    thumbnailUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=300&auto=format&fit=crop",
    tag: "Docker",
    readingTime: "4 min read"
  },
  {
    id: "3",
    author: {
      name: "Ignacio de Gregorio",
      avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&auto=format&fit=crop"
    },
    date: "Feb 22, 2024",
    title: "Google Has Finally Dethroned ChatGPT",
    content: "They Finally Did It — When you look at what Google has just achieved, it's no wonder OpenAI suddenly released Sora a few hours later to...",
    thumbnailUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&auto=format&fit=crop",
    tag: "Artificial Intelligence",
    readingTime: "7 min read"
  },
  {
    id: "123",
    author: {
      name: "Peter V.",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop"
    },
    date: "Dec 3, 2023",
    title: "How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing",
    content: "No need to create a fancy and modern website with hundreds of pages to make money online. — Making money online is the dream for man...",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&auto=format&fit=crop",
    tag: "Side Hustle",
    readingTime: "3 min read"
  },
  {
    id: "2",
    author: {
      name: "Payam Saderi",
      avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop"
    },
    date: "Oct 2, 2023",
    title: "To PM2, or Not to PM2: Embracing Docker for Node.js",
    content: "We've got this teeny-tiny service written Node.js, and like all services in the world its availability is very important to us. we're talking BC-era code here! Back in those dark ages, Docker didn't exist yet. We had to...",
    thumbnailUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=300&auto=format&fit=crop",
    tag: "Docker",
    readingTime: "4 min read"
  },
  {
    id: "3",
    author: {
      name: "Ignacio de Gregorio",
      avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&auto=format&fit=crop"
    },
    date: "Feb 22, 2024",
    title: "The Legacy of Kindness: How Himmel the Hero Redefined True Bravery",
    content: "Himmel the Hero earned his legendary status not through a desire for fame, but through an unwavering dedication to helping others. As the leader of the group that defeated the Demon King, he brought a long-awaited peace to a fractured world. Yet, his true legacy lies in the countless small acts of kindness he performed along the way.Himmel believed that even brief encounters could change a life forever. He famously commissioned statues of himself and his companions in every town they saved, not out of vanity, but to ensure the people would never feel abandoned and would always remember the peace they achieved.His profound compassion deeply altered the lives of those closest to him, inspiring them to seek deeper connections with humanity. Though his life eventually came to a peaceful end at the age of 76, his philosophy survived him. Himmel proved that true heroism is not defined by final battles, but by the quiet, enduring impact left on the hearts of others. Today, his name remains an enduring symbol of hope, selflessness, and the lasting power of a gentle soul.",
    thumbnailUrl: "https://preview.redd.it/89o4bw32zqjd1.jpeg?width=640&crop=smart&auto=webp&s=dd3aa8ded729fd0b59cf4ae1ea3a7d47dfc8ab2e",
    tag: "Heroism",
    readingTime: "3 min read"
  },
];

export default function HomeFeedPage() {
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
          {mockArticlesData.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

      </div>
    </div>
  );
}