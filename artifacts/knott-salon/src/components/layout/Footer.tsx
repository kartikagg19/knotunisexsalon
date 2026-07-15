import { Link } from "wouter";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-gradient border-t border-white/5 pt-14 pb-6 hidden md:block">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-1.5 md:gap-2.5 mb-8 group" data-testid="link-footer-logo">
              <img 
                src="/logo.png" 
                alt="Knott Logo" 
                className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] object-contain drop-shadow-[0_0_8px_rgba(207,160,92,0.3)] transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="flex flex-col justify-center translate-y-0.5">
                <span 
                  className="block text-[2.25rem] md:text-[2.6rem] leading-[0.8] tracking-normal gradient-heading pb-0.5 pr-4 text-glow transition-transform duration-500 group-hover:scale-105 origin-left"
                  style={{ fontFamily: 'Great Vibes, cursive', fontWeight: 400 }}
                >
                  Knott
                </span>
                <span className="block font-serif text-[7.5px] md:text-[9px] tracking-[0.27em] font-medium text-white/50 uppercase ml-0.5 mt-0.5 whitespace-nowrap">
                  Unisex Salon &amp; Academy
                </span>
              </div>
            </Link>
            <p className="text-white/40 mb-6 font-light leading-relaxed text-sm">
              Nail, Makeup, Beauty, Skin, Hair — a minimal, moody salon &amp; academy in Uttam Nagar since 2021.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/himanshmakeovers"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/40 transition-all duration-300"
                data-testid="link-social-instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/919716002672"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-green-400 hover:border-green-400/40 transition-all duration-300"
                data-testid="link-social-whatsapp"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-serif italic text-white/70 mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Academy", href: "/academy" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/40 hover:text-primary transition-colors text-sm"
                    data-testid={`link-footer-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-serif italic text-white/70 mb-5 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-white/40">
                <MapPin size={15} className="mr-3 mt-0.5 text-primary shrink-0" />
                <span className="font-light text-sm leading-relaxed">
                  E-67, Arya Samaj Rd, Block J,<br />Uttam Nagar, New Delhi 110059
                </span>
              </li>
              <li className="flex items-center text-white/40">
                <Phone size={15} className="mr-3 text-primary shrink-0" />
                <a href="tel:+919716002672" className="font-light text-sm hover:text-primary transition-colors" data-testid="link-footer-phone">
                  +91 97160 02672
                </a>
              </li>
              <li className="flex items-center text-white/40">
                <FaWhatsapp size={15} className="mr-3 text-primary shrink-0" />
                <a href="https://wa.me/919716002672" target="_blank" rel="noreferrer" className="font-light text-sm hover:text-primary transition-colors" data-testid="link-footer-whatsapp-text">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-serif italic text-white/70 mb-5 uppercase tracking-wider">Hours</h4>
            <div className="flex items-start text-white/40">
              <Clock size={15} className="mr-3 mt-0.5 text-primary shrink-0" />
              <div>
                <p className="font-light text-sm">Monday – Sunday</p>
                <p className="font-semibold text-white/70 text-sm mt-1">10:30 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/20 tracking-wider">
          <p>&copy; {new Date().getFullYear()} KNOTT Unisex Salon &amp; Academy. All rights reserved.</p>
          <p className="mt-2 md:mt-0">EST. 2021 · UTTAM NAGAR, NEW DELHI</p>
        </div>
      </div>
    </footer>
  );
}
