
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from "date-fns";
import { Search, Calendar, Eye, Edit, Trash2 } from "lucide-react";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  status: string;
  created_at: string;
  published_at: string;
  scheduled_at: string;
  tags: string[];
  slug: string;
  distribution_status: string;
}

const EnhancedPostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, searchTerm, statusFilter]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
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

  const filterPosts = () => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status
    if (statusFilter !== "all") {
      if (statusFilter === "scheduled") {
        filtered = filtered.filter(post => post.scheduled_at && new Date(post.scheduled_at) > new Date());
      } else {
        filtered = filtered.filter(post => post.status === statusFilter);
      }
    }

    setFilteredPosts(filtered);
  };

  const updatePostStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("posts")
        .update({ 
          status,
          published_at: status === "published" ? new Date().toISOString() : null,
          scheduled_at: null // Clear scheduled date when manually publishing
        })
        .eq("id", id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: `Post ${status} successfully`,
      });
      
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const { error } = await supabase
        .from("posts")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Post deleted successfully",
      });
      
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (post: Post) => {
    if (post.scheduled_at && new Date(post.scheduled_at) > new Date()) {
      return <Badge variant="secondary"><Calendar className="h-3 w-3 mr-1" />Scheduled</Badge>;
    }
    
    const statusColors = {
      published: "default",
      draft: "secondary",
    } as const;
    
    return <Badge variant={statusColors[post.status as keyof typeof statusColors] || "outline"}>{post.status}</Badge>;
  };

  const getDistributionBadge = (distributionStatus: string) => {
    const colors = {
      none: "outline",
      scheduled: "secondary", 
      sent: "default",
      failed: "destructive"
    } as const;
    
    if (distributionStatus === "none") return null;
    
    return <Badge variant={colors[distributionStatus as keyof typeof colors] || "outline"}>
      {distributionStatus === "sent" ? "Distributed" : distributionStatus}
    </Badge>;
  };

  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">All Posts</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Posts</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {filteredPosts.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-gray-500">
              {posts.length === 0 ? "No posts yet. Create your first post!" : "No posts match your search criteria."}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusBadge(post)}
                      {getDistributionBadge(post.distribution_status)}
                    </div>
                    <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                    {post.excerpt && (
                      <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
                    )}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>
                        Created {formatDistanceToNow(new Date(post.created_at))} ago
                      </span>
                      {post.published_at && (
                        <span>
                          Published {formatDistanceToNow(new Date(post.published_at))} ago
                        </span>
                      )}
                      {post.scheduled_at && new Date(post.scheduled_at) > new Date() && (
                        <span className="text-blue-600">
                          Scheduled for {new Date(post.scheduled_at).toLocaleString()}
                        </span>
                      )}
                    </div>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex gap-1 mt-2">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    {post.status === "draft" && (
                      <Button
                        size="sm"
                        onClick={() => updatePostStatus(post.id, "published")}
                      >
                        Publish
                      </Button>
                    )}
                    {post.status === "published" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updatePostStatus(post.id, "draft")}
                      >
                        Unpublish
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deletePost(post.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnhancedPostsList;
