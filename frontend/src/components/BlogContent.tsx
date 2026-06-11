interface BlogContentProps {
  paragraphs: string;
}

export function BlogContent({ paragraphs }: BlogContentProps) {
  return (
    <div className="flex flex-col gap-5 text-gray-700 leading-relaxed text-base tracking-normal">
      {paragraphs}
    </div>
  );
}