import { useState, useMemo, useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "@/components/SEO";
import { courses } from "@/data/courses";
import { Upload } from "lucide-react";
import { CourseFilters } from "@/components/training/CourseFilters";
import { CourseCard } from "@/components/training/CourseCard";
import { CourseChatbot } from "@/components/training/CourseChatbot";
import { Button } from "@/components/ui/button";

import HeroBackground from "@/components/shared/HeroBackground";
import HB3512Banner from "@/components/HB3512Banner";
import DirDisclaimer from "@/components/DirDisclaimer";
import ContactSection from "./training/components/ContactSection";
import { injectConduitStyles } from "@/utils/conduitStyleInjector";

const TrainingCatalogue = () => {
  const location = useLocation();

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

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedPracticeAreas, setSelectedPracticeAreas] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [recommendedCourseNames, setRecommendedCourseNames] = useState<string[]>([]);

  // Get unique practice areas
  const practiceAreas = useMemo(() => {
    return Array.from(new Set(courses.map(c => c.practiceArea))).sort();
  }, []);

  // Filter courses
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      // Recommended courses filter (takes priority if set)
      if (recommendedCourseNames.length > 0 && !recommendedCourseNames.includes(course.name)) {
        return false;
      }
      
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
  }, [searchQuery, selectedStatuses, selectedDurations, selectedPracticeAreas, selectedLevels, recommendedCourseNames]);

  const featuredCourses = courses.filter(c => c.featured);

  const toggleFilter = (value: string, selected: string[], setter: (val: string[]) => void) => {
    if (selected.includes(value)) {
      setter(selected.filter(v => v !== value));
    } else {
      setter([...selected, value]);
    }
  };

  const handleApplyRecommendedFilters = (courseNames: string[]) => {
    // Clear all other filters
    setSelectedStatuses([]);
    setSelectedDurations([]);
    setSelectedPracticeAreas([]);
    setSelectedLevels([]);
    setSearchQuery("");
    
    // Set recommended courses filter
    setRecommendedCourseNames(courseNames);
    
    // Scroll to catalog section
    setTimeout(() => {
      document.getElementById('course-catalog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedStatuses([]);
    setSelectedDurations([]);
    setSelectedPracticeAreas([]);
    setSelectedLevels([]);
    setRecommendedCourseNames([]);
  };

  // Handle recommended courses from navigation state
  useEffect(() => {
    const recommendedFromNav = location.state?.recommendedCourses;
    if (recommendedFromNav && Array.isArray(recommendedFromNav)) {
      handleApplyRecommendedFilters(recommendedFromNav);
      // Clear the navigation state
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <>
      <SEO
        title="AI Course Catalog - Browse 50+ Training Programs | WhitegloveAI"
        description="Explore 50+ AI certification courses from foundational to advanced. Filter by practice area, level, and duration. HB3512-aligned training for Texas agencies. Get AI-powered course recommendations."
        canonicalPath="/maisp/training/catalogue"
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
                  Empower your workforce with nationally accredited AI training and certifications through WhitegloveAI, delivering training through ProTrain, a Middle States accredited institution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-8"
                    onClick={() => document.getElementById('course-catalog')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    See Catalogue
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredCourses.map((course) => (
                <CourseCard key={course.name} course={course} isFeatured />
              ))}
            </div>
          </div>
        </section>

        {/* Course Catalog */}
        <section id="course-catalog" className="py-16">
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
                    onReset={handleResetFilters}
                  />
                </div>
              </div>

              {/* Course Grid */}
              <div className="flex-1">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredCourses.length} of {courses.length} courses
                    {recommendedCourseNames.length > 0 && (
                      <span className="ml-2 text-primary font-medium">
                        (AI Recommended)
                      </span>
                    )}
                  </div>
                  {recommendedCourseNames.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setRecommendedCourseNames([])}
                    >
                      Clear AI filters
                    </Button>
                  )}
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


        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
};

export default TrainingCatalogue;