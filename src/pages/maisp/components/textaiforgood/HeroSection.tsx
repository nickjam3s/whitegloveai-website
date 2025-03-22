
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-black w-full">
      <div className="max-w-7xl mx-auto">
        <img 
          src="/lovable-uploads/1235deba-179c-4ad8-a742-d37cc32e42f4.png" 
          alt="TextAI for Good: Empowering Nonprofits with AI" 
          className="w-full h-auto object-cover"
          width="1400"
          height="800"
          priority="true"
        />
      </div>
      
      {/* Mobile version - show content when image might be cut off */}
      <div className="md:hidden px-4 py-8">
        <div className="text-left">
          <h1 className="text-4xl font-semibold tracking-tight mb-6 heading-highlight">
            TextAI for Good: <br />
            Empowering Nonprofits <br />
            with AI
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8">
            TextAI for Good provides free AI-powered chatbots to nonprofits, enhancing engagement and amplifying impact.
          </p>
          <div className="mt-8">
            <Button asChild>
              <a href="#contact" className="px-6 py-3 flex items-center justify-center">
                <span className="flex items-center justify-center">
                  Contact Us
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
