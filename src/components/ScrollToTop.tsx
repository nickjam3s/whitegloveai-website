
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component scrolls the window to the top whenever
 * the pathname in the URL changes (route navigation occurs)
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force immediate scroll to top without smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    
    // Ensure smooth scrolling is disabled temporarily
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Re-enable smooth scrolling after a short delay
    const timer = setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
