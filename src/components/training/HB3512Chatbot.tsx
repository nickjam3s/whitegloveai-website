import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MessageCircle, Send, X, Loader2, RotateCcw, Download, Maximize2, Minimize2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

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

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface HB3512ChatbotProps {
  embedded?: boolean;
}

const SYSTEM_CONTEXT = `You are the HB3512 Compliance Advisor for WhitegloveAI. Your role is to help Texas public sector employees and administrators understand HB 3512 requirements and guide them to the correct training solution.

KEY FACTS:
- Texas HB 3512 requires state agencies, local governments, school districts, and certain grant applicants to complete annual AI awareness training.
- The training deadline is tied to the state fiscal year (September 1 each year).
- Employees who use computers for 25% or more of their job duties are required to complete the training.
- WhitegloveAI offers a DIR-certified, 90-minute AI Awareness course at academy.whitegloveai.com that satisfies HB 3512 requirements.
- This course is certified by the Texas Department of Information Resources (DIR) for the 2025-2026 training cycle.
- The course covers 3 modules: AI Fundamentals for Public Sector, Responsible AI Use & Ethics, and Security Privacy & Compliance.
- The official DIR page is: https://dir.texas.gov/statewide-artificial-intelligence-ai-awareness-training

IMPORTANT DISTINCTION:
- The DIR-certified AI Awareness course (academy.whitegloveai.com) is specifically for HB 3512 compliance.
- WhitegloveAI also offers separate accredited AI certifications through ProTrain (MSA-CESS accredited) for deeper professional development. These are different products.
- If someone asks about advanced certifications, professional development, or deeper AI training beyond compliance, direct them to /maisp/training.

Always be helpful, accurate, and guide users toward enrolling at academy.whitegloveai.com for HB 3512 compliance.`;

export const HB3512Chatbot = ({ embedded = false }: HB3512ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Welcome! I'm the HB3512 Compliance Advisor. I can help you understand Texas HB 3512 requirements and whether the DIR-certified AI Awareness course is right for your organization. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    if (!embedded && !isExpanded && messages.length === 1) {
      setIsExpanded(true);
    }

    try {
      const validatedMessage = messageSchema.parse({ content: input.trim() });
      const userMessage = validatedMessage.content;

      setInput("");
      setMessages(prev => [...prev, { role: "user", content: userMessage }]);
      setIsLoading(true);

      try {
        const { data, error } = await supabase.functions.invoke("course-chat", {
          body: {
            message: userMessage,
            conversationHistory: messages,
            systemContext: SYSTEM_CONTEXT
          }
        });

        if (error) throw error;

        setMessages(prev => [...prev, {
          role: "assistant",
          content: data.response
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

  const handleResetChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Welcome! I'm the HB3512 Compliance Advisor. I can help you understand Texas HB 3512 requirements and whether the DIR-certified AI Awareness course is right for your organization. What would you like to know?"
      }
    ]);
    toast({ title: "Chat reset", description: "Conversation has been cleared." });
  };

  const handleDownloadTranscript = () => {
    const transcript = messages.map(msg => {
      const role = msg.role === "user" ? "You" : "HB3512 Advisor";
      return `${role}:\n${msg.content}\n\n`;
    }).join('---\n\n');

    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hb3512-chat-transcript-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({ title: "Transcript saved", description: "Chat transcript has been downloaded." });
  };

  const renderMessages = () => (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
          <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
            message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
          }`}>
            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
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
  );

  const renderInput = () => (
    <div className="flex gap-2 shrink-0">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        placeholder="Ask about HB 3512 compliance..."
        disabled={isLoading}
      />
      <Button onClick={handleSendMessage} disabled={isLoading || !input.trim()} size="icon">
        <Send className="h-4 w-4" />
      </Button>
    </div>
  );

  const toolbarButtons = (
    <div className="flex gap-1">
      {embedded && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={() => setIsExpanded(true)} className="h-8 w-8">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Expand chat</TooltipContent>
        </Tooltip>
      )}
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
  );

  if (embedded) {
    return (
      <TooltipProvider>
        <Card className="w-full h-[350px] shadow-xl border-2 border-secondary/50 shadow-secondary/20 flex flex-col overflow-hidden">
          <CardHeader className="border-b shrink-0 flex flex-row items-center justify-between space-y-0 py-3">
            <CardTitle className="text-lg">HB3512 Compliance Advisor</CardTitle>
            {toolbarButtons}
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-4 gap-4 min-h-0 overflow-hidden">
            <ScrollArea className="flex-1 pr-4 overflow-y-auto" ref={scrollRef}>
              {renderMessages()}
            </ScrollArea>
            {renderInput()}
          </CardContent>
        </Card>

        <Dialog open={isExpanded} onOpenChange={setIsExpanded}>
          <DialogContent className="max-w-4xl h-[80vh] flex flex-col p-0 border-2 border-secondary/50 shadow-secondary/20">
            <DialogHeader className="border-b px-6 py-4 shrink-0">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-xl">HB3512 Compliance Advisor</DialogTitle>
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
                {renderMessages()}
              </ScrollArea>
              {renderInput()}
            </div>
          </DialogContent>
        </Dialog>
      </TooltipProvider>
    );
  }

  // Floating button mode
  return (
    <TooltipProvider>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full p-4 shadow-lg transition-transform hover:scale-105"
          aria-label="Open HB3512 Compliance Advisor"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {isOpen && !isExpanded && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] h-[500px] flex flex-col">
          <Card className="flex-1 flex flex-col shadow-2xl border-2 border-secondary/50 overflow-hidden">
            <CardHeader className="border-b shrink-0 flex flex-row items-center justify-between space-y-0 py-3">
              <CardTitle className="text-base">HB3512 Compliance Advisor</CardTitle>
              <div className="flex gap-1">
                {toolbarButtons}
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-4 gap-4 min-h-0 overflow-hidden">
              <ScrollArea className="flex-1 pr-4 overflow-y-auto" ref={scrollRef}>
                {renderMessages()}
              </ScrollArea>
              {renderInput()}
            </CardContent>
          </Card>
        </div>
      )}

      <Dialog open={isExpanded} onOpenChange={setIsExpanded}>
        <DialogContent className="max-w-4xl h-[80vh] flex flex-col p-0 border-2 border-secondary/50 shadow-secondary/20">
          <DialogHeader className="border-b px-6 py-4 shrink-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl">HB3512 Compliance Advisor</DialogTitle>
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
              {renderMessages()}
            </ScrollArea>
            {renderInput()}
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
};

export default HB3512Chatbot;
