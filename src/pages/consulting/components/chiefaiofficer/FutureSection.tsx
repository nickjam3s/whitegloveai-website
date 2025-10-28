import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useEffect } from "react";

const FutureSection = () => {
  useEffect(() => {
    // Load HubSpot script only once
    const existingScript = document.getElementById('hubspot-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'hubspot-script';
      script.src = "https://js-na2.hsforms.net/forms/embed/242996761.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 heading-highlight-scroll">The Future of AI Leadership</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            AI is transforming industries at an unprecedented pace, and staying ahead of the curve is essential for business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-purple-900/20">
            <p className="text-gray-400">
              Our consulting service provides a flexible and cost-effective way to access the expert AI leadership you need to thrive.
            </p>
          </div>
          
          <div className="bg-card/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-purple-900/20">
            <p className="text-gray-400">
              Partner with WhitegloveAI to unlock the power of AI and secure your organization's future.
            </p>
          </div>
          
          <div className="bg-card/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-purple-900/20">
            <p className="text-gray-400">
              Our expert team helps you navigate the complex AI landscape and implement solutions that deliver real business value.
            </p>
          </div>
        </div>
        
        <div className="w-full max-w-4xl mx-auto mt-12 bg-gradient-to-r from-card/90 to-card/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 hover:border-secondary/30 transition-all duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Ready to Transform Your AI Strategy?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Take the first step toward AI-driven success by connecting with our team today.
            </p>
          </div>
          
          <div className="min-h-[400px]">
            <div className="hs-form-frame" data-region="na2" data-form-id="c5c1e3a2-eebe-4d65-8368-03c02ebac2b0" data-portal-id="242996761"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
