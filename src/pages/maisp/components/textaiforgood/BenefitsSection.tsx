
import React from "react";

// Custom SVG components
const TimerIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 14C25.6625 14 14 25.6625 14 40C14 54.3375 25.6625 66 40 66C54.3375 66 66 54.3375 66 40C66 25.6625 54.3375 14 40 14ZM48.5 43H40C38.35 43 37 41.65 37 40V28.5C37 26.85 38.35 25.5 40 25.5C41.65 25.5 43 26.85 43 28.5V37H48.5C50.15 37 51.5 38.35 51.5 40C51.5 41.65 50.15 43 48.5 43Z" fill="#7021EE"/>
  </svg>
);

const MessageIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 14C25.65 14 14 23.4 14 35C14 41.4 17.15 47.1 22.5 51.15C22.05 54.9 20.2 58.35 17.05 61.05C16.65 61.4 16.5 61.95 16.65 62.45C16.8 62.95 17.25 63.3 17.75 63.3C17.8 63.3 17.85 63.3 17.9 63.3C18 63.3 24.15 62.45 29.65 59.1C32.9 60.3 36.35 61 40 61C54.35 61 66 51.6 66 40C66 28.4 54.35 14 40 14ZM30.5 41.5C29.125 41.5 28 40.375 28 39C28 37.625 29.125 36.5 30.5 36.5C31.875 36.5 33 37.625 33 39C33 40.375 31.875 41.5 30.5 41.5ZM40 41.5C38.625 41.5 37.5 40.375 37.5 39C37.5 37.625 38.625 36.5 40 36.5C41.375 36.5 42.5 37.625 42.5 39C42.5 40.375 41.375 41.5 40 41.5ZM49.5 41.5C48.125 41.5 47 40.375 47 39C47 37.625 48.125 36.5 49.5 36.5C50.875 36.5 52 37.625 52 39C52 40.375 50.875 41.5 49.5 41.5Z" fill="#7021EE"/>
  </svg>
);

const ImpactIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M63.3335 25L35.0002 53.3333L21.6668 40" stroke="#7021EE" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40.0002 66.6667C54.7278 66.6667 66.6668 54.7276 66.6668 40C66.6668 25.2724 54.7278 13.3333 40.0002 13.3333C25.2726 13.3333 13.3335 25.2724 13.3335 40C13.3335 54.7276 25.2726 66.6667 40.0002 66.6667Z" stroke="#7021EE" strokeWidth="8"/>
  </svg>
);

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Become a Part of the AI Movement
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-5">
              <TimerIcon />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Enhanced Efficiency</h3>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-5">
              <MessageIcon />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Improved Engagement</h3>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-5">
              <ImpactIcon />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Amplified Impact</h3>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            TextAI for Good is dedicated to making AI accessible and impactful for nonprofits. 
            Let us help you amplify your mission and create a lasting impact in the communities you serve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
