import { useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion"; // Make sure to import motion
import { useIsMobile } from "@/hooks/use-mobile"; // Import the hook
import NewHeroSection from './components/enable/NewHeroSection';
// ... other imports remain the same

const Enable = () => {
  const isMobile = useIsMobile(); // Add this hook
  
  // ... your existing useLayoutEffect and useEffect remain the same

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Add the floating background container */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#7021EE]/20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: isMobile ? `${Math.random() * 100 + 30}px` : `${Math.random() * 200 + 50}px`,
                height: isMobile ? `${Math.random() * 100 + 30}px` : `${Math.random() * 200 + 50}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Your existing content */}
      <div className="relative z-10"> {/* Add relative positioning and z-index */}
        <NewHeroSection />
        <IntroductionSection />
        <ChallengesTableSection />
        <SolutionSection />
        <ResultsSection />
        <ContactSection />
        <FooterSection />
        <ScrollAnimation targetId="introduction-section" />
      </div>
    </div>
  );
};

export default Enable;