
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./navigation/Logo";
import DesktopMenuItem from "./navigation/DesktopMenuItem";
import MobileMenu from "./navigation/MobileMenu";
import { navigationLinks } from "./navigation/navigationData";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-2 ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      <div className={`max-w-7xl mx-auto rounded-full backdrop-blur-md ${
        scrolled 
          ? "bg-purple-900/30 shadow-lg border border-purple-900/40" 
          : "bg-purple-900/30 border border-purple-900/30"
      }`}>
        <div className="flex items-center justify-between h-16 px-4 relative z-10">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation - Moved 20% to the left */}
          <div className="hidden md:flex items-center space-x-8 transform -translate-x-[20%]">
            {navigationLinks.map((link) => (
              <div key={link.to || link.text} className="relative group">
                <DesktopMenuItem
                  link={link}
                  isActive={location.pathname === link.to}
                />
              </div>
            ))}
          </div>

          {/* Mobile Navigation Button - Added proper spacing */}
          <div className="md:hidden flex-shrink-0 ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          currentPath={location.pathname}
        />
      </div>
    </nav>
  );
};

export default Navigation;
