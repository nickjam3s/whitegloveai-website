
// components/home/PartnerLogos.tsx
import { useAutoScroll } from '@/hooks/useAutoScroll';

const PartnerLogos = () => {
  const { scrollRef, scrollContainerRef } = useAutoScroll(3.0, 'left', true);

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto">
        <h2 className="text-center mb-8">Our Partners</h2>
        <div 
          ref={scrollContainerRef}
          className="overflow-hidden relative"
        >
          <div 
            ref={scrollRef}
            className="flex items-center space-x-8 whitespace-nowrap"
          >
            <img
              src="/lovable-uploads/c2a42923-14a6-458e-9548-ef253921c5d0.png"
              alt="Protect AI Logo"
              className="h-[60px] w-auto object-contain brightness-0 invert"
            />
            <img
              src="/lovable-uploads/3fadd016-1248-42b7-9190-18c9ba852b4e.png"
              alt="Halcyon Logo"
              className="h-[60px] w-auto object-contain brightness-0 invert"
            />
            <img
              src="/lovable-uploads/95c2f2b9-cb3b-4b1a-baf7-39f668fb617f.png"
              alt="Liminal Logo"
              className="h-[60px] w-auto object-contain brightness-0 invert"
            />
            <img
              src="/lovable-uploads/35aef5de-a56d-4151-bf55-77e3fc703c83.png"
              alt="Atomicwork Logo"
              className="h-[60px] w-auto object-contain brightness-0 invert"
            />
            <img
              src="/lovable-uploads/46ec57ce-1710-4a25-aa34-a9c3b8220689.png"
              alt="NVIDIA Logo"
              className="h-[60px] w-auto object-contain brightness-0 invert"
            />
            <img
              src="/lovable-uploads/107c20a0-2323-4264-bf0c-098df9d2c347.png"
              alt="Watsonx Logo"
              className="h-[60px] w-auto object-contain brightness-0 invert"
            />
            <img
              src="/lovable-uploads/402ea05c-738f-41cf-b3b2-16080be720f1.png"
              alt="Horizon3.ai Logo"
              className="h-[60px] w-auto object-contain brightness-0 invert"
            />
            <img
              src="/lovable-uploads/448613e6-0a4a-42f7-a0e7-3600858bc876.png"
              alt="Cranium Logo"
              className="h-[60px] w-auto object-contain brightness-0 invert"
            />
            <img
              src="/lovable-uploads/c1c12d4e-edd7-4cf9-a233-ee09233260c5.png"
              alt="OpenAI Logo"
              className="h-[60px] w-auto object-contain brightness-0 invert"
            />
            <img
              src="/lovable-uploads/2606d3ab-743b-44e5-90b5-595af417c9f5.png"
              alt="AWS Logo"
              className="h-[60px] w-auto object-contain brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
