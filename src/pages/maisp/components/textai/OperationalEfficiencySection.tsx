
import React from "react";

const OperationalEfficiencySection = () => {
  return (
    <section className="py-16 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - SVG Illustration */}
          <div className="w-full md:w-1/2 flex justify-center">
            <svg width="350" height="600" viewBox="0 0 350 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
              {/* Robot/AI illustration */}
              <path d="M279.141 60.0879C262.5 42.5 234.5 33 222 31C209.5 29 183.141 36.0879 153.141 60.0879C123.141 84.0879 124.641 115.588 131.141 130.088C137.641 144.588 155.141 155.088 155.141 155.088C155.141 155.088 131.141 198.088 131.141 220.088C131.141 242.088 139.141 272.088 139.141 272.088L139.141 323.088C139.141 323.088 142.141 377.088 142.141 397.088C142.141 417.088 155.141 467.088 155.141 467.088C155.141 467.088 156.141 487.088 158.141 497.088C160.141 507.088 169.141 567.088 169.141 567.088" stroke="#D1D5DB" strokeWidth="6" strokeLinecap="round"/>
              
              {/* Robot head */}
              <circle cx="264.141" cy="150.088" r="14" stroke="#D1D5DB" strokeWidth="6"/>
              <circle cx="214.141" cy="180.088" r="14" stroke="#D1D5DB" strokeWidth="6"/>
              <circle cx="248.141" cy="98.0879" r="20" stroke="#D1D5DB" strokeWidth="6"/>
              <circle cx="282.141" cy="200.088" r="8" stroke="#D1D5DB" strokeWidth="6"/>
              <path d="M169.141 255.088C204.141 219.088 253.141 239.088 279.141 255.088" stroke="#D1D5DB" strokeWidth="6" strokeLinecap="round"/>
              <circle cx="277.141" cy="280.088" r="8" fill="#D1D5DB"/>
              
              {/* Robot body */}
              <rect x="154.141" y="350.088" width="100" height="160" rx="10" stroke="#D1D5DB" strokeWidth="6"/>
              <circle cx="179.141" cy="410.088" r="10" fill="#D1D5DB"/>
              <circle cx="229.141" cy="410.088" r="10" fill="#D1D5DB"/>
              
              {/* Signal lines */}
              <path d="M90 200C80 190 70 180 60 170" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round"/>
              <path d="M100 190C90 180 80 170 70 160" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round"/>
              <path d="M110 180C100 170 90 160 80 150" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
          
          {/* Right Side - Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-8">Operational Efficiency</h2>
            
            {/* Feature boxes */}
            <div className="space-y-6">
              {benefitItems.map((item, index) => (
                <div key={index} className="bg-[#222222] rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const benefitItems = [
  {
    title: "Automated Responses",
    description: "By automating responses to common inquiries, TextAI significantly reduces manual workload and frees up human agents to focus on more complex issues."
  },
  {
    title: "24/7 Availability",
    description: "TextAI offers 24/7 availability, ensuring instant responses and improving customer satisfaction."
  },
  {
    title: "Intelligent Automation",
    description: "TextAI's intelligent automation can reduce repetitive inquiries by 30-50%, leading to significant savings on manual support operations."
  }
];

export default OperationalEfficiencySection;
