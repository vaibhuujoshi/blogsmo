import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to handle active route styles
  const isActive = (path: string) => location.pathname === path;

  // Navigation click handler that balances navigation and closing the mobile drawer
  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Column: Logo / Brand Trigger */}
          <div 
            onClick={() => handleNavigation("/")} 
            className="shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="font-bold text-xl tracking-tight text-black">Blogsmo</span>
          </div>

          {/* Center/Right Column: Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation("/feed")}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isActive("/feed") ? "text-black font-semibold" : "text-gray-500 hover:text-black"
              }`}
            >
              Feed
            </button>
            
            <button
              onClick={() => handleNavigation("/write")}
              className={`text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                isActive("/write") ? "text-black font-semibold" : "text-gray-500 hover:text-black"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              Write
            </button>

            {/* Profile Section Pin */}
            <div 
              onClick={() => handleNavigation("/login")}
              className={`flex items-center gap-2 cursor-pointer group transition-all p-1 rounded-full ${
                isActive("/profile") ? "ring-2 ring-black" : "hover:bg-gray-50"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop"
                alt="User profile"
                className="w-8 h-8 rounded-full object-cover border border-gray-100"
              />
            </div>
          </div>

          {/* Right Mobile: Hamburger Button Trigger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-black p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* --- Mobile Collapsible Panel Drawer --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-50 px-4 pt-2 pb-4 flex flex-col gap-3 shadow-xs">
          <button
            onClick={() => handleNavigation("/feed")}
            className={`w-full text-left py-2 px-3 rounded-md text-base font-medium ${
              isActive("/feed") ? "bg-gray-50 text-black font-semibold" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Feed
          </button>
          <button
            onClick={() => handleNavigation("/write")}
            className={`w-full text-left py-2 px-3 rounded-md text-base font-medium flex items-center gap-2 ${
              isActive("/write") ? "bg-gray-50 text-black font-semibold" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Write
          </button>
          
          <hr className="border-gray-100 my-1" />
          
          {/* Mobile Profile Link Element */}
          <button
            onClick={() => handleNavigation("/profile")}
            className={`w-full text-left py-2 px-3 rounded-md text-base font-medium flex items-center gap-3 ${
              isActive("/profile") ? "bg-gray-50 text-black font-semibold" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop"
              alt="User Profile"
              className="w-7 h-7 rounded-full object-cover"
            />
            My Profile
          </button>
        </div>
      )}
    </nav>
  );
}