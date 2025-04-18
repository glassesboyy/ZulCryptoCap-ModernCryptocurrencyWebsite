import { Hero } from "@/components/page/hero";
import { MainNavbar } from "@/components/page/main-navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainNavbar />
      <Hero />
    </main>
  );
}
