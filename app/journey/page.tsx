"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HeroSection from "@/app/components/journey/HeroSection";
import AboutSection from "@/app/components/journey/AboutSection";
import ProudOfSection from "@/app/components/journey/ProudOfSection";
import JourneySection from "@/app/components/journey/JourneySection";
import SkillsSection from "@/app/components/journey/SkillsSection";
import ProjectsSection from "@/app/components/journey/ProjectsSection";
import ContactSection from "@/app/components/journey/ContactSection";
import SkyBackground from "@/app/components/journey/SkyBackground";
import PaperAirplane from "@/app/components/journey/PaperAirplane";
import TopUI from "@/app/components/shared/TopUI";
import AchievementsPanel from "@/app/components/shared/AchievementsPanel";
import Toast from "@/app/components/shared/Toast";
import { useAchievements } from "@/app/store/achievements";

export default function JourneyPage() {
  const router = useRouter();
  const { unlock } = useAchievements();
  const scrollRef = useRef(0);

  useEffect(() => {
    function onScroll() {
      const max = document.body.scrollHeight - window.innerHeight;
      const progress = window.scrollY / (max || 1);
      if (scrollRef.current < 0.05 && progress >= 0.05) unlock("sky");
      if (scrollRef.current < 0.25 && progress >= 0.25) unlock("proud");
      if (scrollRef.current < 0.95 && progress >= 0.95) unlock("wanderer");
      scrollRef.current = progress;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [unlock]);

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, var(--paper) 0%, var(--paper-shadow) 100%)",
        minHeight: "500vh",
        position: "relative",
      }}
    >
      {/* Sky clouds */}
      <SkyBackground />

      {/* Paper airplane cursor tracker */}
      <PaperAirplane />

      {/* Logo top-left */}
      <div className="fixed top-4 left-4 z-[100]" style={{ left: 16, top: 16 }}>
        <Image src="/logo.svg" alt="Leema Caravan" width={80} height={27} priority />
      </div>

      {/* TopUI — back button + sound + achievements */}
      <TopUI showBack onBack={() => router.push("/")} />
      <AchievementsPanel />
      <Toast />

      {/* Journey sections */}
      <HeroSection />
      <AboutSection />
      <ProudOfSection />
      <JourneySection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
