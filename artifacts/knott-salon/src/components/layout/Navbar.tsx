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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-white/5 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group" data-testid="link-logo">
          <span className="font-serif italic text-2xl md:text-3xl tracking-widest text-primary group-hover:text-glow transition-all duration-300">
            KNOTT
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm uppercase tracking-[0.2em] hover:text-primary transition-colors duration-300"
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
            className="group relative overflow-hidden px-6 py-2.5 bg-primary/10 border border-primary/30 text-primary uppercase text-sm tracking-[0.2em] transition-all hover:bg-primary hover:text-primary-foreground"
            data-testid="link-desktop-booking"
          >
            <span className="relative z-10">Book Now</span>
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer z-0" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 py-8 px-6 flex flex-col space-y-6 md:hidden shadow-2xl"
          >
            {links.map((link) => (
             <Link
                key={link.name}
                href={link.href}
                className={`text-lg tracking-[0.2em] uppercase ${
                  location === link.href ? "text-primary" : "text-foreground"
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
              className="mt-4 px-6 py-3 text-center bg-primary text-primary-foreground uppercase text-sm tracking-[0.2em] font-medium"
              data-testid="link-mobile-booking"
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
