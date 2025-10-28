
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
    <section className="py-16 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
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
