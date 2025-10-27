import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CommunicationsAI = () => {
  return (
    <>
      <SEO
        title="CommunicationsAI Services | WhitegloveAI"
        description="Transform your communications with AI-powered solutions including AutomateAI, AvatarAI, TextAI, and VoiceAI."
        canonicalPath="/communicationsai"
      />
      <PageWrapper className="bg-background text-foreground">
        <div className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">CommunicationsAI</h1>
          <p className="text-lg mb-8 text-muted-foreground">
            Revolutionize how you communicate with AI-powered tools that enhance efficiency, engagement, and reach.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Link to="/communicationsai/automateai" className="p-6 border border-border rounded-lg hover:border-primary transition-colors">
              <h2 className="text-2xl font-semibold mb-2">AutomateAI</h2>
              <p className="text-muted-foreground mb-4">Intelligent workflow automation</p>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
            
            <Link to="/communicationsai/avatarai" className="p-6 border border-border rounded-lg hover:border-primary transition-colors">
              <h2 className="text-2xl font-semibold mb-2">AvatarAI</h2>
              <p className="text-muted-foreground mb-4">Digital avatar solutions</p>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
            
            <Link to="/communicationsai/textai" className="p-6 border border-border rounded-lg hover:border-primary transition-colors">
              <h2 className="text-2xl font-semibold mb-2">TextAI</h2>
              <p className="text-muted-foreground mb-4">Advanced text processing and generation</p>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
            
            <Link to="/communicationsai/voiceai" className="p-6 border border-border rounded-lg hover:border-primary transition-colors">
              <h2 className="text-2xl font-semibold mb-2">VoiceAI</h2>
              <p className="text-muted-foreground mb-4">Voice synthesis and recognition</p>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default CommunicationsAI;
