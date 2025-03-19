
const IntroductionSection = () => {
  const features = [
    {
      id: 1,
      title: "Comprehensive Risk Mitigation",
      description: "Your data, IP, and compliance are safe with us."
    },
    {
      id: 2,
      title: "A Clear Plan",
      description: "We demystify the AI adoption process and guide you every step of the way."
    },
    {
      id: 3,
      title: "Immediate Results",
      description: "See tangible efficiencies and ROI within weeks, not months."
    },
    {
      id: 4,
      title: "Custom Vendor Selection",
      description: "We help you cut through the noise and find solutions that match your business needs."
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="/lovable-uploads/86e52a58-1a69-47d8-8a53-d995ec083b30.png" 
              alt="AI Launchpad Workshop in action" 
              className="rounded-lg w-full"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Introducing the AI Launchpad Workshop
            </h2>
            
            <p className="text-lg mb-8">
              WhitegloveAI's AI Launchpad Workshop is designed for those 
              ready to embrace AI but unwilling to compromise security, 
              accuracy, or compliance. We eliminate the fear and uncertainty 
              holding teams back.
            </p>
            
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
                      {feature.id}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute top-6 right-10">
          <img 
            src="/lovable-uploads/ec4171f2-9cdd-4989-a991-a9806e663223.png" 
            alt="WhitegloveAI Logo" 
            className="w-16 h-16"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
