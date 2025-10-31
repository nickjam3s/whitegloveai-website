
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import PageWrapper from '@/components/layout/PageWrapper';
import { useEffect, useLayoutEffect } from 'react';
import SEO from '@/components/SEO';

// Define the solutions data
const solutions = [
  {
    title: "AI Strategy & Implementation",
    description: "We help organizations develop and implement AI strategies tailored to their specific needs and goals.",
    features: [
      "AI readiness assessment",
      "Custom AI roadmap development",
      "Implementation planning & execution",
      "Change management support"
    ]
  },
  {
    title: "Text AI Services",
    description: "Our Text AI services help organizations extract value from unstructured text data across various channels.",
    features: [
      "Natural language processing",
      "Document analysis & summarization",
      "Chatbot & virtual assistant development",
      "Content generation & optimization"
    ]
  },
  {
    title: "Voice AI Solutions",
    description: "Transform customer interactions and operational efficiency with our advanced Voice AI solutions.",
    features: [
      "Voice recognition & analysis",
      "Conversational AI systems",
      "Voice biometrics",
      "IVR system enhancement"
    ]
  },
  {
    title: "Avatar AI Development",
    description: "Create digital representatives for your brand with our state-of-the-art Avatar AI technology.",
    features: [
      "Customized digital avatars",
      "Personality & brand alignment",
      "Multimodal interaction capabilities",
      "Integration with existing systems"
    ]
  },
  {
    title: "AI Automation",
    description: "Streamline operations and increase productivity with our comprehensive AI automation solutions.",
    features: [
      "Process optimization",
      "Workflow automation",
      "Intelligent document processing",
      "RPA integration with AI"
    ]
  },
  {
    title: "Custom AI Development",
    description: "Tailored AI solutions designed to address your organization's unique challenges and opportunities.",
    features: [
      "Custom ML model development",
      "AI application prototyping",
      "Enterprise AI integration",
      "Ongoing optimization & support"
    ]
  }
];

const Solutions = () => {
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
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <SEO
        title="AI Solutions for Every Industry | WhitegloveAI"
        description="Discover tailored AI solutions for healthcare, finance, government, retail, and more. Transform your operations with WhitegloveAI."
        canonicalPath="/solutions"
      />
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
            >
              Our Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Discover our comprehensive range of AI solutions designed to transform
              your business.
            </motion.p>
          </div>
          <ScrollAnimation targetId="solutions-grid" />
        </div>
      </section>

      <PageWrapper>
        <section id="solutions-grid" className="py-20 scroll-mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#7021EE]/10 p-6 rounded-lg border border-[#7021EE]/20 hover:border-[#7021EE]/40 transition-all duration-300"
              >
                <h2 className="text-xl font-semibold mb-4 text-white">{solution.title}</h2>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#7021EE] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </PageWrapper>
    </div>
  );
};

export default Solutions;
