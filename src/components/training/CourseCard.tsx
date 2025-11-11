import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Course } from "@/data/courses";
import { Clock, Award, BookOpen, ShoppingCart, Download } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";

interface CourseCardProps {
  course: Course;
  isFeatured?: boolean;
}

export const CourseCard = ({ course, isFeatured = false }: CourseCardProps) => {
  const courseSlug = course.name
    .toLowerCase()
    .replace(/\+/g, '-plus-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-'); // Remove multiple consecutive dashes
  const { addToCart } = useCart();
  const [hasOutline, setHasOutline] = useState<boolean | null>(null);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    // Check if course outline exists
    const checkOutline = async () => {
      const { data, error } = await supabase
        .from("course_outlines")
        .select("id")
        .eq("course_slug", courseSlug)
        .maybeSingle();
      
      if (error) {
        console.error("Error checking course outline:", error);
        setHasOutline(false);
        return;
      }
      
      setHasOutline(!!data);
    };
    
    checkOutline();
  }, [courseSlug]);

  const handleDownloadOutline = async () => {
    if (!hasOutline) return;
    
    setDownloading(true);
    try {
      const { data, error } = await supabase.functions.invoke('download-course-outline', {
        body: { courseSlug }
      });

      if (error) throw error;

      if (data?.url) {
        // Trigger download
        const link = document.createElement('a');
        link.href = data.url;
        link.download = data.filename || `${course.name}-outline.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        toast.success("Course outline downloaded!");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to download course outline");
    } finally {
      setDownloading(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(course, 1);
    toast.success(`${course.name} added to cart`);
  };

  const coursePrice = course.duration === "1 Day" ? 195 : 495;
  
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
          <div>✓ Available in {course.languages.split(',').length} language{course.languages.split(',').length > 1 ? 's' : ''}</div>
          <div className="mt-3 pt-3 border-t">
            <p className="text-base font-semibold text-foreground">Self-Paced: ${coursePrice}/student</p>
            <p className="text-xs mt-1">For instructor-led training, contact us</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {hasOutline === null ? (
          <Button variant="outline" className="flex-1" disabled>
            <Download className="h-4 w-4 mr-2" />
            Loading...
          </Button>
        ) : hasOutline ? (
          <Button 
            onClick={handleDownloadOutline} 
            variant="outline" 
            className="flex-1"
            disabled={downloading}
          >
            <Download className="h-4 w-4 mr-2" />
            {downloading ? "Downloading..." : "Download Outline"}
          </Button>
        ) : (
          <Button variant="outline" className="flex-1" disabled>
            <Download className="h-4 w-4 mr-2" />
            Coming Soon
          </Button>
        )}
        <Button onClick={handleAddToCart} className="flex-1">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
