
import { ShieldCheck, FileStack, Zap, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight pt-24">
          The AI Launchpad Workshop
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            WhitegloveAI's AI Launchpad Workshop is designed for those ready to embrace AI but unwilling to compromise security, accuracy, or compliance. We eliminate the fear and uncertainty holding teams back.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="p-6 bg-card rounded-lg border border-gray-800">
              <div className="flex flex-col items-center mb-4">
                <ShieldCheck className="h-10 w-10 text-secondary mb-3" />
                <h3 className="text-xl font-semibold mb-3">Comprehensive Risk Mitigation</h3>
              </div>
              <p className="text-gray-400">Your data, IP, and compliance are safe with us.</p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-gray-800">
              <div className="flex flex-col items-center mb-4">
                <FileStack className="h-10 w-10 text-secondary mb-3" />
                <h3 className="text-xl font-semibold mb-3">A Clear Plan</h3>
              </div>
              <p className="text-gray-400">We demystify the AI adoption process and guide you every step of the way.</p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-gray-800">
              <div className="flex flex-col items-center mb-4">
                <Zap className="h-10 w-10 text-secondary mb-3" />
                <h3 className="text-xl font-semibold mb-3">Immediate Results</h3>
              </div>
              <p className="text-gray-400">See tangible efficiencies and ROI within weeks, not months.</p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-gray-800">
              <div className="flex flex-col items-center mb-4">
                <Users className="h-10 w-10 text-secondary mb-3" />
                <h3 className="text-xl font-semibold mb-3">Custom Vendor Selection</h3>
              </div>
              <p className="text-gray-400">We help you cut through the noise and find solutions that match your business needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
