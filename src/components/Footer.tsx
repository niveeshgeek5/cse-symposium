import { MAIN_ORGANIZER, SYMPOSIUM, GOOGLE_FORM_LINK } from "@/data/symposiumConfig";
import { Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-mono font-bold text-xl neon-text mb-2">{SYMPOSIUM.name}</h3>
            <p className="text-sm text-muted-foreground">{SYMPOSIUM.department}</p>
            <p className="text-sm text-muted-foreground">{SYMPOSIUM.college}</p>
          </div>

          {/* Organizer */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4">
              Main Organizer
            </h4>
            <p className="text-foreground font-semibold">{MAIN_ORGANIZER.name}</p>
            <p className="text-muted-foreground text-sm">{MAIN_ORGANIZER.title}</p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <Phone size={14} className="text-primary" />
              {MAIN_ORGANIZER.phone}
            </p>
          </div>

          {/* Register CTA */}
          <div className="flex flex-col items-start md:items-end justify-center">
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-transform text-sm"
            >
              Register Now
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SYMPOSIUM.name} — {SYMPOSIUM.college}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
