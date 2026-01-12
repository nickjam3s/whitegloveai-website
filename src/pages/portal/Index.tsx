import React from 'react';
import { Navigate } from 'react-router-dom';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import { Loader2 } from 'lucide-react';
import AdminDashboard from './components/AdminDashboard';
import ClientDashboard from './components/ClientDashboard';

const PortalIndex = () => {
  const { user, portalUser, portalUserLoading, loading, isAdmin } = usePortalAuth();

  // Show loading while auth is initializing OR while portal user is being fetched
  if (loading || (user && portalUserLoading)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">
            {loading ? 'Loading portal...' : 'Checking authorization...'}
          </p>
        </div>
      </div>
    );
  }

  // Only redirect if user is definitely not logged in
  if (!user) {
    return <Navigate to="/portal/auth" replace />;
  }

  // User is logged in but no portal user record found
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

  if (!portalUser.is_active) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Account Inactive</h1>
          <p className="text-muted-foreground">
            Your account is currently inactive. Please contact an administrator.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {isAdmin ? <AdminDashboard /> : <ClientDashboard />}
    </div>
  );
};

export default PortalIndex;