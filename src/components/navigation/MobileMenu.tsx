
import { Link } from "react-router-dom";
import { navigationLinks } from "./navigationData";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

const MobileMenu = ({ isOpen, onClose, currentPath }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg border border-gray-800 animate-fade-in">
        {navigationLinks.map((link) => (
          <div key={link.to || link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2.5 text-base font-medium text-gray-300 hover:text-secondary"
                onClick={onClose}
              >
                {link.text}
              </a>
            ) : link.children ? (
              <div className="px-3 py-2.5">
                <div className="font-medium text-gray-300 mb-2 text-base">{link.text}</div>
                <div className="pl-4 space-y-1">
                  {link.children.map((child) => (
                    <div key={child.to || child.text}>
                      {child.children ? (
                        <div className="mb-2">
                          <div className="text-base font-medium text-gray-400 mb-1">
                            {child.text}
                          </div>
                          <div className="pl-4 space-y-1">
                            {child.children.map((subChild) => (
                              <Link
                                key={subChild.to}
                                to={subChild.to}
                                className="block py-1.5 text-base text-gray-400 hover:text-secondary"
                                onClick={onClose}
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
                            className="block py-1.5 text-base text-gray-400 hover:text-secondary"
                            onClick={onClose}
                          >
                            {child.text}
                          </Link>
                        ) : (
                          <div className="text-base font-medium text-gray-400 mb-1">
                            {child.text}
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                to={link.to!}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-all duration-200 ${
                  currentPath === link.to
                    ? "text-secondary bg-black/50"
                    : "text-gray-300 hover:text-secondary hover:bg-black/50"
                }`}
                onClick={onClose}
              >
                {link.text}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
