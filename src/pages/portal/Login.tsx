import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePortalAuth } from "@/hooks/usePortalAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Mail } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { signInWithMagicLink, user } = usePortalAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  if (user) {
    navigate("/portal");
    return null;
  }

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);
    try {
      const { error } = await signInWithMagicLink(email);
      
      if (error) {
        toast.error(error.message || "Failed to send magic link");
      } else {
        setEmailSent(true);
        toast.success("Check your email for the magic link!");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Training Portal Login
          </CardTitle>
          <CardDescription className="text-center">
            {emailSent 
              ? "Check your email for the magic link to sign in"
              : "Enter your email to receive a magic link"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!emailSent ? (
            <form onSubmit={handleMagicLink} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Magic Link...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Magic Link
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p className="text-sm text-muted-foreground">
                  We've sent a magic link to <strong>{email}</strong>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Click the link in your email to sign in to the portal.
                </p>
              </div>
              
              <Button
                variant="outline"
                onClick={() => {
                  setEmailSent(false);
                  setEmail("");
                }}
                className="w-full"
              >
                Use Different Email
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
