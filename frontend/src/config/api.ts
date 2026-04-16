// API Configuration
export const API_BASE_URL = 'https://api-beta-one-67.vercel.app';

// Fallback to static data if API fails
export const USE_API = true;

export const API_ENDPOINTS = {
  products: '/api/products',
  categories: '/api/categories',
  orders: '/api/orders',
};

export const getApiUrl = (endpoint: string) => `${API_BASE_URL}${endpoint}`;
