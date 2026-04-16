import React, { useState } from 'react';
import { X, Trash2, Minus, Plus, FileText, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { generateOrderPDF } from '../utils/generatePDF';
import CustomerForm from './CustomerForm';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const { items, removeItem, updateQuantity, getTotal, clearCart, customerInfo } = useCart();
  const [formValid, setFormValid] = useState(false);

  const total = getTotal();

  const handleConfirmOrder = () => {
    if (!formValid || items.length === 0) return;

    generateOrderPDF({
      items,
      customer: customerInfo,
      total,
      language,
    });

    // Clear cart after successful order
    setTimeout(() => {
      clearCart();
      onClose();
    }, 1000);
  };

  const formatVariants = (item: typeof items[0]) => {
    const parts: string[] = [];
    if (item.variants.color) parts.push(item.variants.color);
    if (item.variants.size) parts.push(item.variants.size);
    if (item.variants.specification) parts.push(item.variants.specification);
    if (item.variants.material) parts.push(item.variants.material);
    return parts.join(' / ');
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity animate-fadeIn"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-[#1B4332]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">{t.cart.title}</h2>
            {items.length > 0 && (
              <span className="bg-[#FF8C00] text-white text-xs px-2 py-0.5 rounded-full">
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-[#666666]">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-lg mb-2 font-medium">{t.cart.empty}</p>
              <p className="text-sm text-[#999999] mb-6">Start adding products to your cart</p>
              <button
                onClick={onClose}
                className="btn-accent"
              >
                {t.cart.continueShopping}
              </button>
            </div>
          ) : (
            <div className="p-5 space-y-4">
              {/* Cart Items */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-[#F8F9FA] rounded-xl"
                >
                  {/* Image */}
                  <img
                    src={item.product.image}
                    alt={language === 'en' ? item.product.nameEn : item.product.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/80x80/1B4332/FFFFFF?text=No';
                    }}
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#1A1A1A] truncate mb-1">
                      {language === 'en' ? item.product.nameEn : item.product.name}
                    </h4>
                    <p className="text-xs text-[#666666] mb-2">
                      {formatVariants(item)}
                    </p>
                    <p className="text-[#FF8C00] font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4 text-[#333333]" />
                        </button>
                        <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-4 h-4 text-[#333333]" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-auto"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Customer Form */}
              <div className="border-t border-gray-100 pt-5 mt-5">
                <h3 className="font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#1B4332] text-white rounded-full text-xs flex items-center justify-center">i</span>
                  Customer Information
                </h3>
                <CustomerForm onValidChange={setFormValid} />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-white">
            {/* Total */}
            <div className="flex justify-between items-center mb-5">
              <span className="text-lg font-medium text-[#1A1A1A]">
                {t.cart.total}
              </span>
              <span className="text-2xl font-bold text-[#FF8C00]">
                ${total.toFixed(2)}
              </span>
            </div>

            {/* Confirm Button */}
            <button
              onClick={handleConfirmOrder}
              disabled={!formValid}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                formValid
                  ? 'bg-[#FF8C00] text-white hover:bg-[#E67E00] shadow-lg hover:shadow-xl'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <FileText className="w-5 h-5" />
              {t.cart.confirmOrder}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
