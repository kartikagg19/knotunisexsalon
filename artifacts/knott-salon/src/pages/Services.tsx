import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";
import { serviceCategories } from "@/data/services";

const tabs = [{ key: "all", label: "All" }, ...serviceCategories.map((c) => ({ key: c.key, label: c.label }))];

export default function Services() {
  const [active, setActive] = useState("all");

  const groups =
    active === "all" ? serviceCategories : serviceCategories.filter((c) => c.key === active);

  return (
    <div className="min-h-screen bg-background flex flex-col pt-24 md:pt-28 pb-20 md:pb-0">
      <Navbar />

      {/* Hero */}
      <section className="relative section-glow pb-6 md:pb-10">
        <div className="container mx-auto px-5 text-center max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="gradient-label text-xs uppercase tracking-[0.3em] mb-3 font-medium"
          >
            The Menu
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl md:text-6xl gradient-heading mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-muted-foreground font-light text-sm md:text-base"
          >
            Curated by category, priced with total clarity. Explore hair, nails, makeup, skin, waxing and bridal — every treatment finished to salon-floor precision.
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-[60px] md:top-[68px] z-30 bg-background/95 backdrop-blur-md border-b border-border/60 py-3 mb-8 md:mb-10">
        <div className="container mx-auto px-5">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mb-1 justify-start md:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                data-testid={`tab-services-${tab.key}`}
                className={`relative px-4 md:px-5 py-2 rounded-full text-xs md:text-[13px] uppercase tracking-[0.14em] whitespace-nowrap transition-colors duration-300 border ${
                  active === tab.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category groups */}
      <div className="container mx-auto px-5 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="space-y-16 md:space-y-24 max-w-5xl mx-auto"
          >
            {groups.map((cat, gi) => (
              <div key={cat.key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className="relative rounded-sm overflow-hidden mb-8 h-40 md:h-52 flex items-end"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${cat.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
                  <div className="relative z-10 p-5 md:p-8">
                    <h2 className="text-3xl md:text-5xl gradient-heading mb-1">{cat.label}</h2>
                    <p className="text-muted-foreground text-sm md:text-base font-light">{cat.tagline}</p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  {cat.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                      className="bg-card border border-card-border rounded-sm p-5 md:p-6 flex flex-col hover:border-primary/40 transition-colors group"
                      data-testid={`card-service-${cat.key}-${i}`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="gradient-label font-medium text-sm md:text-base whitespace-nowrap shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed mb-4 flex-1">
                        {item.desc}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground/70 uppercase tracking-wider">
                        <Clock size={13} className="mr-1.5 text-primary/60" />
                        {item.duration}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-20 md:mt-28 mb-4 max-w-xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-3">Not sure what you need?</h3>
          <p className="text-muted-foreground font-light text-sm mb-6">
            Message us on WhatsApp and our stylists will help you choose the right treatment.
          </p>
          <a
            href="/booking"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground uppercase text-xs tracking-[0.22em] font-medium rounded-sm hover:bg-primary/85 transition-colors"
            data-testid="link-services-book"
          >
            Book an Appointment
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
