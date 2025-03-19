
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
                {/* New SVG illustration based on the provided image */}
                <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background elements */}
                  <path d="M180 120 L160 150" stroke="white" strokeWidth="1" opacity="0.3" />
                  <path d="M320 120 L340 150" stroke="white" strokeWidth="1" opacity="0.3" />
                  <path d="M150 200 C140 180, 150 160, 170 170" stroke="white" strokeWidth="1" opacity="0.4" fill="none" />
                  <path d="M350 200 C360 180, 350 160, 330 170" stroke="white" strokeWidth="1" opacity="0.4" fill="none" />

                  {/* Main document - light purple */}
                  <rect x="190" y="70" width="120" height="180" rx="5" fill="#e6e6ff" fillOpacity="0.15" stroke="white" strokeWidth="1.5" />
                  
                  {/* Dashed line on the left side of document */}
                  <line x1="205" y1="70" x2="205" y2="250" stroke="white" strokeWidth="1" strokeDasharray="5,5" opacity="0.7" />
                  
                  {/* File folder/binder behind main document */}
                  <rect x="180" y="75" width="140" height="180" rx="4" fill="transparent" stroke="white" strokeWidth="1" opacity="0.6" />
                  <path d="M320 75 L320 255" stroke="white" strokeWidth="1" />
                  <path d="M320 115 L340 115" stroke="white" strokeWidth="1" />
                  <path d="M320 175 L340 175" stroke="white" strokeWidth="1" />

                  {/* Top edge of paper */}
                  <line x1="190" y1="70" x2="310" y2="70" stroke="white" strokeWidth="2" />

                  {/* Small tabs on right */}
                  <rect x="310" y="100" width="20" height="20" fill="#333" stroke="white" strokeWidth="1" />
                  <rect x="310" y="160" width="20" height="20" fill="#333" stroke="white" strokeWidth="1" />
                  
                  {/* Shield with lock in the center of document */}
                  <path d="M230 130 L270 130 L270 180 L250 200 L230 180 Z" fill="#333" stroke="white" strokeWidth="1.5" />
                  <circle cx="250" cy="160" r="10" fill="none" stroke="white" strokeWidth="1.5" />
                  <path d="M250 155 L250 160 M250 160 L254 164" stroke="white" strokeWidth="1.5" />

                  {/* Decorative elements */}
                  <path d="M180 230 C160 240, 150 220, 160 200" stroke="white" strokeWidth="1" opacity="0.5" fill="none" />
                  <path d="M350 230 C370 240, 380 220, 370 200" stroke="white" strokeWidth="1" opacity="0.5" fill="none" />
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
