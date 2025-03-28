
import React from 'react';
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const ClientLogos = () => {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold text-primary mb-4 text-center">TRUSTED BY INDUSTRY LEADERS</h2>
        <div className="h-[150px] overflow-hidden">
          <InfiniteSlider gap={48} reverse className="w-full h-full">
            <img
              src="https://motion-primitives.com/apple_music_logo.svg"
              alt="Apple Music logo"
              className="h-[90px] w-auto brightness-0 invert opacity-70"
            />
            <img
              src="https://motion-primitives.com/chrome_logo.svg"
              alt="Chrome logo"
              className="h-[90px] w-auto brightness-0 invert opacity-70"
            />
            <img
              src="https://motion-primitives.com/strava_logo.svg"
              alt="Strava logo"
              className="h-[90px] w-auto brightness-0 invert opacity-70"
            />
            <img
              src="https://motion-primitives.com/nintendo_logo.svg"
              alt="Nintendo logo"
              className="h-[90px] w-auto brightness-0 invert opacity-70"
            />
            <img
              src="https://motion-primitives.com/jquery_logo.svg"
              alt="Jquery logo"
              className="h-[90px] w-auto brightness-0 invert opacity-70"
            />
            <img
              src="https://motion-primitives.com/prada_logo.svg"
              alt="Prada logo" 
              className="h-[90px] w-auto brightness-0 invert opacity-70"
            />
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
