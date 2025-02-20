
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface MenuItemProps {
  link: {
    text: string;
    to?: string;
    href?: string;
    external?: boolean;
    children?: Array<{
      to?: string;
      text: string;
      children?: Array<{
        to: string;
        text: string;
      }>;
    }>;
  };
  isActive: boolean;
}

const DesktopMenuItem = ({ link, isActive }: MenuItemProps) => {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-secondary transition-colors text-lg"
      >
        {link.text}
      </a>
    );
  }

  if (link.children) {
    return (
      <div className="flex items-center cursor-pointer text-gray-300 hover:text-secondary text-lg">
        <span>{link.text}</span>
        <ChevronDown className="ml-1 h-4 w-4" />
        <div className="absolute top-full left-0 mt-2 w-52 bg-black/90 backdrop-blur-md border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          {link.children.map((child) => (
            <div key={child.to || child.text} className="relative group/nested">
              {child.children ? (
                <div className="px-4 py-2.5 text-base text-gray-300 hover:text-secondary hover:bg-white/5 flex items-center justify-between">
                  <span>{child.text}</span>
                  <ChevronDown className="h-3 w-3" />
                  <div className="absolute left-full top-0 ml-2 w-52 bg-black/90 backdrop-blur-md border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                    {child.children.map((subChild) => (
                      <Link
                        key={subChild.to}
                        to={subChild.to}
                        className="block px-4 py-2.5 text-base text-gray-300 hover:text-secondary hover:bg-white/5"
                      >
                        {subChild.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                child.to ? (
                  <Link
                    to={child.to}
                    className="block px-4 py-2.5 text-base text-gray-300 hover:text-secondary hover:bg-white/5"
                  >
                    {child.text}
                  </Link>
                ) : (
                  <div className="px-4 py-2.5 text-base text-gray-300 font-medium">
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
      className={`transition-all duration-200 hover:text-secondary text-lg ${
        isActive ? "text-secondary font-medium" : "text-gray-300"
      }`}
    >
      {link.text}
    </Link>
  );
};

export default DesktopMenuItem;
