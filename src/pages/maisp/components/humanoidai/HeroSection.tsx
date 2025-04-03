
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  const splineContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative h-[200vh] overflow-hidden">
      {/* 3D model container with Spline animation */}
      <div className="absolute inset-0 w-full h-full" ref={splineContainerRef}>
        <Spline 
          scene="https://prod.spline.design/yctn6RDnJLxlncBa/scene.splinecode" 
          className="absolute inset-0"
        />
        {/* Transparent purple overlay */}
        <div className="absolute inset-0 bg-purple-600/50"></div>
      </div>

      {/* Text content positioned on top of the 3D model */}
      <div className="relative z-10 flex items-center justify-center h-[100vh]">
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
