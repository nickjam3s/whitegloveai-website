import React from "react";

const EfficiencyImpactSection = () => {
  return (
    <section className="py-16 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Unlocking Efficiency and Impact
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="max-w-3xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Customized Assistance</h3>
                <p className="text-gray-400 text-lg">
                  Our AI chatbots are trained on your organization's specific information,
                  providing accurate and helpful responses to inquiries on your website.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Effortless Engagement</h3>
                <p className="text-gray-400 text-lg">
                  The chatbot answers questions 24/7, freeing up your team to focus on core activities and 
                  enhancing visitor engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EfficiencyImpactSection;