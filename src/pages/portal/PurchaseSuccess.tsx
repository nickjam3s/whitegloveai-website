import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const PurchaseSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    // Clear cart on successful purchase
    clearCart();
  }, [clearCart]);

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
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-lg">What's Next?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ You will receive a confirmation email shortly</li>
              <li>✓ Our training team will contact you within 24 hours</li>
              <li>✓ You'll receive access instructions for your course materials</li>
              <li>✓ Your training portal credentials will be sent via email</li>
            </ul>
          </div>

          {sessionId && (
            <div className="text-sm text-muted-foreground">
              <p>Transaction ID: <code className="bg-muted px-2 py-1 rounded">{sessionId}</code></p>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <Button onClick={() => navigate("/portal")} className="w-full">
              Go to Portal
            </Button>
            <Button variant="outline" onClick={() => navigate("/training")} className="w-full">
              Browse More Courses
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PurchaseSuccess;
