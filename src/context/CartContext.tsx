"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

export type CartItem = {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  category: string;
  size?: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: any, size?: string) => void;
  removeFromCart: (id: number, size?: string) => void;
  updateQuantity: (
    id: number,
    quantity: number,
    size?: string
  ) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("hiba-cart");

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch {
        localStorage.removeItem("hiba-cart");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("hiba-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: any, size?: string) => {
    setCart((current) => {
      const existing = current.find(
        (item) =>
          item.id === product.id &&
          item.size === size
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.size === size
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          slug: product.slug,
          price: product.price,
          image: product.image,
          category: product.category,
          size,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id: number, size?: string) => {
    setCart((current) =>
      current.filter(
        (item) =>
          !(item.id === id && item.size === size)
      )
    );
  };

  const updateQuantity = (
    id: number,
    quantity: number,
    size?: string
  ) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }

    setCart((current) =>
      current.map((item) =>
        item.id === id && item.size === size
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [cart]
  );

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      ),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}