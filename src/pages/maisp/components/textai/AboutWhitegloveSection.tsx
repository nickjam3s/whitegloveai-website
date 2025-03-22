
import React from "react";
import { Award, Clock, Users } from "lucide-react";

const AboutWhitegloveSection = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Industry Expertise",
      description: "Specialized knowledge in AI implementation across multiple sectors."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Rapid Deployment",
      description: "Get your TextAI solution up and running in weeks, not months."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Dedicated Support",
      description: "Ongoing partnership with our expert team for continuous optimization."
    }
  ];

  return (
    <section className="py-20 bg-background w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
              About WhitegloveAI
            </h2>
            <p className="text-gray-400 mb-8">
              WhitegloveAI specializes in managed AI solutions that transform how organizations operate. 
              We combine cutting-edge AI technology with deep domain expertise to deliver solutions that 
              drive real business value. Our team of AI specialists, data scientists, and industry experts 
              work together to ensure successful implementation and ongoing optimization.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4 bg-primary/10 p-2 rounded">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto drop-shadow-xl">
              <defs>
                <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#D946EF" />
                </linearGradient>
                <clipPath id="roundedHex">
                  <path d="M200 20 L330 100 L330 300 L200 380 L70 300 L70 100 Z" />
                </clipPath>
              </defs>
              <path d="M200 20 L330 100 L330 300 L200 380 L70 300 L70 100 Z" fill="#1A1F2C" />
              <circle cx="200" cy="200" r="100" fill="url(#aboutGradient)" opacity="0.3" />
              <path d="M200 20 L330 100 L330 300 L200 380 L70 300 L70 100 Z" fill="none" stroke="url(#aboutGradient)" strokeWidth="4" />
              <g clipPath="url(#roundedHex)">
                <circle cx="200" cy="130" r="40" fill="url(#aboutGradient)" />
                <rect x="150" y="180" width="100" height="15" rx="7" fill="#555" />
                <rect x="130" y="210" width="140" height="15" rx="7" fill="#555" />
                <rect x="160" y="240" width="80" height="15" rx="7" fill="#555" />
                <rect x="140" y="270" width="120" height="40" rx="20" fill="url(#aboutGradient)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhitegloveSection;
