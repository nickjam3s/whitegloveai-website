
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Lock, SmilePlus, BarChart3, Target, Activity } from "lucide-react";

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
                <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.9">
                    <circle cx="250" cy="150" r="120" fill="url(#radialGradient)" fillOpacity="0.1" />
                    <path d="M180 100 L160 130" stroke="white" strokeWidth="1" opacity="0.2" />
                    <path d="M320 100 L340 130" stroke="white" strokeWidth="1" opacity="0.2" />
                    
                    <rect x="170" y="60" width="140" height="180" rx="8" fill="#111" stroke="white" strokeWidth="1" opacity="0.8" />
                    
                    <line x1="190" y1="90" x2="290" y2="90" stroke="white" strokeWidth="1" opacity="0.5" />
                    <line x1="190" y1="110" x2="270" y2="110" stroke="white" strokeWidth="1" opacity="0.4" />
                    <line x1="190" y1="130" x2="280" y2="130" stroke="white" strokeWidth="1" opacity="0.4" />
                    <line x1="190" y1="150" x2="260" y2="150" stroke="white" strokeWidth="1" opacity="0.3" />
                    <line x1="190" y1="170" x2="290" y2="170" stroke="white" strokeWidth="1" opacity="0.3" />
                    <line x1="190" y1="190" x2="270" y2="190" stroke="white" strokeWidth="1" opacity="0.2" />
                    
                    <path d="M310 60 L310 80 L290 60 Z" fill="#222" stroke="white" strokeWidth="0.5" opacity="0.8" />
                    
                    <circle cx="240" cy="145" r="40" fill="url(#shieldGradient)" fillOpacity="0.15" />
                    <path d="M240 120 L270 130 L270 160 C270 175 255 190 240 195 C225 190 210 175 210 160 L210 130 Z" 
                          fill="none" stroke="white" strokeWidth="1.5" opacity="0.9" />
                    
                    <rect x="230" y="145" width="20" height="15" rx="2" fill="none" stroke="white" strokeWidth="1.5" />
                    <path d="M235 145 L235 138 C235 134 245 134 245 138 L245 145" stroke="white" strokeWidth="1.5" fill="none" />
                    <circle cx="240" cy="152" r="2" fill="white" />
                    
                    <circle cx="160" cy="90" r="3" fill="white" opacity="0.5" />
                    <circle cx="340" cy="190" r="2" fill="white" opacity="0.4" />
                    <path d="M150 200 C170 220, 140 240, 160 260" stroke="white" strokeWidth="1" opacity="0.2" fill="none" />
                    <path d="M330 80 C350 100, 320 120, 340 140" stroke="white" strokeWidth="0.5" opacity="0.2" fill="none" />
                  </g>
                  
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

      {/* Information We Collect Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Information We Collect
            </h2>
            <p className="text-gray-300 mb-8">
              We may collect the following types of information:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card p-6"
              >
                <div className="bg-[#333] w-8 h-8 mb-4 flex items-center justify-center rounded"></div>
                <h3 className="text-xl font-medium mb-3 text-white">Personal Information</h3>
                <p className="text-gray-300 text-sm">
                  Name, email address, phone number, and other contact details. Job title, company name, and industry. Payment information, if you purchase services from us.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card p-6"
              >
                <div className="bg-[#333] w-8 h-8 mb-4 flex items-center justify-center rounded"></div>
                <h3 className="text-xl font-medium mb-3 text-white">Non-Personal Information</h3>
                <p className="text-gray-300 text-sm">
                  Browser type, device information, and operating system. IP address and location data. Usage data, including pages viewed, links clicked, and session duration.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card p-6"
              >
                <div className="bg-[#333] w-8 h-8 mb-4 flex items-center justify-center rounded"></div>
                <h3 className="text-xl font-medium mb-3 text-white">Information from Third Parties</h3>
                <p className="text-gray-300 text-sm">
                  Data from partners, service providers, or publicly available sources.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Use Your Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-10 text-white">
              How We Use Your Information
            </h2>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-[#222] flex items-center justify-center text-white font-semibold text-2xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">To Provide Services</h3>
                  <p className="text-gray-300">
                    Facilitate account creation and management. Deliver AI solutions tailored to your needs.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-[#222] flex items-center justify-center text-white font-semibold text-2xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">To Improve Our Services</h3>
                  <p className="text-gray-300">
                    Analyze user behavior to enhance functionality and performance. Develop new features and offerings.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-[#222] flex items-center justify-center text-white font-semibold text-2xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">To Communicate with You</h3>
                  <p className="text-gray-300">
                    Respond to inquiries and provide customer support. Send updates, promotional materials, and other relevant information.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-[#222] flex items-center justify-center text-white font-semibold text-2xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">To Ensure Security and Compliance</h3>
                  <p className="text-gray-300">
                    Protect against fraudulent or unauthorized activities. Comply with legal obligations and enforce our terms of service.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Share Your Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-10 text-white">
              How We Share Your Information
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#111] p-6 rounded-lg"
              >
                <h3 className="text-xl font-medium mb-3 text-white">Service Providers</h3>
                <p className="text-gray-300 text-sm">
                  Third-party vendors that support our business operations (e.g., hosting, payment processing, analytics).
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#111] p-6 rounded-lg"
              >
                <h3 className="text-xl font-medium mb-3 text-white">Business Partners</h3>
                <p className="text-gray-300 text-sm">
                  Partners who collaborate with us on joint offerings or services.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#111] p-6 rounded-lg"
              >
                <h3 className="text-xl font-medium mb-3 text-white">Legal and Regulatory Authorities</h3>
                <p className="text-gray-300 text-sm">
                  To comply with applicable laws, regulations, or legal processes.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#111] p-6 rounded-lg"
            >
              <h3 className="text-xl font-medium mb-3 text-white">Corporate Transactions</h3>
              <p className="text-gray-300 text-sm">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cookies and Tracking Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-10 text-white">
              Cookies and Tracking Technologies
            </h2>
            
            <p className="text-gray-300 mb-10">
              We use cookies and similar tracking technologies to:
            </p>
            
            <div className="grid md:grid-cols-3 gap-10 mb-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <SmilePlus className="w-12 h-12 text-[#7021EE] mb-4" />
                <h3 className="text-lg font-medium mb-2 text-white">Enhance user experience</h3>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <BarChart3 className="w-12 h-12 text-[#7021EE] mb-4" />
                <h3 className="text-lg font-medium mb-2 text-white">Analyze website traffic and performance</h3>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <Target className="w-12 h-12 text-[#7021EE] mb-4" />
                <h3 className="text-lg font-medium mb-2 text-white">Deliver personalized content and advertisements</h3>
              </motion.div>
            </div>
            
            <p className="text-gray-300 text-center">
              You can manage your cookie preferences through your browser settings or by using our cookie management tool.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Retention Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Data Retention
            </h2>
            
            <p className="text-gray-300 mb-10">
              We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required or permitted by law.
            </p>
            
            <div className="relative border-l-2 border-gray-700 pl-8 ml-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 top-0 flex items-center justify-center w-8 h-8 bg-[#222] text-white font-medium rounded-sm">
                  1
                </div>
                <h3 className="text-xl font-medium mb-2 text-white">Collection</h3>
                <p className="text-gray-300">
                  Information is collected when you interact with our services
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 top-0 flex items-center justify-center w-8 h-8 bg-[#222] text-white font-medium rounded-sm">
                  2
                </div>
                <h3 className="text-xl font-medium mb-2 text-white">Usage</h3>
                <p className="text-gray-300">
                  Data is used for the purposes outlined in the policy
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 top-0 flex items-center justify-center w-8 h-8 bg-[#222] text-white font-medium rounded-sm">
                  3
                </div>
                <h3 className="text-xl font-medium mb-2 text-white">Retention</h3>
                <p className="text-gray-300">
                  Information is retained as long as necessary
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute -left-12 top-0 flex items-center justify-center w-8 h-8 bg-[#222] text-white font-medium rounded-sm">
                  4
                </div>
                <h3 className="text-xl font-medium mb-2 text-white">Deletion</h3>
                <p className="text-gray-300">
                  Data is deleted when no longer needed or required by law
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Security Section - NEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Data Security
            </h2>
            
            <p className="text-gray-300 mb-10">
              We implement industry-standard security measures to protect your information from unauthorized 
              access, disclosure, or misuse. However, no method of transmission or storage is completely secure, and 
              we cannot guarantee absolute security.
            </p>
            
            {/* Security Pyramid */}
            <div className="relative max-w-xl mx-auto mb-10">
              <svg viewBox="0 0 500 300" className="w-full h-auto">
                <polygon points="250,50 50,300 450,300" fill="#7021EE" fillOpacity="0.6" />
                
                {/* Pyramid Sections */}
                <line x1="50" y1="300" x2="450" y2="300" stroke="white" strokeWidth="2" />
                <line x1="100" y1="237.5" x2="400" y2="237.5" stroke="white" strokeWidth="2" />
                <line x1="150" y1="175" x2="350" y2="175" stroke="white" strokeWidth="2" />
                <line x1="200" y1="112.5" x2="300" y2="112.5" stroke="white" strokeWidth="2" />
                
                {/* Numbers */}
                <text x="220" y="95" fill="white" fontWeight="bold" fontSize="20">1</text>
                <text x="220" y="158" fill="white" fontWeight="bold" fontSize="20">2</text>
                <text x="220" y="220" fill="white" fontWeight="bold" fontSize="20">3</text>
                <text x="220" y="282" fill="white" fontWeight="bold" fontSize="20">4</text>
                
                {/* Labels */}
                <text x="320" y="95" fill="white" fontSize="18">Encryption</text>
                <text x="320" y="158" fill="white" fontSize="18">Access Controls</text>
                <text x="320" y="220" fill="white" fontSize="18">Monitoring</text>
                <text x="320" y="282" fill="white" fontSize="18">Regular Audits</text>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your Rights and Choices Section - NEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Your Rights and Choices
            </h2>
            
            <p className="text-gray-300 mb-10">
              Depending on your location, you may have the following rights:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#111] p-6 rounded-lg"
              >
                <h3 className="text-xl font-medium mb-3 text-white">Access and Correction</h3>
                <p className="text-gray-300 text-sm">
                  Access, correct, or delete your personal information.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#111] p-6 rounded-lg"
              >
                <h3 className="text-xl font-medium mb-3 text-white">Data Processing</h3>
                <p className="text-gray-300 text-sm">
                  Restrict or object to certain data processing activities.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#111] p-6 rounded-lg"
              >
                <h3 className="text-xl font-medium mb-3 text-white">Consent Withdrawal</h3>
                <p className="text-gray-300 text-sm">
                  Withdraw consent for data processing, where applicable.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#111] p-6 rounded-lg"
              >
                <h3 className="text-xl font-medium mb-3 text-white">Complaints</h3>
                <p className="text-gray-300 text-sm">
                  Lodge a complaint with a data protection authority.
                </p>
              </motion.div>
            </div>
            
            <p className="text-gray-300 text-center">
              To exercise your rights, contact us at <span className="text-[#7021EE]">privacy@whitegloveai.com</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Third-Party Links Section - NEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Third-Party Links
            </h2>
            
            <div className="glass-card p-8 border border-[#7021EE]/20">
              <p className="text-gray-300">
                Our website and services may contain links to third-party websites. We are not responsible for the privacy 
                practices of these third parties. We encourage you to review their privacy policies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Changes to This Privacy Policy Section - NEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Changes to This Privacy Policy
            </h2>
            
            <p className="text-gray-300 mb-10">
              We may update this Privacy Policy from time to time. The "Effective Date" at the top of this policy indicates 
              when the latest changes were made. We encourage you to review this policy periodically for updates.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#111] p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#222] flex items-center justify-center text-white font-medium rounded-sm">
                    1
                  </div>
                </div>
                <h3 className="text-sm font-medium mb-2 text-white">Policy Update</h3>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#111] p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#222] flex items-center justify-center text-white font-medium rounded-sm">
                    2
                  </div>
                </div>
                <h3 className="text-sm font-medium mb-2 text-white">Notification</h3>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#111] p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#222] flex items-center justify-center text-white font-medium rounded-sm">
                    3
                  </div>
                </div>
                <h3 className="text-sm font-medium mb-2 text-white">Review</h3>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#111] p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#222] flex items-center justify-center text-white font-medium rounded-sm">
                    4
                  </div>
                </div>
                <h3 className="text-sm font-medium mb-2 text-white">Acceptance</h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Acknowledgment Section - NEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Acknowledgment
            </h2>
            
            <p className="text-gray-300 mb-10">
              By using our website or services, you acknowledge that you have read and understood this Privacy Policy. 
              If you do not agree with our practices, please do not use our services.
            </p>
            
            <div className="text-center mt-16">
              <Button asChild variant="outline" className="bg-[#111] text-white border-[#333] hover:bg-[#222] hover:text-white px-8 py-6">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
