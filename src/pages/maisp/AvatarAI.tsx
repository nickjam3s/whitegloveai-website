import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, QrCode, ShoppingBag, Video, Building2, MessagesSquare, Users, Building, HeartHandshake, Wallet, Users2, Store, BarChart4, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const AvatarAI = () => {
  useEffect(() => {
    // Load the Typeform script
    const typeformScript = document.createElement('script');
    typeformScript.src = "//embed.typeform.com/next/embed.js";
    typeformScript.defer = true;
    document.body.appendChild(typeformScript);

    return () => {
      document.body.removeChild(typeformScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#7928CA,transparent_60%)] opacity-25" style={{
            transformOrigin: '60% 40%',
            animation: 'morphing 12s ease-in-out infinite, rotating 15s linear infinite'
          }}></div>
          <div className="absolute inset-0 backdrop-blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight">
              Managed AvatarAI Service
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              WhitegloveAI's AvatarAI Streaming Avatar Service brings lifelike digital assistants to your business, creating genuine face-to-face connections that transform customer experiences across all channels.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://calendar.app.google/WMxWU6Q1rorYy2cMA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="https://avatar.labs.whitegloveai.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors border border-secondary/50">
                Try Demo
                <Video className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            The Next Evolution in Personal Connection
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {evolutionFeatures.map((feature, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <feature.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transform Experience Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Transform Your Customer Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {transformExperience.map((experience, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">{experience.title}</h3>
                <p className="text-gray-400 mb-6">{experience.description}</p>
                <ul className="space-y-4">
                  {experience.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-6 text-center heading-highlight-scroll">
            Use Cases
          </h2>
          <h3 className="text-xl text-gray-400 mb-16 text-center">
            Perfect For Various Industries
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <industry.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            The Ultimate Omnichannel Experience: A Retail Case Study
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudySteps.map((step, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            How It Works (The Simple Version)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="text-4xl font-bold text-secondary mb-4">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Real Benefits You'll See
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <BarChart4 className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Why Choose WhitegloveAI?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <Shield className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Contact Us
          </h2>
          <div data-tf-live="01JMAMXNY7NHGYM2YQDXCDRDW6"></div>
        </div>
      </section>
    </div>
  );
};

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
