import { Timeline } from "@/components/experience/timeline";
import { HeroSection } from "@/components/hero-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { Scene } from "@/components/three/scene";

export default function Home() {
  return (
    <main>
      <Scene />
      <ThemeToggle />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="experience" className="py-20 bg-muted/50 flex justify-center items-center">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <Timeline />
        </div>
      </section>
    </main>
  );
}
