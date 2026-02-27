import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const DirDisclaimer = () => {
  return (
    <section aria-label="DIR certification notice" className="py-3 bg-gradient-to-r from-secondary/10 via-secondary/15 to-secondary/10 border-y border-secondary/30">
      <div className="container px-4 mx-auto max-w-7xl">
        <aside role="note" className="flex items-center justify-center gap-3 text-center">
          <Shield className="h-5 w-5 text-secondary flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            Looking for HB 3512 compliance? Our AI Awareness course is{" "}
            <Link to="/training/academy" className="text-secondary hover:underline font-medium">
              officially certified by the Texas DIR
            </Link>
            . View the{" "}
            <Link to="/training/academy" className="text-secondary hover:underline font-medium">
              DIR-certified course →
            </Link>
          </p>
        </aside>
      </div>
    </section>
  );
};

export default DirDisclaimer;
