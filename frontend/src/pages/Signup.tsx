import { useState } from "react";
import { Button } from "../components/Button";
import { Testimonial } from "../components/Testimonial";
import { InputBox } from "../components/InputBox";
import { useNavigate } from "react-router-dom";
import SignupUser from "../api/signup";

export default function SignUpPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        SignupUser(email, password, name).then(() => navigate('/feed'));
    };
    return (
        <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-white">

            {/* Left Column: Sign Up Form */}
            <div className="flex items-center justify-center p-8 lg:p-24 bg-white">
                <div className="w-full max-w-100 flex flex-col gap-6">

                    {/* Header */}
                    <div className="text-center lg:text-left mb-2">
                        <h1 className="text-4xl font-bold text-black tracking-tight mb-2">
                            Create an account
                        </h1>
                        <p className="text-sm text-gray-500">
                            Already have an account?{" "}
                            <span onClick={() => navigate('/login')} className="underline hover:text-black transition-colors cursor-pointer">
                                Login
                            </span>
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <InputBox
                            label="Name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
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
                            <Button type="submit">Sign Up</Button>
                        </div>
                    </form>

                </div>
            </div>

            {/* Right Column: Testimonial panel */}
            <div className="hidden lg:flex items-center justify-left bg-[#f4f4f5]">
                <Testimonial
                    quote="The customer service I received was exceptional. The support team went above and beyond to address my concerns."
                    author="Jules Winnfield"
                    role="CEO, Acme Inc"
                />
            </div>

        </div>
    );
}