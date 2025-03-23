
import React from "react";

const IntelligentInformationSection = () => {
  return (
    <section className="py-16 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-white">
          Intelligent Information Access
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#222222] rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "AI-Powered Responses",
    description: "TextAI utilizes AI to provide intelligent and automated responses to customer inquiries."
  },
  {
    title: "Comprehensive Knowledge Base",
    description: "Trained on policy documents, statutes, FAQs, and internal data for accurate information retrieval."
  },
  {
    title: "Natural Language Understanding",
    description: "Enables real-time text-based interaction for effortless access to information."
  }
];

export default IntelligentInformationSection;
