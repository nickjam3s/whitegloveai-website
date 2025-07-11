import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Users,
  Plus,
  Settings,
  Key,
  UserPlus,
  Group,
  Loader2,
  Trash2,
  Edit
} from 'lucide-react';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import { supabase } from '@/integrations/supabase/client';

interface ClientGroup {
  id: string;
  name: string;
  description?: string;
  created_at: string;
  client_group_memberships: Array<{
    portal_users: { id: string; email: string };
  }>;
  retell_agent_assignments: Array<{
    retell_agent_id: string;
    agent_name?: string;
  }>;
}

interface PortalUser {
  id: string;
  email: string;
  role: 'admin' | 'client';
  created_at: string;
  is_active: boolean;
}

export default function AdminPanel() {
  const { user } = usePortalAuth();
  const [users, setUsers] = useState<PortalUser[]>([]);
  const [groups, setGroups] = useState<ClientGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDescription, setNewGroupDescription] = useState('');
  const [newGroupUsers, setNewGroupUsers] = useState('');
  const [newGroupAgents, setNewGroupAgents] = useState('');
  const [retellApiKey, setRetellApiKey] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchData = async () => {
    if (!user) return;

    try {
      setLoading(true);
      setError(null);

      // Fetch users
      const { data: usersData, error: usersError } = await supabase.functions.invoke('portal-admin/users', {
        headers: { 'x-user-email': user.email }
      });

      if (usersError) throw usersError;

      // Fetch groups
      const { data: groupsData, error: groupsError } = await supabase.functions.invoke('portal-admin/client-groups', {
        headers: { 'x-user-email': user.email }
      });

      if (groupsError) throw groupsError;

      setUsers(usersData.users || []);
      setGroups(groupsData.groups || []);
    } catch (err: any) {
      console.error('Error fetching admin data:', err);
      setError(err.message || 'Failed to load admin data');
    } finally {
      setLoading(false);
    }
  };

  const createUser = async () => {
    if (!newUserEmail.trim()) return;

    try {
      setIsSubmitting(true);
      const { data, error } = await supabase.functions.invoke('portal-admin/users', {
        method: 'POST',
        headers: { 'x-user-email': user!.email },
        body: { email: newUserEmail.trim() }
      });

      if (error) throw error;

      setNewUserEmail('');
      await fetchData();
    } catch (err: any) {
      setError(err.message || 'Failed to create user');
    } finally {
      setIsSubmitting(false);
    }
  };

  const createGroup = async () => {
    if (!newGroupName.trim()) return;

    try {
      setIsSubmitting(true);
      
      const userEmails = newGroupUsers.split(',').map(email => email.trim()).filter(Boolean);
      const agentIds = newGroupAgents.split(',').map(id => id.trim()).filter(Boolean);

      const { data, error } = await supabase.functions.invoke('portal-admin/client-groups', {
        method: 'POST',
        headers: { 'x-user-email': user!.email },
        body: {
          name: newGroupName.trim(),
          description: newGroupDescription.trim() || undefined,
          user_emails: userEmails,
          agent_ids: agentIds
        }
      });

      if (error) throw error;

      setNewGroupName('');
      setNewGroupDescription('');
      setNewGroupUsers('');
      setNewGroupAgents('');
      await fetchData();
    } catch (err: any) {
      setError(err.message || 'Failed to create group');
    } finally {
      setIsSubmitting(false);
    }
  };

  const configureRetellApi = async () => {
    if (!retellApiKey.trim()) return;

    try {
      setIsSubmitting(true);
      const { data, error } = await supabase.functions.invoke('portal-retell-api', {
        method: 'POST',
        headers: { 'x-user-email': user!.email },
        body: { apiKey: retellApiKey.trim() }
      });

      if (error) throw error;

      setRetellApiKey('');
      alert('Retell AI API key configured successfully!');
    } catch (err: any) {
      setError(err.message || 'Failed to configure Retell API key');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchData();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="users" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Users
          </TabsTrigger>
          <TabsTrigger value="groups" className="flex items-center gap-2">
            <Group className="w-4 h-4" />
            Client Groups
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Portal Users</CardTitle>
                  <CardDescription>Manage user access to the portal</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <UserPlus className="w-4 h-4 mr-2" />
                      Add User
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New User</DialogTitle>
                      <DialogDescription>
                        Enter the email address of the user you want to invite to the portal.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="user-email">Email Address</Label>
                        <Input
                          id="user-email"
                          type="email"
                          placeholder="user@example.com"
                          value={newUserEmail}
                          onChange={(e) => setNewUserEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        onClick={createUser}
                        disabled={isSubmitting || !newUserEmail.trim()}
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Plus className="w-4 h-4 mr-2" />
                        )}
                        Add User
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{user.email}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                          {user.role}
                        </Badge>
                        <Badge variant={user.is_active ? 'outline' : 'destructive'}>
                          {user.is_active ? 'Active' : 'Inactive'}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Created: {new Date(user.created_at).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="groups" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Client Groups</CardTitle>
                  <CardDescription>Organize users and assign Retell agents</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Create Group
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Create Client Group</DialogTitle>
                      <DialogDescription>
                        Create a new client group and assign users and Retell agents.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="group-name">Group Name</Label>
                        <Input
                          id="group-name"
                          placeholder="e.g., Acme Corp Users"
                          value={newGroupName}
                          onChange={(e) => setNewGroupName(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="group-description">Description (Optional)</Label>
                        <Textarea
                          id="group-description"
                          placeholder="Brief description of this group"
                          value={newGroupDescription}
                          onChange={(e) => setNewGroupDescription(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="group-users">User Emails (comma-separated)</Label>
                        <Textarea
                          id="group-users"
                          placeholder="user1@example.com, user2@example.com"
                          value={newGroupUsers}
                          onChange={(e) => setNewGroupUsers(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="group-agents">Retell Agent IDs (comma-separated)</Label>
                        <Textarea
                          id="group-agents"
                          placeholder="agent_001, agent_002"
                          value={newGroupAgents}
                          onChange={(e) => setNewGroupAgents(e.target.value)}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        onClick={createGroup}
                        disabled={isSubmitting || !newGroupName.trim()}
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Plus className="w-4 h-4 mr-2" />
                        )}
                        Create Group
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {groups.map((group) => (
                  <div key={group.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{group.name}</h3>
                        {group.description && (
                          <p className="text-sm text-muted-foreground mt-1">{group.description}</p>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Created: {new Date(group.created_at).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Users ({group.client_group_memberships.length})</h4>
                        <div className="space-y-1">
                          {group.client_group_memberships.map((membership, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {membership.portal_users.email}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Agents ({group.retell_agent_assignments.length})</h4>
                        <div className="space-y-1">
                          {group.retell_agent_assignments.map((assignment, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {assignment.agent_name || assignment.retell_agent_id}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Retell AI Integration</CardTitle>
              <CardDescription>
                Configure your Retell API key for accessing voice call data and recordings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="retell-api-key">Retell API Key</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="retell-api-key"
                    type="password"
                    placeholder="Enter your Retell API key"
                    value={retellApiKey}
                    onChange={(e) => setRetellApiKey(e.target.value)}
                  />
                  <Button
                    onClick={configureRetellApi}
                    disabled={isSubmitting || !retellApiKey.trim()}
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Key className="w-4 h-4 mr-2" />
                    )}
                    Configure
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  This key will be encrypted and used to authenticate with Retell AI.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}