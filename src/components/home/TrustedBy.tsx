// components/home/TrustedBy.tsx
import { useAutoScroll } from '@/hooks/useAutoScroll';

const TrustedBy = () => {
  const { scrollRef, scrollContainerRef } = useAutoScroll(6.0, 'left', true);

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto">
        <h2 className="text-center mb-8">Trusted By</h2>
        <div 
          ref={scrollContainerRef}
          className="overflow-hidden relative w-full"
        >
          <div 
            ref={scrollRef}
            className="flex items-center"
            style={{
              display: 'flex',
              whiteSpace: 'nowrap',
              gap: '2rem' // Add consistent gap between logos
            }}
          >
            {/* Original logo items */}
            <img
              src="/lovable-uploads/f0ca996d-42e2-4524-b115-7ff8ed634282.png"
              alt="Principal Logo"
              className="h-[60px] w-auto object-contain"
            />
            <img
              src="/lovable-uploads/7a4a8a1b-9c9a-4bb0-96f4-4e10213073d5.png"
              alt="McKinney Texas Unique By Nature Logo"
              className="h-[80px] w-auto object-contain"
            />
            <img
              src="/lovable-uploads/1ca9f7e9-12e2-46cd-9d26-bf3264c8282c.png"
              alt="Allen Star Logo"
              className="h-[80px] w-auto object-contain"
            />
            <img
              src="/lovable-uploads/17e63cce-7a22-4959-b5a9-2ba2208cb774.png"
              alt="Black Dome Logo"
              className="h-[80px] w-auto object-contain"
            />
            <img
              src="/lovable-uploads/347f5cb7-7b00-4459-8370-240641f6d41a.png"
              alt="City of Anna Logo"
              className="h-[80px] w-auto object-contain"
            />
            <img
              src="/lovable-uploads/546436a1-1e57-4c15-bcb5-67b2a4387326.png"
              alt="Frisco Logo"
              className="h-[80px] w-auto object-contain"
            />
            <img
              src="/lovable-uploads/427931fd-d653-41d3-bbfa-1c3f3a160044.png"
              alt="Insight One Logo"
              className="h-[60px] w-auto object-contain"
            />
            <img
              src="/lovable-uploads/31ce2c79-4446-474c-944b-387098eef691.png"
              alt="Kofile Logo"
              className="h-[60px] w-auto object-contain"
            />
            <img
              src="/lovable-uploads/b6a654ad-cab3-433b-b6d1-d7783e010859.png"
              alt="MEDC Logo"
              className="h-[60px] w-auto object-contain"
            />
            <img
              src="/lovable-uploads/ffe8ec7f-c754-4b67-9abf-358cf9af31cf.png"
              alt="McKinney Texas Logo"
              className="h-[80px] w-auto object-contain"
            />
            <img
              src="/lovable-uploads/00ec88d7-072d-4ba5-8d23-fba3e5d934c4.png"
              alt="Parker Logo"
              className="h-[80px] w-auto object-contain"
            />
            <img
              src="/lovable-uploads/a95e8c96-a49c-4c52-bb1b-c2a6241c1d1f.png"
              alt="Paychex Logo"
              className="h-[60px] w-auto object-contain"
            />
            <img
              src="/lovable-uploads/3c830014-ce8c-4b9e-9e89-952c3a7c04e1.png"
              alt="McKinney Texas Unique Logo"
              className="h-[80px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
