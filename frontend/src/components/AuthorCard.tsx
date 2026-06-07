interface AuthorCardProps {
  name: string;
  bio: string;
  avatarUrl?: string;
}

export function AuthorCard({ name, bio, avatarUrl }: AuthorCardProps) {
  return (
    <div className="flex flex-col gap-3 max-w-xs">
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
        Author
      </span>
      <div className="flex gap-4 items-start">
        {/* Placeholder avatar matching the gray circle in the image */}
        <div className="h-10 w-10 rounded-full bg-gray-200 shrink-0 overflow-hidden">
          {avatarUrl && <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />}
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-black leading-none">{name}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  );
}