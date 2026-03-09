import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingBackground from "@/components/FloatingBackground";
import StatsSection from "@/components/StatsSection";
import MatchesTicker from "@/components/MatchesTicker";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import QuizSection from "@/components/QuizSection";
import GamesShowcase from "@/components/GamesShowcase";
import TrustSafety from "@/components/TrustSafety";
import AppShowcase from "@/components/AppShowcase";
import Testimonials from "@/components/Testimonials";
import FeedbackSection from "@/components/FeedbackSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FloatingBackground />
      <div style={{ paddingTop: '80px' }}>
        <MatchesTicker />
      </div>
      <Hero />
      <StatsSection />
      <Features />
      <HowItWorks />
      <QuizSection />
      <GamesShowcase />
      <TrustSafety />
      <AppShowcase />
      <Testimonials />
      <FeedbackSection />
      <CTASection />
      <Footer />
    </main>
  );
}
