import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SEO from '@/components/SEO';

const GovAI = () => {
  return (
    <>
      <SEO
        title="Government AI Solutions | WhitegloveAI"
        description="Specialized AI solutions designed for government agencies with a focus on security, compliance, and public service."
        canonicalPath="/govai"
      />
      <PageWrapper className="bg-background text-foreground">
        <div className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">GovAI</h1>
          <p className="text-lg mb-8 text-muted-foreground">
            Specialized AI solutions designed to meet the unique needs of government agencies and public sector organizations.
          </p>
          
          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Government-Ready AI</h2>
              <p className="text-muted-foreground mb-4">
                Our GovAI services are built with public sector requirements in mind, ensuring compliance with government regulations and security standards.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• FedRAMP and FISMA Compliance</li>
                <li>• Data Sovereignty & Privacy</li>
                <li>• Secure Deployment Options</li>
                <li>• Public Records Management</li>
                <li>• Citizen Services Enhancement</li>
              </ul>
            </div>
            
            <div className="p-6 border border-border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Procurement Support</h2>
              <p className="text-muted-foreground">
                As an approved vendor through the North Central Texas Council of Governments (NCTCOG), we're ready to serve government agencies through cooperative purchasing programs like TXShare.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Contract #2025-023 – AI Consulting Services
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default GovAI;
