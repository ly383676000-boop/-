import React, { useState } from 'react';
import { Search, ShoppingCart, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, onSearch }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { getItemCount } = useCart();
  const itemCount = getItemCount();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#1B4332] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Company Name */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* LOGO 图片 */}
            <img
              src="/logo.svg"
              alt="HONG KONG COOKIES TRADING LIMITED"
              className="w-12 h-12 rounded-lg object-cover border-2 border-white/20 shadow"
              onError={(e) => {
                // 如果图片加载失败，显示文字备用
                const t = e.currentTarget as HTMLImageElement;
                t.style.display = 'none';
                const next = t.nextElementSibling as HTMLElement;
                if (next) next.style.display = 'flex';
              }}
            />
            {/* 备用文字LOGO（图片加载失败时显示） */}
            <div
              className="w-12 h-12 rounded-lg border-2 border-white/30 items-center justify-center text-center hidden"
              style={{ background: '#2D5A3D' }}
            >
              <span className="text-white font-black text-xs leading-none">HK<br/>CT</span>
            </div>
            {/* 公司名称 */}
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-sm lg:text-base leading-tight tracking-wide">
                HONG KONG COOKIES
              </h1>
              <p className="text-[#D4A574] text-xs font-semibold tracking-widest uppercase">
                TRADING LIMITED
              </p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t.nav.search}
                className="w-full pl-12 pr-4 py-2.5 bg-white rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] border-0"
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">
                {language === 'en' ? '中文' : 'EN'}
              </span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2.5 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label={t.cart.title}
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF8C00] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t.nav.search}
                className="w-full pl-12 pr-4 py-2.5 bg-white rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] border-0"
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
