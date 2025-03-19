
import { useEffect, useRef } from "react";
import { Activity, BarChart3, Mail, Shield, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  const policyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));

    const numberElements = document.querySelectorAll(".number-reveal");
    numberElements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      numberElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-black min-h-screen" ref={policyRef}>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="relative z-10 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 heading-highlight">
              Privacy Policy
            </h1>
            <p className="text-gray-400 mb-2">Effective Date: 01/01/2025</p>
            <p className="text-lg text-gray-300 max-w-3xl">
              WhitegloveAI LLC("Company," "we," "us," or "our") is committed to protecting your privacy. 
              This Privacy Policy describes how we collect, use, and disclose your information when you 
              visit our website, use our services, or interact with us in any way.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-20 w-1/2 h-full opacity-60">
          <Shield className="w-full h-full text-[#7021EE]/20" />
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute top-8 right-8">
          <Shield className="w-10 h-10 text-[#7021EE]/50" />
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 fade-in-up">Information We Collect</h2>
          <p className="text-gray-300 mb-8 fade-in-up">We may collect the following types of information:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 fade-in-up">
              <Shield className="w-8 h-8 text-[#7021EE] mb-4" />
              <h3 className="text-xl font-medium mb-3">Personal Information</h3>
              <p className="text-gray-400">
                Name, email address, phone number, and other contact details. Job title, 
                company name, and industry. Payment information, if you purchase services from us.
              </p>
            </div>
            
            <div className="glass-card p-6 fade-in-up" style={{animationDelay: "0.2s"}}>
              <Activity className="w-8 h-8 text-[#7021EE] mb-4" />
              <h3 className="text-xl font-medium mb-3">Non-Personal Information</h3>
              <p className="text-gray-400">
                Browser type, device information, and operating system. IP address and 
                location data. Usage data, including pages viewed, links clicked, and session duration.
              </p>
            </div>
            
            <div className="glass-card p-6 fade-in-up" style={{animationDelay: "0.4s"}}>
              <BarChart3 className="w-8 h-8 text-[#7021EE] mb-4" />
              <h3 className="text-xl font-medium mb-3">Information from Third Parties</h3>
              <p className="text-gray-400">
                Data from partners, service providers, or publicly available sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 fade-in-up">How We Use Your Information</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6 fade-in-up">
              <div className="w-12 h-12 bg-[#7021EE]/20 rounded-full flex items-center justify-center text-xl font-medium flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">To Provide Services</h3>
                <p className="text-gray-400">
                  Facilitate account creation and management. Deliver AI solutions tailored to your needs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 fade-in-up" style={{animationDelay: "0.2s"}}>
              <div className="w-12 h-12 bg-[#7021EE]/20 rounded-full flex items-center justify-center text-xl font-medium flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">To Improve Our Services</h3>
                <p className="text-gray-400">
                  Analyze user behavior to enhance functionality and performance. Develop new features and offerings.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 fade-in-up" style={{animationDelay: "0.3s"}}>
              <div className="w-12 h-12 bg-[#7021EE]/20 rounded-full flex items-center justify-center text-xl font-medium flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">To Communicate with You</h3>
                <p className="text-gray-400">
                  Respond to inquiries and provide customer support. Send updates, promotional materials, and other relevant information.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 fade-in-up" style={{animationDelay: "0.4s"}}>
              <div className="w-12 h-12 bg-[#7021EE]/20 rounded-full flex items-center justify-center text-xl font-medium flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">To Ensure Security and Compliance</h3>
                <p className="text-gray-400">
                  Protect against fraudulent or unauthorized activities. Comply with legal obligations and enforce our terms of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Share Your Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute top-8 right-8">
          <Lock className="w-10 h-10 text-[#7021EE]/50" />
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 fade-in-up">How We Share Your Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="glass-card p-8 fade-in-up relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7021EE]/10 rounded-full"></div>
              <h3 className="text-2xl font-medium mb-4 relative z-10">Service Providers</h3>
              <p className="text-gray-400 relative z-10">
                Third-party vendors that support our business operations (e.g., hosting, payment processing, analytics).
              </p>
            </div>
            
            <div className="glass-card p-8 fade-in-up relative overflow-hidden" style={{animationDelay: "0.2s"}}>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#7021EE]/10 rounded-full"></div>
              <h3 className="text-2xl font-medium mb-4 relative z-10">Business Partners</h3>
              <p className="text-gray-400 relative z-10">
                Partners who collaborate with us on joint offerings or services.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 fade-in-up relative overflow-hidden" style={{animationDelay: "0.3s"}}>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#7021EE]/10 rounded-full"></div>
              <h3 className="text-2xl font-medium mb-4 relative z-10">Legal and Regulatory Authorities</h3>
              <p className="text-gray-400 relative z-10">
                To comply with applicable laws, regulations, or legal processes.
              </p>
            </div>
            
            <div className="glass-card p-8 fade-in-up relative overflow-hidden" style={{animationDelay: "0.4s"}}>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#7021EE]/10 rounded-full"></div>
              <h3 className="text-2xl font-medium mb-4 relative z-10">Corporate Transactions</h3>
              <p className="text-gray-400 relative z-10">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies and Tracking Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#7021EE]/5 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 fade-in-up">Cookies and Tracking Technologies</h2>
          
          <p className="text-gray-300 mb-10 fade-in-up">We use cookies and similar tracking technologies to:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center fade-in-up">
              <div className="w-16 h-16 rounded-full bg-[#7021EE]/20 flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-[#7021EE]" />
              </div>
              <h3 className="text-xl font-medium mb-3">Enhance user experience</h3>
              <p className="text-gray-400">Remember your preferences and settings for future visits</p>
            </div>
            
            <div className="flex flex-col items-center text-center fade-in-up" style={{animationDelay: "0.2s"}}>
              <div className="w-16 h-16 rounded-full bg-[#7021EE]/20 flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-[#7021EE]" />
              </div>
              <h3 className="text-xl font-medium mb-3">Analyze website traffic</h3>
              <p className="text-gray-400">Understand how visitors use our website to improve functionality</p>
            </div>
            
            <div className="flex flex-col items-center text-center fade-in-up" style={{animationDelay: "0.4s"}}>
              <div className="w-16 h-16 rounded-full bg-[#7021EE]/20 flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-[#7021EE]" />
              </div>
              <h3 className="text-xl font-medium mb-3">Personalize content</h3>
              <p className="text-gray-400">Deliver relevant content and advertisements based on your interests</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#7021EE]/20 to-transparent p-6 rounded-lg fade-in-up" style={{animationDelay: "0.6s"}}>
            <p className="text-gray-300 text-center">
              You can manage your cookie preferences through your browser settings or by using our cookie management tool.
            </p>
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7021EE]/5 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 fade-in-up">Data Retention</h2>
          
          <p className="text-gray-300 mb-10 fade-in-up">
            We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
            unless a longer retention period is required or permitted by law.
          </p>
          
          <div className="relative pl-8 border-l border-[#7021EE]/30">
            <div className="absolute left-[-12px] top-0 w-6 h-6 bg-[#7021EE] rounded-full flex items-center justify-center text-sm font-medium fade-in-up">
              1
            </div>
            <div className="mb-12 fade-in-up">
              <h3 className="text-xl font-medium mb-2">Collection</h3>
              <p className="text-gray-400">Information is collected when you interact with our services</p>
            </div>
            
            <div className="absolute left-[-12px] top-[100px] w-6 h-6 bg-[#7021EE]/80 rounded-full flex items-center justify-center text-sm font-medium fade-in-up" style={{animationDelay: "0.2s"}}>
              2
            </div>
            <div className="mb-12 fade-in-up" style={{animationDelay: "0.2s"}}>
              <h3 className="text-xl font-medium mb-2">Usage</h3>
              <p className="text-gray-400">Data is used for the purposes outlined in the policy</p>
            </div>
            
            <div className="absolute left-[-12px] top-[200px] w-6 h-6 bg-[#7021EE]/60 rounded-full flex items-center justify-center text-sm font-medium fade-in-up" style={{animationDelay: "0.4s"}}>
              3
            </div>
            <div className="mb-12 fade-in-up" style={{animationDelay: "0.4s"}}>
              <h3 className="text-xl font-medium mb-2">Retention</h3>
              <p className="text-gray-400">Information is retained as long as necessary</p>
            </div>
            
            <div className="absolute left-[-12px] top-[300px] w-6 h-6 bg-[#7021EE]/40 rounded-full flex items-center justify-center text-sm font-medium fade-in-up" style={{animationDelay: "0.6s"}}>
              4
            </div>
            <div className="fade-in-up" style={{animationDelay: "0.6s"}}>
              <h3 className="text-xl font-medium mb-2">Deletion</h3>
              <p className="text-gray-400">Data is deleted when no longer needed or required by law</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7021EE]/5 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 fade-in-up">Data Security</h2>
          
          <p className="text-gray-300 mb-12 fade-in-up">
            We implement industry-standard security measures to protect your information from unauthorized 
            access, disclosure, or misuse. However, no method of transmission or storage is completely secure, and 
            we cannot guarantee absolute security.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="glass-card p-6 fade-in-up">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#7021EE]/20 flex items-center justify-center mr-4">
                  <Lock className="w-5 h-5 text-[#7021EE]" />
                </div>
                <h3 className="text-xl font-medium">Encryption</h3>
              </div>
              <p className="text-gray-400">
                All data is encrypted in transit and at rest using industry-standard encryption protocols.
              </p>
            </div>
            
            <div className="glass-card p-6 fade-in-up" style={{animationDelay: "0.2s"}}>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#7021EE]/20 flex items-center justify-center mr-4">
                  <Shield className="w-5 h-5 text-[#7021EE]" />
                </div>
                <h3 className="text-xl font-medium">Access Controls</h3>
              </div>
              <p className="text-gray-400">
                Strict access controls limit who can view and process your data within our organization.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 fade-in-up" style={{animationDelay: "0.3s"}}>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#7021EE]/20 flex items-center justify-center mr-4">
                  <Activity className="w-5 h-5 text-[#7021EE]" />
                </div>
                <h3 className="text-xl font-medium">Monitoring</h3>
              </div>
              <p className="text-gray-400">
                We continuously monitor our systems for potential security breaches or vulnerabilities.
              </p>
            </div>
            
            <div className="glass-card p-6 fade-in-up" style={{animationDelay: "0.4s"}}>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#7021EE]/20 flex items-center justify-center mr-4">
                  <BarChart3 className="w-5 h-5 text-[#7021EE]" />
                </div>
                <h3 className="text-xl font-medium">Regular Audits</h3>
              </div>
              <p className="text-gray-400">
                We conduct regular security audits and assessments to identify and address potential risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights and Choices */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#7021EE]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#7021EE]/10 rounded-full blur-xl"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 fade-in-up">Your Rights and Choices</h2>
          
          <p className="text-gray-300 mb-10 fade-in-up">Depending on your location, you may have the following rights:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 fade-in-up">
              <h3 className="text-xl font-medium mb-3">Access and Correction</h3>
              <p className="text-gray-400">
                Access, correct, or delete your personal information.
              </p>
            </div>
            
            <div className="glass-card p-6 fade-in-up" style={{animationDelay: "0.2s"}}>
              <h3 className="text-xl font-medium mb-3">Data Processing</h3>
              <p className="text-gray-400">
                Restrict or object to certain data processing activities.
              </p>
            </div>
            
            <div className="glass-card p-6 fade-in-up" style={{animationDelay: "0.3s"}}>
              <h3 className="text-xl font-medium mb-3">Consent Withdrawal</h3>
              <p className="text-gray-400">
                Withdraw consent for data processing, where applicable.
              </p>
            </div>
            
            <div className="glass-card p-6 fade-in-up" style={{animationDelay: "0.4s"}}>
              <h3 className="text-xl font-medium mb-3">Complaints</h3>
              <p className="text-gray-400">
                Lodge a complaint with a data protection authority.
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center fade-in-up" style={{animationDelay: "0.6s"}}>
            <p className="text-gray-300">
              To exercise your rights, contact us at <span className="text-[#7021EE]">privacy@whitegloveai.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* Third-Party Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 fade-in-up">Third-Party Links</h2>
          
          <div className="glass-card p-8 border border-[#7021EE]/20 fade-in-up">
            <p className="text-gray-300">
              Our website and services may contain links to third-party websites. We are not responsible for the privacy 
              practices of these third parties. We encourage you to review their privacy policies.
            </p>
            <div className="flex justify-center mt-6">
              <div className="bg-[#7021EE]/20 w-20 h-1 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to This Privacy Policy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#7021EE]/5 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 fade-in-up">Changes to This Privacy Policy</h2>
          
          <p className="text-gray-300 mb-10 fade-in-up">
            We may update this Privacy Policy from time to time. The "Effective Date" at the top of this policy indicates 
            when the latest changes were made. We encourage you to review this policy periodically for updates.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center glass-card p-6 fade-in-up relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7021EE] to-transparent"></div>
              <div className="w-10 h-10 rounded-full bg-[#7021EE]/20 flex items-center justify-center mb-4 text-[#7021EE] font-bold">
                1
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">Policy Update</h3>
              <p className="text-gray-400 text-center">We revise the policy</p>
            </div>
            
            <div className="flex flex-col items-center glass-card p-6 fade-in-up relative overflow-hidden" style={{animationDelay: "0.2s"}}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7021EE] to-transparent"></div>
              <div className="w-10 h-10 rounded-full bg-[#7021EE]/20 flex items-center justify-center mb-4 text-[#7021EE] font-bold">
                2
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">Effective Date Change</h3>
              <p className="text-gray-400 text-center">The date is updated</p>
            </div>
            
            <div className="flex flex-col items-center glass-card p-6 fade-in-up relative overflow-hidden" style={{animationDelay: "0.3s"}}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7021EE] to-transparent"></div>
              <div className="w-10 h-10 rounded-full bg-[#7021EE]/20 flex items-center justify-center mb-4 text-[#7021EE] font-bold">
                3
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">User Notification</h3>
              <p className="text-gray-400 text-center">We inform users of changes</p>
            </div>
            
            <div className="flex flex-col items-center glass-card p-6 fade-in-up relative overflow-hidden" style={{animationDelay: "0.4s"}}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7021EE] to-transparent"></div>
              <div className="w-10 h-10 rounded-full bg-[#7021EE]/20 flex items-center justify-center mb-4 text-[#7021EE] font-bold">
                4
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">User Review</h3>
              <p className="text-gray-400 text-center">Users review the updated policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 fade-in-up">Acknowledgment</h2>
          
          <div className="glass-card p-8 text-center fade-in-up border border-[#7021EE]/20">
            <p className="text-gray-300 mb-6">
              By using our services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
            <Link to="/contact" className="inline-block px-6 py-3 bg-[#7021EE] text-white rounded-lg hover:bg-[#7021EE]/80 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
