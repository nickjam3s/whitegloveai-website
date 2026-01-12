import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Loader2, 
  Copy, 
  ExternalLink, 
  Mail,
  Eye,
  CheckCircle,
  Clock,
  FileText
} from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';

const statusConfig: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline'; icon: React.ReactNode }> = {
  draft: { label: 'Draft', variant: 'secondary', icon: <Clock className="h-4 w-4" /> },
  published: { label: 'Published', variant: 'default', icon: <FileText className="h-4 w-4" /> },
  viewed: { label: 'Viewed', variant: 'outline', icon: <Eye className="h-4 w-4" /> },
  signed: { label: 'Signed', variant: 'default', icon: <CheckCircle className="h-4 w-4" /> },
  expired: { label: 'Expired', variant: 'destructive', icon: <Clock className="h-4 w-4" /> },
};

const ProposalDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user, portalUser, portalUserLoading, loading, isAdmin } = usePortalAuth();

  const { data: proposal, isLoading: proposalLoading } = useQuery({
    queryKey: ['proposal', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('proposals')
        .select(`
          *,
          portal_users:created_by (email)
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!id && !!portalUser && isAdmin,
  });

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
            You don't have permission to view proposal details.
          </p>
        </div>
      </div>
    );
  }

  if (proposalLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!proposal) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Proposal Not Found</CardTitle>
            <CardDescription>The proposal you're looking for doesn't exist or has been removed.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/proposals">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Proposals
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const status = statusConfig[proposal.status] || statusConfig.draft;
  const proposalUrl = `${window.location.origin}/proposal/${proposal.slug}`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

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
              <h1 className="text-xl font-bold">Proposal Details</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid gap-6">
          {/* Status Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{proposal.client_name}</CardTitle>
                  <CardDescription>
                    {proposal.client_contact && <span>{proposal.client_contact}</span>}
                    {proposal.client_email && <span className="ml-2">• {proposal.client_email}</span>}
                  </CardDescription>
                </div>
                <Badge variant={status.variant} className="gap-1 text-sm px-3 py-1">
                  {status.icon}
                  {status.label}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Created</p>
                  <p className="font-medium">{format(new Date(proposal.created_at), 'MMM d, yyyy')}</p>
                </div>
                {proposal.published_at && (
                  <div>
                    <p className="text-muted-foreground">Published</p>
                    <p className="font-medium">{format(new Date(proposal.published_at), 'MMM d, yyyy')}</p>
                  </div>
                )}
                <div>
                  <p className="text-muted-foreground">Views</p>
                  <p className="font-medium">{proposal.view_count}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Template</p>
                  <p className="font-medium capitalize">{proposal.template_style?.replace(/-/g, ' ')}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions Card */}
          {proposal.status !== 'draft' && (
            <Card>
              <CardHeader>
                <CardTitle>Proposal Access</CardTitle>
                <CardDescription>Share these details with your client</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Proposal URL</p>
                    <code className="text-sm bg-muted px-2 py-1 rounded block truncate">{proposalUrl}</code>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(proposalUrl, 'URL')}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Access PIN</p>
                    <code className="text-sm bg-muted px-2 py-1 rounded block">{proposal.pin}</code>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(proposal.pin, 'PIN')}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button asChild>
                    <a href={proposalUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open Proposal
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Generated Email */}
          {proposal.generated_email && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Generated Email
                </CardTitle>
                <CardDescription>Copy this email to send to your client</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="text-sm bg-muted p-4 rounded-lg whitespace-pre-wrap max-h-64 overflow-y-auto">
                    {proposal.generated_email}
                  </pre>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(proposal.generated_email, 'Email')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Signature Info */}
          {proposal.signed_at && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  Signed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Signed By</p>
                    <p className="font-medium">{proposal.signed_by_name || 'Unknown'}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Signed At</p>
                    <p className="font-medium">{format(new Date(proposal.signed_at), 'MMM d, yyyy h:mm a')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProposalDetails;
