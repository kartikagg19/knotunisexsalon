import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

const services = [
  {
    category: "Hair — Men's",
    items: [
      { name: "Haircut", price: "₹149" },
      { name: "Beard / Shave", price: "₹99" },
      { name: "Hair Wash", price: "₹99" },
      { name: "Head Massage", price: "₹199" },
    ]
  },
  {
    category: "Hair — Women's",
    items: [
      { name: "Basic Haircut", price: "₹199" },
      { name: "Advance Haircut", price: "₹349" },
      { name: "Blow Dry", price: "₹149" },
      { name: "Hair Ironing / Pressing", price: "₹399" },
      { name: "Hair Styling", price: "₹499" },
      { name: "Head Massage", price: "₹349" },
      { name: "Hair SPA (Normal)", price: "₹499" },
      { name: "Hair SPA (Choco)", price: "₹799" },
      { name: "Hair SPA (Kera SPA)", price: "₹2499" },
      { name: "Root Touchup — Streak", price: "₹599" },
      { name: "Root Touchup — Loreal", price: "₹799" },
      { name: "Root Touchup — Inoa", price: "₹1299" },
    ]
  },
  {
    category: "Keratin & Chemical",
    items: [
      { name: "Brazilian Keratin", price: "₹1999" },
      { name: "Kerafine Keratin", price: "₹2999" },
      { name: "Chocolate Keratin", price: "₹3499" },
      { name: "N.K. Keratin", price: "₹4599" },
      { name: "Nano Plastia", price: "₹3000–8000" },
      { name: "Smoothening", price: "₹2500–7000" },
      { name: "Global Hair Color", price: "₹800–3000" },
      { name: "Highlights", price: "₹1500–5000" },
    ]
  },
  {
    category: "Hair Treatments",
    items: [
      { name: "Anti Dandruff Treatment", price: "₹1999" },
      { name: "Hair Loss Treatment", price: "₹1999" },
      { name: "Hair Silk Treatment", price: "₹1999" },
    ]
  },
  {
    category: "Threading",
    items: [
      { name: "Eyebrow Threading", price: "₹40" },
      { name: "Forehead", price: "₹30" },
      { name: "Upper Lips", price: "₹20" },
      { name: "Chin", price: "₹30" },
      { name: "Full Face Threading", price: "₹150" },
      { name: "Face Wax", price: "₹400" },
    ]
  },
  {
    category: "Facial",
    items: [
      { name: "Gold Facial", price: "₹499" },
      { name: "Diamond Facial", price: "₹700" },
      { name: "FYC Gold Facial", price: "₹1800" },
      { name: "FYC Wine Facial", price: "₹1800" },
      { name: "Raga Facial", price: "₹1600" },
      { name: "Aroma Facial", price: "₹999" },
      { name: "Wine Facial", price: "₹999" },
      { name: "Lotus Facial", price: "₹1100" },
      { name: "Crystal Facial", price: "₹800" },
      { name: "O3+ Facial", price: "₹2500" },
      { name: "Hydra Facial", price: "₹1500" },
      { name: "Korean Hydra Facial", price: "₹3500" },
      { name: "Korean Skull Facial", price: "₹1999" },
      { name: "Kanpeki Facial", price: "₹3500" },
    ]
  },
  {
    category: "Cleanup",
    items: [
      { name: "Basic Cleanup", price: "₹350" },
      { name: "Gold Cleanup", price: "₹350" },
      { name: "Diamond Cleanup", price: "₹500" },
      { name: "FYC Gold Cleanup", price: "₹1000" },
      { name: "FYC Wine Cleanup", price: "₹1800" },
      { name: "Raga Cleanup", price: "₹999" },
      { name: "Aroma Cleanup", price: "₹850" },
      { name: "Wine Cleanup", price: "₹600" },
      { name: "Lotus Cleanup", price: "₹700" },
      { name: "Crystal Cleanup", price: "₹500" },
      { name: "O3+ Cleanup", price: "₹1800" },
    ]
  },
  {
    category: "D-Tan",
    items: [
      { name: "Raga D-Tan", price: "₹400" },
      { name: "Sara D-Tan", price: "₹380" },
      { name: "O3+ D-Tan", price: "₹600" },
    ]
  },
  {
    category: "Bleach",
    items: [
      { name: "Normal Bleach", price: "₹200" },
      { name: "Red Wine Bleach", price: "₹300" },
      { name: "Oxy Bleach", price: "₹500" },
      { name: "Body Bleach (Normal)", price: "₹1000" },
      { name: "Body Bleach (Red Wine)", price: "₹1400" },
      { name: "Body Oxy Bleach", price: "₹2000" },
    ]
  },
  {
    category: "Waxing — Normal / Rica",
    items: [
      { name: "Arms Wax", price: "₹250 / ₹450" },
      { name: "Half Leg Wax", price: "₹250 / ₹450" },
      { name: "Full Leg Wax", price: "₹500 / ₹700" },
      { name: "Half Tummy Wax", price: "₹250 / ₹500" },
      { name: "Full Tummy Wax", price: "₹500 / ₹700" },
      { name: "Half Back Wax", price: "₹250 / ₹500" },
      { name: "Full Back Wax", price: "₹500 / ₹700" },
      { name: "V Wax", price: "₹800 / ₹1200" },
      { name: "Full Body Wax", price: "₹1400 / ₹2000" },
      { name: "Underarms Wax", price: "₹100" },
    ]
  },
  {
    category: "Body Treatments",
    items: [
      { name: "Body Massage (Oil)", price: "₹1200" },
      { name: "Body Massage (Cream)", price: "₹1500" },
      { name: "Body Polishing", price: "₹2000" },
      { name: "Body Oxy Bleach", price: "₹2000" },
    ]
  },
  {
    category: "Pedicure",
    items: [
      { name: "Normal Pedicure", price: "₹450" },
      { name: "Lotus Pedicure", price: "₹650" },
      { name: "Raga Pedicure", price: "₹850" },
      { name: "Aroma Pedicure", price: "₹750" },
      { name: "Crystal Pedicure", price: "₹650" },
    ]
  },
  {
    category: "Manicure",
    items: [
      { name: "Normal Manicure", price: "₹350" },
      { name: "Lotus Manicure", price: "₹550" },
      { name: "Raga Manicure", price: "₹650" },
      { name: "Aroma Manicure", price: "₹650" },
      { name: "Crystal Manicure", price: "₹500" },
    ]
  },
  {
    category: "Nail Extensions",
    items: [
      { name: "Hand Temporary Nails", price: "₹800" },
      { name: "Dominant Nails", price: "₹500" },
      { name: "Hand Gel Polish", price: "₹250" },
      { name: "Feet Gel Polish", price: "₹400" },
      { name: "French Nails", price: "₹800" },
      { name: "Ombre Nails", price: "₹900" },
      { name: "Glitter Ombre", price: "₹700" },
      { name: "Cat Eye Nail Paint", price: "₹1500" },
      { name: "Feet Nail Extension", price: "₹700" },
    ]
  },
  {
    category: "Makeup",
    items: [
      { name: "Normal Makeup", price: "₹1850" },
      { name: "HD Makeup", price: "₹2500" },
      { name: "Celebrity Makeup", price: "₹4000–4500" },
    ]
  },
  {
    category: "Bridal",
    items: [
      { name: "Normal Bridal Makeup", price: "₹15000" },
      { name: "HD Bridal Makeup", price: "₹18000" },
      { name: "Celebrity Bridal", price: "₹25000" },
    ]
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background flex flex-col pt-24 md:pt-28 pb-20 md:pb-0">
      <Navbar />

      <div className="container mx-auto px-5 py-8 md:py-12 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Full Menu</p>
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-foreground">Our Services</h1>
          <p className="text-muted-foreground font-light text-sm md:text-base">
            All prices listed are our standard rates. Final pricing may vary by hair length &amp; complexity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-5xl mx-auto">
          {services.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.08 }}
            >
              <h2 className="text-xl md:text-2xl font-serif italic text-primary mb-5 pb-3 border-b border-border">
                {section.category}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-baseline gap-2 group min-h-[40px]">
                    <span className="text-foreground/75 font-light text-sm group-hover:text-foreground transition-colors leading-snug flex-1">
                      {item.name}
                    </span>
                    <span className="border-b border-dotted border-foreground/15 w-6 shrink-0 relative top-[-4px]" />
                    <span className="text-primary font-medium text-sm shrink-0 tabular-nums">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-muted-foreground mb-5 text-sm">Ready to book? We confirm via WhatsApp.</p>
          <a
            href="https://wa.me/919716002672?text=New%20Appointment%20Request"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground uppercase text-sm tracking-[0.2em] font-medium hover:bg-primary/85 transition-colors rounded-sm min-h-[52px]"
            data-testid="link-services-booking"
          >
            Book via WhatsApp
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
