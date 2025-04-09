import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';

// Add this declaration to handle the custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        hint?: boolean;
        'loading-anim-type'?: string;
        url?: string;
      }, HTMLElement>;
    }
  }
}

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const titleAnimation = {
    initial: { opacity: 0, scale: 0.9, y: -10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 1.2, type: "spring", stiffness: 80 }
  };

  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      
      {/* Animated floating elements */}
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
      
      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            {...titleAnimation}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE] font-sora"
          >
            Managed Service Offering for Humanoid Robots
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-3 sm:px-0 text-shadow-sm font-sora"
          >
            Seamless integration, operation, and maintenance of humanoid robots for your enterprise needs.
          </motion.p>
          
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center px-7 py-4 text-lg font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            <a 
              href="#service-features" 
              className="inline-flex items-center px-7 py-4 text-lg font-medium text-white bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors border border-secondary/50"
            >
              Learn More
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
