
import React from 'react';

const challenges = [
  {
    challenge: "Critical Skill Gaps",
    impact: "AI investments yield minimal returns as powerful tools remain underutilized."
  },
  {
    challenge: "Resource Constraints",
    impact: "Management lacks bandwidth to develop comprehensive AI training strategies."
  },
  {
    challenge: "One-Size-Fits-All Training",
    impact: "Teams struggle to translate generic AI knowledge into role-specific productivity gains."
  },
  {
    challenge: "Compliance & Security",
    impact: "Unstructured AI adoption creates data privacy vulnerabilities and regulatory risks."
  }
];

const ChallengesTableSection = () => {
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
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge for Teams</h2>
        <p className="text-lg mb-8">Here are the key challenges we address:</p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-4 px-4 text-left font-semibold text-lg">Challenge</th>
                <th className="py-4 px-4 text-left font-semibold text-lg">Business Impact</th>
              </tr>
            </thead>
            <tbody>
              {challenges.map((item, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-4 px-4 text-left text-gray-300">{item.challenge}</td>
                  <td className="py-4 px-4 text-left text-gray-300">{item.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ChallengesTableSection;
