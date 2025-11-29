import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { usePortalAuth } from "@/hooks/usePortalAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Trash2, ShoppingCart, AlertCircle } from "lucide-react";
import ContactSection from "@/pages/maisp/components/vendorai/ContactSection";

const Checkout = () => {
  const { items, removeFromCart, updateQuantity, updateLanguage, updateAllLanguages, getTotalPrice, getCommonLanguages, parseLanguages } = useCart();
  const { user } = usePortalAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [guestEmail, setGuestEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [applyToAllLanguage, setApplyToAllLanguage] = useState("");

  const commonLanguages = getCommonLanguages();

  const handleApplyToAllLanguage = (language: string) => {
    setApplyToAllLanguage(language);
    if (language) {
      updateAllLanguages(language);
    }
  };

  const handleCheckout = async () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    // Validate email for guest users
    if (!user && (!guestEmail || !guestEmail.includes("@"))) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Validate customer data
    if (!firstName.trim()) {
      toast.error("Please enter your first name");
      return;
    }

    if (!lastName.trim()) {
      toast.error("Please enter your last name");
      return;
    }

    // Validate that all items have a language selected
    const itemsWithoutLanguage = items.filter(item => !item.language);
    if (itemsWithoutLanguage.length > 0) {
      toast.error("Please select a language for all certifications");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { 
          items: items.map(item => ({
            priceId: item.priceId,
            quantity: item.quantity,
            courseName: item.course.name,
            language: item.language,
          })),
          guestEmail: !user ? guestEmail : undefined,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
        }
      });

      if (error) throw error;

      console.log('Checkout response:', data);

      if (data?.url) {
        console.log('Redirecting to Stripe checkout:', data.url);
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received from server');
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
            {/* Customer Information Collection */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
                <CardDescription>Enter your details to complete the purchase</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {!user && (
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        required
                      />
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Apply Language to All - only show when multiple items and common languages exist */}
                  {items.length > 1 && commonLanguages.length > 0 && (
                    <div className="space-y-2 pt-2 border-t">
                      <Label htmlFor="applyToAll">Apply Language to All Certifications</Label>
                      <select
                        id="applyToAll"
                        value={applyToAllLanguage}
                        onChange={(e) => handleApplyToAllLanguage(e.target.value)}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select to apply to all...</option>
                        {commonLanguages.map((lang: string) => (
                          <option key={lang} value={lang}>
                            {lang}
                          </option>
                        ))}
                      </select>
                      <p className="text-sm text-muted-foreground">
                        Only showing languages available for all courses in your cart
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Cart</CardTitle>
                <CardDescription>Review your selected courses and choose a language for each certification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => {
                  const availableLanguages = parseLanguages(item.course.languages);
                  
                  return (
                    <div key={item.course.name} className="border-b pb-4 last:border-b-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.course.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.course.duration} • {item.course.level}
                          </p>
                          <p className="text-sm font-semibold mt-1">
                            ${item.price} per student
                          </p>
                          
                          {/* Per-certification language selector */}
                          <div className="mt-3">
                            <Label htmlFor={`language-${item.course.name}`} className="text-sm">
                              Certification Language *
                            </Label>
                            <select
                              id={`language-${item.course.name}`}
                              value={item.language}
                              onChange={(e) => updateLanguage(item.course.name, e.target.value)}
                              className="mt-1 w-full sm:w-auto min-w-[180px] px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                              {availableLanguages.map((lang: string) => (
                                <option key={lang} value={lang}>
                                  {lang}
                                </option>
                              ))}
                            </select>
                            <p className="text-xs text-muted-foreground mt-1">
                              {availableLanguages.length} language{availableLanguages.length !== 1 ? 's' : ''} available
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
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
                          
                          <div className="min-w-[80px] text-right font-semibold">
                            ${item.price * item.quantity}
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.course.name)}
                            className="flex-shrink-0"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                
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
