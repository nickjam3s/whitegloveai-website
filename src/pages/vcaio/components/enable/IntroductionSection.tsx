
import React from 'react';

const IntroductionSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="absolute right-6 md:right-10">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M21 0C9.402 0 0 9.402 0 21C0 32.598 9.402 42 21 42C32.598 42 42 32.598 42 21C42 9.402 32.598 0 21 0ZM21 38.5C11.34 38.5 3.5 30.66 3.5 21C3.5 11.34 11.34 3.5 21 3.5C30.66 3.5 38.5 11.34 38.5 21C38.5 30.66 30.66 38.5 21 38.5Z" fill="white"/>
            <path d="M29.75 21C29.75 25.8325 25.8325 29.75 21 29.75C16.1675 29.75 12.25 25.8325 12.25 21C12.25 16.1675 16.1675 12.25 21 12.25C25.8325 12.25 29.75 16.1675 29.75 21Z" fill="white"/>
            <path d="M21 7C13.268 7 7 13.268 7 21C7 28.732 13.268 35 21 35C28.732 35 35 28.732 35 21C35 13.268 28.732 7 21 7ZM21 31.5C15.201 31.5 10.5 26.799 10.5 21C10.5 15.201 15.201 10.5 21 10.5C26.799 10.5 31.5 15.201 31.5 21C31.5 26.799 26.799 31.5 21 31.5Z" fill="white"/>
          </svg>
        </div>
        
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
