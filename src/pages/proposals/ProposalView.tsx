import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, Lock, CheckCircle, PenTool, Type } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

interface SectionImage {
  url: string;
  placement: "top" | "inline" | "bottom" | "none";
  caption?: string;
  searchQuery: string;
}

interface ProposalSection {
  title: string;
  content: string;
  image?: {
    enabled: boolean;
    searchQuery: string;
    placement: "top" | "inline" | "bottom" | "none";
    caption?: string;
  } | null;
  // Legacy support
  imageKeywords?: string[];
}

interface ProposalData {
  id: string;
  clientName: string;
  clientContact: string;
  clientEmail: string;
  templateStyle: string;
  proposalContent: {
    sections: ProposalSection[];
    summary: string;
  };
  // New format: object with section indices as keys
  // Legacy format: string array
  proposalImages: Record<number, SectionImage> | string[];
  status: string;
  signedAt: string | null;
  signedByName: string | null;
  signatureData: any;
  createdAt: string;
}

const ProposalView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [pin, setPin] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [proposal, setProposal] = useState<ProposalData | null>(null);
  const [error, setError] = useState('');

  // Signature state
  const [signatureTab, setSignatureTab] = useState<'type' | 'draw'>('type');
  const [typedName, setTypedName] = useState('');
  const [signerEmail, setSignerEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  // Canvas drawing handlers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = '#7c3aed';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, [isAuthenticated]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsDrawing(true);
    setHasDrawn(true);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  const verifyPin = async () => {
    if (!slug || pin.length !== 6) return;

    setIsVerifying(true);
    setError('');

    try {
      const { data, error: functionError } = await supabase.functions.invoke('verify-proposal-pin', {
        body: { slug, pin },
      });

      if (functionError) throw functionError;
      if (data.error) {
        setError(data.error);
        return;
      }

      setProposal(data.proposal);
      setIsAuthenticated(true);
    } catch (err) {
      setError('Failed to verify PIN. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const submitSignature = async () => {
    if (!proposal || !agreedToTerms) return;

    const signatureData = signatureTab === 'type' 
      ? typedName 
      : canvasRef.current?.toDataURL('image/png');

    if (signatureTab === 'type' && !typedName.trim()) {
      toast.error('Please enter your name');
      return;
    }

    if (signatureTab === 'draw' && !hasDrawn) {
      toast.error('Please draw your signature');
      return;
    }

    setIsSigning(true);

    try {
      const { data, error } = await supabase.functions.invoke('sign-proposal', {
        body: {
          slug,
          pin,
          signatureType: signatureTab,
          signatureData,
          signerName: signatureTab === 'type' ? typedName : 'Drawn Signature',
          signerEmail: signerEmail || null,
        },
      });

      if (error) throw error;
      if (data.error) throw new Error(data.error);

      setProposal({
        ...proposal,
        status: 'signed',
        signedAt: data.signedAt,
        signedByName: signatureTab === 'type' ? typedName : 'Signed',
      });

      toast.success('Proposal signed successfully!');
    } catch (err) {
      toast.error('Failed to sign proposal. Please try again.');
    } finally {
      setIsSigning(false);
    }
  };

  const getTemplateStyles = (templateStyle: string) => {
    switch (templateStyle) {
      case 'executive-purple':
        return {
          header: 'bg-gradient-to-r from-purple-600 to-violet-800 text-white',
          accent: 'text-purple-600',
          border: 'border-purple-200',
          bg: 'bg-white',
        };
      case 'clean-modern':
        return {
          header: 'bg-gray-100 text-gray-900',
          accent: 'text-gray-700',
          border: 'border-gray-200',
          bg: 'bg-white',
        };
      case 'bold-impact':
        return {
          header: 'bg-gradient-to-r from-gray-900 to-black text-white',
          accent: 'text-violet-400',
          border: 'border-gray-700',
          bg: 'bg-gray-900 text-white',
        };
      default:
        return {
          header: 'bg-gradient-to-r from-purple-600 to-violet-800 text-white',
          accent: 'text-purple-600',
          border: 'border-purple-200',
          bg: 'bg-white',
        };
    }
  };

  // PIN Entry Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-950 to-black flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Enter Access PIN</CardTitle>
            <CardDescription>
              Please enter the 6-digit PIN provided to access this proposal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
                placeholder="000000"
                className="text-center text-2xl font-mono tracking-widest"
                disabled={isVerifying}
              />
            </div>

            {error && (
              <p className="text-destructive text-sm text-center">{error}</p>
            )}

            <Button
              onClick={verifyPin}
              disabled={pin.length !== 6 || isVerifying}
              className="w-full"
            >
              {isVerifying ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Verifying...
                </>
              ) : (
                'Access Proposal'
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!proposal) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const styles = getTemplateStyles(proposal.templateStyle);
  const sections = proposal.proposalContent?.sections || [];
  const isSigned = proposal.status === 'signed';

  return (
    <div className={`min-h-screen ${styles.bg}`}>
      {/* Header */}
      <header className={`${styles.header} py-12 px-4`}>
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm opacity-75 mb-2">Proposal for</p>
          <h1 className="text-4xl font-bold mb-4">{proposal.clientName}</h1>
          {proposal.clientContact && (
            <p className="text-lg opacity-90">Prepared for: {proposal.clientContact}</p>
          )}
          <p className="text-sm opacity-75 mt-4">
            Created {format(new Date(proposal.createdAt), 'MMMM d, yyyy')}
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-4xl px-4 py-12">
        {/* Summary */}
        {proposal.proposalContent?.summary && (
          <section className="mb-12">
            <h2 className={`text-2xl font-bold mb-4 ${styles.accent}`}>Executive Summary</h2>
            <p className="text-lg leading-relaxed">{proposal.proposalContent.summary}</p>
          </section>
        )}

        {/* Sections */}
        {sections.map((section, index) => {
          // Handle both new format (object) and legacy format (array)
          const imageData: SectionImage | null = Array.isArray(proposal.proposalImages)
            ? proposal.proposalImages[index] 
              ? { url: proposal.proposalImages[index], placement: 'top' as const, searchQuery: '' }
              : null
            : proposal.proposalImages[index] || null;

          // Helper to get first paragraph for inline placement
          const getFirstParagraph = (content: string) => {
            const paragraphs = content.split('\n\n');
            return paragraphs[0] || content;
          };
          
          const getRemainingContent = (content: string) => {
            const paragraphs = content.split('\n\n');
            return paragraphs.slice(1).join('\n\n');
          };

          return (
            <section key={index} className={`mb-12 pb-12 border-b ${styles.border}`}>
              <h2 className={`text-2xl font-bold mb-4 ${styles.accent}`}>{section.title}</h2>
              
              {/* TOP placement */}
              {imageData && imageData.placement === 'top' && (
                <figure className="mb-6">
                  <img
                    src={imageData.url}
                    alt={section.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  {imageData.caption && (
                    <figcaption className="text-sm text-muted-foreground mt-2 italic text-center">
                      {imageData.caption}
                    </figcaption>
                  )}
                </figure>
              )}
              
              {/* Content with possible INLINE image */}
              <div className="prose prose-lg max-w-none">
                {imageData && imageData.placement === 'inline' ? (
                  <>
                    <p className="whitespace-pre-wrap leading-relaxed">{getFirstParagraph(section.content)}</p>
                    <figure className="my-6">
                      <img
                        src={imageData.url}
                        alt={section.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      {imageData.caption && (
                        <figcaption className="text-sm text-muted-foreground mt-2 italic text-center">
                          {imageData.caption}
                        </figcaption>
                      )}
                    </figure>
                    {getRemainingContent(section.content) && (
                      <p className="whitespace-pre-wrap leading-relaxed">{getRemainingContent(section.content)}</p>
                    )}
                  </>
                ) : (
                  <p className="whitespace-pre-wrap leading-relaxed">{section.content}</p>
                )}
              </div>
              
              {/* BOTTOM placement */}
              {imageData && imageData.placement === 'bottom' && (
                <figure className="mt-6">
                  <img
                    src={imageData.url}
                    alt={section.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  {imageData.caption && (
                    <figcaption className="text-sm text-muted-foreground mt-2 italic text-center">
                      {imageData.caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </section>
          );
        })}

        {/* Signature Section */}
        <section className="mt-16">
          <Card className={`${styles.border}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {isSigned ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Proposal Signed
                  </>
                ) : (
                  <>
                    <PenTool className="h-5 w-5" />
                    Sign This Proposal
                  </>
                )}
              </CardTitle>
              <CardDescription>
                {isSigned
                  ? `Signed by ${proposal.signedByName} on ${format(new Date(proposal.signedAt!), 'MMMM d, yyyy h:mm a')}`
                  : 'By signing below, you acknowledge and accept this proposal'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSigned ? (
                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <p className="text-lg font-medium">Thank you for signing!</p>
                  <p className="text-muted-foreground">
                    A confirmation has been sent and we'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <Tabs value={signatureTab} onValueChange={(v) => setSignatureTab(v as 'type' | 'draw')}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="type" className="gap-2">
                        <Type className="h-4 w-4" />
                        Type Name
                      </TabsTrigger>
                      <TabsTrigger value="draw" className="gap-2">
                        <PenTool className="h-4 w-4" />
                        Draw Signature
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="type" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="typedName">Full Name</Label>
                        <Input
                          id="typedName"
                          value={typedName}
                          onChange={(e) => setTypedName(e.target.value)}
                          placeholder="Enter your full name"
                          className="text-lg"
                        />
                      </div>
                      {typedName && (
                        <div className="bg-muted rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                          <p className="text-2xl font-script italic">{typedName}</p>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="draw" className="space-y-4">
                      <div className="border rounded-lg p-2 bg-white">
                        <canvas
                          ref={canvasRef}
                          width={400}
                          height={150}
                          className="w-full cursor-crosshair touch-none"
                          onMouseDown={startDrawing}
                          onMouseMove={draw}
                          onMouseUp={stopDrawing}
                          onMouseLeave={stopDrawing}
                          onTouchStart={startDrawing}
                          onTouchMove={draw}
                          onTouchEnd={stopDrawing}
                        />
                      </div>
                      <Button variant="outline" size="sm" onClick={clearCanvas}>
                        Clear Signature
                      </Button>
                    </TabsContent>
                  </Tabs>

                  <div className="space-y-2">
                    <Label htmlFor="signerEmail">Email (optional)</Label>
                    <Input
                      id="signerEmail"
                      type="email"
                      value={signerEmail}
                      onChange={(e) => setSignerEmail(e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I acknowledge that I have read and agree to the terms outlined in this proposal. 
                      My signature indicates acceptance of the proposed scope of work, timeline, and pricing.
                    </Label>
                  </div>

                  <Button
                    onClick={submitSignature}
                    disabled={!agreedToTerms || isSigning}
                    className="w-full"
                    size="lg"
                  >
                    {isSigning ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Signing...
                      </>
                    ) : (
                      'Sign Proposal'
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            This proposal was generated by WhitegloveAI
          </p>
        </footer>
      </main>
    </div>
  );
};

export default ProposalView;
