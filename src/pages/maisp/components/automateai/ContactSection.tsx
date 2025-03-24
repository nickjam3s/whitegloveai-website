
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

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
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Contact Us
        </h2>
        
        <div className="bg-card/50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          {/* Typeform Element */}
          <div data-tf-live="01JMAMXNY7NHGYM2YQDXCDRDW6" className="min-h-[400px] relative">
            {/* Fallback in case Typeform doesn't load */}
            <div className="text-center p-8 absolute inset-0 flex flex-col items-center justify-center bg-background/80 z-0">
              <p className="mb-6 text-gray-400">If the form doesn't load, please click the button below:</p>
              <Button 
                onClick={() => window.open('https://whitegloveai.com/contact', '_blank')}
                className="px-8 py-4"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
