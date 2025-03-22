
import React from "react";
import { CheckCircle2, Circle } from "lucide-react";

const ImplementationProcessSection = () => {
  const steps = [
    {
      title: "Discovery & Planning",
      description: "We assess your needs, define objectives, and create a tailored implementation plan."
    },
    {
      title: "Data Integration",
      description: "We connect TextAI to your knowledge base, documents, and relevant systems."
    },
    {
      title: "Custom Training",
      description: "We train the AI on your specific information, terminology, and use cases."
    },
    {
      title: "Testing & Refinement",
      description: "Rigorous testing and tuning to ensure accuracy and performance."
    },
    {
      title: "Deployment",
      description: "Seamless integration with your existing systems and user interfaces."
    },
    {
      title: "Ongoing Support",
      description: "Continuous monitoring, updates, and optimization for maximum value."
    }
  ];

  return (
    <section className="py-20 bg-background w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
            Implementation Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A systematic approach to ensure successful TextAI deployment
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="md:grid md:grid-cols-2 gap-8 items-center">
                  <div className={`mb-8 md:mb-0 ${index % 2 === 0 ? 'md:text-right order-1' : 'order-2'}`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  
                  <div className={`flex ${index % 2 === 0 ? 'md:justify-start order-2' : 'md:justify-end order-1'}`}>
                    <div className="relative">
                      <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                          <CheckCircle2 className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="absolute left-1/2 top-1/2 w-10 h-0.5 bg-gray-700 transform -translate-y-1/2 hidden md:block"
                        style={{ 
                          left: index % 2 === 0 ? '100%' : 'auto', 
                          right: index % 2 === 0 ? 'auto' : '100%' 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationProcessSection;
