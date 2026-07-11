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
        name: "Signature Haircut & Style",
        desc: "A precision cut tailored to your face shape, finished with a blow-dry and bespoke styling consultation.",
        duration: "45 min",
        price: "from ₹349",
      },
      {
        name: "Global Hair Colour",
        desc: "Full head colour transformation using premium ammonia-free formulas. Includes consultation and finish.",
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
        name: "G.K Keratin Smoothing",
        desc: "Frizz-control treatment with G.K keratin for silky, manageable hair. Lasts up to 4 months.",
        duration: "180 min",
        price: "from ₹3,999",
      },
      {
        name: "Hair Spa & Nourishing Therapy",
        desc: "Deep-conditioning ritual that restores shine and softness from root to tip.",
        duration: "60 min",
        price: "from ₹499",
      },
      {
        name: "Root Touch-Up",
        desc: "Seamless colour match at the roots — quick, precise, camera-ready.",
        duration: "45 min",
        price: "from ₹599",
      },
      {
        name: "Head Massage & Scalp Ritual",
        desc: "A calming pressure-point massage that relieves tension and stimulates growth.",
        duration: "30 min",
        price: "from ₹199",
      },
      {
        name: "Advanced Blow-Dry & Styling",
        desc: "Editorial-level styling with heat protection and long-hold finish.",
        duration: "45 min",
        price: "from ₹349",
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
        name: "Luxury Gel Manicure",
        desc: "Shape, cuticle care and a high-gloss, long-wear gel finish in your choice of 100+ shades.",
        duration: "60 min",
        price: "from ₹799",
      },
      {
        name: "Acrylic Nail Extensions",
        desc: "Sculpted length and structure with a natural-look overlay, ready to be painted.",
        duration: "90 min",
        price: "from ₹1,200",
      },
      {
        name: "Nail Art & Detailing",
        desc: "Hand-drawn art, chrome, cat-eye or ombre finishes — priced per accent nail.",
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
        desc: "An extended callus-care and massage pedicure with warm oil finish.",
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
    label: "Skin",
    tagline: "Facials, cleanups & body rituals",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&auto=format&fit=crop",
    items: [
      {
        name: "Signature Gold Facial",
        desc: "Brightening 24k-gold ritual that revives dull, tired skin.",
        duration: "45 min",
        price: "from ₹499",
      },
      {
        name: "Hydra Facial",
        desc: "Deep-cleansing, hydrating infusion for an instant glass-skin glow.",
        duration: "60 min",
        price: "from ₹1,500",
      },
      {
        name: "Korean Glass-Skin Facial",
        desc: "A multi-step luminosity ritual inspired by K-beauty skincare.",
        duration: "75 min",
        price: "from ₹3,500",
      },
      {
        name: "De-Tan & Brightening Ritual",
        desc: "Removes sun damage and evens out tone in a single session.",
        duration: "30 min",
        price: "from ₹400",
      },
      {
        name: "Body Polishing & Bleach",
        desc: "Full-body exfoliation and brightening for silky, even-toned skin.",
        duration: "90 min",
        price: "from ₹2,000",
      },
      {
        name: "Express Cleanup",
        desc: "A quick refresh for congestion-free, radiant skin.",
        duration: "30 min",
        price: "from ₹350",
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
        name: "Full Arms & Underarms Wax",
        desc: "Smooth, precise waxing with a soothing post-care finish.",
        duration: "30 min",
        price: "from ₹250",
      },
      {
        name: "Full Legs Wax",
        desc: "Complete leg waxing for lasting, salon-smooth skin.",
        duration: "45 min",
        price: "from ₹500",
      },
      {
        name: "Full Body Wax (Rica)",
        desc: "Premium Rica wax for sensitive skin — gentler, less redness.",
        duration: "120 min",
        price: "from ₹2,000",
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
