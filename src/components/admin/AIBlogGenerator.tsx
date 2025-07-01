
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Wand2, Sparkles, FileText, Upload, Globe, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface AIBlogGeneratorProps {
  onContentGenerated: (content: any) => void;
}

interface UploadedFile {
  id: string;
  file: File;
  name: string;
}

const AIBlogGenerator = ({ onContentGenerated }: AIBlogGeneratorProps) => {
  // Step 1: Initial Setup
  const [step, setStep] = useState<'setup' | 'titles' | 'outline' | 'content'>('setup');
  const [suggestedTitle, setSuggestedTitle] = useState("");
  const [seedPrompt, setSeedPrompt] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [urls, setUrls] = useState("");
  const [useOpenResearch, setUseOpenResearch] = useState(false);
  
  // Step 2: Title Selection
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  
  // Step 3: Outline Approval
  const [generatedOutline, setGeneratedOutline] = useState("");
  const [approvedOutline, setApprovedOutline] = useState("");
  
  // UI States
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles: UploadedFile[] = Array.from(files).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        name: file.name
      }));
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const generateTitles = async () => {
    if (!seedPrompt.trim()) {
      toast({
        title: "Error",
        description: "Please provide a seed prompt",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Process uploaded files first if any
      let documentIds: string[] = [];
      
      if (uploadedFiles.length > 0) {
        for (const fileData of uploadedFiles) {
          const { data: { user } } = await supabase.auth.getUser();
          if (!user) throw new Error("Not authenticated");

          const fileExt = fileData.file.name.split('.').pop();
          const fileName = `${user.id}/${Date.now()}_${fileData.id}.${fileExt}`;

          // Upload to storage
          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('documents')
            .upload(fileName, fileData.file);

          if (uploadError) throw uploadError;

          // Save document metadata
          const { data: docData, error: docError } = await supabase
            .from('documents')
            .insert({
              user_id: user.id,
              filename: fileName,
              original_name: fileData.file.name,
              file_size: fileData.file.size,
              mime_type: fileData.file.type,
              storage_path: uploadData.path,
              extracted_text: `Content from ${fileData.file.name}`, // Placeholder
            })
            .select()
            .single();

          if (docError) throw docError;
          documentIds.push(docData.id);
        }
      }

      const { data, error } = await supabase.functions.invoke('ai-blog-generator', {
        body: { 
          action: 'generate-titles',
          suggestedTitle,
          seedPrompt,
          documentIds,
          urls: urls.split('\n').filter(url => url.trim()),
          useOpenResearch
        },
      });

      if (error) throw error;

      setGeneratedTitles(data.titles);
      setStep('titles');
      
      toast({
        title: "Success",
        description: "Generated title suggestions for you to choose from",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const generateOutline = async () => {
    if (!selectedTitle) {
      toast({
        title: "Error",
        description: "Please select a title first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-blog-generator', {
        body: { 
          action: 'generate-outline',
          selectedTitle,
          seedPrompt,
          suggestedTitle
        },
      });

      if (error) throw error;

      setGeneratedOutline(data.outline);
      setStep('outline');
      
      toast({
        title: "Success",
        description: "Generated blog outline for your review",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const generateContent = async () => {
    if (!approvedOutline) {
      toast({
        title: "Error",
        description: "Please approve the outline first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-blog-generator', {
        body: { 
          action: 'generate-content',
          selectedTitle,
          approvedOutline,
          seedPrompt
        },
      });

      if (error) throw error;

      onContentGenerated({
        title: selectedTitle,
        ...data,
      });

      toast({
        title: "Success",
        description: "Blog content generated! Check the New Post tab.",
      });

      // Reset form
      resetForm();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setStep('setup');
    setSuggestedTitle("");
    setSeedPrompt("");
    setUploadedFiles([]);
    setUrls("");
    setUseOpenResearch(false);
    setGeneratedTitles([]);
    setSelectedTitle("");
    setGeneratedOutline("");
    setApprovedOutline("");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="h-5 w-5" />
            AI Blog Generator - {step === 'setup' ? 'Setup' : step === 'titles' ? 'Title Selection' : step === 'outline' ? 'Outline Review' : 'Content Generation'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Step 1: Initial Setup */}
          {step === 'setup' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="suggested-title">Suggested Title (Optional)</Label>
                  <Input
                    id="suggested-title"
                    value={suggestedTitle}
                    onChange={(e) => setSuggestedTitle(e.target.value)}
                    placeholder="Enter a title idea you have in mind..."
                  />
                </div>

                <div>
                  <Label htmlFor="seed-prompt">Seed Prompt *</Label>
                  <Textarea
                    id="seed-prompt"
                    value={seedPrompt}
                    onChange={(e) => setSeedPrompt(e.target.value)}
                    placeholder="Describe what you want to write about, the angle, target audience, key points to cover..."
                    rows={4}
                    required
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Content Sources (Optional)</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4" />
                      Upload Files
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                      <Input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="mb-2"
                        accept=".pdf,.doc,.docx,.txt"
                      />
                      {uploadedFiles.length > 0 && (
                        <div className="space-y-2 mt-3">
                          {uploadedFiles.map((file) => (
                            <div key={file.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                              <span className="text-sm">{file.name}</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(file.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label className="flex items-center gap-2 mb-2">
                      <Globe className="h-4 w-4" />
                      URLs to Scrape
                    </Label>
                    <Textarea
                      value={urls}
                      onChange={(e) => setUrls(e.target.value)}
                      placeholder="Enter URLs (one per line) to scrape for research..."
                      rows={3}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="open-research"
                      checked={useOpenResearch}
                      onChange={(e) => setUseOpenResearch(e.target.checked)}
                    />
                    <Label htmlFor="open-research">Use open web research</Label>
                  </div>
                </div>
              </div>

              <Button 
                onClick={generateTitles} 
                disabled={isLoading || !seedPrompt.trim()}
                className="w-full"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                {isLoading ? "Generating Titles..." : "Generate Title Options"}
              </Button>
            </div>
          )}

          {/* Step 2: Title Selection */}
          {step === 'titles' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Choose a title:</h3>
                <Button variant="outline" size="sm" onClick={() => setStep('setup')}>
                  Back to Setup
                </Button>
              </div>
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
                    />
                    <Label 
                      htmlFor={`title-${index}`} 
                      className="flex-1 p-3 border rounded cursor-pointer hover:bg-gray-50"
                    >
                      {title}
                    </Label>
                  </div>
                ))}
              </div>
              <Button 
                onClick={generateOutline} 
                disabled={isLoading || !selectedTitle}
                className="w-full"
              >
                {isLoading ? "Generating Outline..." : "Generate Blog Outline"}
              </Button>
            </div>
          )}

          {/* Step 3: Outline Review */}
          {step === 'outline' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Review & Edit Outline:</h3>
                <Button variant="outline" size="sm" onClick={() => setStep('titles')}>
                  Back to Titles
                </Button>
              </div>
              <div className="border rounded p-4 bg-gray-50">
                <h4 className="font-medium mb-2">Selected Title: {selectedTitle}</h4>
                <Textarea
                  value={approvedOutline || generatedOutline}
                  onChange={(e) => setApprovedOutline(e.target.value)}
                  rows={10}
                  placeholder="Review and edit the outline as needed..."
                />
              </div>
              <Button 
                onClick={generateContent} 
                disabled={isLoading || (!approvedOutline && !generatedOutline)}
                className="w-full"
              >
                <Wand2 className="h-4 w-4 mr-2" />
                {isLoading ? "Writing Blog Post..." : "Generate Full Blog Post"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AIBlogGenerator;
