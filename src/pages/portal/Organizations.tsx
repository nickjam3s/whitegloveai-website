import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PortalLayout from './components/PortalLayout';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Plus, Search, Edit, Trash2, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Organization {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
  member_count?: number;
}

const Organizations = () => {
  const { isAdmin } = usePortalAuth();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [filteredOrganizations, setFilteredOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);

  const fetchOrganizations = async () => {
    try {
      // Fetch organizations with member count
      const { data: orgs, error: orgsError } = await supabase
        .from('client_groups')
        .select('*')
        .order('created_at', { ascending: false });

      if (orgsError) throw orgsError;

      // Fetch member counts for each organization
      const orgsWithMemberCount = await Promise.all(
        (orgs || []).map(async (org) => {
          const { count } = await supabase
            .from('client_group_memberships')
            .select('id', { count: 'exact' })
            .eq('group_id', org.id);

          return {
            ...org,
            member_count: count || 0,
          };
        })
      );

      setOrganizations(orgsWithMemberCount);
      setFilteredOrganizations(orgsWithMemberCount);
    } catch (error) {
      console.error('Error fetching organizations:', error);
      toast.error('Failed to load organizations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrganizations();
  }, []);

  useEffect(() => {
    const filtered = organizations.filter(org =>
      org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (org.description && org.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredOrganizations(filtered);
  }, [searchTerm, organizations]);

  const handleDelete = async (id: string) => {
    setDeleteLoading(id);
    try {
      // First, delete all memberships
      const { error: membershipsError } = await supabase
        .from('client_group_memberships')
        .delete()
        .eq('group_id', id);

      if (membershipsError) throw membershipsError;

      // Then delete the organization
      const { error: orgError } = await supabase
        .from('client_groups')
        .delete()
        .eq('id', id);

      if (orgError) throw orgError;

      toast.success('Organization deleted successfully');
      fetchOrganizations();
    } catch (error) {
      console.error('Error deleting organization:', error);
      toast.error('Failed to delete organization');
    } finally {
      setDeleteLoading(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (!isAdmin) {
    return (
      <PortalLayout>
        <div className="p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Access Denied</h1>
            <p className="text-muted-foreground">
              You don't have permission to view this page.
            </p>
          </div>
        </div>
      </PortalLayout>
    );
  }

  return (
    <PortalLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Organizations</h1>
            <p className="text-muted-foreground">
              Manage client organizations and their members
            </p>
          </div>
          <Button asChild>
            <Link to="/portal/organizations/new">
              <Plus className="mr-2 h-4 w-4" />
              New Organization
            </Link>
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search organizations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Organizations Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Organizations</CardTitle>
            <CardDescription>
              {filteredOrganizations.length} organization{filteredOrganizations.length !== 1 ? 's' : ''} found
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-4 bg-muted rounded w-full mb-2"></div>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : filteredOrganizations.length === 0 ? (
              <div className="text-center py-12">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {searchTerm ? 'No organizations found' : 'No organizations yet'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {searchTerm 
                    ? 'Try adjusting your search terms'
                    : 'Create your first organization to get started'
                  }
                </p>
                {!searchTerm && (
                  <Button asChild>
                    <Link to="/portal/organizations/new">
                      <Plus className="mr-2 h-4 w-4" />
                      Create Organization
                    </Link>
                  </Button>
                )}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Members</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrganizations.map((org) => (
                      <TableRow key={org.id}>
                        <TableCell className="font-medium">{org.name}</TableCell>
                        <TableCell className="max-w-xs truncate">
                          {org.description || (
                            <span className="text-muted-foreground">No description</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">
                            {org.member_count || 0} member{org.member_count !== 1 ? 's' : ''}
                          </Badge>
                        </TableCell>
                        <TableCell>{formatDate(org.created_at)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button asChild size="sm" variant="outline">
                              <Link to={`/portal/organizations/${org.id}/edit`}>
                                <Edit className="h-4 w-4" />
                              </Link>
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  disabled={deleteLoading === org.id}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete Organization</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete "{org.name}"? This will also remove all members from the organization. This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDelete(org.id)}
                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
};

export default Organizations;