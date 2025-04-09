import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <div className="flex justify-center mb-6"> {/* Added container for centering */}
            <img 
              src="/lovable-uploads/351136e7-c241-4c56-a606-3ff7a65a05ac.png" 
              alt="WGAI Logo" 
              width="100" 
              height="100" 
              className="logo-animation mx-auto" // Added mx-auto class
              style={{ 
                filter: "hue-rotate(260deg) brightness(150%) drop-shadow(0 0 10px rgba(112, 33, 238, 0.6))",
                display: "block" // Ensures block-level display
              }}
            />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE] font-sora"
          >
            MediaAI Managed Service
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-3 sm:px-0 text-shadow-sm font-sora"
          >
            WhitegloveAI's MediaAI service helps you create, manage, and optimize 
            digital media content with our enterprise-grade AI solutions.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;