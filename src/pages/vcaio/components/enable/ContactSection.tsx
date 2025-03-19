
import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="absolute right-6 md:right-10">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M21 0C9.402 0 0 9.402 0 21C0 32.598 9.402 42 21 42C32.598 42 42 32.598 42 21C42 9.402 32.598 0 21 0ZM21 38.5C11.34 38.5 3.5 30.66 3.5 21C3.5 11.34 11.34 3.5 21 3.5C30.66 3.5 38.5 11.34 38.5 21C38.5 30.66 30.66 38.5 21 38.5Z" fill="white"/>
            <path d="M29.75 21C29.75 25.8325 25.8325 29.75 21 29.75C16.1675 29.75 12.25 25.8325 12.25 21C12.25 16.1675 16.1675 12.25 21 12.25C25.8325 12.25 29.75 16.1675 29.75 21Z" fill="white"/>
            <path d="M21 7C13.268 7 7 13.268 7 21C7 28.732 13.268 35 21 35C28.732 35 35 28.732 35 21C35 13.268 28.732 7 21 7ZM21 31.5C15.201 31.5 10.5 26.799 10.5 21C10.5 15.201 15.201 10.5 21 10.5C26.799 10.5 31.5 15.201 31.5 21C31.5 26.799 26.799 31.5 21 31.5Z" fill="white"/>
          </svg>
        </div>
        
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
