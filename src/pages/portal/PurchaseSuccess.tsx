import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { usePortalAuth } from "@/hooks/usePortalAuth";
import { supabase } from "@/integrations/supabase/client";

const PurchaseSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const { user } = usePortalAuth();
  const sessionId = searchParams.get("session_id");
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [discountInfo, setDiscountInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Clear cart on successful purchase
    clearCart();

    // Fetch order details if we have a session ID
    const fetchOrderDetails = async () => {
      if (sessionId) {
        try {
          // Query purchases by session_id
          const { data, error } = await supabase
            .from("purchases")
            .select("*")
            .eq("stripe_checkout_session_id", sessionId)
            .order("purchased_at", { ascending: false })
            .limit(1);

          if (data && data.length > 0) {
            setOrderDetails(data[0]);
          }

          // Fetch discount information from Stripe
          const { data: sessionData, error: sessionError } = await supabase.functions.invoke('get-checkout-session', {
            body: { session_id: sessionId }
          });

          if (sessionData?.discount) {
            setDiscountInfo(sessionData.discount);
            console.log("Discount info loaded:", sessionData.discount);
          }
        } catch (error) {
          console.error("Error fetching order details:", error);
        }
      }
      setLoading(false);
    };

    fetchOrderDetails();
  }, [clearCart, sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-3xl">Purchase Successful!</CardTitle>
          <CardDescription>
            Thank you for your purchase
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {loading ? (
            <div className="text-center py-4">Loading order details...</div>
          ) : orderDetails ? (
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Order Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Order Number:</span>
                  <code className="bg-muted px-2 py-1 rounded font-semibold">{orderDetails.order_number}</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium">{orderDetails.user_email}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Course:</span>
                  <span className="font-medium">{orderDetails.course_name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Quantity:</span>
                  <span className="font-medium">{orderDetails.quantity}</span>
                </div>
                {discountInfo && (
                  <div className="flex justify-between items-center border-t pt-3 mt-3">
                    <span className="text-muted-foreground">Promo Code Applied:</span>
                    <div className="text-right">
                      <code className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-2 py-1 rounded font-semibold">
                        {discountInfo.code}
                      </code>
                      <p className="text-sm text-green-600 dark:text-green-400 mt-1 font-semibold">
                        Saved: ${(discountInfo.amount_saved / 100).toFixed(2)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : null}

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-lg">What's Next?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ You will receive a confirmation email shortly with your order details</li>
              <li>✓ Our training team will contact you within 24 hours</li>
              <li>✓ You'll receive access instructions for your course materials</li>
              <li>✓ Your AICerts training portal credentials will be sent via email by a WhitegloveAI team member</li>
            </ul>
          </div>

          {!user && (
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="flex items-start gap-3 pt-6">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 mb-2">Create an Account to Track Your Orders</p>
                  <p className="text-sm text-blue-800 mb-3">
                    Create a WhitegloveAI account to easily view your order history, manage your licenses, and enjoy faster checkout next time.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigate("/portal/login?mode=signup")}
                    className="border-blue-300 text-blue-900 hover:bg-blue-100"
                  >
                    Create Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex flex-col gap-3">
            <Button onClick={() => navigate("/training")} className="w-full">
              Browse More Courses
            </Button>
            {user && (
              <Button variant="outline" onClick={() => navigate("/portal")} className="w-full">
                Go to Portal
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PurchaseSuccess;
