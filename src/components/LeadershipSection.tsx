import { HOD, SYMPOSIUM } from "@/data/symposiumConfig";
import { GraduationCap } from "lucide-react";
import collegeLogo from "@/assets/college-logo.png";
import cseLogo from "@/assets/cse-logo.png";

const LeadershipSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-3 block">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono gradient-text">About</h2>
        </div>

        {/* Logos */}
        <div className="flex items-center justify-center gap-8 md:gap-16 mb-16">
          <img src={collegeLogo} alt="AAMEC College Logo" className="h-24 md:h-32 object-contain" />
          <img src={cseLogo} alt="AAMEC CSE Department Logo" className="h-20 md:h-28 object-contain" />
        </div>

        {/* HOD Card */}
        <div className="max-w-lg mx-auto">
          <div className="glass-card neon-border rounded-2xl p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
              <GraduationCap size={36} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-mono text-foreground mb-1">{HOD.name}</h3>
            <p className="text-primary font-medium text-sm mb-1">{HOD.title}</p>
            <p className="text-muted-foreground text-sm">{HOD.department}</p>
            <p className="text-muted-foreground text-xs mt-2">{SYMPOSIUM.college}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
