
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

          {/* Right Section (Hand Holding Phone SVG) */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-[300px]">
              <svg viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Hand */}
                <path d="M50 250C60 230 80 220 100 230C120 240 125 280 130 310C135 340 138 380 130 400C122 420 100 430 80 430C60 430 40 420 30 400C20 380 30 350 50 330C70 310 90 290 85 270C80 250 60 240 50 250Z" fill="#D2A378" />
                <path d="M40 350C50 330 65 320 80 320C95 320 105 340 100 360C95 380 80 400 65 410C50 420 30 420 20 410C10 400 15 380 25 370C35 360 45 345 40 350Z" fill="#BF8E60" />
                <path d="M120 240C130 220 150 215 165 225C180 235 185 260 180 280C175 300 160 320 140 330C120 340 100 330 90 310C80 290 90 260 110 250C130 240 140 230 120 240Z" fill="#D2A378" />
                <path d="M90 290C100 270 120 260 140 270C160 280 170 310 160 340C150 370 130 390 110 400C90 410 70 400 60 380C50 360 60 330 80 310C100 290 110 280 90 290Z" fill="#BF8E60" />
                
                {/* Phone body */}
                <rect x="110" y="60" width="120" height="240" rx="15" fill="#222222" stroke="#7021EE" strokeWidth="2" />
                <rect x="118" y="80" width="104" height="200" rx="8" fill="#333333" />
                
                {/* Phone screen - TextAI interface */}
                <rect x="125" y="90" width="90" height="180" rx="4" fill="#111111" />
                
                {/* Phone screen content */}
                {/* TextAI Logo */}
                <circle cx="145" cy="110" r="10" fill="#7021EE" fillOpacity="0.8" />
                <path d="M148 106H142V110H138V114H142V118H148V114H152V110H148V106Z" fill="#FFFFFF" />
                
                {/* Chat bubbles */}
                <rect x="140" y="130" width="60" height="12" rx="6" fill="#333333" />
                <rect x="150" y="150" width="50" height="12" rx="6" fill="#7021EE" fillOpacity="0.7" />
                <rect x="130" y="170" width="70" height="12" rx="6" fill="#333333" />
                <rect x="160" y="190" width="40" height="12" rx="6" fill="#7021EE" fillOpacity="0.7" />
                <rect x="140" y="210" width="60" height="12" rx="6" fill="#333333" />
                <rect x="155" y="230" width="45" height="12" rx="6" fill="#7021EE" fillOpacity="0.7" />
                
                {/* Phone notch */}
                <rect x="155" y="70" width="30" height="5" rx="2.5" fill="#111111" />
                
                {/* Phone button */}
                <rect x="165" y="285" width="10" height="10" rx="5" stroke="#444444" strokeWidth="1" />
                
                {/* Subtle glow */}
                <circle cx="170" cy="170" r="70" fill="url(#phoneGlow)" fillOpacity="0.4" />
                
                {/* Definitions for gradients */}
                <defs>
                  <radialGradient id="phoneGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(170 170) rotate(90) scale(70)">
                    <stop stopColor="#9b87f5" />
                    <stop offset="1" stopColor="#9b87f5" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
