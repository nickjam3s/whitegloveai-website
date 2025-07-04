
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload, Image as ImageIcon, X } from "lucide-react";

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
  const [status, setStatus] = useState("draft");
  const [tags, setTags] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [featuredImageUrl, setFeaturedImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const { toast } = useToast();

  // Auto-fill form when AI content is generated
  useEffect(() => {
    if (generatedContent) {
      setTitle(generatedContent.title);
      setContent(generatedContent.content);
      setExcerpt(generatedContent.excerpt);
      setTags(generatedContent.tags.join(", "));
      setSeoTitle(generatedContent.seo_title);
      setSeoDescription(generatedContent.seo_description);
      
      if (onContentUsed) {
        onContentUsed();
      }
    }
  }, [generatedContent, onContentUsed]);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setFeaturedImage(file);
    } else {
      toast({
        title: "Invalid File",
        description: "Please select an image file",
        variant: "destructive",
      });
    }
  };

  const uploadFeaturedImage = async (): Promise<string> => {
    if (!featuredImage) return "";

    setUploadingImage(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const fileExt = featuredImage.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;

      const { data, error } = await supabase.storage
        .from('images')
        .upload(fileName, featuredImage);

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(fileName);

      return publicUrl;
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      // Upload featured image if selected
      let imageUrl = featuredImageUrl;
      if (featuredImage) {
        imageUrl = await uploadFeaturedImage();
      }

      const postData = {
        title,
        content,
        excerpt,
        status,
        tags: tags.split(",").map(tag => tag.trim()).filter(Boolean),
        seo_title: seoTitle || title,
        seo_description: seoDescription || excerpt,
        author_id: user.id,
        published_at: status === "published" ? new Date().toISOString() : null,
        featured_image: imageUrl || null,
        slug: "", // This will be auto-generated by the trigger
      };

      const { error } = await supabase
        .from("posts")
        .insert(postData);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Post created successfully",
      });

      // Reset form
      setTitle("");
      setContent("");
      setExcerpt("");
      setStatus("draft");
      setTags("");
      setSeoTitle("");
      setSeoDescription("");
      setFeaturedImage(null);
      setFeaturedImageUrl("");
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Featured Image</label>
            <div className="space-y-4">
              {featuredImage || featuredImageUrl ? (
                <div className="relative">
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="h-4 w-4" />
                      <span className="text-sm">
                        {featuredImage ? featuredImage.name : "Current featured image"}
                      </span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setFeaturedImage(null);
                        setFeaturedImageUrl("");
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Upload className="h-6 w-6 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-2">Upload featured image</p>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="max-w-xs mx-auto"
                  />
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title"
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

          <div>
            <label className="block text-sm font-medium mb-2">Content</label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content here..."
              rows={15}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
            <Input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="tag1, tag2, tag3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Status</label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">SEO Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">SEO Title</label>
                <Input
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  placeholder="Leave empty to use post title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">SEO Description</label>
                <Textarea
                  value={seoDescription}
                  onChange={(e) => setSeoDescription(e.target.value)}
                  placeholder="Leave empty to use excerpt"
                  rows={3}
                />
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={loading || uploadingImage} 
            className="w-full"
          >
            {loading ? "Creating..." : uploadingImage ? "Uploading Image..." : "Create Post"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PostEditor;
