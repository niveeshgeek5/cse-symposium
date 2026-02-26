import { HOD, SYMPOSIUM } from "@/data/symposiumConfig";
import { GraduationCap } from "lucide-react";

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-3 block">
            Under the Guidance of
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono gradient-text">Leadership</h2>
        </div>

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
