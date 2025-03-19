
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#7928CA,transparent_60%)] opacity-25" 
          style={{
            transformOrigin: '60% 40%',
            animation: 'morphing 12s ease-in-out infinite, rotating 15s linear infinite'
          }}
        />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight">
            WhitegloveAI Managed TextAI Service
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Transform customer interactions with secure, intelligent automation using our cutting-edge TextAI Agent solution.
          </p>
                  </div>
        <div className="mt-12 flex justify-center">
          <iframe
            data-chat-frame="11eee546-15ce-7f30-aa68-03cf75d045b5"
            width="550"
            height="700"
            style={{ border: 0, background: 'white' }}
          />
          <script
            src="https://chat.whitegloveai.com/api/script/chat.js?iframe&id=11eee546-15ce-7f30-aa68-03cf75d045b5"
            defer
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
