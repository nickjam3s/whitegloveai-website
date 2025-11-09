import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course } from '@/data/courses';

interface CartItem {
  course: Course;
  quantity: number;
  priceId: string;
  price: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (course: Course, quantity: number) => void;
  removeFromCart: (courseName: string) => void;
  updateQuantity: (courseName: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const getCoursePrice = (course: Course): { priceId: string; price: number } => {
    // Professional (1-Day) courses: $195
    if (course.duration === "1 Day") {
      return { priceId: "price_1SRepxHpFhtdY26lBYQhetwe", price: 195 };
    }
    // Technical (5-Day) courses: $495
    return { priceId: "price_1SReq7HpFhtdY26l8vfwnlnF", price: 495 };
  };

  const addToCart = (course: Course, quantity: number = 1) => {
    const { priceId, price } = getCoursePrice(course);
    
    setItems(prev => {
      const existing = prev.find(item => item.course.name === course.name);
      if (existing) {
        return prev.map(item =>
          item.course.name === course.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { course, quantity, priceId, price }];
    });
  };

  const removeFromCart = (courseName: string) => {
    setItems(prev => prev.filter(item => item.course.name !== courseName));
  };

  const updateQuantity = (courseName: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(courseName);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.course.name === courseName ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
