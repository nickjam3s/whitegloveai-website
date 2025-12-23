import optionA from "@/assets/linkedin-civic-gift-option-a.png";
import optionB from "@/assets/linkedin-civic-gift-option-b.png";

const TempImages = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-2xl font-bold mb-8 text-foreground">LinkedIn Images - Right-click to save</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-4 text-foreground">Option A - Gift Box Focus</h2>
          <img src={optionA} alt="LinkedIn Civic Gift Option A" className="max-w-full border rounded-lg" />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-4 text-foreground">Option B - Phone/Voice Focus</h2>
          <img src={optionB} alt="LinkedIn Civic Gift Option B" className="max-w-full border rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default TempImages;
