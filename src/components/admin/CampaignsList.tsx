
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from "date-fns";

interface Campaign {
  id: string;
  subject: string;
  status: string;
  sent_at: string;
  recipient_count: number;
  open_count: number;
  click_count: number;
  post_id: string;
  posts?: {
    title: string;
  };
}

const CampaignsList = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPostId, setSelectedPostId] = useState("");
  const [subject, setSubject] = useState("");
  const [sendingCampaign, setSendingCampaign] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchCampaigns();
    fetchPosts();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const { data, error } = await supabase
        .from("email_campaigns")
        .select(`
          *,
          posts (
            title
          )
        `)
        .order("sent_at", { ascending: false });

      if (error) throw error;
      setCampaigns(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("id, title")
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error: any) {
      console.error("Error fetching posts:", error);
    }
  };

  const createCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPostId || !subject) return;

    try {
      // Get subscriber count
      const { count } = await supabase
        .from("subscribers")
        .select("*", { count: "exact", head: true })
        .eq("status", "active");

      const { error } = await supabase
        .from("email_campaigns")
        .insert([{
          post_id: selectedPostId,
          subject,
          recipient_count: count || 0,
          status: "draft"
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Campaign created successfully",
      });

      setSelectedPostId("");
      setSubject("");
      fetchCampaigns();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const sendCampaign = async (campaignId: string) => {
    setSendingCampaign(campaignId);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-campaign', {
        body: { campaignId }
      });

      if (error) throw error;

      if (data.success) {
        toast({
          title: "Success",
          description: data.message,
        });
        fetchCampaigns();
      } else {
        throw new Error(data.error || "Failed to send campaign");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send campaign",
        variant: "destructive",
      });
    } finally {
      setSendingCampaign(null);
    }
  };

  if (loading) {
    return <div>Loading campaigns...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Campaign</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={createCampaign} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Select Post</label>
              <select
                value={selectedPostId}
                onChange={(e) => setSelectedPostId(e.target.value)}
                className="w-full p-2 border rounded-md bg-gray-800 border-gray-600 text-white"
                required
              >
                <option value="">Choose a post...</option>
                {posts.map((post) => (
                  <option key={post.id} value={post.id}>
                    {post.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Email subject line"
                className="w-full p-2 border rounded-md bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                required
              />
            </div>
            <Button type="submit">Create Campaign</Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Email Campaigns</h2>

        {campaigns.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">No campaigns yet.</p>
            </CardContent>
          </Card>
        ) : (
          campaigns.map((campaign) => (
            <Card key={campaign.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">{campaign.subject}</h3>
                    {campaign.posts && (
                      <p className="text-sm text-gray-400 mb-2">
                        Post: {campaign.posts.title}
                      </p>
                    )}
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <Badge variant={campaign.status === "sent" ? "default" : "secondary"}>
                        {campaign.status}
                      </Badge>
                      <span>{campaign.recipient_count} recipients</span>
                      {campaign.status === "sent" && (
                        <>
                          <span>{campaign.open_count} opens</span>
                          <span>{campaign.click_count} clicks</span>
                        </>
                      )}
                      <span>
                        {formatDistanceToNow(new Date(campaign.sent_at))} ago
                      </span>
                    </div>
                  </div>
                  {campaign.status === "draft" && (
                    <Button 
                      size="sm" 
                      onClick={() => sendCampaign(campaign.id)}
                      disabled={sendingCampaign === campaign.id}
                    >
                      {sendingCampaign === campaign.id ? "Sending..." : "Send Campaign"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default CampaignsList;
