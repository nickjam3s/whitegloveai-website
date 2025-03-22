
import React from "react";
import { Mail, Video, Database, CheckSquare, Globe, BarChart } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Contact Us",
      description: "Fill out our simple application form to get started."
    },
    {
      icon: <Video className="h-6 w-6 text-primary" />,
      title: "Qualification Call",
      description: "We'll schedule a brief call to understand your needs."
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Chatbot Creation",
      description: "We'll build and train your custom AI chatbot."
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-primary" />,
      title: "Testing Phase",
      description: "Thoroughly test your chatbot before deployment."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Website Integration",
      description: "We'll help integrate the chatbot with your website."
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Ongoing Support",
      description: "Receive monthly insights and continuous improvements."
    }
  ];

  return (
    <section className="py-20 bg-background w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
            How Our Program Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A simple, streamlined process to get your nonprofit equipped with AI
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="md:grid md:grid-cols-2 gap-12 items-center">
                  <div className={`mb-8 md:mb-0 ${index % 2 === 0 ? 'md:text-right order-1' : 'order-2'}`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  
                  <div className={`flex ${index % 2 === 0 ? 'md:justify-start order-2' : 'md:justify-end order-1'}`}>
                    <div className="relative">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>
                      <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <div className="absolute left-1/2 top-1/2 w-8 h-0.5 bg-gray-700 transform -translate-y-1/2 hidden md:block"
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

export default ProcessSection;
