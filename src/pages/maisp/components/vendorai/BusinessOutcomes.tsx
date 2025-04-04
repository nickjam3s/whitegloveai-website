
import React from 'react';

const outcomes = [
  {
    title: "Cost Savings",
    description: "Reduce procurement and licensing costs through expert negotiation."
  },
  {
    title: "Improved Efficiency", 
    description: "Faster deployment and integration of AI solutions, minimizing time-to-value."
  },
  {
    title: "Enhanced Performance",
    description: "Optimize AI systems for consistent, high-quality results."
  }
];

const BusinessOutcomes = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Achieve Measurable Business Outcomes
        </h2>
        <div className="grid md:grid-cols-3 gap-8 animate-section">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg border border-gray-800 animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{outcome.title}</h3>
              <p className="text-gray-400">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessOutcomes;
