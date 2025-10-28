
import { Rocket, TrendingUp, Shield } from "lucide-react";

const outcomes = [
  {
    icon: Rocket,
    title: "Accelerated AI Adoption",
    description: "Faster implementation of AI initiatives with a clear, structured approach."
  },
  {
    icon: TrendingUp,
    title: "Improved ROI",
    description: "Maximized returns on AI investments by focusing on high-impact use cases."
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Reduced risks related to compliance, ethics, and operational disruptions."
  }
];

const BusinessOutcomes = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Tangible Business Outcomes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800">
              <outcome.icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{outcome.title}</h3>
              <p className="text-gray-400">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessOutcomes;
