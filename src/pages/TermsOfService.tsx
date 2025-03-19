
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { List, ArrowRight, CheckCircle, AlertCircle, FileText, ShieldCheck } from "lucide-react";

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
                (collectively, the "Services") provided by WhitegloveAI LLC ("Company," "we," "us," or "our"). By accessing 
                or using the Services, you agree to be bound by these Terms. If you do not agree, do not use our Services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Acceptance of Terms Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300 mb-6">
              By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. 
              If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind 
              that organization to these Terms.
            </p>
            <div className="mt-8 glass-card p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-[#7021EE] w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  <span className="font-medium text-white">Important:</span> These Terms may be updated from time to time. Your continued use of 
                  the Services after any such changes constitutes your acceptance of the new Terms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description of Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              2. Description of Services
            </h2>
            <p className="text-gray-300 mb-8">
              The Services include a variety of AI-related solutions, consulting services, and digital products as described on our website.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white flex items-center">
                  <List className="mr-3 text-[#7021EE]" />
                  Services We Provide
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <ArrowRight className="w-5 h-5 text-[#7021EE] flex-shrink-0 mt-0.5" />
                    <span>Managed AI Services (TextAI, VoiceAI, AvatarAI, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <ArrowRight className="w-5 h-5 text-[#7021EE] flex-shrink-0 mt-0.5" />
                    <span>vCAIO Consulting Services</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <ArrowRight className="w-5 h-5 text-[#7021EE] flex-shrink-0 mt-0.5" />
                    <span>AI Implementation and Strategy</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <ArrowRight className="w-5 h-5 text-[#7021EE] flex-shrink-0 mt-0.5" />
                    <span>Custom AI Solutions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white flex items-center">
                  <FileText className="mr-3 text-[#7021EE]" />
                  Service Modifications
                </h3>
                <p className="text-gray-300 mb-4">
                  We reserve the right to modify, suspend, or discontinue any part of the Services at any time, with or without notice.
                </p>
                <p className="text-gray-300">
                  Updates and improvements to the Services may be released periodically and may include changes to features, functionality, or user interface.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Accounts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              3. User Accounts
            </h2>
            <p className="text-gray-300 mb-8">
              Certain features of the Services may require you to create an account. When you create an account, you agree to:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#7021EE] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Accurate Information</h3>
                  <p className="text-gray-300">
                    Provide accurate, current, and complete information about yourself.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#7021EE] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Account Security</h3>
                  <p className="text-gray-300">
                    Maintain the security of your account credentials and immediately notify us of any unauthorized use.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#7021EE] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Responsibility</h3>
                  <p className="text-gray-300">
                    Accept responsibility for all activities that occur under your account.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#7021EE] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Non-Transferability</h3>
                  <p className="text-gray-300">
                    Not transfer your account to another person or entity without our prior written consent.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-[#111] rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4 text-white">Account Termination</h3>
              <p className="text-gray-300">
                We reserve the right to suspend or terminate your account at any time for any reason, including but not limited to, violation of these Terms.
                Upon termination, your right to use the Services will immediately cease.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Terms Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              4. Payment Terms
            </h2>
            <p className="text-gray-300 mb-8">
              Certain Services may require payment of fees. By using such Services, you agree to the following:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-3 text-white">Pricing</h3>
                <p className="text-gray-300 text-sm">
                  All fees are stated in USD unless otherwise specified and are exclusive of applicable taxes.
                  We reserve the right to change our prices at any time, with notice provided to you.
                </p>
              </div>
              
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-3 text-white">Billing</h3>
                <p className="text-gray-300 text-sm">
                  For subscription-based Services, you will be billed on a recurring basis. Billing cycles may be monthly, quarterly, or annually,
                  as specified during your purchase.
                </p>
              </div>
              
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-3 text-white">Refunds</h3>
                <p className="text-gray-300 text-sm">
                  Our refund policy varies by Service. Please refer to the specific Service terms or contact our customer support
                  for details on our refund policy.
                </p>
              </div>
              
              <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-3 text-white">Late Payments</h3>
                <p className="text-gray-300 text-sm">
                  Failure to pay fees when due may result in suspension or termination of your access to the Services.
                  Late payments may incur additional fees.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intellectual Property Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              5. Intellectual Property
            </h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-medium mb-4 text-white">Our Intellectual Property</h3>
                <p className="text-gray-300 mb-6">
                  The Services, including all content, features, and functionality, are owned by the Company and are protected by copyright, 
                  trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-300">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, 
                  store, or transmit any of the material on our Services without our prior written consent.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4 text-white">Your Content</h3>
                <p className="text-gray-300 mb-6">
                  You retain ownership of any content you submit, post, display, or otherwise make available through the Services ("Your Content").
                </p>
                <p className="text-gray-300">
                  By providing Your Content to the Services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, 
                  adapt, publish, translate, create derivative works from, distribute, and display Your Content in connection with providing and 
                  improving the Services.
                </p>
              </div>
              
              <div className="p-6 bg-[#111] rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-white flex items-center">
                  <ShieldCheck className="mr-3 text-[#7021EE]" />
                  Feedback
                </h3>
                <p className="text-gray-300">
                  If you provide us with any feedback or suggestions regarding the Services, you hereby assign to us all rights in such feedback
                  and agree that we shall have the right to use such feedback in any manner we deem appropriate.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Limitation of Liability Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              6. Limitation of Liability
            </h2>
            
            <div className="glass-card p-8 border border-[#7021EE]/20 mb-10">
              <p className="text-gray-300">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY INDIRECT, PUNITIVE, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, 
                DATA, OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SERVICES.
              </p>
            </div>
            
            <p className="text-gray-300 mb-6">
              The Company does not warrant that:
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#7021EE] flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">The Services will be uninterrupted, timely, secure, or error-free.</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#7021EE] flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">The results that may be obtained from the use of the Services will be accurate or reliable.</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#7021EE] flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">Any errors in the Services will be corrected.</p>
              </div>
            </div>
            
            <p className="text-gray-300">
              Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for certain 
              types of damages. Therefore, some of the above limitations may not apply to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Governing Law Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              7. Governing Law
            </h2>
            
            <p className="text-gray-300 mb-8">
              These Terms shall be governed by and construed in accordance with the laws of the state of Delaware, without regard to its 
              conflict of law provisions. You agree that any legal action or proceeding between you and the Company shall be brought exclusively 
              in the courts located in Delaware.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              8. Contact Information
            </h2>
            
            <p className="text-gray-300 mb-8">
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <div className="p-6 bg-[#111] rounded-lg border border-gray-800 max-w-md">
              <p className="text-gray-300 mb-2">WhitegloveAI LLC</p>
              <p className="text-gray-300 mb-2">Email: <span className="text-[#7021EE]">legal@whitegloveai.com</span></p>
              <p className="text-gray-300">Website: <span className="text-[#7021EE]">www.whitegloveai.com</span></p>
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
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Acknowledgment
            </h2>
            
            <p className="text-gray-300 mb-10">
              BY USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. 
              IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE THE SERVICES.
            </p>
            
            <div className="flex justify-center">
              <Link
                to="/privacy-policy"
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
