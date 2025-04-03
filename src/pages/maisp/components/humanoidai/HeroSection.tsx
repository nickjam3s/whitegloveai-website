
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

// Add this declaration to handle the custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        hint?: boolean;
        'loading-anim-type'?: string;
        url?: string;
      }, HTMLElement>;
    }
  }
}

const HeroSection = () => {
  useEffect(() => {
    // Load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* 3D model container with Spline animation */}
      <div className="absolute inset-0 w-full h-full">
        {/* Spline container with scaling for zoom effect */}
        <div className="absolute w-full h-full" style={{
          transform: 'scale(1.5)',
          transformOrigin: 'center'
        }}>
          {/* Using spline-viewer web component with new URL */}
          <spline-viewer 
            loading-anim-type="spinner-small-dark" 
            url="https://prod.spline.design/A1XaOWZCGUTh2j3r/scene.splinecode"
            className="absolute inset-0"
          >
            <img 
              src="data:image/png;base64,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" 
              alt="Spline preview" 
              style={{width: '100%', height: '100%'}} 
            />
          </spline-viewer>
        </div>
        
        {/* Purple overlay with adjusted opacity */}
        <div className="absolute inset-0 bg-purple-600/50"></div>
      </div>

      {/* Text content positioned on top of the 3D model */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight text-white">
              Managed Service Offering for Humanoid Robots
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Seamless integration, operation, and maintenance of humanoid robots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
