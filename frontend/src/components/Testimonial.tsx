interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <div className="max-w-xl px-8 lg:px-16">
      <blockquote className="text-[28px] font-semibold leading-tight text-black mb-6">
        “{quote}”
      </blockquote>
      <div>
        <p className="font-semibold text-black text-base">{author}</p>
        <p className="text-sm text-gray-500 mt-0.5">{role}</p>
      </div>
    </div>
  );
}