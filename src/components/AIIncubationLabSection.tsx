
import React from 'react';
import { Sparkles, Rocket, Shield } from 'lucide-react';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const AIIncubationLabSection = () => {
  return (
    <section id="ai-incubation-lab" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-semibold mb-4 heading-highlight-scroll text-[#9b87f5]">
            AI Incubation Lab
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            We can help you prototype your next app idea to life, as fast as 4 Weeks!
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-10">
            Launch AI-powered products faster with government-grade security, customer validation, and scalable architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-up">
          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Problem-Led Prototyping</h3>
            <p className="text-gray-400 text-center">
              We identify real customer challenges and build secure MVPs in weeks—not months.
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Full-Lifecycle Build Service</h3>
            <p className="text-gray-400 text-center">
              From ideation to launch, we deliver turnkey AI solutions with embedded compliance and real-time user feedback.
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Enterprise-Ready from Day One</h3>
            <p className="text-gray-400 text-center">
              Solutions are designed for compliance, scalability, and long-term value creation.
            </p>
          </div>
        </div>

      </div>
      
      <ScrollAnimation targetId="aiamf-framework" showArrow={true} />
    </section>
  );
};

export default AIIncubationLabSection;

