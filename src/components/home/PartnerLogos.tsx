

const partnerLogos = [
  { src: "/lovable-uploads/c2a42923-14a6-458e-9548-ef253921c5d0.png", alt: "Protect AI Logo" },
  { src: "/lovable-uploads/3fadd016-1248-42b7-9190-18c9ba852b4e.png", alt: "Halcyon Logo" },
  { src: "/lovable-uploads/95c2f2b9-cb3b-4b1a-baf7-39f668fb617f.png", alt: "Liminal Logo" },
  { src: "/lovable-uploads/35aef5de-a56d-4151-bf55-77e3fc703c83.png", alt: "Atomicwork Logo" },
  { src: "/lovable-uploads/46ec57ce-1710-4a25-aa34-a9c3b8220689.png", alt: "NVIDIA Logo" },
  { src: "/lovable-uploads/107c20a0-2323-4264-bf0c-098df9d2c347.png", alt: "Watsonx Logo" },
  { src: "/lovable-uploads/402ea05c-738f-41cf-b3b2-16080be720f1.png", alt: "Horizon3.ai Logo" },
  { src: "/lovable-uploads/448613e6-0a4a-42f7-a0e7-3600858bc876.png", alt: "Cranium Logo" },
  { src: "/lovable-uploads/75e0be77-a2d2-4dd8-a7fd-b114d4dad987.png", alt: "Partner Logo" },
  { src: "/lovable-uploads/2606d3ab-743b-44e5-90b5-595af417c9f5.png", alt: "AWS Logo" },
];

const PartnerLogos = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white text-2xl font-semibold mb-8">Our Partners</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-[80px] group"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-auto h-full max-h-[60px] brightness-0 invert opacity-70 group-hover:opacity-90 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;

