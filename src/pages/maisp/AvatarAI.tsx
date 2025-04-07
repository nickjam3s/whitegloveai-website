
import { useEffect, useLayoutEffect } from "react";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import '@/styles/animations.css';
import { BrainCircuit, Users, BarChart3, ShoppingCart, Building2, HeartPulse, GraduationCap, Video } from "lucide-react";

// Import all sections
import HeroSection from "./components/avatarai/HeroSection";
import EvolutionSection from "./components/avatarai/EvolutionSection";
import TransformSection from "./components/avatarai/TransformSection";
import IndustriesSection from "./components/avatarai/IndustriesSection";
import CaseStudySection from "./components/avatarai/CaseStudySection";
import HowItWorksSection from "./components/avatarai/HowItWorksSection";
import BenefitsSection from "./components/avatarai/BenefitsSection";
import WhyChooseSection from "./components/avatarai/WhyChooseSection";
import ContactSection from "./components/avatarai/ContactSection";

const AvatarAI = () => {
  // Use useLayoutEffect to prevent flash of content
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Disable smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Handle anchor links
    const handleAnchorClick = (e) => {
      const target = e.target;
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
    
    // Initialize intersection observer
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

    // Observe headings
    const headings = document.querySelectorAll('.heading-highlight-scroll');
    headings.forEach(heading => observer.observe(heading));
    
    // Load Typeform script
    const typeformScript = document.createElement('script');
    typeformScript.src = "//embed.typeform.com/next/embed.js";
    typeformScript.defer = true;
    document.body.appendChild(typeformScript);
    
    document.addEventListener('click', handleAnchorClick);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.style.scrollBehavior = '';
      observer.disconnect();
      document.body.removeChild(typeformScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <EvolutionSection features={evolutionFeatures} />
      <TransformSection experiences={transformExperience} />
      <IndustriesSection industries={industries} />
      <CaseStudySection steps={caseStudySteps} />
      <HowItWorksSection steps={howItWorks} />
      <BenefitsSection benefits={benefits} />
      <WhyChooseSection reasons={whyChooseUs} />
      <ContactSection />
      <ScrollAnimation targetId="evolution-section" />
    </div>
  );
};

// Define actual data instead of using the [...] placeholder
const evolutionFeatures = [
  {
    icon: BrainCircuit,
    title: "Advanced AI Avatars",
    description: "Lifelike digital twins powered by state-of-the-art AI that create genuine connections with customers across all your digital channels."
  },
  {
    icon: Users,
    title: "Personal Connection at Scale",
    description: "Provide face-to-face interaction at scale while maintaining the human touch that builds trust and loyalty."
  },
  {
    icon: Video,
    title: "Rich Interactive Experiences",
    description: "Go beyond text and voice with visual communication that engages customers and enhances their experience with your brand."
  },
  {
    icon: BarChart3,
    title: "24/7 Availability",
    description: "Your avatars are always available, ensuring consistent service quality at any time of day or night."
  }
];

const transformExperience = [
  {
    title: "Create Omnichannel Consistency",
    description: "Our avatars provide a unified face for your brand across all touchpoints, ensuring a consistent experience whether customers interact through your website, app, kiosk, or in-store.",
    features: [
      "Seamless experience across web, mobile, in-store, and physical locations",
      "Consistent brand representation with the same digital identity everywhere",
      "Personalized interactions that pick up where previous conversations left off",
      "Easy deployment to any channel with our flexible integration options"
    ]
  },
  {
    title: "Build Emotional Connections",
    description: "Humans connect with faces. Our avatars create genuine emotional bonds with your customers through expressive visual interactions that text and voice alone cannot achieve.",
    features: [
      "Lifelike expressions and emotions that create authentic connections",
      "Natural conversation flows with appropriate emotional responses",
      "Cultural and contextual awareness for appropriate interactions",
      "Personalized experiences based on customer history and preferences"
    ]
  }
];

const industries = [
  {
    icon: ShoppingCart,
    title: "Retail",
    description: "Create virtual shopping assistants that guide customers through product selection, answer questions, and provide personalized recommendations both online and in-store."
  },
  {
    icon: Building2,
    title: "Financial Services",
    description: "Offer friendly financial advisors that help customers understand complex products, complete applications, and receive support with a human touch."
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Provide compassionate virtual care assistants that can handle intake, answer questions, and guide patients through healthcare processes with empathy."
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Deliver engaging tutors and teaching assistants that make learning more interactive, personalized, and effective for students of all ages."
  },
  {
    icon: Users,
    title: "Human Resources",
    description: "Transform onboarding, training, and employee support with interactive avatars that make corporate processes more engaging and human."
  },
  {
    icon: BrainCircuit,
    title: "Technology",
    description: "Enhance technical support and product education with visual avatars that can demonstrate features and walk users through complex troubleshooting."
  }
];

const caseStudySteps = [
  {
    title: "The Challenge",
    description: "A leading retail chain struggled with inconsistent customer experiences across their online store, mobile app, and physical locations. Customer satisfaction scores varied widely, and their digital channels lacked the personal touch of in-store interactions."
  },
  {
    title: "Our Solution",
    description: "We implemented custom AI avatars as virtual brand ambassadors across all customer touchpoints, creating a unified face for the brand that customers would recognize whether shopping online or in-store."
  },
  {
    title: "Integration Approach",
    description: "Digital kiosks in physical stores featured the same avatars as the website and mobile app. The avatars recognized returning customers, recalled their preferences, and maintained conversation context across channels."
  },
  {
    title: "The Results",
    description: "Customer satisfaction increased by 35% within three months. Online conversion rates improved by 28%, and in-store dwell time increased. Customers reported feeling more connected to the brand, with 87% stating they appreciated the consistent experience."
  }
];

const howItWorks = [
  {
    title: "Custom Avatar Development",
    description: "We create a digital twin that embodies your brand identity, with customizable appearance, voice, personality, and knowledge base."
  },
  {
    title: "Powerful AI Integration",
    description: "Your avatar is powered by advanced AI language models, emotional intelligence, and computer vision to create natural, meaningful interactions."
  },
  {
    title: "Omnichannel Deployment",
    description: "We implement your digital twin across your website, mobile app, in-store kiosks, and any other customer touchpoints to ensure consistency."
  },
  {
    title: "Continuous Optimization",
    description: "Our team monitors performance, gathers insights, and continuously improves your avatar's knowledge and responsiveness based on real interactions."
  }
];

const benefits = [
  {
    title: "Increased Conversion Rates",
    description: "Clients typically see 20-35% higher conversion rates when visual avatars guide customers through purchase decisions compared to text-only interfaces."
  },
  {
    title: "Enhanced Customer Loyalty",
    description: "Face-to-face interactions, even digital ones, build stronger emotional connections that translate to 40% higher customer retention rates."
  },
  {
    title: "Reduced Support Costs",
    description: "Our avatars can handle up to 85% of routine customer inquiries, reducing support costs while maintaining high satisfaction levels."
  },
  {
    title: "Valuable Customer Insights",
    description: "Every interaction provides structured data about customer needs, preferences, and pain points that can inform business decisions."
  }
];

const whyChooseUs = [
  {
    title: "Enterprise-Grade Security",
    description: "All avatar interactions are secured with enterprise-level encryption and comply with industry standards like GDPR, HIPAA, and SOC 2."
  },
  {
    title: "Full White-Glove Service",
    description: "Our team handles everything from avatar creation to integration, training, deployment, and ongoing optimization so you can focus on your business."
  },
  {
    title: "Rapid Deployment",
    description: "Get your custom avatars up and running in weeks, not months, with our streamlined development and integration process."
  },
  {
    title: "Measurable ROI",
    description: "We provide comprehensive analytics and reporting to track the impact of your avatars on key business metrics and customer satisfaction."
  }
];

export default AvatarAI;
