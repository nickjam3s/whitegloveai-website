
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-10 pb-5 bg-black w-full min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          {/* Left Section (Text & Logo) */}
          <div className="flex-1">
            {/* Logo */}
            <div className="mb-5 logo-container">
              <img 
                src="/lovable-uploads/351136e7-c241-4c56-a606-3ff7a65a05ac.png" 
                alt="TextAI Logo" 
                width="100" 
                height="100" 
                className="logo-animation"
                style={{ filter: "hue-rotate(260deg) brightness(150%) drop-shadow(0 0 10px rgba(112, 33, 238, 0.6))" }}
              />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              TextAI Managed Service
            </h1>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              WhitegloveAI's TextAI service, an externally-facing text-based AI chatbot 
              designed to enhance customer service operations through intelligent automation.
              It includes a detailed service package, key features and benefits, implementation 
              process, expected ROI, and additional services available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
