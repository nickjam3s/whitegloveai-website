
import React from 'react';
import { ArrowRight, BrainCircuit, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';

const managedAIFeatures = [{
  icon: BrainCircuit,
  title: "24/7 AI Agents",
  description: "From text-based chatbots to voice-responsive agents and human-like avatars, our AI tools are designed to serve your customers at any time."
}, {
  icon: Shield,
  title: "Seamless Integration & Customization",
  description: "We tailor AI solutions to your unique workflows, ensuring minimal disruption and maximum ROI."
}, {
  icon: Shield,
  title: "Scalable & Secure Solutions",
  description: "Our services grow with your business, prioritizing data security and compliance every step of the way."
}];

const ManagedAIServices = () => {
  return (
    <div className="space-y-8 animate-fade-up text-center">
      <h2 className="text-3xl font-semibold mb-4 heading-highlight-scroll text-white">
        Managed AI Services
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto">
        Our Managed Artificial Intelligence Services empower your organization with round-the-clock support and robust AI solutions, including:
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {managedAIFeatures.map((feature, index) => (
          <div key={index} className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <feature.icon className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-medium mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
      
      {/* Updated "Learn More" button with centered text */}
      <div className="flex justify-center mt-8">
        <Link to="/maisp" className="w-full max-w-xs">
          <Button className="text-white bg-[#9b87f5] hover:bg-[#9b87f5]/90 font-bold relative z-10 flex items-center justify-center w-full">
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="relative z-20 font-bold text-white">Learn More</span>
            </span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ManagedAIServices;
