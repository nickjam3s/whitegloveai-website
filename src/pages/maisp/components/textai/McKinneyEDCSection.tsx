
import React from "react";

const McKinneyEDCSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-6">
          <img 
            src="/lovable-uploads/0b35df8d-6f52-4087-bd23-cd4a7886273f.png" 
            alt="WhitegloveAI Logo" 
            className="w-16"
          />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          McKinney EDC Chatbot
        </h2>
        
        <p className="text-gray-400 text-lg mb-8">
          The McKinney EDC leverages our chatbot to reduce the number of inquires on commonly asked questions.
        </p>
        
        <div className="rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/b816dfd7-aa38-48fc-98da-d7560ba41a36.png" 
            alt="McKinney EDC Website with ChatBot Integration" 
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default McKinneyEDCSection;
