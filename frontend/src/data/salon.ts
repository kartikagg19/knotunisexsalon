export const SALON = {
  name: 'Knott Unisex Salon',
  tagline: 'Best Salon & Academy',
  location: 'Uttam Nagar, New Delhi',
  address: 'E-67, Arya Samaj Rd, near Muthoot Bank, Block J, Uttam Nagar, New Delhi, Delhi, 110059',
  phone: '09716002672',
  phoneDisplay: '+91 97160 02672',
  whatsapp: '919716002672',
  bookingWhatsapp: '919716002672', // owner number that receives booking requests
  rating: 4.9,
  reviewCount: 67,
  hours: '10:30 AM – 9:00 PM',
  instagram: 'https://www.instagram.com/himanshmakeovers',
  established: 2021,
};

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=90&auto=format&fit=crop';

// Local salon photos (bundled from assets/gallery)
export const LOCAL = {
  bridal1: require('../../assets/gallery/bridal-1.jpg'),
  bridal2: require('../../assets/gallery/bridal-2.jpg'),
  nanoPlastia: require('../../assets/gallery/nano-plastia.jpg'),
  smoothening: require('../../assets/gallery/smoothening.jpg'),
  makeup: require('../../assets/gallery/makeup.jpg'),
  eyeMakeup: require('../../assets/gallery/eye-makeup.jpg'),
  mensHaircut: require('../../assets/gallery/mens-haircut.jpg'),
  blowDry: require('../../assets/gallery/blow-dry.jpg'),
  threading: require('../../assets/gallery/threading.jpg'),
  eyebrow: require('../../assets/gallery/eyebrow.jpg'),
  hairStyling: require('../../assets/gallery/hair-styling.jpg'),
};

export type ImageRef = string | number;

export type Category = {
  id: string;
  name: string;
  icon: string;
  image: ImageRef;
};

export const CATEGORIES: Category[] = [
  {
    id: 'hair',
    name: 'Hair',
    icon: 'cut-outline',
    image: LOCAL.mensHaircut,
  },
  {
    id: 'facial',
    name: 'Facial & Cleanup',
    icon: 'flower-outline',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'threading',
    name: 'Threading',
    icon: 'brush-outline',
    image: LOCAL.threading,
  },
  {
    id: 'waxing',
    name: 'Waxing',
    icon: 'leaf-outline',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'dtan',
    name: 'D-Tan & Bleach',
    icon: 'sunny-outline',
    image:
      'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'manipedi',
    name: 'Mani & Pedi',
    icon: 'footsteps-outline',
    image:
      'https://images.unsplash.com/photo-1633360971020-656d89f9e98e?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'nails',
    name: 'Nail Art',
    icon: 'sparkles-outline',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'makeup',
    name: 'Makeup',
    icon: 'color-palette-outline',
    image: LOCAL.makeup,
  },
  {
    id: 'bridal',
    name: 'Bridal',
    icon: 'heart-outline',
    image: LOCAL.bridal1,
  },
  {
    id: 'body',
    name: 'Body & Spa',
    icon: 'body-outline',
    image:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=85&auto=format&fit=crop',
  },
];

export type Service = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  duration: number; // minutes
  tiers: { label: string; price: number }[];
  featured?: boolean;
  image: ImageRef;
};

const IMG = {
  haircut: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=85&auto=format&fit=crop',
  hair: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1200&q=85&auto=format&fit=crop',
  haircolour: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=85&auto=format&fit=crop',
  hairspa: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=85&auto=format&fit=crop',
  facial: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85&auto=format&fit=crop',
  face: 'https://images.unsplash.com/photo-1616754244574-5145c50ec179?w=1200&q=85&auto=format&fit=crop',
  wax: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85&auto=format&fit=crop',
  tan: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1200&q=85&auto=format&fit=crop',
  nails: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85&auto=format&fit=crop',
  nailsAlt: 'https://images.unsplash.com/photo-1633360971020-656d89f9e98e?w=1200&q=85&auto=format&fit=crop',
  nailext: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=1200&q=85&auto=format&fit=crop',
  makeup: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=85&auto=format&fit=crop',
  bridal: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=1200&q=85&auto=format&fit=crop',
  spa: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=85&auto=format&fit=crop',
};

export const SERVICES: Service[] = [
  // ---------- HAIR ----------
  {
    id: 's1',
    categoryId: 'hair',
    name: "Men's Haircut",
    description: 'Sharp, professional gents haircut tailored to your style.',
    duration: 30,
    tiers: [{ label: "Men's", price: 149 }],
    featured: true,
    image: LOCAL.mensHaircut,
  },
  {
    id: 's54',
    categoryId: 'hair',
    name: 'Beard / Shave',
    description: 'Clean shave or beard shaping and grooming for men.',
    duration: 20,
    tiers: [{ label: "Men's", price: 99 }],
    image: LOCAL.mensHaircut,
  },
  {
    id: 's55',
    categoryId: 'hair',
    name: "Women's Haircut",
    description: 'Basic or advanced ladies haircut tailored to your face shape.',
    duration: 45,
    tiers: [
      { label: 'Basic', price: 199 },
      { label: 'Advance', price: 349 },
    ],
    image: IMG.haircut,
  },
  {
    id: 's2',
    categoryId: 'hair',
    name: 'Hair Wash',
    description: 'Refreshing shampoo and conditioning hair wash.',
    duration: 20,
    tiers: [{ label: "Men's", price: 99 }],
    image: IMG.hair,
  },
  {
    id: 's3',
    categoryId: 'hair',
    name: 'Head Massage',
    description: 'Relaxing oil head massage to relieve stress and nourish the scalp.',
    duration: 30,
    tiers: [
      { label: "Men's", price: 199 },
      { label: "Women's", price: 349 },
    ],
    image: IMG.hair,
  },
  {
    id: 's4',
    categoryId: 'hair',
    name: 'Blow Dry',
    description: 'Smooth, voluminous blow-dry styling for any occasion.',
    duration: 30,
    tiers: [{ label: 'Standard', price: 149 }],
    image: LOCAL.blowDry,
  },
  {
    id: 's5',
    categoryId: 'hair',
    name: 'Hair Spa',
    description: 'Deep-conditioning spa treatment for soft, healthy, shiny hair.',
    duration: 60,
    tiers: [
      { label: 'Normal', price: 499 },
      { label: "L'Oreal", price: 799 },
      { label: 'Kera Spa', price: 2499 },
    ],
    featured: true,
    image: IMG.hairspa,
  },
  {
    id: 's6',
    categoryId: 'hair',
    name: 'Hair Root Touch-up',
    description: 'Root colour touch-up to cover greys and blend regrowth.',
    duration: 75,
    tiers: [
      { label: 'Streax', price: 599 },
      { label: "L'Oreal", price: 799 },
      { label: 'Inoa', price: 1299 },
    ],
    image: IMG.haircolour,
  },
  {
    id: 's7',
    categoryId: 'hair',
    name: 'Hair Ironing / Pressing',
    description: 'Sleek, straight, frizz-free finish with professional ironing.',
    duration: 45,
    tiers: [{ label: 'Standard', price: 399 }],
    image: IMG.hairspa,
  },
  {
    id: 's8',
    categoryId: 'hair',
    name: 'Hair Styling',
    description: 'Curls, waves or set styling tailored to your look.',
    duration: 45,
    tiers: [{ label: 'Standard', price: 499 }],
    image: LOCAL.hairStyling,
  },

  // ---------- HAIR TREATMENT ----------
  {
    id: 's49',
    categoryId: 'hair',
    name: 'Keratin Treatment',
    description: 'Frizz-control keratin treatment for smooth, manageable, shiny hair.',
    duration: 180,
    tiers: [
      { label: 'Brazilian', price: 1999 },
      { label: 'Keratin', price: 2999 },
      { label: 'Chocolate Keratin', price: 3499 },
      { label: 'G.K. Keratin', price: 4599 },
    ],
    image: IMG.hairspa,
  },
  {
    id: 's56',
    categoryId: 'hair',
    name: 'Anti-Dandruff Treatment',
    description: 'Targeted treatment to clear dandruff and soothe the scalp.',
    duration: 60,
    tiers: [{ label: 'Standard', price: 1999 }],
    image: IMG.hairspa,
  },
  {
    id: 's57',
    categoryId: 'hair',
    name: 'Hair Loss Treatment',
    description: 'Strengthening treatment to reduce hair fall and boost growth.',
    duration: 60,
    tiers: [{ label: 'Standard', price: 1999 }],
    image: IMG.hairspa,
  },
  {
    id: 's58',
    categoryId: 'hair',
    name: 'Hair Silk Treatment',
    description: 'Silk therapy for soft, glossy, deeply nourished hair.',
    duration: 60,
    tiers: [{ label: 'Standard', price: 1999 }],
    image: IMG.hairspa,
  },
  {
    id: 's50',
    categoryId: 'hair',
    name: 'Hair Smoothening',
    description: 'Long-lasting smoothening for sleek, straight, frizz-free hair.',
    duration: 180,
    tiers: [{ label: 'Standard', price: 2999 }],
    image: LOCAL.smoothening,
  },
  {
    id: 's51',
    categoryId: 'hair',
    name: 'Global Hair Colour',
    description: 'Full-head colour transformation using premium formulas.',
    duration: 120,
    tiers: [
      { label: 'Basic', price: 2000 },
      { label: 'Premium', price: 4000 },
    ],
    image: IMG.haircolour,
  },
  {
    id: 's52',
    categoryId: 'hair',
    name: 'Highlights',
    description: 'Custom highlights to add dimension, depth and shine.',
    duration: 120,
    tiers: [
      { label: 'Basic', price: 3500 },
      { label: 'Premium', price: 6000 },
    ],
    image: IMG.haircolour,
  },
  {
    id: 's53',
    categoryId: 'hair',
    name: 'Nano Plastia',
    description: 'Advanced nano plastia treatment for deep repair and lasting smoothness.',
    duration: 180,
    tiers: [{ label: 'Standard', price: 3999 }],
    image: LOCAL.nanoPlastia,
  },

  // ---------- FACIAL & CLEANUP ----------
  {
    id: 's9',
    categoryId: 'facial',
    name: 'Cleanup',
    description: 'Deep-cleansing facial cleanup to unclog pores and refresh skin.',
    duration: 45,
    tiers: [
      { label: 'Basic', price: 249 },
      { label: 'Raga', price: 999 },
    ],
    image: IMG.facial,
  },
  {
    id: 's10',
    categoryId: 'facial',
    name: 'Gold Facial',
    description: 'Radiance-boosting gold facial for an instant glow.',
    duration: 60,
    tiers: [
      { label: 'Normal', price: 499 },
      { label: 'FYC Gold', price: 999 },
    ],
    image: IMG.facial,
  },
  {
    id: 's11',
    categoryId: 'facial',
    name: 'Diamond Facial',
    description: 'Brightening diamond facial for smooth, luminous skin.',
    duration: 60,
    tiers: [{ label: 'Standard', price: 700 }],
    image: IMG.facial,
  },
  {
    id: 's12',
    categoryId: 'facial',
    name: 'Wine Facial',
    description: 'Anti-oxidant wine facial that revitalises and de-tans skin.',
    duration: 60,
    tiers: [
      { label: 'Normal', price: 999 },
      { label: 'FYC Wine', price: 1199 },
    ],
    image: IMG.facial,
  },
  {
    id: 's13',
    categoryId: 'facial',
    name: 'Raga Facial',
    description: 'Nourishing Raga facial for glowing, hydrated skin.',
    duration: 60,
    tiers: [{ label: 'Standard', price: 1600 }],
    image: IMG.facial,
  },
  {
    id: 's14',
    categoryId: 'facial',
    name: 'Aroma Facial',
    description: 'Soothing aroma facial with essential oils for relaxation.',
    duration: 60,
    tiers: [{ label: 'Standard', price: 599 }],
    image: IMG.facial,
  },
  {
    id: 's15',
    categoryId: 'facial',
    name: 'Lotus Facial',
    description: 'Herbal Lotus facial for clear, refreshed and even-toned skin.',
    duration: 60,
    tiers: [{ label: 'Standard', price: 699 }],
    image: IMG.facial,
  },
  {
    id: 's16',
    categoryId: 'facial',
    name: 'Crystal Facial',
    description: 'Crystal facial that cleanses, tones and adds a healthy shine.',
    duration: 60,
    tiers: [{ label: 'Standard', price: 499 }],
    image: IMG.facial,
  },
  {
    id: 's17',
    categoryId: 'facial',
    name: 'O3+ Facial',
    description: 'Professional O3+ facial for deep repair and glow.',
    duration: 75,
    tiers: [{ label: 'Standard', price: 1599 }],
    image: IMG.facial,
  },
  {
    id: 's18',
    categoryId: 'facial',
    name: 'Hydra Facial',
    description: 'Deep hydration and exfoliation for a fresh, dewy finish.',
    duration: 75,
    tiers: [{ label: 'Standard', price: 1500 }],
    featured: true,
    image: IMG.facial,
  },
  {
    id: 's19',
    categoryId: 'facial',
    name: 'Korean Hydra Facial',
    description: 'Glass-skin Korean hydra facial for a smooth, glowing complexion.',
    duration: 75,
    tiers: [{ label: 'Standard', price: 3999 }],
    image: IMG.face,
  },
  {
    id: 's20',
    categoryId: 'facial',
    name: 'KanPeel Facial',
    description: 'Advanced KanPeel treatment for pigmentation and clarity.',
    duration: 75,
    tiers: [{ label: 'Standard', price: 3500 }],
    image: IMG.face,
  },

  // ---------- THREADING ----------
  {
    id: 's21',
    categoryId: 'threading',
    name: 'Eyebrow Threading',
    description: 'Precise eyebrow shaping with clean, gentle threading.',
    duration: 15,
    tiers: [{ label: 'Standard', price: 40 }],
    image: LOCAL.eyebrow,
  },
  {
    id: 's22',
    categoryId: 'threading',
    name: 'Forehead Threading',
    description: 'Smooth forehead threading for a clean finish.',
    duration: 10,
    tiers: [{ label: 'Standard', price: 30 }],
    image: LOCAL.threading,
  },
  {
    id: 's23',
    categoryId: 'threading',
    name: 'Upper Lip Threading',
    description: 'Quick, gentle upper-lip threading.',
    duration: 10,
    tiers: [{ label: 'Standard', price: 20 }],
    image: LOCAL.threading,
  },
  {
    id: 's24',
    categoryId: 'threading',
    name: 'Chin Threading',
    description: 'Neat chin threading for smooth skin.',
    duration: 10,
    tiers: [{ label: 'Standard', price: 20 }],
    image: LOCAL.eyebrow,
  },
  {
    id: 's25',
    categoryId: 'threading',
    name: 'Full Chin Threading',
    description: 'Complete chin and jawline threading.',
    duration: 15,
    tiers: [{ label: 'Standard', price: 50 }],
    image: LOCAL.threading,
  },

  // ---------- WAXING ----------
  {
    id: 's26',
    categoryId: 'waxing',
    name: 'Full Arms Wax',
    description: 'Smooth, gentle hair removal for the full arms.',
    duration: 30,
    tiers: [
      { label: 'Normal', price: 250 },
      { label: 'Rica', price: 450 },
    ],
    image: IMG.wax,
  },
  {
    id: 's27',
    categoryId: 'waxing',
    name: 'Half Leg Wax',
    description: 'Half-leg waxing for silky-smooth skin.',
    duration: 30,
    tiers: [
      { label: 'Normal', price: 250 },
      { label: 'Rica', price: 450 },
    ],
    image: IMG.wax,
  },
  {
    id: 's28',
    categoryId: 'waxing',
    name: 'Full Leg Wax',
    description: 'Full-leg waxing for long-lasting smoothness.',
    duration: 45,
    tiers: [
      { label: 'Normal', price: 500 },
      { label: 'Rica', price: 700 },
    ],
    image: IMG.wax,
  },
  {
    id: 's29',
    categoryId: 'waxing',
    name: 'Half Tummy Wax',
    description: 'Gentle half-tummy hair removal.',
    duration: 20,
    tiers: [
      { label: 'Normal', price: 250 },
      { label: 'Rica', price: 500 },
    ],
    image: IMG.wax,
  },
  {
    id: 's30',
    categoryId: 'waxing',
    name: 'Full Tummy Wax',
    description: 'Complete tummy waxing for smooth skin.',
    duration: 30,
    tiers: [
      { label: 'Normal', price: 500 },
      { label: 'Rica', price: 700 },
    ],
    image: IMG.wax,
  },
  {
    id: 's31',
    categoryId: 'waxing',
    name: 'Half Back Wax',
    description: 'Half-back waxing done with care.',
    duration: 20,
    tiers: [
      { label: 'Normal', price: 250 },
      { label: 'Rica', price: 500 },
    ],
    image: IMG.wax,
  },
  {
    id: 's32',
    categoryId: 'waxing',
    name: 'Full Back Wax',
    description: 'Full-back waxing for a clean, smooth finish.',
    duration: 30,
    tiers: [
      { label: 'Normal', price: 500 },
      { label: 'Rica', price: 700 },
    ],
    image: IMG.wax,
  },
  {
    id: 's33',
    categoryId: 'waxing',
    name: 'Full Body Wax',
    description: 'Complete full-body waxing for all-over smoothness.',
    duration: 90,
    tiers: [
      { label: 'Normal', price: 1400 },
      { label: 'Rica', price: 2000 },
    ],
    featured: true,
    image: IMG.wax,
  },
  {
    id: 's59',
    categoryId: 'waxing',
    name: 'V Wax (Rica)',
    description: 'Intimate bikini-line waxing with gentle Rica wax.',
    duration: 30,
    tiers: [{ label: 'Rica', price: 1200 }],
    image: IMG.wax,
  },
  {
    id: 's34',
    categoryId: 'waxing',
    name: 'Face Wax',
    description: 'Gentle full-face waxing for smooth, hair-free skin.',
    duration: 20,
    tiers: [{ label: 'Standard', price: 400 }],
    image: IMG.face,
  },

  // ---------- D-TAN & BLEACH ----------
  {
    id: 's35',
    categoryId: 'dtan',
    name: 'D-Tan',
    description: 'De-tan treatment to remove tan and reveal brighter skin.',
    duration: 30,
    tiers: [
      { label: 'Sara', price: 350 },
      { label: 'Raga', price: 400 },
      { label: 'O3+', price: 600 },
    ],
    image: IMG.tan,
  },
  {
    id: 's36',
    categoryId: 'dtan',
    name: 'Face Bleach',
    description: 'Facial bleach to brighten and even out skin tone.',
    duration: 30,
    tiers: [
      { label: 'Normal', price: 200 },
      { label: 'Red Wine', price: 300 },
      { label: 'Oxy Bleach', price: 500 },
    ],
    image: IMG.facial,
  },
  {
    id: 's37',
    categoryId: 'dtan',
    name: 'Body Bleach',
    description: 'Full-body bleach for an even, glowing complexion.',
    duration: 60,
    tiers: [
      { label: 'Normal', price: 1000 },
      { label: 'Red Wine', price: 1400 },
      { label: 'Oxy Bleach', price: 2050 },
    ],
    image: IMG.spa,
  },

  // ---------- MANI & PEDI ----------
  {
    id: 's38',
    categoryId: 'manipedi',
    name: 'Manicure',
    description: 'Nail shaping, cuticle care and a relaxing hand treatment.',
    duration: 45,
    tiers: [
      { label: 'Normal', price: 350 },
      { label: 'Crystal', price: 500 },
      { label: 'Lotus', price: 550 },
      { label: 'Raga', price: 650 },
      { label: 'Aroma', price: 650 },
    ],
    image: IMG.nailsAlt,
  },
  {
    id: 's39',
    categoryId: 'manipedi',
    name: 'Pedicure',
    description: 'Foot soak, scrub and nail care for soft, refreshed feet.',
    duration: 45,
    tiers: [
      { label: 'Normal', price: 450 },
      { label: 'Crystal', price: 650 },
      { label: 'Lotus', price: 650 },
      { label: 'Aroma', price: 750 },
      { label: 'Raga', price: 850 },
    ],
    image: IMG.nailsAlt,
  },

  // ---------- NAIL ART ----------
  {
    id: 's40',
    categoryId: 'nails',
    name: 'Nail Extension',
    description: 'Sculpted nail extensions shaped and finished to your style.',
    duration: 90,
    tiers: [
      { label: 'Temporary (Hand)', price: 300 },
      { label: 'Permanent (Hand)', price: 500 },
      { label: 'Feet', price: 700 },
    ],
    featured: true,
    image: IMG.nailext,
  },
  {
    id: 's41',
    categoryId: 'nails',
    name: 'Gel Polish',
    description: 'High-gloss, long-wear gel polish in your choice of shade.',
    duration: 45,
    tiers: [
      { label: 'Hand', price: 250 },
      { label: 'Feet', price: 400 },
    ],
    image: IMG.nails,
  },
  {
    id: 's42',
    categoryId: 'nails',
    name: 'French Nails',
    description: 'Timeless French tips for an elegant, clean look.',
    duration: 60,
    tiers: [{ label: 'Standard', price: 800 }],
    image: IMG.nails,
  },
  {
    id: 's43',
    categoryId: 'nails',
    name: 'Ombre Nails',
    description: 'Blended ombre nail art with a smooth gradient finish.',
    duration: 60,
    tiers: [
      { label: 'Ombre', price: 900 },
      { label: 'Glitter Ombre', price: 700 },
    ],
    image: IMG.nails,
  },
  {
    id: 's44',
    categoryId: 'nails',
    name: 'Cat Eye Nail Paint',
    description: 'Magnetic cat-eye nail paint with a shimmering 3D effect.',
    duration: 60,
    tiers: [{ label: 'Standard', price: 1000 }],
    image: IMG.nails,
  },

  // ---------- MAKEUP ----------
  {
    id: 's45',
    categoryId: 'makeup',
    name: 'Makeup',
    description: 'Camera-ready makeup for parties and special occasions.',
    duration: 75,
    tiers: [
      { label: 'Normal', price: 1800 },
      { label: 'HD', price: 2500 },
      { label: 'Celebrity', price: 4500 },
    ],
    featured: true,
    image: LOCAL.makeup,
  },

  // ---------- BRIDAL ----------
  {
    id: 's46',
    categoryId: 'bridal',
    name: 'Bridal Makeup',
    description: 'A flawless, all-day bridal look with premium products and finish.',
    duration: 150,
    tiers: [
      { label: 'Normal', price: 15000 },
      { label: 'HD', price: 18000 },
      { label: 'Celebrity', price: 25000 },
    ],
    featured: true,
    image: LOCAL.bridal1,
  },

  // ---------- BODY & SPA ----------
  {
    id: 's47',
    categoryId: 'body',
    name: 'Body Massage',
    description: 'Full-body relaxation massage to relieve stress and tension.',
    duration: 60,
    tiers: [
      { label: 'Oil', price: 1200 },
      { label: 'Cream', price: 1500 },
    ],
    image: IMG.spa,
  },
  {
    id: 's48',
    categoryId: 'body',
    name: 'Body Polishing',
    description: 'Exfoliating body polish for smooth, glowing, even-toned skin.',
    duration: 75,
    tiers: [{ label: 'Standard', price: 2000 }],
    image: IMG.spa,
  },
];

export type Stylist = {
  id: string;
  name: string;
  title: string;
  experience: number;
  rating: number;
  specialties: string[];
  image: string;
};

export const STYLISTS: Stylist[] = [
  {
    id: 'st1',
    name: 'Aarav Mehra',
    title: 'Creative Director',
    experience: 12,
    rating: 4.9,
    specialties: ['Colour', 'Editorial Cuts'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=85&auto=format&fit=crop',
  },
  {
    id: 'st2',
    name: 'Priya Sharma',
    title: 'Master Makeup Artist',
    experience: 9,
    rating: 5.0,
    specialties: ['Bridal', 'HD Makeup'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=85&auto=format&fit=crop',
  },
  {
    id: 'st3',
    name: 'Riya Kapoor',
    title: 'Lead Nail Artist',
    experience: 7,
    rating: 4.8,
    specialties: ['Gel Art', 'Extensions'],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=85&auto=format&fit=crop',
  },
  {
    id: 'st4',
    name: 'Kabir Sethi',
    title: 'Senior Hair Stylist',
    experience: 8,
    rating: 4.9,
    specialties: ['Mens Cuts', 'Keratin'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=85&auto=format&fit=crop',
  },
  {
    id: 'st5',
    name: 'Anjali Verma',
    title: 'Skin Therapist',
    experience: 6,
    rating: 4.9,
    specialties: ['Facials', 'Anti-aging'],
    image: 'https://images.unsplash.com/photo-1614108234775-7c30ac0a8d9c?w=600&q=85&auto=format&fit=crop',
  },
  {
    id: 'st6',
    name: 'Devika Rao',
    title: 'Colour Specialist',
    experience: 10,
    rating: 4.9,
    specialties: ['Balayage', 'Highlights'],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=85&auto=format&fit=crop',
  },
];

export const GALLERY: ImageRef[] = [
  LOCAL.bridal1,
  LOCAL.bridal2,
  LOCAL.makeup,
  LOCAL.eyeMakeup,
  LOCAL.mensHaircut,
  LOCAL.blowDry,
  LOCAL.hairStyling,
  LOCAL.threading,
  LOCAL.eyebrow,
  LOCAL.nanoPlastia,
  LOCAL.smoothening,
];

export const OFFERS = [
  {
    id: 'o1',
    title: 'Bridal Package',
    subtitle: 'Bridal makeup + hair + nails',
    discount: 'Save 25%',
    image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 'o2',
    title: 'Glow Weekend',
    subtitle: 'Facial + manicure + pedicure',
    discount: '₹2,499 only',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 'o3',
    title: 'Hair Refresh',
    subtitle: 'Cut + colour + treatment',
    discount: 'Save 30%',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=85&auto=format&fit=crop',
  },
];

export const COURSES = [
  {
    id: 'c1',
    title: 'Professional Makeup Artistry',
    duration: '3 Months',
    level: 'Beginner – Advanced',
    seats: 12,
    price: 49999,
    image: 'https://images.unsplash.com/photo-1613966802194-d46a163af70d?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 'c2',
    title: 'Advanced Hair Styling',
    duration: '2 Months',
    level: 'Intermediate',
    seats: 10,
    price: 34999,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 'c3',
    title: 'Nail Art Masterclass',
    duration: '6 Weeks',
    level: 'All Levels',
    seats: 15,
    price: 19999,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 'c4',
    title: 'Skin & Facial Therapy',
    duration: '2 Months',
    level: 'Beginner',
    seats: 12,
    price: 24999,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85&auto=format&fit=crop',
  },
];

export const REVIEWS = [
  {
    id: 'r1',
    name: 'Monika Bansal',
    rating: 5,
    date: '2 weeks ago',
    text: 'Very good service and price reason at very best staff. The ambience is so calming and they truly listen.',
    initials: 'MB',
  },
  {
    id: 'r2',
    name: 'Sonia Sehgal',
    rating: 5,
    date: '1 month ago',
    text: 'Superb work.. good behaviour, nice atmosphere. Loved every visit so far!',
    initials: 'SS',
  },
  {
    id: 'r3',
    name: 'Jyoti Mahajan',
    rating: 5,
    date: '2 months ago',
    text: 'I highly recommend their pedicure and manicure service. Beautifully done, very hygienic.',
    initials: 'JM',
  },
  {
    id: 'r4',
    name: 'Kiran Saniya',
    rating: 5,
    date: '5 months ago',
    text: 'Very good services and I am very satisfied. Good nature salon staff for clients.',
    initials: 'KS',
  },
  {
    id: 'r5',
    name: 'Shivani Mishra',
    rating: 5,
    date: '7 months ago',
    text: 'The bestest salon here, I will come every month, their service is the best.',
    initials: 'SM',
  },
];

export const TIME_SLOTS = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM',
];
