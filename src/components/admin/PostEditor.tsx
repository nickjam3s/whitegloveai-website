
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Save, Eye, Upload } from "lucide-react";
import TagManager from "./TagManager";
import PublishingWorkflow from "./PublishingWorkflow";

interface GeneratedContent {
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  seo_title: string;
  seo_description: string;
}

interface PostEditorProps {
  generatedContent?: GeneratedContent;
  onContentUsed?: () => void;
}

const PostEditor = ({ generatedContent, onContentUsed }: PostEditorProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [postId, setPostId] = useState<string | undefined>();
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const { toast } = useToast();

  // Load generated content when available
  useEffect(() => {
    if (generatedContent) {
      setTitle(generatedContent.title);
      setContent(generatedContent.content);
      setExcerpt(generatedContent.excerpt);
      setTags(generatedContent.tags || []);
      setSeoTitle(generatedContent.seo_title);
      setSeoDescription(generatedContent.seo_description);
      
      if (onContentUsed) {
        onContentUsed();
      }
    }
  }, [generatedContent, onContentUsed]);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;

      const { data, error } = await supabase.storage
        .from('images')
        .upload(fileName, file);

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(fileName);

      setFeaturedImage(publicUrl);
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const saveDraft = async () => {
    if (!title.trim()) {
      toast({
        title: "Error",
        description: "Title is required",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

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
        status: 'draft',
      };

      if (postId) {
        const { error } = await supabase
          .from("posts")
          .update(postData)
          .eq("id", postId);
        
        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from("posts")
          .insert(postData)
          .select()
          .single();
        
        if (error) throw error;
        setPostId(data.id);
      }

      setLastSaved(new Date());
      toast({
        title: "Success",
        description: "Draft saved successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const clearForm = () => {
    setTitle("");
    setContent("");
    setExcerpt("");
    setTags([]);
    setSeoTitle("");
    setSeoDescription("");
    setFeaturedImage("");
    setPostId(undefined);
    setLastSaved(null);
  };

  const handlePublished = () => {
    clearForm();
    toast({
      title: "Success",
      description: "Post workflow completed successfully",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Create New Post</CardTitle>
            <div className="flex gap-2 items-center">
              {lastSaved && (
                <span className="text-sm text-gray-500">
                  Saved {lastSaved.toLocaleTimeString()}
                </span>
              )}
              <Button onClick={saveDraft} disabled={isSaving} variant="outline">
                <Save className="h-4 w-4 mr-2" />
                {isSaving ? "Saving..." : "Save Draft"}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title *</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter post title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Excerpt</label>
                <Textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Brief description of the post"
                  rows={3}
                />
              </div>

              <TagManager selectedTags={tags} onTagsChange={setTags} />

              <div>
                <label className="block text-sm font-medium mb-2">Featured Image</label>
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-primary file:text-primary-foreground
                      hover:file:bg-primary/90"
                  />
                  {featuredImage && (
                    <div className="mt-2">
                      <img
                        src={featuredImage}
                        alt="Featured"
                        className="w-full h-32 object-cover rounded border"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">SEO Title</label>
                <Input
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  placeholder="SEO optimized title (50-60 chars)"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {seoTitle.length}/60 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">SEO Description</label>
                <Textarea
                  value={seoDescription}
                  onChange={(e) => setSeoDescription(e.target.value)}
                  placeholder="Meta description (150-160 chars)"
                  rows={3}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {seoDescription.length}/160 characters
                </p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Content *</label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content here..."
              rows={15}
              className="font-mono"
              required
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={clearForm} variant="outline" className="flex-1">
              Clear Form
            </Button>
            <PublishingWorkflow
              postId={postId}
              title={title}
              content={content}
              excerpt={excerpt}
              tags={tags}
              seoTitle={seoTitle}
              seoDescription={seoDescription}
              featuredImage={featuredImage}
              onPublished={handlePublished}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostEditor;
