
import { Target, TrendingUp, Laptop } from "lucide-react";

const features = [
  {
    title: "Align AI Strategy with Business Goals",
    description: "Our vCAIOs work hand-in-hand with your team to identify AI opportunities that directly address your key business objectives.",
    icon: Target
  },
  {
    title: "Drive Growth and Efficiency",
    description: "We leverage cutting-edge AI technology to optimize processes, enhance decision-making, and unlock new revenue streams.",
    icon: TrendingUp
  },
  {
    title: "Technology Integration",
    description: "We seamlessly integrate AI solutions into your existing systems, ensuring a smooth transition and maximizing ROI.",
    icon: Laptop
  }
];

const UnlockingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center heading-highlight-scroll">Unlocking the Potential of AI</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
              <feature.icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnlockingSection;
