
import React from "react";

const VendorManagement = () => {
  return (
    <section id="vendor-management" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-4 heading-highlight-scroll text-white">
            AI Vendor Management Simplified
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto heading-highlight-scroll stagger-1">
            Our managed service takes the complexity out of working with multiple AI vendors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-section">
          {[
            {
              title: "Vendor Selection",
              description: "We help you identify the right AI vendors based on your specific needs and requirements."
            },
            {
              title: "Contract Negotiation",
              description: "Our experts handle complex contract negotiations to ensure you get the best terms and pricing."
            },
            {
              title: "Integration Management",
              description: "We oversee the technical integration of AI solutions into your existing systems."
            },
            {
              title: "Performance Monitoring",
              description: "Continuous monitoring of AI vendor performance against agreed SLAs and KPIs."
            },
            {
              title: "Cost Optimization",
              description: "Regular review of usage and costs to identify opportunities for optimization."
            },
            {
              title: "Vendor Coordination",
              description: "Single point of contact for all your AI vendors, simplifying management and communication."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-card/50 border border-gray-800 rounded-lg p-6 hover:border-primary/30 transition-all animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorManagement;
