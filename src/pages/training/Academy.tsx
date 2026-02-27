import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import StandardHero from "@/components/shared/StandardHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Shield, ArrowRight, ExternalLink } from "lucide-react";
import { HB3512Chatbot } from "@/components/training/HB3512Chatbot";

const modules = [
  {
    number: 1,
    title: "AI Fundamentals for Public Sector",
    description: "Understand what AI is, how it works, and how Texas agencies are using it today. Covers key terminology, capabilities, and limitations relevant to government operations.",
    duration: "30 min"
  },
  {
    number: 2,
    title: "Responsible AI Use & Ethics",
    description: "Learn to identify bias, ensure transparency, and apply ethical frameworks when using AI tools in government decision-making and citizen services.",
    duration: "30 min"
  },
  {
    number: 3,
    title: "Security, Privacy & Compliance",
    description: "Understand data privacy risks, cybersecurity considerations, and how to comply with Texas HB 3512 requirements for AI use in government.",
    duration: "30 min"
  }
];

const Academy = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="AI Awareness for Texas Public Sector | DIR Certified | WhitegloveAI"
        description="The official 90-minute DIR-certified AI awareness course for Texas HB 3512 compliance. Enroll now to meet your state training requirements."
        canonicalPath="/training/academy"
      />

      <div className="min-h-screen bg-background">
        <StandardHero
          title="AI Awareness for Texas Public Sector Employees"
          subtitle="The official, 90-minute course certified by the Texas DIR to meet your HB 3512 compliance requirements."
          height="large"
          backgroundVariant="ambient"
          primaryCTA={{
            text: "Enroll Now",
            href: "https://academy.whitegloveai.com",
            external: true,
            icon: ArrowRight
          }}
          secondaryCTA={{
            text: "View DIR Official Page",
            href: "https://dir.texas.gov/statewide-artificial-intelligence-ai-awareness-training",
            external: true,
            icon: ExternalLink
          }}
        />

        {/* DIR Seal & Certification Banner */}
        <section className="py-12 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
              <img
                src="/images/seals/DIR_AI_Training_Seal_2025-2026.png"
                alt="DIR AI Training Seal 2025-2026 - State Certified"
                className="w-40 h-40 md:w-48 md:h-48 object-contain"
              />
              <div className="text-center md:text-left max-w-xl">
                <h2 className="text-2xl font-bold mb-2 text-foreground">State Certified by the Texas DIR</h2>
                <p className="text-muted-foreground text-lg">
                  This course is officially certified by the Texas Department of Information Resources (DIR) for the 2025–2026 training cycle under HB 3512.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">3-Module Course Outline</h2>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span className="text-lg">Total Duration: 90 Minutes</span>
              </div>
            </div>

            <div className="grid gap-6">
              {modules.map((mod) => (
                <Card key={mod.number} className="border-border bg-card hover:border-secondary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-secondary">{mod.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{mod.title}</h3>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {mod.duration}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{mod.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Benefits */}
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">DIR Certified</h4>
                  <p className="text-sm text-muted-foreground">Officially approved for HB 3512 compliance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">90 Minutes</h4>
                  <p className="text-sm text-muted-foreground">Complete at your own pace, anytime</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Certificate Included</h4>
                  <p className="text-sm text-muted-foreground">Proof of completion for your records</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <a href="https://academy.whitegloveai.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-10 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* HB3512 Compliance Advisor Chatbot */}
        <section id="hb3512-advisor" className="py-16 bg-muted/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 text-foreground">HB3512 Compliance Advisor</h2>
              <p className="text-muted-foreground">Have questions about HB 3512 requirements? Ask our AI advisor.</p>
            </div>
            <HB3512Chatbot embedded />
          </div>
        </section>
      </div>
    </>
  );
};

export default Academy;
