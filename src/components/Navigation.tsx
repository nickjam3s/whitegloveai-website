
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
          ? "bg-purple-900/20 shadow-lg border border-purple-900/30" 
          : "bg-black/30"
      }`}>
        <div className="flex items-center justify-between h-16 px-4">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <div key={link.to || link.text} className="relative group">
                <DesktopMenuItem
                  link={link}
                  isActive={location.pathname === link.to}
                />
              </div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
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
