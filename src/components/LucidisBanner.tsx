import lucidisLogo from '@/assets/lucidis-logo.png';

const LucidisBanner = () => {
  return (
    <section className="py-4 bg-background/50 border-y border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm text-gray-400">Powered by:</span>
          <a 
            href="https://www.lucidis.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img 
              src={lucidisLogo} 
              alt="Lucidis" 
              className="h-6 md:h-8"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LucidisBanner;
