
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface NewsletterSignupProps {
  source?: string;
  className?: string;
}

const NewsletterSignup = ({ source = "website", className = "" }: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-confirmation', {
        body: { email, source }
      });

      if (error) throw error;

      if (data.confirmed) {
        toast({
          title: "Success!",
          description: "You've been successfully subscribed to our newsletter.",
        });
        setEmail("");
      } else {
        toast({
          title: "Check your email",
          description: "We've sent you a confirmation link to complete your subscription.",
        });
        setEmail("");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`newsletter-signup ${className}`}>
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
      <p className="text-xs text-gray-500 mt-2">
        By subscribing, you agree to our{" "}
        <a href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="text-primary hover:underline">
          Terms of Service
        </a>
        . You can unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignup;
