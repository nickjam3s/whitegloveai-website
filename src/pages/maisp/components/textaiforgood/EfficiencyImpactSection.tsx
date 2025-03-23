
import React from "react";

// SVG Network illustration component
const NetworkIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M400 50C400 77.6142 377.614 100 350 100C322.386 100 300 77.6142 300 50C300 22.3858 322.386 0 350 0C377.614 0 400 22.3858 400 50Z" stroke="white" strokeWidth="4"/>
    <path d="M650 150C650 177.614 627.614 200 600 200C572.386 200 550 177.614 550 150C550 122.386 572.386 100 600 100C627.614 100 650 122.386 650 150Z" stroke="white" strokeWidth="4"/>
    <path d="M400 250C400 277.614 377.614 300 350 300C322.386 300 300 277.614 300 250C300 222.386 322.386 200 350 200C377.614 200 400 222.386 400 250Z" stroke="white" strokeWidth="4"/>
    <path d="M150 150C150 177.614 127.614 200 100 200C72.3858 200 50 177.614 50 150C50 122.386 72.3858 100 100 100C127.614 100 150 122.386 150 150Z" stroke="white" strokeWidth="4"/>
    <path d="M400 350C400 377.614 377.614 400 350 400C322.386 400 300 377.614 300 350C300 322.386 322.386 300 350 300C377.614 300 400 322.386 400 350Z" stroke="white" strokeWidth="4"/>
    <path d="M650 350C650 377.614 627.614 400 600 400C572.386 400 550 377.614 550 350C550 322.386 572.386 300 600 300C627.614 300 650 322.386 650 350Z" stroke="white" strokeWidth="4"/>
    <path d="M750 250C750 277.614 727.614 300 700 300C672.386 300 650 277.614 650 250C650 222.386 672.386 200 700 200C727.614 200 750 222.386 750 250Z" stroke="white" strokeWidth="4"/>
    <path d="M150 350C150 377.614 127.614 400 100 400C72.3858 400 50 377.614 50 350C50 322.386 72.3858 300 100 300C127.614 300 150 322.386 150 350Z" stroke="white" strokeWidth="4"/>
    <path d="M250 250C250 277.614 227.614 300 200 300C172.386 300 150 277.614 150 250C150 222.386 172.386 200 200 200C227.614 200 250 222.386 250 250Z" stroke="white" strokeWidth="4"/>
    <line x1="150" y1="150" x2="300" y2="50" stroke="white" strokeWidth="4"/>
    <line x1="150" y1="150" x2="300" y2="250" stroke="white" strokeWidth="4"/>
    <line x1="400" y1="50" x2="550" y2="150" stroke="white" strokeWidth="4"/>
    <line x1="400" y1="250" x2="550" y2="150" stroke="white" strokeWidth="4"/>
    <line x1="400" y1="250" x2="550" y2="350" stroke="white" strokeWidth="4"/>
    <line x1="250" y1="250" x2="300" y2="250" stroke="white" strokeWidth="4"/>
    <line x1="400" y1="250" x2="650" y2="250" stroke="white" strokeWidth="4"/>
    <line x1="650" y1="150" x2="650" y2="250" stroke="white" strokeWidth="4"/>
    <line x1="150" y1="350" x2="300" y2="350" stroke="white" strokeWidth="4"/>
    <line x1="400" y1="350" x2="550" y2="350" stroke="white" strokeWidth="4"/>
  </svg>
);

const EfficiencyImpactSection = () => {
  return (
    <section className="py-24 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Unlocking Efficiency and Impact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Customized Assistance</h3>
              <p className="text-gray-400">
                Our AI chatbots are trained on your organization's specific information, 
                providing accurate and helpful responses to inquiries on your website.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Effortless Engagement</h3>
              <p className="text-gray-400">
                The chatbot answers questions 24/7, freeing up your team to focus on core 
                activities and enhancing visitor engagement.
              </p>
            </div>
          </div>
          <div className="mx-auto">
            <NetworkIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EfficiencyImpactSection;
