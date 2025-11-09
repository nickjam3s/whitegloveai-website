import React from 'react';

interface HeroBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const HeroBackground = ({ children, className = "" }: HeroBackgroundProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/5 via-background to-primary/5"></div>
      
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>
      
      {/* Blur Circles */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      {children}
    </div>
  );
};

export default HeroBackground;
