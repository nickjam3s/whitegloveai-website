import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <>
      <SEO
        title="AI Services | WhitegloveAI"
        description="Explore our comprehensive AI services including consulting, communications AI, translation, training, and embodied AI solutions."
        canonicalPath="/services"
      />
      <PageWrapper className="bg-background text-foreground">
        <div className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Services</h1>
          <p className="text-lg mb-8 text-muted-foreground">
            WhitegloveAI offers a comprehensive suite of AI services designed to help your organization succeed in the age of AI.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Link to="/consulting" className="p-6 border border-border rounded-lg hover:border-primary transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Consulting</h2>
              <p className="text-muted-foreground mb-4">Strategic AI guidance and implementation support</p>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
            
            <Link to="/communicationsai" className="p-6 border border-border rounded-lg hover:border-primary transition-colors">
              <h2 className="text-2xl font-semibold mb-2">CommunicationsAI</h2>
              <p className="text-muted-foreground mb-4">AI-powered communication solutions</p>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
            
            <Link to="/translateai" className="p-6 border border-border rounded-lg hover:border-primary transition-colors">
              <h2 className="text-2xl font-semibold mb-2">TranslateAI</h2>
              <p className="text-muted-foreground mb-4">Advanced translation services</p>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
            
            <Link to="/training" className="p-6 border border-border rounded-lg hover:border-primary transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Training</h2>
              <p className="text-muted-foreground mb-4">AI education and upskilling programs</p>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
            
            <Link to="/embodiedai" className="p-6 border border-border rounded-lg hover:border-primary transition-colors">
              <h2 className="text-2xl font-semibold mb-2">EmbodiedAI</h2>
              <p className="text-muted-foreground mb-4">Physical AI and robotics solutions</p>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Services;
