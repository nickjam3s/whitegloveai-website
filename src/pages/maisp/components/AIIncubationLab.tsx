
import React from 'react';
import { Rocket, Bug, Shield } from 'lucide-react';

const AIIncubationLab = () => {
  return (
    <section id="ai-incubation-lab" className="py-16 px-4 md:px-6 lg:px-8 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold text-primary mb-4">AI INNOVATION</h2>
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-8 heading-highlight-scroll">
          AI Incubation Lab
        </h3>
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          Launch AI-powered products faster with enterprise-grade security, customer validation, and scalable architecture.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-section">
          <div className="bg-black/40 p-5 rounded-lg border border-[#7021EE]/20 hover:border-[#7021EE]/40 transition-all">
            <div className="flex items-start gap-3">
              <div className="bg-[#7021EE]/10 p-2 rounded-md">
                <Rocket className="w-5 h-5 text-[#7021EE]" />
              </div>
              <div>
                <h5 className="text-white text-sm font-medium mb-2">Problem-Led Prototyping</h5>
                <p className="text-gray-400 text-sm">We identify real customer challenges and build secure MVPs in weeks—not months.</p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 p-5 rounded-lg border border-[#7021EE]/20 hover:border-[#7021EE]/40 transition-all">
            <div className="flex items-start gap-3">
              <div className="bg-[#7021EE]/10 p-2 rounded-md">
                <Bug className="w-5 h-5 text-[#7021EE]" />
              </div>
              <div>
                <h5 className="text-white text-sm font-medium mb-2">Full-Lifecycle Build Service</h5>
                <p className="text-gray-400 text-sm">From ideation to launch, we deliver turnkey AI solutions with embedded compliance and real-time user feedback.</p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 p-5 rounded-lg border border-[#7021EE]/20 hover:border-[#7021EE]/40 transition-all">
            <div className="flex items-start gap-3">
              <div className="bg-[#7021EE]/10 p-2 rounded-md">
                <Shield className="w-5 h-5 text-[#7021EE]" />
              </div>
              <div>
                <h5 className="text-white text-sm font-medium mb-2">Enterprise-Ready from Day One</h5>
                <p className="text-gray-400 text-sm">Solutions are designed for compliance, scalability, and long-term value creation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIncubationLab;
