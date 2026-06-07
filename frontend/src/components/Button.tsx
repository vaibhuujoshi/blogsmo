interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button 
      {...props}
      className="w-full bg-[#18181b] hover:bg-black text-white font-medium py-3 px-4 rounded-md transition-colors text-sm cursor-pointer"
    >
      {children}
    </button>
  );
}