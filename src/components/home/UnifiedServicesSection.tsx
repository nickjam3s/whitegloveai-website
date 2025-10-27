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
            Navigate the complexities of AI adoption with expert guidance. From AI readiness assessments to governance frameworks, we ensure your AI initiatives succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">AI Readiness & Strategy</h4>
            <p className="text-gray-400 text-center">
              We assess your current state and develop a comprehensive roadmap
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Map className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Use Case Prioritization</h4>
            <p className="text-gray-400 text-center">
              Identify high-ROI opportunities aligned with your goals
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Governance & Compliance</h4>
            <p className="text-gray-400 text-center">
              Establish robust frameworks including TRAIGA compliance
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
          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">TextAI</h4>
            <p className="text-gray-400 text-center">
              Intelligent chat, SMS, and email automation
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">VoiceAI</h4>
            <p className="text-gray-400 text-center">
              Natural conversational phone systems, 24/7
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">AvatarAI</h4>
            <p className="text-gray-400 text-center">
              Lifelike digital humans for face-to-face engagement
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <BotIcon className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">AutomateAI</h4>
            <p className="text-gray-400 text-center">
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
          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Streamlined Procurement</h4>
            <p className="text-gray-400 text-center">
              Available through TXShare contracts #2025-023 and #2025-018
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Proven Results</h4>
            <p className="text-gray-400 text-center">
              Saving 15-20 staff hours/week for cities like Frisco
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <FileCheck className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Government-Grade Security</h4>
            <p className="text-gray-400 text-center">
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
          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Rapid Prototyping</h4>
            <p className="text-gray-400 text-center">
              Secure MVPs in weeks, not months
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Full-Lifecycle Development</h4>
            <p className="text-gray-400 text-center">
              Turnkey AI solutions from ideation to launch
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Wrench className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Technical Consultation</h4>
            <p className="text-gray-400 text-center">
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
          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Languages className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Live Event Translation</h4>
            <p className="text-gray-400 text-center">
              Real-time translation for conferences and events
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Multilingual Support</h4>
            <p className="text-gray-400 text-center">
              Support for 100+ languages
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Proven Track Record</h4>
            <p className="text-gray-400 text-center">
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
          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Executive AI Literacy</h4>
            <p className="text-gray-400 text-center">
              Strategic AI understanding for leadership
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Technical AI Implementation</h4>
            <p className="text-gray-400 text-center">
              Hands-on training for IT and development teams
            </p>
          </div>

          <div className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
            <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-center text-[#9b87f5]">Certification Programs</h4>
            <p className="text-gray-400 text-center">
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
