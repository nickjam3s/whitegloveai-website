
import React from 'react';

const ResultsSection = () => {
  return (
    <section id="results-section" className="py-20 bg-gradient-to-b from-background to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Key Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real outcomes that transform how organizations leverage AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              stat: "3x",
              title: "Faster AI Adoption",
              description: "Team members transition from hesitation to proficiency with AI tools, confidently applying them to daily workflows and driving measurable productivity gains."
            },
            {
              stat: "85%",
              title: "Accelerated Value Realization",
              description: "Our program shortens the AI learning curve dramatically, delivering ROI on AI investments in weeks rather than months through role-specific training and ready-to-implement workflows."
            },
            {
              stat: "95%",
              title: "Sustainable AI Adoption",
              description: "Build lasting AI capabilities with governance frameworks, best practices, and an internal community of practice that drives continuous innovation and responsible AI use."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="relative bg-gradient-to-br from-purple-900/20 to-black p-8 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300 group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-300" />
              <div className="relative">
                <div className="text-5xl font-bold text-purple-400 mb-4">{item.stat}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
