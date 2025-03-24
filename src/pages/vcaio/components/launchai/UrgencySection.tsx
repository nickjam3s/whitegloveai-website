
import { Trophy, Shield, BarChart3 } from "lucide-react";

const UrgencySection = () => {
  const stats = [
    {
      percentage: 74,
      title: "The Challenges of Scaling AI",
      description: "According to a study by BCG, 74% of companies fail to scale AI successfully, often due to complex architectures and unclear strategies."
    },
    {
      percentage: 84,
      title: "Navigating the Regulatory Landscape",
      description: "84% of executives predict stricter AI regulations, making compliance non-negotiable."
    },
    {
      percentage: 100,
      title: "Minimizing Risks, Maximizing Results",
      description: "These risks are real—but with the right partner, they're manageable."
    }
  ];

  const advantages = [
    {
      icon: Trophy,
      title: "Competitive Advantage",
      description: "The competition is already adopting AI to drive efficiencies and scale their bottom line. Can you afford to wait?"
    },
    {
      icon: Shield,
      title: "Secure AI Future",
      description: "Take the first step toward a secure, scalable AI future with WhitegloveAI by your side."
    },
    {
      icon: BarChart3,
      title: "Harness Data for Smarter Decisions",
      description: "AI unlocks real-time data-driven insights."
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">Why AI Adoption is Critical Now</h2>
        
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-block w-36 h-36 mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="#333" 
                    strokeWidth="8"
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="#8B5CF6" 
                    strokeWidth="8"
                    strokeDasharray={`${stat.percentage * 2.83} 283`}
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">{stat.percentage}%</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{stat.title}</h3>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <p className="text-lg mb-8">
          At WhitegloveAI, we understand the pressure to do more with less. We're currently working with 
          organizations to turn AI challenges into wins, without sacrificing security.
        </p>
        
        <h3 className="text-2xl font-bold mb-8">The Urgency of AI Adoption</h3>
        <p className="text-xl font-semibold mb-8">The Time to Act Is Now</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <item.icon className="h-12 w-12 text-purple-500 mb-4" />
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
