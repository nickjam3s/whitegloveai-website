import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, Navigate } from 'react-router-dom';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { 
  Plus, 
  Search, 
  FileText, 
  Eye, 
  CheckCircle, 
  Clock, 
  MoreVertical,
  Copy,
  ExternalLink,
  Loader2,
  ArrowLeft,
  LogOut,
  Trash2
} from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface Proposal {
  id: string;
  client_name: string;
  client_contact: string;
  client_email: string;
  slug: string;
  pin: string;
  status: string;
  template_style: string;
  view_count: number;
  created_at: string;
  published_at: string | null;
  signed_at: string | null;
  created_by: string;
  portal_users?: { email: string };
}

const statusConfig: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline'; icon: React.ReactNode }> = {
  draft: { label: 'Draft', variant: 'secondary', icon: <Clock className="h-3 w-3" /> },
  published: { label: 'Published', variant: 'default', icon: <FileText className="h-3 w-3" /> },
  viewed: { label: 'Viewed', variant: 'outline', icon: <Eye className="h-3 w-3" /> },
  signed: { label: 'Signed', variant: 'default', icon: <CheckCircle className="h-3 w-3" /> },
  expired: { label: 'Expired', variant: 'destructive', icon: <Clock className="h-3 w-3" /> },
};

const ProposalsManager: React.FC = () => {
  const { user, portalUser, portalUserLoading, loading, isAdmin, signOut } = usePortalAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [deleteTarget, setDeleteTarget] = useState<{ id: string; name: string; documentPath?: string } | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const { data: proposals, isLoading, refetch } = useQuery({
    queryKey: ['proposals'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('proposals')
        .select(`
          *,
          portal_users:created_by (email)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as unknown as Proposal[];
    },
    enabled: !!portalUser && isAdmin,
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

  // User is logged in but no portal user record
  if (!portalUser) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Access Denied</h1>
          <p className="text-muted-foreground">
            Your account does not have portal access. Please contact an administrator.
          </p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You don't have permission to access the proposal manager.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const filteredProposals = proposals?.filter(proposal => {
    const matchesSearch = proposal.client_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proposal.client_contact?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || proposal.status === activeTab;
    return matchesSearch && matchesTab;
  }) || [];

  const stats = {
    total: proposals?.length || 0,
    draft: proposals?.filter(p => p.status === 'draft').length || 0,
    published: proposals?.filter(p => p.status === 'published').length || 0,
    viewed: proposals?.filter(p => p.status === 'viewed').length || 0,
    signed: proposals?.filter(p => p.status === 'signed').length || 0,
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  const getProposalUrl = (slug: string) => {
    return `${window.location.origin}/proposal/${slug}`;
  };

  const handleSignOut = async () => {
    await signOut();
    toast.success('Signed out successfully');
  };

  const handleDeleteProposal = async () => {
    if (!deleteTarget) return;
    
    setIsDeleting(true);
    try {
      // Delete the proposal record
      const { error } = await supabase
        .from('proposals')
        .delete()
        .eq('id', deleteTarget.id);

      if (error) throw error;

      toast.success('Proposal deleted successfully');
      refetch();
    } catch (error: any) {
      toast.error('Failed to delete proposal: ' + error.message);
    } finally {
      setIsDeleting(false);
      setDeleteTarget(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
              <div className="h-6 w-px bg-border" />
              <div>
                <h1 className="text-2xl font-bold">Proposal Manager</h1>
                <p className="text-muted-foreground text-sm">Create and manage client proposals</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden md:block">{portalUser?.email}</span>
              <Button asChild>
                <Link to="/proposals/new">
                  <Plus className="h-4 w-4 mr-2" />
                  New Proposal
                </Link>
              </Button>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-muted-foreground text-sm">Total Proposals</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-muted-foreground">{stats.draft}</div>
              <p className="text-muted-foreground text-sm">Drafts</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{stats.published}</div>
              <p className="text-muted-foreground text-sm">Published</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-500">{stats.viewed}</div>
              <p className="text-muted-foreground text-sm">Viewed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">{stats.signed}</div>
              <p className="text-muted-foreground text-sm">Signed</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by client name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="draft">Draft</TabsTrigger>
                  <TabsTrigger value="published">Published</TabsTrigger>
                  <TabsTrigger value="viewed">Viewed</TabsTrigger>
                  <TabsTrigger value="signed">Signed</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : filteredProposals.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No proposals found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchQuery ? 'Try adjusting your search.' : 'Create your first proposal to get started.'}
                </p>
                {!searchQuery && (
                  <Button asChild>
                    <Link to="/proposals/new">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Proposal
                    </Link>
                  </Button>
                )}
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created By</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProposals.map((proposal) => {
                    const status = statusConfig[proposal.status] || statusConfig.draft;
                    return (
                      <TableRow key={proposal.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{proposal.client_name}</div>
                            {proposal.client_contact && (
                              <div className="text-sm text-muted-foreground">{proposal.client_contact}</div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={status.variant} className="gap-1">
                            {status.icon}
                            {status.label}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-muted-foreground">
                            {proposal.portal_users?.email?.split('@')[0] || 'Unknown'}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-muted-foreground">
                            {format(new Date(proposal.created_at), 'MMM d, yyyy')}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{proposal.view_count}</span>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem asChild>
                                <Link to={`/proposals/${proposal.id}`}>
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Details
                                </Link>
                              </DropdownMenuItem>
                              {proposal.status !== 'draft' && (
                                <>
                                  <DropdownMenuItem onClick={() => copyToClipboard(getProposalUrl(proposal.slug), 'URL')}>
                                    <Copy className="h-4 w-4 mr-2" />
                                    Copy URL
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => copyToClipboard(proposal.pin, 'PIN')}>
                                    <Copy className="h-4 w-4 mr-2" />
                                    Copy PIN
                                  </DropdownMenuItem>
                                  <DropdownMenuItem asChild>
                                    <a href={getProposalUrl(proposal.slug)} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="h-4 w-4 mr-2" />
                                      Open Proposal
                                    </a>
                                  </DropdownMenuItem>
                                </>
                              )}
                              <DropdownMenuItem 
                                onClick={() => setDeleteTarget({ 
                                  id: proposal.id, 
                                  name: proposal.client_name 
                                })}
                                className="text-destructive focus:text-destructive"
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Proposal</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete the proposal for "{deleteTarget?.name}"? 
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteProposal} 
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                'Delete'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProposalsManager;
