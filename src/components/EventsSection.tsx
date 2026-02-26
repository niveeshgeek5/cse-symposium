import { EVENTS } from "@/data/symposiumConfig";
import EventCard from "./EventCard";

const EventsSection = () => {
  const technical = EVENTS.filter((e) => e.category === "technical");
  const nonTechnical = EVENTS.filter((e) => e.category === "non-technical");

  return (
    <section id="events" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-3 block">
            What's Happening
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono gradient-text">Events</h2>
        </div>

        {/* Technical */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">💻</span>
            <h3 className="text-2xl font-bold font-mono text-foreground">Technical Events</h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technical.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Non-Technical */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🎉</span>
            <h3 className="text-2xl font-bold font-mono text-foreground">Non-Technical Events</h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonTechnical.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
