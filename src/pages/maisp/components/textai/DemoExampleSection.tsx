
import React from "react";

const DemoExampleSection = () => {
  return (
    <section className="py-20 bg-background w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-12 text-center heading-highlight-scroll">
          See TextAI in Action
        </h2>
        <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-800">
          <img 
            src="/lovable-uploads/a62ec3de-5d59-4632-a7e8-10b3bb49ba08.png" 
            alt="TextAI Chatbot Demo" 
            className="w-full object-cover"
            loading="lazy"
            width="1400"
            height="800"
          />
        </div>
      </div>
    </section>
  );
};

export default DemoExampleSection;
