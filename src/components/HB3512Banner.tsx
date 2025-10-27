import { ExternalLink, GraduationCap } from 'lucide-react';

const HB3512Banner = () => {
  return (
    <section className="py-3 bg-gradient-to-r from-secondary/20 via-secondary/30 to-secondary/20 border-y border-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a 
          href="https://capitol.texas.gov/tlodocs/89R/billtext/html/HB03512I.htm" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 group transition-all hover:opacity-80"
        >
          <GraduationCap className="h-5 w-5 text-secondary flex-shrink-0" />
          <span className="text-sm md:text-base text-white font-semibold text-center">
            Our training programs support Texas HB3512 AI education requirements
          </span>
          <ExternalLink className="h-4 w-4 text-secondary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default HB3512Banner;
