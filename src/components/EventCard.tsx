import { SymposiumEvent } from "@/data/symposiumConfig";
import { Users, User, Phone } from "lucide-react";

interface EventCardProps {
  event: SymposiumEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 hover:neon-border transition-all duration-300 group flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{event.icon}</span>
        <div className="flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 bg-primary/10 text-primary border border-primary/20">
          {event.type === "Team" ? <Users size={12} /> : <User size={12} />}
          {event.type}
          {event.type === "Team" && event.teamSize && ` (${event.teamSize})`}
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-bold font-mono text-foreground mb-2 group-hover:neon-text transition-all">
        {event.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{event.description}</p>

      {/* Participant limit */}
      <div className="text-xs font-medium text-accent mb-4">
        Limited to {event.participantLimit} {event.type === "Team" ? "teams" : "participants"}
      </div>

      {/* Rules */}
      <div className="mb-5 flex-1">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Rules</h4>
        <ul className="space-y-1.5">
          {event.rules.map((rule, i) => (
            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">▸</span>
              {rule}
            </li>
          ))}
        </ul>
      </div>

      {/* Organizers */}
      <div className="border-t border-border pt-4 space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Organizer</h4>
        {event.organizers.map((org, i) => (
          <div key={i} className="flex items-center justify-between text-xs">
            <span className="text-foreground font-medium">{org.name}</span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Phone size={10} />
              {org.phone}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
