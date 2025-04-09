
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
  return (
    <section className="py-16 mt-16 bg-gradient-to-br from-[#7021EE]/10 to-transparent border border-[#7021EE]/20 rounded-xl">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Business with AI?</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
          Contact us today to discuss how our AI expertise can help your organization thrive in the digital era.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center px-6 py-3 rounded-md bg-[#7021EE] text-white font-medium hover:bg-[#7021EE]/80 transition-colors"
        >
          Get in Touch
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default GetInTouch;
