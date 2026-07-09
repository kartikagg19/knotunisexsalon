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
    <div className="min-h-screen bg-background flex flex-col pt-28">
      <Navbar />

      <div className="container mx-auto px-6 py-12 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white">Portfolio</h1>
          <p className="text-muted-foreground font-light text-lg">
            A glimpse into the artistry and transformations at KNOTT.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid overflow-hidden bg-card relative group"
            >
              <img 
                src={src} 
                alt={`Salon work ${idx + 1}`} 
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
