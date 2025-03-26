
import React from 'react';
import { Lightbulb } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Lightbulb className="h-12 w-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-semibold mb-8 heading-highlight-scroll">The Solution: GenAI Enablement Service</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Transform your organization with our comprehensive, Whiteglove program that seamlessly integrates AI into your workflow through expert training, customized solutions, and dedicated support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <div className="bg-purple-900/70 text-white w-10 h-10 flex items-center justify-center rounded-md mb-4 font-bold">1</div>
            <h3 className="text-xl font-semibold mb-3">Master AI Fundamentals</h3>
            <p className="text-gray-400 mb-4">Accelerate team adoption through targeted, role-specific learning experiences.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Interactive Workshops: Gain hands-on expertise through 4 hours of small-group training sessions.</li>
              <li>Comprehensive Resources: Access self-paced video tutorials, practical cheat sheets, and our intelligent GPT-powered support assistant.</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <div className="bg-purple-900/70 text-white w-10 h-10 flex items-center justify-center rounded-md mb-4 font-bold">2</div>
            <h3 className="text-xl font-semibold mb-3">Transform Your Workflows</h3>
            <p className="text-gray-400 mb-4">Convert time-consuming processes into efficient, AI-powered solutions.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Strategic Discovery: Identify high-impact AI opportunities in a focused 2-hour alignment session.</li>
              <li>Custom Implementation: Receive detailed playbooks for 2 mission-critical workflows that drive immediate value.</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <div className="bg-purple-900/70 text-white w-10 h-10 flex items-center justify-center rounded-md mb-4 font-bold">3</div>
            <h3 className="text-xl font-semibold mb-3">Ensure Long-Term Success</h3>
            <p className="text-gray-400 mb-4">Maximize your AI investment with continuous optimization and support.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Dedicated Support: Access expert guidance through weekly office hours for your first month.</li>
              <li>Performance Optimization (Optional Add-On): Track success metrics and ROI through monthly reviews, while continuously adapting workflows to evolving needs.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
