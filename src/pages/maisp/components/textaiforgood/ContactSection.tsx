
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-6 bg-black w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in learning more about our AI-powered chatbot solutions for nonprofits and social enterprises? 
            Contact us today to discuss how we can help your organization make a greater impact.
          </p>
          <div className="mt-8">
            <a 
              href="mailto:contact@example.com" 
              className="inline-block px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
