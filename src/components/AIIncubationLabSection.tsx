import React from 'react';
import { Sparkles, Rocket, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
            Launch AI-powered products faster with enterprise-grade security, customer validation, and scalable architecture.
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

        <div className="animate-fade-up">
          <h3 className="text-2xl font-semibold mb-8 text-center text-[#9b87f5]">
            AI Solutions Built in the Lab
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="https://lucidis.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform"
            >
              <Card className="bg-card/60 border border-gray-800 hover:border-[#9b87f5]/50 transition-colors overflow-hidden h-full">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-[#9b87f5]">Lucidis.ai</div>
                  </div>
                  <div className="flex justify-center my-4">
                    <img 
                      src="/lovable-uploads/efce8320-0d23-4c5d-847e-b9010ffe74b6.png" 
                      alt="Lucidis.ai Logo" 
                      className="h-48 w-auto"
                    />
                  </div>
                  <p className="text-gray-400 text-center">
                    Lucidis is a private, closed-loop AI platform powered by machine vision that transforms how organizations clean, extract, and deliver data. With real-time automation, Lucidis eliminates manual tasks and streamlines operations across industries like property management, healthcare, and compliance—reducing processing time by up to 80% and increasing data accuracy to 100%.
                  </p>
                </CardContent>
              </Card>
            </a>

            <a 
              href="https://aiexecutive.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform"
            >
              <Card className="bg-card/60 border border-gray-800 hover:border-[#9b87f5]/50 transition-colors overflow-hidden h-full">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-[#9b87f5]">The AI Executive</div>
                  </div>
                  <div className="flex justify-center my-4">
                    <img 
                      src="/lovable-uploads/3115d5e9-51d8-496f-b324-22397addb268.png" 
                      alt="The AI Executive Logo" 
                      className="h-48 w-auto"
                    />
                  </div>
                  <p className="text-gray-400 text-center">
                    The AI Executive is a premier media and education platform built for business leaders navigating the AI revolution. It features a podcast, daily newsletter, and expert insights—equipping executives with strategies for secure AI adoption. An AI Marketplace is launching soon, enabling seamless discovery and matching of enterprise-grade AI vendors and solutions.
                  </p>
                </CardContent>
              </Card>
            </a>

            <a 
              href="https://polaicy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform"
            >
              <Card className="bg-card/60 border border-gray-800 hover:border-[#9b87f5]/50 transition-colors overflow-hidden h-full">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <div className="text-2xl text-[#9b87f5]">
                      <span className="font-bold">Pol</span>
                      <span className="font-normal">ai</span>
                      <span className="font-bold">cy.com</span>
                      <div className="text-sm italic text-gray-500 mt-1 text-center">Coming Soon</div>
                    </div>
                  </div>
                  <div className="flex justify-center my-4">
                    <img 
                      src="/lovable-uploads/26655709-cde4-41ab-95e9-8015e823142a.png" 
                      alt="Polaicy.com Logo" 
                      className="h-48 w-auto"
                    />
                  </div>
                  <p className="text-gray-400 text-center">
                    Polaicy.com is an AI-powered governance platform that helps organizations create, manage, and operationalize AI policies with ease. Designed for compliance and security teams, it includes customizable templates, automation tools, and seamless integration with enterprise systems—ensuring responsible AI use aligned with industry standards and regulations.
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
      
      <ScrollAnimation targetId="aiamf-framework" showArrow={true} />
    </section>
  );
};

export default AIIncubationLabSection;
