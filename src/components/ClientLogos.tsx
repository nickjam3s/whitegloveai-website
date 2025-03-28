
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
              src="/placeholder.svg"
              alt="Placeholder Logo 1"
              className="h-[90px] w-auto brightness-0 invert opacity-70"
            />
            <img
              src="/placeholder.svg"
              alt="Placeholder Logo 2"
              className="h-[90px] w-auto brightness-0 invert opacity-70"
            />
            <img
              src="/placeholder.svg"
              alt="Placeholder Logo 3"
              className="h-[90px] w-auto brightness-0 invert opacity-70"
            />
            <img
              src="/placeholder.svg"
              alt="Placeholder Logo 4"
              className="h-[90px] w-auto brightness-0 invert opacity-70"
            />
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
