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
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your organization's AI capabilities in four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300 group"
            >
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-purple-500/50">
                {index + 1}
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30 rounded-2xl p-10 border border-purple-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="relative text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-white">
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
                <div key={index} className="flex items-start bg-black/40 p-4 rounded-lg border border-purple-500/20">
                  <CheckCircle className="h-6 w-6 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-200 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-lg px-8 py-6 h-auto">
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
