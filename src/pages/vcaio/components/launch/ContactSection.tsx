
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ContactSection = () => {
  const [typeformLoaded, setTypeformLoaded] = useState(false);

  useEffect(() => {
    // Check if Typeform is already loaded
    const checkTypeformLoaded = () => {
      const typeformElements = document.querySelectorAll('[data-tf-loaded="true"]');
      if (typeformElements.length > 0) {
        setTypeformLoaded(true);
      }
    };

    // Ensure Typeform script is loaded only once
    const existingScript = document.getElementById('typeform-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'typeform-script';
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      
      // Set up event listener for script load
      script.onload = () => {
        // Check periodically if Typeform has loaded
        const interval = setInterval(() => {
          checkTypeformLoaded();
          if (typeformLoaded) clearInterval(interval);
        }, 1000);

        // Clear interval after 10 seconds if Typeform hasn't loaded
        setTimeout(() => clearInterval(interval), 10000);
      };
      
      document.body.appendChild(script);
      
      return () => {
        if (document.getElementById('typeform-script')) {
          document.body.removeChild(script);
        }
      };
    } else {
      // If script exists, check if Typeform is loaded
      checkTypeformLoaded();
    }
  }, [typeformLoaded]);

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Contact Us
        </h2>
        
        <div className="bg-card/50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          {/* Container with fixed height */}
          <div className="min-h-[400px] relative">
            {/* Typeform Element - Only visible when loaded */}
            <div 
              data-tf-live="01JMAMXNY7NHGYM2YQDXCDRDW6" 
              className="absolute inset-0 z-10"
              style={{ 
                opacity: typeformLoaded ? 1 : 0,
                pointerEvents: typeformLoaded ? 'auto' : 'none' 
              }}
            ></div>
            
            {/* Fallback that's always visible until Typeform loads */}
            <div 
              className="text-center p-8 absolute inset-0 flex flex-col items-center justify-center bg-card z-0"
              style={{ 
                display: typeformLoaded ? 'none' : 'flex',
                opacity: typeformLoaded ? 0 : 1
              }}
            >
              <p className="mb-6 text-gray-600 font-medium">If the form doesn't load, please click the button below:</p>
              <a 
                href="https://whitegloveai.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  className="px-8 py-4 relative z-20 overflow-visible"
                  size="lg"
                  variant="default"
                  type="button"
                >
                  <span className="relative z-30">Contact Us</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
