
import React from "react";

const ExpectedROISection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Expected ROI
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Substantial ROI
              </h3>
              <p className="text-gray-400">
                The anticipated ROI of implementing TextAI is substantial. By reducing repetitive inquiries and streamlining support operations, businesses can achieve significant cost savings.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Enhanced Customer Satisfaction
              </h3>
              <p className="text-gray-400">
                Enhanced customer satisfaction through instant responses and 24/7 availability further contributes to a positive ROI.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Optimized Operations
              </h3>
              <p className="text-gray-400">
                TextAI empowers businesses to optimize their customer service operations and unlock new levels of efficiency and customer satisfaction.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/06d1d567-9c7a-46b7-b4fe-b28f66e8e152.png" 
              alt="Laptop with Analytics Dashboard" 
              className="max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectedROISection;
