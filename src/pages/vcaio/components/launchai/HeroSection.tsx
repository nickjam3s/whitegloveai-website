
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AspectRatio ratio={16/9} className="h-full">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="AI technology background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-black/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-purple-800/30"></div>
        </AspectRatio>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            Simplifying AI Adoption for Your Future
          </h1>
          
          <p className="text-lg mb-6">
            Many businesses hesitate to embrace AI, held back by fears of complexity, risks, or uncertainty about 
            where to begin.
          </p>
          
          <p className="text-lg mb-6">
            But AI is no longer a distant future—it's a business shaping tool driving measurable value across 
            industries. The challenge lies in adopting AI strategically to minimize risks and maximize impact.
          </p>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Introducing WhitegloveAI's AI Launchpad Workshop</h3>
            <p className="text-lg mb-6">
              Our 8-week program is your roadmap to AI success. With a guided, step-by-step approach, we help you:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-lg">Experiment with AI securely and efficiently.</li>
              <li className="text-lg">Ensure compliance and minimize risks.</li>
              <li className="text-lg">Build the knowledge and processes to confidently adopt AI.</li>
            </ul>
            
            <p className="text-lg font-medium">
              By the end of the workshop, your business will be equipped to unlock AI's full potential and drive 
              innovation with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
