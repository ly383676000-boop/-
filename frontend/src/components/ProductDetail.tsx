import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Check, Heart, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import VariantSelector from './VariantSelector';
import QuantitySelector from './QuantitySelector';
import { Product, ProductVariant } from '../types';

interface ProductDetailProps {
  products: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { addItem } = useCart();

  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variants, setVariants] = useState<ProductVariant>({
    color: '',
    size: '',
    specification: '',
    material: '',
    custom1: { name: '', value: '' },
    custom2: { name: '', value: '' },
    custom3: { name: '', value: '' },
    notes: '',
  });
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-500 text-lg">Product not found</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-[#1B4332] hover:underline font-medium"
        >
          {language === 'en' ? 'Back to Home' : '返回首页'}
        </button>
      </div>
    );
  }

  const images = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const isVariantComplete =
    variants.color &&
    variants.size &&
    variants.specification &&
    variants.material;

  const handleAddToCart = () => {
    if (!isVariantComplete) return;

    addItem(product, variants, quantity);
    setAddedToCart(true);
    
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-[#666666] hover:text-[#1B4332] mb-6 transition-colors font-medium"
      >
        <ArrowLeft className="w-5 h-5" />
        {language === 'en' ? 'Back to Products' : '返回产品列表'}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 shadow-lg">
            <img
              src={images[selectedImage]}
              alt={language === 'en' ? product.nameEn : product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x600/1B4332/FFFFFF?text=No+Image';
              }}
            />
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-[#1B4332] shadow-md'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/80x80/1B4332/FFFFFF?text=No';
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Info */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-4 py-1.5 bg-[#1B4332] text-white text-sm rounded-full font-medium">
                {product.brand}
              </span>
              <span className="text-sm text-[#999999]">SKU: {product.sku}</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-3">
              {language === 'en' ? product.nameEn : product.name}
            </h1>
            <p className="text-3xl font-bold text-[#FF8C00]">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Description */}
          <div className="border-t border-b border-gray-200 py-5">
            <h2 className="font-semibold text-[#1A1A1A] mb-3">{t.product.details}</h2>
            <p className="text-[#666666] leading-relaxed">
              {language === 'en' ? product.descriptionEn : product.description}
            </p>
          </div>

          {/* Variant Selector */}
          <div className="bg-[#F8F9FA] rounded-xl p-5">
            <VariantSelector
              variants={variants}
              onChange={setVariants}
              product={{
                colors: product.colors,
                sizes: product.sizes,
                specifications: product.specifications,
                materials: product.materials,
              }}
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-semibold text-[#1A1A1A] mb-3">
              {t.product.quantity}
            </label>
            <QuantitySelector value={quantity} onChange={setQuantity} />
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!isVariantComplete}
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
              isVariantComplete
                ? addedToCart
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-[#FF8C00] text-white hover:bg-[#E67E00] shadow-lg hover:shadow-xl'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {addedToCart ? (
              <>
                <Check className="w-6 h-6" />
                {language === 'en' ? 'Added to Cart!' : '已添加到购物车！'}
              </>
            ) : (
              <>
                <ShoppingCart className="w-6 h-6" />
                {t.product.addToCart}
              </>
            )}
          </button>

          {/* Helper Text */}
          {!isVariantComplete && (
            <p className="text-sm text-[#999999] text-center">
              {language === 'en' 
                ? 'Please select all required options above' 
                : '请选择上方所有必填选项'}
            </p>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4 pt-2">
            <button className="flex items-center gap-2 text-[#666666] hover:text-[#1B4332] transition-colors">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">{t.product.wishlist}</span>
            </button>
            <button className="flex items-center gap-2 text-[#666666] hover:text-[#1B4332] transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-medium">{t.product.share}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
