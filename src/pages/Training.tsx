import { useState, useMemo, useLayoutEffect } from "react";
import SEO from "@/components/SEO";
import { courses } from "@/data/courses";
import { Upload } from "lucide-react";
import { CourseFilters } from "@/components/training/CourseFilters";
import { CourseCard } from "@/components/training/CourseCard";
import { CourseChatbot } from "@/components/training/CourseChatbot";

const Training = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    
    // Load the Conduit.ai chat widget
    const script = document.createElement('script');
    script.src = "https://base.conduit.ai/widget/widget.min.js";
    script.async = true;
    script.setAttribute('data-widget-id', 'a577c803-4c1a-4b17-4b7d-2dc85a55b344');
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedPracticeAreas, setSelectedPracticeAreas] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  // Get unique practice areas
  const practiceAreas = useMemo(() => {
    return Array.from(new Set(courses.map(c => c.practiceArea))).sort();
  }, []);

  // Filter courses
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      // Search filter
      if (searchQuery && !course.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Status filter
      if (selectedStatuses.length > 0 && !selectedStatuses.includes(course.status)) {
        return false;
      }
      
      // Duration filter
      if (selectedDurations.length > 0 && !selectedDurations.includes(course.duration)) {
        return false;
      }
      
      // Practice area filter
      if (selectedPracticeAreas.length > 0 && !selectedPracticeAreas.includes(course.practiceArea)) {
        return false;
      }
      
      // Level filter
      if (selectedLevels.length > 0 && !selectedLevels.includes(course.level)) {
        return false;
      }
      
      return true;
    });
  }, [searchQuery, selectedStatuses, selectedDurations, selectedPracticeAreas, selectedLevels]);

  const featuredCourses = courses.filter(c => c.featured);

  const toggleFilter = (value: string, selected: string[], setter: (val: string[]) => void) => {
    if (selected.includes(value)) {
      setter(selected.filter(v => v !== value));
    } else {
      setter([...selected, value]);
    }
  };

  return (
    <>
      <SEO
        title="AI Training & Certification Programs | WhitegloveAI"
        description="Transform your organization with industry-recognized AI certifications from AICerts. Browse our complete catalog of AI courses with advanced filtering and get personalized recommendations."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                Transform Your Future with AI Certification
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Partner with AICerts to access industry-recognized AI training programs. Browse our complete catalog and get personalized course recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* AI Course Advisor Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                AI Course Advisor
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
                Get personalized course recommendations powered by AI. Our intelligent advisor analyzes your background, goals, and experience to suggest the perfect certification path.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="font-semibold text-lg mb-3 flex items-center justify-center gap-2">
                  <Upload className="h-5 w-5" />
                  Pro Tip: Upload Your Resume
                </h3>
                <p className="text-sm text-muted-foreground">
                  For the most accurate recommendations, upload your resume (PDF or DOCX). Our AI will analyze your experience, skills, and career trajectory to recommend 3-5 courses perfectly tailored to your professional development goals.
                </p>
              </div>
            </div>
            
            <CourseChatbot embedded />
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredCourses.map((course) => (
                <CourseCard key={course.name} course={course} isFeatured />
              ))}
            </div>
          </div>
        </section>

        {/* Course Catalog */}
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Course Catalog
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore all {courses.length} available courses. Use filters to find the perfect match for your goals.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-80 shrink-0">
                <div className="sticky top-4 bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Filter Courses</h3>
                  <CourseFilters
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    selectedStatuses={selectedStatuses}
                    onStatusChange={(status) => toggleFilter(status, selectedStatuses, setSelectedStatuses)}
                    selectedDurations={selectedDurations}
                    onDurationChange={(duration) => toggleFilter(duration, selectedDurations, setSelectedDurations)}
                    selectedPracticeAreas={selectedPracticeAreas}
                    onPracticeAreaChange={(area) => toggleFilter(area, selectedPracticeAreas, setSelectedPracticeAreas)}
                    selectedLevels={selectedLevels}
                    onLevelChange={(level) => toggleFilter(level, selectedLevels, setSelectedLevels)}
                    practiceAreas={practiceAreas}
                  />
                </div>
              </div>

              {/* Course Grid */}
              <div className="flex-1">
                <div className="mb-4 text-sm text-muted-foreground">
                  Showing {filteredCourses.length} of {courses.length} courses
                </div>
                
                {filteredCourses.length === 0 ? (
                  <div className="text-center py-12 bg-muted/30 rounded-lg">
                    <p className="text-lg text-muted-foreground">
                      No courses match your filters. Try adjusting your criteria.
                    </p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredCourses.map((course) => (
                      <CourseCard key={course.name} course={course} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Partner Badge Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="bg-card border rounded-xl p-8 md:p-12 text-center">
              <div className="inline-block mb-6 px-6 py-3 bg-primary/10 rounded-lg">
                <span className="text-2xl font-bold text-primary">Authorized Partner</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">AICerts Partner</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                WhitegloveAI is proud to be an authorized partner of AICerts, delivering premium AI certification programs with the highest standards of quality and excellence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Training;