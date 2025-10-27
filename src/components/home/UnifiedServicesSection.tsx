import React from 'react';
import { ArrowRight, MessageSquare, Building2, GraduationCap, Lightbulb, Languages, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Lightbulb,
    title: "Consulting",
    description: "Strategic AI advisory, roadmapping, and governance to ensure your AI initiatives succeed.",
    link: "/consulting"
  },
  {
    icon: MessageSquare,
    title: "CommunicationsAI",
    description: "Unify and automate customer and citizen conversations across chat, voice, and text with our <a href='https://www.lucidis.ai' target='_blank' rel='noopener noreferrer' className='hover:text-secondary transition-colors'>Lucidis</a> platform.",
    link: "/communicationsai"
  },
  {
    icon: Building2,
    title: "GovAI",
    description: "Specialized, compliant AI solutions and procurement expertise for the public sector.",
    link: "/govai"
  },
  {
    icon: GraduationCap,
    title: "AI Training",
    description: "Empower your workforce with expert-led AI training and certification programs.",
    link: "/training"
  },
  {
    icon: Languages,
    title: "TranslateAI",
    description: "Break language barriers with advanced AI-powered translation and localization services.",
    link: "/translateai"
  },
  {
    icon: Bot,
    title: "EmbodiedAI",
    description: "Deploy intelligent humanoid robots for warehousing, fulfillment, and operational excellence.",
    link: "/embodiedai"
  }
];

const UnifiedServicesSection = () => {
  return (
    <div className="space-y-8 animate-fade-up text-center">
      <h2 className="text-3xl font-semibold mb-4 heading-highlight-scroll text-white">
        End-to-End AI Solutions, Tailored to Your Mission
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto">
        From strategy to execution, we deliver comprehensive AI solutions designed for your unique needs.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
          <Link 
            key={index} 
            to={service.link}
            className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-all hover:scale-105 group"
          >
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
              <service.icon className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-medium mb-2 text-white">{service.title}</h3>
            <p className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: service.description }}></p>
            <div className="flex items-center justify-center mt-4 text-secondary group-hover:translate-x-1 transition-transform">
              <span className="text-sm">Learn More</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UnifiedServicesSection;
