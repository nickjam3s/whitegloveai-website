
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Work With Us</h2>
        
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          Take the first step towards confident AI adoption. Contact us to schedule your AI Launchpad 
          Workshop and start your journey to AI success.
        </p>
        
        <div className="max-w-xl mx-auto mb-16">
          <Button 
            className="w-full py-6 text-lg flex items-center justify-center relative z-10"
            onClick={() => window.open('https://whitegloveai.com/contact', '_blank')}
          >
            <span className="relative z-10">Schedule Your AI Workshop Today</span>
          </Button>
        </div>
        
        <div className="text-gray-400 text-sm">
          {/* Copyright text removed as requested */}
          {/* Removed the "Managed AI Service Provider™" text as requested */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
