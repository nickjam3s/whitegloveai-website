
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
            src="/lovable-uploads/023620f2-f6ba-4dac-8114-10db4b85e210.png" 
            alt="Contact Us to Get Started" 
            className="w-full object-contain"
          />
        </div>
        <div className="max-w-4xl mx-auto py-8">
          <div data-tf-widget="DBZ0YccP" data-tf-inline-on-mobile data-tf-medium="snippet" data-tf-hidden="utm_source=website,utm_medium=snippet" style={{height: "500px"}}></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
