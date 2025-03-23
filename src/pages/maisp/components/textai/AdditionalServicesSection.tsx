
import React from "react";

const AdditionalServicesSection = () => {
  return (
    <section className="py-20 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start space-y-12">
          <h2 className="text-5xl font-bold text-white">Additional Services Available</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-zinc-900 rounded-lg p-8 text-white"
              >
                <p className="text-lg leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const additionalServices = [
  {
    description: "Custom integrations tailored to specific business needs."
  },
  {
    description: "Expanded language support for a wider customer base."
  },
  {
    description: "Enhanced analytics and reporting for data-driven insights."
  },
  {
    description: "Custom workflow automation for optimized processes."
  }
];

export default AdditionalServicesSection;
