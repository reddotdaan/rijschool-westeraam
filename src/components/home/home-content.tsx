"use client";

import { HeroSection } from "@/components/home/hero-section";
import { WelcomeSection } from "@/components/home/welcome-section";
import { UspBar } from "@/components/home/usp-bar";
import { PackagesSection } from "@/components/home/packages-section";
import { CbrSection } from "@/components/home/cbr-section";
import { InstagramSection } from "@/components/home/instagram-section";
import { TeamSection } from "@/components/home/team-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { SignupCtaSection } from "@/components/home/signup-cta-section";

export function HomeContent() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <UspBar />
      <PackagesSection />
      <CbrSection />
      <InstagramSection />
      <TeamSection />
      <ReviewsSection />
      <SignupCtaSection />
    </>
  );
}
