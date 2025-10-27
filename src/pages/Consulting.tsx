import { useEffect, useRef } from "react";
import HeroSection from "./vcaio/components/chiefaiofficer/HeroSection";
import UnlockingSection from "./vcaio/components/chiefaiofficer/UnlockingSection";
import BenefitsSection from "./vcaio/components/chiefaiofficer/BenefitsSection";
import FutureSection from "./vcaio/components/chiefaiofficer/FutureSection";
import WhyVCAIO from "./vcaio/components/chiefaiofficer/WhyVCAIO";
import ServicesOverviewSection from "./vcaio/components/chiefaiofficer/ServicesOverviewSection";
import '@/styles/animations.css';
import SEO from '@/components/SEO';

const Consulting = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const yOffset = -80;
            const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({
              top: y,
              behavior: 'auto'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    const headings = document.querySelectorAll('.heading-highlight-scroll');
    headings.forEach(heading => {
      observer.observe(heading);
    });
    
    const animatedSections = document.querySelectorAll('.animate-section, .animate-on-scroll');
    animatedSections.forEach(section => {
      observer.observe(section);
    });
    
    const timeoutIds: NodeJS.Timeout[] = [];
    [0, 50, 100, 250, 500].forEach(delay => {
      const timeoutId = setTimeout(() => {
        window.scrollTo(0, 0);
      }, delay);
      timeoutIds.push(timeoutId);
    });
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      timeoutIds.forEach(id => clearTimeout(id));
      document.documentElement.style.scrollBehavior = '';
      document.body.style.scrollBehavior = '';
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="AI Consulting Services | WhitegloveAI"
        description="Strategic AI leadership, transformation, and change management consulting for enterprises."
        canonicalPath="/consulting"
        schemas={[
          { "@context": "https://schema.org", "@type": "ProfessionalService", "name": "AI Consulting", "serviceType": "AI Consulting", "url": "https://www.whitegloveai.com/consulting", "provider": { "@type": "Organization", "name": "WhitegloveAI" }, "areaServed": "US", "description": "Strategic AI leadership, transformation, and change management for enterprises." }
        ]}
      />
      <HeroSection />
      <WhyVCAIO />
      <ServicesOverviewSection />
      <UnlockingSection />
      <BenefitsSection />
      <FutureSection />
    </div>
  );
};

export default Consulting;
