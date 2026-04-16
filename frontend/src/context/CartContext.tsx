import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CartItem, CustomerInfo, Product, ProductVariant } from '../types';

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, variants: ProductVariant, quantity: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
  customerInfo: CustomerInfo;
  setCustomerInfo: (info: CustomerInfo) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [customerInfo, setCustomerInfoState] = useState<CustomerInfo>({
    name: '',
    address: '',
    phone: '',
    postalCode: '',
  });

  const addItem = useCallback((product: Product, variants: ProductVariant, quantity: number) => {
    const newItem: CartItem = {
      id: generateId(),
      product,
      quantity,
      variants,
      price: product.price,
    };
    setItems(prev => [...prev, newItem]);
  }, []);

  const removeItem = useCallback((itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity < 1) return;
    setItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setCustomerInfoState({ name: '', address: '', phone: '', postalCode: '' });
  }, []);

  const getTotal = useCallback(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const getItemCount = useCallback(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const setCustomerInfo = useCallback((info: CustomerInfo) => {
    setCustomerInfoState(info);
  }, []);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      getTotal,
      getItemCount,
      customerInfo,
      setCustomerInfo,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
