import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Scissors } from "lucide-react";

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
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const inputClasses = "w-full bg-[#111111] border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted-foreground/50";
  const iconClasses = "absolute right-0 top-1/2 -translate-y-1/2 text-primary/50 w-5 h-5 pointer-events-none";

  return (
    <div className="min-h-screen bg-background flex flex-col pt-28">
      <Navbar />

      <div className="container mx-auto px-6 py-12 flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-white leading-tight">
              Reserve Your <br/><span className="text-primary italic">Experience</span>
            </h1>
            <p className="text-muted-foreground font-light text-lg mb-8 max-w-md leading-relaxed">
              Complete the form to request an appointment. We will confirm your booking via WhatsApp shortly.
            </p>
            <div className="hidden lg:block relative w-full h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=85&auto=format&fit=crop" 
                alt="Spa details" 
                className="w-full h-full object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0a0a0a] p-8 md:p-12 border border-white/10 relative"
          >
            {isSubmitted ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] z-10 text-center p-8">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6">
                  <span className="text-primary text-2xl">✓</span>
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">Request Sent</h3>
                <p className="text-muted-foreground font-light">Redirecting to WhatsApp to complete your booking.</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input 
                  type="text" 
                  required 
                  placeholder="Full Name" 
                  className={inputClasses}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  data-testid="input-booking-name"
                />
                <User className={iconClasses} />
              </div>

              <div className="relative">
                <input 
                  type="tel" 
                  required 
                  placeholder="Phone Number" 
                  className={inputClasses}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  data-testid="input-booking-phone"
                />
                <Phone className={iconClasses} />
              </div>

              <div className="relative">
                <select 
                  required 
                  className={`${inputClasses} appearance-none bg-transparent`}
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  data-testid="select-booking-service"
                >
                  <option value="" disabled className="bg-[#111111] text-muted-foreground">Select Service Category</option>
                  <option value="Hair" className="bg-[#111111]">Hair</option>
                  <option value="Facial & Cleanup" className="bg-[#111111]">Facial & Cleanup</option>
                  <option value="Bridal & Makeup" className="bg-[#111111]">Bridal & Makeup</option>
                  <option value="Nails" className="bg-[#111111]">Nails</option>
                  <option value="Waxing & Threading" className="bg-[#111111]">Waxing & Threading</option>
                  <option value="Other" className="bg-[#111111]">Other (Specify on WhatsApp)</option>
                </select>
                <Scissors className={iconClasses} />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <input 
                    type="date" 
                    required 
                    className={`${inputClasses} [&::-webkit-calendar-picker-indicator]:opacity-0`}
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    data-testid="input-booking-date"
                  />
                  <Calendar className={iconClasses} />
                </div>
                <div className="relative">
                  <input 
                    type="time" 
                    required 
                    className={`${inputClasses} [&::-webkit-calendar-picker-indicator]:opacity-0`}
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    data-testid="input-booking-time"
                  />
                  <Clock className={iconClasses} />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full mt-4 py-5 bg-primary text-primary-foreground uppercase tracking-[0.2em] font-medium text-sm hover:bg-primary/90 transition-colors relative overflow-hidden group"
                data-testid="button-booking-submit"
              >
                <span className="relative z-10">Confirm via WhatsApp</span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer z-0 bg-white/20" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
