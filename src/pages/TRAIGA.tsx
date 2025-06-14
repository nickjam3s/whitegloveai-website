import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Calendar, ExternalLink, Code, Building, Heart, GraduationCap, Home, DollarSign, Shield, AlertTriangle, CheckCircle, Users, Timer, FileText, Play, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { fetchYouTubePlaylist } from '@/services/youtubeService';
import { fetchBeehiivPosts, NewsletterEntry } from '@/services/beehiivService';

const TRAIGA = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(true);
  const [newsletterEntries, setNewsletterEntries] = useState<NewsletterEntry[]>([]);
  const [loadingNewsletter, setLoadingNewsletter] = useState(true);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    // Countdown timer calculation
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-01-01T00:00:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        
        setTimeLeft({ days, hours, minutes });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    // SEO Meta Tags
    document.title = "TRAIGA Triage Center | Prepare for Texas AI Compliance with WhitegloveAI";
    
    // Remove existing meta tags if they exist
    const existingMeta = document.querySelector('meta[name="description"]');
    if (existingMeta) {
      existingMeta.remove();
    }
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Learn how to comply with the Texas Responsible AI Governance Act (TRAIGA). Access readiness tools, expert guidance, and AI compliance resources from WhitegloveAI.';
    document.head.appendChild(metaDescription);

    // Add keywords meta tag
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'Texas Responsible AI Governance Act, TRAIGA compliance, AI regulation Texas, HB 149 AI law, AI deployer obligations, Texas AI law 2025, WhitegloveAI TRAIGA, high-risk AI systems';
    document.head.appendChild(metaKeywords);

    // Add canonical URL
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://www.whitegloveai.com/traiga';
    document.head.appendChild(canonical);

    // Add Open Graph meta tags for custom thumbnail
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'TRAIGA Triage Center | Texas AI Compliance with WhitegloveAI';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Navigate the Texas Responsible AI Governance Act with expert guidance and compliance tools from WhitegloveAI.';
    document.head.appendChild(ogDescription);

    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.content = 'https://www.whitegloveai.com/lovable-uploads/4b26cf48-8284-40f8-9bd7-9f85f49234a5.png';
    document.head.appendChild(ogImage);

    const ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.content = 'https://www.whitegloveai.com/traiga';
    document.head.appendChild(ogUrl);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);

    // Add Twitter Card meta tags
    const twitterCard = document.createElement('meta');
    twitterCard.name = 'twitter:card';
    twitterCard.content = 'summary_large_image';
    document.head.appendChild(twitterCard);

    const twitterTitle = document.createElement('meta');
    twitterTitle.name = 'twitter:title';
    twitterTitle.content = 'TRAIGA Triage Center | Texas AI Compliance with WhitegloveAI';
    document.head.appendChild(twitterTitle);

    const twitterDescription = document.createElement('meta');
    twitterDescription.name = 'twitter:description';
    twitterDescription.content = 'Navigate the Texas Responsible AI Governance Act with expert guidance and compliance tools from WhitegloveAI.';
    document.head.appendChild(twitterDescription);

    const twitterImage = document.createElement('meta');
    twitterImage.name = 'twitter:image';
    twitterImage.content = 'https://www.whitegloveai.com/lovable-uploads/4b26cf48-8284-40f8-9bd7-9f85f49234a5.png';
    document.head.appendChild(twitterImage);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is TRAIGA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TRAIGA is Texas's comprehensive AI regulation bill, modeled after the EU AI Act. It establishes requirements for AI developers, deployers, and distributors operating in or affecting Texas residents."
          }
        },
        {
          "@type": "Question",
          "name": "When does TRAIGA take effect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Texas Responsible AI Governance Act is expected to take effect on September 1, 2025, with enforcement beginning January 1, 2026."
          }
        },
        {
          "@type": "Question",
          "name": "Who does TRAIGA apply to?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TRAIGA applies to any entity that develops, deploys, or distributes AI systems that impact Texas residents, regardless of where the company is located."
          }
        },
        {
          "@type": "Question",
          "name": "What are high-risk AI systems under TRAIGA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "High-risk AI systems are those used in critical domains like hiring, healthcare, finance, housing, and education that could significantly impact individuals' rights or opportunities."
          }
        },
        {
          "@type": "Question",
          "name": "What documentation is required for TRAIGA compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Developers must maintain technical documentation, risk assessments, and compliance records. AI deployers must document their governance processes and impact assessments."
          }
        },
        {
          "@type": "Question",
          "name": "Are there penalties for non-compliance with Texas AI law 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, TRAIGA includes significant penalties for violations, including fines and potential enforcement actions by the Texas Attorney General's office."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if my AI system is covered by HB 149 AI law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use our TRAIGA Readiness Assessment to determine if your AI systems fall under the law's scope and what compliance steps you may need to take."
          }
        },
        {
          "@type": "Question",
          "name": "What about AI used for research under TRAIGA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Certain research activities may qualify for exemptions, particularly those conducted by academic institutions or in controlled research environments."
          }
        },
        {
          "@type": "Question",
          "name": "How does TRAIGA compare to other AI regulations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TRAIGA is the first U.S. state law modeled after the EU AI Act, making Texas a pioneer in comprehensive AI regulation at the state level."
          }
        },
        {
          "@type": "Question",
          "name": "What is the innovation sandbox in Texas AI regulation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The innovation sandbox allows companies to test new AI technologies under relaxed regulatory requirements for a limited time and scope."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to register my AI system under TRAIGA compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "High-risk AI systems may require registration and ongoing reporting. The specific requirements depend on your system's classification and use case."
          }
        },
        {
          "@type": "Question",
          "name": "How can WhitegloveAI help with TRAIGA compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WhitegloveAI offers expert-led workshops, virtual CAIO services, compliance assessments, and tailored strategies to help you navigate TRAIGA requirements effectively."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    
    // Load the Typeform script for the readiness assessment
    const typeformScript = document.createElement('script');
    typeformScript.src = "//embed.typeform.com/next/embed.js";
    typeformScript.defer = true;
    document.body.appendChild(typeformScript);

    // Load real content
    loadRealContent();

    return () => {
      clearInterval(timer);
      // Cleanup meta tags
      const metaDesc = document.querySelector('meta[name="description"]');
      const metaKeys = document.querySelector('meta[name="keywords"]');
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      const schemaScript = document.querySelector('script[type="application/ld+json"]');
      
      // Cleanup Open Graph meta tags
      const ogTitleTag = document.querySelector('meta[property="og:title"]');
      const ogDescTag = document.querySelector('meta[property="og:description"]');
      const ogImageTag = document.querySelector('meta[property="og:image"]');
      const ogUrlTag = document.querySelector('meta[property="og:url"]');
      const ogTypeTag = document.querySelector('meta[property="og:type"]');
      
      // Cleanup Twitter Card meta tags
      const twitterCardTag = document.querySelector('meta[name="twitter:card"]');
      const twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
      const twitterDescTag = document.querySelector('meta[name="twitter:description"]');
      const twitterImageTag = document.querySelector('meta[name="twitter:image"]');
      
      if (metaDesc) metaDesc.remove();
      if (metaKeys) metaKeys.remove();
      if (canonicalLink) canonicalLink.remove();
      if (schemaScript) schemaScript.remove();
      if (ogTitleTag) ogTitleTag.remove();
      if (ogDescTag) ogDescTag.remove();
      if (ogImageTag) ogImageTag.remove();
      if (ogUrlTag) ogUrlTag.remove();
      if (ogTypeTag) ogTypeTag.remove();
      if (twitterCardTag) twitterCardTag.remove();
      if (twitterTitleTag) twitterTitleTag.remove();
      if (twitterDescTag) twitterDescTag.remove();
      if (twitterImageTag) twitterImageTag.remove();
      
      document.body.removeChild(typeformScript);
    };
  }, []);

  const loadRealContent = async () => {
    try {
      setLoadingVideos(true);
      setLoadingNewsletter(true);
      setApiError(null);
      
      // Load newsletter entries from Beehiiv API
      console.log('Starting to load Beehiiv content...');
      const latestNewsletters = await fetchBeehiivPosts();
      console.log('Loaded newsletters:', latestNewsletters);
      setNewsletterEntries(latestNewsletters);
      
      // Fetch real YouTube videos
      const videos = await fetchYouTubePlaylist('PLhbRcrokyx5crQ2HE9tDwIH-ecT1BIutW');
      setYoutubeVideos(videos);
    } catch (error) {
      console.error('Error loading content:', error);
      setApiError('Unable to load latest content. Displaying cached articles.');
    } finally {
      setLoadingVideos(false);
      setLoadingNewsletter(false);
    }
  };

  const scrollToAssessment = () => {
    const element = document.getElementById('readiness-assessment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const timelineItems = [
    { date: "May 2025", event: "HB 149 AI Law Passed", status: "completed" },
    { date: "Summer 2025", event: "Signed into Law", status: "upcoming" },
    { date: "Sept 1, 2025", event: "Texas AI Law 2025 Takes Effect", status: "upcoming" },
    { date: "Jan 1, 2026", event: "TRAIGA Enforcement Begins", status: "upcoming" }
  ];

  const billSections = [
    {
      title: "High-Risk AI Systems Under TRAIGA",
      content: "AI systems that significantly impact hiring, healthcare, finance, housing, or education decisions are subject to enhanced requirements including impact assessments and ongoing monitoring under the Texas Responsible AI Governance Act."
    },
    {
      title: "AI Developer & Deployer Responsibilities", 
      content: "Under TRAIGA compliance requirements, developers must conduct risk assessments and provide documentation. AI deployers must implement appropriate governance measures and ensure transparency to users."
    },
    {
      title: "Prohibited AI Practices in Texas",
      content: "Certain AI applications are banned outright under HB 149 AI law, including those that manipulate human behavior in harmful ways or use subliminal techniques beyond user awareness."
    },
    {
      title: "Generative AI Requirements Under Texas AI Regulation",
      content: "Foundation models and generative AI systems must meet specific transparency requirements and provide clear disclosures about their capabilities and limitations per TRAIGA compliance standards."
    },
    {
      title: "State Agency AI Disclosures",
      content: "Government agencies using AI systems must provide public disclosure and maintain transparency about automated decision-making processes affecting Texas citizens under the new AI regulation."
    },
    {
      title: "TRAIGA Penalties & Enforcement",
      content: "Violations of the Texas Responsible AI Governance Act can result in significant fines and enforcement actions. The Texas Attorney General's office will oversee compliance and investigate violations."
    },
    {
      title: "Exemptions & Innovation Sandbox",
      content: "Certain research activities and small-scale deployments may qualify for exemptions under Texas AI law 2025. An innovation sandbox program allows controlled testing of new AI technologies."
    }
  ];

  const faqItems = [
    {
      question: "What is TRAIGA?",
      answer: "TRAIGA is Texas's comprehensive AI regulation bill, modeled after the EU AI Act. It establishes requirements for AI developers, deployers, and distributors operating in or affecting Texas residents."
    },
    {
      question: "When does TRAIGA take effect?", 
      answer: "The Texas Responsible AI Governance Act is expected to take effect on September 1, 2025, with enforcement beginning January 1, 2026."
    },
    {
      question: "Who does TRAIGA apply to?",
      answer: "TRAIGA applies to any entity that develops, deploys, or distributes AI systems that impact Texas residents, regardless of where the company is located."
    },
    {
      question: "What are high-risk AI systems under TRAIGA?",
      answer: "High-risk AI systems are those used in critical domains like hiring, healthcare, finance, housing, and education that could significantly impact individuals' rights or opportunities."
    },
    {
      question: "What documentation is required for TRAIGA compliance?",
      answer: "Developers must maintain technical documentation, risk assessments, and compliance records. AI deployers must document their governance processes and impact assessments."
    },
    {
      question: "Are there penalties for non-compliance with Texas AI law 2025?",
      answer: "Yes, TRAIGA includes significant penalties for violations, including fines and potential enforcement actions by the Texas Attorney General's office."
    },
    {
      question: "How do I know if my AI system is covered by HB 149 AI law?",
      answer: "Use our TRAIGA Readiness Assessment to determine if your AI systems fall under the law's scope and what compliance steps you may need to take."
    },
    {
      question: "What about AI used for research under TRAIGA?",
      answer: "Certain research activities may qualify for exemptions, particularly those conducted by academic institutions or in controlled research environments."
    },
    {
      question: "How does TRAIGA compare to other AI regulations?",
      answer: "TRAIGA is the first U.S. state law modeled after the EU AI Act, making Texas a pioneer in comprehensive AI regulation at the state level."
    },
    {
      question: "What is the innovation sandbox in Texas AI regulation?",
      answer: "The innovation sandbox allows companies to test new AI technologies under relaxed regulatory requirements for a limited time and scope."
    },
    {
      question: "Do I need to register my AI system under TRAIGA compliance?",
      answer: "High-risk AI systems may require registration and ongoing reporting. The specific requirements depend on your system's classification and use case."
    },
    {
      question: "How can WhitegloveAI help with TRAIGA compliance?",
      answer: "WhitegloveAI offers expert-led workshops, virtual CAIO services, compliance assessments, and tailored strategies to help you navigate TRAIGA requirements effectively."
    }
  ];

  // Optimized animation settings for better performance
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5, margin: "-100px" },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.3, margin: "-50px" },
    transition: { staggerChildren: 0.1, duration: 0.3 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sora">
      {/* Hero Section - Added proper top padding for mobile navigation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        {/* Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Optimized animated particles - reduced count and improved performance */}
          <div style={{ contain: 'layout', willChange: 'transform' }}>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full opacity-40"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.2, 0.6, 0.2], 
                  scale: [0.5, 1, 0.5],
                  x: [0, Math.random() * 20 - 10, 0],
                  y: [0, Math.random() * 20 - 10, 0]
                }}
                transition={{
                  duration: 4 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  transform: 'translate3d(0, 0, 0)'
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 gradient-text"
          >
            TRAIGA Triage Center: Your Hub for Texas AI Compliance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
          >
            Navigate the Texas Responsible AI Governance Act with expert guidance and compliance tools
          </motion.p>

          {/* Countdown Timer - Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center bg-primary/20 border border-primary/30 rounded-lg px-6 md:px-8 py-4 md:py-6 mb-4">
              <Timer className="h-6 w-6 md:h-8 md:w-8 text-primary mr-3 md:mr-4" />
              <span className="text-lg md:text-2xl lg:text-3xl font-semibold text-primary">
                TRAIGA Enforcement Begins In: 
              </span>
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              {timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes} Minutes
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button
              onClick={scrollToAssessment}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start TRAIGA Readiness Assessment
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What is TRAIGA Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            {...fadeInUp}
          >
            Understanding the Texas Responsible AI Governance Act
          </motion.h2>

          {/* Timeline */}
          <div className="mb-16">
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4"
              style={{ contain: 'layout' }}
              {...staggerChildren}
            >
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    item.status === 'completed' ? 'bg-green-600' : 'bg-primary'
                  }`}>
                    {item.status === 'completed' ? <CheckCircle className="h-8 w-8" /> : <span className="text-2xl font-bold">{index + 1}</span>}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.event}</h3>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  {index < timelineItems.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-20 h-0.5 bg-primary"></div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Key Points */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            style={{ contain: 'layout' }}
            {...staggerChildren}
          >
            {[
              "First U.S. state bill modeled after EU AI Act",
              "Covers AI developers, deployers, and distributors", 
              "Applies to any AI system impacting Texas residents"
            ].map((point, index) => (
              <motion.div
                key={index}
                className="text-center p-6 glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              >
                <p className="text-lg">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated Explainer Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            {...fadeInUp}
          >
            How AI Regulation Texas Works: HB 149 AI Law Framework
          </motion.h2>

          <div className="relative">
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Code className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold">AI Developer</h3>
              </div>
              
              <div className="flex-1 mx-8">
                <div className="h-1 bg-gradient-to-r from-primary to-secondary rounded"></div>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold">AI System</h3>
              </div>
              
              <div className="flex-1 mx-8">
                <div className="h-1 bg-gradient-to-r from-secondary to-primary rounded"></div>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold">Texas User</h3>
              </div>
            </motion.div>

            <motion.div
              className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              {[
                { domain: "Hiring", icon: Building },
                { domain: "Healthcare", icon: Heart },
                { domain: "Finance", icon: DollarSign },
                { domain: "Housing", icon: Home },
                { domain: "Education", icon: GraduationCap }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 glass-card">
                  <item.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold text-lg">{item.domain}</h4>
                  <p className="text-sm text-muted-foreground mt-2">High-Risk AI Domain</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bill Breakdown Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            {...fadeInUp}
          >
            TRAIGA Compliance Requirements: What's in HB 149 AI Law?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {billSections.map((section, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg glass-card">
                  <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:text-primary">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Resources Section - Updated Layout */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text"
            {...fadeInUp}
          >
            TRAIGA Compliance Resources & Tools
          </motion.h2>

          {/* Original TRAIGA legislation section */}
          <motion.div
            className="mb-8 bg-card/30 border border-border rounded-lg p-4 md:p-6 glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg mb-2">Want to read the original TRAIGA legislation?</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Access the full official version of HB 149 directly from the Texas Capitol.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <a 
                  href="https://capitol.texas.gov/tlodocs/89R/billtext/pdf/HB00149H.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-accent hover:bg-accent/90 text-white w-full md:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Download HB-149
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Reader-Friendly Version section - Same width as above */}
          <motion.div
            className="mb-16 bg-card/30 border border-border rounded-lg p-4 md:p-6 glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <Download className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg mb-2">Reader-Friendly Version of Texas AI Law 2025</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Download our simplified breakdown of TRAIGA's key provisions and AI deployer obligations.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <a 
                  href="https://jzaxt350p9j.typeform.com/to/xFzg0azE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full md:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* TRAIGA Expert Agent - Full width like above sections */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">WhitegloveAI TRAIGA Expert Agent</h3>
                <p className="text-muted-foreground mb-4">Chat with our AI agent for instant answers about Texas Responsible AI Governance Act compliance.</p>
                <div className="bg-white rounded-lg overflow-hidden">
                  <iframe
                    src="https://app.thinkstack.ai/bot/index.html?chatbot_id=6848c90420c59f9de50e9272&type=inline"
                    frameBorder="0"
                    width="100%"
                    height="400"
                    style={{ minHeight: '400px' }}
                    title="TRAIGA AI Compliance Agent"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Debug information for API issues */}
          {apiError && (
            <motion.div
              className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 text-yellow-800">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-medium">API Notice: {apiError}</span>
              </div>
            </motion.div>
          )}

          {/* 2-column layout for Newsletter and YouTube */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Real Newsletter Content from Beehiiv */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <FileText className="mr-2 text-primary" />
                    AI Executive Insights Newsletter
                  </h3>
                  <p className="text-muted-foreground mb-6">Latest insights covering TRAIGA compliance and AI governance from our Beehiiv publication.</p>
                  {loadingNewsletter ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border border-border rounded-lg p-4 animate-pulse">
                          <div className="flex items-start gap-3">
                            <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0"></div>
                            <div className="flex-1">
                              <div className="h-4 bg-muted rounded mb-2"></div>
                              <div className="h-3 bg-muted rounded w-1/2"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {newsletterEntries.map((entry) => (
                        <div key={entry.id} className="border border-border rounded-lg p-4 hover:bg-card/50 transition-colors">
                          <div className="flex items-start gap-3">
                            <img 
                              src={entry.thumbnail} 
                              alt={entry.title}
                              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm mb-1 line-clamp-2">{entry.title}</h4>
                              <p className="text-xs text-muted-foreground mb-2">{entry.date}</p>
                              {entry.id.startsWith('fallback') && (
                                <p className="text-xs text-yellow-600 mb-2">Cached Article</p>
                              )}
                              <a 
                                href={entry.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs text-primary hover:text-primary/80"
                              >
                                Read Article <ExternalLink className="ml-1 h-3 w-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Real YouTube Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Play className="mr-2 text-primary" />
                    WhitegloveAI: Texas TRAIGA Explained
                  </h3>
                  <p className="text-muted-foreground mb-6">Video series breaking down TRAIGA compliance requirements for business leaders.</p>
                  {loadingVideos ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border border-border rounded-lg p-4 animate-pulse">
                          <div className="flex items-start gap-3">
                            <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0"></div>
                            <div className="flex-1">
                              <div className="h-4 bg-muted rounded mb-2"></div>
                              <div className="h-3 bg-muted rounded w-1/2"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {youtubeVideos.map((video) => (
                        <div key={video.id} className="border border-border rounded-lg p-4 hover:bg-card/50 transition-colors">
                          <div className="flex items-start gap-3">
                            <img 
                              src={video.thumbnail} 
                              alt={video.title}
                              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm mb-1 line-clamp-2">{video.title}</h4>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                <Clock className="h-3 w-3" />
                                <span>{video.duration}</span>
                                <span>•</span>
                                <span>{video.uploadDate}</span>
                              </div>
                              <a 
                                href={video.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs text-primary hover:text-primary/80"
                              >
                                Watch Video <ExternalLink className="ml-1 h-3 w-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Coming Soon Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="glass-card opacity-60">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">TRAIGA Implementation Checklist</h3>
                <p className="text-muted-foreground mb-4">Comprehensive checklist for Texas AI regulation compliance preparation.</p>
                <Button disabled className="bg-muted text-muted-foreground">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card opacity-60">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">High-Risk AI System Tracker</h3>
                <p className="text-muted-foreground mb-4">Interactive tool to classify your AI systems under TRAIGA compliance standards.</p>
                <Button disabled className="bg-muted text-muted-foreground">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Readiness Assessment Section */}
      <section id="readiness-assessment" className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Start Your TRAIGA Readiness Assessment
          </motion.h2>
          
          <motion.div
            className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <p className="text-xl mb-4">
              TRAIGA is more than a policy—it's a legal shift in how AI must be developed and deployed in Texas.
            </p>
            <p className="text-lg mb-4">
              This assessment will help you determine if your organization is in scope, how "high-risk" your AI systems are, and whether you're ready to comply.
            </p>
            <p className="text-lg">
              It's fast, non-technical, and designed for business leaders and compliance owners.
            </p>
          </motion.div>

          <motion.div
            className="bg-background rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div 
              data-tf-live="01JXE4ZG1X8FP317J0M84716RA" 
              style={{ 
                minHeight: '600px',
                width: '100%',
                border: 'none'
              }}
            ></div>
          </motion.div>
        </div>
      </section>

      {/* Engage WhitegloveAI Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 gradient-text"
            {...fadeInUp}
          >
            Need Expert Help with Texas AI Regulation Compliance?
          </motion.h2>
          
          <motion.p
            className="text-xl text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            WhitegloveAI offers expert-led workshops, virtual CAIO services, and tailored TRAIGA compliance strategies. Let our team help you turn this regulatory shift into a growth opportunity while meeting all AI deployer obligations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <a 
              href="https://calendar.app.google/xXijsicKqwNeFnjA7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a TRAIGA Consultation
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            {...fadeInUp}
          >
            Frequently Asked Questions About TRAIGA Compliance
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-lg glass-card">
                  <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TRAIGA;
