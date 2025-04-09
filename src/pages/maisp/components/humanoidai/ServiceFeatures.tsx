
import { Check } from "lucide-react";

const features = [
  {
    title: "End-to-End Management",
    description: "Comprehensive oversight of your robot workforce, from initial setup to ongoing operations and maintenance."
  },
  {
    title: "Technical Support",
    description: "24/7 expert assistance and monitoring to ensure optimal robot performance and minimal downtime."
  },
  {
    title: "Software Updates",
    description: "Regular firmware updates and performance optimization to keep your robots operating at peak efficiency."
  },
  {
    title: "Training & Documentation",
    description: "Thorough staff training and detailed documentation for smooth human-robot collaboration."
  }
];

const ServiceFeatures = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800">
              <div className="flex items-start">
                <Check className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 mt-8 text-center">
          Our managed service approach ensures your organization can focus on core business objectives while we handle the complexities of robot fleet management.
        </p>
      </div>
    </section>
  );
};

export default ServiceFeatures;
