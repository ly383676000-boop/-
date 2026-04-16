import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Cart from '../components/Cart';
import ProductDetail from '../components/ProductDetail';
import { Product } from '../types';

interface ProductPageProps {
  products: Product[];
}

const ProductPage: React.FC<ProductPageProps> = ({ products }) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header onCartClick={() => setCartOpen(true)} />
      
      <main>
        <ProductDetail products={products} />
      </main>

      {/* Cart Drawer */}
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default ProductPage;
