
import { useEffect, useLayoutEffect } from "react";
import HeroSection from "../maisp/components/textai/HeroSection";
import IntelligentInformationSection from "../maisp/components/textai/IntelligentInformationSection";
import OperationalEfficiencySection from "../maisp/components/textai/OperationalEfficiencySection";
import ExpectedROISection from "../maisp/components/textai/ExpectedROISection";
import McKinneyEDCSection from "../maisp/components/textai/McKinneyEDCSection";
import SecurityComplianceSection from "../maisp/components/textai/SecurityComplianceSection";
import ImplementationProcessSection from "../maisp/components/textai/ImplementationProcessSection";
import AdditionalServicesSection from "../maisp/components/textai/AdditionalServicesSection";
import ContactSection from "../maisp/components/textai/ContactSection";
import DemoExampleSection from "../maisp/components/textai/DemoExampleSection";
import { ArrowRight, CheckCircle2, BarChart4, Shield } from "lucide-react";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import '@/styles/animations.css'; // Import animations CSS

const TextAI = () => {
  // Use useLayoutEffect to prevent flash of content before scroll position is set
  useLayoutEffect(() => {
    // Immediately scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Explicitly disable smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Handle anchor links within the page without smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        if (targetId) {
          // Get the element position and scroll to it without smooth behavior
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const yOffset = -80; // Adjust offset if needed
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
    
    // Initialize intersection observer for scroll animations
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

    // Observe all scroll-animated headings
    const headings = document.querySelectorAll('.heading-highlight-scroll');
    headings.forEach(heading => {
      observer.observe(heading);
    });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <a href="/communicationsai" className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors">
          <span className="mr-2">←</span> Back to CommunicationsAI
        </a>
      </div>
      <HeroSection />
      
      {/* Key Features Section */}
      <section className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Intelligent Information Delivery
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <CheckCircle2 className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <OperationalEfficiencySection />
      
      {/* ROI Benefits Section */}
      <section className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Expected ROI
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {roiBenefits.map((benefit, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <BarChart4 className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <McKinneyEDCSection />
      
      {/* Security & Compliance Section */}
      <section className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Security & Compliance
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <Shield className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ImplementationProcessSection />
      <AdditionalServicesSection />
      
      <div id="contact">
        <ContactSection />
      </div>
      
      <ScrollAnimation targetId="intelligent-information-delivery" />
    </div>
  );
};

const features = [
  {
    title: "Natural Language Understanding",
    description: "TextAI understands customer queries using advanced NLP, interpreting intent and context for accurate responses."
  },
  {
    title: "Multi-Channel Support",
    description: "Deploy across websites, mobile apps, messaging platforms, and internal systems for consistent customer experience."
  },
  {
    title: "Knowledge Base Integration",
    description: "Connects with existing documentation, FAQs, and knowledge bases to provide accurate, up-to-date information."
  },
  {
    title: "Continuous Learning",
    description: "Improves over time by analyzing interactions and incorporating feedback for better customer service."
  }
];

const roiBenefits = [
  {
    title: "Cost Reduction",
    description: "Decrease in customer service costs by up to 30% through automation of routine inquiries."
  },
  {
    title: "Efficiency Gains",
    description: "50% reduction in average resolution time for customer inquiries."
  },
  {
    title: "24/7 Availability",
    description: "Continuous support outside business hours improves customer satisfaction and retention."
  },
  {
    title: "Data-Driven Insights",
    description: "Valuable analytics on customer queries helps identify product improvement opportunities."
  }
];

const securityFeatures = [
  {
    title: "Data Privacy",
    description: "Built-in compliance with GDPR, CCPA, and other privacy regulations to protect customer information."
  },
  {
    title: "Encryption",
    description: "End-to-end encryption for all customer interactions and data transfers."
  },
  {
    title: "Access Controls",
    description: "Role-based permissions system ensures only authorized personnel can access sensitive information."
  },
  {
    title: "Audit Trails",
    description: "Comprehensive logging of all system activities for security monitoring and compliance reporting."
  }
];

export default TextAI;
