
import React from "react";

const AdditionalServicesSection = () => {
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
          Additional Services Available
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">
              Custom integrations
            </h3>
            <p className="text-gray-400">
              Custom integrations tailored to specific business needs.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">
              Expanded language support
            </h3>
            <p className="text-gray-400">
              Expanded language support for a wider customer base.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">
              Enhanced analytics
            </h3>
            <p className="text-gray-400">
              Enhanced analytics and reporting for data-driven insights.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">
              Custom workflow automation
            </h3>
            <p className="text-gray-400">
              Custom workflow automation for optimized processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;
