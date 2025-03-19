
import React from "react";

const DemoSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See TextAI in Action
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our AI chatbots help nonprofits like Tackle Tomorrow deliver better service to their communities
          </p>
        </div>
        
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-xl">
          <div className="relative">
            <img 
              src="/lovable-uploads/024712fa-41f4-437f-92ad-5e4b50ee7290.png" 
              alt="Tackle Tomorrow Website with TextAI Chatbot" 
              className="w-full object-cover"
            />
            
            <div className="absolute right-4 bottom-4 flex items-center bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium opacity-90">
              <span className="animate-pulse h-2 w-2 bg-green-400 rounded-full mr-2"></span>
              TextAI Powered Chatbot
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-gray-100/10 rounded-lg p-4 border border-gray-800 text-center">
          <p className="text-gray-400">
            TextAI can be customized to match your website's design and fulfill your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
