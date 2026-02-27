import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HB3512Banner = () => {
  return (
    <section className="py-3 bg-gradient-to-r from-secondary/20 via-secondary/30 to-secondary/20 border-y border-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link 
            to="/training/academy"
            className="flex items-center gap-3 group transition-all hover:opacity-80"
          >
            <img 
              src="/images/seals/DIR_AI_Training_Seal_2025-2026.png" 
              alt="DIR AI Training Seal" 
              className="h-10 w-10 object-contain flex-shrink-0"
            />
            <span className="text-sm md:text-base text-foreground font-semibold">
              HB 3512 Compliant. Our AI Awareness course is officially certified by the Texas DIR.
            </span>
            <ArrowRight className="h-4 w-4 text-secondary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/training/academy">
            <Button 
              variant="secondary" 
              size="sm"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground whitespace-nowrap"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HB3512Banner;
