import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export const CartButton = () => {
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const itemCount = getTotalItems();

  if (itemCount === 0) return null;

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => navigate("/portal/checkout")}
      className="relative"
    >
      <ShoppingCart className="h-4 w-4 mr-2" />
      Cart
      {itemCount > 0 && (
        <Badge 
          variant="destructive" 
          className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
        >
          {itemCount}
        </Badge>
      )}
    </Button>
  );
};
