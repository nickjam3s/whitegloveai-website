
import { Link, useNavigate } from "react-router-dom";
import { navigationLinks } from "./navigationData";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

const MobileMenu = ({ isOpen, onClose, currentPath }: MobileMenuProps) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleExternalNavigation = (path: string) => {
    onClose();
    window.location.href = path.startsWith("http") ? path : `https://${path}`;
  };

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg border border-gray-800 animate-fade-in max-h-96 overflow-y-auto">
        {navigationLinks.map((link) => (
          <div key={link.to || link.text}>
            {link.external ? (
              <button
                onClick={() => handleExternalNavigation(link.to!)}
                className="block w-full text-left px-3 py-2.5 text-base font-medium text-gray-300 hover:text-secondary"
              >
                {link.text}
              </button>
            ) : link.children ? (
              <div className="px-3 py-2.5">
                <div className="font-medium text-gray-300 mb-2 text-base">{link.text}</div>
                <div className="pl-4 space-y-1">
                  {link.children.map((child) => (
                    <div key={child.to || child.text}>
                      {child.children ? (
                        <div className="mb-2">
                          <div className="text-sm font-medium text-gray-400 mb-1">
                            {child.text}
                          </div>
                          <div className="pl-3 space-y-1">
                            {child.children.map((subChild) => (
                              <Link
                                key={subChild.to}
                                to={subChild.to}
                                className="block py-1 text-sm text-gray-400 hover:text-secondary"
                                onClick={onClose}
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
                              className="block w-full text-left py-1.5 text-sm text-gray-400 hover:text-secondary"
                            >
                              {child.text}
                            </button>
                          ) : (
                            <Link
                              to={child.to}
                              className="block py-1.5 text-sm text-gray-400 hover:text-secondary"
                              onClick={onClose}
                            >
                              {child.text}
                            </Link>
                          )
                        ) : (
                          <div className="text-sm font-medium text-gray-400 mb-1">
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
