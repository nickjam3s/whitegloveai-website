
import React from 'react';

const PatentedExpertise = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold text-primary mb-4">EXPERTISE & INNOVATION</h2>
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-12 heading-highlight">
          Patented Expertise: The WhitegloveAI Difference
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">MAISP Trademark</h3>
            <p className="text-gray-400">
              WhitegloveAI holds the exclusive trademark for Managed Artificial Intelligence Service Provider (MAISP), signifying our commitment to delivering cutting-edge AI solutions.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Trusted Leadership</h3>
            <p className="text-gray-400">
              Our patented expertise and deep industry knowledge make us a trusted partner for organizations looking to leverage the power of AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatentedExpertise;
