
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return <section className="bg-black text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="text-center max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-highlight-scroll">
              Empowering Nonprofits Together
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 heading-highlight-scroll stagger-1">
              AI-powered chatbots that help nonprofit organizations enhance their digital presence
              and better serve their communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll stagger-2">
              <a href="#contact" className="px-6 py-3 bg-[#9b87f5] hover:bg-[#9b87f5]/80 text-white rounded-md transition-colors animate-on-scroll stagger-3">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
