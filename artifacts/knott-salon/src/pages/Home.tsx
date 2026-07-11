import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "wouter";
import { useRef, useState } from "react";
import { Star, ChevronRight, Quote, Phone, Calendar, Clock, User, Scissors, CheckCircle, GraduationCap, MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { serviceCategories } from "@/data/services";
import { academyStats, courses } from "@/data/academy";

const categories = serviceCategories
  .filter((c) => ["hair", "makeup", "nails", "skin"].includes(c.key))
  .map((c) => ({ name: c.label, img: c.image }));

const reviews = [
  { name: "Monika Bansal", time: "2 weeks ago", text: "Very good service and price reason at very best staff. The ambience is so calming and they truly listen." },
  { name: "Sonia Sehgal", time: "1 month ago", text: "Superb work.. good behaviour, nice atmosphere. Loved every visit so far!" },
  { name: "Jyoti Mahajan", time: "2 months ago", text: "I highly recommend their pedicure and manicure service. Beautifully done, very hygienic." },
  { name: "Kiran Saniya", time: "5 months ago", text: "Very good services and I am very satisfied. Good nature salon staff for clients." },
  { name: "Shivani Mishra", time: "7 months ago", text: "The bestest salon here, I will come every month, their service is the best." },
];

/* Hero headline — word-by-word cascade animation */
const line1Words = ["Nail,", "Makeup,", "Beauty,"];
const line2Words = ["Skin,", "Hair", "|", "Luxury", "Salon"];

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 280]);
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden pb-16 md:pb-0">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/25 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=85&auto=format&fit=crop"
            alt="KNOTT Unisex Salon"
            className="w-full h-[120%] object-cover object-center -top-[10%] relative"
          />
        </motion.div>

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-[15%] right-[5%] w-80 h-80 md:w-[420px] md:h-[420px] bg-accent/10 rounded-full blur-[130px] animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container relative z-20 px-5 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="gradient-label text-xs md:text-sm tracking-[0.3em] uppercase mb-5 font-medium"
          >
            Uttam Nagar, New Delhi · Est. 2021
          </motion.div>

          <h1 className="font-serif leading-[1.15] mb-4 font-normal">
            <div className="overflow-hidden flex flex-wrap justify-center gap-x-3 gap-y-1 mb-1">
              {line1Words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.7 + i * 0.12, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block gradient-heading text-glow text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="overflow-hidden flex flex-wrap justify-center gap-x-3 gap-y-1">
              {line2Words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.75, delay: 1.1 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                  className={`inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${word === "|" ? "text-primary/50" : "text-white italic"}`}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-3 mb-4"
          >
            <div className="flex justify-center items-center gap-1 text-primary">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={13} className="fill-primary" />
              ))}
              <span className="text-white/70 text-xs ml-2 tracking-wide">4.9 · 67 Reviews</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2 }}
            className="mt-7 flex flex-col items-center gap-5"
          >
            <Link
              href="/booking"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground uppercase text-sm tracking-[0.2em] font-medium overflow-hidden box-glow rounded-sm min-h-[52px] w-full max-w-xs sm:max-w-sm"
              data-testid="link-hero-booking"
            >
              <span className="relative z-10 flex items-center">
                Book Appointment <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer z-0 bg-white/20" />
            </Link>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/himanshmakeovers"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram – @himanshmakeovers"
                data-testid="link-hero-instagram"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-white/70 hover:border-pink-400/60 hover:text-pink-400 transition-all duration-300 active:scale-95"
              >
                <FaInstagram size={18} />
                <span className="text-[11px] tracking-wider uppercase">Instagram</span>
              </a>

              <a
                href="tel:+919716002672"
                aria-label="Call us"
                data-testid="link-hero-phone"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-white/70 hover:border-white/50 hover:text-white transition-all duration-300 active:scale-95"
              >
                <Phone size={17} />
                <span className="text-[11px] tracking-wider uppercase">Call Us</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        >
          <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── Intro / Philosophy ─── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-24 bg-card border-y border-border section-glow"
      >
        <div className="container px-5 mx-auto max-w-3xl text-center">
          <Star className="text-primary w-7 h-7 mx-auto mb-6 opacity-50" />
          <h2 className="font-serif italic text-2xl md:text-4xl leading-snug gradient-heading mb-6">
            "A warm atelier where every cut, color, and brushstroke is deeply intentional."
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
            Since 2021, KNOTT Unisex Salon &amp; Academy has quietly earned a 4.9-star reputation
            not through flash, but through meticulous craft — blending high-end luxury with warm neighborhood intimacy.
          </p>
        </div>
      </motion.section>

      {/* ─── Services Preview Grid ─── */}
      <section className="py-14 md:py-24 bg-background">
        <div className="container px-5 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-14 gap-4"
          >
            <div>
              <p className="gradient-label tracking-[0.2em] uppercase text-xs mb-3 font-medium">Our Expertise</p>
              <h2 className="font-serif text-3xl md:text-5xl text-foreground">Signature Services</h2>
            </div>
            <Link
              href="/services"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center group uppercase tracking-widest text-xs"
              data-testid="link-all-services"
            >
              Full Menu <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {categories.map((cat, i) => (
              <ServiceCard key={i} category={cat} index={i} />
            ))}
          </div>

          {/* A few popular items at a glance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 md:mt-14">
            {[
              serviceCategories.find((c) => c.key === "hair")!.items[1],
              serviceCategories.find((c) => c.key === "hair")!.items[3],
              serviceCategories.find((c) => c.key === "makeup")!.items[1],
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card border border-card-border rounded-sm p-5 flex items-center justify-between hover:border-primary/40 transition-colors"
              >
                <div className="pr-3">
                  <h4 className="font-serif text-base text-foreground mb-1">{item.name}</h4>
                  <p className="text-muted-foreground text-xs font-light">{item.duration}</p>
                </div>
                <span className="gradient-label font-medium text-sm whitespace-nowrap">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quick Info Strip ─── */}
      <section className="bg-primary py-5 px-5">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-primary-foreground">
            <p className="text-xs tracking-[0.2em] uppercase opacity-75">Mon – Sun</p>
            <p className="font-serif text-lg font-medium">10:30 AM – 9:00 PM</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20" />
          <div className="text-primary-foreground">
            <p className="text-xs tracking-[0.2em] uppercase opacity-75">Rating</p>
            <p className="font-serif text-lg font-medium">4.9 / 5 Stars</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20" />
          <a href="tel:+919716002672" className="text-primary-foreground hover:opacity-80 transition-opacity" data-testid="link-strip-phone">
            <p className="text-xs tracking-[0.2em] uppercase opacity-75">Call Us</p>
            <p className="font-serif text-lg font-medium">+91 97160 02672</p>
          </a>
        </div>
      </section>

      {/* ─── Academy Teaser ─── */}
      <section className="py-14 md:py-24 bg-background relative section-glow overflow-hidden">
        <div className="container px-5 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <GraduationCap className="text-primary w-8 h-8 mx-auto mb-4" />
            <p className="gradient-label tracking-[0.2em] uppercase text-xs mb-3 font-medium">Beauty Education</p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">KNOTT Academy</h2>
            <p className="text-muted-foreground font-light text-sm md:text-base">
              Turn your passion into a profession. Industry-led courses in makeup, hair, nails and skin — taught on a real salon floor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto mb-12"
          >
            {academyStats.map((stat) => (
              <div key={stat.label} className="bg-card border border-card-border rounded-sm px-3 py-5 md:py-7 text-center">
                <p className="text-xl md:text-3xl gradient-heading font-serif mb-1">{stat.value}</p>
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.16em]">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {courses.slice(0, 3).map((course, i) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card border border-card-border rounded-sm overflow-hidden group hover:border-primary/40 transition-colors"
              >
                <div className="relative h-32 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${course.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-base text-foreground mb-1">{course.name}</h4>
                  <p className="text-xs text-muted-foreground">{course.duration} · {course.fee}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-10"
          >
            <Link
              href="/academy"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary/50 text-primary uppercase text-xs tracking-[0.2em] font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              data-testid="link-home-academy"
            >
              Explore Academy <ChevronRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Reviews Marquee ─── */}
      <section className="py-14 md:py-24 bg-card overflow-hidden border-y border-border relative">
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <div className="container px-5 mx-auto text-center mb-10">
          <div className="flex justify-center mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="text-primary fill-primary w-4 h-4 mx-0.5" />
            ))}
          </div>
          <p className="text-foreground font-serif text-xl md:text-2xl">4.9 / 5 from 67 Google Reviews</p>
        </div>

        <div className="flex marquee-content w-[200%]">
          <div className="flex space-x-4 px-4">
            {[...reviews, ...reviews].map((review, i) => (
              <div key={i} className="w-[260px] sm:w-[320px] shrink-0 bg-background p-6 border border-border relative rounded-sm">
                <Quote className="absolute text-primary/10 w-16 h-16 -top-2 -left-2 rotate-180" />
                <div className="flex text-primary mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="fill-primary w-3.5 h-3.5" />
                  ))}
                </div>
                <p className="text-foreground/80 font-light text-sm mb-5 italic relative z-10 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium text-sm">{review.name}</span>
                  <span className="text-muted-foreground text-xs">{review.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Location & Timing ─── */}
      <section className="py-14 md:py-20 bg-background px-5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <p className="gradient-label tracking-[0.3em] uppercase text-xs mb-3 font-medium">Visit Us</p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">Find Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.a
              href="https://maps.google.com/?q=E-67+Arya+Samaj+Rd+Uttam+Nagar+New+Delhi"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-border rounded-sm p-6 flex flex-col items-center text-center group hover:border-primary/40 transition-colors"
              data-testid="link-home-location"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <MapPin size={22} />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                E-67, Arya Samaj Rd,<br />near Muthoot Bank, Block J,<br />Uttam Nagar, New Delhi 110059
              </p>
              <span className="mt-4 text-[10px] uppercase tracking-[0.2em] text-primary">Get Directions →</span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="bg-primary rounded-sm p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-primary-foreground mb-4">
                <Clock size={22} />
              </div>
              <h3 className="font-serif text-lg text-primary-foreground mb-2">Working Hours</h3>
              <p className="text-primary-foreground/75 text-sm font-light mb-1">Monday – Sunday</p>
              <p className="text-primary-foreground text-xl font-serif font-semibold">10:30 AM – 9:00 PM</p>
              <div className="mt-4 w-8 h-[1px] bg-primary-foreground/30" />
              <p className="text-primary-foreground/60 text-xs mt-3 tracking-wide">No appointment needed · Walk-ins welcome</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="bg-card border border-border rounded-sm p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <FaWhatsapp size={20} />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">Book Appointment</h3>
              <p className="text-muted-foreground text-sm font-light mb-4">Reserve your slot in seconds</p>
              <Link
                href="/booking"
                className="mt-auto w-full py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-primary/85 transition-colors min-h-[44px] flex items-center justify-center"
                data-testid="link-home-book-slot"
              >
                Book Your Slot →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Inline Booking Form ─── */}
      <section className="py-14 md:py-20 bg-card border-t border-border px-5" id="book">
        <div className="container mx-auto max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <p className="gradient-label tracking-[0.3em] uppercase text-xs mb-3 font-medium">Reserve Your Spot</p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">Book Your Slot</h2>
            <p className="text-muted-foreground font-light text-sm mt-3">Fill in your details — we'll confirm via WhatsApp.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <HomeBookingForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function HomeBookingForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", date: "", time: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New Appointment Request%0A-------------------%0AName: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0ADate: ${formData.date}%0ATime: ${formData.time}`;
    window.open(`https://wa.me/919716002672?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const inputBase = "w-full bg-transparent border-b-2 border-border px-0 py-4 text-foreground focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted-foreground/60 text-base";
  const iconBase = "absolute right-0 top-1/2 -translate-y-1/2 text-primary/40 w-5 h-5 pointer-events-none";

  return (
    <div className="bg-background border border-border rounded-sm p-6 md:p-10 relative">
      {submitted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background z-10 text-center p-8 rounded-sm">
          <CheckCircle className="text-primary w-14 h-14 mb-5" />
          <h3 className="text-2xl font-serif text-foreground mb-2">Request Sent!</h3>
          <p className="text-muted-foreground font-light text-sm">Opening WhatsApp to confirm your booking…</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="relative">
          <input type="text" required placeholder="Your Full Name" className={inputBase}
            value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} data-testid="input-home-name" />
          <User className={iconBase} />
        </div>
        <div className="relative">
          <input type="tel" required placeholder="Phone Number" className={inputBase}
            value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} data-testid="input-home-phone" />
          <Phone className={iconBase} />
        </div>
        <div className="relative">
          <select required className={`${inputBase} appearance-none cursor-pointer`}
            value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })} data-testid="select-home-service">
            <option value="" disabled>Select Service</option>
            <option value="Hair">Hair</option>
            <option value="Nails">Nails</option>
            <option value="Makeup">Makeup</option>
            <option value="Skin">Skin</option>
            <option value="Waxing">Waxing</option>
            <option value="Bridal">Bridal</option>
            <option value="Other">Other</option>
          </select>
          <Scissors className={iconBase} />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="relative">
            <input type="date" required className={`${inputBase} [&::-webkit-calendar-picker-indicator]:opacity-0`}
              value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} data-testid="input-home-date" />
            <Calendar className={iconBase} />
          </div>
          <div className="relative">
            <input type="time" required className={`${inputBase} [&::-webkit-calendar-picker-indicator]:opacity-0`}
              value={formData.time} onChange={e => setFormData({ ...formData, time: e.target.value })} data-testid="input-home-time" />
            <Clock className={iconBase} />
          </div>
        </div>
        <button type="submit"
          className="w-full mt-2 py-4 bg-primary text-primary-foreground uppercase tracking-[0.2em] font-medium text-sm hover:bg-primary/90 transition-colors rounded-sm relative overflow-hidden group min-h-[52px]"
          data-testid="button-home-submit">
          <span className="relative z-10">Confirm via WhatsApp</span>
          <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer z-0 bg-white/20" />
        </button>
      </form>
      <p className="text-center text-muted-foreground text-sm mt-6">
        Prefer to call?{" "}
        <a href="tel:+919716002672" className="text-primary hover:underline">+91 97160 02672</a>
      </p>
    </div>
  );
}

function ServiceCard({ category, index }: { category: { name: string; img: string }, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden bg-card rounded-sm"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={category.img}
          alt={category.name}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-700 group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>

      <div className="absolute inset-2 md:inset-4 border border-white/10 group-hover:border-primary/50 transition-colors duration-500 z-10 pointer-events-none rounded-sm" />

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 md:p-7">
        <h3 className="text-sm md:text-2xl font-serif text-white mb-1 md:mb-2 transform group-hover:-translate-y-1 md:group-hover:-translate-y-2 transition-transform duration-500">{category.name}</h3>
        <div className="h-[2px] w-8 md:w-12 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>

      <Link href="/services" className="absolute inset-0 z-30" data-testid={`link-service-${category.name.toLowerCase().replace(/[^a-z]/g, "")}`}>
        <span className="sr-only">View {category.name}</span>
      </Link>
    </motion.div>
  );
}
