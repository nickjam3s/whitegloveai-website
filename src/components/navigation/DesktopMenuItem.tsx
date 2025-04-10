import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, ExternalLink } from "lucide-react";

interface SubChildLink {
  to: string;
  text: string;
}

interface ChildLink {
  to?: string;
  text: string;
  external?: boolean;
  children?: SubChildLink[];
}

interface MenuLink {
  text: string;
  to?: string;
  external?: boolean;
  children?: ChildLink[];
}

interface MenuItemProps {
  link: MenuLink;
  isActive: boolean;
}

const DesktopMenuItem = ({ link, isActive }: MenuItemProps) => {
  const navigate = useNavigate();

  const handleExternalNavigation = (path: string) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
  };

  if (link.external) {
    return (
      <button
        onClick={() => handleExternalNavigation(link.to!)}
        className="flex items-center text-gray-300 nav-item-hover text-lg"
      >
        {link.text}
        <ExternalLink className="ml-1 h-4 w-4" />
      </button>
    );
  }

  if (link.children) {
    return (
      <div className="flex items-center cursor-pointer text-gray-300 nav-item-hover text-lg relative group">
        <span>{link.text}</span>
        <ChevronDown className="ml-1 h-4 w-4" />
        {/* Dropdown menu */}
        <div className="absolute top-full left-0 mt-2 w-52 bg-black/90 backdrop-blur-md border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          {link.children.map((child) => (
            <div key={child.to || child.text} className="relative group/nested">
              {child.children ? (
                <div className="px-4 py-2.5 text-base text-gray-300 hover:text-secondary hover:bg-white/5 flex items-center justify-between transition-colors duration-200">
                  <span>{child.text}</span>
                  <ChevronDown className="h-3 w-3" />
                  {/* Nested dropdown */}
                  <div className="absolute left-full top-0 w-52 bg-black/90 backdrop-blur-md border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                    {child.children.map((subChild) => (
                      <Link
                        key={subChild.to}
                        to={subChild.to}
                        className="block px-4 py-2.5 text-base text-gray-300 hover:text-secondary hover:bg-white/5 transition-colors duration-200 text-left"
                      >
                        {subChild.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                child.to ? (
                  child.external ? (
                    <button
                      onClick={() => handleExternalNavigation(child.to!)}
                      className="w-full text-left flex items-center justify-between px-4 py-2.5 text-base text-gray-300 hover:text-secondary hover:bg-white/5 transition-colors duration-200"
                    >
                      {child.text}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </button>
                  ) : (
                    <Link
                      to={child.to}
                      className="block px-4 py-2.5 text-base text-gray-300 hover:text-secondary hover:bg-white/5 transition-colors duration-200 text-left"
                    >
                      {child.text}
                    </Link>
                  )
                ) : (
                  <div className="px-4 py-2.5 text-base text-gray-300 font-medium text-left">
                    {child.text}
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link
      to={link.to!}
      className={`transition-all duration-200 nav-item-hover text-lg ${
        isActive ? "text-secondary font-medium" : "text-gray-300"
      }`}
    >
      {link.text}
    </Link>
  );
};

export default DesktopMenuItem;