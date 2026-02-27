import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import StandardHero from "@/components/shared/StandardHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Shield } from "lucide-react";

const HB3512 = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Texas HB3512 AI Training Law | WhitegloveAI"
        description="Texas HB 3512 requires annual AI awareness training for government employees. View the official DIR-certified course from WhitegloveAI."
        canonicalPath="/maisp/training/hb3512"
      />

      <div className="min-h-screen bg-background">
        <StandardHero
          title="Texas HB 3512: AI Training Requirements"
          subtitle="Texas law requires annual AI awareness training for public sector employees. WhitegloveAI offers the official DIR-certified course to meet this requirement."
          height="large"
          backgroundVariant="ambient"
          icon={Shield}
          primaryCTA={{
            text: "View DIR-Certified Course",
            href: "/training/academy",
            icon: ArrowRight
          }}
        />

        {/* Funnel Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <img
              src="/images/seals/DIR_AI_Training_Seal_2025-2026.png"
              alt="DIR AI Training Seal 2025-2026"
              className="w-36 h-36 object-contain mx-auto mb-8"
            />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Official DIR-Certified Training Now Available
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our 90-minute AI Awareness course has been officially certified by the Texas Department of Information Resources (DIR) for the 2025–2026 training cycle. This is the fastest, most straightforward way to comply with HB 3512.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/training/academy">
                <Button size="lg" className="text-lg px-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  View the DIR-Certified Course <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://dir.texas.gov/statewide-artificial-intelligence-ai-awareness-training" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View the Official DIR Page <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HB3512;
