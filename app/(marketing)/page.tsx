import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";
import { SocialProof } from "@/components/marketing/social-proof";
import { Features } from "@/components/marketing/features";
import { DashboardPreview } from "@/components/marketing/dashboard-preview";
import { CTASection } from "@/components/marketing/cta-section";
import { Footer } from "@/components/marketing/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4">
        <Hero />
        <SocialProof />
        <Features />
        <DashboardPreview />
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}