import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Video } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
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
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 flex justify-center"
          >
            <img 
              src="/lovable-uploads/351136e7-c241-4c56-a606-3ff7a65a05ac.png" 
              alt="TextAI Logo" 
              width="100" 
              height="100" 
              className="logo-animation"
              style={{ filter: "hue-rotate(260deg) brightness(150%) drop-shadow(0 0 10px rgba(112, 33, 238, 0.6))" }}
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            TextAI Managed Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-3 sm:px-0 text-shadow-sm"
          >
            WhitegloveAI's TextAI service, an externally-facing text-based AI chatbot 
            designed to enhance customer service operations through intelligent automation.
            It includes a detailed service package, key features and benefits, implementation 
            process, expected ROI, and additional services available.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
