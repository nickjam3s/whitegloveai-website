import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import StandardHero from "@/components/shared/StandardHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  BookOpen,
  Lightbulb,
  PlayCircle,
  Users,
  Star,
  FileText,
  Briefcase,
  Building2,
  GraduationCap,
  Shield,
  Heart,
  Wrench,
  Scale,
  AlertCircle,
  Mail,
} from "lucide-react";

const curriculumModules = [
  {
    number: 1,
    title: "The R-T-C-F Prompting Framework",
    duration: "15 Min",
    icon: Lightbulb,
    topics: [
      "The core problem: vague prompts produce vague results",
      "Four-part framework: Role, Task, Context, Format",
      "Role examples by government job type",
      "Weak vs. strong task examples",
      "Complete R-T-C-F prompt in action",
      "Five golden rules for government AI prompting",
    ],
  },
  {
    number: 2,
    title: "Universal Government Productivity",
    duration: "30 Min",
    icon: FileText,
    topics: [
      "Drafting professional communications",
      "Summarizing and analyzing documents",
      "Preparing reports and briefings",
      "Research, data, and analysis tasks",
      "Building a prompt library for your most common tasks",
    ],
  },
];

const roleTracks = [
  {
    id: "3A",
    title: "Municipal Clerks & City Administration",
    prompts: 6,
    icon: Building2,
  },
  {
    id: "3B",
    title: "Public Works & Utilities",
    prompts: 6,
    icon: Wrench,
  },
  {
    id: "3C",
    title: "K-12 School Districts",
    prompts: 6,
    icon: GraduationCap,
  },
  {
    id: "3D",
    title: "County Social Services & Public Health",
    prompts: 5,
    icon: Heart,
  },
  {
    id: "3E",
    title: "Government Human Resources",
    prompts: 5,
    icon: Briefcase,
  },
  {
    id: "3F",
    title: "Law Enforcement & Emergency Services",
    prompts: 6,
    icon: Shield,
  },
];

const stats = [
  { value: "60", label: "Minutes" },
  { value: "3", label: "Modules (Core + Role-Specific)" },
  { value: "6", label: "Department Tracks" },
  { value: "36+", label: "Ready-to-Use Prompts" },
];

const AIPrompting = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="AI Prompting for Government Productivity | FREE with HB3512 Training | WhitegloveAI"
        description="A hands-on, 60-minute course teaching government employees how to write effective AI prompts using the R-T-C-F Framework. FREE with AI Awareness Training enrollment. Includes 36+ ready-to-use prompts across 6 department tracks."
        canonicalPath="/maisp/training/ai-prompting"
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <StandardHero
          title="AI Prompting for Government Productivity"
          subtitle="A hands-on, 60-minute course teaching government employees how to write effective AI prompts using the R-T-C-F Framework. The practical sequel to AI awareness training — learn how to use AI to do your government job better, faster, and with less effort."
          height="large"
          backgroundVariant="ambient"
          primaryCTA={{
            text: "Get Started — It's FREE",
            href: "/maisp/training/hb3512-approved-training",
            icon: ArrowRight,
          }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-500/40 px-4 py-2 text-amber-300 text-sm font-semibold">
            <Star className="h-4 w-4" />
            FREE with AI Awareness Training Enrollment
          </div>
        </StandardHero>

        {/* Stats Bar */}
        <section className="py-10 bg-secondary/10 border-y border-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Banner */}
        <section className="py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-amber-500/40 bg-amber-500/5">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Star className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      How It Works — Included FREE
                    </h3>
                    <p className="text-muted-foreground">
                      This course is included <strong className="text-foreground">FREE</strong> with every AI Awareness Training enrollment. Complete the DIR-approved awareness course first, then unlock this hands-on prompting course at no additional cost. It's our way of ensuring your team doesn't just understand AI — they know how to <em>use</em> it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Curriculum Section — Modules 1 & 2 */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Course Curriculum
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Three modules designed to take you from understanding AI to actually using it effectively in your government role.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
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

            {/* Module 3 — Role-Specific Tracks */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Module 3: Role-Specific Tracks
                  </h3>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> 15 Min — pick your track
                  </span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {roleTracks.map((track) => {
                const Icon = track.icon;
                return (
                  <Card
                    key={track.id}
                    className="border-border bg-card hover:border-secondary/50 transition-colors"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
                          <Icon className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-secondary">Track {track.id}</p>
                          <h4 className="text-sm font-semibold text-foreground leading-tight">
                            {track.title}
                          </h4>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {track.prompts} ready-to-use prompts tailored for this role
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6 italic">
              Employees self-select the track most relevant to their role.
            </p>
          </div>
        </section>

        {/* Course Teaser Video — Coming Soon */}
        <section className="py-20 bg-muted/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                See the Course in Action
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Watch a preview of the AI Prompting for Government Productivity course.
              </p>
            </div>
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-secondary/30 bg-gradient-to-br from-secondary/5 via-background to-secondary/10">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10">
                  <PlayCircle className="h-10 w-10 text-secondary" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">Course Preview Coming Soon</p>
                  <p className="mt-1 text-sm text-secondary font-medium">Coming Soon</p>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    A short preview of the 60-minute AI Prompting course for government employees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="py-12 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border bg-card">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Prerequisite</h3>
                    <p className="text-muted-foreground">
                      This course requires completion of the{" "}
                      <Link
                        to="/maisp/training/hb3512-approved-training"
                        className="text-secondary hover:underline font-medium"
                      >
                        AI Awareness Training
                      </Link>{" "}
                      (or equivalent AI awareness training) as a prerequisite. Complete the DIR-approved awareness course first, then access this hands-on prompting course for free.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Who Is This For */}
        <section className="py-20 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Who Is This Course For?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Designed for any government employee who wants to go beyond AI awareness and learn practical AI skills.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Government Entities</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Municipalities and city governments",
                      "Counties and county offices",
                      "School districts (K-12)",
                      "Water and utility districts",
                      "State agency field offices",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Eligible Employees</h3>
                  </div>
                    <p className="text-sm text-muted-foreground">
                      Any government employee who has completed the AI Awareness Training prerequisite and wants to learn practical AI prompting skills for their role.
                    </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Start with AI Awareness Training
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              This course is a FREE bonus — enroll in the DIR-certified AI Awareness Training to get access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/maisp/training/hb3512-approved-training">
                <Button
                  size="lg"
                  className="text-lg px-10 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="mailto:workwith@whitegloveai.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10"
                >
                  <Mail className="mr-2 h-5 w-5" /> Contact Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPrompting;