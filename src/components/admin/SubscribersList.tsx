
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from "date-fns";

interface Subscriber {
  id: string;
  email: string;
  status: string;
  subscribed_at: string;
  utm_source: string;
}

const SubscribersList = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [newEmail, setNewEmail] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const { data, error } = await supabase
        .from("subscribers")
        .select("*")
        .order("subscribed_at", { ascending: false });

      if (error) throw error;
      setSubscribers(data || []);
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

  const addSubscriber = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail) return;

    try {
      const { error } = await supabase
        .from("subscribers")
        .insert([{ 
          email: newEmail,
          status: "active",
          confirmed_at: new Date().toISOString()
        }]);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Subscriber added successfully",
      });
      
      setNewEmail("");
      fetchSubscribers();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const updateSubscriberStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("subscribers")
        .update({ 
          status,
          unsubscribed_at: status === "unsubscribed" ? new Date().toISOString() : null
        })
        .eq("id", id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: `Subscriber ${status} successfully`,
      });
      
      fetchSubscribers();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div>Loading subscribers...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add New Subscriber</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={addSubscriber} className="flex gap-2">
            <Input
              type="email"
              placeholder="Email address"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
            />
            <Button type="submit">Add</Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Subscribers ({subscribers.length})</h2>
        </div>

        {subscribers.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">No subscribers yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {subscribers.map((subscriber) => (
              <Card key={subscriber.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{subscriber.email}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Badge variant={subscriber.status === "active" ? "default" : "secondary"}>
                          {subscriber.status}
                        </Badge>
                        <span>•</span>
                        <span>
                          Subscribed {formatDistanceToNow(new Date(subscriber.subscribed_at))} ago
                        </span>
                        {subscriber.utm_source && (
                          <>
                            <span>•</span>
                            <span>Source: {subscriber.utm_source}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {subscriber.status === "active" ? (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateSubscriberStatus(subscriber.id, "unsubscribed")}
                        >
                          Unsubscribe
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => updateSubscriberStatus(subscriber.id, "active")}
                        >
                          Resubscribe
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscribersList;
