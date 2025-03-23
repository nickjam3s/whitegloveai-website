
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
            {/* Phone holder illustration */}
            <div className="w-[300px]">
              <img 
                src="/lovable-uploads/f515e78a-651f-4e80-a794-765e33874e4d.png" 
                alt="Hand holding phone with TextAI interface" 
                className="w-full h-auto" 
                width="800" 
                height="600"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
