import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Course } from "@/data/courses";
import { Clock, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  course: Course;
  isFeatured?: boolean;
}

export const CourseCard = ({ course, isFeatured = false }: CourseCardProps) => {
  const courseSlug = course.name.toLowerCase().replace(/\+/g, '-plus-').replace(/\s+/g, '-');
  
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${isFeatured ? 'border-primary' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {course.name}
          </CardTitle>
          <Badge variant={course.status === "Available" ? "default" : "secondary"}>
            {course.status}
          </Badge>
        </div>
        <CardDescription className="flex flex-wrap gap-2 mt-3">
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {course.duration}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Award className="h-3 w-3" />
            {course.level}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            {course.practiceArea}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
          {course.hasLabs && <div>✓ Includes Hands-on Labs</div>}
          {course.examAvailable && <div>✓ Certification Exam Available</div>}
          <div>✓ Available in {course.languages.length} language{course.languages.length > 1 ? 's' : ''}</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/portal/course-outline/${courseSlug}`}>
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
