import React from "react";

const OperationalEfficiencySection = () => {
  return (
    <section className="py-16 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Operational Efficiency</h2>
          
          {/* Feature boxes */}
          <div className="max-w-3xl w-full space-y-6">
            {benefitItems.map((item, index) => (
              <div key={index} className="bg-[#222222] rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
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