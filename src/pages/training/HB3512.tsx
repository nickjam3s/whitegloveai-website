import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Building2, School, Users, FileCheck, AlertCircle, Shield } from "lucide-react";
import HeroBackground from "@/components/shared/HeroBackground";
import { CourseChatbot } from "@/components/training/CourseChatbot";
import ContactSection from "./components/ContactSection";
import { injectConduitStyles } from "@/utils/conduitStyleInjector";
import DirDisclaimer from "@/components/DirDisclaimer";

const HB3512 = () => {
  const navigate = useNavigate();

  const handleApplyRecommendedFilters = (courseNames: string[]) => {
    navigate('/training/catalogue', { 
      state: { recommendedCourses: courseNames } 
    });
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    
    // Load the Conduit.ai chat widget
    const script = document.createElement('script');
    script.src = "https://base.conduit.ai/widget/widget.min.js";
    script.async = true;
    script.setAttribute('data-widget-id', 'a577c803-4c1a-4b17-4b7d-2dc85a55b344');
    script.onload = () => {
      injectConduitStyles();
    };
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <SEO 
        title="Texas HB3512 AI Training Law - Compliance Guide 2025 | WhitegloveAI"
        description="Official Texas HB3512 AI training requirements explained. Mandatory for state agencies, local governments, schools by Sept 2025. TXShare Contract #2025-023 approved training solutions."
        canonicalPath="/training/hb3512"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <HeroBackground>
          <section className="relative overflow-hidden pt-32 pb-32 md:pt-40 md:pb-40 lg:pt-44 lg:pb-44">
            <div className="container px-4 mx-auto max-w-7xl relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  Texas HB3512: The New Mandatory AI Training Law Explained Clearly
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  A complete, plain-English guide to the new Texas government requirement — and how organizations can comply quickly, safely, and without disruption.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-8"
                    onClick={() => navigate('/training')}
                  >
                    Explore Training Programs
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-8"
                    onClick={() => navigate('/training/catalogue')}
                  >
                    View Course Catalogue
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </HeroBackground>
        {/* Top-of-page DIR disclaimer */}
        <DirDisclaimer />

        {/* TXShare Banner */}
        <section
          aria-label="TXShare Announcement"
          className="w-full bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 text-white border-t border-b border-primary/30 transition-colors hover:from-primary/20 hover:via-accent/20 hover:to-primary/20"
        >
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-3 py-2.5 md:flex-row md:items-center md:justify-between">
              <p className="text-center font-medium text-sm md:text-base md:flex-1">
                All Courses TXShare-Approved – Streamlined procurement for Texas public agencies through Contract #2025-023. WhitegloveAI is an approved vendor through the North Central Texas Council of Governments.
              </p>
              <div className="flex-shrink-0 md:ml-6">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-secondary hover:bg-secondary/90 text-white"
                >
                  <a
                    href="https://txshare.org/available-contracts/artificial-intelligence-ai-consultancy-services-9a4fd3af3342a4e1a6df4de8cbb21bc5/whitegloveai-llc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Our TXShare Listing
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Overview</h2>
            
            {/* Key Info Card */}
            <Card className="mb-8 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <p className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    Texas passed <span className="text-primary">House Bill 3512</span>
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Full force on <span className="font-semibold text-foreground">September 1, 2025</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Who It Affects */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Who This Affects</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Building2, title: "State Agencies", color: "text-blue-500" },
                  { icon: Building2, title: "Local Government", color: "text-green-500" },
                  { icon: School, title: "School Districts", color: "text-purple-500" },
                  { icon: FileCheck, title: "Grant Applicants", color: "text-orange-500" }
                ].map((entity, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all">
                    <CardContent className="pt-6">
                      <entity.icon className={`h-12 w-12 mx-auto mb-3 ${entity.color}`} />
                      <p className="font-semibold">{entity.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-4 text-sm">
                No ambiguity. No exceptions.
              </p>
            </div>

            {/* Requirements */}
            <div className="max-w-4xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Annual Training Requirements</h3>
              <p className="text-center text-muted-foreground mb-6">
                For employees who rely on a computer for at least 25% of their job:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-2 border-primary/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Shield className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">1. Cybersecurity Training</h4>
                        <p className="text-muted-foreground">Law requirement: cybersecurity training program certified by DIR</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">2. AI Training</h4>
                        <p className="text-muted-foreground">Law requirement: AI training program certified by DIR</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-lg font-semibold text-primary mb-2">Both required — every year</p>
              </div>
            </div>

            {/* WhitegloveAI Solution */}
            <Card className="max-w-4xl mx-auto border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 to-background">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-10 w-10 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-semibold mb-2">Your Compliance Partner</p>
                    <p className="text-muted-foreground">
                      WhitegloveAI built its <strong>AI Training & Certification Program</strong> specifically for HB3512 compliance: 
                      modern, accessible, and aligned to the same rigorous governance principles we use to serve enterprise, 
                      public sector, and SLED organizations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why This Law Exists */}
        <section className="py-16 bg-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why This Law Exists (Plain English)</h2>
            
            <p className="text-center text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              The State of Texas is moving fast to make sure that as AI becomes part of everyday government work, 
              employees understand:
            </p>

            {/* Key Understanding Points */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Responsible Use",
                  description: "How to use AI responsibly in government operations",
                  color: "text-blue-500"
                },
                {
                  icon: Shield,
                  title: "Risk Avoidance",
                  description: "How to avoid security, privacy, and compliance risks",
                  color: "text-red-500"
                },
                {
                  icon: AlertCircle,
                  title: "Data Protection",
                  description: "What data can and cannot be entered into AI tools",
                  color: "text-orange-500"
                },
                {
                  icon: CheckCircle2,
                  title: "Accuracy & Trust",
                  description: "How to verify accuracy, avoid hallucinations, and maintain public trust",
                  color: "text-green-500"
                }
              ].map((point, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <point.icon className={`h-8 w-8 ${point.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{point.title}</h3>
                        <p className="text-muted-foreground">{point.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Insight Cards */}
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-2 border-primary/30 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Intentional Pairing</h4>
                      <p className="text-muted-foreground">
                        The legislature paired AI training with cybersecurity training intentionally. 
                        AI is powerful, but mishandled it can create new attack surfaces, leak sensitive information, 
                        or produce bad decisions at scale.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/30 bg-secondary/5">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                      The Bottom Line
                    </p>
                    <p className="text-lg text-muted-foreground italic">
                      "If your staff uses computers, they need to know how to use AI safely."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Effective Date */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Effective Date</h2>
              <Card className="border-2 border-primary/30 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-semibold mb-3">Everything in the law becomes fully effective on September 1, 2025.</p>
                      <p className="text-muted-foreground mb-3">This is the go-live date when:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Agencies must identify employees who meet the 25% computer-use threshold</li>
                        <li>Annual Cybersecurity + AI training becomes mandatory</li>
                        <li>Local governments must begin certifying compliance for state grants</li>
                        <li>DIR's certified AI training catalog must be published</li>
                        <li>Strategic plans require training-compliance certification</li>
                      </ul>
                      <p className="text-muted-foreground mt-3">
                        WhitegloveAI's program is designed to slot in cleanly to this timeline.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Requirements by Entity Type */}
        <section className="py-16 bg-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Requirements by Entity Type</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Select your organization type to see specific compliance requirements
              </p>
            </div>

            <Tabs defaultValue="state" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                <TabsTrigger value="state">State Agencies</TabsTrigger>
                <TabsTrigger value="local">Local Governments</TabsTrigger>
                <TabsTrigger value="school">School Districts</TabsTrigger>
                <TabsTrigger value="grant">Grant Applicants</TabsTrigger>
              </TabsList>

              <TabsContent value="state">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-6">
                      <Building2 className="h-8 w-8 text-primary flex-shrink-0" />
                      <h3 className="text-2xl font-bold">State Agencies</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Who is covered?</h4>
                        <p className="text-muted-foreground">Any state employee who uses a computer for 25% or more of their job.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">What is required?</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Cybersecurity training using a program certified by DIR</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>AI training using a program certified by DIR</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Both must be completed annually</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Agency strategic plans must include a written certification of compliance</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">What this means operationally:</h4>
                        <p className="text-muted-foreground">
                          Agencies must inventory roles, assign training, track completion, and document compliance.
                          WhitegloveAI's program gives agencies a turnkey package with completion tracking, certificates, and audit-ready logs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="local">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-6">
                      <Building2 className="h-8 w-8 text-primary flex-shrink-0" />
                      <h3 className="text-2xl font-bold">Local Governments</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Who is covered?</h4>
                        <p className="text-muted-foreground">
                          Any employee or elected/appointed official who has access to a computer system or database and uses a computer for at least 25% of their duties.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">What is required?</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Annual cybersecurity + AI training using programs certified by DIR</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Written certification attached to any state-grant application</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Failure to comply results in repayment of grants and a two-year ineligibility period</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">Operational reality:</h4>
                        <p className="text-muted-foreground">
                          Local governments need a simple, centralized, low-friction training option.
                          WhitegloveAI delivers a cost-effective catalog that scales from small municipalities to major metropolitan offices.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="school">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-6">
                      <School className="h-8 w-8 text-primary flex-shrink-0" />
                      <h3 className="text-2xl font-bold">School Districts</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Who is covered?</h4>
                        <p className="text-muted-foreground">
                          Every district employee who is currently required to complete cybersecurity training.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">What is unique for schools?</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>The <strong>Cybersecurity Coordinator</strong> must complete both trainings annually</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Other required employees can follow a district-defined schedule</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Same 25% computer-use rule applies</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">Why this matters:</h4>
                        <p className="text-muted-foreground">
                          K-12 environments face high cyber-risk, and generative AI is already entering classrooms.
                          WhitegloveAI provides AI training using real school scenarios, emphasizing student privacy, FERPA concerns, and safe AI usage.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="grant">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-6">
                      <FileCheck className="h-8 w-8 text-primary flex-shrink-0" />
                      <h3 className="text-2xl font-bold">Grant Applicants (Counties, Cities, Special Districts)</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Who is covered?</h4>
                        <p className="text-muted-foreground">
                          Any local government applying for a state grant under Chapter 772.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">What is required?</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Written certification of training compliance included with the application</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                            <span>If a jurisdiction receives a grant and is later found non-compliant, it must:
                              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>Repay the grant in full</li>
                                <li>Wait 24 months before applying again</li>
                              </ul>
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">WhitegloveAI's advantage:</h4>
                        <p className="text-muted-foreground">
                          Clear compliance records, instant verification, and auditable completion data that travel cleanly with the grant paperwork.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* How WhitegloveAI Helps You Comply */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How WhitegloveAI Helps You Comply</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                WhitegloveAI designed its AI Training & Certification Program to satisfy HB3512 directly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: CheckCircle2,
                  title: "DIR-Aligned Curriculum",
                  description: "AI curriculum built on best-practice governance that meets DIR guidelines"
                },
                {
                  icon: Shield,
                  title: "Secure Delivery",
                  description: "Enterprise-grade training delivery with security at the core"
                },
                {
                  icon: FileCheck,
                  title: "Annual Certification",
                  description: "Official certification for every staff member with automatic compliance logs"
                },
                {
                  icon: Users,
                  title: "Real-World Scenarios",
                  description: "Training tailored for government, IT, HR, operations, law enforcement, and education"
                },
                {
                  icon: Building2,
                  title: "Policy Alignment",
                  description: "Optional policy bundles aligned to NIST, ISO 42001, and our AI-AMF framework"
                },
                {
                  icon: CheckCircle2,
                  title: "Low-Friction Compliance",
                  description: "Straightforward compliance that raises your workforce's AI literacy"
                }
              ].map((feature, index) => (
                <Card key={index} className="border-2 border-muted hover:border-primary/50 transition-all">
                  <CardContent className="pt-6">
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Program Is For */}
        <section className="py-16 bg-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Who This Program Is For</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "State agencies",
                  "Cities, counties, and municipalities",
                  "ISDs, charter schools, and regional service centers",
                  "9-1-1 districts and emergency communication centers",
                  "Special districts",
                  "Higher-education institutions",
                  "Any department applying for state grants",
                  "Contractors supporting Texas government (optional but recommended)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Course Advisor */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                AI Course Advisor
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Get personalized course recommendations powered by AI for HB3512 compliance
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <CourseChatbot embedded onApplyFilters={handleApplyRecommendedFilters} />
            </div>
          </div>
        </section>

        {/* Start HB3512 Compliance Today */}
        <section className="py-16 bg-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start HB3512 Compliance Today</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Two ways to move forward
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-primary/30 hover:border-primary transition-all">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-2xl font-bold mb-4">Explore the AI Training Catalog</h3>
                  <p className="text-muted-foreground mb-6">
                    Browse all courses and certifications designed for HB3512, cybersecurity, and responsible AI adoption.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={() => navigate('/training/catalogue')}
                  >
                    View Course Catalogue
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/30 hover:border-primary transition-all">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-2xl font-bold mb-4">Talk to WhitegloveAI</h3>
                  <p className="text-muted-foreground mb-6">
                    We'll map HB3512 requirements to your agency structure, size, and existing training cycles.
                  </p>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate('/training')}
                  >
                    Explore Training Programs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">FAQ (Plain English)</h2>
              
              <div className="space-y-6">
                {[
                  {
                    q: "Is this required every year?",
                    a: "Yes. Both cybersecurity and AI training must be completed annually."
                  },
                  {
                    q: "Who decides which AI training programs qualify?",
                    a: "The Texas Department of Information Resources (DIR)."
                  },
                  {
                    q: "Does WhitegloveAI's training meet the HB3512 requirements?",
                    a: "Yes. It is designed specifically around the DIR guidelines and the structure of the bill."
                  },
                  {
                    q: "What happens if my organization doesn't comply?",
                    a: "Grant applicants may be forced to repay funds and become ineligible for two years. Agencies risk audit exposure and policy non-compliance."
                  },
                  {
                    q: "What if we already use another cybersecurity training vendor?",
                    a: "WhitegloveAI works alongside any cybersecurity platform. You only need to add the AI component."
                  }
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Your Organization HB3512-Ready
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Visit the WhitegloveAI Training Center to explore courses or schedule a consultation.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-12"
                onClick={() => navigate('/training')}
              >
                Start HB3512 Compliance
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
};

export default HB3512;
