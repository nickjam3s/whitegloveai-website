
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
            {/* For a logo, you would need to provide the SVG or use an icon */}
            <div className="mb-5">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            {/* Replace with the actual illustration */}
            <div className="max-w-[350px]">
              <svg viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <rect width="250" height="350" rx="20" fill="#1A1A1A" />
                <rect x="20" y="20" width="210" height="310" rx="10" fill="#2A2A2A" />
                <circle cx="125" cy="175" r="80" fill="#3A3A3A" />
                <path d="M125 115C92.9086 115 67 140.909 67 173C67 205.091 92.9086 231 125 231C157.091 231 183 205.091 183 173C183 140.909 157.091 115 125 115ZM110 143H140V158H155V188H140V203H110V188H95V158H110V143Z" fill="#7021EE"/>
                <rect x="270" y="140" width="80" height="120" rx="40" fill="#7021EE" fillOpacity="0.5" />
                <path d="M310 120C293.431 120 280 133.431 280 150V250C280 266.569 293.431 280 310 280C326.569 280 340 266.569 340 250V150C340 133.431 326.569 120 310 120Z" fill="#7021EE" fillOpacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
