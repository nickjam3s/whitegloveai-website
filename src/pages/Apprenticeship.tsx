
import HeroSection from "./apprenticeship/components/HeroSection";
import ProgramFeatures from "./apprenticeship/components/ProgramFeatures";
import CandidateProfile from "./apprenticeship/components/CandidateProfile";
import CareerProgression from "./apprenticeship/components/CareerProgression";
import WhyUs from "./apprenticeship/components/WhyUs";
import TuitionSection from "./apprenticeship/components/TuitionSection";
import ApplicationProcess from "./apprenticeship/components/ApplicationProcess";
import FAQSection from "./apprenticeship/components/FAQSection";
import VisionSection from "./apprenticeship/components/VisionSection";
import ApplicationForm from "./apprenticeship/components/ApplicationForm";

const Apprenticeship = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <WhyUs />
      <ProgramFeatures />
      <CareerProgression />
      <VisionSection />
      <CandidateProfile />
      <ApplicationProcess />
      <ApplicationForm />
      <TuitionSection />
      <FAQSection />
    </div>
  );
};

export default Apprenticeship;
