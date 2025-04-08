import { Database, Monitor, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Data Validation and Transformation",
    description: "Ensure data accuracy and consistency across all workflows, enhancing decision-making and operational reliability."
  },
  {
    icon: Monitor,
    title: "Real-Time Monitoring and Analytics",
    description: "Gain insights into workflow performance with real-time monitoring, allowing for proactive adjustments and continuous improvement."
  },
  {
    icon: ShieldCheck,
    title: "Secure and Compliant Operations",
    description: "Maintain the highest standards of data security and compliance, safeguarding your business and customer information."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
              <feature.icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
