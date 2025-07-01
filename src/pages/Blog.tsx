
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from "date-fns";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  published_at: string;
  tags: string[];
  featured_image: string | null;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("id, title, excerpt, slug, published_at, tags, featured_image")
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribing(true);

    try {
      const { error } = await supabase
        .from("subscribers")
        .insert([{ email, status: "active" }]);

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to our newsletter.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter.",
        });
        setEmail("");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSubscribing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div>Loading posts...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">WhiteGlove AI Blog</h1>
          <p className="text-xl text-gray-300 mb-8">
            Insights, updates, and thoughts on AI innovation
          </p>
          
          {/* Newsletter Signup */}
          <Card className="max-w-md mx-auto bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Subscribe to our newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={subscribing}
                  className="bg-primary hover:bg-primary/90"
                >
                  {subscribing ? "..." : "Subscribe"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </header>

        <div className="space-y-8">
          {posts.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-400">No posts published yet.</p>
            </div>
          ) : (
            posts.map((post) => (
              <Card key={post.id} className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    {post.featured_image && (
                      <div className="flex-shrink-0">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <Link to={`/blog/${post.slug}`} className="group">
                        <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors mb-3">
                          {post.title}
                        </h2>
                      </Link>
                      
                      {post.excerpt && (
                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>
                            {formatDistanceToNow(new Date(post.published_at))} ago
                          </span>
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex gap-2">
                              {post.tags.slice(0, 3).map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-800">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
