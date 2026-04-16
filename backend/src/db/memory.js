// In-memory database for Vercel Serverless (no SQLite needed)
let products = [
  {
    id: '1',
    name: '经典玻璃烟斗',
    nameEn: 'Classic Glass Pipe',
    description: '高品质手工玻璃烟斗，独特的波浪设计，提供平滑的吸烟体验。',
    descriptionEn: 'High-quality handcrafted glass pipe with unique wave design.',
    price: 45.99,
    brand: 'GlassArt',
    image: 'https://images.unsplash.com/photo-1528659932486-7d60655c9795?w=400&h=400&fit=crop',
    colors: ['Black', 'White', 'Red', 'Blue', 'Green'],
    sizes: ['Small', 'Medium', 'Large'],
    specifications: ['Standard', 'Premium', 'Deluxe'],
    materials: ['Glass', 'Crystal', 'Acrylic'],
    sku: 'GAP-001',
    category: 'Glass Pipes',
    stock: 100,
  },
  {
    id: '2',
    name: '多功能吸烟套装',
    nameEn: 'Multi-Function Smoking Set',
    description: '完整的吸烟套装，包含烟斗、打火机、清洁工具和便携盒。',
    descriptionEn: 'Complete smoking set including pipe, lighter, cleaning tools.',
    price: 89.99,
    brand: 'SmokeMaster',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    colors: ['Black', 'Silver', 'Gold'],
    sizes: ['Compact', 'Standard', 'Extended'],
    specifications: ['Basic', 'Pro', 'Elite'],
    materials: ['Metal', 'Glass', 'Wood'],
    sku: 'SMS-002',
    category: 'Sets',
    stock: 50,
  },
  {
    id: '3',
    name: '迷你口袋烟斗',
    nameEn: 'Mini Pocket Pipe',
    description: '小巧便携的口袋烟斗，适合旅行和户外使用。',
    descriptionEn: 'Compact pocket-sized pipe perfect for travel and outdoor use.',
    price: 24.99,
    brand: 'TravelSmoke',
    image: 'https://images.unsplash.com/photo-1584984462123-a6c3f8e6f1c4?w=400&h=400&fit=crop',
    colors: ['Black', 'Brown', 'White', 'Pink'],
    sizes: ['Mini', 'Micro', 'Pocket'],
    specifications: ['Standard'],
    materials: ['Wood', 'Metal', 'Ceramic'],
    sku: 'TSP-003',
    category: 'Glass Pipes',
    stock: 200,
  },
  {
    id: '4',
    name: '彩虹玻璃水烟壶',
    nameEn: 'Rainbow Glass Bubbler',
    description: '炫彩彩虹玻璃水烟壶，带有内置水过滤系统。',
    descriptionEn: 'Vibrant rainbow glass bubbler with built-in water filtration.',
    price: 129.99,
    brand: 'RainbowArt',
    image: 'https://images.unsplash.com/photo-1604176424474-0ef70882f2c6?w=400&h=400&fit=crop',
    colors: ['Rainbow', 'Purple', 'Blue', 'Green'],
    sizes: ['Small', 'Medium', 'Large'],
    specifications: ['Standard', 'Turbo'],
    materials: ['Glass', 'Crystal'],
    sku: 'RBA-004',
    category: 'Bongs',
    stock: 30,
  },
  {
    id: '5',
    name: '木质经典烟斗',
    nameEn: 'Wooden Classic Pipe',
    description: '传统木质手工烟斗，经典造型，优雅大方。',
    descriptionEn: 'Traditional handcrafted wooden pipe with classic elegant design.',
    price: 65.99,
    brand: 'WoodCraft',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=400&fit=crop',
    colors: ['Brown', 'Dark Brown', 'Walnut'],
    sizes: ['Standard', 'Large', 'Churchwarden'],
    specifications: ['Standard', 'Carved'],
    materials: ['Briar', 'Cherry', 'Mahogany'],
    sku: 'WCP-005',
    category: 'Glass Pipes',
    stock: 80,
  },
  {
    id: '6',
    name: '电子烟雾化器',
    nameEn: 'Electronic Vaporizer',
    description: '现代电子烟雾化器，支持多种温度调节。',
    descriptionEn: 'Modern electronic vaporizer with multiple temperature settings.',
    price: 159.99,
    brand: 'VapeTech',
    image: 'https://images.unsplash.com/photo-1576939454778-f8c5b4299c9c?w=400&h=400&fit=crop',
    colors: ['Black', 'Silver', 'Red', 'Blue'],
    sizes: ['Mini', 'Standard', 'Pro'],
    specifications: ['Basic', 'Temp Control', 'Smart'],
    materials: ['Metal', 'Glass', 'Carbon Fiber'],
    sku: 'VPT-006',
    category: 'Vaporizers',
    stock: 45,
  },
];

let variants = [];
let orders = [];

// Memory database API
const db = {
  // Products
  getAllProducts: () => products,
  
  getProductById: (id) => products.find(p => p.id === id),
  
  addProduct: (product) => {
    const newProduct = { ...product, id: String(Date.now()) };
    products.push(newProduct);
    return newProduct;
  },
  
  updateProduct: (id, data) => {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...data };
      return products[index];
    }
    return null;
  },
  
  deleteProduct: (id) => {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products.splice(index, 1);
      return true;
    }
    return false;
  },

  // Variants
  getAllVariants: () => variants,
  
  getVariantsByProductId: (productId) => variants.filter(v => v.productId === productId),
  
  addVariant: (variant) => {
    const newVariant = { ...variant, id: String(Date.now()) };
    variants.push(newVariant);
    return newVariant;
  },

  // Orders
  getAllOrders: () => orders,
  
  addOrder: (order) => {
    const newOrder = { ...order, id: String(Date.now()), createdAt: new Date().toISOString() };
    orders.push(newOrder);
    return newOrder;
  },
};

module.exports = db;
