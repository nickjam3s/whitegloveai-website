
import React from "react";

const AboutWhitegloveSection = () => {
  return (
    <section className="py-24 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative">
              <img 
                src="/lovable-uploads/e1ce9eec-bea9-4dea-85fc-a62460c48ae4.png" 
                alt="WhitegloveAI Logo" 
                className="w-[400px] h-auto"
              />
              <span className="absolute top-0 right-0 text-white text-3xl font-bold mt-2 mr-4">TM</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-6xl font-bold mb-8">About WhitegloveAI</h2>
            <p className="text-xl leading-relaxed">
              WhitegloveAI delivers cutting-edge AI solutions 
              that automate workflows, elevate customer 
              experiences, and drive rapid growth for 
              businesses across all scales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhitegloveSection;
