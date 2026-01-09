import { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    // Load DeftForm script
    const loadDeftForm = () => {
      const existingScript = document.getElementById('deftform-script-internship');
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.id = 'deftform-script-internship';
      script.src = "https://cdn.deftform.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadDeftForm, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-4 text-center heading-highlight-scroll">
          Apply
        </h2>
        <p className="text-center text-gray-400 mb-12">
          This is a <span className="text-[#7021EE] font-semibold">paid internship</span> (hourly, 1099 contractor)
        </p>
        
        <div className="bg-card/50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="min-h-[400px]">
            <div 
              className="deftform" 
              data-form-id="14b7a638-0aa6-48f2-bf5e-fcaf07643897" 
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
