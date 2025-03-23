
import React from "react";
import { Code, Filter, Info } from "lucide-react";

const ImplementationProcessSection = () => {
  return (
    <section className="py-20 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start space-y-16">
          <h2 className="text-5xl font-bold text-white">Implementation Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            {implementationSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-6">
                <div className="w-24 h-24 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const implementationSteps = [
  {
    icon: <Code className="text-indigo-500" size={80} strokeWidth={1.5} />,
    title: "Initial Setup",
    description: "Knowledge base training, website integration, security testing and configuration, language support setup."
  },
  {
    icon: <Filter className="text-indigo-500" size={80} strokeWidth={1.5} />,
    title: "Training and Deployment",
    description: "Website Integration code, staff training sessions, system testing and optimization, live deployment and monitoring."
  },
  {
    icon: <Info className="text-indigo-500" size={80} strokeWidth={1.5} />,
    title: "Ongoing Support",
    description: "Quarterly knowledge base updates, performance monitoring and optimization, technical support and maintenance."
  }
];

export default ImplementationProcessSection;
