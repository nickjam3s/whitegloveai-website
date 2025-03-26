
import { Shield, DollarSign, Settings, BrainCircuit } from "lucide-react";

const benefits = [
  {
    title: "Cost-Effective Solution",
    description: "Access executive-level AI leadership without the financial burden of a full-time hire.",
    icon: DollarSign
  },
  {
    title: "Secure & Compliant",
    description: "Our AI-AMF framework ensures all AI initiatives meet the highest security and compliance standards.",
    icon: Shield
  },
  {
    title: "Flexible Engagement",
    description: "Tailor our vCAIO services to your specific needs and budget, with options for short-term or ongoing support.",
    icon: Settings
  },
  {
    title: "Strategic Expertise",
    description: "Leverage industry-leading AI insights and strategies to drive innovation, optimize operations, and maintain a competitive edge in your market.",
    icon: BrainCircuit
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center heading-highlight-scroll">Benefits of a vCAIO</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-section">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="relative bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-purple-900/20 overflow-hidden group animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-900/10 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              <benefit.icon className="h-10 w-10 text-[#7021EE] mb-6" />
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-400 relative z-10">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
