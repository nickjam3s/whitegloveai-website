
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
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center heading-highlight-scroll">Unlocking the Potential of AI</h2>
        <div className="grid md:grid-cols-3 gap-8 animate-section">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-card/80 to-card/40 p-8 rounded-xl border border-gray-800 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-purple-900/20 animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-purple-900/20 mb-6">
                  <feature.icon className="h-8 w-8 text-[#7021EE]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnlockingSection;
