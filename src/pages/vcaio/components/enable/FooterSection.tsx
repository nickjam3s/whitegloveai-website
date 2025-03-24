
import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <section className="py-16 bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Site Map */}
          <div className="col-span-1 md:col-span-5">
            <h4 className="text-white font-semibold mb-4">Site Map</h4>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-start">
            <p className="text-gray-400">© Copyright WhitegloveAI LLC 2025</p>
            <p className="text-[#7021EE] text-sm mt-1">Managed AI Service Provider™</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
