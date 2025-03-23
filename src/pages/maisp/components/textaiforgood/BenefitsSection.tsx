
import React from "react";
import { Timer, MessageSquare, Target } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-black w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Become a Part of the AI Movement
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          <div className="text-left">
            <div className="mb-5">
              <Timer className="h-12 w-12 text-[#7021EE]" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Enhanced Efficiency</h3>
            <p className="text-gray-400">AI chatbots handle routine inquiries 24/7, freeing staff for high-value tasks</p>
          </div>
          
          <div className="text-left">
            <div className="mb-5">
              <MessageSquare className="h-12 w-12 text-[#7021EE]" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Improved Engagement</h3>
            <p className="text-gray-400">Provide instant, personalized responses to donor and volunteer inquiries</p>
          </div>
          
          <div className="text-left">
            <div className="mb-5">
              <Target className="h-12 w-12 text-[#7021EE]" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Amplified Impact</h3>
            <p className="text-gray-400">Scale your outreach efforts without increasing overhead costs</p>
          </div>
        </div>

        <div className="mt-16 text-left">
          <p className="text-lg text-gray-400">
            TextAI for Good is dedicated to making AI accessible and impactful for nonprofits. 
            Let us help you amplify your mission and create a lasting impact in the communities you serve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
