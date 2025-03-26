
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import HeroSection from "@/components/layout/HeroSection";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black">
      <HeroSection 
        title="404 - Page Not Found"
        subtitle="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        showArrow={false}
      />
      
      <AnimatedSection className="flex items-center justify-center py-20">
        <Link to="/">
          <Button size="lg" className="px-8 py-6 text-lg">
            Return to Home
          </Button>
        </Link>
      </AnimatedSection>
    </div>
  );
};

export default NotFound;
