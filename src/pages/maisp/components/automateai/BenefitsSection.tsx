import { Zap } from "lucide-react";

const benefits = [
  {
    title: "Enhance Efficiency",
    description: "Automate repetitive tasks, freeing up valuable human resources for strategic initiatives."
  },
  {
    title: "Reduce Operational Costs",
    description: "Lower expenses associated with manual processing and error correction."
  },
  {
    title: "Improve Accuracy",
    description: "Minimize human errors through consistent and reliable automated workflows."
  },
  {
    title: "Accelerate Time-to-Value",
    description: "Rapidly deploy automated solutions tailored to your specific business needs."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Benefits of AutomateAI
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
              <Zap className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
