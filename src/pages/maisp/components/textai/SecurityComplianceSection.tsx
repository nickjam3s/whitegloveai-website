
import React from "react";

const SecurityComplianceSection = () => {
  return (
    <section className="py-20 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start space-y-12">
          <h2 className="text-5xl font-bold text-white">Security and Compliance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex space-x-4 items-start">
                <div className="flex justify-center items-center bg-zinc-800 rounded-full w-16 h-16 flex-shrink-0">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <div>
                  <p className="text-white text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const securityFeatures = [
  {
    description: "Role-Based Access Control (RBAC) enforces strict security measures, granting access only to authorized personnel."
  },
  {
    description: "End-to-End Encryption safeguards sensitive data throughout the entire chat process."
  },
  {
    description: "Regular security updates and monitoring ensure continuous protection against emerging threats."
  }
];

export default SecurityComplianceSection;
