import { useEffect, useLayoutEffect } from "react";
import { 
  QrCode, 
  ShoppingBag, 
  Building2, 
  MessagesSquare, 
  Store, 
  Building, 
  Wallet, 
  Users2,
  Video,
  Users,
  BrainCircuit,
  BarChart3,
  HeartPulse,
  GraduationCap
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import SEO from '@/components/SEO';
import '@/styles/animations.css';


// Import all sections
import HeroSection from "../maisp/components/avatarai/HeroSection";
import EvolutionSection from "../maisp/components/avatarai/EvolutionSection";
import TransformSection from "../maisp/components/avatarai/TransformSection";
import IndustriesSection from "../maisp/components/avatarai/IndustriesSection";
import CaseStudySection from "../maisp/components/avatarai/CaseStudySection";
import HowItWorksSection from "../maisp/components/avatarai/HowItWorksSection";
import BenefitsSection from "../maisp/components/avatarai/BenefitsSection";
import WhyChooseSection from "../maisp/components/avatarai/WhyChooseSection";
import ContactSection from "../maisp/components/avatarai/ContactSection";

// TypeScript interfaces
interface AvatarAIProps {}

interface AnchorClickEvent extends MouseEvent {
  target: HTMLElement;
}

// Define the component
const AvatarAI: React.FC<AvatarAIProps> = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    
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
    headings.forEach(heading => observer.observe(heading));
    
    const typeformScript = document.createElement('script');
    typeformScript.src = "//embed.typeform.com/next/embed.js";
    typeformScript.defer = true;
    document.body.appendChild(typeformScript);
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.style.scrollBehavior = '';
      observer.disconnect();
      if (document.body.contains(typeformScript)) {
        document.body.removeChild(typeformScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="AvatarAI - AI Avatar Solutions | WhitegloveAI"
        description="Create intelligent AI avatars for customer engagement. Virtual assistants, digital humans, and AI-powered avatar technology from WhitegloveAI."
        canonicalPath="/communications-ai/avatar-ai"
      />
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

// Data objects
const evolutionFeatures = [
  {
    icon: QrCode,
    title: "Scan QR Code for Instant Assistance",
    description: "Customers can instantly connect with a personal shopping assistant in-store."
  },
  {
    icon: ShoppingBag,
    title: "Product Advice on the Go",
    description: "Get expert guidance while browsing through your phone."
  },
  {
    icon: Building2,
    title: "Virtual Concierge at Interactive Kiosks",
    description: "Access personalized help at convenient locations."
  },
  {
    icon: MessagesSquare,
    title: "Expert Help on Your Website",
    description: "Provide face-to-face support directly through your online platform."
  }
];

const transformExperience = [
  {
    title: "In-Store Magic",
    description: "Imagine having friendly AI avatars throughout your store. Customers simply scan a QR code to instantly connect with a personal shopping assistant who can:",
    features: [
      "Provide detailed product information",
      "Offer personalized recommendations based on preferences",
      "Help locate items in the store",
      "Share product comparisons and reviews",
      "Connect them with human staff for complex needs"
    ]
  },
  {
    title: "Digital Connection, Human Feel",
    description: "On your website or mobile app, customers enjoy video call-like interactions that feel natural and engaging:",
    features: [
      "Face-to-face conversations that flow naturally",
      "Screen sharing for product demonstrations",
      "Real-time product recommendations",
      "Instant answers to questions",
      "Seamless handoff to human staff when needed"
    ]
  }
];

const industries = [
  {
    icon: Store,
    title: "Retail",
    description: "Give every customer their own personal shopping assistant, providing attentive service that drives sales and satisfaction."
  },
  {
    icon: Building2,
    title: "Hotels & Hospitality",
    description: "From virtual concierge services to in-room assistance, deliver personalized guest experiences at scale."
  },
  {
    icon: Wallet,
    title: "Financial Services",
    description: "Provide face-to-face advisory services through any device, making complex discussions feel more personal and engaging."
  },
  {
    icon: Building,
    title: "Healthcare",
    description: "Offer friendly, accessible patient support for scheduling, basic questions, and care coordination."
  },
  {
    icon: Building2,
    title: "Municipalities",
    description: "Provide 24/7 citizen services, from permit applications to bill payments, making local government more accessible and efficient."
  },
  {
    icon: Users2,
    title: "Public Figures",
    description: "Create scalable, personal connections with fans through virtual meet-and-greets, Q&A sessions, and personalized interactions."
  }
];

const caseStudySteps = [
  {
    title: "Starting Online",
    description: "Customer browses your website and engages with the AI avatar, discusses products, receives recommendations, and creates a wishlist. Avatar learns preferences and shopping history."
  },
  {
    title: "Transitioning to Store",
    description: "Customer visits physical store and scans QR code. Same avatar instantly recognizes them and recalls previous conversation."
  },
  {
    title: "Seamless Experience",
    description: "Avatar guides customer to products discussed online, provides additional recommendations based on in-person preferences."
  },
  {
    title: "Ongoing Relationship",
    description: "Conversation history maintains context across all future interactions. Personalized recommendations improve with each engagement."
  }
];

const howItWorks = [
  {
    title: "Choose Your Avatar",
    description: "Select from our library of professional, friendly faces or create a custom avatar."
  },
  {
    title: "Place Your Access Points",
    description: "Add QR codes in-store, embed on your website, or integrate with your mobile app."
  },
  {
    title: "Start Connecting",
    description: "Customers instantly access face-to-face support whenever and wherever they need it."
  },
  {
    title: "Watch It Grow",
    description: "Your avatar learns and improves with every interaction."
  }
];

const benefits = [
  {
    title: "Higher Engagement",
    description: "Face-to-face interactions drive 3x more engagement than chatbots."
  },
  {
    title: "Increased Sales",
    description: "25% increase in customer engagement leads to larger basket sizes."
  },
  {
    title: "Always Available",
    description: "Personal service that never sleeps, available 24/7."
  },
  {
    title: "Brand Consistency",
    description: "Perfect service delivery every time, ensuring 100% brand consistency."
  }
];

const whyChooseUs = [
  {
    title: "Simple Implementation",
    description: "We make implementing advanced AI simple and successful."
  },
  {
    title: "Expert Support",
    description: "Our expert team ensures your avatar delivers measurable results from day one."
  },
  {
    title: "Seamless Management",
    description: "We handle the complexities of AI deployment so you can focus on what matters most."
  },
  {
    title: "Ongoing Optimization",
    description: "We continuously refine and enhance your AI Avatar to ensure peak performance and measurable impact."
  }
];

export default AvatarAI;