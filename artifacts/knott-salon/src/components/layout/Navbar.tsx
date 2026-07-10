import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home",     href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery",  href: "/gallery" },
  { name: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent dark-text-safe overlay ONLY when at the very top of the home page
  // — all other pages always render against the light background
  const heroMode = location === "/" && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 border-b ${
        heroMode
          ? "bg-transparent border-transparent py-4"
          : "bg-background/95 backdrop-blur-md border-border/50 py-3 shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="group flex-shrink-0 leading-none" data-testid="link-logo">
          <span className={`block font-serif italic text-2xl md:text-[1.75rem] tracking-widest transition-colors duration-300 ${
            heroMode ? "text-[#D4956A]" : "cognac-gradient-text"
          }`}>
            KNOTT
          </span>
          <span className={`block text-[8.5px] tracking-[0.24em] uppercase font-medium transition-colors duration-300 mt-px ${
            heroMode ? "text-white/65" : "text-foreground/55"
          }`}>
            Unisex Salon &amp; Academy
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                heroMode
                  ? "text-white/75 hover:text-[#E8C09A]"
                  : location === link.href
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground"
              }`}
              data-testid={`link-desktop-${link.name.toLowerCase()}`}
            >
              {link.name}
              {location === link.href && !heroMode && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-primary rounded-full"
                />
              )}
            </Link>
          ))}

          <Link
            href="/booking"
            className="px-5 py-2.5 bg-primary text-primary-foreground uppercase text-[10px] tracking-[0.22em] font-medium rounded-sm hover:bg-primary/85 transition-colors min-h-[40px] flex items-center"
            data-testid="link-desktop-booking"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md transition-colors ${
            heroMode ? "text-white" : "text-foreground"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-background border-b border-border shadow-lg"
          >
            <div className="px-5 py-5 flex flex-col gap-0">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-4 text-sm uppercase tracking-[0.18em] border-b border-border/40 transition-colors ${
                    location === link.href ? "text-primary font-medium" : "text-foreground/65"
                  }`}
                  data-testid={`link-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-5 py-4 text-center bg-primary text-primary-foreground uppercase text-xs tracking-[0.22em] font-medium rounded-sm min-h-[52px] flex items-center justify-center"
                data-testid="link-mobile-booking"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
