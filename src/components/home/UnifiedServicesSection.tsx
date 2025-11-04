import React from 'react';
import { Target, Map, Shield, MessageSquare, Phone, User, Bot as BotIcon, Building2, FileCheck, TrendingUp, Languages, Globe, Users, GraduationCap, Award, Lightbulb, Rocket, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';

const UnifiedServicesSection = () => {
  return (
    <div className="space-y-20">
      {/* Section Header */}
      <div className="text-center animate-fade-up">
        <h2 className="text-3xl font-semibold mb-4 heading-highlight-scroll text-white">
          End-to-End AI Solutions, Tailored to Your Mission
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          From strategy to execution, we deliver comprehensive AI solutions designed for your unique needs.
        </p>
      </div>

      {/* Section 1: Consulting */}
      <div className="bg-background/50 rounded-xl p-12 border border-secondary/30 animate-fade-up">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-4 text-[#9b87f5]">
            Strategic AI Consulting
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access fractional Chief AI Officer expertise and strategic AI leadership without the full-time cost. We help you accelerate your AI transformation with expert guidance tailored to your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <Target className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Strategic AI Leadership</h4>
            <p className="text-gray-300 text-center relative">
              C-level AI expertise and strategic guidance at a fraction of the full-time cost
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <Map className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Bridge the AI Knowledge Gap</h4>
            <p className="text-gray-300 text-center relative">
              Translate complex AI concepts into clear business strategies your organization can understand
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <Shield className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Ethical & Responsible AI</h4>
            <p className="text-gray-300 text-center relative">
              Navigate AI ethics, compliance, and governance including TRAIGA requirements
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/consulting">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Section 2: CommunicationsAI */}
      <div className="bg-background/50 rounded-xl p-12 border border-secondary/30 animate-fade-up">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-4 text-[#9b87f5]">
            CommunicationsAI: Powered by Lucidis
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unify every conversation across chat, voice, and text. Our proprietary Lucidis platform transforms scattered interactions into intelligent, automated workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <MessageSquare className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">TextAI</h4>
            <p className="text-gray-300 text-center relative">
              Intelligent chat, SMS, and email automation
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <Phone className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">VoiceAI</h4>
            <p className="text-gray-300 text-center relative">
              Natural conversational phone systems, 24/7
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <User className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">AvatarAI</h4>
            <p className="text-gray-300 text-center relative">
              Lifelike digital humans for face-to-face engagement
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <BotIcon className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">AutomateAI</h4>
            <p className="text-gray-300 text-center relative">
              Intelligent workflows that integrate with your systems
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/communicationsai">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              Explore CommunicationsAI
            </Button>
          </Link>
        </div>
      </div>

      {/* Section 3: GovAI */}
      <div className="bg-background/50 rounded-xl p-12 border border-secondary/30 animate-fade-up">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-4 text-[#9b87f5]">
            GovAI: Built for Government, Proven in Government
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized AI solutions designed for the public sector. TXShare-approved, SOC 2 Type II certified, and trusted by Texas cities and school districts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <Building2 className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Streamlined Procurement</h4>
            <p className="text-gray-300 text-center relative">
              Available through TXShare contracts #2025-023 and #2025-018
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <TrendingUp className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Proven Results</h4>
            <p className="text-gray-300 text-center relative">
              Saving 15-20 staff hours/week for cities like Frisco
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <FileCheck className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Government-Grade Security</h4>
            <p className="text-gray-300 text-center relative">
              SOC 2 Type II compliance built in from day one
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/govai">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              Explore GovAI Solutions
            </Button>
          </Link>
        </div>
      </div>

      {/* Section 4: The AI Lab */}
      <div className="bg-background/50 rounded-xl p-12 border border-secondary/30 animate-fade-up">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-4 text-[#9b87f5]">
            The AI Lab: Custom AI Development
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Turn your AI vision into reality in as fast as 4 weeks. From rapid prototyping to full-scale custom implementations, we build intelligent solutions tailored to your unique challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <Lightbulb className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Rapid Prototyping</h4>
            <p className="text-gray-300 text-center relative">
              Secure MVPs in weeks, not months
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <Rocket className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Full-Lifecycle Development</h4>
            <p className="text-gray-300 text-center relative">
              Turnkey AI solutions from ideation to launch
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <Wrench className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Technical Consultation</h4>
            <p className="text-gray-300 text-center relative">
              Expert guidance for complex AI challenges
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/ailab">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              Start Your AI Project
            </Button>
          </Link>
        </div>
      </div>

      {/* Section 5: TranslateAI */}
      <div className="bg-background/50 rounded-xl p-12 border border-secondary/30 animate-fade-up">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-4 text-[#9b87f5]">
            TranslateAI: Break Language Barriers
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Provide real-time AI-powered translation and localization services for events, meetings, and multilingual communications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <Languages className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Live Event Translation</h4>
            <p className="text-gray-300 text-center relative">
              Real-time translation for conferences and events
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <Globe className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Multilingual Support</h4>
            <p className="text-gray-300 text-center relative">
              Support for 100+ languages
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <Users className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Proven Track Record</h4>
            <p className="text-gray-300 text-center relative">
              94% satisfaction rate at Dallas Baptist University
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/translateai">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Section 6: Training */}
      <div className="bg-background/50 rounded-xl p-12 border border-secondary/30 animate-fade-up">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-4 text-[#9b87f5]">
            AI Training & Certification
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empower your workforce with expert-led AI training programs designed for all skill levels. Build internal AI expertise to drive long-term success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <GraduationCap className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Executive AI Literacy</h4>
            <p className="text-gray-300 text-center relative">
              Strategic AI understanding for leadership
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <Users className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Technical AI Implementation</h4>
            <p className="text-gray-300 text-center relative">
              Hands-on training for IT and development teams
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_0_rgba(155,135,245,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(155,135,245,0.4),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-secondary/20 backdrop-blur-xl p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 relative">
              <Award className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5] relative">Certification Programs</h4>
            <p className="text-gray-300 text-center relative">
              Industry-recognized AI certifications
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/training">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              Explore Training Programs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnifiedServicesSection;
