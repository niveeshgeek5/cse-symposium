import { SYMPOSIUM, GOOGLE_FORM_LINK } from "@/data/symposiumConfig";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import collegeLogo from "@/assets/college-logo.png";
import cseLogo from "@/assets/cse-logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logos */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-8">
          <img src={collegeLogo} alt="AAMEC College Logo" className="h-16 md:h-24 object-contain" />
          <img src={cseLogo} alt="AAMEC CSE Department Logo" className="h-14 md:h-20 object-contain" />
        </div>

        {/* Department badge */}
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-sm font-medium text-muted-foreground">{SYMPOSIUM.department}</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono gradient-text mb-6 tracking-tight">
          {SYMPOSIUM.name}
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          {SYMPOSIUM.tagline}
        </p>

        {/* Info chips */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 glass-card rounded-full px-5 py-2.5">
            <Calendar size={18} className="text-primary" />
            <span className="text-sm font-medium text-foreground">{SYMPOSIUM.date}</span>
          </div>
          <div className="flex items-center gap-2 glass-card rounded-full px-5 py-2.5">
            <MapPin size={18} className="text-primary" />
            <span className="text-sm font-medium text-foreground">{SYMPOSIUM.venue}</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={GOOGLE_FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold text-lg px-10 py-4 rounded-lg neon-glow hover:scale-105 transition-transform duration-200"
        >
          Register Now
          <ExternalLink size={20} />
        </a>

        <p className="text-xs text-muted-foreground mt-4">
          Redirects to Google Form for registration
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
