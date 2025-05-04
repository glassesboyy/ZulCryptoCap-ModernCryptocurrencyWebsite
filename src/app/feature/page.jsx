import { HeroAbout } from "@/components/page/aboutus-page/hero-about";
import { FeatureExpand } from "@/components/page/aboutus-page/feature-expand";
import { OurMissionVision } from "@/components/page/aboutus-page/our-mission-vision";
import { Partner } from "@/components/page/aboutus-page/partner";
import { WhereAreWe } from "@/components/page/aboutus-page/where-are-we";
import { WhoAreWe } from "@/components/page/aboutus-page/who-are-we";

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
