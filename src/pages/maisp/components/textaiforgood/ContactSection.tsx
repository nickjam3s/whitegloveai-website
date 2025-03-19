
import React, { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    // Ensure Typeform script is loaded
    const existingScript = document.getElementById('typeform-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'typeform-script';
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        if (document.getElementById('typeform-script')) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <section className="py-6 bg-black w-full">
      <div className="max-w-full">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/a1805977-8729-49aa-a721-1653fe9ee051.png" 
            alt="Contact Us to Get Started" 
            className="w-full object-contain"
          />
        </div>
        <div className="max-w-4xl mx-auto py-8">
          <div className="bg-card/50 p-6 rounded-lg shadow-lg">
            <div data-tf-widget="DBZ0YccP" data-tf-inline-on-mobile data-tf-medium="snippet" data-tf-hidden="utm_source=website,utm_medium=snippet"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
