import { useState } from "react";
import { EVENTS } from "@/data/symposiumConfig";
import EventCard from "./EventCard";

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState<"technical" | "non-technical">("technical");

  const technical = EVENTS.filter((e) => e.category === "technical");
  const nonTechnical = EVENTS.filter((e) => e.category === "non-technical");
  const activeEvents = activeTab === "technical" ? technical : nonTechnical;

  return (
    <section id="events" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-mono neon-text mb-4">Events</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-glow" />
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl overflow-hidden glass-card p-1.5 gap-1">
            <button
              onClick={() => setActiveTab("technical")}
              className={`flex items-center gap-2 px-8 py-3 rounded-lg font-mono font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === "technical"
                  ? "bg-primary text-primary-foreground neon-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>⚡</span> Technical
            </button>
            <button
              onClick={() => setActiveTab("non-technical")}
              className={`flex items-center gap-2 px-8 py-3 rounded-lg font-mono font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === "non-technical"
                  ? "bg-primary text-primary-foreground neon-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>🎮</span> Non-Technical
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
