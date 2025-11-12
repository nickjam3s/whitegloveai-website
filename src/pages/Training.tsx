import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { courses } from "@/data/courses";
import { Upload, Clock, Award, BookOpen, Users, TrendingUp, Building2, Briefcase, Sparkles, Code, Lightbulb, CheckCircle2, Shield, Landmark } from "lucide-react";
import { CourseCard } from "@/components/training/CourseCard";
import { CourseChatbot } from "@/components/training/CourseChatbot";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import aicertsBadge from "@/assets/aicerts-partner-badge.png";
import HeroBackground from "@/components/shared/HeroBackground";
import HB3512Banner from "@/components/HB3512Banner";
import ContactSection from "./training/components/ContactSection";
import { injectConduitStyles } from "@/utils/conduitStyleInjector";

const Training = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    
    // Load the Conduit.ai chat widget
    const script = document.createElement('script');
    script.src = "https://base.conduit.ai/widget/widget.min.js";
    script.async = true;
    script.setAttribute('data-widget-id', 'a577c803-4c1a-4b17-4b7d-2dc85a55b344');
    script.onload = () => {
      // Inject custom styles after widget loads
      injectConduitStyles();
    };
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const featuredCourses = courses.filter(c => c.featured);

  const benefits = [
    {
      icon: Clock,
      title: "Flexible Learning Formats",
      description: "Self-paced online courses and live virtual sessions that fit your schedule"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "IACET-accredited CEUs accepted by major professional organizations"
    },
    {
      icon: BookOpen,
      title: "Hands-On Practice",
      description: "Real-world labs and practical exercises to build confidence"
    },
    {
      icon: Users,
      title: "Expert Instruction",
      description: "Taught by AI practitioners with real-world experience"
    },
    {
      icon: TrendingUp,
      title: "Certification Path",
      description: "Clear progression from foundational to advanced levels"
    },
    {
      icon: Building2,
      title: "Team Discounts",
      description: "Special pricing for organizational training programs"
    }
  ];

  const programCategories = [
    {
      icon: Lightbulb,
      title: "Foundational AI Literacy",
      description: "Build essential AI understanding for all roles. Learn AI basics, ethics, responsible use, and practical applications across business functions.",
      color: "text-yellow-500"
    },
    {
      icon: Code,
      title: "Technical & Engineering Track",
      description: "Deep technical skills for developers and engineers. Master prompt engineering, RAG systems, LLM fine-tuning, and AI infrastructure.",
      color: "text-blue-500"
    },
    {
      icon: Briefcase,
      title: "Applied AI in Business Domains",
      description: "Industry-specific AI applications for professionals. Transform operations in HR, marketing, finance, healthcare, and legal with practical AI tools.",
      color: "text-green-500"
    },
    {
      icon: Sparkles,
      title: "Creative & Emerging Roles",
      description: "AI for creative and innovative work. Explore generative AI for content creation, design, research, and emerging AI-powered professions.",
      color: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Specialized Practice Area Modules",
      description: "Domain expertise with AI integration. Sector-specific training for government, education, nonprofit, and specialized industries.",
      color: "text-red-500"
    },
    {
      icon: Landmark,
      title: "GovAI Training & Compliance",
      description: "Public sector AI education and regulatory compliance. Navigate TRAIGA requirements, HB3512 mandates, AI procurement standards, and citizen-facing AI applications.",
      color: "text-orange-500"
    }
  ];

  return (
    <>
      <SEO
        title="AI Training & Certification Programs | WhitegloveAI"
        description="Transform your organization with industry-recognized AI certifications from AICerts. Explore flexible learning programs with IACET-accredited CEUs, expert instruction, and hands-on practice."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        {/* Hero Section */}
        <HeroBackground>
          <section className="relative overflow-hidden pt-52 pb-40 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32">
            <div className="container px-4 mx-auto max-w-7xl">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Build Internal AI Expertise
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Empower your workforce with industry-leading AI training and certifications through WhitegloveAI, an authorized training partner of AICerts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-8"
                    onClick={() => navigate('/training/catalogue')}
                  >
                    See Full Catalogue
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-8"
                    onClick={() => window.location.href = '/portal/auth'}
                  >
                    Portal Login
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </HeroBackground>

        {/* HB3512 Banner */}
        <HB3512Banner />

        {/* Training Program Benefits */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose WhitegloveAI Training?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive AI education designed for real-world impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-primary/20">
                  <CardContent className="pt-6">
                    <benefit.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => navigate('/training/catalogue')}
              >
                Explore All Courses
              </Button>
            </div>
          </div>
        </section>

        {/* AI Course Advisor Section */}
        <section className="py-8 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                AI Course Advisor
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Get personalized course recommendations powered by AI. Upload your resume for instant top 5 course recommendations, or ask questions about our certification programs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-[1fr_300px] gap-6 items-stretch">
              <CourseChatbot embedded />
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 flex flex-col h-[280px]">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Your Resume
                </h3>
                <p className="text-sm text-muted-foreground flex-1">
                  Upload your resume (PDF or DOCX) to instantly receive your top 5 personalized course recommendations. Our AI analyzes your experience, skills, and career trajectory to match you with the perfect certifications for your professional development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Certifications */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Certifications
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Start with our most popular and impactful certification programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {featuredCourses.map((course) => (
                <CourseCard key={course.name} course={course} isFeatured />
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
                onClick={() => navigate('/training/catalogue')}
              >
                View All {courses.length} Courses
              </Button>
            </div>
          </div>
        </section>

        {/* Training Programs Overview */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Training Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive learning paths designed for every role and skill level
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {programCategories.map((category, index) => (
                <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="pt-6">
                    <category.icon className={`h-12 w-12 ${category.color} mb-4`} />
                    <h3 className="font-semibold text-xl mb-3">{category.title}</h3>
                    <p className="text-muted-foreground mb-6">{category.description}</p>
                    <Button 
                      variant="outline" 
                      onClick={() => navigate('/training/catalogue')}
                    >
                      See Courses
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => navigate('/training/catalogue')}
              >
                Browse Full Catalogue
              </Button>
            </div>
          </div>
        </section>

        {/* Accreditation Section */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Industry-Recognized Accreditation
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our certifications meet the highest standards of professional education
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* IACET Accreditation */}
              <Card className="border-primary/30">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                    <h3 className="font-semibold text-2xl">IACET Accredited</h3>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p className="font-medium text-foreground">
                      All WhitegloveAI courses and certifications are accredited by IACET (International Accreditors for Continuing Education and Training).
                    </p>
                    
                    <div className="space-y-2">
                      <p className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>IACET CEUs are recognized by professional associations, regulatory boards, and corporations worldwide</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Based on the ANSI/IACET Standard for Continuing Education and Training</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>1 CEU equals 10 contact hours of quality instruction</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Transferable credits accepted for professional development requirements</span>
                      </p>
                    </div>

                    <p className="text-sm pt-2">
                      IACET accreditation ensures our training programs meet rigorous standards for design, delivery, measurement, and outcomes—giving you confidence in the quality and recognition of your certification.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* ANAB/ANSI Coming Soon */}
              <Card className="border-primary/20 bg-muted/30">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-2xl">Coming January 2026</h3>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p className="font-medium text-foreground">
                      ANAB/ANSI Accreditation for Personnel Certification
                    </p>
                    
                    <div className="space-y-2">
                      <p className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Certification program accreditation under ISO/IEC 17024 standards</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>ANAB (ANSI National Accreditation Board) recognition for personnel certification bodies</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Enhanced global recognition and credibility for certified professionals</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Demonstrates competency validation through internationally recognized standards</span>
                      </p>
                    </div>

                    <p className="text-sm pt-2">
                      This additional accreditation will further validate the rigor and quality of our certification programs, aligning with international standards for personnel certification bodies.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner Badge Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="bg-card border rounded-xl p-8 md:p-12 text-center">
              <img 
                src={aicertsBadge} 
                alt="AICerts Authorized Training Partner" 
                className="mx-auto mb-6 max-w-2xl w-full h-auto"
              />
              <h2 className="text-3xl font-bold mb-4">AICerts Partner</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                WhitegloveAI is proud to be an authorized partner of AICerts, delivering premium AI certification programs with the highest standards of quality and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
};

export default Training;