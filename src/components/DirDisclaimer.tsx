import { AlertCircle } from "lucide-react";

const DirDisclaimer = () => {
  return (
    <section aria-label="DIR compliance disclaimer" className="py-3 bg-gradient-to-r from-muted/30 via-muted/20 to-muted/30 border-y border-border">
      <div className="container px-4 mx-auto max-w-7xl">
        <aside role="note" className="flex items-start justify-center gap-3 text-center md:text-left md:justify-center">
          <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            Important: WhitegloveAI’s training programs are designed to align with the substantive requirements of Texas HB3512. They are not approved, endorsed, or certified by the Texas Department of Information Resources (DIR). To date, DIR has not selected any vendors for HB3512 compliance training.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default DirDisclaimer;
