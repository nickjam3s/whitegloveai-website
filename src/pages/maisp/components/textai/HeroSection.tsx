
import React from "react";

const HeroSection = () => {
  return (
    <section className="py-10 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-8">
          {/* Logo SVG inline for faster loading */}
          <svg 
            className="h-16 w-auto mx-auto" 
            viewBox="0 0 100 100" 
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fillOpacity="0" />
            <path d="M30 40 L70 40 L70 60 L30 60 Z" fillOpacity="0" stroke="white" strokeWidth="2" />
            <path d="M50 30 L50 70" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          TextAI Managed Service
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          WhitegloveAI's TextAI service, an externally-facing text-based AI chatbot 
          designed to enhance customer service operations through intelligent automation...
        </p>
        
        <div className="mt-10 flex justify-center">
          {/* Hand holding phone illustration SVG */}
          <svg 
            className="w-64 h-auto" 
            viewBox="0 0 200 300" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M80 50 L120 50 L120 200 L80 200 Z" fill="#333" stroke="white" />
            <rect x="85" y="70" width="30" height="50" fill="#7021EE" opacity="0.8" />
            <path d="M70 150 C40 180, 40 230, 70 250" stroke="white" strokeWidth="2" fillOpacity="0" />
            <path d="M50 200 C30 210, 30 220, 50 230" stroke="white" strokeWidth="2" fillOpacity="0" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
