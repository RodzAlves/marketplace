import { useContext, createContext, useState, useEffect } from "react";
import { formatPrice } from "utils/formatPrice";
import { getStorageItem, setStorageItem } from "utils/localStorage";

const CART_KEY = "cartItems";

export type CartItem = {
  id: number;
  quantity: number;
  price: number;
  title: string;
};

export type CartContextData = {
  items: CartItem[];
  quantity: number;
  total: string;
  isInCart: (id: number) => boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  loading: boolean;
};

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: "$0.00",
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false
};

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
);

export type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const data = getStorageItem(CART_KEY);

    if (data) {
      setCartItems(data);
    }
  }, []);

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const isInCart = (id: number) => {
    setLoading(true);
    const item = cartItems.find((item) => item.id === id);

    setLoading(false);
    return !!item;
  };

  const saveCart = (cartItems: CartItem[]) => {
    setLoading(true);
    setCartItems(cartItems);
    setStorageItem(CART_KEY, cartItems);
    setLoading(false);
  };

  const addToCart = (item: CartItem) => {
    setLoading(true);
    saveCart([...cartItems, item]);
    setLoading(false);
  };

  const removeFromCart = (id: number) => {
    setLoading(true);
    const newCartItems = cartItems.filter((item: CartItem) => item.id !== id);
    saveCart(newCartItems);
    setLoading(false);
  };

  const clearCart = () => {
    setLoading(true);
    saveCart([]);
    setLoading(false);
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
        loading
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
