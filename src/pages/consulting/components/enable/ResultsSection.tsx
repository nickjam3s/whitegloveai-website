
import React from 'react';

const ResultsSection = () => {
  return (
    <section id="results-section" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Key Results
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Literacy & Confidence",
              description: "Team members transition from hesitation to proficiency with AI tools, confidently applying them to daily workflows and driving measurable productivity gains."
            },
            {
              title: "Accelerated Value Realization",
              description: "Our program shortens the AI learning curve dramatically, delivering ROI on AI investments in weeks rather than months through role-specific training and ready-to-implement workflows."
            },
            {
              title: "Sustainable AI Adoption",
              description: "Build lasting AI capabilities with governance frameworks, best practices, and an internal community of practice that drives continuous innovation and responsible AI use."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300 animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
