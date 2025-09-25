import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { AppScreenshots } from "@/components/app-screenshots";
import { PrebookForm } from "@/components/prebook-form";
import { AboutSection } from "@/components/about-section";
import { DeveloperContact } from "@/components/developer-contact";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AppScreenshots />
      <PrebookForm />
      <AboutSection />
      <DeveloperContact />
      <Footer />
    </div>
  );
};

export default Index;
