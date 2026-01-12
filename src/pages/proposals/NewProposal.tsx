import React, { useState, useCallback } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  ArrowRight, 
  Upload, 
  FileText, 
  Loader2, 
  Check,
  Sparkles,
  Copy,
  Mail
} from 'lucide-react';
import { toast } from 'sonner';

type Step = 'upload' | 'processing' | 'review' | 'template' | 'preview' | 'complete';

interface ProposalData {
  documentText: string;
  documentPath: string;
  clientName: string;
  clientContact: string;
  clientEmail: string;
  templateStyle: string;
  proposalContent: any;
  proposalImages: string[];
  generatedEmail: string;
  slug: string;
  pin: string;
  proposalId: string;
}

const templates = [
  {
    id: 'executive-purple',
    name: 'Executive Purple',
    description: 'WhitegloveAI brand colors with elegant gradient accents',
    preview: 'bg-gradient-to-br from-purple-600 to-violet-800',
  },
  {
    id: 'clean-modern',
    name: 'Clean Modern',
    description: 'Minimalist white background with professional styling',
    preview: 'bg-gradient-to-br from-gray-100 to-white border border-gray-200',
  },
  {
    id: 'bold-impact',
    name: 'Bold Impact',
    description: 'Dark theme with bold typography and accent colors',
    preview: 'bg-gradient-to-br from-gray-900 to-black',
  },
];

const NewProposal: React.FC = () => {
  const navigate = useNavigate();
  const { user, portalUser, portalUserLoading, loading, isAdmin } = usePortalAuth();
  const [step, setStep] = useState<Step>('upload');
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [proposalData, setProposalData] = useState<ProposalData>({
    documentText: '',
    documentPath: '',
    clientName: '',
    clientContact: '',
    clientEmail: '',
    templateStyle: 'executive-purple',
    proposalContent: null,
    proposalImages: [],
    generatedEmail: '',
    slug: '',
    pin: '',
    proposalId: '',
  });

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === 'application/pdf' || 
        droppedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        droppedFile.type === 'application/msword')) {
      setFile(droppedFile);
    } else {
      toast.error('Please upload a PDF or Word document');
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        // Remove data URL prefix (e.g., "data:application/pdf;base64,")
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const processDocument = async () => {
    if (!file || !portalUser) return;

    setStep('processing');
    setIsProcessing(true);
    setProgress(10);

    try {
      // Convert file to base64 (upload will happen in edge function with service role)
      const fileBase64 = await convertFileToBase64(file);
      setProgress(30);

      // Generate proposal via edge function (handles upload + processing)
      const { data: result, error: functionError } = await supabase.functions.invoke('generate-proposal', {
        body: {
          fileData: fileBase64,
          fileName: file.name,
          mimeType: file.type,
          templateStyle: proposalData.templateStyle,
          creatorEmail: portalUser.email,
          creatorId: portalUser.id,
        },
      });

      if (functionError) throw functionError;
      if (result.error) throw new Error(result.error);

      setProgress(100);

      setProposalData({
        ...proposalData,
        documentPath: result.proposal.documentPath || '',
        clientName: result.proposal.clientName || '',
        clientContact: result.proposal.clientContact || '',
        clientEmail: result.proposal.clientEmail || '',
        proposalContent: result.proposal.sections,
        proposalImages: result.proposal.images || [],
        generatedEmail: result.proposal.generatedEmail || '',
        slug: result.proposal.slug,
        pin: result.proposal.pin,
        proposalId: result.proposal.id,
      });

      setStep('review');
    } catch (error) {
      console.error('Processing error:', error);
      toast.error('Failed to process document. Please try again.');
      setStep('upload');
    } finally {
      setIsProcessing(false);
    }
  };

  const publishProposal = async () => {
    if (!portalUser) return;

    setIsProcessing(true);

    try {
      const { data: result, error } = await supabase.functions.invoke('publish-proposal', {
        body: {
          proposalId: proposalData.proposalId,
          publisherEmail: portalUser.email,
          // Include edited client info so corrections are saved
          clientName: proposalData.clientName,
          clientContact: proposalData.clientContact,
          clientEmail: proposalData.clientEmail,
          templateStyle: proposalData.templateStyle,
        },
      });

      if (error) throw error;
      if (result.error) throw new Error(result.error);

      setStep('complete');
      toast.success('Proposal published successfully!');
    } catch (error) {
      console.error('Publish error:', error);
      toast.error('Failed to publish proposal');
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  // Show loading while auth is initializing OR while portal user is being fetched
  if (loading || (user && portalUserLoading)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">
            {loading ? 'Loading...' : 'Checking authorization...'}
          </p>
        </div>
      </div>
    );
  }

  // Only redirect if user is definitely not logged in
  if (!user) {
    return <Navigate to="/proposals/auth" replace />;
  }

  // User is logged in but no portal user record or not admin
  if (!portalUser || !isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Access Denied</h1>
          <p className="text-muted-foreground">
            You don't have permission to create proposals. Please contact an administrator.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/proposals" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Proposals
            </Link>
            <div className="h-6 w-px bg-border" />
            <div>
              <h1 className="text-xl font-bold">Create New Proposal</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {['Upload', 'Process', 'Review', 'Template', 'Complete'].map((label, i) => {
              const steps: Step[] = ['upload', 'processing', 'review', 'template', 'complete'];
              const currentIndex = steps.indexOf(step);
              const isActive = i <= currentIndex;
              const isCurrent = i === currentIndex;
              
              return (
                <div key={label} className="flex items-center">
                  <div className={`flex items-center gap-2 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      isCurrent ? 'bg-primary text-primary-foreground' : 
                      isActive ? 'bg-primary/20 text-primary' : 'bg-muted'
                    }`}>
                      {isActive && i < currentIndex ? <Check className="h-4 w-4" /> : i + 1}
                    </div>
                    <span className="hidden sm:inline text-sm font-medium">{label}</span>
                  </div>
                  {i < 4 && <div className={`w-8 md:w-16 h-0.5 mx-2 ${isActive && i < currentIndex ? 'bg-primary' : 'bg-muted'}`} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Upload Step */}
        {step === 'upload' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Proposal Document
              </CardTitle>
              <CardDescription>
                Upload a PDF or Word document containing your proposal content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                  isDragging ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {file ? (
                  <div className="space-y-4">
                    <FileText className="h-12 w-12 mx-auto text-primary" />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <Button variant="outline" onClick={() => setFile(null)}>
                      Choose Different File
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                    <div>
                      <p className="font-medium">Drop your document here</p>
                      <p className="text-sm text-muted-foreground">or click to browse</p>
                    </div>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button variant="outline" asChild>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        Browse Files
                      </label>
                    </Button>
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <Button onClick={processDocument} disabled={!file}>
                  Continue
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Processing Step */}
        {step === 'processing' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 animate-pulse" />
                Generating Your Proposal
              </CardTitle>
              <CardDescription>
                AI is analyzing your document and creating a professional proposal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Progress value={progress} className="h-2" />
              <div className="space-y-2 text-center">
                <Loader2 className="h-8 w-8 mx-auto animate-spin text-primary" />
                <p className="text-muted-foreground">
                  {progress < 30 && 'Uploading document...'}
                  {progress >= 30 && progress < 50 && 'Extracting content...'}
                  {progress >= 50 && progress < 80 && 'Generating proposal sections...'}
                  {progress >= 80 && 'Fetching images...'}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Review Step */}
        {step === 'review' && (
          <Card>
            <CardHeader>
              <CardTitle>Review Client Information</CardTitle>
              <CardDescription>
                Verify and edit the extracted client details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="clientName">Company Name</Label>
                  <Input
                    id="clientName"
                    value={proposalData.clientName}
                    onChange={(e) => setProposalData({ ...proposalData, clientName: e.target.value })}
                    placeholder="Client Company Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clientContact">Contact Name</Label>
                  <Input
                    id="clientContact"
                    value={proposalData.clientContact}
                    onChange={(e) => setProposalData({ ...proposalData, clientContact: e.target.value })}
                    placeholder="Contact Person Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clientEmail">Contact Email</Label>
                  <Input
                    id="clientEmail"
                    type="email"
                    value={proposalData.clientEmail}
                    onChange={(e) => setProposalData({ ...proposalData, clientEmail: e.target.value })}
                    placeholder="contact@company.com"
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep('upload')}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                <Button onClick={() => setStep('template')}>
                  Continue
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Template Step */}
        {step === 'template' && (
          <Card>
            <CardHeader>
              <CardTitle>Choose Template Style</CardTitle>
              <CardDescription>
                Select a design template for your proposal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup
                value={proposalData.templateStyle}
                onValueChange={(value) => setProposalData({ ...proposalData, templateStyle: value })}
                className="grid gap-4"
              >
                {templates.map((template) => (
                  <div key={template.id} className="relative">
                    <RadioGroupItem
                      value={template.id}
                      id={template.id}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={template.id}
                      className="flex items-center gap-4 rounded-lg border-2 border-border p-4 cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-muted/50 transition-colors"
                    >
                      <div className={`w-16 h-16 rounded-lg ${template.preview}`} />
                      <div>
                        <p className="font-medium">{template.name}</p>
                        <p className="text-sm text-muted-foreground">{template.description}</p>
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep('review')}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                <Button onClick={publishProposal} disabled={isProcessing}>
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Publishing...
                    </>
                  ) : (
                    <>
                      Publish Proposal
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Complete Step */}
        {step === 'complete' && (
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <CardTitle>Proposal Published!</CardTitle>
              <CardDescription>
                Your proposal is now ready to share with {proposalData.clientName}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Share Details */}
              <div className="bg-muted rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Proposal URL</p>
                    <p className="font-mono text-sm break-all">
                      {window.location.origin}/proposal/{proposalData.slug}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(`${window.location.origin}/proposal/${proposalData.slug}`, 'URL')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Access PIN</p>
                    <p className="font-mono text-2xl font-bold">{proposalData.pin}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(proposalData.pin, 'PIN')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Generated Email */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Template
                  </Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(proposalData.generatedEmail, 'Email')}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Email
                  </Button>
                </div>
                <Textarea
                  value={proposalData.generatedEmail}
                  readOnly
                  rows={10}
                  className="font-mono text-sm"
                />
              </div>

              <div className="flex justify-center gap-4">
                <Button variant="outline" asChild>
                  <Link to="/proposals">
                    Back to Manager
                  </Link>
                </Button>
                <Button asChild>
                  <a href={`${window.location.origin}/proposal/${proposalData.slug}`} target="_blank" rel="noopener noreferrer">
                    View Proposal
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default NewProposal;
