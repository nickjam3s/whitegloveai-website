
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Tag {
  id: string;
  name: string;
  usage_count: number;
}

interface TagManagerProps {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

const TagManager = ({ selectedTags, onTagsChange }: TagManagerProps) => {
  const [availableTags, setAvailableTags] = useState<Tag[]>([]);
  const [newTagName, setNewTagName] = useState("");
  const [isAddingTag, setIsAddingTag] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    try {
      const { data, error } = await supabase
        .from("tags")
        .select("*")
        .order("usage_count", { ascending: false });

      if (error) throw error;
      setAvailableTags(data || []);
    } catch (error: any) {
      console.error("Error fetching tags:", error);
    }
  };

  const addNewTag = async () => {
    if (!newTagName.trim()) return;

    try {
      const { data, error } = await supabase
        .from("tags")
        .insert({ name: newTagName.trim().toLowerCase() })
        .select()
        .single();

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Tag already exists",
            description: "This tag is already in the system",
            variant: "destructive",
          });
          return;
        }
        throw error;
      }

      setAvailableTags(prev => [...prev, data]);
      onTagsChange([...selectedTags, data.name]);
      setNewTagName("");
      setIsAddingTag(false);
      
      toast({
        title: "Success",
        description: "New tag created and added",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const toggleTag = (tagName: string) => {
    if (selectedTags.includes(tagName)) {
      onTagsChange(selectedTags.filter(tag => tag !== tagName));
    } else {
      onTagsChange([...selectedTags, tagName]);
    }
  };

  const removeTag = (tagName: string) => {
    onTagsChange(selectedTags.filter(tag => tag !== tagName));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Tags</label>
        
        {/* Selected Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {selectedTags.map((tag) => (
            <Badge key={tag} variant="default" className="flex items-center gap-1">
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="ml-1 hover:bg-red-500 hover:text-white rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>

        {/* Add New Tag */}
        <div className="flex gap-2 mb-3">
          {isAddingTag ? (
            <>
              <Input
                value={newTagName}
                onChange={(e) => setNewTagName(e.target.value)}
                placeholder="Enter new tag name"
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && addNewTag()}
              />
              <Button onClick={addNewTag} size="sm">
                Add
              </Button>
              <Button onClick={() => setIsAddingTag(false)} variant="outline" size="sm">
                Cancel
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsAddingTag(true)} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-1" />
              New Tag
            </Button>
          )}
        </div>

        {/* Available Tags */}
        <div className="max-h-40 overflow-y-auto border rounded p-2">
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <Badge
                key={tag.id}
                variant={selectedTags.includes(tag.name) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                onClick={() => toggleTag(tag.name)}
              >
                {tag.name} ({tag.usage_count})
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagManager;
