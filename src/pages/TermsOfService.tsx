
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  List, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  ShieldCheck 
} from "lucide-react";

const TermsOfService = () => {
  const termsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black min-h-screen" ref={termsRef}>
      {/* Hero Section with Image Background */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-black/90">
          <img 
            src="/lovable-uploads/b20fc509-acf7-4f56-877b-b3ac3702e65d.png" 
            alt="Terms of Service" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-white">
                Terms of Service
              </h1>
              <p className="text-gray-400 mb-6">Effective Date: 01/01/2025</p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl">
                These Terms of Service ("Terms") govern your access to and use of the services, products, and website 
                provided by WhitegloveAI LLC ("Company," "we," "us," or "our"). By accessing 
                or using the Services, you agree to be bound by these Terms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. Acceptance of Terms Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">
              1. Acceptance of Terms
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white">Age Requirement</h3>
                <p className="text-gray-300">
                  By using our Services, you confirm that you are at least 18 years old, or the legal age of majority in your jurisdiction.
                </p>
              </div>
              
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white">Legal Capacity</h3>
                <p className="text-gray-300">
                  You confirm that you are capable of entering into a legally binding agreement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">
              2. Services Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium mb-4 text-white">2.1 Scope</h3>
                <p className="text-gray-300">
                  WhitegloveAI provides AI-powered solutions tailored to meet business needs. The specifics of the Services you receive may depend on agreements entered into separately.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4 text-white">2.2 Modifications</h3>
                <p className="text-gray-300">
                  We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time, with or without notice.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. User Obligations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">
              3. User Obligations
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white">3.1 Account Responsibilities</h3>
                <p className="text-gray-300 mb-4">
                  You are responsible for maintaining the confidentiality of your account credentials.
                </p>
                <p className="text-gray-300">
                  You must notify us immediately of any unauthorized use of your account.
                </p>
              </div>
              
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white">3.2 Prohibited Activities</h3>
                <p className="text-gray-300 mb-2">You agree not to:</p>
                <ul className="space-y-2">
                  <li className="text-gray-300">
                    Use the Services for illegal, harmful, or unauthorized purposes.
                  </li>
                  <li className="text-gray-300">
                    Reverse engineer, decompile, or attempt to derive source code from our software.
                  </li>
                  <li className="text-gray-300">
                    Interfere with the security or performance of the Services.
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white">3.3 Compliance</h3>
                <p className="text-gray-300">
                  You are responsible for complying with all applicable laws, rules, and regulations while using the Services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Intellectual Property */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white flex items-center">
              4. Intellectual Property
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex">
                <div className="mr-6 text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M14.5 9.5a3 3 0 0 0-3-3 3 3 0 0 0-3 3v5a3 3 0 0 0 3 3 3 3 0 0 0 3-3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4 text-white">4.1 Ownership</h3>
                  <p className="text-gray-300">
                    All content, software, and materials associated with the Services are the property of WhitegloveAI or its licensors. Unauthorized use of any intellectual property is prohibited.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-6 text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7l-5-5Z"/>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                    <circle cx="10" cy="12" r="2"/>
                    <path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4 text-white">4.2 License</h3>
                  <p className="text-gray-300">
                    We grant you a limited, non-exclusive, non-transferable, revocable license to use the Services in accordance with these Terms.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Fees and Payment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a2e] border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-10 text-white">
              5. Fees and Payment
            </h2>
            
            <div className="relative border-l-2 border-gray-700 pl-8 ml-4 space-y-16">
              <div className="relative">
                <div className="absolute -left-[43px] top-0 flex items-center justify-center w-8 h-8 bg-[#0a0a2e] border-2 border-gray-700 rounded-full">
                  <span className="text-white font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4 text-white">5.1 Pricing</h3>
                  <p className="text-gray-300">
                    The fees for our Services will be outlined in a separate agreement or displayed at the time of purchase.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[43px] top-0 flex items-center justify-center w-8 h-8 bg-[#0a0a2e] border-2 border-gray-700 rounded-full">
                  <span className="text-white font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4 text-white">5.2 Payment Terms</h3>
                  <p className="text-gray-300 mb-4">
                    Payments must be made on time to avoid suspension or termination of Services.
                  </p>
                  <p className="text-gray-300">
                    All payments are non-refundable unless otherwise specified.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[43px] top-0 flex items-center justify-center w-8 h-8 bg-[#0a0a2e] border-2 border-gray-700 rounded-full">
                  <span className="text-white font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4 text-white">5.3 Taxes</h3>
                  <p className="text-gray-300">
                    You are responsible for any applicable taxes associated with the use of our Services.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Confidentiality */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">
              6. Confidentiality
            </h2>
            
            <div className="relative border-l-4 border-purple-600 pl-8 py-4">
              <p className="text-gray-300 text-lg">
                You agree to keep any non-public information shared by us confidential and not disclose it to any third party without prior written consent.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Disclaimers and Limitations of Liability */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">
              7. Disclaimers and Limitations of Liability
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white">7.1 Disclaimer of Warranties</h3>
                <p className="text-gray-300">
                  The Services are provided "as is" and "as available" without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </div>
              
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white">7.2 Limitation of Liability</h3>
                <p className="text-gray-300">
                  To the fullest extent permitted by law, WhitegloveAI shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of the Services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Indemnification */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a2e] border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">
              8. Indemnification
            </h2>
            
            <p className="text-gray-300 text-lg">
              You agree to indemnify, defend, and hold harmless WhitegloveAI and its affiliates from any claims, damages, or expenses arising out of your use of the Services or violation of these Terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. Termination */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a2e] border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">
              9. Termination
            </h2>
            
            <p className="text-gray-300 text-lg">
              We reserve the right to suspend or terminate your access to the Services at any time, with or without cause, and with or without notice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 10. Governing Law */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">
              10. Governing Law
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white">Jurisdiction</h3>
                <p className="text-gray-300">
                  These Terms are governed by and construed in accordance with the laws of Delaware.
                </p>
              </div>
              
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white">Dispute Resolution</h3>
                <p className="text-gray-300">
                  Any disputes arising from these Terms shall be resolved in the courts of Delaware.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 11. Changes to These Terms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a2e] border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">
              11. Changes to These Terms
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#111]/80 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white">Updates</h3>
                <p className="text-gray-300">
                  We may update these Terms from time to time.
                </p>
              </div>
              
              <div className="bg-[#111]/80 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white">Effective Date</h3>
                <p className="text-gray-300">
                  The "Effective Date" at the top indicates when the latest changes were made.
                </p>
              </div>
              
              <div className="bg-[#111]/80 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white">Acceptance</h3>
                <p className="text-gray-300">
                  Continued use of the Services after changes signifies your acceptance of the updated Terms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Acknowledgment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">
              Acknowledgment of Terms
            </h2>
            
            <div className="relative border-l-4 border-purple-600 pl-8 py-4">
              <p className="text-gray-300 text-lg">
                By using our Services, you acknowledge that you have read, understood, and agreed to these Terms of Service.
              </p>
            </div>
            
            <div className="flex justify-center mt-16">
              <Link
                to="/privacy"
                className="text-[#7021EE] hover:text-white transition-colors duration-200"
              >
                View Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
