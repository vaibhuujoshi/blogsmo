interface BlogHeaderProps {
  title: string;
  date: string;
}

export function BlogHeader({ title, date }: BlogHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-4xl lg:text-[44px] font-extrabold text-black tracking-tight leading-tight mb-3">
        {title}
      </h1>
      <p className="text-sm text-gray-400 font-normal">
        Posted on {date}
      </p>
    </div>
  );
}