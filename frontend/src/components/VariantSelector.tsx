import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProductVariant } from '../types';

interface VariantSelectorProps {
  variants: ProductVariant;
  onChange: (variants: ProductVariant) => void;
  product: {
    colors?: string[];
    sizes?: string[];
    specifications?: string[];
    materials?: string[];
  };
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

const VariantSelector: React.FC<VariantSelectorProps> = ({ variants, onChange, product }) => {
  const { t } = useLanguage();

  const updateVariant = (key: keyof ProductVariant, value: string) => {
    onChange({ ...variants, [key]: value });
  };

  return (
    <div className="space-y-5">
      {/* Color Selector - Circular Picker */}
      {product.colors && product.colors.length > 0 && (
        <div>
          <label className="block text-sm font-semibold text-[#1A1A1A] mb-3">
            {t.product.color} <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => updateVariant('color', color)}
                className={`w-10 h-10 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                  variants.color === color
                    ? 'border-[#1B4332] ring-2 ring-[#1B4332]/30 scale-110'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                style={{ 
                  backgroundColor: colorMap[color] || color,
                  borderColor: variants.color === color ? '#1B4332' : (color === 'White' || color === 'Cream' || color === 'Beige' ? '#E5E5E5' : 'transparent')
                }}
                title={color}
              >
                {variants.color === color && (
                  <span className={`text-xs font-bold ${['White', 'Cream', 'Beige', 'Yellow', 'Silver'].includes(color) ? 'text-gray-800' : 'text-white'}`}>
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
          {variants.color && (
            <p className="mt-2 text-sm text-[#666666]">Selected: {variants.color}</p>
          )}
        </div>
      )}

      {/* Size Selector - Pill Buttons */}
      {product.sizes && product.sizes.length > 0 && (
        <div>
          <label className="block text-sm font-semibold text-[#1A1A1A] mb-3">
            {t.product.size} <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => updateVariant('size', size)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
                  variants.size === size
                    ? 'bg-[#1B4332] text-white shadow-md'
                    : 'bg-white text-[#333333] border border-gray-200 hover:border-[#1B4332] hover:text-[#1B4332]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Specification Selector - Dropdown */}
      {product.specifications && product.specifications.length > 0 && (
        <div>
          <label className="block text-sm font-semibold text-[#1A1A1A] mb-3">
            {t.product.specification} <span className="text-red-500">*</span>
          </label>
          <select
            value={variants.specification}
            onChange={(e) => updateVariant('specification', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:border-transparent bg-white text-[#333333]"
          >
            <option value="">Select {t.product.specification}</option>
            {product.specifications.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Material Selector - Dropdown */}
      {product.materials && product.materials.length > 0 && (
        <div>
          <label className="block text-sm font-semibold text-[#1A1A1A] mb-3">
            {t.product.material} <span className="text-red-500">*</span>
          </label>
          <select
            value={variants.material}
            onChange={(e) => updateVariant('material', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:border-transparent bg-white text-[#333333]"
          >
            <option value="">Select {t.product.material}</option>
            {product.materials.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Custom Parameters */}
      {(variants.custom1?.name || variants.custom2?.name || variants.custom3?.name) && (
        <div className="space-y-3 pt-2">
          {variants.custom1?.name && (
            <div>
              <label className="block text-sm font-medium text-[#666666] mb-2">
                {variants.custom1.name}
              </label>
              <input
                type="text"
                value={variants.custom1.value}
                onChange={(e) => updateVariant('custom1', { ...variants.custom1!, value: e.target.value })}
                placeholder={`Enter ${variants.custom1.name}`}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:border-transparent"
              />
            </div>
          )}
          {variants.custom2?.name && (
            <div>
              <label className="block text-sm font-medium text-[#666666] mb-2">
                {variants.custom2.name}
              </label>
              <input
                type="text"
                value={variants.custom2.value}
                onChange={(e) => updateVariant('custom2', { ...variants.custom2!, value: e.target.value })}
                placeholder={`Enter ${variants.custom2.name}`}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:border-transparent"
              />
            </div>
          )}
          {variants.custom3?.name && (
            <div>
              <label className="block text-sm font-medium text-[#666666] mb-2">
                {variants.custom3.name}
              </label>
              <input
                type="text"
                value={variants.custom3.value}
                onChange={(e) => updateVariant('custom3', { ...variants.custom3!, value: e.target.value })}
                placeholder={`Enter ${variants.custom3.name}`}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:border-transparent"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VariantSelector;
