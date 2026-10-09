export type Merchant = {
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  affiliateUrl: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: string;
  rating: number;
  badge: string;
  icon: string;
  image: string;
  description: string;
  features: string[];
  merchants: Merchant[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "Portable Mini Chopper",
    slug: "portable-mini-chopper",
    category: "Kitchen",
    price: "₹399",
    rating: 4.4,
    badge: "Popular",
    icon: "🥣",
    image: "/products/portable-mini-chopper.jpg",
    description:
      "A compact kitchen chopper for quickly preparing vegetables, fruits and other everyday ingredients.",

    features: [
      "Compact and easy to use",
      "Perfect for everyday kitchen tasks",
      "Easy to clean",
      "Space-saving design",
    ],

    merchants: [
      {
        name: "Amazon",
        price: "₹399",
        affiliateUrl: "",
      },
      {
        name: "Flipkart",
        price: "₹419",
        affiliateUrl: "",
      },
    ],
  },

  {
    id: "2",
    name: "Adjustable Laptop Stand",
    slug: "adjustable-laptop-stand",
    category: "Work & Desk",
    price: "₹699",
    rating: 4.5,
    badge: "Trending",
    icon: "💻",
    image: "/products/adjustable-laptop-stand.jpg",
    description:
      "A practical laptop stand designed to improve desk setup and make working more comfortable.",

    features: [
      "Adjustable viewing angle",
      "Helps improve desk posture",
      "Foldable and easy to carry",
      "Suitable for home and office use",
    ],

    merchants: [],
  },

  {
    id: "3",
    name: "Cable Organizer",
    slug: "cable-organizer",
    category: "Gadgets",
    price: "₹249",
    rating: 4.3,
    badge: "Best Value",
    icon: "🔌",
    image: "/products/cable-organizer.jpg",
    description:
      "Keep charging cables and desk wires organized and reduce clutter around your workspace.",

    features: [
      "Keeps cables organized",
      "Reduces desk clutter",
      "Easy to install and use",
      "Suitable for home and office desks",
    ],

    merchants: [],
  },

  {
    id: "4",
    name: "Multipurpose Storage Box",
    slug: "multipurpose-storage-box",
    category: "Home",
    price: "₹499",
    rating: 4.6,
    badge: "Hot Deal",
    icon: "📦",
    image: "/products/multipurpose-storage-box.jpg",
    description:
      "A useful storage solution for organizing clothes, accessories, household items and more.",

    features: [
      "Useful for multiple storage needs",
      "Helps keep items organized",
      "Space-saving design",
      "Suitable for home and bedroom use",
    ],

    merchants: [],
  },

  {
    id: "5",
    name: "Travel Organizer Bag",
    slug: "travel-organizer-bag",
    category: "Travel",
    price: "₹599",
    rating: 4.5,
    badge: "Travel Pick",
    icon: "🧳",
    image: "/products/travel-organizer-bag.jpg",
    description:
      "A practical organizer bag for keeping travel accessories, chargers, documents and other essentials neatly arranged.",

    features: [
      "Multiple storage compartments",
      "Useful for travel accessories",
      "Compact and easy to carry",
      "Helps keep essentials organized",
    ],

    merchants: [],
  },

  {
    id: "6",
    name: "Daily Essentials Organizer",
    slug: "daily-essentials-organizer",
    category: "Daily Essentials",
    price: "₹349",
    rating: 4.4,
    badge: "Useful Pick",
    icon: "🛒",
    image: "/products/daily-essentials-organizer.jpg",
    description:
      "A handy organizer for keeping frequently used everyday items together and easy to access.",

    features: [
      "Useful for everyday items",
      "Keeps small items organized",
      "Compact design",
      "Easy to use at home",
    ],

    merchants: [],
  },
];