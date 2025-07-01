
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const PreferencesPage = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [preferences, setPreferences] = useState({
    newsletter: true,
    announcements: true,
    frequency: "weekly"
  });
  const { toast } = useToast();

  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      toast({
        title: "Invalid Link",
        description: "The preferences link is invalid or expired.",
        variant: "destructive",
      });
    }
  }, [token, toast]);

  const handleSave = async () => {
    if (!token) return;

    setIsLoading(true);
    
    try {
      const { error } = await supabase.functions.invoke('update-preferences', {
        body: { token, preferences }
      });

      if (error) throw error;

      toast({
        title: "Preferences Updated",
        description: "Your email preferences have been saved successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update preferences. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Card className="w-full max-w-md bg-gray-900 border-gray-700">
          <CardContent className="pt-6">
            <p className="text-center text-red-400">Invalid preferences link.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-center text-white">Email Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="newsletter" className="text-sm font-medium text-white">
                Newsletter
              </Label>
              <Switch
                id="newsletter"
                checked={preferences.newsletter}
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, newsletter: checked }))
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="announcements" className="text-sm font-medium text-white">
                Product Announcements
              </Label>
              <Switch
                id="announcements"
                checked={preferences.announcements}
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, announcements: checked }))
                }
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium text-white">Email Frequency:</Label>
            <RadioGroup 
              value={preferences.frequency} 
              onValueChange={(value) => setPreferences(prev => ({ ...prev, frequency: value }))}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="daily" id="daily" />
                <Label htmlFor="daily" className="text-sm text-gray-300">Daily</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="weekly" id="weekly" />
                <Label htmlFor="weekly" className="text-sm text-gray-300">Weekly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly" className="text-sm text-gray-300">Monthly</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => window.location.href = "/"}
              className="flex-1 border-gray-600 text-white hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? "Saving..." : "Save Preferences"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreferencesPage;
