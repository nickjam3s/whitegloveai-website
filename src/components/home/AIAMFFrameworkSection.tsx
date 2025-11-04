
import React from 'react';
import { Download, Lightbulb, BrainCircuit, BarChart4, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const frameworkSteps = [{
  icon: Lightbulb,
  title: "Assessing Your Readiness",
  description: "We begin with a thorough evaluation of your organization's current AI maturity to pinpoint key opportunities."
}, {
  icon: BrainCircuit,
  title: "Strategic Planning",
  description: "Crafting a bespoke roadmap that aligns AI initiatives with your core business objectives."
}, {
  icon: BarChart4,
  title: "Implementation & Integration",
  description: "Leveraging cutting-edge technology to deploy AI solutions that are secure, scalable, and optimized for immediate impact."
}, {
  icon: Shield,
  title: "Continuous Improvement",
  description: "Regularly monitoring progress and fine-tuning solutions to ensure ongoing innovation and measurable results."
}];

const AIAMFFrameworkSection = () => {
  return (
    <section id="ai-amf" className="py-20 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <a href="https://www.aiamf.ai" target="_blank" rel="noopener noreferrer" className="inline-block relative rounded-xl overflow-hidden group">
            <img src="/lovable-uploads/4647222e-2cb8-4c83-a56c-fafa2c6b70a0.png" alt="AI-AMF Framework Diagram" className="mx-auto mb-8 max-w-xl w-full transition-transform duration-300 group-hover:scale-[1.02] relative z-10" />
          </a>
          <h2 className="text-3xl font-semibold mb-4 heading-highlight-scroll text-white">
            AI Adoption & Management Framework (AI-AMF)
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Our proprietary and opensource AI-AMF framework is the cornerstone of our approach to AI transformation. It provides a structured, step-by-step pathway to AI success.
          </p>
          <a href="https://www.aiamf.ai" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs inline-block">
            <Button className="text-white bg-[#9b87f5] hover:bg-[#9b87f5]/90 font-bold w-full flex items-center justify-center">
              Download the AI-AMF
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-8 animate-fade-up">
          {frameworkSteps.map((step, index) => (
            <div key={index} className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 flex flex-col items-center text-center shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <step.icon className="h-10 w-10 text-secondary mb-4 mx-auto relative" />
              <h3 className="text-xl font-semibold mb-3 relative">{step.title}</h3>
              <p className="text-gray-300 relative">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAMFFrameworkSection;
