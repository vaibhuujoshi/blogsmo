type InputBoxProps = {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputBox({ label, placeholder, type, value, onChange }: InputBoxProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-sm font-semibold text-black">
        {label}
      </label>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange} 
        className="w-full px-3 py-3 text-sm bg-white border border-gray-200 rounded-md text-black placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-all" 
      />
    </div>
  );
}