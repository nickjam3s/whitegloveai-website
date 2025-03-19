
import React from "react";

const HeroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              TextAI Managed Service
            </h1>
            <p className="text-gray-400 text-lg">
              WhitegloveAI's TextAI service, an externally-facing text-based 
              AI chatbot designed to enhance customer service operations 
              through intelligent automation. It includes a detailed service 
              package, key features and benefits, implementation process, 
              expected ROI, and additional services available.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/2a4228f0-f0be-4ebc-b674-f62b01b54c64.png" 
              alt="Phone with TextAI interface" 
              className="w-full md:w-full lg:w-full xl:w-full object-contain max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
