import React, { useState, useEffect } from 'react';
import { Navigate, Link, useSearchParams } from 'react-router-dom';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import aicertsLogo from '@/assets/aicerts-logo-white.png';

const PortalAuth = () => {
  const { user, signIn, signUp, signInWithMagicLink, resendConfirmation, loading } = usePortalAuth();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [lastEmail, setLastEmail] = useState('');
  
  // Get the mode from URL params (signup, signin, or magiclink)
  const mode = searchParams.get('mode') || 'signin';

  // Redirect if already authenticated
  if (user && !loading) {
    return <Navigate to="/portal" replace />;
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { error } = await signIn(email, password);

    if (error) {
      if (error.message.includes('Invalid login credentials')) {
        setError('Invalid email or password');
      } else if (error.message.includes('Email not confirmed')) {
        setError('Please check your email and confirm your account');
      } else {
        setError(error.message);
      }
    } else {
      toast.success('Welcome to the portal!');
    }

    setIsSubmitting(false);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setIsSubmitting(false);
      return;
    }

    const { error } = await signUp(email, password);

    if (error) {
      if (error.message.includes('User already registered')) {
        setError('An account with this email already exists');
      } else {
        setError(error.message);
      }
    } else {
      toast.success('Account created! Please check your email to confirm.');
    }

    setIsSubmitting(false);
  };

  const handleMagicLink = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setMagicLinkSent(false);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    setLastEmail(email);

    const { error } = await signInWithMagicLink(email);

    if (error) {
      setError(error.message);
    } else {
      setMagicLinkSent(true);
      toast.success('Magic link sent! Check your email to sign in.');
    }

    setIsSubmitting(false);
  };

  const handleResendConfirmation = async () => {
    if (!lastEmail) return;
    
    setIsSubmitting(true);
    setError('');

    const { error } = await resendConfirmation(lastEmail);

    if (error) {
      setError(error.message);
    } else {
      toast.success('Confirmation email resent! Check your inbox.');
    }

    setIsSubmitting(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-950 to-black flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 p-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Website
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center space-y-4">
            <img 
              src={aicertsLogo} 
              alt="AICerts" 
              className="h-12 mx-auto"
            />
            <CardTitle className="text-2xl">Welcome</CardTitle>
            <CardDescription>
              Sign in to access your WhitegloveAI portal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={mode === 'signup' ? 'signin' : mode} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="magiclink">Magic Link</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">Email</Label>
                    <Input
                      id="signin-email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signin-password">Password</Label>
                    <Input
                      id="signin-password"
                      name="password"
                      type="password"
                      required
                      placeholder="••••••••"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>
                        {error}
                        {error.includes('Email not confirmed') && lastEmail && (
                          <div className="mt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={handleResendConfirmation}
                              disabled={isSubmitting}
                            >
                              Resend confirmation email
                            </Button>
                          </div>
                        )}
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing In...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="magiclink">
                <form onSubmit={handleMagicLink} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="magiclink-email">Email</Label>
                    <Input
                      id="magiclink-email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      disabled={isSubmitting || magicLinkSent}
                    />
                  </div>

                  {magicLinkSent && (
                    <Alert>
                      <AlertDescription>
                        Magic link sent to your email! Check your inbox and click the link to sign in.
                        <div className="mt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setMagicLinkSent(false);
                              setError('');
                            }}
                          >
                            Send another magic link
                          </Button>
                        </div>
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  {error && !magicLinkSent && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting || magicLinkSent}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Magic Link...
                      </>
                    ) : magicLinkSent ? (
                      'Magic Link Sent!'
                    ) : (
                      'Send Magic Link'
                    )}
                  </Button>
                  
                  {!magicLinkSent && (
                    <p className="text-sm text-muted-foreground text-center">
                      We'll send you a secure link to sign in without a password
                    </p>
                  )}
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PortalAuth;