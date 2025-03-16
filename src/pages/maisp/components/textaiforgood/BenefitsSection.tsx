
import { TrendingUp, Users, Rocket } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Enhanced Efficiency",
    description: "Our AI chatbots handle routine inquiries, allowing your team to focus on high-impact activities."
  },
  {
    icon: Users,
    title: "Improved Engagement",
    description: "24/7 availability ensures visitors always receive prompt, accurate responses to their questions."
  },
  {
    icon: Rocket,
    title: "Amplified Impact",
    description: "Leverage AI technology to extend your reach and maximize your organization's impact in the community."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center heading-highlight-scroll">
          Unlocking Efficiency and Impact
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
              <benefit.icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
