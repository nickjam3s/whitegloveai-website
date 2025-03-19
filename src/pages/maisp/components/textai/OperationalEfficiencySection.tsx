
import React from "react";

const OperationalEfficiencySection = () => {
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
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/1504f751-2ff5-4469-91b5-01c9dfcd810b.png" 
              alt="Robot AI Assistant Illustration" 
              className="max-w-full"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Operational Efficiency
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Automated Responses
                </h3>
                <p className="text-gray-400">
                  By automating responses to common inquiries, TextAI significantly reduces manual workload and frees up human agents to focus on more complex issues.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  24/7 Availability
                </h3>
                <p className="text-gray-400">
                  TextAI offers 24/7 availability, ensuring instant responses and improving customer satisfaction.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Intelligent Automation
                </h3>
                <p className="text-gray-400">
                  TextAI's intelligent automation can reduce repetitive inquiries by 30-50%, leading to significant savings on manual support operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalEfficiencySection;
