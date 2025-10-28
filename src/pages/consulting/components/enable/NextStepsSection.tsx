import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "Schedule Your Consultation",
    description: "Connect with our AI enablement experts to discuss your organization's unique challenges and goals."
  },
  {
    title: "Receive Your Custom Plan",
    description: "We'll develop a tailored AI enablement roadmap designed specifically for your team's needs and timeline."
  },
  {
    title: "Begin Your AI Journey",
    description: "Launch your comprehensive enablement program with hands-on training, resources, and dedicated support."
  },
  {
    title: "Scale with Confidence",
    description: "Expand AI adoption across your organization with ongoing governance, monitoring, and optimization support."
  }
];

const NextStepsSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your organization's AI capabilities in four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-section">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300 animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {index + 1}
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-lg p-10 border border-gray-800">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">
              Why Choose WhitegloveAI's AI Enablement Service?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left mb-10">
              {[
                "Proven track record with enterprise clients",
                "Comprehensive security and compliance focus",
                "Role-based training customization",
                "Ongoing support and governance",
                "Measurable ROI tracking",
                "Flexible engagement models"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="group">
              <Link to="#contact" className="inline-flex items-center">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
