
import React from 'react';

const IntroductionSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Introduction</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg mb-6">Many organizations face these common AI adoption challenges:</p>
            <ul className="list-disc pl-6 space-y-4 text-gray-300">
              <li>Team members hesitate to experiment with AI tools, limiting their impact</li>
              <li>Leadership can't dedicate resources to develop comprehensive AI training</li>
              <li>Investments in AI platforms like <span className="text-purple-400">ChatGPT</span> yield disappointing returns due to low adoption</li>
            </ul>
          </div>
          
          <div>
            <p className="text-lg font-semibold mb-4">WhitegloveAI bridges the gap.</p>
            <p className="mb-4">As a <span className="font-semibold">Managed AI Service Provider (MAISP)</span>, we provide end-to-end service designed specifically for organizations that have adopted GenAI tools but lack the bandwidth or expertise to drive adoption.</p>
            <p>Our program transforms your team from cautious observers into confident AI practitioners—delivering measurable business impact without straining your internal resources.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
