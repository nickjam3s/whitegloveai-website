import React from 'react';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import PortalAuth from '@/components/portal/PortalAuth';
import PortalDashboard from '@/components/portal/PortalDashboard';
import AdminPanel from '@/components/portal/AdminPanel';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export default function Portal() {
  const { user, loading, isAuthenticated, isAdmin } = usePortalAuth();
  const [showAdmin, setShowAdmin] = React.useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-sm">
          <CardContent className="flex items-center justify-center p-8">
            <div className="text-center space-y-4">
              <Loader2 className="w-8 h-8 mx-auto animate-spin text-primary" />
              <p className="text-muted-foreground">Loading portal...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <PortalAuth />;
  }

  return (
    <div className="min-h-screen bg-background">
      <PortalDashboard />
      
      {isAdmin && showAdmin && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Portal Administration</h1>
              <button
                onClick={() => setShowAdmin(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕ Close Admin Panel
              </button>
            </div>
            <AdminPanel />
          </div>
        </div>
      )}
    </div>
  );
}