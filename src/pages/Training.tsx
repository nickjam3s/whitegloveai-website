import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { courses } from "@/data/courses";
import { Upload, Clock, Award, BookOpen, Users, TrendingUp, Building2, Briefcase, Sparkles, Code, Lightbulb, CheckCircle2, Shield, Landmark, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CourseCard } from "@/components/training/CourseCard";
import { CourseChatbot } from "@/components/training/CourseChatbot";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import HeroBackground from "@/components/shared/HeroBackground";
import HB3512Banner from "@/components/HB3512Banner";
import DirDisclaimer from "@/components/DirDisclaimer";
import ContactSection from "./training/components/ContactSection";


const Training = () => {
  const navigate = useNavigate();

  const handleApplyRecommendedFilters = (courseNames: string[]) => {
    navigate('/training/catalogue', { 
      state: { recommendedCourses: courseNames } 
    });
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredCourses = courses.filter(c => c.featured);

  const benefits = [
    {
      icon: Landmark,
      title: "Mandated by TX Law",
      description: (<>
        <Link to="/training/hb3512" className="text-primary hover:underline">TX HB3512</Link> requires government employees who use computers for 25%+ of their job to complete annual AI training by September 2025
      </>)
    },
    {
      icon: Clock,
      title: "Flexible Learning Formats",
      description: "Self-paced online courses and live virtual sessions that fit your schedule"
    },
    {
      icon: Award,
      title: "Nationally Accredited Training",
      description: "Delivered through ProTrain, a Middle States (MSA-CESS) accredited institution—meeting rigorous national standards for educational quality. IACET accreditation coming Jan 2026."
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
      description: (<>
        Public sector AI education and regulatory compliance. Navigate TRAIGA requirements, <Link to="/maisp/training/hb3512" className="text-primary hover:underline">HB3512 mandates</Link>, AI procurement standards, and citizen-facing AI applications.
        <br/><span className="text-sm">→ <Link to="/maisp/training/government-pack" className="text-primary hover:underline">See our Government AI Training Pack</Link></span>
      </>),
      color: "text-orange-500"
    }
  ];

  return (
    <>
      <SEO
        title="AI Training & Certification - Texas HB3512 Compliant | WhitegloveAI"
        description="AI training programs for Texas government and businesses. Meet HB3512 requirements with TXShare-approved courses. IACET accreditation coming Jan 2026. Flexible online and live sessions with expert instructors."
        canonicalPath="/maisp/training"
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
                  Empower your workforce with nationally accredited AI training and certifications through WhitegloveAI—delivered by ProTrain, a Middle States accredited educational institution meeting the highest standards of quality and excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-8"
                    onClick={() => {
                      const advisorSection = document.getElementById('ai-course-advisor');
                      advisorSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    Try AI Course Advisor
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-8"
                    onClick={() => navigate('/training/catalogue')}
                  >
                    See Full Catalogue
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-8"
                    onClick={() => window.open('https://lzxlamelyfrfrhrgfigb.supabase.co/storage/v1/object/public/documents/WhitegloveAI-Training-and-Certifications.pdf', '_blank')}
                  >
                    See Sales Doc
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </HeroBackground>

        {/* HB3512 Banner */}
        <HB3512Banner />
        {/* DIR Disclaimer */}
        <DirDisclaimer />

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

        {/* Training You Can Trust Section */}
        <section className="py-16 bg-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Training You Can Trust
              </h2>
              <p className="text-xl text-muted-foreground mb-2">
                Nationally Accredited. Professionally Recognized. Government-Approved.
              </p>
            </div>

            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-muted-foreground">
                WhitegloveAI delivers AI training through <strong className="text-foreground">ProTrain, a Middle States Association (MSA-CESS) nationally accredited institution</strong>, ensuring every course meets rigorous standards for educational quality, instructor expertise, and learner outcomes. Our programs are designed for government agencies, enterprises, and professionals who demand excellence and accountability in professional development.
              </p>
            </div>

            <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
              {/* MSA-CESS Badge */}
              <div className="flex flex-col items-center justify-center w-[140px] h-[140px] rounded-xl bg-gradient-to-br from-[hsl(220,60%,25%)] to-[hsl(220,60%,15%)] border border-primary/30 p-4">
                <Shield className="h-8 w-8 text-white mb-2" />
                <span className="text-white font-bold text-sm text-center">MSA-CESS</span>
                <span className="text-white/80 text-xs text-center">Accredited Institution</span>
              </div>

              {/* TXShare Badge */}
              <div className="flex flex-col items-center justify-center w-[140px] h-[140px] rounded-xl bg-gradient-to-br from-secondary to-secondary/80 border border-secondary/30 p-4">
                <CheckCircle2 className="h-8 w-8 text-white mb-2" />
                <span className="text-white font-bold text-sm text-center">TXShare</span>
                <span className="text-white/80 text-xs text-center">Approved Vendor</span>
              </div>

              {/* ProTrain Badge */}
              <div className="flex flex-col items-center justify-center w-[140px] h-[140px] rounded-xl bg-gradient-to-br from-primary to-primary/80 border border-primary/30 p-4">
                <Award className="h-8 w-8 text-white mb-2" />
                <span className="text-white font-bold text-sm text-center">ProTrain</span>
                <span className="text-white/80 text-xs text-center">Authorized Partner</span>
              </div>
            </div>
          </div>
        </section>

        {/* TXShare Announcement Bar */}
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

        {/* AI Course Advisor Section */}
        <section id="ai-course-advisor" className="py-8 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                AI Course Advisor
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Get personalized course recommendations powered by AI. Upload your resume for instant top 5 course recommendations, or ask questions about our certification programs.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <CourseChatbot embedded onApplyFilters={handleApplyRecommendedFilters} />
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

        {/* Government Training Pack Banner */}
        <section className="py-8">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl p-8 border border-primary/30">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-primary/20 p-4 rounded-xl">
                  <Package className="h-12 w-12 text-primary" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Looking for a Complete Government AI Training Solution?</h3>
                  <p className="text-muted-foreground">
                    The Government AI Training Pack bundles four certifications (AI+ Everyone, AI+ Foundation, AI+ Government, AI+ Ethics) for comprehensive AI literacy across your organization. Save with bundled pricing and volume discounts.
                  </p>
                </div>
                <Button size="lg" onClick={() => navigate('/maisp/training/government-pack')}>
                  Explore Government Training Pack
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
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
              {/* IACET Accreditation - Coming Soon */}
              <Card className="border-primary/20 bg-muted/30">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-2xl">IACET Accreditation</h3>
                      <span className="text-sm text-primary font-medium">Coming January 2026</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p className="font-medium text-foreground">
                      WhitegloveAI is pursuing IACET (International Accreditors for Continuing Education and Training) accreditation for all courses and certifications.
                    </p>
                    
                    <div className="space-y-2">
                      <p className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>IACET CEUs will be recognized by professional associations, regulatory boards, and corporations worldwide</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Based on the ANSI/IACET Standard for Continuing Education and Training</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>1 CEU equals 10 contact hours of quality instruction</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Transferable credits accepted for professional development requirements</span>
                      </p>
                    </div>

                    <p className="text-sm pt-2">
                      IACET accreditation will ensure our training programs meet rigorous standards for design, delivery, measurement, and outcomes—giving you confidence in the quality and recognition of your certification.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* ANAB/ANSI Coming Soon */}
              <Card className="border-primary/20 bg-muted/30">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-2xl">ANAB/ANSI Accreditation</h3>
                      <span className="text-sm text-primary font-medium">Coming January 2026</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p className="font-medium text-foreground">
                      Personnel Certification under ISO/IEC 17024 standards
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


        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
};

export default Training;