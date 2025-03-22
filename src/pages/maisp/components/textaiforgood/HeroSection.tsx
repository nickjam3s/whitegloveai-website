
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-black w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight">
              TextAI for Good: <br />
              Empowering Nonprofits <br />
              with AI
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-8">
              TextAI for Good provides free AI-powered chatbots to nonprofits, enhancing engagement and amplifying impact.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="#contact" className="px-6 py-3 flex items-center justify-center">
                  <span className="flex items-center justify-center">
                    Contact Us
                  </span>
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <svg viewBox="0 0 500 400" className="w-full drop-shadow-xl">
                <defs>
                  <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#D946EF" />
                  </linearGradient>
                </defs>
                <rect x="50" y="50" width="400" height="300" rx="20" fill="#1A1F2C" />
                <circle cx="150" cy="150" r="60" fill="url(#heroGradient)" opacity="0.6" />
                <circle cx="350" cy="250" r="40" fill="url(#heroGradient)" opacity="0.4" />
                <g transform="translate(120, 180)">
                  <rect x="0" y="0" width="260" height="120" rx="10" fill="#333" />
                  <rect x="20" y="20" width="180" height="15" rx="7" fill="#555" />
                  <rect x="20" y="50" width="220" height="15" rx="7" fill="#555" />
                  <rect x="20" y="80" width="150" height="15" rx="7" fill="#555" />
                </g>
                <path d="M250 120 C 150 120, 150 280, 250 280" stroke="#8B5CF6" strokeWidth="3" fill="none" />
                <circle cx="250" cy="120" r="10" fill="#D946EF" />
                <circle cx="250" cy="280" r="10" fill="#D946EF" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
