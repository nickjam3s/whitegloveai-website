
import React from 'react';
import { Shield, BrainCircuit, BarChart4 } from "lucide-react";

const differenceFeatures = [{
  icon: Shield,
  title: "Trusted Leadership",
  description: "Benefit from our patented expertise and deep industry knowledge, ensuring your AI initiatives are led by the very best."
}, {
  icon: BrainCircuit,
  title: "Guided AI Adoption",
  description: "Our hands-on approach means you're never alone on your AI journey—from initial strategy to continuous improvement."
}, {
  icon: Shield,
  title: "Secure Adoption",
  description: "We prioritize risk reduction and robust security measures, ensuring that every AI solution is implemented with the highest standards."
}, {
  icon: BarChart4,
  title: "Proven Impact",
  description: "Success stories like the City of McKinney HR transformation, which achieved a 68% deflection of routine inquiries."
}];

const WhitegloveAIDifference = () => {
  return (
    <section id="difference" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-semibold mb-4 heading-highlight-scroll text-white">
            The WhitegloveAI Difference
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the difference of working with a trusted partner committed to your AI success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up">
          {differenceFeatures.map((feature, index) => (
            <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors flex flex-col items-center text-center">
              <feature.icon className="h-10 w-10 text-secondary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhitegloveAIDifference;
