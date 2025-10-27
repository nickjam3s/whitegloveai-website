import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Consulting = () => {
  return (
    <>
      <SEO
        title="AI Consulting Services | WhitegloveAI"
        description="Expert AI consulting services to guide your organization through AI adoption and implementation."
        canonicalPath="/consulting"
      />
      <PageWrapper className="bg-background text-foreground">
        <div className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">AI Consulting</h1>
          <p className="text-lg mb-8 text-muted-foreground">
            Strategic guidance and hands-on support to help your organization successfully adopt and implement AI solutions.
          </p>
          
          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Consulting Services</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• AI Strategy Development</li>
                <li>• Implementation Planning</li>
                <li>• Technology Assessment</li>
                <li>• Change Management</li>
                <li>• ROI Analysis</li>
              </ul>
            </div>
            
            <Link to="/traiga" className="block p-6 border border-border rounded-lg hover:border-primary transition-colors">
              <h2 className="text-2xl font-semibold mb-2">TRAIGA Triage Center</h2>
              <p className="text-muted-foreground mb-4">Navigate Texas AI compliance requirements</p>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Consulting;
