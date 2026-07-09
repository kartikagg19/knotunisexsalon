import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Derived: on hero (transparent bg), text must stay white for readability */
  const onHero = !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border/60 py-3 shadow-sm"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex-shrink-0" data-testid="link-logo">
          <span className={`font-serif italic text-2xl md:text-3xl tracking-widest transition-all duration-300 ${onHero ? "text-[#D4AF37]" : "gold-gradient-text"}`}>
            KNOTT
          </span>
          <p className={`text-[9px] md:text-[10px] tracking-[0.22em] uppercase font-light transition-colors duration-300 -mt-0.5 ${onHero ? "text-white/70" : "text-muted-foreground"}`}>
            Unisex Salon &amp; Academy
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-sm uppercase tracking-[0.2em] transition-colors duration-300 ${
                onHero
                  ? "text-white/80 hover:text-[#D4AF37]"
                  : "text-foreground/70 hover:text-primary"
              }`}
              data-testid={`link-desktop-${link.name.toLowerCase()}`}
            >
              {link.name}
              {location === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-primary"
                />
              )}
            </Link>
          ))}
          <Link
            href="/booking"
            className="group relative overflow-hidden px-5 py-2.5 bg-primary text-primary-foreground uppercase text-xs tracking-[0.2em] font-medium transition-all hover:bg-primary/90 rounded-sm min-h-[44px] flex items-center"
            data-testid="link-desktop-booking"
          >
            <span className="relative z-10">Book Now</span>
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer z-0" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${onHero ? "text-white" : "text-foreground"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-background/98 backdrop-blur-xl border-b border-border shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base tracking-[0.15em] uppercase py-4 border-b border-border/40 transition-colors ${
                    location === link.href ? "text-primary font-medium" : "text-foreground/70"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 py-4 text-center bg-primary text-primary-foreground uppercase text-sm tracking-[0.2em] font-medium rounded-sm min-h-[52px] flex items-center justify-center"
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
