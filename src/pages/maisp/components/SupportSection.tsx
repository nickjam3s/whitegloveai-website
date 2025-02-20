
import React from 'react';

const SupportSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold text-primary mb-4">COMPREHENSIVE SUPPORT</h2>
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-12 heading-highlight">
          From Setup to Success
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Technical Consulting</h3>
            <p className="text-gray-400">
              Our team of experts provides personalized technical consulting to ensure your AI solutions are tailored to your specific needs.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">AI Software Customization</h3>
            <p className="text-gray-400">
              We customize AI software to meet your unique requirements, ensuring optimal performance and integration with your existing systems.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Seamless Integration</h3>
            <p className="text-gray-400">
              We provide seamless integration of AI solutions into your business workflows, minimizing disruption and maximizing efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
