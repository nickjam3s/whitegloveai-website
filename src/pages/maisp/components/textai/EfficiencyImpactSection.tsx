
import React from "react";

const EfficiencyImpactSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Unlocking Efficiency and Impact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Customized Assistance</h3>
              <p className="text-gray-400">
                Our AI chatbots are trained on your organization's specific information, 
                providing accurate and helpful responses to inquiries on your website.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Effortless Engagement</h3>
              <p className="text-gray-400">
                The chatbot answers questions 24/7, freeing up your team to focus on core 
                activities and enhancing visitor engagement.
              </p>
            </div>
          </div>
          <div>
            <img 
              src="/lovable-uploads/a32f749b-90e4-48e0-b2d7-bee426f38d5e.png" 
              alt="AI Network Illustration" 
              className="max-w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EfficiencyImpactSection;
