import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col pt-24 md:pt-28 pb-20 md:pb-0">
      <Navbar />

      <div className="container mx-auto px-5 py-8 md:py-12 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-foreground">Find Us</h1>
          <p className="text-muted-foreground font-light text-sm md:text-base">
            Located in the heart of Uttam Nagar, bringing world-class beauty to your neighborhood.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {/* Info Cards */}
          <div className="space-y-4">
            <motion.a
              href="https://maps.google.com/?q=KNOTT+Unisex+Salon+Uttam+Nagar"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-5 md:p-7 border border-border flex items-start group hover:border-primary/40 transition-colors rounded-sm block min-h-[80px]"
              data-testid="link-contact-directions"
            >
              <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  E-67, Arya Samaj Rd, near Muthoot Bank,<br />Block J, Uttam Nagar, New Delhi 110059
                </p>
                <span className="inline-block mt-3 text-xs text-primary uppercase tracking-wider">
                  Get Directions →
                </span>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-5 md:p-7 border border-border flex items-start rounded-sm"
            >
              <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground font-light text-sm">Monday – Sunday</p>
                <p className="text-foreground font-medium mt-1">10:30 AM – 9:00 PM</p>
              </div>
            </motion.div>

            {/* Contact buttons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card p-5 md:p-7 border border-border rounded-sm"
            >
              <div className="flex items-center mb-5">
                <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary shrink-0">
                  <Phone size={22} />
                </div>
                <h3 className="text-lg font-serif text-foreground">Contact Us</h3>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+919716002672"
                  className="flex items-center justify-between bg-background px-5 py-4 border border-border rounded-sm hover:border-primary/40 transition-colors min-h-[56px]"
                  data-testid="link-contact-phone"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-primary shrink-0" />
                    <span className="text-foreground/80 text-sm">+91 97160 02672</span>
                  </div>
                  <span className="text-primary text-xs uppercase tracking-wider">Call →</span>
                </a>
                <a
                  href="https://wa.me/919716002672"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between bg-background px-5 py-4 border border-border rounded-sm hover:border-green-500/40 transition-colors min-h-[56px]"
                  data-testid="link-contact-whatsapp"
                >
                  <div className="flex items-center gap-3">
                    <FaWhatsapp size={18} className="text-green-600 shrink-0" />
                    <span className="text-foreground/80 text-sm">WhatsApp Us</span>
                  </div>
                  <span className="text-green-600 text-xs uppercase tracking-wider">Chat →</span>
                </a>
                <a
                  href="https://www.instagram.com/himanshmakeovers"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between bg-background px-5 py-4 border border-border rounded-sm hover:border-pink-400/40 transition-colors min-h-[56px]"
                  data-testid="link-contact-instagram"
                >
                  <div className="flex items-center gap-3">
                    <Instagram size={18} className="text-pink-500 shrink-0" />
                    <span className="text-foreground/80 text-sm">@himanshmakeovers</span>
                  </div>
                  <span className="text-pink-500 text-xs uppercase tracking-wider">Follow →</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Map Card */}
          <motion.a
            href="https://maps.google.com/?q=E-67+Arya+Samaj+Rd+Uttam+Nagar+New+Delhi"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card border border-border rounded-sm relative overflow-hidden flex items-center justify-center group cursor-pointer min-h-[280px] md:min-h-[480px]"
            data-testid="link-contact-map-overlay"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-35 transition-opacity duration-500 grayscale"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=85&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-card/30" />
            <div className="relative z-10 text-center transform transition-transform group-hover:scale-105">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4 drop-shadow-sm" />
              <h4 className="text-foreground font-serif text-2xl">KNOTT Salon</h4>
              <p className="text-muted-foreground text-xs uppercase tracking-widest mt-2">Tap to Open Maps</p>
            </div>
          </motion.a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
