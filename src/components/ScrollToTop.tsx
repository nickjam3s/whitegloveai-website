
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component scrolls the window to the top whenever
 * the pathname in the URL changes (route navigation occurs)
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes, but don't use smooth scrolling
    window.scrollTo(0, 0);
    
    // We're removing the smooth scrolling behavior
    // document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      // Reset scroll behavior when component unmounts
      // document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
