
import React from 'react';

const SolutionSection = () => {
  return (
    <section className="py-16 bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="absolute right-6 md:right-10">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M21 0C9.402 0 0 9.402 0 21C0 32.598 9.402 42 21 42C32.598 42 42 32.598 42 21C42 9.402 32.598 0 21 0ZM21 38.5C11.34 38.5 3.5 30.66 3.5 21C3.5 11.34 11.34 3.5 21 3.5C30.66 3.5 38.5 11.34 38.5 21C38.5 30.66 30.66 38.5 21 38.5Z" fill="white"/>
            <path d="M29.75 21C29.75 25.8325 25.8325 29.75 21 29.75C16.1675 29.75 12.25 25.8325 12.25 21C12.25 16.1675 16.1675 12.25 21 12.25C25.8325 12.25 29.75 16.1675 29.75 21Z" fill="white"/>
            <path d="M21 7C13.268 7 7 13.268 7 21C7 28.732 13.268 35 21 35C28.732 35 35 28.732 35 21C35 13.268 28.732 7 21 7ZM21 31.5C15.201 31.5 10.5 26.799 10.5 21C10.5 15.201 15.201 10.5 21 10.5C26.799 10.5 31.5 15.201 31.5 21C31.5 26.799 26.799 31.5 21 31.5Z" fill="white"/>
          </svg>
        </div>
        
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
