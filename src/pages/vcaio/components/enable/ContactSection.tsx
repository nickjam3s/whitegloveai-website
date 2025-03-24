
import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-6">
          Ready to transform your organization's AI journey? Contact us today to schedule a personalized consultation where we'll discuss your specific needs and demonstrate how WhitegloveAI can help you implement AI solutions securely and effectively.
        </p>
        <p className="text-lg mb-10">
          Our team of experts is ready to guide you through every step of the AI adoption process, from initial assessment to full implementation. Let's work together to unlock the power of AI while ensuring compliance and security remain top priorities.
        </p>
        
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M17.5 2.5H2.5V17.5H17.5V2.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 6.25H17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.25 10H13.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.25 13.75H11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-medium">Typeform</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">WGAI - vCAIO Services</h3>
          <p className="text-gray-400 mb-4">Turn data collection into an experience with Typeform. Create beautiful online forms, surveys, quizzes, and so much more. Try it for FREE.</p>
          <div data-tf-live="01JMANX32Q8N97C9RXW4GRN312"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
