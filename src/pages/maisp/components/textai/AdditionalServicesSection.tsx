
import React from "react";
import { BarChart3, Layers, Workflow, Settings } from "lucide-react";

const AdditionalServicesSection = () => {
  const services = [
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Analytics & Reporting",
      description: "Comprehensive usage metrics, performance analytics, and custom reporting dashboards."
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Multi-Channel Integration",
      description: "Deploy TextAI across websites, mobile apps, messaging platforms, and internal systems."
    },
    {
      icon: <Workflow className="h-10 w-10 text-primary" />,
      title: "Workflow Automation",
      description: "Create automated workflows triggered by specific queries or user interactions."
    },
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "Custom Development",
      description: "Tailored solutions and integrations for unique business requirements."
    }
  ];

  return (
    <section className="py-20 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
            Additional Services Available
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enhance your TextAI implementation with these complementary services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card/30 p-6 rounded-lg border border-gray-800 flex flex-col items-center text-center">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Contact us for a customized solution tailored to your specific needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;
