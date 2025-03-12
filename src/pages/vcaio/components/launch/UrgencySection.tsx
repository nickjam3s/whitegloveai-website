
import { Timer, TrendingUp, Shield, Heart } from "lucide-react";

const urgencyPoints = [
  {
    icon: Timer,
    title: "The Time to Act Is Now",
    description: "Don't delay your AI transformation journey."
  },
  {
    icon: TrendingUp,
    title: "Competitive Advantage",
    description: "The competition is already adopting AI to drive efficiencies and scale their bottom line. Can you afford to wait?"
  },
  {
    icon: Shield,
    title: "Secure AI Future",
    description: "Take the first step toward a secure, scalable AI future with WhitegloveAI by your side."
  },
  {
    icon: Heart,
    title: "Overcome Fear",
    description: "Don't let fear hold you back from innovation."
  }
];

const UrgencySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          The Urgency of AI Adoption
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {urgencyPoints.map((point, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-gray-800">
              <point.icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
