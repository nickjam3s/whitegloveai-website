
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
    
    // Ensure smooth scrolling is disabled
    document.documentElement.style.scrollBehavior = 'auto';

    return () => {
      // No need to change anything on unmount
    };
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
