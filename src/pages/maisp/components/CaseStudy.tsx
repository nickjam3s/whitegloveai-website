
import React from 'react';

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-16 px-4 md:px-6 lg:px-8 bg-card/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold text-primary mb-4">SUCCESS STORY</h2>
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-12 heading-highlight-scroll">
          City of McKinney HR AI Transformation
        </h3>
        <div className="animate-section">
          <p className="text-gray-400 mb-6 animate-on-scroll">
            The City of McKinney partnered with WhitegloveAI (WG) to enhance HR efficiency through AI-powered agents. Facing a high volume of routine inquiries, the city needed a secure, scalable solution. WG deployed custom voice and text-based AI chat agents, provided staff training, and implemented performance analytics.
          </p>
          <div className="bg-card p-6 rounded-lg mb-6 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
            <h3 className="text-xl font-semibold text-white mb-4">Impact:</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• 68% deflection rate of general inquiries to AI, reducing HR workload</li>
              <li>• Improved resolution rates for employee questions</li>
              <li>• Positive staff feedback on AI effectiveness</li>
            </ul>
          </div>
          <blockquote className="border-l-4 border-primary pl-6 italic text-gray-400 animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            "WhitegloveAI has been a transformative partner, blending deep expertise with agility. Their responsiveness and collaborative approach ensured AI solutions evolved to meet our needs. More than a provider, WG is a true partner in AI-driven change."
            <footer className="mt-2 text-white">— Jim Parrish, Director of HR, City of McKinney</footer>
          </blockquote>
          <div className="mt-8 flex justify-start animate-on-scroll" style={{ transitionDelay: "0.3s" }}>
            <img 
              src="/lovable-uploads/8d6b7902-56b6-4ba7-86ba-67aa9f3bccb8.png" 
              alt="Additional McKinney Logo"
              className="h-24 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
