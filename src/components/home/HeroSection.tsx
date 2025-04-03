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
    <section id="hero" className="relative pt-20 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20 h-[33vh]">
      <div className="absolute inset-0 w-full h-full">
        <spline-viewer 
          hint 
          loading-anim-type="spinner-small-dark" 
          url="https://prod.spline.design/MBTE3Y7nCIJv3C8Q/scene.splinecode"
          className="absolute inset-0"
        >
          <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA4CAYAAAALrl3YAAAAAXNSR0IArs4c6QAAAydJREFUeF7tm2uWwyAIhesS+tj/VjsnPU0mNSoXUIIt83NqBO6HCqZNj8fjeWn8PZ/Nj1uPDvkspSSe11sspUDSrwCZAcYCqAnEaxCSVeI1lnyVTAnklUmMrWsWGM0VMlUQBTgz+b/39bBCZgpEfLo7ebCkdbrf777KKCdijXSjlfQBZKTy2dzI7iMGQk3OOXQNNamaqsXTIw5Kq71TbCCcyYuNT6M60s6NVF8WNta4JbZgIJLJPWT+bD6QQAKELdIqkABhAyLX+QAkQJwDYrWabrdb9CE2DDYrzT4kgNjSoHagWCFGPCgQXbasw4HEuIE10gEyM7IpXBxAYbz6KOmWNToISEnlIEQobaeO2Pjo1CVAesMo3noarDZELPdAmhWCQEQt3JpgiNjImGmBSB2XAkHttUT/CiClQwoVp7TlS4Bw7dVsuASyvqBCnNsLuoznCtMDiNRmKT4qZqmtXCdO7eHi6gQtn2sC5f9HxbcAwi5781e4lJMc2uhYKZBWBmuh9FgdkpVSvO09AwoFLxcIESyPA4WEvOii/OVsz1uXntJlmut3CZDSdoFAQWBLgCDPTAFECgMFgghlNab5xtDL1uUNCFJESAEGEKZympsBxNTwd+pLANqV1nOFcMvQXERuZYdA+LhcpL65qBFz73yvefYVCRIscogj8yCVlybGLS4KiCajAgiK+n8cuWVpgKxZpc0ctEPPw9fcYdWkPH3L0gLh58jxCaov4FY9mgQJIG8+FBQUvAYGdX51mZs6Q3oYQcWixvWA4imeUrzkGeIxAAkYj3GwgUwTROXV8Sz+Q33IjMFQW57Hzw+vHjy8D/EolIVPpaQXfy/LwuFvtdHafQKIIXXkGFABoQxIqqGaPpa2RjCi/N96nJ7fXKQCQQGhzlP2aheC2vnROCS3HKwVog0EEfDXx0BAAoRdmjSBBAgbEHudi0AChD2I6qEeMMbDgPqQAHEuiG2FXK/X+BXuW401KTllLYoRTfikAfJxGAl+rIMGM3Jcc/voFBMK49U3SYDUDGgza2SGlqAiQvWKCU2qrkBqnTHlzCjAUrv5cxooCPS9vT+KAiyJ1QmzwwAAAABJRU5ErkJggg==" 
            alt="Spline preview" 
            style={{width: '100%', height: '100%'}} 
          />
        </spline-viewer>
        
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
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
