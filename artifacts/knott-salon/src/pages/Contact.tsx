import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col pt-28">
      <Navbar />

      <div className="container mx-auto px-6 py-12 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white">Find Us</h1>
          <p className="text-muted-foreground font-light text-lg">
            We are located in the heart of Uttam Nagar, bringing world-class luxury to your neighborhood.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Cards */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#111111] p-8 border border-white/5 flex items-start group hover:border-primary/30 transition-colors"
            >
              <div className="bg-primary/10 p-4 rounded-full mr-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white mb-2">Location</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  E-67, Arya Samaj Rd, near Muthoot Bank, Block J, Uttam Nagar<br />
                  New Delhi, Delhi 110059
                </p>
                <a 
                  href="https://maps.google.com/?q=KNOTT+Unisex+Salon+Uttam+Nagar" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block mt-4 text-sm text-primary uppercase tracking-wider hover:underline"
                  data-testid="link-contact-directions"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#111111] p-8 border border-white/5 flex items-start group hover:border-primary/30 transition-colors"
            >
              <div className="bg-primary/10 p-4 rounded-full mr-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white mb-2">Hours</h3>
                <p className="text-muted-foreground font-light">Monday – Sunday</p>
                <p className="text-white font-medium mt-1">10:30 AM – 9:00 PM</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#111111] p-8 border border-white/5 flex items-start group hover:border-primary/30 transition-colors"
            >
              <div className="bg-primary/10 p-4 rounded-full mr-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white mb-2">Direct Contact</h3>
                <div className="flex flex-col space-y-3 mt-4">
                  <a href="tel:+919716002672" className="flex items-center text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact-phone">
                    <Phone size={16} className="mr-3" /> +91 97160 02672
                  </a>
                  <a href="https://wa.me/919716002672" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact-whatsapp">
                    <FaWhatsapp size={16} className="mr-3" /> WhatsApp Us
                  </a>
                  <a href="https://www.instagram.com/himanshmakeovers" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact-instagram">
                    <Instagram size={16} className="mr-3" /> @himanshmakeovers
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map area (simulated with a dark styling) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-[#111111] border border-white/5 p-2 relative h-[500px] flex flex-col"
          >
            <div className="w-full h-full relative overflow-hidden bg-[#1a1a1a] flex items-center justify-center group cursor-pointer">
              {/* This would be an iframe in reality, but a dark styled map placeholder looks better for the aesthetic if iframe isn't available. We'll use a stylized map image. */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=85&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale sepia-[0.3] hue-rotate-[10deg]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              <div className="relative z-10 text-center transform transition-transform group-hover:scale-105">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                <h4 className="text-white font-serif text-2xl">KNOTT Salon</h4>
                <p className="text-primary text-sm uppercase tracking-widest mt-2">View on Google Maps</p>
              </div>
              
              <a href="https://maps.google.com/?q=KNOTT+Unisex+Salon+Uttam+Nagar" target="_blank" rel="noreferrer" className="absolute inset-0 z-20" data-testid="link-contact-map-overlay">
                <span className="sr-only">Open Maps</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
