import React from "react";
import { Button } from "@/components/ui/button";
import PeopleIllustration from "./PeopleIllustration";

const HeroSection = () => {
  return (
    <section className="relative bg-black w-full min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-white">
              TextAI for Good:<br />
              Empowering Nonprofits<br />
              with AI
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mb-8">
              TextAI for Good provides free AI-powered chatbots to nonprofits, enhancing engagement and amplifying impact.
            </p>
            <div className="mt-8">
              <Button asChild className="px-8 py-6 text-lg">
                <a href="#contact">
                  <span className="flex items-center justify-center">
                    Contact Us
                  </span>
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <PeopleIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
