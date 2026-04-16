import React, { useState } from 'react';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';
import Cart from '../components/Cart';
import { Product } from '../types';

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.nameEn.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.sku.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header onCartClick={() => setCartOpen(true)} onSearch={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section - Deep Green Gradient */}
        <div className="bg-gradient-to-br from-[#1B4332] via-[#2D5016] to-[#40916C] rounded-2xl p-8 lg:p-12 mb-8 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Text Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-white/80 text-sm font-medium tracking-widest uppercase border border-white/30 px-3 py-1 rounded-full">
                  Premium Wholesale
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-black mb-3 leading-tight tracking-tight">
                HONG KONG COOKIES
                <br />
                <span className="text-[#D4A574]">TRADING LIMITED</span>
              </h1>
              
              <p className="text-white/80 text-lg max-w-xl mb-6">
                Premium Glass Pipes, Bongs, Vaporizers &amp; Smoking Accessories
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                  🚚 Worldwide Shipping
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                  ✨ Quality Guaranteed
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                  💯 Wholesale Available
                </span>
              </div>
            </div>

            {/* Right: LOGO Display */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <img
                src="/logo.svg"
                alt="Smoking Accessories Wholesale"
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl shadow-2xl border-4 border-white/20 object-cover"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.display = 'none';
                }}
              />
              <p className="mt-3 text-white/60 text-xs text-center tracking-widest uppercase">
                Smoking Accessories Wholesale
              </p>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-[#1A1A1A]">Product Categories</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Glass Pipes', 'Bongs', 'Vaporizers', 'Grinders', 'Accessories'].map((category) => (
              <button
                key={category}
                className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-[#666666] hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332] transition-all duration-200 text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              All Products
              <span className="ml-2 text-[#999999] font-normal">({filteredProducts.length})</span>
            </h2>
          </div>
          
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">No products found</h3>
              <p className="text-[#666666]">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: '🚚', title: 'Fast Shipping', desc: 'Worldwide delivery' },
            { icon: '✅', title: 'Quality Assured', desc: 'Premium products' },
            { icon: '💬', title: '24/7 Support', desc: 'WhatsApp contact' },
            { icon: '📦', title: 'Wholesale', desc: 'Bulk orders welcome' },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#1B4332]/5 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="font-semibold text-[#1A1A1A] mb-1">{feature.title}</h3>
              <p className="text-sm text-[#666666]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1B4332] text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info + LOGO */}
            <div>
              {/* LOGO + 公司名 */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="w-14 h-14 rounded-xl object-cover border-2 border-white/20"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
                <div>
                  <h3 className="font-black text-base leading-tight tracking-wide">
                    HONG KONG COOKIES
                  </h3>
                  <p className="text-[#D4A574] text-xs font-bold tracking-widest">
                    TRADING LIMITED
                  </p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Premium smoking accessories and glass pipes supplier. 
                We provide high-quality products with competitive prices 
                for wholesale and retail customers worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-[#FF8C00] transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-[#FF8C00] transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-[#FF8C00] transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-[#FF8C00] transition-colors">Wholesale</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>WhatsApp: +1 234 567 890</li>
                <li>Email: info@hkcookies.com</li>
                <li>Address: Hong Kong</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
            © 2026 HONG KONG COOKIES TRADING LIMITED. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default Home;
