import { useState, useEffect } from "react";
import { SYMPOSIUM } from "@/data/symposiumConfig";
import { Menu, X } from "lucide-react";
import collegeLogo from "@/assets/college-logo.png";
import cseLogo from "@/assets/cse-logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Events", href: "#events" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">

        <div className="flex items-center justify-between">

          {/* LEFT LOGO */}
          <img
            src={collegeLogo}
            alt="College Logo"
            className="h-8 sm:h-10 md:h-14 object-contain flex-shrink-0"
          />

          {/* CENTER TITLE (TAKES REMAINING SPACE) */}
          <div className="flex-1 text-center px-2">
            <a
              href="#home"
              className="font-mono font-bold neon-text
                         text-xs sm:text-sm md:text-lg
                         break-words"
            >
              {SYMPOSIUM.name}
            </a>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3 flex-shrink-0">

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 mr-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <img
              src={cseLogo}
              alt="CSE Logo"
              className="h-7 sm:h-9 md:h-12 object-contain"
            />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-card border-t px-6 py-5 space-y-4 text-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
