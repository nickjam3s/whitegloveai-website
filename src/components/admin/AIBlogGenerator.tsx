
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Wand2, Sparkles } from "lucide-react";
import PDFUpload from "./PDFUpload";

interface GeneratedContent {
  content: string;
  excerpt: string;
  tags: string[];
  seo_title: string;
  seo_description: string;
}

interface AIBlogGeneratorProps {
  onContentGenerated: (content: GeneratedContent & { title: string }) => void;
}

const AIBlogGenerator = ({ onContentGenerated }: AIBlogGeneratorProps) => {
  const [documentId, setDocumentId] = useState<string>("");
  const [titlePrompt, setTitlePrompt] = useState("");
  const [contentPrompt, setContentPrompt] = useState("");
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [generating, setGenerating] = useState(false);
  const { toast } = useToast();

  const generateTitles = async () => {
    if (!documentId) {
      toast({
        title: "Error",
        description: "Please upload a document first",
        variant: "destructive",
      });
      return;
    }

    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-blog-generator', {
        body: { documentId, prompt: titlePrompt },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (error) throw error;

      setGeneratedTitles(data.titles);
      toast({
        title: "Success",
        description: "Generated 3 title options for you",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setGenerating(false);
    }
  };

  const generateContent = async () => {
    if (!selectedTitle) {
      toast({
        title: "Error",
        description: "Please select a title first",
        variant: "destructive",
      });
      return;
    }

    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-blog-generator', {
        body: { 
          documentId, 
          selectedTitle, 
          prompt: contentPrompt 
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (error) throw error;

      onContentGenerated({
        title: selectedTitle,
        ...data,
      });

      toast({
        title: "Success",
        description: "Blog content generated successfully! Check the New Post tab.",
      });

      // Reset form
      setDocumentId("");
      setTitlePrompt("");
      setContentPrompt("");
      setGeneratedTitles([]);
      setSelectedTitle("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="h-5 w-5" />
            AI Blog Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <PDFUpload onDocumentUploaded={setDocumentId} />

          {documentId && (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Title Generation Prompt (Optional)
                  </label>
                  <Textarea
                    value={titlePrompt}
                    onChange={(e) => setTitlePrompt(e.target.value)}
                    placeholder="Describe the angle or focus you want for the blog titles..."
                    rows={3}
                  />
                </div>

                <Button 
                  onClick={generateTitles} 
                  disabled={generating}
                  className="w-full"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  {generating ? "Generating Titles..." : "Generate 3 Title Options"}
                </Button>
              </div>

              {generatedTitles.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-medium">Choose a title:</h3>
                  <div className="space-y-2">
                    {generatedTitles.map((title, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id={`title-${index}`}
                          name="selectedTitle"
                          value={title}
                          checked={selectedTitle === title}
                          onChange={(e) => setSelectedTitle(e.target.value)}
                          className="text-primary"
                        />
                        <label 
                          htmlFor={`title-${index}`} 
                          className="flex-1 p-3 border rounded cursor-pointer hover:bg-gray-50"
                        >
                          {title}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTitle && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Content Generation Instructions (Optional)
                    </label>
                    <Textarea
                      value={contentPrompt}
                      onChange={(e) => setContentPrompt(e.target.value)}
                      placeholder="Any specific requirements for the blog content (tone, length, focus areas, etc.)..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    onClick={generateContent} 
                    disabled={generating}
                    className="w-full"
                    variant="default"
                  >
                    <Wand2 className="h-4 w-4 mr-2" />
                    {generating ? "Generating Content..." : "Generate Complete Blog Post"}
                  </Button>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AIBlogGenerator;
