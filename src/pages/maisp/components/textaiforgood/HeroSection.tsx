
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
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
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left animate-fade-up md:pr-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight">
              TextAI for Good: <br />
              Empowering Nonprofits <br />
              with AI
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-8">
              TextAI for Good provides free AI-powered chatbots to nonprofits, enhancing engagement and amplifying impact.
            </p>
            <div className="mt-8">
              <Button asChild>
                <a href="#contact" className="px-6 py-3 flex items-center justify-center">
                  <span className="flex items-center justify-center">
                    Contact Us
                  </span>
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/1e0a4362-f9f0-4a98-ae99-304dbcb8293f.png" 
              alt="People illustration" 
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
