
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section id="cta" className="py-20 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 heading-highlight-scroll text-white">
            Ready to Accelerate Your AI Journey?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Partner with WhitegloveAI and experience a seamless, secure, and strategically guided AI transformation.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors">
            Get Started Today
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
