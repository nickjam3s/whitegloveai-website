import { useLayoutEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Users, 
  Lightbulb, 
  Building2, 
  Shield, 
  CheckCircle2, 
  Clock, 
  Award,
  TrendingUp,
  Calculator,
  Phone,
  Mail,
  ArrowRight,
  Package,
  Laptop,
  Video,
  MapPin,
  Globe,
  HeadphonesIcon,
  Zap
} from "lucide-react";
import HeroBackground from "@/components/shared/HeroBackground";
import DirDisclaimer from "@/components/DirDisclaimer";
import ContactSection from "./components/ContactSection";

const GovernmentPack = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certifications = [
    {
      icon: Users,
      name: "AI+ Everyone",
      hours: 8,
      description: "Broad AI introduction for all employees",
      topics: [
        "What is AI and how it works",
        "AI applications across industries",
        "AI's impact on work and society",
        "Future trends and opportunities"
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Lightbulb,
      name: "AI+ Foundation",
      hours: 4,
      description: "Practical prompt engineering and AI tool usage",
      topics: [
        "Prompt engineering fundamentals",
        "Working with ChatGPT, Copilot, and other tools",
        "Practical AI applications for productivity",
        "Hands-on labs and exercises"
      ],
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Building2,
      name: "AI+ Government",
      hours: 8,
      description: "Government-specific applications and Texas compliance",
      topics: [
        "Texas HB3512 and TRAIGA compliance",
        "Government AI use cases and examples",
        "Citizen-facing AI applications",
        "Procurement and authorization requirements"
      ],
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Shield,
      name: "AI+ Ethics",
      hours: 8,
      description: "Responsible AI deployment framework",
      topics: [
        "Five principles of responsible AI",
        "Bias detection and mitigation",
        "Privacy, security, and transparency",
        "Human oversight and accountability"
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const benefits = [
    {
      icon: Package,
      title: "Comprehensive Coverage",
      description: "Four certifications covering everything from AI basics to government-specific applications to ethical deployment—all in one structured program."
    },
    {
      icon: TrendingUp,
      title: "Progressive Learning",
      description: "Courses build on each other, taking employees from foundational understanding to advanced government-specific applications."
    },
    {
      icon: Calculator,
      title: "Cost-Effective",
      description: "Volume discounts of up to 25% make large-scale training affordable. Bundled pricing provides a structured learning path."
    }
  ];

  const caseStudies = [
    {
      name: "City of McKinney",
      type: "Municipal Government",
      quote: "WhitegloveAI helped us prepare our entire workforce for the AI transformation with practical, government-focused training.",
      result: "300+ employees trained"
    },
    {
      name: "City of Harlingen",
      type: "Municipal Government",
      quote: "The Government Training Pack gave us exactly what we needed for HB3512 compliance with minimal disruption to operations.",
      result: "HB3512 compliant"
    },
    {
      name: "Dallas Baptist University",
      type: "Higher Education",
      quote: "ProTrain's nationally accredited program provided the quality assurance and documentation our institution requires.",
      result: "Faculty & staff certified"
    }
  ];

  const pricingOptions = [
    {
      icon: Laptop,
      name: "Self-Paced",
      price: "$780",
      perEmployee: "per employee",
      description: "Online, self-directed learning",
      features: [
        "Complete at your own pace",
        "24/7 access to course materials",
        "Email support",
        "Completion certificates"
      ],
      recommended: true
    },
    {
      icon: Video,
      name: "Virtual Instructor-Led",
      price: "$3,980",
      perEmployee: "per employee",
      description: "Live virtual sessions with expert instructors",
      features: [
        "Real-time Q&A and interaction",
        "Scheduled cohort sessions",
        "Group exercises and discussions",
        "Enhanced support"
      ],
      recommended: false
    },
    {
      icon: MapPin,
      name: "In-Person",
      price: "$4,130",
      perEmployee: "per employee",
      description: "On-site training at your location",
      features: [
        "Face-to-face instruction",
        "Hands-on workshops",
        "Customized to your environment",
        "Team building benefits"
      ],
      recommended: false
    }
  ];

  const volumeDiscounts = [
    { range: "1-49 employees", discount: "Standard pricing", selfPaced: "$780" },
    { range: "50-99 employees", discount: "10% off", selfPaced: "$702" },
    { range: "100-249 employees", discount: "15% off", selfPaced: "$663" },
    { range: "250-499 employees", discount: "20% off", selfPaced: "$624" },
    { range: "500+ employees", discount: "25% off", selfPaced: "$585" }
  ];

  const implementationPhases = [
    {
      phase: "Phase 1",
      name: "Pilot Program",
      employees: "25-50 employees",
      description: "Start with a pilot group to validate the program and gather feedback before wider rollout."
    },
    {
      phase: "Phase 2",
      name: "Department Rollout",
      employees: "50-200 employees",
      description: "Expand to full departments, refining delivery based on pilot feedback."
    },
    {
      phase: "Phase 3",
      name: "Organization-Wide",
      employees: "200+ employees",
      description: "Deploy across the entire organization with maximum volume discounts."
    }
  ];

  const whyWhitegloveAI = [
    {
      icon: Building2,
      title: "Texas Government Expertise",
      description: "Deep understanding of Texas government requirements, HB3512, and TRAIGA."
    },
    {
      icon: Award,
      title: "Nationally Accredited",
      description: "Delivered through ProTrain, a Middle States (MSA-CESS) accredited institution."
    },
    {
      icon: CheckCircle2,
      title: "TXShare Approved",
      description: "Streamlined procurement through Contract #2025-023."
    },
    {
      icon: Globe,
      title: "Technology-Agnostic",
      description: "Training that applies across all AI platforms and tools."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Trusted by Texas municipalities and government agencies."
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description: "Dedicated support for implementation, compliance, and updates."
    }
  ];

  const faqs = [
    {
      q: "Does this training meet HB3512 requirements?",
      a: "Yes. The Government AI Training Pack is specifically designed to align with Texas HB3512 AI training requirements. It covers all mandated topics and provides completion tracking for compliance reporting. Note: While our programs align with HB3512 requirements, DIR has not yet selected vendors for HB3512 compliance training."
    },
    {
      q: "Can we mix delivery formats?",
      a: "Absolutely. Many agencies use self-paced training for frontline staff and virtual instructor-led sessions for managers and leadership. We can customize a blended approach for your organization."
    },
    {
      q: "How long does it take to complete all four certifications?",
      a: "The total program is 28 hours. For self-paced learning, most employees complete it in 4-6 weeks. Virtual and in-person options can be scheduled over consecutive days or spread across weeks."
    },
    {
      q: "Will our employees receive recognized certifications?",
      a: "Yes. Upon successful completion, employees receive certificates from ProTrain, a nationally accredited institution (MSA-CESS). These certifications are recognized by government agencies and enterprises for professional development."
    },
    {
      q: "Can the training be customized for our agency?",
      a: "Yes. We can incorporate your agency's specific policies, use cases, and examples. In-person and virtual instructor-led options allow for the most customization."
    },
    {
      q: "What happens if an employee doesn't pass?",
      a: "Employees can retake assessments as needed. Our goal is successful completion for all participants, and we provide support to ensure that happens."
    },
    {
      q: "How does TXShare procurement work?",
      a: "As an approved vendor under TXShare Contract #2025-023, Texas public agencies can procure our training directly without a separate RFP process. This streamlines procurement significantly."
    },
    {
      q: "Is there a minimum purchase?",
      a: "There's no minimum for self-paced training. For virtual instructor-led and in-person options, we recommend groups of at least 10-15 participants for the best learning experience."
    },
    {
      q: "What support is included?",
      a: "All options include email support and completion tracking. Virtual and in-person options include enhanced support with dedicated account management."
    },
    {
      q: "How do we get started?",
      a: "Contact us for a quote tailored to your organization size and delivery preferences. We'll provide a detailed proposal and help you plan implementation."
    }
  ];

  return (
    <>
      <SEO
        title="Government AI Training Pack | 4 Certifications for HB3512 Compliance | WhitegloveAI"
        description="Comprehensive AI training bundle for government agencies. Four nationally accredited certifications (28 hours) covering AI fundamentals, government applications, and ethical deployment. TXShare approved, HB3512 aligned."
        canonicalPath="/maisp/training/government-pack"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Government AI Training Pack",
            "description": "Comprehensive AI literacy program for public sector employees. Four nationally accredited certifications covering AI fundamentals, government applications, and ethical deployment.",
            "provider": {
              "@type": "Organization",
              "name": "WhitegloveAI",
              "sameAs": "https://whitegloveai.com"
            },
            "educationalCredentialAwarded": "AI+ Certifications (Everyone, Foundation, Government, Ethics)",
            "timeRequired": "PT28H",
            "coursePrerequisites": "None",
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "courseMode": "online",
                "name": "Self-Paced Online Training"
              },
              {
                "@type": "CourseInstance",
                "courseMode": "online",
                "name": "Virtual Instructor-Led Training"
              },
              {
                "@type": "CourseInstance",
                "courseMode": "onsite",
                "name": "In-Person Training"
              }
            ],
            "offers": {
              "@type": "Offer",
              "price": "780",
              "priceCurrency": "USD",
              "priceValidUntil": "2026-12-31",
              "availability": "https://schema.org/InStock"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Government employees, public sector workers, state and local agencies"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Government AI Training Pack",
            "description": "Four nationally accredited AI certifications bundled for government agencies. TXShare Contract #2025-023 approved.",
            "brand": {
              "@type": "Brand",
              "name": "WhitegloveAI"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "585",
              "highPrice": "4130",
              "priceCurrency": "USD",
              "offerCount": "3"
            }
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <HeroBackground>
          <section className="relative overflow-hidden pt-32 pb-32 md:pt-40 md:pb-40 lg:pt-44 lg:pb-44">
            <div className="container px-4 mx-auto max-w-7xl relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
                  <Package className="h-5 w-5" />
                  <span className="font-medium">Complete Training Bundle</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Government AI Training Pack
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-4">
                  Comprehensive AI Literacy Program for Public Sector Employees
                </p>
                <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                  Four nationally accredited certifications. 28 hours of progressive training. 
                  Designed for HB3512 compliance and responsible AI adoption across your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-8"
                    onClick={() => navigate('/contact')}
                  >
                    Request Quote
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-8"
                    onClick={() => window.open('https://lzxlamelyfrfrhrgfigb.supabase.co/storage/v1/object/public/documents/WhitegloveAI-Training-and-Certifications.pdf', '_blank')}
                  >
                    Download Overview
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-8"
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    See Pricing
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </HeroBackground>

        {/* DIR Disclaimer */}
        <DirDisclaimer />

        {/* TXShare Banner */}
        <section
          aria-label="TXShare Announcement"
          className="w-full bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 text-white border-t border-b border-primary/30"
        >
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-3 py-2.5 md:flex-row md:items-center md:justify-between">
              <p className="text-center font-medium text-sm md:text-base md:flex-1">
                TXShare Approved – Streamlined procurement for Texas public agencies through Contract #2025-023.
              </p>
              <div className="flex-shrink-0 md:ml-6">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-secondary hover:bg-secondary/90 text-white"
                  asChild
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

        {/* What's Included Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What's Included
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Four nationally accredited certifications covering the complete AI competency spectrum for government employees
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${cert.bgColor}`}>
                        <cert.icon className={`h-8 w-8 ${cert.color}`} />
                      </div>
                      <div className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{cert.hours} hrs</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                    <ul className="space-y-2">
                      {cert.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Total: 28 Hours of Progressive, Government-Focused Training</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why the Government AI Training Pack */}
        <section className="py-16 bg-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why the Government AI Training Pack?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A complete solution designed specifically for public sector organizations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-primary/20">
                  <CardContent className="pt-6">
                    <benefit.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proven Results */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Proven Results
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Trusted by Texas government agencies and educational institutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="text-sm text-primary font-medium mb-2">{study.type}</div>
                    <h3 className="font-bold text-xl mb-3">{study.name}</h3>
                    <p className="text-muted-foreground italic mb-4">"{study.quote}"</p>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <CheckCircle2 className="h-5 w-5" />
                      <span>{study.result}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Delivery Options */}
        <section id="pricing" className="py-16 bg-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pricing & Delivery Options
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose the delivery format that works best for your organization
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {pricingOptions.map((option, index) => (
                <Card 
                  key={index} 
                  className={`relative ${option.recommended ? 'border-2 border-primary shadow-lg' : 'border-primary/20'}`}
                >
                  {option.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="pt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <option.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl">{option.name}</h3>
                    </div>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{option.price}</span>
                      <span className="text-muted-foreground ml-2">{option.perEmployee}</span>
                    </div>
                    <p className="text-muted-foreground mb-6">{option.description}</p>
                    <ul className="space-y-3 mb-6">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={option.recommended ? "default" : "outline"}
                      onClick={() => navigate('/contact')}
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="volume-discounts" className="border-none">
                      <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          Volume Discounts (Self-Paced)
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="overflow-x-auto">
                          <table className="w-full mt-4">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-3 px-4">Employees</th>
                                <th className="text-left py-3 px-4">Discount</th>
                                <th className="text-left py-3 px-4">Price Per Employee</th>
                              </tr>
                            </thead>
                            <tbody>
                              {volumeDiscounts.map((tier, index) => (
                                <tr key={index} className="border-b last:border-none">
                                  <td className="py-3 px-4">{tier.range}</td>
                                  <td className="py-3 px-4 text-primary font-medium">{tier.discount}</td>
                                  <td className="py-3 px-4 font-semibold">{tier.selfPaced}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          Volume discounts for virtual instructor-led and in-person training available upon request.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Implementation Approach */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Implementation Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Start small, prove value, then scale across your organization
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
              {implementationPhases.map((phase, index) => (
                <Card key={index} className="border-primary/20 relative">
                  <div className="absolute -top-3 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {phase.phase}
                  </div>
                  <CardContent className="pt-8">
                    <h3 className="font-bold text-xl mb-2">{phase.name}</h3>
                    <div className="text-primary font-medium mb-3">{phase.employees}</div>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground">
                Need a custom implementation plan? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for a tailored approach.
              </p>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-16 bg-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Return on Investment
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                AI training delivers measurable value for government organizations
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardContent className="pt-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">Example: 100 Employees (Self-Paced)</h3>
                    <p className="text-muted-foreground">15% volume discount applied</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-4 bg-background rounded-lg border border-primary/20">
                      <div className="text-3xl font-bold text-primary mb-2">$66,300</div>
                      <div className="text-muted-foreground">Total Investment</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg border border-primary/20">
                      <div className="text-3xl font-bold text-primary mb-2">$663</div>
                      <div className="text-muted-foreground">Per Employee</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg border border-primary/20">
                      <div className="text-3xl font-bold text-primary mb-2">28 hrs</div>
                      <div className="text-muted-foreground">Training Per Person</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4">Value Delivered:</h4>
                      <ul className="space-y-3">
                        {[
                          "HB3512 compliance across all trained employees",
                          "Reduced AI-related security and compliance risks",
                          "Improved productivity through responsible AI use",
                          "Documented training records for audits"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Additional Benefits:</h4>
                      <ul className="space-y-3">
                        {[
                          "Employee confidence in AI tools",
                          "Consistent AI practices organization-wide",
                          "Foundation for advanced AI initiatives",
                          "Nationally accredited certifications"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose WhitegloveAI */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose WhitegloveAI?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Your trusted partner for government AI training and compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyWhitegloveAI.map((item, index) => (
                <Card key={index} className="border-primary/20">
                  <CardContent className="pt-6">
                    <item.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-background">
              <CardContent className="py-12">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Build AI Expertise Across Your Organization?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Get a customized quote for your organization and start planning your AI training rollout.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Button size="lg" className="text-lg px-8" onClick={() => navigate('/contact')}>
                      Request Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => navigate('/maisp/training/catalogue')}>
                      View Course Catalogue
                    </Button>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
                    <a 
                      href="mailto:workwith@whitegloveai.com" 
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      workwith@whitegloveai.com
                    </a>
                    <a 
                      href="tel:+14694219918" 
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      +1 (469) 421-9918
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
};

export default GovernmentPack;
