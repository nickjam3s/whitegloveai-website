import { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    // Load DeftForm script only once
    const existingScript = document.getElementById('deftform-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'deftform-script';
      script.src = "https://cdn.deftform.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Contact Us
        </h2>
        
        <div className="bg-card/50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="min-h-[400px]">
            <div 
              className="deftform" 
              data-form-id="784f11b7-5400-40f7-a69e-618ed18e2f66" 
              data-form-width="100%" 
              data-form-align="center" 
              data-form-auto-height="1"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
