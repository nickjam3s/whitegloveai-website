
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
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-end">
            {/* Man Reading Book SVG */}
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full">
              {/* Person silhouette */}
              <path d="M200 120C215.464 120 228 107.464 228 92C228 76.536 215.464 64 200 64C184.536 64 172 76.536 172 92C172 107.464 184.536 120 200 120Z" fill="#7021EE" />
              <path d="M240 150H160C151.716 150 145 156.716 145 165V275C145 283.284 151.716 290 160 290H240C248.284 290 255 283.284 255 275V165C255 156.716 248.284 150 240 150Z" fill="#7021EE" />
              
              {/* Book */}
              <rect x="130" y="170" width="140" height="100" rx="5" fill="#333" />
              <rect x="138" y="178" width="62" height="84" rx="3" fill="#222" />
              <rect x="200" y="178" width="62" height="84" rx="3" fill="#444" />
              
              {/* Lines of text in the book */}
              <rect x="145" y="190" width="48" height="2" rx="1" fill="white" />
              <rect x="145" y="200" width="40" height="2" rx="1" fill="white" />
              <rect x="145" y="210" width="45" height="2" rx="1" fill="white" />
              <rect x="145" y="220" width="38" height="2" rx="1" fill="white" />
              <rect x="145" y="230" width="42" height="2" rx="1" fill="white" />
              <rect x="145" y="240" width="35" height="2" rx="1" fill="white" />
              
              <rect x="210" y="190" width="45" height="2" rx="1" fill="white" />
              <rect x="210" y="200" width="38" height="2" rx="1" fill="white" />
              <rect x="210" y="210" width="42" height="2" rx="1" fill="white" />
              <rect x="210" y="220" width="40" height="2" rx="1" fill="white" />
              <rect x="210" y="230" width="35" height="2" rx="1" fill="white" />
              <rect x="210" y="240" width="45" height="2" rx="1" fill="white" />
              
              {/* Arms */}
              <path d="M160 220C150 220 145 210 145 200V180" stroke="#7021EE" strokeWidth="10" strokeLinecap="round" />
              <path d="M240 220C250 220 255 210 255 200V180" stroke="#7021EE" strokeWidth="10" strokeLinecap="round" />
              
              {/* Glow effect */}
              <circle cx="200" cy="220" r="80" fill="url(#bookGlow)" fillOpacity="0.3" />
              <defs>
                <radialGradient id="bookGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 220) rotate(90) scale(80)">
                  <stop stopColor="#9b87f5" />
                  <stop offset="1" stopColor="#9b87f5" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-white mb-8">Contact Us to Get Started</h2>
            
            <div className="bg-[#111]/80 p-6 rounded-lg w-full max-w-xl">
              <div data-tf-widget="01JMAMXNY7NHGYM2YQDXCDRDW6" data-tf-inline-on-mobile data-tf-medium="snippet" data-tf-hidden="utm_source=website,utm_medium=snippet"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
