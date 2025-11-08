import { HeroSection } from "@/components/sections/HeroSection";
import { ExpertSection } from "@/components/sections/ExpertSection";
import { QuizIntroSection } from "@/components/sections/QuizIntroSection";
import { PersonalizedGuidanceSection } from "@/components/sections/PersonalizedGuidanceSection";
import { MonthlyCalendarSection } from "@/components/sections/MonthlyCalendarSection";
import { FiveHabitsSection } from "@/components/sections/FiveHabitsSection";
import { ChallengeSection } from "@/components/sections/ChallengeSection";
import { UGCSection } from "@/components/sections/UGCSection";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { ComplianceFooter } from "@/components/sections/ComplianceFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExpertSection />
      <QuizIntroSection />
      <PersonalizedGuidanceSection />
      <MonthlyCalendarSection />
      <FiveHabitsSection />
      <ChallengeSection />
      <UGCSection />
      <PartnerSection />
      <ComplianceFooter />
    </main>
  );
};

export default Index;
