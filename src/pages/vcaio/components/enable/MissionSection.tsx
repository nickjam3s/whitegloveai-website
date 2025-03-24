
import React from 'react';

const MissionSection = () => {
  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="bg-[#E1E6F6] bg-opacity-10 rounded-md p-4 relative h-[300px]">
              {/* Rocket illustration */}
              <svg width="180" height="200" viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-4">
                <path d="M89.5 20C89.5 20 70 30 70 90C70 150 89.5 170 89.5 170C89.5 170 109 150 109 90C109 30 89.5 20 89.5 20Z" fill="#FFFFFF"/>
                <circle cx="89.5" cy="90" r="10" fill="#000000" stroke="#FFFFFF" strokeWidth="2"/>
                <path d="M70 110L50 130L60 140L70 130" fill="#FFFFFF"/>
                <path d="M109 110L129 130L119 140L109 130" fill="#FFFFFF"/>
                <path d="M80 170L70 190H109L99 170" fill="#FFFFFF"/>
                <path d="M85 190L89.5 200L94 190" fill="#FFFFFF"/>
                {/* Clouds */}
                <path d="M20 60C20 60 30 55 35 60C40 65 30 70 30 70" stroke="#FFFFFF" strokeWidth="2"/>
                <path d="M160 60C160 60 150 55 145 60C140 65 150 70 150 70" stroke="#FFFFFF" strokeWidth="2"/>
                {/* Dots/stars */}
                <circle cx="60" cy="100" r="2" fill="#FFFFFF"/>
                <circle cx="50" cy="110" r="2" fill="#FFFFFF"/>
                <circle cx="40" cy="120" r="2" fill="#FFFFFF"/>
                <circle cx="120" cy="100" r="2" fill="#FFFFFF"/>
                <circle cx="130" cy="110" r="2" fill="#FFFFFF"/>
                <circle cx="140" cy="120" r="2" fill="#FFFFFF"/>
              </svg>
              {/* Ground */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#E1E6F6] bg-opacity-20 rounded-b-md"></div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission</h2>
            <p className="text-lg mb-6">
              Our mission is to empower organizations to bridge the gap between cutting-edge GenAI technology and practical implementation. By providing expert-led training, proven frameworks, and hands-on support, we transform GenAI into a powerful, accessible tool that drives immediate ROI through enhanced productivity, cost reduction, and accelerated innovation.
            </p>
            <p className="text-lg">
              We are committed to ensuring that no one is left behind in the AI adoption journey, equipping every organization with the tools and knowledge to thrive in the AI-driven future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
