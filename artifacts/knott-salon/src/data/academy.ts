export type Course = {
  name: string;
  level: string;
  duration: string;
  seats: string;
  fee: string;
  image: string;
  description: string;
};

export const academyStats = [
  { value: "500+", label: "Graduates" },
  { value: "12", label: "Faculty" },
  { value: "92%", label: "Placement" },
];

export const courses: Course[] = [
  {
    name: "Professional Makeup Artistry",
    level: "Beginner – Advanced",
    duration: "4 Months",
    seats: "18 seats",
    fee: "₹49,999",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=85&auto=format&fit=crop",
    description:
      "A complete artistry pathway — bridal, HD, editorial and airbrush makeup — with real salon floor practice.",
  },
  {
    name: "Advanced Hair Styling",
    level: "Intermediate",
    duration: "2 Months",
    seats: "10 seats",
    fee: "₹34,999",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&q=85&auto=format&fit=crop",
    description:
      "Cutting, colour theory and editorial styling techniques taught by working senior stylists.",
  },
  {
    name: "Nail Art Masterclass",
    level: "All Levels",
    duration: "6 Weeks",
    seats: "15 seats",
    fee: "₹19,999",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=85&auto=format&fit=crop",
    description:
      "From gel fundamentals to hand-painted nail art and extensions — a complete nail-tech certification.",
  },
  {
    name: "Skin & Facial Therapy",
    level: "Beginner",
    duration: "2 Months",
    seats: "12 seats",
    fee: "₹24,999",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&auto=format&fit=crop",
    description:
      "Skin analysis, facials and body treatments — the science and the craft, hands-on from week one.",
  },
];
