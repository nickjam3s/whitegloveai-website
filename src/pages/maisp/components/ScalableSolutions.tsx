
import React from 'react';

const ScalableSolutions = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold text-primary mb-4">SCALABLE SOLUTIONS</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 heading-highlight-scroll">
          Grow with Confidence
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Security & Compliance</h3>
            <p className="text-gray-400">
              We prioritize data security and compliance, ensuring your information is protected at every step.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Scalable Solutions</h3>
            <p className="text-gray-400">
              Our solutions are designed to grow with your business, offering flexibility and adaptability to meet your evolving needs.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Ongoing Support</h3>
            <p className="text-gray-400">
              From initial setup to ongoing maintenance, our team provides comprehensive support to ensure your AI solutions operate seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalableSolutions;
