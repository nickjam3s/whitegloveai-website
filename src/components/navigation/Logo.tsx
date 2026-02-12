
import { Link, useNavigate } from "react-router-dom";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Palette } from "lucide-react";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Link
          to="/"
          className="flex items-center space-x-2 text-xl font-semibold tracking-tight hover:opacity-100 transition-opacity logo-container"
        >
          <img
            src="/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png"
            alt="WhitegloveAI Logo"
            className="h-10 w-auto"
            loading="eager"
          />
        </Link>
      </ContextMenuTrigger>
      <ContextMenuContent className="bg-card border-border z-50">
        <ContextMenuItem
          onClick={() => navigate("/brand-kit")}
          className="cursor-pointer"
        >
          <Palette className="h-4 w-4 mr-2" />
          View Brand Kit
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default Logo;
