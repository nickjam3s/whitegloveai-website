
import React from "react";
import { Code, Filter, Info } from "lucide-react";

const ImplementationProcessSection = () => {
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
          Implementation Process
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/20 p-4 rounded-lg mb-4">
              <Code className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Initial Setup</h3>
            <p className="text-gray-400">
              Knowledge base training, website integration, security testing and configuration, language support setup.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/20 p-4 rounded-lg mb-4">
              <Filter className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Training and Deployment</h3>
            <p className="text-gray-400">
              Website integration code, staff training sessions, system testing and optimization, live deployment and monitoring.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/20 p-4 rounded-lg mb-4">
              <Info className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Ongoing Support</h3>
            <p className="text-gray-400">
              Quarterly knowledge base updates, performance monitoring and optimization, technical support and maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationProcessSection;
