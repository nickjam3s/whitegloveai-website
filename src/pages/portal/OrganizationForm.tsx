import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import PortalLayout from './components/PortalLayout';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface OrganizationFormData {
  name: string;
  description: string;
}

const OrganizationForm = () => {
  const { id } = useParams();
  const { isAdmin } = usePortalAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<OrganizationFormData>({
    name: '',
    description: '',
  });

  const isEditing = Boolean(id);

  useEffect(() => {
    if (isEditing && id) {
      fetchOrganization();
    }
  }, [id, isEditing]);

  const fetchOrganization = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('client_groups')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      setFormData({
        name: data.name || '',
        description: data.description || '',
      });
    } catch (error) {
      console.error('Error fetching organization:', error);
      toast.error('Failed to load organization');
      navigate('/portal/organizations');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error('Organization name is required');
      return;
    }

    setSubmitting(true);
    try {
      if (isEditing) {
        const { error } = await supabase
          .from('client_groups')
          .update({
            name: formData.name.trim(),
            description: formData.description.trim() || null,
          })
          .eq('id', id);

        if (error) throw error;
        toast.success('Organization updated successfully');
      } else {
        const { error } = await supabase
          .from('client_groups')
          .insert({
            name: formData.name.trim(),
            description: formData.description.trim() || null,
          });

        if (error) throw error;
        toast.success('Organization created successfully');
      }

      navigate('/portal/organizations');
    } catch (error: any) {
      console.error('Error saving organization:', error);
      if (error.code === '23505') {
        toast.error('An organization with this name already exists');
      } else {
        toast.error('Failed to save organization');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof OrganizationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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

  if (loading) {
    return (
      <PortalLayout>
        <div className="p-6">
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </PortalLayout>
    );
  }

  return (
    <PortalLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/portal/organizations">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Organizations
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {isEditing ? 'Edit Organization' : 'New Organization'}
            </h1>
            <p className="text-muted-foreground">
              {isEditing 
                ? 'Update organization details' 
                : 'Create a new organization for your clients'
              }
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Organization Details</CardTitle>
              <CardDescription>
                Provide the basic information for the organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Organization Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter organization name"
                    required
                    disabled={submitting}
                  />
                  <p className="text-sm text-muted-foreground">
                    Choose a clear, descriptive name for the organization
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Enter organization description (optional)"
                    rows={4}
                    disabled={submitting}
                  />
                  <p className="text-sm text-muted-foreground">
                    Provide additional context about the organization's purpose or focus
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="submit" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {isEditing ? 'Updating...' : 'Creating...'}
                      </>
                    ) : (
                      <>
                        {isEditing ? 'Update Organization' : 'Create Organization'}
                      </>
                    )}
                  </Button>
                  <Button variant="outline" type="button" asChild disabled={submitting}>
                    <Link to="/portal/organizations">Cancel</Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
};

export default OrganizationForm;