
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-10 bg-black w-full min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Section (Text & Logo) */}
          <div className="flex-1">
            {/* Logo */}
            <div className="mb-5">
              <svg width="100" height="100" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 0C17.909 0 0 17.909 0 40C0 62.091 17.909 80 40 80C62.091 80 80 62.091 80 40C80 17.909 62.091 0 40 0ZM40 72C22.355 72 8 57.645 8 40C8 22.355 22.355 8 40 8C57.645 8 72 22.355 72 40C72 57.645 57.645 72 40 72Z" fill="#7021EE"/>
                <path d="M44 24H36V36H24V44H36V56H44V44H56V36H44V24Z" fill="#7021EE"/>
              </svg>
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

          {/* Right Section (Illustration) */}
          <div className="flex-1 flex justify-center md:justify-end">
            {/* Hand holding phone illustration */}
            <div className="w-[300px]">
              <svg viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Phone body */}
                <rect x="150" y="50" width="150" height="300" rx="20" fill="#1A1A1A" />
                <rect x="170" y="70" width="110" height="260" rx="10" fill="#2A2A2A" />
                
                {/* Phone screen content */}
                <rect x="190" y="90" width="70" height="150" rx="5" fill="#333333" />
                <circle cx="225" cy="150" r="25" fill="#7021EE" fillOpacity="0.7" />
                <rect x="195" y="250" width="60" height="10" rx="5" fill="#7021EE" fillOpacity="0.5" />
                <rect x="195" y="270" width="60" height="10" rx="5" fill="#7021EE" fillOpacity="0.3" />
                <rect x="195" y="290" width="40" height="10" rx="5" fill="#7021EE" fillOpacity="0.2" />
                
                {/* Hand */}
                <path d="M100 200C120 180 140 170 160 180C180 190 180 220 180 240C180 260 170 300 150 330C130 360 100 380 80 390C60 400 30 400 20 380C10 360 20 330 40 320C60 310 90 300 110 280C130 260 140 230 130 220C120 210 100 220 100 200Z" fill="#8B5A2B" />
                <path d="M70 350C90 340 110 320 120 300C130 280 130 260 130 240C130 220 120 210 110 210C100 210 90 220 90 240C90 260 100 280 90 290C80 300 60 310 50 320C40 330 30 350 40 360C50 370 65 355 70 350Z" fill="#8B5A2B" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
