import { Link } from "wouter";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="inline-block mb-6" data-testid="link-footer-logo">
              <span className="font-serif italic text-3xl tracking-widest text-primary text-glow">
                KNOTT
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 font-light leading-relaxed">
              Best Salon & Academy in Uttam Nagar, where ordinary people walk in and extraordinary transformations walk out.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/himanshmakeovers"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                data-testid="link-social-instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/919716002672"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                data-testid="link-social-whatsapp"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif italic text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "Gallery", "Contact", "Booking"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                    data-testid={`link-footer-${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif italic text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-muted-foreground">
                <MapPin size={18} className="mr-3 mt-1 text-primary shrink-0" />
                <span className="font-light text-sm leading-relaxed">
                  E-67, Arya Samaj Rd, near Muthoot Bank, Block J, Uttam Nagar, New Delhi, Delhi 110059
                </span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone size={18} className="mr-3 text-primary shrink-0" />
                <a href="tel:+919716002672" className="font-light text-sm hover:text-primary transition-colors" data-testid="link-footer-phone">
                  +91 97160 02672
                </a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <FaWhatsapp size={18} className="mr-3 text-primary shrink-0" />
                <a href="https://wa.me/919716002672" target="_blank" rel="noreferrer" className="font-light text-sm hover:text-primary transition-colors" data-testid="link-footer-whatsapp-text">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif italic text-white mb-6">Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-muted-foreground">
                <Clock size={18} className="mr-3 mt-1 text-primary shrink-0" />
                <div>
                  <p className="font-light text-sm">Monday – Sunday</p>
                  <p className="font-medium text-white text-sm mt-1">10:30 AM – 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/50 tracking-wider">
          <p>&copy; {new Date().getFullYear()} KNOTT Unisex Salon & Academy. All rights reserved.</p>
          <p className="mt-2 md:mt-0">EST. 2021 • UTTAM NAGAR</p>
        </div>
      </div>
    </footer>
  );
}
