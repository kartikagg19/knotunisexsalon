import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=900&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1633360971020-656d89f9e98e?w=900&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=900&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=900&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=85&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background flex flex-col pt-24 md:pt-28 pb-20 md:pb-0">
      <Navbar />

      <div className="container mx-auto px-4 py-8 md:py-12 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Recent Work</p>
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-foreground">Portfolio</h1>
          <p className="text-muted-foreground font-light text-sm md:text-base">
            A glimpse into the artistry and transformations at KNOTT.
          </p>
        </motion.div>

        {/* Mobile: 2-col masonry · Desktop: 3-col masonry */}
        <div className="columns-2 md:columns-3 gap-3 md:gap-5 space-y-3 md:space-y-5">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "60px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
              className="break-inside-avoid overflow-hidden bg-card relative group rounded-sm"
            >
              <img
                src={src}
                alt={`Salon work ${idx + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="https://www.instagram.com/himanshmakeovers"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary/40 text-primary uppercase text-xs tracking-[0.25em] hover:bg-primary hover:text-primary-foreground transition-all rounded-sm min-h-[52px]"
            data-testid="link-gallery-instagram"
          >
            See More on Instagram
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
