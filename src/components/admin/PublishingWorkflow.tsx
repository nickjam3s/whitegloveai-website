
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Calendar, Send, Clock, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PublishingWorkflowProps {
  postId?: string;
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  featuredImage: string;
  onPublished: () => void;
}

const PublishingWorkflow = ({ 
  postId, 
  title, 
  content, 
  excerpt, 
  tags, 
  seoTitle, 
  seoDescription, 
  featuredImage,
  onPublished 
}: PublishingWorkflowProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [publishMode, setPublishMode] = useState<'now' | 'scheduled'>('now');
  const [distributeMode, setDistributeMode] = useState<'publish-only' | 'publish-distribute'>('publish-only');
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  const [campaignSubject, setCampaignSubject] = useState(title);
  const [campaignScheduledDate, setCampaignScheduledDate] = useState('');
  const [campaignScheduledTime, setCampaignScheduledTime] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);
  const { toast } = useToast();

  const handlePublish = async () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Title and content are required",
        variant: "destructive",
      });
      return;
    }

    setIsPublishing(true);
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      // Prepare post data
      const postData = {
        title,
        content,
        excerpt: excerpt || title.substring(0, 150) + '...',
        tags,
        seo_title: seoTitle || title,
        seo_description: seoDescription || excerpt,
        featured_image: featuredImage,
        author_id: user.id,
        slug: title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-'),
      };

      // Handle scheduling
      if (publishMode === 'scheduled') {
        if (!scheduledDate || !scheduledTime) {
          throw new Error("Please select both date and time for scheduling");
        }
        
        const scheduledDateTime = new Date(`${scheduledDate}T${scheduledTime}`);
        if (scheduledDateTime <= new Date()) {
          throw new Error("Scheduled time must be in the future");
        }
        
        postData.scheduled_at = scheduledDateTime.toISOString();
        postData.status = 'draft';
        postData.distribution_status = distributeMode === 'publish-distribute' ? 'scheduled' : 'none';
      } else {
        postData.status = 'published';
        postData.published_at = new Date().toISOString();
        postData.distribution_status = distributeMode === 'publish-distribute' ? 'scheduled' : 'none';
      }

      // Save or update post
      let savedPost;
      if (postId) {
        const { data, error } = await supabase
          .from("posts")
          .update(postData)
          .eq("id", postId)
          .select()
          .single();
        
        if (error) throw error;
        savedPost = data;
      } else {
        const { data, error } = await supabase
          .from("posts")
          .insert(postData)
          .select()
          .single();
        
        if (error) throw error;
        savedPost = data;
      }

      // Handle campaign creation if distributing
      if (distributeMode === 'publish-distribute') {
        const campaignData = {
          post_id: savedPost.id,
          subject: campaignSubject || title,
          status: 'draft',
          recipient_count: 0,
          open_count: 0,
          click_count: 0,
        };

        // Handle campaign scheduling
        if (publishMode === 'scheduled' || (campaignScheduledDate && campaignScheduledTime)) {
          const campaignDateTime = campaignScheduledDate && campaignScheduledTime 
            ? new Date(`${campaignScheduledDate}T${campaignScheduledTime}`)
            : new Date(`${scheduledDate}T${scheduledTime}`);
          
          if (campaignDateTime <= new Date()) {
            throw new Error("Campaign scheduled time must be in the future");
          }
          
          campaignData.scheduled_send_at = campaignDateTime.toISOString();
        }

        const { error: campaignError } = await supabase
          .from("email_campaigns")
          .insert(campaignData);

        if (campaignError) throw campaignError;
      }

      toast({
        title: "Success",
        description: publishMode === 'scheduled' 
          ? `Post scheduled for ${new Date(`${scheduledDate}T${scheduledTime}`).toLocaleString()}`
          : distributeMode === 'publish-distribute'
            ? "Post published and campaign created"
            : "Post published successfully",
      });

      setIsOpen(false);
      onPublished();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          <Send className="h-4 w-4 mr-2" />
          Publish Post
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Publish Post</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Publishing Mode */}
          <div className="space-y-4">
            <Label className="text-base font-medium">When to publish?</Label>
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="publish-now"
                  name="publishMode"
                  value="now"
                  checked={publishMode === 'now'}
                  onChange={(e) => setPublishMode(e.target.value as 'now' | 'scheduled')}
                />
                <Label htmlFor="publish-now" className="flex items-center cursor-pointer">
                  <Send className="h-4 w-4 mr-2" />
                  Publish Now
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="schedule-publish"
                  name="publishMode"
                  value="scheduled"
                  checked={publishMode === 'scheduled'}
                  onChange={(e) => setPublishMode(e.target.value as 'now' | 'scheduled')}
                />
                <Label htmlFor="schedule-publish" className="flex items-center cursor-pointer">
                  <Clock className="h-4 w-4 mr-2" />
                  Schedule
                </Label>
              </div>
            </div>

            {publishMode === 'scheduled' && (
              <div className="flex gap-4">
                <div className="flex-1">
                  <Label htmlFor="scheduled-date">Date</Label>
                  <Input
                    id="scheduled-date"
                    type="date"
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="scheduled-time">Time</Label>
                  <Input
                    id="scheduled-time"
                    type="time"
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Distribution Mode */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Distribution</Label>
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="publish-only"
                  name="distributeMode"
                  value="publish-only"
                  checked={distributeMode === 'publish-only'}
                  onChange={(e) => setDistributeMode(e.target.value as 'publish-only' | 'publish-distribute')}
                />
                <Label htmlFor="publish-only" className="cursor-pointer">
                  Publish Only
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="publish-distribute"
                  name="distributeMode"
                  value="publish-distribute"
                  checked={distributeMode === 'publish-distribute'}
                  onChange={(e) => setDistributeMode(e.target.value as 'publish-only' | 'publish-distribute')}
                />
                <Label htmlFor="publish-distribute" className="flex items-center cursor-pointer">
                  <Mail className="h-4 w-4 mr-2" />
                  Publish & Distribute
                </Label>
              </div>
            </div>

            {distributeMode === 'publish-distribute' && (
              <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
                <div>
                  <Label htmlFor="campaign-subject">Email Subject</Label>
                  <Input
                    id="campaign-subject"
                    value={campaignSubject}
                    onChange={(e) => setCampaignSubject(e.target.value)}
                    placeholder="Email subject line"
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Campaign Schedule (optional)</Label>
                  <p className="text-sm text-gray-600 mb-2">Leave empty to send with post publication</p>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Input
                        type="date"
                        value={campaignScheduledDate}
                        onChange={(e) => setCampaignScheduledDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="flex-1">
                      <Input
                        type="time"
                        value={campaignScheduledTime}
                        onChange={(e) => setCampaignScheduledTime(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handlePublish}
              disabled={isPublishing}
              className="flex-1"
            >
              {isPublishing ? "Publishing..." : 
               publishMode === 'scheduled' ? "Schedule" : "Publish"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PublishingWorkflow;
