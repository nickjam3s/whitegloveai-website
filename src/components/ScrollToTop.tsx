
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component scrolls the window to the top whenever
 * the pathname in the URL changes (route navigation occurs)
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // First do an immediate scroll to ensure we're at the top
    window.scrollTo(0, 0);
    
    // Then set up smooth scrolling for subsequent scrolls
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 100);

    return () => {
      // Reset scroll behavior when component unmounts or before next effect
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
