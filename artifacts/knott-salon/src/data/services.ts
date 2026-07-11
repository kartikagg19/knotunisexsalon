export type ServiceItem = {
  name: string;
  desc: string;
  duration: string;
  price: string;
};

export type ServiceCategory = {
  key: string;
  label: string;
  tagline: string;
  image: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    key: "hair",
    label: "Hair",
    tagline: "Cut, colour & texture — crafted, not templated",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&q=85&auto=format&fit=crop",
    items: [
      {
        name: "Haircut (Men's)",
        desc: "Precision cut tailored to your style with a clean finish.",
        duration: "30 min",
        price: "₹149",
      },
      {
        name: "Beard / Shave (Men's)",
        desc: "Expert beard shaping or clean shave with hot towel finish.",
        duration: "20 min",
        price: "₹99",
      },
      {
        name: "Hair Wash (Men's)",
        desc: "Refreshing scalp wash with premium shampoo and conditioner.",
        duration: "15 min",
        price: "₹99",
      },
      {
        name: "Haircut – Basic (Women's)",
        desc: "A clean, styled cut for everyday looks.",
        duration: "30 min",
        price: "₹199",
      },
      {
        name: "Haircut – Advanced (Women's)",
        desc: "A precision cut tailored to your face shape with blow-dry and styling consultation.",
        duration: "45 min",
        price: "₹349",
      },
      {
        name: "Head Massage (Men's)",
        desc: "Relaxing pressure-point scalp massage to relieve tension.",
        duration: "20 min",
        price: "₹199",
      },
      {
        name: "Head Massage (Women's)",
        desc: "Deep relaxing scalp massage with nourishing oils.",
        duration: "30 min",
        price: "₹349",
      },
      {
        name: "Hair SPA – Normal",
        desc: "Nourishing spa treatment to restore shine and softness.",
        duration: "45 min",
        price: "₹499",
      },
      {
        name: "Hair SPA – Chooel",
        desc: "Premium Chooel brand spa ritual for deep conditioning.",
        duration: "60 min",
        price: "₹799",
      },
      {
        name: "Hair SPA – Kera SPA",
        desc: "Keratin-infused spa treatment for frizz control and silkiness.",
        duration: "90 min",
        price: "₹2,499",
      },
      {
        name: "Global Hair Colour",
        desc: "Full head colour transformation using premium ammonia-free formulas.",
        duration: "120 min",
        price: "₹2,000 – ₹4,000",
      },
      {
        name: "Highlights & Balayage",
        desc: "Hand-painted, dimensional highlights for a naturally sun-kissed finish.",
        duration: "150 min",
        price: "₹3,500 – ₹6,000",
      },
      {
        name: "Hair Root Touch-Up (Streaks)",
        desc: "Seamless streaks colour match at the roots.",
        duration: "45 min",
        price: "₹599",
      },
      {
        name: "Hair Root Touch-Up (Loreal)",
        desc: "Loreal colour root touch-up for a flawless finish.",
        duration: "45 min",
        price: "₹799",
      },
      {
        name: "Hair Root Touch-Up (Inoa)",
        desc: "Premium Inoa ammonia-free root touch-up.",
        duration: "45 min",
        price: "₹1,299",
      },
      {
        name: "Hair Ironing / Pressing",
        desc: "Smooth, straight finish with heat protection.",
        duration: "30 min",
        price: "₹399",
      },
      {
        name: "Keratin – Brazilian",
        desc: "Brazilian keratin smoothing for silky, manageable hair.",
        duration: "180 min",
        price: "₹1,999",
      },
      {
        name: "Keratin – Konafine",
        desc: "Konafine keratin treatment for intense frizz control.",
        duration: "180 min",
        price: "₹2,999",
      },
      {
        name: "Keratin – Chocolate",
        desc: "Chocolate keratin therapy for deep nourishment and shine.",
        duration: "180 min",
        price: "₹3,499",
      },
      {
        name: "G.K. Keratin Smoothing",
        desc: "G.K. keratin for ultimate silkiness. Lasts up to 4 months.",
        duration: "180 min",
        price: "₹4,599",
      },
    ],
  },
  {
    key: "hair-treatment",
    label: "Hair Treatment",
    tagline: "Targeted scalp & hair repair rituals",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85&auto=format&fit=crop",
    items: [
      {
        name: "Anti Dandruff Treatment",
        desc: "Deep scalp cleansing to eliminate dandruff and restore scalp health.",
        duration: "60 min",
        price: "₹1,999",
      },
      {
        name: "Hair Loss Treatment",
        desc: "Intensive scalp therapy to reduce hair fall and stimulate growth.",
        duration: "60 min",
        price: "₹1,999",
      },
      {
        name: "Hair Silk Treatment",
        desc: "Smoothing silk protein treatment for glossy, frizz-free hair.",
        duration: "60 min",
        price: "₹1,999",
      },
    ],
  },
  {
    key: "nails",
    label: "Nails",
    tagline: "Hands and feet, finished like jewellery",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=85&auto=format&fit=crop",
    items: [
      {
        name: "Temporary Nails (Hand)",
        desc: "Quick, beautiful temporary nail extensions for hands.",
        duration: "30 min",
        price: "₹300",
      },
      {
        name: "Luxury Gel Manicure",
        desc: "Shape, cuticle care and a high-gloss, long-wear gel finish.",
        duration: "60 min",
        price: "from ₹799",
      },
      {
        name: "Acrylic Nail Extensions",
        desc: "Sculpted length and structure with a natural-look overlay.",
        duration: "90 min",
        price: "from ₹1,200",
      },
      {
        name: "Nail Art & Detailing",
        desc: "Hand-drawn art, chrome, cat-eye or ombre finishes.",
        duration: "45 min",
        price: "from ₹500",
      },
      {
        name: "Classic Pedicure",
        desc: "Soak, exfoliation and polish for soft, refreshed feet.",
        duration: "50 min",
        price: "from ₹450",
      },
      {
        name: "Spa Pedicure Ritual",
        desc: "Extended callus-care and massage pedicure with warm oil finish.",
        duration: "75 min",
        price: "from ₹850",
      },
      {
        name: "French & Ombre Finish",
        desc: "The timeless clean tip or soft gradient — done with precision.",
        duration: "60 min",
        price: "from ₹800",
      },
    ],
  },
  {
    key: "makeup",
    label: "Makeup",
    tagline: "From everyday glow to full glam",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=85&auto=format&fit=crop",
    items: [
      {
        name: "Everyday Makeup",
        desc: "Soft, natural glam for daytime events and outings.",
        duration: "45 min",
        price: "from ₹1,850",
      },
      {
        name: "HD Glam Makeup",
        desc: "Camera-ready, high-definition finish with long-wear formulas.",
        duration: "60 min",
        price: "from ₹2,500",
      },
      {
        name: "Celebrity Makeup",
        desc: "Editorial-grade artistry using premium international brands.",
        duration: "90 min",
        price: "₹4,000 – ₹4,500",
      },
      {
        name: "Party & Occasion Makeup",
        desc: "Statement looks built around your outfit and the night ahead.",
        duration: "60 min",
        price: "from ₹2,200",
      },
      {
        name: "Draping & Saree Styling",
        desc: "Pleats, pins and finishing touches for a flawless drape.",
        duration: "30 min",
        price: "from ₹800",
      },
    ],
  },
  {
    key: "skin",
    label: "Skin & Facials",
    tagline: "Facials, cleanups & body rituals",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&auto=format&fit=crop",
    items: [
      {
        name: "Gold Facial",
        desc: "Brightening 24k-gold ritual that revives dull, tired skin.",
        duration: "45 min",
        price: "₹499",
      },
      {
        name: "Raga Cleanup",
        desc: "Deep pore cleansing and refreshing skin cleanup.",
        duration: "30 min",
        price: "₹999",
      },
      {
        name: "Aroma Cleanup",
        desc: "Aromatherapy-infused cleanup for relaxed, glowing skin.",
        duration: "30 min",
        price: "₹599",
      },
      {
        name: "FYC Gold Cleanup",
        desc: "Gold-infused FYC brand cleanup for radiant skin.",
        duration: "30 min",
        price: "₹999",
      },
      {
        name: "Wine FYC Cleanup",
        desc: "Antioxidant-rich wine cleanup for deep skin nourishment.",
        duration: "30 min",
        price: "₹1,199",
      },
      {
        name: "Lotus Cleanup",
        desc: "Lotus herbals cleanup for brightening and pore refinement.",
        duration: "30 min",
        price: "₹699",
      },
      {
        name: "Crystal Cleanup",
        desc: "Crystal microdermabrasion-style cleanup for smooth skin.",
        duration: "30 min",
        price: "₹499",
      },
      {
        name: "D-Tan Cleanup",
        desc: "Removes sun damage and evens out skin tone in a single session.",
        duration: "30 min",
        price: "₹1,599",
      },
      {
        name: "Korean Hydra Facial",
        desc: "A multi-step luminosity ritual inspired by K-beauty skincare.",
        duration: "75 min",
        price: "₹3,999",
      },
      {
        name: "Kanpeki Facial",
        desc: "Premium Japanese Kanpeki facial for perfected, luminous skin.",
        duration: "75 min",
        price: "₹3,500",
      },
      {
        name: "Body Massage (Oil)",
        desc: "Full-body therapeutic oil massage to relieve stress and tension.",
        duration: "60 min",
        price: "₹1,200",
      },
      {
        name: "Body Massage (Cream)",
        desc: "Nourishing cream-based body massage for soft, moisturised skin.",
        duration: "60 min",
        price: "₹1,500",
      },
      {
        name: "Body Polishing",
        desc: "Full-body exfoliation and brightening for silky, even-toned skin.",
        duration: "90 min",
        price: "₹2,000",
      },
      {
        name: "Body Oxy Bleach",
        desc: "Full-body oxygen bleaching treatment for brightened, glowing skin.",
        duration: "120 min",
        price: "₹19,999",
      },
    ],
  },
  {
    key: "waxing",
    label: "Waxing",
    tagline: "Smooth finishes, minimal fuss",
    image:
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c1?w=900&q=85&auto=format&fit=crop",
    items: [
      {
        name: "Full Arms Wax (Rica)",
        desc: "Premium Rica wax for full arm hair removal — gentle on sensitive skin.",
        duration: "20 min",
        price: "₹450",
      },
      {
        name: "Half Leg Wax (Rica)",
        desc: "Rica wax for smooth lower legs with minimal redness.",
        duration: "20 min",
        price: "₹450",
      },
      {
        name: "Full Leg Wax (Rica)",
        desc: "Complete leg waxing with premium Rica formula.",
        duration: "40 min",
        price: "₹700",
      },
      {
        name: "Half Tummy Wax (Rica)",
        desc: "Gentle Rica wax for upper or lower tummy area.",
        duration: "15 min",
        price: "₹500",
      },
      {
        name: "Full Tummy Wax (Rica)",
        desc: "Full tummy hair removal with soothing Rica wax.",
        duration: "20 min",
        price: "₹700",
      },
      {
        name: "Half Back Wax (Rica)",
        desc: "Rica wax for upper or lower back — gentle and effective.",
        duration: "15 min",
        price: "₹500",
      },
      {
        name: "Full Back Wax (Rica)",
        desc: "Complete back hair removal with premium Rica formula.",
        duration: "25 min",
        price: "₹700",
      },
      {
        name: "V Wax (Rica)",
        desc: "Precise, gentle intimate waxing with Rica formula.",
        duration: "20 min",
        price: "₹1,200",
      },
      {
        name: "Full Body Wax (Rica)",
        desc: "Complete full-body Rica wax for lasting, salon-smooth skin.",
        duration: "120 min",
        price: "₹2,000",
      },
      {
        name: "Eyebrow & Face Threading",
        desc: "Sharp, clean shaping done with precision threading.",
        duration: "15 min",
        price: "from ₹40",
      },
      {
        name: "Full Face Wax & Threading",
        desc: "Complete facial hair removal, cleanup-ready finish.",
        duration: "30 min",
        price: "from ₹150",
      },
    ],
  },
  {
    key: "bridal",
    label: "Bridal",
    tagline: "For the day everyone will remember",
    image:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900&q=85&auto=format&fit=crop",
    items: [
      {
        name: "Bridal Trial Makeup",
        desc: "A full run-through so your wedding-day look is exactly right.",
        duration: "60 min",
        price: "from ₹5,000",
      },
      {
        name: "HD Bridal Makeup",
        desc: "Full bridal styling — makeup, hair and draping — in high-definition finish.",
        duration: "120 min",
        price: "from ₹18,000",
      },
      {
        name: "Celebrity Bridal Package",
        desc: "Our most premium package with a dedicated artist team for the full day.",
        duration: "180 min",
        price: "from ₹25,000",
      },
      {
        name: "Bridal Hair & Draping",
        desc: "Elaborate bridal hairstyling paired with saree or lehenga draping.",
        duration: "60 min",
        price: "from ₹3,000",
      },
    ],
  },
];

export const allServiceCount = serviceCategories.reduce(
  (acc, cat) => acc + cat.items.length,
  0,
);
