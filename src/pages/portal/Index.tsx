import React from 'react';
import { Navigate } from 'react-router-dom';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import { Loader2 } from 'lucide-react';
import AdminDashboard from './components/AdminDashboard';
import ClientDashboard from './components/ClientDashboard';

const PortalIndex = () => {
  const { user, portalUser, loading, isAdmin } = usePortalAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading portal...</p>
        </div>
      </div>
    );
  }

  if (!user || !portalUser) {
    return <Navigate to="/portal/auth" replace />;
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