import { FeatureExpand } from "@/components/page/feature-expand";
import { HeroAbout } from "@/components/page/hero-about";
import { OurMissionVision } from "@/components/page/our-mission-vision";
import { Partner } from "@/components/page/partner";
import { WhereAreWe } from "@/components/page/where-are-we";
import { WhoAreWe } from "@/components/page/who-are-we";

export default function FeaturePage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroAbout />
      <OurMissionVision />
      <WhoAreWe />
      <FeatureExpand />
      <Partner />
      <WhereAreWe />
    </main>
  );
}
