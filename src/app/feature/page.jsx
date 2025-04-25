import { OurMissionVision } from "@/components/page/our-mission-vision";
import { HeroAbout } from "@/components/page/hero-about";
import { WhoAreWe } from "@/components/page/who-are-we";

export default function FeaturePage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroAbout />
      <OurMissionVision />
      <WhoAreWe />
    </main>
  );
}
