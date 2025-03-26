
import { Link, useNavigate } from "react-router-dom";
import { navigationLinks } from "./navigationData";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

const MobileMenu = ({ isOpen, onClose, currentPath }: MobileMenuProps) => {
  const navigate = useNavigate();
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleExternalNavigation = (path: string) => {
    onClose();
    window.location.href = path.startsWith("http") ? path : `https://${path}`;
  };

  const toggleSubMenu = (menuName: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuName) 
        ? prev.filter(name => name !== menuName) 
        : [...prev, menuName]
    );
  };

  const isExpanded = (menuName: string) => expandedMenus.includes(menuName);

  return (
    <div className="md:hidden absolute top-20 left-0 right-0 z-50">
      <div className="mx-4 p-4 bg-black/95 backdrop-blur-lg rounded-lg border border-gray-800 animate-in fade-in slide-in-from-top-5 shadow-xl">
        <div className="space-y-1">
          {navigationLinks.map((link) => (
            <div key={link.to || link.text} className="border-b border-gray-800 last:border-b-0">
              {link.external ? (
                <button
                  onClick={() => handleExternalNavigation(link.to!)}
                  className="flex items-center justify-between w-full text-left px-3 py-3 text-base font-medium text-gray-300 hover:text-secondary"
                >
                  <span>{link.text}</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              ) : link.children ? (
                <div className="py-1">
                  <button
                    onClick={() => toggleSubMenu(link.text)}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-secondary"
                  >
                    <span>{link.text}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded(link.text) ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isExpanded(link.text) && (
                    <div className="pl-4 py-1 space-y-1 mt-1 bg-gray-900/30 rounded-md mx-2">
                      {link.children.map((child) => (
                        <div key={child.to || child.text}>
                          {child.children ? (
                            <div className="mb-1">
                              <button
                                onClick={() => toggleSubMenu(child.text)}
                                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-400 hover:text-secondary"
                              >
                                <span>{child.text}</span>
                                <ChevronDown className={`h-3 w-3 transition-transform ${isExpanded(child.text) ? 'rotate-180' : ''}`} />
                              </button>
                              
                              {isExpanded(child.text) && (
                                <div className="pl-3 py-1 space-y-1">
                                  {child.children.map((subChild) => (
                                    <Link
                                      key={subChild.to}
                                      to={subChild.to}
                                      className="block py-1.5 px-3 text-sm text-gray-400 hover:text-secondary"
                                      onClick={onClose}
                                    >
                                      {subChild.text}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            child.to ? (
                              child.external ? (
                                <button
                                  onClick={() => handleExternalNavigation(child.to!)}
                                  className="flex items-center justify-between w-full text-left px-3 py-1.5 text-sm text-gray-400 hover:text-secondary"
                                >
                                  <span>{child.text}</span>
                                  <ExternalLink className="h-3 w-3" />
                                </button>
                              ) : (
                                <Link
                                  to={child.to}
                                  className="block px-3 py-1.5 text-sm text-gray-400 hover:text-secondary"
                                  onClick={onClose}
                                >
                                  {child.text}
                                </Link>
                              )
                            ) : (
                              <div className="px-3 py-1.5 text-sm font-medium text-gray-400">
                                {child.text}
                              </div>
                            )
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.to!}
                  className={`block px-3 py-3 text-base font-medium transition-all duration-200 ${
                    currentPath === link.to
                      ? "text-secondary"
                      : "text-gray-300 hover:text-secondary"
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
    </div>
  );
};

export default MobileMenu;
