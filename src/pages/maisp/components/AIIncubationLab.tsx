
import React from 'react';
import { Rocket, Bug, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AIIncubationLab = () => {
  return (
    <section id="ai-incubation" className="py-16 px-4 md:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold text-primary mb-4">INNOVATION LAB</h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 heading-highlight-scroll">
          AI Incubation Laboratory
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8 animate-section">
          <div className="bg-card p-8 rounded-lg animate-on-scroll">
            <Rocket className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Rapid Prototyping</h3>
            <p className="text-gray-400 mb-6">Quickly develop and test AI solutions tailored to your specific business needs with our experienced team.</p>
          </div>
          
          <div className="bg-card p-8 rounded-lg animate-on-scroll">
            <Bug className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">AI Risk Mitigation</h3>
            <p className="text-gray-400 mb-6">Our lab environment allows for thorough testing and validation of AI systems before deployment to production.</p>
          </div>
          
          <div className="bg-card p-8 rounded-lg animate-on-scroll">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Secure Development</h3>
            <p className="text-gray-400 mb-6">All AI innovation happens within our secure environment, ensuring your data and intellectual property remain protected.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="default" size="lg" className="flex items-center justify-center mx-auto">
            <span className="flex items-center justify-center font-bold text-white">
              Explore Our Innovation Process →
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIIncubationLab;
