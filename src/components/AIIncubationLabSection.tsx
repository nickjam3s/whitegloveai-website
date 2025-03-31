
import React from 'react';
import { Sparkles, Rocket, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AIIncubationLabSection = () => {
  return (
    <section id="ai-incubation-lab" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-semibold mb-4 heading-highlight-scroll text-white">
            AI Incubation Lab
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-10">
            Launch AI-powered products faster with enterprise-grade security, customer validation, and scalable architecture.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-up">
          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-center">Problem-Led Prototyping</h3>
            <p className="text-gray-400 text-center">
              We identify real customer challenges and build secure MVPs in weeks—not months.
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-center">Full-Lifecycle Build Service</h3>
            <p className="text-gray-400 text-center">
              From ideation to launch, we deliver turnkey AI solutions with embedded compliance and real-time user feedback.
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-center">Enterprise-Ready from Day One</h3>
            <p className="text-gray-400 text-center">
              Solutions are designed for compliance, scalability, and long-term value creation.
            </p>
          </div>
        </div>

        {/* AI Solutions */}
        <div className="animate-fade-up">
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">
            AI Solutions Built in the Lab
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/60 border border-gray-800 hover:border-[#9b87f5]/50 transition-colors overflow-hidden">
              <CardContent className="p-6">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-[#9b87f5]">Lucidis.ai</div>
                </div>
                <p className="text-gray-400">
                  Lucidis is an innovative Machine Vision-powered solution designed to revolutionize 
                  data cleaning, extraction and delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 border border-gray-800 hover:border-[#9b87f5]/50 transition-colors overflow-hidden">
              <CardContent className="p-6">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-[#9b87f5]">The AI Executive</div>
                </div>
                <p className="text-gray-400">
                  The AI Executive is our comprehensive media platform for navigating the world of artificial 
                  intelligence in business. Featuring a Podcast, Blog Daily Newsletter and an AI Marketplace, 
                  matching buyers and vendors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 border border-gray-800 hover:border-[#9b87f5]/50 transition-colors overflow-hidden">
              <CardContent className="p-6">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-[#9b87f5]">
                    <span className="mr-2">Coming Soon:</span>
                    Polaicy.com
                  </div>
                </div>
                <p className="text-gray-400">
                  Polaicy.com is an innovative AI policy generator designed to help organizations 
                  develop and manage AI governance policies efficiently. It offers customizable templates, 
                  process orchestration, and integrates with existing compliance systems to ensure 
                  responsible AI use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIncubationLabSection;
