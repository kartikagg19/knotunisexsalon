import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "wouter";
import { useRef } from "react";
import { Star, ChevronRight, Quote } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const categories = [
  { name: "Hair", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&q=85&auto=format&fit=crop" },
  { name: "Facial & Cleanup", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&auto=format&fit=crop" },
  { name: "Bridal", img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900&q=85&auto=format&fit=crop" },
  { name: "Makeup", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=85&auto=format&fit=crop" }
];

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
        {/* Parallax Background */}
        <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
          <div className="absolute inset-0 bg-black/55 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=85&auto=format&fit=crop"
            alt="KNOTT Unisex Salon"
            className="w-full h-[120%] object-cover object-center -top-[10%] relative"
          />
        </motion.div>

        {/* Floating Gold Orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-72 h-72 md:w-96 md:h-96 bg-orange-300/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-[15%] right-[5%] w-80 h-80 md:w-[420px] md:h-[420px] bg-rose-900/10 rounded-full blur-[130px]" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-20 px-5 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-[#D4956A] text-xs md:text-sm tracking-[0.3em] uppercase mb-5 font-light"
          >
            Uttam Nagar, New Delhi · Est. 2021
          </motion.div>

          {/* Animated headline — word cascade */}
          <h1 className="font-serif leading-[1.15] mb-4 font-normal">
            <div className="overflow-hidden flex flex-wrap justify-center gap-x-3 gap-y-1 mb-1">
              {line1Words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.7 + i * 0.12, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block hero-gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
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
                  className={`inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${word === "|" ? "text-[#D4956A]/60" : "text-white italic"}`}
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
            <div className="flex justify-center items-center gap-1 text-[#D4956A]">
              {[1,2,3,4,5].map(s => <Star key={s} size={13} className="fill-[#D4956A]" />)}
              <span className="text-white/70 text-xs ml-2 tracking-wide">4.9 · 67 Reviews</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2 }}
            className="mt-7 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="/booking"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground uppercase text-sm tracking-[0.2em] font-medium overflow-hidden box-glow rounded-sm min-h-[52px]"
              data-testid="link-hero-booking"
            >
              <span className="relative z-10 flex items-center">
                Book Appointment <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer z-0 bg-white/20" />
            </Link>
            <a
              href="https://wa.me/919716002672"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white uppercase text-sm tracking-[0.2em] font-medium hover:border-white/60 transition-colors rounded-sm min-h-[52px]"
              data-testid="link-hero-whatsapp"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </div>

        {/* Scroll hint */}
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
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container px-5 mx-auto max-w-3xl text-center">
          <Star className="text-primary w-7 h-7 mx-auto mb-6 opacity-50" />
          <h2 className="font-serif italic text-2xl md:text-4xl leading-snug text-foreground mb-6">
            "A warm atelier where every cut, color, and brushstroke is deeply intentional."
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
            Since 2021, KNOTT Unisex Salon &amp; Academy has quietly earned a 4.9-star reputation
            not through flash, but through meticulous craft — blending high-end luxury with warm neighborhood intimacy.
          </p>
        </div>
      </section>

      {/* ─── Services Preview Grid ─── */}
      <section className="py-14 md:py-24 bg-background">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-14 gap-4">
            <div>
              <p className="text-primary tracking-[0.2em] uppercase text-xs mb-3">Our Expertise</p>
              <h2 className="font-serif text-3xl md:text-5xl text-foreground">Signature Services</h2>
            </div>
            <Link
              href="/services"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center group uppercase tracking-widest text-xs"
              data-testid="link-all-services"
            >
              Full Menu <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile: 2-col scroll; Desktop: 4-col grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {categories.map((cat, i) => (
              <ServiceCard key={i} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quick Info Strip ─── */}
      <section className="bg-primary py-5 px-5">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-primary-foreground">
            <p className="text-xs tracking-[0.2em] uppercase opacity-75">Open Daily</p>
            <p className="font-serif text-lg font-medium">10:30 AM – 9:00 PM</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20" />
          <div className="text-primary-foreground">
            <p className="text-xs tracking-[0.2em] uppercase opacity-75">Rating</p>
            <p className="font-serif text-lg font-medium">4.9 / 5 Stars</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20" />
          <a
            href="tel:+919716002672"
            className="text-primary-foreground hover:opacity-80 transition-opacity"
            data-testid="link-strip-phone"
          >
            <p className="text-xs tracking-[0.2em] uppercase opacity-75">Call Us</p>
            <p className="font-serif text-lg font-medium">+91 97160 02672</p>
          </a>
        </div>
      </section>

      {/* ─── Reviews Marquee ─── */}
      <section className="py-14 md:py-24 bg-card overflow-hidden border-y border-border relative">
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <div className="container px-5 mx-auto text-center mb-10">
          <div className="flex justify-center mb-3">
            {[1,2,3,4,5].map(star => <Star key={star} className="text-primary fill-primary w-4 h-4 mx-0.5" />)}
          </div>
          <p className="text-foreground font-serif text-xl md:text-2xl">4.9 / 5 from 67 Google Reviews</p>
        </div>

        <div className="flex marquee-content w-[200%]">
          <div className="flex space-x-4 px-4">
            {[...reviews, ...reviews].map((review, i) => (
              <div key={i} className="w-[260px] sm:w-[320px] shrink-0 bg-background p-6 border border-border relative rounded-sm">
                <Quote className="absolute text-primary/10 w-16 h-16 -top-2 -left-2 rotate-180" />
                <div className="flex text-primary mb-3">
                  {[1,2,3,4,5].map(star => <Star key={star} className="fill-primary w-3.5 h-3.5" />)}
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
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">Visit Us</p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">Find Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Location card */}
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
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                E-67, Arya Samaj Rd,<br />near Muthoot Bank, Block J,<br />Uttam Nagar, New Delhi 110059
              </p>
              <span className="mt-4 text-[10px] uppercase tracking-[0.2em] text-primary">Get Directions →</span>
            </motion.a>

            {/* Hours card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="bg-primary rounded-sm p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-primary-foreground mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="font-serif text-lg text-primary-foreground mb-2">Open Daily</h3>
              <p className="text-primary-foreground/75 text-sm font-light mb-1">Monday – Sunday</p>
              <p className="text-primary-foreground text-xl font-serif font-semibold">10:30 AM – 9:00 PM</p>
              <div className="mt-4 w-8 h-[1px] bg-primary-foreground/30" />
              <p className="text-primary-foreground/60 text-xs mt-3 tracking-wide">No appointment needed · Walk-ins welcome</p>
            </motion.div>

            {/* Contact / Book card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="bg-card border border-border rounded-sm p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.22a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">Book Appointment</h3>
              <a
                href="tel:+919716002672"
                className="text-foreground/75 text-sm font-light hover:text-primary transition-colors mb-1"
                data-testid="link-home-call"
              >
                +91 97160 02672
              </a>
              <a
                href="https://wa.me/919716002672?text=New%20Appointment%20Request"
                target="_blank"
                rel="noreferrer"
                className="mt-4 w-full py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-primary/85 transition-colors min-h-[44px] flex items-center justify-center"
                data-testid="link-home-whatsapp-book"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
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
