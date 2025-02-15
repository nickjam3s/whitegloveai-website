
import { ArrowRight, Fingerprint, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-up">
            <img
              src="/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png"
              alt="WhitegloveAI Logo"
              className="h-16 mx-auto mb-8"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Elevate Your AI Experience
              <br />
              with White Glove Service
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Premium AI solutions delivered with exceptional care and attention to detail.
              Experience the difference of personalized AI service.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-semibold mb-4">Why Choose WhitegloveAI</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the perfect blend of cutting-edge AI technology and exceptional
              service that sets your business apart.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-up">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background/50 p-8 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors"
              >
                <feature.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: Fingerprint,
    title: "Personalized Service",
    description:
      "Receive dedicated support and customized solutions that perfectly align with your unique business needs.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Benefit from industry-leading security measures that protect your data and ensure compliance.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Access our worldwide network of AI experts and resources to scale your business globally.",
  },
];

export default Index;
