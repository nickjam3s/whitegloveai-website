import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, Loader2, FileText, RefreshCw, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

const ProposalsAuth: React.FC = () => {
  const { user, portalUser, portalUserLoading, signIn, signInWithMagicLink, loading, initError, resetSession } = usePortalAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Wait for both auth and portal user to load before redirecting
  if (user && !loading && !portalUserLoading) {
    if (portalUser) {
      return <Navigate to="/proposals" replace />;
    }
    // User is authenticated but has no portal access - show access denied below
  }

  // Show loading while checking portal access after sign-in
  if (user && portalUserLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-950 to-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-white/70">Checking portal access...</p>
        </div>
      </div>
    );
  }

  // User is authenticated but no portal access
  if (user && !portalUserLoading && !portalUser) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-950 to-black flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-destructive">Access Denied</CardTitle>
            <CardDescription>
              Your account does not have access to the Proposal Generator.
              Please contact an administrator.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button variant="outline" onClick={() => resetSession()}>
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    );
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
      } else {
        setError(error.message);
      }
    } else {
      toast.success('Welcome!');
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

    const { error } = await signInWithMagicLink(email);

    if (error) {
      setError(error.message);
    } else {
      setMagicLinkSent(true);
      toast.success('Magic link sent! Check your email.');
    }

    setIsSubmitting(false);
  };

  const handleResetSession = async () => {
    setIsResetting(true);
    await resetSession();
    setIsResetting(false);
    toast.success('Session reset. Please sign in.');
  };

  const handleReload = () => {
    window.location.reload();
  };

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
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Proposal Generator</CardTitle>
            <CardDescription>
              Sign in to access the AI Proposal Generator
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Init Error Alert with Recovery Options */}
            {initError && (
              <Alert variant="destructive" className="mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="ml-2">
                  <p className="font-medium">{initError}</p>
                  <div className="flex gap-2 mt-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleReload}
                      className="flex-1"
                    >
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Reload
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleResetSession}
                      disabled={isResetting}
                      className="flex-1"
                    >
                      {isResetting ? (
                        <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                      ) : null}
                      Reset Session
                    </Button>
                  </div>
                </AlertDescription>
              </Alert>
            )}

            {/* Loading indicator (non-blocking) */}
            {loading && !initError && (
              <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-4 py-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Checking session...
              </div>
            )}

            <Tabs defaultValue="signin" className="w-full">
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
                      <AlertDescription>{error}</AlertDescription>
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
                        Magic link sent! Check your inbox.
                        <div className="mt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setMagicLinkSent(false);
                              setError('');
                            }}
                          >
                            Send another link
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
                        Sending...
                      </>
                    ) : magicLinkSent ? (
                      'Check Your Email!'
                    ) : (
                      'Send Magic Link'
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProposalsAuth;
