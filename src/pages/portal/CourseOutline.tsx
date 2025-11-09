import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { usePortalAuth } from "@/hooks/usePortalAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import { Clock, Award, BookOpen, Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CourseOutline = () => {
  const { slug } = useParams<{ slug: string }>();
  const { user, loading } = usePortalAuth();

  // Redirect to login if not authenticated
  if (!loading && !user) {
    return <Navigate to="/portal/auth?redirect=/training" replace />;
  }

  // Find course by slug
  const course = courses.find(c => 
    c.name.toLowerCase().replace(/\+/g, '-plus-').replace(/\s+/g, '-') === slug
  );

  if (!course && !loading) {
    return <Navigate to="/training" replace />;
  }

  if (loading || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/training">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
        </Button>

        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 pb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant={course.status === "Available" ? "default" : "secondary"}>
                {course.status}
              </Badge>
              {course.featured && (
                <Badge variant="outline" className="border-primary text-primary">
                  Featured
                </Badge>
              )}
            </div>
            <CardTitle className="text-3xl md:text-4xl mb-4">{course.name}</CardTitle>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {course.duration}
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                {course.level}
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                {course.practiceArea}
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                This comprehensive {course.duration.toLowerCase()} certification program is designed for {course.level.toLowerCase()}-level professionals in the {course.practiceArea} domain. 
                {course.hasLabs && " The course includes hands-on labs for practical application of concepts."}
                {course.examAvailable && " Upon completion, you'll be eligible to take the certification exam."}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Course Features</h3>
              <ul className="space-y-2">
                {course.hasLabs && (
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Hands-on labs and practical exercises</span>
                  </li>
                )}
                {course.examAvailable && (
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Industry-recognized certification exam</span>
                  </li>
                )}
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Expert-led instruction from AI practitioners</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Real-world case studies and applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Digital credentials and badges</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Available Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.languages.split(',').map(lang => (
                  <Badge key={lang.trim()} variant="outline">{lang.trim()}</Badge>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t">
              <h3 className="text-xl font-semibold mb-3">Program Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="font-semibold">{course.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Level</p>
                  <p className="font-semibold">{course.level}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Portfolio Type</p>
                  <p className="font-semibold">{course.portfolioType}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Practice Area</p>
                  <p className="font-semibold">{course.practiceArea}</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Ready to Enroll?</h3>
              <p className="text-muted-foreground mb-4">
                Contact our team to learn more about scheduling, pricing, and group discounts for this certification program.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Contact Us to Enroll</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseOutline;
