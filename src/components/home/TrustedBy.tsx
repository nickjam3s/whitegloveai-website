// components/home/TrustedBy.tsx
import { useRef, useEffect } from 'react';

const logos = [
  { src: '/lovable-uploads/f0ca996d-42e2-4524-b115-7ff8ed634282.png', alt: 'Principal Logo', height: 60 },
  { src: '/lovable-uploads/7a4a8a1b-9c9a-4bb0-96f4-4e10213073d5.png', alt: 'McKinney Texas Unique By Nature Logo', height: 80 },
  { src: '/lovable-uploads/1ca9f7e9-12e2-46cd-9d26-bf3264c8282c.png', alt: 'Allen Star Logo', height: 80 },
  { src: '/lovable-uploads/17e63cce-7a22-4959-b5a9-2ba2208cb774.png', alt: 'Black Dome Logo', height: 80 },
  { src: '/lovable-uploads/347f5cb7-7b00-4459-8370-240641f6d41a.png', alt: 'City of Anna Logo', height: 80 },
  { src: '/lovable-uploads/546436a1-1e57-4c15-bcb5-67b2a4387326.png', alt: 'Frisco Logo', height: 80 },
  { src: '/lovable-uploads/427931fd-d653-41d3-bbfa-1c3f3a160044.png', alt: 'Insight One Logo', height: 60 },
  { src: '/lovable-uploads/31ce2c79-4446-474c-944b-387098eef691.png', alt: 'Kofile Logo', height: 60 },
  { src: '/lovable-uploads/b6a654ad-cab3-433b-b6d1-d7783e010859.png', alt: 'MEDC Logo', height: 60 },
  { src: '/lovable-uploads/ffe8ec7f-c754-4b67-9abf-358cf9af31cf.png', alt: 'McKinney Texas Logo', height: 80 },
  { src: '/lovable-uploads/00ec88d7-072d-4ba5-8d23-fba3e5d934c4.png', alt: 'Parker Logo', height: 80 },
  { src: '/lovable-uploads/a95e8c96-a49c-4c52-bb1b-c2a6241c1d1f.png', alt: 'Paychex Logo', height: 60 },
];

const TrustedBy = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto overflow-hidden">
        <h2 className="text-center text-white text-2xl font-semibold mb-8">Trusted By</h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-8 animate-scroll whitespace-nowrap w-max h-[100px]"> {/* you can adjust h-[100px] as needed */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-full"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ height: `${logo.height}px` }}
                  className="object-contain w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default TrustedBy;

