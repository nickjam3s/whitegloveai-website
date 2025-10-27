import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SEO from '@/components/SEO';

const Training = () => {
  return (
    <>
      <SEO
        title="AI Training Services | WhitegloveAI"
        description="Comprehensive AI training programs to upskill your team and prepare your organization for AI adoption."
        canonicalPath="/training"
      />
      <PageWrapper className="bg-background text-foreground">
        <div className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">AI Training</h1>
          <p className="text-lg mb-8 text-muted-foreground">
            Empower your team with the knowledge and skills needed to thrive in an AI-driven world.
          </p>
          
          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Training Programs</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• AI Fundamentals</li>
                <li>• Prompt Engineering</li>
                <li>• AI Tool Mastery</li>
                <li>• Ethical AI Use</li>
                <li>• Custom Workshops</li>
              </ul>
            </div>
            
            <div className="p-6 border border-border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Learning Formats</h2>
              <p className="text-muted-foreground mb-3">
                We offer flexible training options to meet your organization's needs:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• On-site workshops</li>
                <li>• Virtual instructor-led training</li>
                <li>• Self-paced online courses</li>
                <li>• Certification programs</li>
              </ul>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Training;
