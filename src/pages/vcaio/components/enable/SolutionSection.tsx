
import React from 'react';

const SolutionSection = () => {
  return (
    <section className="py-16 bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Solution: GenAI Enablement Service</h2>
        <p className="text-lg mb-10">Transform your organization with our comprehensive, Whiteglove program that seamlessly integrates AI into your workflow through expert training, customized solutions, and dedicated support.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg">
            <div className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-md mb-4">1</div>
            <h3 className="text-xl font-bold mb-3">Master AI Fundamentals</h3>
            <p className="text-gray-200 mb-4">Accelerate team adoption through targeted, role-specific learning experiences.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-200">
              <li>Interactive Workshops: Gain hands-on expertise through 4 hours of small-group training sessions.</li>
              <li>Comprehensive Resources: Access self-paced video tutorials, practical cheat sheets, and our intelligent GPT-powered support assistant.</li>
            </ul>
          </div>
          
          <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg">
            <div className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-md mb-4">2</div>
            <h3 className="text-xl font-bold mb-3">Transform Your Workflows</h3>
            <p className="text-gray-200 mb-4">Convert time-consuming processes into efficient, AI-powered solutions.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-200">
              <li>Strategic Discovery: Identify high-impact AI opportunities in a focused 2-hour alignment session.</li>
              <li>Custom Implementation: Receive detailed playbooks for 2 mission-critical workflows that drive immediate value.</li>
            </ul>
          </div>
          
          <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg">
            <div className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-md mb-4">3</div>
            <h3 className="text-xl font-bold mb-3">Ensure Long-Term Success</h3>
            <p className="text-gray-200 mb-4">Maximize your AI investment with continuous optimization and support.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-200">
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
