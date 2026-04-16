// Product types
export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: number;
  brand: string;
  image: string;
  images?: string[];
  colors: string[];
  sizes: string[];
  specifications: string[];
  materials: string[];
  sku: string;
}

// Cart item variant
export interface ProductVariant {
  color: string;
  size: string;
  specification: string;
  material: string;
  custom1?: { name: string; value: string };
  custom2?: { name: string; value: string };
  custom3?: { name: string; value: string };
  notes?: string;
}

// Cart item
export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  variants: ProductVariant;
  price: number;
}

// Customer info
export interface CustomerInfo {
  name: string;
  address: string;
  phone: string;
  postalCode: string;
}

// Language type
export type Language = 'en' | 'zh';

// Order data for PDF
export interface OrderData {
  date: string;
  customer: CustomerInfo;
  items: CartItem[];
  total: number;
}
