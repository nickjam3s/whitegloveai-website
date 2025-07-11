import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Phone, 
  Download, 
  FileText, 
  Search, 
  Filter,
  Calendar,
  Clock,
  User,
  Settings,
  LogOut,
  Loader2
} from 'lucide-react';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import { supabase } from '@/integrations/supabase/client';
import AdminPanel from './AdminPanel';

interface VoiceCall {
  id: string;
  timestamp: string;
  agent_id: string;
  agent_name?: string;
  duration: number;
  recording_url?: string;
  transcription?: string;
  metadata?: any;
}

interface DashboardData {
  calls: VoiceCall[];
  authorized_agents: string[];
  total_calls: number;
}

export default function PortalDashboard() {
  const { user, logout, isAdmin } = usePortalAuth();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAdmin, setShowAdmin] = useState(false);

  const fetchDashboardData = async () => {
    if (!user) return;

    try {
      setLoading(true);
      setError(null);

      const { data, error: apiError } = await supabase.functions.invoke('portal-retail-api/voice-calls', {
        headers: {
          'x-user-email': user.email
        }
      });

      if (apiError) throw apiError;

      setDashboardData(data);
    } catch (err: any) {
      console.error('Error fetching dashboard data:', err);
      setError(err.message || 'Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [user]);

  const handleDownloadRecording = async (callId: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('portal-retail-api/download-recording', {
        method: 'GET',
        headers: {
          'x-user-email': user!.email
        },
        body: new URLSearchParams({ call_id: callId })
      });

      if (error) throw error;

      if (data.download_url) {
        const link = document.createElement('a');
        link.href = data.download_url;
        link.download = data.filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to download recording');
    }
  };

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredCalls = dashboardData?.calls.filter(call => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      call.agent_name?.toLowerCase().includes(searchLower) ||
      call.agent_id.toLowerCase().includes(searchLower) ||
      call.transcription?.toLowerCase().includes(searchLower)
    );
  }) || [];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 mx-auto mb-4 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">WhitegloveAI Portal</h1>
                <p className="text-sm text-muted-foreground">Voice AI Analytics Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium">{user?.email}</p>
                <Badge variant={user?.role === 'admin' ? 'default' : 'secondary'}>
                  {user?.role}
                </Badge>
              </div>
              
              {isAdmin && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAdmin(!showAdmin)}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Admin
                </Button>
              )}
              
              <Button variant="outline" size="sm" onClick={logout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
              <Phone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardData?.total_calls || 0}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Authorized Agents</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardData?.authorized_agents.length || 0}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {filteredCalls.filter(call => 
                  new Date(call.timestamp).getMonth() === new Date().getMonth()
                ).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Voice Call Logs</CardTitle>
            <CardDescription>
              Browse and download call recordings and transcriptions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search calls by agent, ID, or transcription..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Call List */}
            <div className="space-y-4">
              {filteredCalls.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  {dashboardData?.calls.length === 0 
                    ? 'No voice calls found for your authorized agents.'
                    : 'No calls match your search criteria.'
                  }
                </div>
              ) : (
                filteredCalls.map((call) => (
                  <Card key={call.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <h3 className="font-semibold">
                              {call.agent_name || `Agent ${call.agent_id}`}
                            </h3>
                            <Badge variant="outline">{call.agent_id}</Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDate(call.timestamp)}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="w-4 h-4 mr-1" />
                              {formatDuration(call.duration)}
                            </div>
                          </div>
                          
                          {call.transcription && (
                            <div className="mt-3 p-3 bg-muted rounded-md">
                              <p className="text-sm text-muted-foreground mb-1">Transcription:</p>
                              <p className="text-sm">{call.transcription}</p>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          {call.recording_url && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDownloadRecording(call.id)}
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Recording
                            </Button>
                          )}
                          
                          {call.transcription && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                const blob = new Blob([call.transcription!], { type: 'text/plain' });
                                const url = URL.createObjectURL(blob);
                                const link = document.createElement('a');
                                link.href = url;
                                link.download = `transcription_${call.id}.txt`;
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                                URL.revokeObjectURL(url);
                              }}
                            >
                              <FileText className="w-4 h-4 mr-2" />
                              Transcript
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Admin Panel Modal */}
        {showAdmin && isAdmin && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-auto">
            <div className="container mx-auto px-4 py-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Portal Administration</h1>
                <Button variant="outline" onClick={() => setShowAdmin(false)}>
                  Close Admin Panel
                </Button>
              </div>
              <AdminPanel />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}