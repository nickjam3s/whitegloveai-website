
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimation from '@/components/animations/ScrollAnimation';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        hint?: boolean;
        'loading-anim-type'?: string;
        url?: string;
      }, HTMLElement>;
    }
  }
}

const HeroSection = () => {
  return (
    <section id="hero" className="relative px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20 h-[66vh] flex items-center">
      <div className="absolute inset-0 w-full h-full">
        {/* Magnify the animation by making the container larger and positioning it to stay centered */}
        <div className="absolute w-[200%] h-[200%] left-[-50%] top-[-50%]">
          <spline-viewer 
            loading-anim-type="spinner-small-dark" 
            url="https://prod.spline.design/eXgd-TV6iF8bX-pB/scene.splinecode"
            className="absolute inset-0"
          >
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA4CAYAAAALrl3YAAAAAXNSR0IArs4c6QAAAhhJREFUeF7tm2tywyAQg8sR/Lj/Vd3BUzJxayOBsYod5W82K9AH2AskzPO8fIHPssAQlMLfkw4EAyGdEoUZiMhoVgYC8XLFWtkmLgvEMNqYzGaJfh8CMQzWxvNx717/AWIQ5w1mM+x5HaZp8jst62CjuNygN5BGJrNp0Ap0CkiWdAhsGz8iDoFIJlQBYZO/Ox0KANXkf3WI1KnVKOlHbFOpThGQ0uQfMfQbd5ICYhCNXc+kywIxCB2I5PUuEIPQgIB1iEFoQOQe9mEcRxeGOg6rUrZcMBAtDbQKeYYIeSAYsSkG8kQgm+1jslIW+tCFFDM7ms0QA8HMpUBwcxxhIB2OAQaKH+picAiKgfQGJB3hInLidj9arugI12A0Y+HIZ+/2avzfVYG7vb9/5dmiobWp49A1IEPRQEm7wD7C1flNKRkIZZMuiAKCDlV0zX2+koF0xpgG4lmSJxcv0LV4ATKQu86QFvQ763uXzaFniIFo+FFADEMDYz3CdaWuM5tR8t1exqWLY+Belpeoiwn8pIe7vQahAZGr6XyEq2OwKqFB3wSI72VhqghEylAFhE3+Eqm8zViiU/rfv9S2qzVK8q+vvSW330uT43Fz/4i9gXDGJwrIGYH7W67tAQRiGNcD2TyDj5Ysg9CCOHyoG8T1ILJ1yDAM/o+hhgFXhxiIkAZTGBqIDgjzOAitgESx2uJMZ8n/KTEwYuu+AQmNRXRmbTAoAAAAAElFTkSuQmCC" 
              alt="Spline preview" 
              style={{width: '100%', height: '100%'}} 
            />
          </spline-viewer>
        </div>
        
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 py-8">
        <div className="text-center animate-fade-up">
          <div className="logo-container">
            <img src="/lovable-uploads/197ddc10-c159-4f39-a269-e35142af32c5.png" alt="WhitegloveAI Logo" className="h-32 mx-auto mb-8 logo-animation" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight text-white">
            Your Trusted AI Adoption Partner
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            At WhitegloveAI, we guide you through the transformative journey of AI adoption—ensuring every step is secure, compliant, and aligned with your business goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="https://jzaxt350p9j.typeform.com/to/JlpkD8L8#name=xxxxx&email=xxxxx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors border border-secondary/50">
              Take the AI Readiness Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      <ScrollAnimation targetId="services" />
    </section>
  );
};

export default HeroSection;
