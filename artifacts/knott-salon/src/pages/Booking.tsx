import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Scissors, CheckCircle } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New Appointment Request%0A-------------------%0AName: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0ADate: ${formData.date}%0ATime: ${formData.time}`;
    window.open(`https://wa.me/919716002672?text=${text}`, "_blank");
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  const inputBase = "w-full bg-transparent border-b-2 border-border px-0 py-4 text-foreground focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted-foreground/60 text-base";
  const iconBase = "absolute right-0 top-1/2 -translate-y-1/2 text-primary/40 w-5 h-5 pointer-events-none";

  return (
    <div className="min-h-screen bg-background flex flex-col pt-24 md:pt-28 pb-20 md:pb-0">
      <Navbar />

      <div className="container mx-auto px-5 py-8 md:py-12 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Reserve Your Spot</p>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-3">
            Book Appointment
          </h1>
          <p className="text-muted-foreground font-light text-sm max-w-sm mx-auto">
            Fill in your details and we will confirm via WhatsApp shortly.
          </p>
        </motion.div>

        <div className="w-full max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-card border border-border rounded-sm p-6 md:p-10 relative"
          >
            {/* Success overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-10 text-center p-8 rounded-sm">
                <CheckCircle className="text-primary w-14 h-14 mb-5" />
                <h3 className="text-2xl font-serif text-foreground mb-2">Request Sent</h3>
                <p className="text-muted-foreground font-light text-sm">Opening WhatsApp to complete your booking...</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  className={inputBase}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  data-testid="input-booking-name"
                />
                <User className={iconBase} />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className={inputBase}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  data-testid="input-booking-phone"
                />
                <Phone className={iconBase} />
              </div>

              <div className="relative">
                <select
                  required
                  className={`${inputBase} appearance-none cursor-pointer`}
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  data-testid="select-booking-service"
                >
                  <option value="" disabled>Select Service</option>
                  <option value="Hair">Hair</option>
                  <option value="Facial & Cleanup">Facial &amp; Cleanup</option>
                  <option value="Bridal & Makeup">Bridal &amp; Makeup</option>
                  <option value="Nails">Nails</option>
                  <option value="Waxing & Threading">Waxing &amp; Threading</option>
                  <option value="Mani & Pedi">Mani &amp; Pedi</option>
                  <option value="Other">Other</option>
                </select>
                <Scissors className={iconBase} />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="date"
                    required
                    className={`${inputBase} [&::-webkit-calendar-picker-indicator]:opacity-0`}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    data-testid="input-booking-date"
                  />
                  <Calendar className={iconBase} />
                </div>
                <div className="relative">
                  <input
                    type="time"
                    required
                    className={`${inputBase} [&::-webkit-calendar-picker-indicator]:opacity-0`}
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    data-testid="input-booking-time"
                  />
                  <Clock className={iconBase} />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-4 md:py-5 bg-primary text-primary-foreground uppercase tracking-[0.2em] font-medium text-sm hover:bg-primary/90 transition-colors rounded-sm relative overflow-hidden group min-h-[52px]"
                data-testid="button-booking-submit"
              >
                <span className="relative z-10">Confirm via WhatsApp</span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer z-0 bg-white/20" />
              </button>
            </form>
          </motion.div>

          {/* Alternate: Direct call */}
          <p className="text-center text-muted-foreground text-sm mt-6">
            Prefer to call?{" "}
            <a href="tel:+919716002672" className="text-primary hover:underline" data-testid="link-booking-call">
              +91 97160 02672
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
