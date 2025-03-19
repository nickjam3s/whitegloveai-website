
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";

const PrivacyPolicy = () => {
  const policyRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black min-h-screen" ref={policyRef}>
      {/* Privacy Policy Hero Section - Based on provided image */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/10 to-black/95">
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-white">
                Privacy Policy
              </h1>
              <p className="text-gray-400 mb-4">Effective Date: 01/01/2025</p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl">
                WhitegloveAI LLC("Company," "we," "us," or "our") is committed 
                to protecting your privacy. This Privacy Policy describes how we 
                collect, use, and disclose your information when you visit our 
                website, use our services, or interact with us in any way.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative">
                {/* Updated SVG illustration based on the provided image */}
                <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Document with decorative elements */}
                  <g opacity="0.9">
                    {/* Background elements */}
                    <circle cx="250" cy="150" r="120" fill="url(#radialGradient)" fillOpacity="0.1" />
                    <path d="M180 100 L160 130" stroke="white" strokeWidth="1" opacity="0.2" />
                    <path d="M320 100 L340 130" stroke="white" strokeWidth="1" opacity="0.2" />
                    
                    {/* Main document */}
                    <rect x="170" y="60" width="140" height="180" rx="8" fill="#111" stroke="white" strokeWidth="1" opacity="0.8" />
                    
                    {/* Document content lines */}
                    <line x1="190" y1="90" x2="290" y2="90" stroke="white" strokeWidth="1" opacity="0.5" />
                    <line x1="190" y1="110" x2="270" y2="110" stroke="white" strokeWidth="1" opacity="0.4" />
                    <line x1="190" y1="130" x2="280" y2="130" stroke="white" strokeWidth="1" opacity="0.4" />
                    <line x1="190" y1="150" x2="260" y2="150" stroke="white" strokeWidth="1" opacity="0.3" />
                    <line x1="190" y1="170" x2="290" y2="170" stroke="white" strokeWidth="1" opacity="0.3" />
                    <line x1="190" y1="190" x2="270" y2="190" stroke="white" strokeWidth="1" opacity="0.2" />
                    
                    {/* Document corner fold */}
                    <path d="M310 60 L310 80 L290 60 Z" fill="#222" stroke="white" strokeWidth="0.5" opacity="0.8" />
                    
                    {/* Security shield overlay */}
                    <circle cx="240" cy="145" r="40" fill="url(#shieldGradient)" fillOpacity="0.15" />
                    <path d="M240 120 L270 130 L270 160 C270 175 255 190 240 195 C225 190 210 175 210 160 L210 130 Z" 
                          fill="none" stroke="white" strokeWidth="1.5" opacity="0.9" />
                    
                    {/* Lock icon in center of shield */}
                    <rect x="230" y="145" width="20" height="15" rx="2" fill="none" stroke="white" strokeWidth="1.5" />
                    <path d="M235 145 L235 138 C235 134 245 134 245 138 L245 145" stroke="white" strokeWidth="1.5" fill="none" />
                    <circle cx="240" cy="152" r="2" fill="white" />
                    
                    {/* Decorative elements */}
                    <circle cx="160" cy="90" r="3" fill="white" opacity="0.5" />
                    <circle cx="340" cy="190" r="2" fill="white" opacity="0.4" />
                    <path d="M150 200 C170 220, 140 240, 160 260" stroke="white" strokeWidth="1" opacity="0.2" fill="none" />
                    <path d="M330 80 C350 100, 320 120, 340 140" stroke="white" strokeWidth="0.5" opacity="0.2" fill="none" />
                  </g>
                  
                  {/* Gradients */}
                  <defs>
                    <radialGradient id="radialGradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7021EE" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#111" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="shieldGradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7021EE" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#111" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Our Commitment to Your Privacy
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl">
            This page has been cleared. A new privacy policy will be added soon.
          </p>
          <div className="mt-8">
            <Link to="/" className="inline-block px-6 py-3 bg-[#7021EE] text-white rounded-lg hover:bg-[#7021EE]/80 transition-colors">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
