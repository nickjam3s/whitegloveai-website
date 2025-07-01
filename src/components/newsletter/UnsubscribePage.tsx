
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const UnsubscribePage = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);
  const [reason, setReason] = useState("");
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      toast({
        title: "Invalid Link",
        description: "The unsubscribe link is invalid or expired.",
        variant: "destructive",
      });
    }
  }, [token, toast]);

  const handleUnsubscribe = async () => {
    if (!token) return;

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('handle-unsubscribe', {
        body: { token, reason, feedback }
      });

      if (error) throw error;

      setIsUnsubscribed(true);
      setEmail(data.email);
      toast({
        title: "Unsubscribed",
        description: "You have been successfully unsubscribed from our newsletter.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to unsubscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Card className="w-full max-w-md bg-gray-900 border-gray-700">
          <CardContent className="pt-6">
            <p className="text-center text-red-400">Invalid unsubscribe link.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isUnsubscribed) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Card className="w-full max-w-md bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-center text-green-400">Unsubscribed Successfully</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-300 mb-4">
              {email} has been unsubscribed from the WhitegloveAI newsletter.
            </p>
            <p className="text-center text-sm text-gray-500">
              You will no longer receive emails from us. If you change your mind, you can always subscribe again on our website.
            </p>
            <div className="text-center mt-6">
              <Button 
                onClick={() => window.location.href = "/"} 
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                Return to Website
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-center text-white">Unsubscribe from Newsletter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300 text-sm">
            We're sorry to see you go! Before you unsubscribe, would you mind telling us why?
          </p>

          <div className="space-y-3">
            <Label className="text-sm font-medium text-white">Reason for unsubscribing:</Label>
            <RadioGroup value={reason} onValueChange={setReason}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="too-frequent" id="too-frequent" />
                <Label htmlFor="too-frequent" className="text-sm text-gray-300">Too many emails</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="not-relevant" id="not-relevant" />
                <Label htmlFor="not-relevant" className="text-sm text-gray-300">Content not relevant</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="never-signed-up" id="never-signed-up" />
                <Label htmlFor="never-signed-up" className="text-sm text-gray-300">Never signed up</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="text-sm text-gray-300">Other</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="feedback" className="text-sm font-medium text-white">
              Additional feedback (optional):
            </Label>
            <Textarea
              id="feedback"
              placeholder="Let us know how we can improve..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
              rows={3}
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => window.location.href = "/"}
              className="flex-1 border-gray-600 text-white hover:bg-gray-800"
            >
              Keep Subscription
            </Button>
            <Button
              onClick={handleUnsubscribe}
              disabled={isLoading}
              className="flex-1 bg-red-600 hover:bg-red-700"
            >
              {isLoading ? "Processing..." : "Unsubscribe"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UnsubscribePage;
