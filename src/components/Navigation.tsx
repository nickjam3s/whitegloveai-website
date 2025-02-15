
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

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

  const links = [
    { to: "/about", text: "About" },
    {
      text: "Managed AI Services",
      to: "/maisp",
      children: [
        { to: "/maisp/textai", text: "TextAI" },
        { to: "/maisp/textaiforgood", text: "AI for Good" },
        { to: "/maisp/voiceai", text: "VoiceAI" },
        { to: "/maisp/avatarai", text: "AvatarAI" },
        { to: "/maisp/automateai", text: "AutomateAI" },
        { to: "/maisp/humaniodai", text: "HumanoidAI" },
        { to: "/maisp/vendorai", text: "VendorAI" },
      ],
    },
    {
      text: "vCAIO",
      to: "/vcaio",
      children: [
        { to: "/vcaio/donnie", text: "Donnie" },
        { to: "/vcaio/jason", text: "Jason" },
        { to: "/vcaio/albert", text: "Albert" },
        { to: "/vcaio/launch", text: "Launchpad" },
        { to: "/vcaio/adopt", text: "Adopt" },
        { to: "/vcaio/enable", text: "Enable" },
      ],
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
          >
            <img
              src="/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png"
              alt="WhitegloveAI Logo"
              className="h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <div key={link.to} className="relative group">
                {link.children ? (
                  <div className="flex items-center cursor-pointer text-gray-300 hover:text-secondary">
                    <span>{link.text}</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-secondary hover:bg-white/5"
                        >
                          {child.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.to}
                    className={`transition-all duration-200 hover:text-secondary ${
                      location.pathname === link.to
                        ? "text-secondary font-medium"
                        : "text-gray-300"
                    }`}
                  >
                    {link.text}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg border border-gray-800 animate-fade-in">
              {links.map((link) => (
                <div key={link.to}>
                  {link.children ? (
                    <div className="px-3 py-2">
                      <div className="font-medium text-gray-300 mb-2">{link.text}</div>
                      <div className="pl-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block py-1 text-sm text-gray-400 hover:text-secondary"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.to}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                        location.pathname === link.to
                          ? "text-secondary bg-black/50"
                          : "text-gray-300 hover:text-secondary hover:bg-black/50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.text}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
