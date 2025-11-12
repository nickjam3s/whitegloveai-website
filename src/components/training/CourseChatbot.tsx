import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MessageCircle, Send, Upload, X, Loader2, RotateCcw, Download, Filter, Maximize2, Minimize2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { courses } from "@/data/courses";
import { z } from "zod";

// Security validation schemas
const messageSchema = z.object({
  content: z.string()
    .trim()
    .min(1, "Message cannot be empty")
    .max(2000, "Message must be less than 2000 characters")
    .refine(
      (val) => !/<script|javascript:|onerror=|onclick=/i.test(val),
      "Invalid characters detected in message"
    )
});

const fileSchema = z.object({
  name: z.string(),
  size: z.number()
    .max(20 * 1024 * 1024, "File size must be less than 20MB"),
  type: z.enum([
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ], {
    errorMap: () => ({ message: "Only PDF, DOC, and DOCX files are allowed" })
  })
});

interface Message {
  role: "user" | "assistant";
  content: string;
  recommendedCourses?: string[];
}

interface CourseChatbotProps {
  embedded?: boolean;
  onApplyFilters?: (courseNames: string[]) => void;
}

export const CourseChatbot = ({ embedded = false, onApplyFilters }: CourseChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Welcome! I can help you find the perfect AI certification. Ask me a question about courses, or upload your resume for instant personalized recommendations."
    },
    {
      role: "assistant",
      content: "💡 Pro tip: Upload your resume (PDF or DOCX) using the upload button below for instant personalized course recommendations tailored to your experience and career goals!"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Extract course names from AI response
  const extractCourseNames = (content: string): string[] => {
    const foundCourses: string[] = [];
    
    // Look for course names in the response
    courses.forEach(course => {
      // Check for exact match or close variations
      const courseName = course.name.replace(/\+/g, '\\+'); // Escape + for regex
      const regex = new RegExp(courseName, 'i');
      if (regex.test(content)) {
        foundCourses.push(course.name);
      }
    });
    
    return foundCourses;
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Validate message content
    try {
      const validatedMessage = messageSchema.parse({ content: input.trim() });
      const userMessage = validatedMessage.content;
      
      setInput("");
      setMessages(prev => [...prev, { role: "user", content: userMessage }]);
      setIsLoading(true);

      try {
        const { data, error } = await supabase.functions.invoke("course-chat", {
          body: { message: userMessage, conversationHistory: messages }
        });

        if (error) throw error;

        const recommendedCourses = extractCourseNames(data.response);
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: data.response,
          recommendedCourses: recommendedCourses.length > 0 ? recommendedCourses : undefined
        }]);
      } catch (error) {
        console.error("Chat error:", error);
        toast({
          title: "Error",
          description: "Failed to get response. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid Input",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }

    // Validate file
    try {
      const validatedFile = fileSchema.parse({
        name: file.name,
        size: file.size,
        type: file.type
      });

      // Additional extension check as security measure
      const allowedExtensions = ['.pdf', '.doc', '.docx'];
      const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
      
      if (!allowedExtensions.includes(fileExtension)) {
        throw new Error("Invalid file extension. Only PDF, DOC, and DOCX files are allowed.");
      }

      // Check for double extensions (security risk)
      const extensionCount = (file.name.match(/\./g) || []).length;
      if (extensionCount > 1) {
        throw new Error("Files with multiple extensions are not allowed for security reasons.");
      }

      setIsLoading(true);
      setMessages(prev => [...prev, { role: "user", content: `[Uploaded resume: ${file.name}]` }]);

      try {
        const fileData = await file.arrayBuffer();
        const base64 = btoa(String.fromCharCode(...new Uint8Array(fileData)));

        const { data, error } = await supabase.functions.invoke("course-chat", {
          body: { 
            message: "Analyze my resume and recommend courses",
            resumeFile: base64,
            fileName: file.name,
            conversationHistory: messages 
          }
        });

        if (error) throw error;

        const recommendedCourses = extractCourseNames(data.response);
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: data.response,
          recommendedCourses: recommendedCourses.length > 0 ? recommendedCourses : undefined
        }]);
      } catch (error) {
        console.error("Resume analysis error:", error);
        toast({
          title: "Error",
          description: "Failed to analyze resume. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid File",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else if (error instanceof Error) {
        toast({
          title: "Invalid File",
          description: error.message,
          variant: "destructive",
        });
      }
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Welcome! I can help you find the perfect AI certification. Ask me a question about courses, or upload your resume for instant personalized recommendations."
      },
      {
        role: "assistant",
        content: "💡 Pro tip: Upload your resume (PDF or DOCX) using the upload button below for instant personalized course recommendations tailored to your experience and career goals!"
      }
    ]);
    toast({
      title: "Chat reset",
      description: "Conversation has been cleared.",
    });
  };

  const handleDownloadTranscript = () => {
    const transcript = messages.map(msg => {
      const role = msg.role === "user" ? "You" : "AI Advisor";
      return `${role}:\n${msg.content}\n\n`;
    }).join('---\n\n');

    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `course-chat-transcript-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Transcript saved",
      description: "Chat transcript has been downloaded.",
    });
  };

  if (embedded) {
    return (
      <TooltipProvider>
        <Card className="w-full h-[280px] shadow-xl flex flex-col overflow-hidden">
          <CardHeader className="border-b shrink-0 flex flex-row items-center justify-between space-y-0 py-3">
            <CardTitle className="text-lg">Ask Our AI Course Advisor</CardTitle>
            <div className="flex gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={() => setIsExpanded(true)} className="h-8 w-8">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Expand chat</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={handleResetChat} className="h-8 w-8">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Reset chat</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={handleDownloadTranscript} className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Save transcript</TooltipContent>
              </Tooltip>
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-4 gap-4 min-h-0 overflow-hidden">
          <ScrollArea className="flex-1 pr-4 overflow-y-auto" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    {message.role === "assistant" && message.recommendedCourses && message.recommendedCourses.length > 0 && onApplyFilters && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3 w-full"
                        onClick={() => {
                          onApplyFilters(message.recommendedCourses!);
                          setIsExpanded(false); // Minimize modal if expanded
                          toast({
                            title: "Filters Applied",
                            description: `Now showing ${message.recommendedCourses!.length} recommended courses`,
                          });
                          // Scroll to catalog after brief delay
                          setTimeout(() => {
                            document.getElementById('course-catalog')?.scrollIntoView({ behavior: 'smooth' });
                          }, 300);
                        }}
                      >
                        <Filter className="h-4 w-4 mr-2" />
                        Set my filters on the recommended courses
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg px-4 py-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <div className="flex gap-2 shrink-0">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
            >
              <Upload className="h-4 w-4" />
            </Button>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask about courses..."
              disabled={isLoading}
            />
            <Button onClick={handleSendMessage} disabled={isLoading || !input.trim()} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

        {/* Expanded Modal View */}
        <Dialog open={isExpanded} onOpenChange={setIsExpanded}>
          <DialogContent className="max-w-4xl h-[80vh] flex flex-col p-0">
            <DialogHeader className="border-b px-6 py-4 shrink-0">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-xl">AI Course Advisor</DialogTitle>
                <div className="flex gap-1">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={handleResetChat} className="h-8 w-8">
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Reset chat</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={handleDownloadTranscript} className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Save transcript</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => setIsExpanded(false)} className="h-8 w-8">
                        <Minimize2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Minimize</TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </DialogHeader>

            <div className="flex-1 flex flex-col p-6 gap-4 min-h-0 overflow-hidden">
              <ScrollArea className="flex-1 pr-4 overflow-y-auto" ref={scrollRef}>
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-3 ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        <p className="text-base whitespace-pre-wrap">{message.content}</p>
                        {message.role === "assistant" && message.recommendedCourses && message.recommendedCourses.length > 0 && onApplyFilters && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-3 w-full"
                            onClick={() => {
                              onApplyFilters(message.recommendedCourses!);
                              setIsExpanded(false);
                              toast({
                                title: "Filters Applied",
                                description: `Now showing ${message.recommendedCourses!.length} recommended courses`,
                              });
                              setTimeout(() => {
                                document.getElementById('course-catalog')?.scrollIntoView({ behavior: 'smooth' });
                              }, 300);
                            }}
                          >
                            <Filter className="h-4 w-4 mr-2" />
                            Set my filters on the recommended courses
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg px-4 py-3">
                        <Loader2 className="h-5 w-5 animate-spin" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              <div className="flex gap-2 shrink-0">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isLoading}
                >
                  <Upload className="h-5 w-5" />
                </Button>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask about courses..."
                  disabled={isLoading}
                  className="text-base"
                />
                <Button onClick={handleSendMessage} disabled={isLoading || !input.trim()} size="icon">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </TooltipProvider>
    );
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <TooltipProvider>
      <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b shrink-0">
          <CardTitle className="text-lg">Course Advisor</CardTitle>
          <div className="flex gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleResetChat} className="h-8 w-8">
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Reset chat</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleDownloadTranscript} className="h-8 w-8">
                  <Download className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Save transcript</TooltipContent>
            </Tooltip>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4 gap-4 min-h-0 overflow-hidden">
        <ScrollArea className="flex-1 pr-4 overflow-y-auto" ref={scrollRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                   className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  {message.role === "assistant" && message.recommendedCourses && message.recommendedCourses.length > 0 && onApplyFilters && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-3 w-full"
                      onClick={() => {
                        onApplyFilters(message.recommendedCourses!);
                        setIsOpen(false);
                        toast({
                          title: "Filters Applied",
                          description: `Now showing ${message.recommendedCourses!.length} recommended courses`,
                        });
                        setTimeout(() => {
                          document.getElementById('course-catalog')?.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                      }}
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      Set my filters on the recommended courses
                    </Button>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg px-4 py-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="flex gap-2 shrink-0">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".pdf,.doc,.docx"
            className="hidden"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
          >
            <Upload className="h-4 w-4" />
          </Button>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask about courses..."
            disabled={isLoading}
          />
          <Button onClick={handleSendMessage} disabled={isLoading || !input.trim()} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
    </TooltipProvider>
  );
};
