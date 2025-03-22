
import React from "react";
import { MessageSquare, Users, Zap } from "lucide-react";

const IntroSection = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Smart Conversations",
      description: "AI-powered chatbots that understand context and provide helpful responses."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Engagement",
      description: "Connect with your audience 24/7 without overwhelming your staff."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Operational Efficiency",
      description: "Free up valuable resources to focus on your mission, not routine inquiries."
    }
  ];

  return (
    <section className="py-20 bg-background w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
            Transforming Nonprofit Engagement
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            TextAI for Good brings the power of artificial intelligence to serve those who serve others
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-8 rounded-lg border border-gray-800 flex flex-col items-center text-center">
              <div className="mb-6 bg-primary/10 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card/30 p-8 rounded-lg border border-gray-800">
          <h3 className="text-xl font-semibold mb-4 text-center">Our Mission</h3>
          <p className="text-gray-400 text-center max-w-3xl mx-auto">
            At TextAI for Good, we believe that all nonprofits, regardless of size or resources, 
            should have access to transformative AI technology. Our mission is to empower these 
            organizations with free, powerful AI solutions that enhance their ability to serve 
            communities and create lasting positive impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
