import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

export default function ExtractCourseMetadata() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState<string[]>([]);
  const [stats, setStats] = useState({ success: 0, failed: 0, total: 0 });

  const extractAllMetadata = async () => {
    setIsProcessing(true);
    setProgress([]);
    setStats({ success: 0, failed: 0, total: 0 });

    try {
      // Fetch all course outlines
      const { data: courses, error } = await supabase
        .from('course_outlines')
        .select('course_slug, course_name, pdf_filename')
        .order('course_name');

      if (error) throw error;
      if (!courses || courses.length === 0) {
        toast.error('No courses found');
        return;
      }

      setStats(prev => ({ ...prev, total: courses.length }));
      setProgress(prev => [...prev, `Starting extraction for ${courses.length} courses...`]);

      // Process each course
      for (const course of courses) {
        try {
          setProgress(prev => [...prev, `Processing: ${course.course_name}...`]);

          const { data, error: funcError } = await supabase.functions.invoke(
            'extract-course-metadata',
            {
              body: { course_slug: course.course_slug }
            }
          );

          if (funcError) throw funcError;

          setProgress(prev => [...prev, `✓ Success: ${course.course_name}`]);
          setStats(prev => ({ ...prev, success: prev.success + 1 }));
          
          // Add small delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (err: any) {
          console.error(`Error processing ${course.course_name}:`, err);
          setProgress(prev => [...prev, `✗ Failed: ${course.course_name} - ${err.message}`]);
          setStats(prev => ({ ...prev, failed: prev.failed + 1 }));
        }
      }

      setProgress(prev => [...prev, '\n=== COMPLETE ===']);
      toast.success(`Extraction complete! Success: ${stats.success}, Failed: ${stats.failed}`);
    } catch (error: any) {
      console.error('Error in batch extraction:', error);
      toast.error(`Batch extraction failed: ${error.message}`);
      setProgress(prev => [...prev, `ERROR: ${error.message}`]);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <Card className="p-6">
        <h1 className="text-3xl font-bold mb-6">Extract Course Metadata</h1>
        
        <div className="space-y-4 mb-6">
          <p className="text-muted-foreground">
            This tool extracts structured metadata from all course outline PDFs using AI analysis.
            The metadata includes objectives, modules, prerequisites, and other key information.
          </p>
          
          <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
            <div>
              <p className="font-semibold">Total Courses: {stats.total}</p>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Success: {stats.success}</span>
            </div>
            <div className="flex items-center gap-2 text-red-600">
              <XCircle className="w-5 h-5" />
              <span className="font-semibold">Failed: {stats.failed}</span>
            </div>
          </div>
        </div>

        <Button 
          onClick={extractAllMetadata}
          disabled={isProcessing}
          size="lg"
          className="w-full mb-6"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing... ({stats.success + stats.failed} / {stats.total})
            </>
          ) : (
            'Start Metadata Extraction'
          )}
        </Button>

        {progress.length > 0 && (
          <div className="border rounded-lg p-4 bg-muted/50 max-h-96 overflow-y-auto">
            <h3 className="font-semibold mb-2">Progress Log:</h3>
            <div className="font-mono text-sm space-y-1">
              {progress.map((log, idx) => (
                <div 
                  key={idx} 
                  className={
                    log.includes('✓') ? 'text-green-600' : 
                    log.includes('✗') ? 'text-red-600' : 
                    log.includes('===') ? 'font-bold mt-2' : ''
                  }
                >
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
