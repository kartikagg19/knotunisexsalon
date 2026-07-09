import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

const services = [
  {
    category: "Hair",
    items: [
      { name: "Haircut (Ladies)", price: "₹200–500" },
      { name: "Haircut (Gents)", price: "₹100–200" },
      { name: "Blow Dry", price: "₹150–300" },
      { name: "Hair Styling", price: "₹300–600" },
      { name: "Nano Plastia", price: "₹3000–8000" },
      { name: "Smoothening", price: "₹2500–7000" },
      { name: "Hair Color (Global)", price: "₹800–3000" },
      { name: "Highlights", price: "₹1500–5000" },
      { name: "Keratin Treatment", price: "₹3000–9000" },
      { name: "Hair Spa", price: "₹500–1500" }
    ]
  },
  {
    category: "Facial & Cleanup",
    items: [
      { name: "Basic Cleanup", price: "₹299" },
      { name: "Gold Facial", price: "₹799" },
      { name: "Diamond Facial", price: "₹999" },
      { name: "D-Tan Facial", price: "₹499" },
      { name: "Anti-Pigmentation Facial", price: "₹1200" },
      { name: "Hydra Facial", price: "₹1500–2500" }
    ]
  },
  {
    category: "Threading",
    items: [
      { name: "Eyebrow Threading", price: "₹30" },
      { name: "Upper Lip", price: "₹20" },
      { name: "Full Face Threading", price: "₹150" },
      { name: "Forehead", price: "₹30" }
    ]
  },
  {
    category: "Waxing",
    items: [
      { name: "Full Arms", price: "₹200" },
      { name: "Full Legs", price: "₹250" },
      { name: "Full Body (Rica)", price: "₹1500–2500" },
      { name: "Underarms", price: "₹100" }
    ]
  },
  {
    category: "Mani & Pedi",
    items: [
      { name: "Basic Manicure", price: "₹299" },
      { name: "Luxury Manicure", price: "₹599" },
      { name: "Basic Pedicure", price: "₹349" },
      { name: "Luxury Pedicure", price: "₹699" }
    ]
  },
  {
    category: "Nail Art",
    items: [
      { name: "Gel Nails", price: "₹800–2000" },
      { name: "Acrylic Nails", price: "₹1200–2500" },
      { name: "Nail Art (per nail)", price: "₹50–200" },
      { name: "French Tips", price: "₹500–1000" }
    ]
  },
  {
    category: "Makeup",
    items: [
      { name: "Party Makeup", price: "₹1500–3000" },
      { name: "Airbrush Makeup", price: "₹3000–5000" },
      { name: "Eye Makeup", price: "₹500–1500" }
    ]
  },
  {
    category: "Bridal",
    items: [
      { name: "Bridal Makeup", price: "₹8000–25000" },
      { name: "Pre-bridal Package", price: "₹5000–15000" },
      { name: "HD Makeup", price: "₹5000–12000" }
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background flex flex-col pt-28">
      <Navbar />

      <div className="container mx-auto px-6 py-12 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white">Our Menu</h1>
          <p className="text-muted-foreground font-light text-lg">
            A curated selection of premium treatments designed to elevate and transform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {services.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              <h2 className="text-3xl font-serif italic text-primary mb-8 pb-4 border-b border-white/10">
                {section.category}
              </h2>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex justify-between items-baseline group">
                    <span className="text-foreground/90 font-light text-lg group-hover:text-white transition-colors">{item.name}</span>
                    <span className="mx-4 flex-1 border-b border-dotted border-white/20 relative top-[-6px]" />
                    <span className="text-primary font-medium">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
