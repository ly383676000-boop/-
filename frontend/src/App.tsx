import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { sampleProducts } from './data/products';
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from './services/productService';

function App() {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from API with fallback to static data
    fetchProducts()
      .then(data => {
        if (data && data.length > 0) {
          setProducts(data);
        }
      })
      .catch(() => {
        // Use static data on error
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <LanguageProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/product/:id" element={<ProductPage products={products} />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
