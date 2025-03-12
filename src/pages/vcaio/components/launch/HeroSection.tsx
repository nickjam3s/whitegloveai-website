
import { ArrowRight, Shield, FileText, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Shield,
    title: "Comprehensive Risk Mitigation",
    description: "Your data, IP, and compliance are safe with us."
  },
  {
    icon: FileText,
    title: "A Clear Plan",
    description: "We demystify the AI adoption process and guide you every step of the way."
  },
  {
    icon: TrendingUp,
    title: "Immediate Results",
    description: "See tangible efficiencies and ROI within weeks, not months."
  },
  {
    icon: Users,
    title: "Custom Vendor Selection",
    description: "We help you cut through the noise and find solutions that match your business needs."
  }
];

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#7928CA,transparent_60%)] opacity-25" 
          style={{
            transformOrigin: '60% 40%',
            animation: 'morphing 12s ease-in-out infinite, rotating 15s linear infinite'
          }}
        ></div>
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight">
            Introducing the AI Launchpad Workshop
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            WhitegloveAI's AI Launchpad Workshop is designed for those ready to embrace AI but unwilling to compromise security, accuracy, or compliance. We eliminate the fear and uncertainty holding teams back.
          </p>
          <Button className="group mb-16" asChild>
            <a href="#contact" className="inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-gray-800">
                <feature.icon className="h-10 w-10 text-secondary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
