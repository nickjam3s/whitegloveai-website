import { Shield } from "lucide-react";

const WhyChooseSection = ({ reasons }) => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Why Choose WhitegloveAI?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors"
            >
              <Shield className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;