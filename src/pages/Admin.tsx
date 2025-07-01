
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import PostEditor from "@/components/admin/PostEditor";
import PostsList from "@/components/admin/PostsList";
import EnhancedPostsList from "@/components/admin/EnhancedPostsList";
import SubscribersList from "@/components/admin/SubscribersList";
import CampaignsList from "@/components/admin/CampaignsList";
import AIBlogGenerator from "@/components/admin/AIBlogGenerator";

const ADMIN_EMAIL = "nick@whitegloveai.com";
const ADMIN_PASSWORD = 'J$TswNju}0^`)q"!v}p!';

interface GeneratedContent {
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  seo_title: string;
  seo_description: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | undefined>();
  const [activeTab, setActiveTab] = useState("posts");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
    // Hide the main navigation when on admin page
    const navigation = document.querySelector('nav');
    if (navigation) {
      navigation.style.display = 'none';
    }

    // Show navigation again when leaving the page
    return () => {
      const navigation = document.querySelector('nav');
      if (navigation) {
        navigation.style.display = 'block';
      }
    };
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.email === ADMIN_EMAIL) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Auth check error:", error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      toast({
        title: "Error",
        description: "Invalid credentials",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        // If user doesn't exist, create them
        if (error.message.includes("Invalid login credentials")) {
          const { error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: {
              emailRedirectTo: `${window.location.origin}/admin`
            }
          });
          
          if (signUpError) {
            toast({
              title: "Error",
              description: signUpError.message,
              variant: "destructive",
            });
            return;
          }
          
          toast({
            title: "Success",
            description: "Admin user created and logged in successfully",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Success",
          description: "Logged in successfully",
        });
      }
      
      setIsAuthenticated(true);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    navigate("/");
  };

  const handleContentGenerated = (content: GeneratedContent) => {
    setGeneratedContent(content);
    setActiveTab("editor");
  };

  const handleContentUsed = () => {
    setGeneratedContent(undefined);
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen bg-black text-white">Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Card className="w-full max-w-md bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                required
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gray-900 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-white">CMS Admin</h1>
            <Button onClick={handleLogout} variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-gray-900 border-gray-700">
            <TabsTrigger value="posts" className="data-[state=active]:bg-primary data-[state=active]:text-white">Posts</TabsTrigger>
            <TabsTrigger value="ai-generator" className="data-[state=active]:bg-primary data-[state=active]:text-white">AI Generator</TabsTrigger>
            <TabsTrigger value="editor" className="data-[state=active]:bg-primary data-[state=active]:text-white">New Post</TabsTrigger>
            <TabsTrigger value="subscribers" className="data-[state=active]:bg-primary data-[state=active]:text-white">Subscribers</TabsTrigger>
            <TabsTrigger value="campaigns" className="data-[state=active]:bg-primary data-[state=active]:text-white">Campaigns</TabsTrigger>
          </TabsList>

          <TabsContent value="posts">
            <EnhancedPostsList />
          </TabsContent>

          <TabsContent value="ai-generator">
            <AIBlogGenerator onContentGenerated={handleContentGenerated} />
          </TabsContent>

          <TabsContent value="editor">
            <PostEditor 
              generatedContent={generatedContent}
              onContentUsed={handleContentUsed}
            />
          </TabsContent>

          <TabsContent value="subscribers">
            <SubscribersList />
          </TabsContent>

          <TabsContent value="campaigns">
            <CampaignsList />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
