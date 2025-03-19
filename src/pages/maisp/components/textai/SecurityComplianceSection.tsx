
import React from "react";

const SecurityComplianceSection = () => {
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
          Security and Compliance
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-gray-800 rounded-full h-8 w-8 flex items-center justify-center">
              <span className="text-white font-semibold">1</span>
            </div>
            <div>
              <p className="text-white text-lg">
                Role-Based Access Control (RBAC) enforces strict security measures, granting access only to authorized personnel.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-gray-800 rounded-full h-8 w-8 flex items-center justify-center">
              <span className="text-white font-semibold">2</span>
            </div>
            <div>
              <p className="text-white text-lg">
                End-to-End Encryption safeguards sensitive data throughout the entire chat process.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-gray-800 rounded-full h-8 w-8 flex items-center justify-center">
              <span className="text-white font-semibold">3</span>
            </div>
            <div>
              <p className="text-white text-lg">
                Regular security updates and monitoring ensure continuous protection against emerging threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityComplianceSection;
