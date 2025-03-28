
import React from 'react';
import { MessageSquare, Mic, Video, Users, Bot } from "lucide-react";

const services = [
  {
    title: "TextAI",
    description: "AI chatbots answer questions 24/7 via text unlocking access to information.",
    icon: MessageSquare,
  },
  {
    title: "VoiceAI",
    description: "AI agents handle tasks and answer questions 24/7 using voice.",
    icon: Mic,
  },
  {
    title: "AvatarAI",
    description: "Video-based AI avatars provide live customer support around the clock.",
    icon: Video,
  },
  {
    title: "VendorAI",
    description: "We find, help procure and manage AI vendors for you.",
    icon: Users,
  },
  {
    title: "AutomateAI",
    description: "Managed Agents that support business process",
    icon: Bot,
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 px-4 md:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold text-primary mb-4">OUR SOLUTIONS</h2>
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-12 heading-highlight-scroll">
          Our Managed AI Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-section">
          {services.map((service, index) => (
            <div key={service.title} className="bg-card p-8 rounded-lg animate-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
