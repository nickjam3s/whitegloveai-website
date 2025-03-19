
import React from "react";

const AboutWhitegloveSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/e4ccc6f3-3f7d-421b-a315-133d5ec75ee0.png" 
              alt="WhitegloveAI Logo Large" 
              className="max-w-xs mx-auto md:mx-0"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About WhitegloveAI
            </h2>
            <p className="text-gray-400 text-lg">
              WhitegloveAI delivers cutting-edge AI solutions that automate workflows, 
              elevate customer experiences, and drive rapid growth for businesses across all scales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhitegloveSection;
