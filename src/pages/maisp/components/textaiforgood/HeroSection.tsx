
import React from "react";
import PeopleIllustration from "./PeopleIllustration";

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Empowering Nonprofits Together
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300">
              AI-powered chatbots that help nonprofit organizations enhance their digital presence
              and better serve their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#7021EE] text-white px-8 py-4 rounded-md font-medium hover:bg-[#7021EE]/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <PeopleIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
