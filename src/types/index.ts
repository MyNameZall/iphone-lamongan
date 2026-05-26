// =============================================
// IPHONE STORE LAMONGAN - TypeScript Types
// =============================================

export interface Product {
  id: number;
  name: string;
  subtitle: string;
  category: 'pro' | 'standard' | 'aksesoris';
  price: string;
  priceNumber: number;
  image: string;
  storage: string[];
  colors: string[];
  chip: string;
  camera: string;
  badge: 'new' | 'bestseller' | 'limited' | null;
  available: boolean;
  whatsappMsg: string;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
  product: string;
  date: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface TrustBadge {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export type ProductCategory = 'semua' | 'pro' | 'standard' | 'aksesoris';
