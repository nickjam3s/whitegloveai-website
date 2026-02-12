import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const lightLogos = [
  { name: "Horizontal on Light Background", file: "/brand-kit/horizontal_on_light_bg.png", filename: "WhitegloveAI-Horizontal-Light.png" },
  { name: "Vertical on Light Background", file: "/brand-kit/vertical_on_light_bg.png", filename: "WhitegloveAI-Vertical-Light.png" },
  { name: "Horizontal Black", file: "/brand-kit/horizontal_black.png", filename: "WhitegloveAI-Horizontal-Black.png" },
  { name: "Small Logo", file: "/brand-kit/wgai_logo_go_high_level.png", filename: "WhitegloveAI-Small.png" },
  { name: "Brandmark", file: "/brand-kit/brandmark_for_light_or_dark.png", filename: "WhitegloveAI-Brandmark.png" },
  { name: "Profile Image", file: "/brand-kit/profile_image_one.png", filename: "WhitegloveAI-Profile.png" },
];

const darkLogos = [
  { name: "Horizontal on Dark Background", file: "/brand-kit/horizontal_on_dark_bg.png", filename: "WhitegloveAI-Horizontal-Dark.png" },
  { name: "Vertical on Dark Background", file: "/brand-kit/vertical_on_dark_bg.png", filename: "WhitegloveAI-Vertical-Dark.png" },
  { name: "Horizontal White", file: "/brand-kit/horizontal_white.png", filename: "WhitegloveAI-Horizontal-White.png" },
  { name: "Brandmark for Dark Background", file: "/brand-kit/brandmark_for_dark_bg.png", filename: "WhitegloveAI-Brandmark-Dark.png" },
];

const handleDownload = (file: string, filename: string) => {
  const link = document.createElement("a");
  link.href = file;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const BrandKit = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Brand Kit
        </h1>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Download official WhitegloveAI logos and brand assets for use in your materials.
        </p>

        {/* Light Background Logos */}
        <section className="rounded-2xl bg-white p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Logos for Light Backgrounds
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {lightLogos.map((logo) => (
              <div key={logo.filename} className="flex flex-col items-center border border-gray-200 rounded-xl p-6 bg-gray-50">
                <div className="flex items-center justify-center h-40 w-full mb-4">
                  <img src={logo.file} alt={logo.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
                <p className="text-sm text-gray-700 font-medium mb-3 text-center">{logo.name}</p>
                <Button variant="outline" size="sm" className="text-gray-700 border-gray-300 hover:bg-gray-100" onClick={() => handleDownload(logo.file, logo.filename)}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Dark Background Logos */}
        <section className="rounded-2xl bg-background border border-border p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Logos for Dark Backgrounds
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {darkLogos.map((logo) => (
              <div key={logo.filename} className="flex flex-col items-center border border-border rounded-xl p-6 bg-card">
                <div className="flex items-center justify-center h-40 w-full mb-4">
                  <img src={logo.file} alt={logo.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
                <p className="text-sm text-muted-foreground font-medium mb-3 text-center">{logo.name}</p>
                <Button variant="outline" size="sm" onClick={() => handleDownload(logo.file, logo.filename)}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandKit;
