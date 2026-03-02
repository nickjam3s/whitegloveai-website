import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import StandardHero from "@/components/shared/StandardHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Shield,
  ArrowRight,
  ExternalLink,
  BarChart3,
  TrendingUp,
  GraduationCap,
  Lock,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  Building2,
  Landmark,
} from "lucide-react";

const curriculumModules = [
  {
    number: 1,
    title: "AI in Government",
    duration: "25 Min",
    icon: BookOpen,
    topics: [
      "What is AI? Definition & key types",
      "Machine Learning, NLP, Generative AI",
      "Government use cases & examples",
      "Common AI tools in the workplace",
      "Authorization requirements",
    ],
  },
  {
    number: 2,
    title: "Risks & Limitations",
    duration: "25 Min",
    icon: AlertTriangle,
    topics: [
      "AI hallucinations & inaccuracy",
      "Data bias & fairness concerns",
      "Deepfakes & AI-powered phishing",
      "Risk classification framework",
      "Legal prohibitions (HB 3512)",
    ],
  },
  {
    number: 3,
    title: "Best Practices",
    duration: "25 Min",
    icon: Lightbulb,
    topics: [
      "Human oversight & control",
      "Privacy & data security",
      "Transparency & disclosure",
      "Accuracy & verification",
      "Accountability principles",
    ],
  },
];

const portalFeatures = [
  {
    icon: BarChart3,
    title: "Manager Dashboard",
    description:
      "Monitor employee progress, completion rates, and assessment scores in real time.",
  },
  {
    icon: TrendingUp,
    title: "Compliance Analytics",
    description:
      "Track organization-wide compliance status with exportable reports for audits.",
  },
  {
    icon: GraduationCap,
    title: "Auto Certificates",
    description:
      "Certificates of completion are issued automatically upon passing the assessment.",
  },
  {
    icon: Lock,
    title: "Secure & Accessible",
    description:
      "Mobile-friendly and WCAG-compliant for all employees.",
  },
];

const stats = [
  { value: "90", label: "Minutes" },
  { value: "3", label: "Modules" },
  { value: "50", label: "Assessment Questions" },
  { value: "100%", label: "Online & Self-Paced" },
];

const complianceChecks = [
  "Meets Texas Government Code Section 2054.5193 (HB 3512)",
  "Certified by the Texas Department of Information Resources (DIR)",
  "Satisfies annual AI awareness training mandate for all employees",
  "Includes 50-question assessment with certificate of completion",
];

const Academy = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="AI Awareness Training for Texas Government | DIR Certified | WhitegloveAI"
        description="The official 90-minute DIR-certified AI awareness course for Texas HB 3512 compliance. One of only four approved vendors. Request a quote today."
        canonicalPath="/training/academy"
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <StandardHero
          title="AI Awareness Training for Texas Government Employees"
          subtitle="The official, 90-minute course certified by the Texas Department of Information Resources (DIR) to meet your HB 3512 compliance requirements. As one of only four approved vendors, we provide a comprehensive, turnkey solution for state and local agencies."
          height="large"
          backgroundVariant="ambient"
          primaryCTA={{
            text: "Request a Quote",
            href: "/contact",
            icon: ArrowRight,
          }}
          secondaryCTA={{
            text: "View DIR Official Page",
            href: "https://dir.texas.gov/statewide-artificial-intelligence-ai-awareness-training",
            external: true,
            icon: ExternalLink,
          }}
        />

        {/* Stats Bar */}
        <section className="py-10" style={{ backgroundColor: "#F0F9FF" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base text-[#4a6fa5] mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                A Curriculum Built for Compliance
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Three focused modules designed to meet every requirement of HB 3512.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {curriculumModules.map((mod) => {
                const Icon = mod.icon;
                return (
                  <Card
                    key={mod.number}
                    className="border-border bg-card hover:border-secondary/50 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            Module {mod.number}: {mod.title}
                          </h3>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {mod.duration}
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {mod.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Hosted Training Portal Features */}
        <section className="py-20 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                A Fully-Managed Training Experience
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything your organization needs to deploy, track, and report on AI awareness training.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {portalFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={feature.title}
                    className="border-border bg-card text-center hover:border-secondary/50 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* DIR Seal & Compliance */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-foreground">
              100% DIR Certified
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
              <img
                src="/images/seals/DIR_AI_Training_Seal_2025-2026.png"
                alt="DIR AI Training Seal 2025-2026 - State Certified"
                className="w-[150px] h-[150px] object-contain flex-shrink-0"
              />
              <ul className="space-y-4 max-w-xl">
                {complianceChecks.map((check) => (
                  <li
                    key={check}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-base">{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Procurement Guidance */}
        <section className="py-20 bg-muted/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Simple Procurement for Government
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="h-6 w-6 text-secondary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      Local Governments
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Cities, counties, and school districts can procure directly
                    from WhitegloveAI with no additional requirements. Contact us
                    for a quote.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Landmark className="h-6 w-6 text-secondary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      State Agencies
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    State agencies are required to purchase through a DIR contract
                    or obtain a procurement exemption. Contact us for guidance on
                    available options.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Ensure Compliance?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get your organization compliant with HB 3512. We make it simple.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="text-lg px-10 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Academy;
