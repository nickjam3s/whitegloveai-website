
import React from "react";

const PartnersSection = () => {
  const partners = [
    { name: "NPower" },
    { name: "Tackle Tomorrow" },
    { name: "TILT" },
    { name: "Local Food Bank" },
    { name: "Education First" },
    { name: "Community Health" }
  ];

  return (
    <section className="py-20 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
            Our Nonprofit Partners
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proud to support these organizations making a difference in their communities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="bg-card/20 p-6 rounded-lg border border-gray-800 flex flex-col items-center justify-center h-32">
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-primary">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" 
                      fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center">
                  <span className="text-sm font-medium">{partner.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card/30 p-8 rounded-lg border border-gray-800 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">Success Story: Tackle Tomorrow</h3>
          <p className="text-gray-400 text-center mb-6">
            Since implementing TextAI, Tackle Tomorrow has seen a 45% increase in website engagement
            and significantly reduced response times for common inquiries, allowing their small team
            to focus on their core mission of helping children learn to read.
          </p>
          <div className="flex justify-center">
            <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full text-sm">
              <span className="animate-pulse h-2 w-2 bg-primary rounded-full mr-2"></span>
              TextAI Powered Partner
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
