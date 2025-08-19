import React, { useEffect, useState } from 'react';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import PortalLayout from './PortalLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Building2, UserPlus, Plus, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface DashboardStats {
  totalUsers: number;
  totalOrganizations: number;
  activeUsers: number;
  recentSignups: number;
}

const AdminDashboard = () => {
  const { portalUser } = usePortalAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalOrganizations: 0,
    activeUsers: 0,
    recentSignups: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch user stats
        const { data: users, error: usersError } = await supabase
          .from('portal_users')
          .select('id, is_active, created_at');

        if (usersError) throw usersError;

        // Fetch organization stats
        const { data: orgs, error: orgsError } = await supabase
          .from('client_groups')
          .select('id, created_at');

        if (orgsError) throw orgsError;

        // Calculate stats
        const totalUsers = users?.length || 0;
        const totalOrganizations = orgs?.length || 0;
        const activeUsers = users?.filter(u => u.is_active)?.length || 0;
        
        // Recent signups (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const recentSignups = users?.filter(u => 
          new Date(u.created_at) > thirtyDaysAgo
        )?.length || 0;

        setStats({
          totalUsers,
          totalOrganizations,
          activeUsers,
          recentSignups,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
        toast.error('Failed to load dashboard stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Total Users',
      value: stats.totalUsers,
      description: 'All registered users',
      icon: Users,
      color: 'text-blue-500',
    },
    {
      title: 'Organizations',
      value: stats.totalOrganizations,
      description: 'Active organizations',
      icon: Building2,
      color: 'text-green-500',
    },
    {
      title: 'Active Users',
      value: stats.activeUsers,
      description: 'Currently active users',
      icon: UserPlus,
      color: 'text-purple-500',
    },
    {
      title: 'Recent Signups',
      value: stats.recentSignups,
      description: 'Last 30 days',
      icon: TrendingUp,
      color: 'text-orange-500',
    },
  ];

  return (
    <PortalLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {portalUser?.email}
            </p>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link to="/portal/organizations/new">
                <Plus className="mr-2 h-4 w-4" />
                New Organization
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/portal/users/new">
                <UserPlus className="mr-2 h-4 w-4" />
                New User
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {loading ? '...' : stat.value}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Manage your portal efficiently
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/portal/organizations">
                  <Building2 className="mr-2 h-4 w-4" />
                  Manage Organizations
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/portal/users">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Users
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/portal/analytics">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  View Analytics
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest updates in your portal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground">
                    System running smoothly
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-muted-foreground">
                    {stats.recentSignups} new users in the last 30 days
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-muted-foreground">
                    {stats.totalOrganizations} organizations active
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
};

export default AdminDashboard;