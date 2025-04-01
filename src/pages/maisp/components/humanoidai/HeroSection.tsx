
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Ensure the iframe loads properly
    const handleIframeLoad = () => {
      if (iframeRef.current) {
        console.log("3D model loaded successfully");
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
    };
  }, []);

  return (
    <section className="relative h-[200vh] overflow-hidden">
      {/* 3D model iframe with purple overlay */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          ref={iframeRef}
          src='https://my.spline.design/nexbotrobotcharacterconcept-19bab7a61b231b9a2b841b8f993a2d7a/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="Humanoid Robot 3D Model"
          className="absolute inset-0"
        />
        {/* Transparent purple overlay */}
        <div className="absolute inset-0 bg-purple-600/50"></div>
      </div>

      {/* Text content positioned on top of the iframe */}
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
