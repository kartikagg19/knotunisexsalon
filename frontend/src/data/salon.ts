export const SALON = {
  name: 'Knott Unisex Salon',
  tagline: 'Best Salon & Academy',
  location: 'Uttam Nagar, New Delhi',
  address: 'E-67, Arya Samaj Rd, near Muthoot Bank, Block J, Uttam Nagar, New Delhi, Delhi, 110059',
  phone: '08506031314',
  phoneDisplay: '+91 85060 31314',
  whatsapp: '918506031314',
  rating: 4.9,
  reviewCount: 67,
  hours: 'Open · Closes 10 PM',
  established: 2023,
};

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1675034743339-0b0747047727?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBzYWxvbiUyMGludGVyaW9yJTIwaGFpcmRyZXNzaW5nfGVufDB8fHx8MTc4MjgwMDMwMnww&ixlib=rb-4.1.0&q=85';

export type Category = {
  id: string;
  name: string;
  icon: string;
  image: string;
};

export const CATEGORIES: Category[] = [
  {
    id: 'hair',
    name: 'Hair',
    icon: 'cut-outline',
    image:
      'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYWxvbiUyMGludGVyaW9yJTIwaGFpcmRyZXNzaW5nfGVufDB8fHx8MTc4MjgwMDMwMnww&ixlib=rb-4.1.0&q=85',
  },
  {
    id: 'nails',
    name: 'Nails',
    icon: 'sparkles-outline',
    image:
      'https://images.unsplash.com/photo-1633360971020-656d89f9e98e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBuYWlsJTIwYXJ0JTIwbWFrZXVwJTIwc3R5bGluZ3xlbnwwfHx8fDE3ODI4MDAzMDJ8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    id: 'makeup',
    name: 'Makeup',
    icon: 'color-palette-outline',
    image:
      'https://images.unsplash.com/photo-1616754244574-5145c50ec179?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuYWlsJTIwYXJ0JTIwbWFrZXVwJTIwc3R5bGluZ3xlbnwwfHx8fDE3ODI4MDAzMDJ8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    id: 'skin',
    name: 'Skin',
    icon: 'flower-outline',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'waxing',
    name: 'Waxing',
    icon: 'leaf-outline',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'tan',
    name: 'Spray Tan',
    icon: 'sunny-outline',
    image:
      'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=900&q=85&auto=format&fit=crop',
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
  image: string;
};

export const SERVICES: Service[] = [
  {
    id: 's1',
    categoryId: 'hair',
    name: 'Signature Hair Cut & Style',
    description: 'A precision cut tailored to your face shape, finished with a blow-dry and bespoke styling consultation.',
    duration: 60,
    tiers: [
      { label: 'Junior Stylist', price: 599 },
      { label: 'Senior Stylist', price: 999 },
      { label: 'Creative Director', price: 1499 },
    ],
    featured: true,
    image:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 's2',
    categoryId: 'hair',
    name: 'Global Hair Colour',
    description: 'Full head colour transformation using premium ammonia-free formulas. Includes consultation and finish.',
    duration: 120,
    tiers: [
      { label: 'Single Tone', price: 2499 },
      { label: 'Premium Brand', price: 3999 },
    ],
    image:
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 's3',
    categoryId: 'hair',
    name: 'Keratin Smoothing',
    description: 'Frizz-control treatment for silky, manageable hair. Lasts up to 4 months.',
    duration: 180,
    tiers: [
      { label: 'Short Hair', price: 3999 },
      { label: 'Medium Hair', price: 5999 },
      { label: 'Long Hair', price: 7999 },
    ],
    image:
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 's4',
    categoryId: 'nails',
    name: 'Luxury Gel Manicure',
    description: 'Shape, cuticle care and a high-gloss long-wear gel finish in your choice of 100+ shades.',
    duration: 60,
    tiers: [
      { label: 'Classic', price: 799 },
      { label: 'With Art', price: 1299 },
    ],
    featured: true,
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 's5',
    categoryId: 'nails',
    name: 'Acrylic Nail Extensions',
    description: 'Sculpted nail extensions with shape, length and finish customised to your style.',
    duration: 90,
    tiers: [
      { label: 'Natural', price: 1499 },
      { label: 'With Art', price: 1999 },
    ],
    image:
      'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 's6',
    categoryId: 'makeup',
    name: 'Bridal Signature Makeup',
    description: 'A flawless, all-day bridal look using HD products, lashes, and hair styling included.',
    duration: 150,
    tiers: [
      { label: 'Engagement', price: 7999 },
      { label: 'Reception', price: 9999 },
      { label: 'Bridal Day', price: 14999 },
    ],
    featured: true,
    image:
      'https://images.unsplash.com/photo-1560869713-da86a9ec0bca?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 's7',
    categoryId: 'makeup',
    name: 'Party HD Makeup',
    description: 'Camera-ready HD makeup designed for evenings, parties and special occasions.',
    duration: 75,
    tiers: [
      { label: 'Soft Glam', price: 2499 },
      { label: 'Bold Glam', price: 3499 },
    ],
    image:
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 's8',
    categoryId: 'skin',
    name: 'Hydra Glow Facial',
    description: 'Deep hydration, exfoliation and a radiant glow finish suited to all skin types.',
    duration: 75,
    tiers: [
      { label: 'Classic', price: 1499 },
      { label: 'Advanced', price: 2499 },
    ],
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 's9',
    categoryId: 'waxing',
    name: 'Full Body Wax',
    description: 'Premium rica or honey wax for smooth, gentle full-body hair removal.',
    duration: 90,
    tiers: [
      { label: 'Honey Wax', price: 1299 },
      { label: 'Rica Wax', price: 1999 },
    ],
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 's10',
    categoryId: 'tan',
    name: 'Express Spray Tan',
    description: 'Custom-blended spray tan for a sun-kissed glow that develops in just 4–6 hours.',
    duration: 45,
    tiers: [
      { label: 'Full Body', price: 2499 },
    ],
    image:
      'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1200&q=85&auto=format&fit=crop',
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

export const GALLERY = [
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560869713-da86a9ec0bca?w=900&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=900&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=900&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=900&q=85&auto=format&fit=crop',
];

export const OFFERS = [
  {
    id: 'o1',
    title: 'Bridal Package',
    subtitle: 'Bridal makeup + hair + nails',
    discount: 'Save 25%',
    image: 'https://images.unsplash.com/photo-1560869713-da86a9ec0bca?w=1200&q=85&auto=format&fit=crop',
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
