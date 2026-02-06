import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course } from '@/data/courses';

interface CartItem {
  course: Course;
  quantity: number;
  priceId: string;
  price: number;
  language: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (course: Course, quantity: number) => void;
  removeFromCart: (courseName: string) => void;
  updateQuantity: (courseName: string, quantity: number) => void;
  updateLanguage: (courseName: string, language: string) => void;
  updateAllLanguages: (language: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getCommonLanguages: () => string[];
  parseLanguages: (languageString: string) => string[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Helper to parse comma-separated language string into array
const parseLanguages = (languageString: string): string[] => {
  if (!languageString) return ['English'];
  return languageString.split(',').map(lang => lang.trim()).filter(Boolean);
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure all items have a language field (migration for existing carts)
      return parsed.map((item: any) => ({
        ...item,
        language: item.language || 'English'
      }));
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const getCoursePrice = (course: Course): { priceId: string; price: number } => {
    // Technical (5-Day) courses: $495
    if (course.duration === "5 Days") {
      return { priceId: "price_1SReq7HpFhtdY26l8vfwnlnF", price: 495 };
    }
    // Professional (1-Day and 4-Hour) courses: $195
    return { priceId: "price_1SRepxHpFhtdY26lBYQhetwe", price: 195 };
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
      return [...prev, { course, quantity, priceId, price, language: 'English' }];
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

  const updateLanguage = (courseName: string, language: string) => {
    setItems(prev =>
      prev.map(item =>
        item.course.name === courseName ? { ...item, language } : item
      )
    );
  };

  const updateAllLanguages = (language: string) => {
    setItems(prev =>
      prev.map(item => ({ ...item, language }))
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

  // Get languages common to all courses in cart
  const getCommonLanguages = (): string[] => {
    if (items.length === 0) return [];
    
    // Start with languages from first course
    let commonLangs = parseLanguages(items[0].course.languages);
    
    // Intersect with languages from each subsequent course
    for (let i = 1; i < items.length; i++) {
      const courseLangs = parseLanguages(items[i].course.languages);
      commonLangs = commonLangs.filter(lang => courseLangs.includes(lang));
    }
    
    return commonLangs;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateLanguage,
        updateAllLanguages,
        clearCart,
        getTotalItems,
        getTotalPrice,
        getCommonLanguages,
        parseLanguages,
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
