import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { usePortalAuth } from "@/hooks/usePortalAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Trash2, ShoppingCart, AlertCircle } from "lucide-react";
import ContactSection from "@/pages/maisp/components/vendorai/ContactSection";

const Checkout = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const { user } = usePortalAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  if (!user) {
    navigate("/portal/login");
    return null;
  }

  const handleCheckout = async () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { items }
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
        toast.success("Opening Stripe checkout...");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to create checkout session");
    } finally {
      setLoading(false);
    }
  };

  const hasInstructorLedCourses = items.some(item => 
    item.course.portfolioType === "Instructor-Led"
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>

        {items.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground mb-4">Your cart is empty</p>
              <Button onClick={() => navigate("/training")}>
                Browse Courses
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Cart</CardTitle>
                <CardDescription>Review your selected courses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.course.name} className="flex items-center justify-between border-b pb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.course.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.course.duration} • {item.course.level}
                      </p>
                      <p className="text-sm font-semibold mt-1">
                        ${item.price} per student
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.course.name, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.course.name, parseInt(e.target.value) || 1)}
                          className="w-16 text-center"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.course.name, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                      
                      <div className="w-24 text-right font-semibold">
                        ${item.price * item.quantity}
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.course.name)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="flex items-start gap-3 pt-6">
                <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1 text-sm">
                  <p className="font-semibold mb-1">Important Notice</p>
                  <p>
                    After completing your purchase, you will be contacted by the WhitegloveAI training team 
                    with instructions on accessing your training portal and course materials.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button variant="outline" onClick={() => navigate("/training")} className="flex-1">
                Continue Shopping
              </Button>
              <Button onClick={handleCheckout} disabled={loading} className="flex-1">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Proceed to Payment - $${getTotalPrice()}`
                )}
              </Button>
            </div>
          </div>
        )}

        {hasInstructorLedCourses && (
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Need Instructor-Led Training?</CardTitle>
                <CardDescription>
                  For bulk purchases or instructor-led training options, please contact our team
                </CardDescription>
              </CardHeader>
            </Card>
            <ContactSection />
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
