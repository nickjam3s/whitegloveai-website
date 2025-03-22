
import React from "react";
import { Clock, MessageCircle, TrendingUp, Globe, Shield, Users } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24/7 Availability",
      description: "Provide round-the-clock support without increasing staff workload."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Enhanced Communication",
      description: "Clear, consistent messaging across all interactions."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Increased Engagement",
      description: "Higher response rates and more meaningful interactions."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Broader Reach",
      description: "Connect with more people across different channels."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Data-Driven Insights",
      description: "Gain valuable understanding of community needs and concerns."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Staff Empowerment",
      description: "Free up human resources to focus on high-impact activities."
    }
  ];

  return (
    <section className="py-20 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
            Benefits of Joining the AI Movement
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Amplify your nonprofit's impact with our free AI-powered solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card/30 p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-full mr-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-3xl mx-auto">
            TextAI for Good is dedicated to making AI accessible and impactful for nonprofits.
            Let us help you amplify your mission and create a lasting impact in the communities you serve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
