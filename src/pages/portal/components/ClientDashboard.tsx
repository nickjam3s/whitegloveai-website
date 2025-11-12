import React, { useEffect, useState } from 'react';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import PortalLayout from './PortalLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, FileText, Download, MessageSquare } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Purchase {
  id: string;
  course_name: string;
  course_slug: string;
  order_number: string;
  amount_paid: number;
  currency: string;
  purchased_at: string;
  status: string;
  quantity: number;
}

const ClientDashboard = () => {
  const { portalUser } = usePortalAuth();
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalPurchases: 0,
    totalSpent: 0,
    activeLicenses: 0
  });

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        // Get purchases for the current user
        const { data: purchaseData, error: purchaseError } = await supabase
          .from('purchases')
          .select('*')
          .eq('user_email', portalUser?.email)
          .order('purchased_at', { ascending: false });

        if (purchaseError) throw purchaseError;

        setPurchases(purchaseData || []);

        // Calculate stats
        const totalPurchases = purchaseData?.length || 0;
        const totalSpent = purchaseData?.reduce((sum, p) => sum + Number(p.amount_paid), 0) || 0;

        // Get active licenses count
        const { data: licensesData } = await supabase
          .from('user_licenses')
          .select('*', { count: 'exact', head: true })
          .eq('user_email', portalUser?.email)
          .or('expires_at.is.null,expires_at.gt.' + new Date().toISOString());

        setStats({
          totalPurchases,
          totalSpent,
          activeLicenses: licensesData?.length || 0
        });
      } catch (error) {
        console.error('Error fetching purchases:', error);
        toast.error('Failed to load purchase history');
      } finally {
        setLoading(false);
      }
    };

    if (portalUser?.email) {
      fetchPurchases();
    }
  }, [portalUser?.email]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <PortalLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground">
            {portalUser?.email} • Client Portal
          </p>
        </div>

        {/* Quick Stats */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-8 bg-muted rounded w-3/4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Purchases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">{stats.totalPurchases}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Spent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">
                  ${stats.totalSpent.toFixed(2)}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Licenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">{stats.activeLicenses}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Purchase History */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Recent Purchases</h2>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-3 bg-muted rounded w-full"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : purchases.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  No Purchases Yet
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  You haven't purchased any courses yet. Browse our catalogue to get started.
                </p>
                <Button onClick={() => window.location.href = '/training/catalogue'}>
                  Browse Courses
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {purchases.map((purchase) => (
                <Card key={purchase.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          {purchase.course_name}
                        </CardTitle>
                        <CardDescription>
                          Order #{purchase.order_number} • {formatDate(purchase.purchased_at)}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          ${Number(purchase.amount_paid).toFixed(2)}
                        </p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {purchase.status}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        Quantity: {purchase.quantity} • Currency: {purchase.currency}
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>
                          <Download className="h-4 w-4 mr-2" />
                          Download Outline
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Support Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Need Help?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Contact our support team for assistance with your courses or account.
            </p>
            <Button variant="outline" size="sm" onClick={() => window.location.href = '/training#contact'}>
              Contact Support
            </Button>
          </CardContent>
        </Card>

        {/* Account Status */}
        <Card>
          <CardHeader>
            <CardTitle>Account Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Active</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Account created: {formatDate(portalUser?.created_at || '')}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
};

export default ClientDashboard;