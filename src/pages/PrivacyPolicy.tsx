
import { useEffect, useRef } from "react";
import { Activity, BarChart3, Mail, Shield, Lock } from "lucide-react";

const PrivacyPolicy = () => {
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
        <div className="absolute right-0 top-20 w-1/2 h-full">
          <img 
            src="/lovable-uploads/e78dc96b-8079-46dc-bc23-77b8f49abc0b.png"
            alt="Privacy Shield Illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute top-8 right-8">
          <div className="w-10 h-10">
            <img 
              src="/lovable-uploads/3beadb5d-c4a7-4751-965e-bd65c8fe55a1.png" 
              alt="Fingerprint icon"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 fade-in-up">Information We Collect</h2>
          <p className="text-gray-300 mb-8 fade-in-up">We may collect the following types of information:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 fade-in-up">
              <div className="w-8 h-8 bg-gray-800 mb-4"></div>
              <h3 className="text-xl font-medium mb-3">Personal Information</h3>
              <p className="text-gray-400">
                Name, email address, phone number, and other contact details. Job title, 
                company name, and industry. Payment information, if you purchase services from us.
              </p>
            </div>
            
            <div className="glass-card p-6 fade-in-up" style={{animationDelay: "0.2s"}}>
              <div className="w-8 h-8 bg-gray-800 mb-4"></div>
              <h3 className="text-xl font-medium mb-3">Non-Personal Information</h3>
              <p className="text-gray-400">
                Browser type, device information, and operating system. IP address and 
                location data. Usage data, including pages viewed, links clicked, and session duration.
              </p>
            </div>
            
            <div className="glass-card p-6 fade-in-up" style={{animationDelay: "0.4s"}}>
              <div className="w-8 h-8 bg-gray-800 mb-4"></div>
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
        <div className="absolute top-8 right-8">
          <div className="w-10 h-10">
            <img 
              src="/lovable-uploads/3beadb5d-c4a7-4751-965e-bd65c8fe55a1.png" 
              alt="Fingerprint icon"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 fade-in-up">How We Use Your Information</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6 fade-in-up">
              <div className="w-12 h-12 bg-gray-800 flex items-center justify-center text-xl font-medium flex-shrink-0">
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
              <div className="w-12 h-12 bg-gray-800 flex items-center justify-center text-xl font-medium flex-shrink-0">
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
              <div className="w-12 h-12 bg-gray-800 flex items-center justify-center text-xl font-medium flex-shrink-0">
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
              <div className="w-12 h-12 bg-gray-800 flex items-center justify-center text-xl font-medium flex-shrink-0">
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
          <div className="w-10 h-10">
            <img 
              src="/lovable-uploads/3beadb5d-c4a7-4751-965e-bd65c8fe55a1.png" 
              alt="Fingerprint icon"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 fade-in-up">How We Share Your Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="glass-card p-6 fade-in-up">
              <h3 className="text-xl font-medium mb-3">Service Providers</h3>
              <p className="text-gray-400">
                Third-party vendors that support our business operations (e.g., hosting, payment processing, analytics).
              </p>
            </div>
            
            <div className="glass-card p-6 fade-in-up" style={{animationDelay: "0.2s"}}>
              <h3 className="text-xl font-medium mb-3">Business Partners</h3>
              <p className="text-gray-400">
                Partners who collaborate with us on joint offerings or services.
              </p>
            </div>
            
            <div className="glass-card p-6 fade-in-up" style={{animationDelay: "0.4s"}}>
              <h3 className="text-xl font-medium mb-3">Legal and Regulatory Authorities</h3>
              <p className="text-gray-400">
                To comply with applicable laws, regulations, or legal processes.
              </p>
            </div>
          </div>
          
          <div className="glass-card p-6 fade-in-up" style={{animationDelay: "0.6s"}}>
            <h3 className="text-xl font-medium mb-3">Corporate Transactions</h3>
            <p className="text-gray-400">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Cookies and Tracking Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute top-8 right-8">
          <div className="w-10 h-10">
            <img 
              src="/lovable-uploads/3beadb5d-c4a7-4751-965e-bd65c8fe55a1.png" 
              alt="Fingerprint icon"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 fade-in-up">Cookies and Tracking Technologies</h2>
          
          <p className="text-gray-300 mb-10 fade-in-up">We use cookies and similar tracking technologies to:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center fade-in-up">
              <div className="w-12 h-12 mb-4 text-[#7021EE]">
                <Activity className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium mb-3">Enhance user experience</h3>
            </div>
            
            <div className="flex flex-col items-center text-center fade-in-up" style={{animationDelay: "0.2s"}}>
              <div className="w-12 h-12 mb-4 text-[#7021EE]">
                <BarChart3 className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium mb-3">Analyze website traffic and performance</h3>
            </div>
            
            <div className="flex flex-col items-center text-center fade-in-up" style={{animationDelay: "0.4s"}}>
              <div className="w-12 h-12 mb-4 text-[#7021EE]">
                <Mail className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium mb-3">Deliver personalized content and advertisements</h3>
            </div>
          </div>
          
          <p className="text-gray-400 text-center fade-in-up" style={{animationDelay: "0.6s"}}>
            You can manage your cookie preferences through your browser settings or by using our cookie management tool.
          </p>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute top-8 right-8">
          <div className="w-10 h-10">
            <img 
              src="/lovable-uploads/3beadb5d-c4a7-4751-965e-bd65c8fe55a1.png" 
              alt="Fingerprint icon"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 fade-in-up">Data Retention</h2>
          
          <p className="text-gray-300 mb-10 fade-in-up">
            We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
            unless a longer retention period is required or permitted by law.
          </p>
          
          <div className="relative pl-8 border-l border-gray-800">
            <div className="absolute left-[-12px] top-0 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-sm font-medium fade-in-up">
              1
            </div>
            <div className="mb-10 fade-in-up">
              <h3 className="text-xl font-medium mb-2">Collection</h3>
              <p className="text-gray-400">Information is collected when you interact with our services</p>
            </div>
            
            <div className="absolute left-[-12px] top-[100px] w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-sm font-medium fade-in-up" style={{animationDelay: "0.2s"}}>
              2
            </div>
            <div className="mb-10 fade-in-up" style={{animationDelay: "0.2s"}}>
              <h3 className="text-xl font-medium mb-2">Usage</h3>
              <p className="text-gray-400">Data is used for the purposes outlined in the policy</p>
            </div>
            
            <div className="absolute left-[-12px] top-[200px] w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-sm font-medium fade-in-up" style={{animationDelay: "0.4s"}}>
              3
            </div>
            <div className="mb-10 fade-in-up" style={{animationDelay: "0.4s"}}>
              <h3 className="text-xl font-medium mb-2">Retention</h3>
              <p className="text-gray-400">Information is retained as long as necessary</p>
            </div>
            
            <div className="absolute left-[-12px] top-[300px] w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-sm font-medium fade-in-up" style={{animationDelay: "0.6s"}}>
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
        <div className="absolute top-8 right-8">
          <div className="w-10 h-10">
            <img 
              src="/lovable-uploads/3beadb5d-c4a7-4751-965e-bd65c8fe55a1.png" 
              alt="Fingerprint icon"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 fade-in-up">Data Security</h2>
          
          <p className="text-gray-300 mb-10 fade-in-up">
            We implement industry-standard security measures to protect your information from unauthorized 
            access, disclosure, or misuse. However, no method of transmission or storage is completely secure, and 
            we cannot guarantee absolute security.
          </p>
          
          <div className="relative max-w-md mx-auto fade-in-up" style={{animationDelay: "0.2s"}}>
            <div className="relative bg-[#7021EE]/30 aspect-square w-full" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
              <div className="absolute w-full h-full flex flex-col justify-between p-4">
                <div className="text-center absolute top-[15%] left-1/2 -translate-x-1/2 z-50">
                  <div className="w-8 h-8 bg-[#7021EE] rounded-full flex items-center justify-center mx-auto mb-2">
                    1
                  </div>
                  <h3 className="text-xl font-medium">Encryption</h3>
                </div>
                
                <div className="text-center absolute top-[40%] left-1/2 -translate-x-1/2 z-40">
                  <div className="w-8 h-8 bg-[#7021EE]/80 rounded-full flex items-center justify-center mx-auto mb-2">
                    2
                  </div>
                  <h3 className="text-xl font-medium">Access Controls</h3>
                </div>
                
                <div className="text-center absolute top-[65%] left-1/2 -translate-x-1/2 z-30">
                  <div className="w-8 h-8 bg-[#7021EE]/60 rounded-full flex items-center justify-center mx-auto mb-2">
                    3
                  </div>
                  <h3 className="text-xl font-medium">Monitoring</h3>
                </div>
                
                <div className="text-center absolute top-[90%] left-1/2 -translate-x-1/2 z-20">
                  <div className="w-8 h-8 bg-[#7021EE]/40 rounded-full flex items-center justify-center mx-auto mb-2">
                    4
                  </div>
                  <h3 className="text-xl font-medium">Regular Audits</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights and Choices */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute top-8 right-8">
          <div className="w-10 h-10">
            <img 
              src="/lovable-uploads/3beadb5d-c4a7-4751-965e-bd65c8fe55a1.png" 
              alt="Fingerprint icon"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 fade-in-up">Your Rights and Choices</h2>
          
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
          
          <p className="text-gray-300 mt-8 fade-in-up" style={{animationDelay: "0.6s"}}>
            To exercise your rights, contact us at [Insert Contact Email].
          </p>
        </div>
      </section>

      {/* Third-Party Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute top-8 right-8">
          <div className="w-10 h-10">
            <img 
              src="/lovable-uploads/3beadb5d-c4a7-4751-965e-bd65c8fe55a1.png" 
              alt="Fingerprint icon"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 fade-in-up">Third-Party Links</h2>
          
          <p className="text-gray-300 fade-in-up">
            Our website and services may contain links to third-party websites. We are not responsible for the privacy 
            practices of these third parties. We encourage you to review their privacy policies.
          </p>
        </div>
      </section>

      {/* Changes to This Privacy Policy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute top-8 right-8">
          <div className="w-10 h-10">
            <img 
              src="/lovable-uploads/3beadb5d-c4a7-4751-965e-bd65c8fe55a1.png" 
              alt="Fingerprint icon"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 fade-in-up">Changes to This Privacy Policy</h2>
          
          <p className="text-gray-300 mb-10 fade-in-up">
            We may update this Privacy Policy from time to time. The "Effective Date" at the top of this policy indicates 
            when the latest changes were made. We encourage you to review this policy periodically for updates.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 fade-in-up">
              <div className="w-8 h-8 bg-gray-800 flex items-center justify-center text-sm font-medium flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Policy Update</h3>
                <p className="text-gray-400">We revise the policy</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 fade-in-up" style={{animationDelay: "0.2s"}}>
              <div className="w-8 h-8 bg-gray-800 flex items-center justify-center text-sm font-medium flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Effective Date Change</h3>
                <p className="text-gray-400">The date is updated</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 fade-in-up" style={{animationDelay: "0.3s"}}>
              <div className="w-8 h-8 bg-gray-800 flex items-center justify-center text-sm font-medium flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">User Notification</h3>
                <p className="text-gray-400">We inform users of changes</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 fade-in-up" style={{animationDelay: "0.4s"}}>
              <div className="w-8 h-8 bg-gray-800 flex items-center justify-center text-sm font-medium flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">User Review</h3>
                <p className="text-gray-400">Users review the updated policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute top-8 right-8">
          <div className="w-10 h-10">
            <img 
              src="/lovable-uploads/3beadb5d-c4a7-4751-965e-bd65c8fe55a1.png" 
              alt="Fingerprint icon"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 fade-in-up">Acknowledgment</h2>
          
          <p className="text-gray-300 fade-in-up">
            By using our services, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
