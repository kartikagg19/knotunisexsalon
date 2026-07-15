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
        name: "Men's Cut + Shave",
        desc: "Haircut and clean shave combo for men.",
        duration: "40 min",
        price: "₹199",
      },
      {
        name: "Head Wash",
        desc: "Refreshing scalp wash with premium shampoo and conditioner.",
        duration: "15 min",
        price: "₹149",
      },
      {
        name: "Head Massage",
        desc: "Relaxing pressure-point scalp massage to relieve tension.",
        duration: "20 min",
        price: "₹149",
      },
      {
        name: "Blow Dry",
        desc: "Professional blow-dry and smooth finish styling.",
        duration: "20 min",
        price: "₹199",
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
        name: "Hair Ironing / Pressing",
        desc: "Smooth, straight finish with heat protection.",
        duration: "30 min",
        price: "₹249",
      },
      {
        name: "Hair Styling",
        desc: "Creative styling for any occasion — curls, waves or sleek looks.",
        duration: "30 min",
        price: "₹499",
      },
      {
        name: "Hair SPA – Normal",
        desc: "Nourishing spa treatment to restore shine and softness.",
        duration: "45 min",
        price: "₹499",
      },
      {
        name: "Hair SPA – Loreal",
        desc: "Premium Loreal brand spa ritual for deep conditioning.",
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
        name: "Keratin – Brazilian",
        desc: "Brazilian keratin smoothing for silky, manageable hair.",
        duration: "180 min",
        price: "₹1,999",
      },
      {
        name: "Keratin – Kerafine",
        desc: "Kerafine keratin treatment for intense frizz control.",
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
        name: "G.K. Keratin",
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
        name: "Permanent Nail Extensions",
        desc: "Long-lasting permanent nail set for a polished, ready look.",
        duration: "45 min",
        price: "₹500",
      },
      {
        name: "Nail Extension (Feet)",
        desc: "Sculpted nail extensions for your feet.",
        duration: "45 min",
        price: "₹700",
      },
      {
        name: "Hand Gel Polish",
        desc: "Long-wear gel polish for hands in 100+ shades.",
        duration: "30 min",
        price: "₹250",
      },
      {
        name: "Feet Gel Polish",
        desc: "Long-wear gel polish for feet in your choice of shades.",
        duration: "30 min",
        price: "₹400",
      },
      {
        name: "French Nails",
        desc: "Classic clean French tip finish — timeless and elegant.",
        duration: "45 min",
        price: "₹800",
      },
      {
        name: "Ombre Nails",
        desc: "Soft gradient ombre finish for a modern, chic look.",
        duration: "45 min",
        price: "₹900",
      },
      {
        name: "Glitter Ombre Nails",
        desc: "Sparkly glitter gradient nail art for special occasions.",
        duration: "45 min",
        price: "₹999",
      },
      {
        name: "Cat Eye Nail Paint",
        desc: "Magnetic cat-eye effect nail paint for a luxurious finish.",
        duration: "45 min",
        price: "₹1,000",
      },
      {
        name: "Nail Ext (Feet)",
        desc: "Full nail extensions specifically for feet.",
        duration: "45 min",
        price: "₹700",
      },
      {
        name: "Manicure – Normal",
        desc: "Classic hand soak, cuticle care and nail polish.",
        duration: "30 min",
        price: "₹249",
      },
      {
        name: "Manicure – Lotus",
        desc: "Lotus herbals manicure with moisturising treatment.",
        duration: "40 min",
        price: "₹550",
      },
      {
        name: "Manicure – Raga",
        desc: "Raga brand manicure for deep hydration and shine.",
        duration: "40 min",
        price: "₹650",
      },
      {
        name: "Manicure – Aroma",
        desc: "Aromatherapy manicure for relaxed, beautiful hands.",
        duration: "40 min",
        price: "₹650",
      },
      {
        name: "Manicure – Crystal",
        desc: "Crystal manicure for smooth, polished nails.",
        duration: "40 min",
        price: "₹500",
      },
      {
        name: "Pedicure – Normal",
        desc: "Classic foot soak, scrub, cuticle care and polish.",
        duration: "45 min",
        price: "₹349",
      },
      {
        name: "Pedicure – Lotus",
        desc: "Lotus herbals pedicure for soft, refreshed feet.",
        duration: "60 min",
        price: "₹650",
      },
      {
        name: "Pedicure – Raga",
        desc: "Raga brand pedicure with extended massage and care.",
        duration: "60 min",
        price: "₹850",
      },
      {
        name: "Pedicure – Aroma",
        desc: "Relaxing aromatherapy pedicure for tired feet.",
        duration: "60 min",
        price: "₹750",
      },
      {
        name: "Pedicure – Crystal",
        desc: "Crystal pedicure for smooth, callus-free feet.",
        duration: "60 min",
        price: "₹650",
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
        name: "Normal Makeup",
        desc: "Soft, natural glam for daytime events and outings.",
        duration: "45 min",
        price: "₹999",
      },
      {
        name: "HD Glam Makeup",
        desc: "Camera-ready, high-definition finish with long-wear formulas.",
        duration: "60 min",
        price: "₹2,500",
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
        name: "Cleanup – Basic",
        desc: "Quick refresh for congestion-free, radiant skin.",
        duration: "20 min",
        price: "₹249",
      },
      {
        name: "Facial – Basic",
        desc: "Essential facial for cleansed, refreshed skin.",
        duration: "30 min",
        price: "₹399",
      },
      {
        name: "Normal Gold Facial",
        desc: "Brightening gold-infused facial for glowing skin.",
        duration: "45 min",
        price: "₹500",
      },
      {
        name: "Gold Cleanup",
        desc: "Gold-infused cleanup for radiant, refreshed skin.",
        duration: "30 min",
        price: "₹350",
      },
      {
        name: "Diamond Facial",
        desc: "Diamond microdermabrasion facial for smooth, refined skin.",
        duration: "60 min",
        price: "₹700",
      },
      {
        name: "Diamond Cleanup",
        desc: "Diamond-infused cleanup for crystal-clear skin.",
        duration: "30 min",
        price: "₹580",
      },
      {
        name: "FYC Gold Facial",
        desc: "Premium FYC gold facial for deep nourishment and glow.",
        duration: "60 min",
        price: "₹1,800",
      },
      {
        name: "FYC Gold Cleanup",
        desc: "FYC gold brand cleanup for brightened, healthy skin.",
        duration: "30 min",
        price: "₹1,000",
      },
      {
        name: "FYC Wine Facial",
        desc: "Antioxidant-rich wine facial for deep skin rejuvenation.",
        duration: "60 min",
        price: "₹1,800",
      },
      {
        name: "FYC Wine Cleanup",
        desc: "Wine-infused FYC cleanup for antioxidant skin boost.",
        duration: "30 min",
        price: "₹1,800",
      },
      {
        name: "Raga Facial",
        desc: "Raga brand facial for balanced, hydrated skin.",
        duration: "60 min",
        price: "₹1,600",
      },
      {
        name: "Raga Cleanup",
        desc: "Deep pore cleansing Raga cleanup.",
        duration: "30 min",
        price: "₹999",
      },
      {
        name: "Aroma Facial",
        desc: "Aromatherapy-infused facial for relaxed, glowing skin.",
        duration: "60 min",
        price: "₹999",
      },
      {
        name: "Aroma Cleanup",
        desc: "Aroma cleanup for calming skin refresh.",
        duration: "30 min",
        price: "₹450",
      },
      {
        name: "Normal Wine Facial",
        desc: "Wine polyphenol facial for even tone and radiance.",
        duration: "60 min",
        price: "₹999",
      },
      {
        name: "Normal Wine Cleanup",
        desc: "Wine based cleanup for refreshed skin.",
        duration: "30 min",
        price: "₹600",
      },
      {
        name: "Lotus Facial",
        desc: "Lotus herbals facial for brightening and pore refinement.",
        duration: "60 min",
        price: "₹1,100",
      },
      {
        name: "Lotus Cleanup",
        desc: "Lotus herbals cleanup for pore-refined, glowing skin.",
        duration: "30 min",
        price: "₹700",
      },
      {
        name: "Crystal Facial",
        desc: "Crystal facial for smooth, polished skin clarity.",
        duration: "60 min",
        price: "₹800",
      },
      {
        name: "Crystal Cleanup",
        desc: "Crystal microdermabrasion-style cleanup.",
        duration: "30 min",
        price: "₹500",
      },
      {
        name: "O3+ Facial",
        desc: "Professional O3+ oxygen facial for deep skin rejuvenation.",
        duration: "75 min",
        price: "₹2,500",
      },
      {
        name: "O3+ Cleanup",
        desc: "O3+ brand cleanup for thorough skin purification.",
        duration: "30 min",
        price: "₹1,300",
      },
      {
        name: "Hydra Facial",
        desc: "Deep-cleansing hydrating infusion for instant glass-skin glow.",
        duration: "60 min",
        price: "₹1,500",
      },
      {
        name: "Korean Hydra Facial",
        desc: "A multi-step luminosity ritual inspired by K-beauty skincare.",
        duration: "75 min",
        price: "₹3,500",
      },
      {
        name: "Korean Skull Facial",
        desc: "Advanced Korean facial treatment for deep skin renewal.",
        duration: "75 min",
        price: "₹1,999",
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
        price: "₹999",
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
        price: "₹1,499",
      },
      {
        name: "Bleach – Normal",
        desc: "Standard bleach treatment for face and skin brightening.",
        duration: "20 min",
        price: "₹200",
      },
      {
        name: "Bleach – Red Wine",
        desc: "Red wine bleach for antioxidant skin brightening.",
        duration: "20 min",
        price: "₹300",
      },
      {
        name: "Bleach – Oxy",
        desc: "Oxygen bleach for enhanced skin brightening.",
        duration: "20 min",
        price: "₹500",
      },
      {
        name: "Body Bleach – Normal",
        desc: "Full-body normal bleach treatment for even skin tone.",
        duration: "60 min",
        price: "₹1,000",
      },
      {
        name: "Body Bleach – Red Wine",
        desc: "Full-body red wine bleach for antioxidant glow.",
        duration: "60 min",
        price: "₹1,400",
      },
      {
        name: "Body Oxy Bleach",
        desc: "Full-body oxygen bleaching treatment for brightened, glowing skin.",
        duration: "90 min",
        price: "₹2,000",
      },
      {
        name: "D-Tan – Raga",
        desc: "Raga D-Tan for targeted sun damage removal.",
        duration: "25 min",
        price: "₹400",
      },
      {
        name: "D-Tan – Sara",
        desc: "Sara brand D-Tan treatment for even skin tone.",
        duration: "25 min",
        price: "₹380",
      },
      {
        name: "D-Tan – O3+",
        desc: "O3+ professional D-Tan for thorough sun damage correction.",
        duration: "25 min",
        price: "₹600",
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
        name: "Threading",
        desc: "Precise eyebrow or facial threading for clean shaping.",
        duration: "10 min",
        price: "₹40",
      },
      {
        name: "Forehead Threading",
        desc: "Clean forehead hair removal with threading.",
        duration: "5 min",
        price: "₹30",
      },
      {
        name: "Upper Lips Threading",
        desc: "Precise upper lip hair removal with threading.",
        duration: "5 min",
        price: "₹30",
      },
      {
        name: "Sidelocks Threading",
        desc: "Neat sidelock hair removal with threading.",
        duration: "5 min",
        price: "₹100",
      },
      {
        name: "Chin Threading",
        desc: "Clean chin hair removal with threading.",
        duration: "5 min",
        price: "₹30",
      },
      {
        name: "Full Chin Threading",
        desc: "Complete chin and jaw area threading for clean finish.",
        duration: "10 min",
        price: "₹50",
      },
      {
        name: "Face Wax",
        desc: "Full face wax for smooth, hair-free skin.",
        duration: "20 min",
        price: "₹400",
      },
      {
        name: "Arms Wax – Normal",
        desc: "Standard wax for smooth arm hair removal.",
        duration: "20 min",
        price: "₹250",
      },
      {
        name: "Arms Wax (Rica)",
        desc: "Premium Rica wax for full arm hair removal — gentle on sensitive skin.",
        duration: "20 min",
        price: "₹450",
      },
      {
        name: "Half Leg Wax – Normal",
        desc: "Standard wax for lower leg hair removal.",
        duration: "20 min",
        price: "₹250",
      },
      {
        name: "Half Leg Wax (Rica)",
        desc: "Rica wax for smooth lower legs with minimal redness.",
        duration: "20 min",
        price: "₹450",
      },
      {
        name: "Full Leg Wax – Normal",
        desc: "Complete leg waxing with standard wax.",
        duration: "40 min",
        price: "₹500",
      },
      {
        name: "Full Leg Wax (Rica)",
        desc: "Complete leg waxing with premium Rica formula.",
        duration: "40 min",
        price: "₹700",
      },
      {
        name: "Half Tummy Wax – Normal",
        desc: "Standard wax for upper or lower tummy area.",
        duration: "15 min",
        price: "₹250",
      },
      {
        name: "Half Tummy Wax (Rica)",
        desc: "Gentle Rica wax for upper or lower tummy area.",
        duration: "15 min",
        price: "₹500",
      },
      {
        name: "Full Tummy Wax – Normal",
        desc: "Full tummy hair removal with standard wax.",
        duration: "20 min",
        price: "₹500",
      },
      {
        name: "Full Tummy Wax (Rica)",
        desc: "Full tummy hair removal with soothing Rica wax.",
        duration: "20 min",
        price: "₹700",
      },
      {
        name: "Half Back Wax – Normal",
        desc: "Standard wax for upper or lower back area.",
        duration: "15 min",
        price: "₹250",
      },
      {
        name: "Half Back Wax (Rica)",
        desc: "Rica wax for upper or lower back — gentle and effective.",
        duration: "15 min",
        price: "₹500",
      },
      {
        name: "Full Back Wax – Normal",
        desc: "Complete back hair removal with standard wax.",
        duration: "25 min",
        price: "₹500",
      },
      {
        name: "Full Back Wax (Rica)",
        desc: "Complete back hair removal with premium Rica formula.",
        duration: "25 min",
        price: "₹700",
      },
      {
        name: "Full Body Wax – Normal",
        desc: "Complete full-body wax for lasting smooth skin.",
        duration: "120 min",
        price: "₹1,400",
      },
      {
        name: "Full Body Wax (Rica)",
        desc: "Complete full-body Rica wax for lasting, salon-smooth skin.",
        duration: "120 min",
        price: "₹2,000",
      },
      {
        name: "V Wax – Normal",
        desc: "Precise intimate waxing with standard wax.",
        duration: "20 min",
        price: "₹800",
      },
      {
        name: "V Wax (Rica)",
        desc: "Precise, gentle intimate waxing with Rica formula.",
        duration: "20 min",
        price: "₹1,200",
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
        name: "Normal Bridal Makeup",
        desc: "Beautiful, classic bridal makeup for your special day.",
        duration: "90 min",
        price: "₹15,000",
      },
      {
        name: "HD Bridal Makeup",
        desc: "Full bridal styling — makeup, hair and draping — in high-definition finish.",
        duration: "120 min",
        price: "₹18,000",
      },
      {
        name: "Celebrity Bridal Package",
        desc: "Our most premium package with a dedicated artist team for the full day.",
        duration: "180 min",
        price: "₹25,000",
      },
      {
        name: "Bridal Trial Makeup",
        desc: "A full run-through so your wedding-day look is exactly right.",
        duration: "60 min",
        price: "from ₹5,000",
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
