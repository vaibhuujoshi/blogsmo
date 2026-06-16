import { useState } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { Testimonial } from "../components/Testimonial";
import { useNavigate } from "react-router-dom";
import LoginUser from "../api/login";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    LoginUser(email, password);
    navigate('/feed');
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-white">
      
      {/* Left Column: Login Form */}
      <div className="flex items-center justify-center p-8 lg:p-24 bg-white">
        <div className="w-full max-w-100 flex flex-col gap-6">
          
          <div className="text-center lg:text-left mb-2">
            <h1 className="text-4xl font-bold text-black tracking-tight mb-2">Login</h1>
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <span onClick={() => navigate('/signup')} className="underline hover:text-black transition-colors cursor-pointer">Sign up</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <InputBox 
              label="Email" 
              placeholder="m@example.com" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputBox
              label="Password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mt-2">
              <Button type="submit">Login</Button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column: New Testimonial Panel */}
      <div className="hidden lg:flex items-center justify-left bg-[#f4f4f5]">
        <Testimonial
          quote="The transition to our new digital workspace was seamless. The security features give us peace of mind while the interface keeps our team productive."
          author="Sarah Chen"
          role="CTO, TechFlow"
        />
      </div>

    </div>
  );
}