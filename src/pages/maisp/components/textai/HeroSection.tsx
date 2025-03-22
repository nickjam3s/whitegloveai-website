
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
              TextAI Managed Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Intelligent text-based AI agents that provide 24/7 support for your organization, enhancing
              customer experience and operational efficiency.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Get Started</a>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <svg viewBox="0 0 500 400" className="w-full drop-shadow-xl">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#D946EF" />
                  </linearGradient>
                </defs>
                <rect x="50" y="50" width="400" height="300" rx="20" fill="#1A1F2C" />
                <circle cx="250" cy="130" r="50" fill="url(#gradient)" opacity="0.8" />
                <rect x="100" y="200" width="300" height="15" rx="7" fill="#333" />
                <rect x="100" y="230" width="250" height="15" rx="7" fill="#333" />
                <rect x="100" y="260" width="200" height="15" rx="7" fill="#333" />
                <rect x="100" y="290" width="150" height="40" rx="10" fill="url(#gradient)" />
                <path d="M150 310 L160 300 L170 310" stroke="white" strokeWidth="2" fill="none" />
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="pulse-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
