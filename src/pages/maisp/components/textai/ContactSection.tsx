
import React, { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    // Ensure Typeform script is loaded only once
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
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/8e477807-df5c-4b19-8aa1-18531d405987.png" 
              alt="Contact illustration" 
              className="w-full max-w-md mx-auto"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
          <div>
            <div className="bg-card/50 p-6 rounded-lg shadow-lg">
              <div data-tf-widget="01JMAMXNY7NHGYM2YQDXCDRDW6" data-tf-inline-on-mobile data-tf-medium="snippet" data-tf-hidden="utm_source=website,utm_medium=snippet"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
