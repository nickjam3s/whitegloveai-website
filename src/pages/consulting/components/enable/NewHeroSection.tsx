import React from 'react';

const NewHeroSection = () => {
  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]">
            Enable Learning Workshops
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 text-shadow-sm">
            Empower your organization or department to harness generative AI with confidence through our Whiteglove training and engagement program.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;