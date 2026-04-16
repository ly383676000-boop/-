import { Product } from '../types';
import { API_BASE_URL } from '../config/api';
import { sampleProducts } from '../data/products';

// API Configuration
const API_PRODUCTS = `${API_BASE_URL}/api/products`;

export interface ProductResponse {
  success: boolean;
  data: Product[];
  message?: string;
}

// Fetch products from API
export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_PRODUCTS);
    if (!response.ok) {
      throw new Error('API request failed');
    }
    const data: ProductResponse = await response.json();
    if (data.success && data.data) {
      return data.data;
    }
    throw new Error('Invalid API response');
  } catch (error) {
    console.warn('Failed to fetch from API, using static data:', error);
    return sampleProducts;
  }
}

// Fetch single product by ID
export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_PRODUCTS}/${id}`);
    if (!response.ok) {
      throw new Error('API request failed');
    }
    const data = await response.json();
    if (data.success && data.data) {
      return data.data;
    }
    throw new Error('Invalid API response');
  } catch (error) {
    console.warn('Failed to fetch product from API:', error);
    return sampleProducts.find(p => p.id === id) || null;
  }
}
