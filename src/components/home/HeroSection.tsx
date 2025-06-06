import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

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
    <section id="hero" className="relative h-[100vh] flex items-center overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            {...fadeInUp}
            className="logo-container mb-8 md:mb-10"
          >
            <img 
              src="/lovable-uploads/197ddc10-c159-4f39-a269-e35142af32c5.png" 
              alt="WhitegloveAI Logo" 
              className="h-32 md:h-40 mx-auto" 
            />
          </motion.div>
          <motion.h1 
            {...titleAnimation}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Your Trusted AI Adoption Partner
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 text-shadow-sm"
          >
            At WhitegloveAI, we guide you through the transformative journey of AI adoption—ensuring every step is secure, compliant, and aligned with your business goals.
          </motion.p>
          <motion.div 
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link to="/contact" className="inline-flex items-center px-7 py-4 text-lg font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors">
              Get Started
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
            <a href="https://jzaxt350p9j.typeform.com/to/JlpkD8L8#name=xxxxx&email=xxxxx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-7 py-4 text-lg font-medium text-white bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors border border-secondary/50">
              Take the AI Readiness Assessment
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ y: 0, opacity: 0.5 }}
            animate={{ y: 10, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
                      </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
