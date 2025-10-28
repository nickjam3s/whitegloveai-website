
import { TrendingUp } from "lucide-react";

const benefits = {
  training: [
    "User-Centric Training: Tailored sessions for effective LLM interaction",
    "Best Practices for AI Use: Guidance on ethical and responsible usage",
    "Custom Use Case Development: Workshops for specific use cases"
  ],
  platform: [
    "Industry-Specific Solutions: Secure AI platform for various sectors",
    "Enterprise-Grade Security: Robust security measures and compliance",
    "Scalable Architecture: Solutions that grow with your organization",
    "Unlimited Access: Leverage top AI models securely"
  ],
  efficiency: [
    "Streamlined Workflows: Automate tasks and improve decision-making",
    "Improved Collaboration: Integrate AI into existing processes",
    "Cost Savings: Optimize workflows and minimize manual effort"
  ]
};

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-semibold mb-8 heading-highlight-scroll">Benefits</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Training Benefits</h3>
            <ul className="space-y-3">
              {benefits.training.map((benefit, index) => (
                <li key={index} className="text-gray-400">{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Platform Benefits</h3>
            <ul className="space-y-3">
              {benefits.platform.map((benefit, index) => (
                <li key={index} className="text-gray-400">{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Efficiency Benefits</h3>
            <ul className="space-y-3">
              {benefits.efficiency.map((benefit, index) => (
                <li key={index} className="text-gray-400">{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
