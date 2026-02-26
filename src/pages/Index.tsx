import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import LeadershipSection from "@/components/LeadershipSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <LeadershipSection />
      <Footer />
    </div>
  );
};

export default Index;
