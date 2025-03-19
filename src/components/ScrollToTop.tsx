
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component scrolls the window to the top whenever
 * the pathname in the URL changes (route navigation occurs)
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smoothly scroll to the top of the page when route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
