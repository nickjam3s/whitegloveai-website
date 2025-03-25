
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Video } from "lucide-react";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#7928CA,transparent_60%)] opacity-25" style={{
          transformOrigin: '60% 40%',
          animation: 'morphing 12s ease-in-out infinite, rotating 15s linear infinite'
        }}></div>
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center animate-fade-up">
          <div className="mb-5 flex justify-center">
            <img 
              src="/lovable-uploads/351136e7-c241-4c56-a606-3ff7a65a05ac.png" 
              alt="TextAI Logo" 
              width="100" 
              height="100" 
              className="logo-animation"
              style={{ filter: "hue-rotate(260deg) brightness(150%) drop-shadow(0 0 10px rgba(112, 33, 238, 0.6))" }}
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight">
            TextAI Managed Service
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            WhitegloveAI's TextAI service, an externally-facing text-based AI chatbot 
            designed to enhance customer service operations through intelligent automation.
            It includes a detailed service package, key features and benefits, implementation 
            process, expected ROI, and additional services available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
