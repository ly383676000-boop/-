import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

// Color map for display
const colorMap: Record<string, string> = {
  'Black': '#000000',
  'White': '#FFFFFF',
  'Red': '#FF0000',
  'Blue': '#0066FF',
  'Green': '#008000',
  'Yellow': '#FFFF00',
  'Orange': '#FF8C00',
  'Purple': '#800080',
  'Pink': '#FF69B4',
  'Brown': '#8B4513',
  'Gray': '#808080',
  'Silver': '#C0C0C0',
  'Gold': '#D4A574',
  'Navy': '#000080',
  'Teal': '#008080',
  'Cream': '#FFFDD0',
  'Beige': '#F5F5DC',
  'Rose': '#FF007F',
  'Maroon': '#800000',
  'Olive': '#808000',
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl border border-gray-200 cursor-pointer group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-[#1B4332]/20"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={language === 'en' ? product.nameEn : product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400/1B4332/FFFFFF?text=No+Image';
          }}
        />
        {/* Brand Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-[#1B4332] uppercase tracking-wide shadow-sm">
          {product.brand}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="font-semibold text-[#1A1A1A] mb-2 line-clamp-2 group-hover:text-[#1B4332] transition-colors min-h-[2.5rem]">
          {language === 'en' ? product.nameEn : product.name}
        </h3>

        {/* SKU */}
        <p className="text-xs text-[#999999] mb-3">SKU: {product.sku}</p>

        {/* Price */}
        <p className="text-xl font-bold text-[#FF8C00] mb-4">
          ${product.price.toFixed(2)}
        </p>

        {/* Color Options */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#666666]">{t.product.color}:</span>
            <div className="flex gap-1.5">
              {product.colors.slice(0, 6).map((color) => (
                <span
                  key={color}
                  className="w-5 h-5 rounded-full border-2 border-gray-200 shadow-sm transition-transform hover:scale-110"
                  style={{ 
                    backgroundColor: colorMap[color] || color,
                    borderColor: color === 'White' || color === 'Cream' || color === 'Beige' ? '#E5E5E5' : 'transparent'
                  }}
                  title={color}
                />
              ))}
              {product.colors.length > 6 && (
                <span className="text-xs text-[#999999] flex items-center">
                  +{product.colors.length - 6}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
