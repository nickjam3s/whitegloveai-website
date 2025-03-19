
import React from "react";

const IntelligentInformationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-6">
          <img 
            src="/lovable-uploads/0b35df8d-6f52-4087-bd23-cd4a7886273f.png" 
            alt="WhitegloveAI Logo" 
            className="w-16"
          />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Intelligent Information Access
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">
              AI-Powered Responses
            </h3>
            <p className="text-gray-400">
              TextAI utilizes AI to provide intelligent and automated responses to customer inquiries.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">
              Comprehensive Knowledge Base
            </h3>
            <p className="text-gray-400">
              Trained on policy documents, statutes, FAQs, and internal data for accurate information retrieval.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">
              Natural Language Understanding
            </h3>
            <p className="text-gray-400">
              Enables real-time text-based interaction for effortless access to information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentInformationSection;
