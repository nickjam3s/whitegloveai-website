import { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    // Load HubSpot script only once
    const existingScript = document.getElementById('hubspot-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'hubspot-script';
      script.src = "https://js-na2.hsforms.net/forms/embed/242996761.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="contact" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Contact Us
        </h2>
        
        <div className="bg-card/50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="min-h-[400px]">
            <div className="hs-form-frame" data-region="na2" data-form-id="c5c1e3a2-eebe-4d65-8368-03c02ebac2b0" data-portal-id="242996761"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;