
import React from 'react';
import { ArrowRight, Map, BarChart4, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';

const vcaioFeatures = [{
  icon: Map,
  title: "Customized AI Roadmaps",
  description: "Tailored strategies that seamlessly integrate AI into your existing systems to drive growth and efficiency."
}, {
  icon: BarChart4,
  title: "Cost-Effective Expertise",
  description: "Access top-tier AI leadership without the overhead of a full-time hire."
}, {
  icon: Lightbulb,
  title: "Continuous Innovation",
  description: "Stay ahead with ongoing market insights and emerging best practices, all within a secure, compliant framework."
}];

const StrategicAILeadership = () => {
  return (
    <div className="space-y-8 mb-20 animate-fade-up text-center">
      <h2 className="text-3xl font-semibold mb-4 heading-highlight-scroll text-white">
        Strategic AI Leadership with vCAIO
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto">
        Unlock the full potential of artificial intelligence with our virtual Chief AI Officer (vCAIO). Our fractional, executive-level service offers you:
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {vcaioFeatures.map((feature, index) => (
          <div key={index} className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <feature.icon className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-medium mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
      
      {/* Updated button with centered "Learn More" text */}
      <div className="flex justify-center mt-8">
        <Link to="/vcaio/chiefaiofficer" className="w-full max-w-xs">
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

export default StrategicAILeadership;
