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

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  const titleText = "EXTRAORDINARY".split("");
  const subtitleText = "TRANSFORMATIONS".split("");

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          <div className="absolute inset-0 bg-black/60 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1675034743339-0b0747047727?w=1600&q=85&auto=format&fit=crop" 
            alt="Luxury Salon" 
            className="w-full h-[120%] object-cover object-center -top-[10%] relative"
          />
        </motion.div>

        {/* Floating Gold Orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-1000" />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[150px] mix-blend-screen" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-20 px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light"
          >
            Uttam Nagar's Best Salon
          </motion.div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-2 font-normal">
            <div className="overflow-hidden flex justify-center">
              {titleText.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.05, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block gold-gradient-text"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="overflow-hidden flex justify-center mt-2">
              {subtitleText.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.05, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block text-white italic"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="mt-8 text-foreground/80 max-w-xl mx-auto font-light leading-relaxed md:text-lg"
          >
            Step into a world-class luxury salon where ordinary people walk in and extraordinary craftmanship takes over.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-12"
          >
            <Link
              href="/booking"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground uppercase text-sm tracking-[0.2em] font-medium overflow-hidden box-glow"
              data-testid="link-hero-booking"
            >
              <span className="relative z-10 flex items-center">
                Book Your Transformation <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer z-0 bg-white/20" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="py-24 md:py-32 relative bg-[#050505]">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <Star className="text-primary w-8 h-8 mx-auto mb-8 opacity-50" />
          <h2 className="font-serif italic text-3xl md:text-5xl leading-tight text-white mb-8">
            "A candlelit atelier where every cut, color, and brushstroke is deeply intentional."
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed md:text-lg">
            Since 2021, KNOTT Unisex Salon & Academy has quietly earned a 4.9-star reputation not through flash, but through meticulous craft. We blend high-end luxury with warm neighborhood intimacy.
          </p>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-24 bg-background relative z-10">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Our Expertise</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white">Signature Services</h2>
            </div>
            <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center group uppercase tracking-widest text-sm mt-6 md:mt-0" data-testid="link-all-services">
              View Full Menu <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <ServiceCard key={i} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Marquee */}
      <section className="py-24 bg-[#0a0a0a] overflow-hidden border-y border-white/5 relative">
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
        
        <div className="container px-6 mx-auto text-center mb-16">
          <div className="flex justify-center mb-4">
            {[1,2,3,4,5].map(star => <Star key={star} className="text-primary fill-primary w-5 h-5 mx-1" />)}
          </div>
          <p className="text-white font-serif text-2xl">4.9/5 from 67 Google Reviews</p>
        </div>

        <div className="flex marquee-content w-[200%] md:w-auto">
          <div className="flex space-x-6 px-6">
            {[...reviews, ...reviews].map((review, i) => (
              <div key={i} className="w-[300px] md:w-[400px] shrink-0 bg-[#111111] p-8 border border-white/5 relative">
                <Quote className="absolute text-primary/10 w-24 h-24 -top-4 -left-4 rotate-180" />
                <div className="flex text-primary mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="fill-primary w-4 h-4" />)}
                </div>
                <p className="text-foreground/90 font-light mb-6 italic relative z-10">"{review.text}"</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-white uppercase tracking-wider text-sm">{review.name}</span>
                  <span className="text-muted-foreground text-xs">{review.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ServiceCard({ category, index }: { category: { name: string; img: string }, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative h-[450px] overflow-hidden bg-card"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={category.img} 
          alt={category.name} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      
      {/* 3D Border Glow on Hover effect */}
      <div className="absolute inset-4 border border-white/10 group-hover:border-primary/50 transition-colors duration-500 z-10 pointer-events-none" />

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
        <h3 className="text-2xl font-serif text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">{category.name}</h3>
        <div className="h-[2px] w-12 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
      
      <Link href="/services" className="absolute inset-0 z-30" data-testid={`link-service-${category.name.toLowerCase().replace(/[^a-z]/g, '')}`}>
        <span className="sr-only">View {category.name}</span>
      </Link>
    </motion.div>
  );
}
