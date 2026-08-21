"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
  useCallback,
} from "react";

import { Product } from "@/data/products";
import { TreatmentPackage } from "@/data/treatments";

export interface CartItem {
  id: number | string;
  name: string;
  price: number;
  oldPrice?: number;
  images: string[];
  quantity: number;
  category?: string;
  slug?: string;
}

export type AddToCartInput =
  | Product
  | TreatmentPackage
  | {
      id: number | string;
      name?: string;
      title?: string;
      price: number;
      oldPrice?: number;
      images?: string[];
      image?: string;
      slug?: string;
    };

export type CartStatus = "idle" | "adding" | "success" | "error";

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: AddToCartInput) => boolean;
  removeFromCart: (id: number | string) => void;
  increaseQuantity: (id: number | string) => void;
  decreaseQuantity: (id: number | string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  cartStatus: CartStatus;
  lastAddedItem: CartItem | null;
  clearCartStatus: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

function normalizeCartItem(input: AddToCartInput): Omit<CartItem, "quantity"> {
  const isTreatment = "title" in input && typeof input.title === "string";
  
  let name = "";
  if ("name" in input && typeof input.name === "string") {
    name = input.name;
  } else if (isTreatment && "title" in input) {
    name = input.title as string;
  }

  let images: string[] = [];
  if ("images" in input && Array.isArray(input.images) && input.images.length > 0) {
    images = input.images;
  } else if ("image" in input && typeof input.image === "string") {
    images = [input.image];
  } else {
    images = ["/logos/logo.png"];
  }

  // Use a string ID prefix for courses if they have a slug to avoid collisions with product numeric IDs
  const id = isTreatment && "slug" in input ? `course-${input.id}` : input.id;

  return {
    id,
    name,
    price: input.price,
    oldPrice: input.oldPrice,
    images,
    category: isTreatment ? "Treatment Package" : "Herbal Medicine",
    slug: "slug" in input ? input.slug : undefined,
  };
}

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartStatus, setCartStatus] = useState<CartStatus>("idle");
  const [lastAddedItem, setLastAddedItem] = useState<CartItem | null>(null);

  // Load Cart from localStorage after hydration
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Cart Load Error:", error);
    }
  }, []);

  // Save Cart to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Cart Save Error:", error);
    }
  }, [cart]);

  const clearCartStatus = useCallback(() => {
    setCartStatus("idle");
    setLastAddedItem(null);
  }, []);

  // Add Item to Cart
  const addToCart = useCallback((item: AddToCartInput): boolean => {
    try {
      setCartStatus("adding");
      const normalized = normalizeCartItem(item);

      let targetItem: CartItem | null = null;

      setCart((prev) => {
        const existing = prev.find((i) => String(i.id) === String(normalized.id));

        if (existing) {
          targetItem = {
            ...existing,
            quantity: existing.quantity + 1,
          };
          return prev.map((i) =>
            String(i.id) === String(normalized.id) ? targetItem! : i
          );
        }

        targetItem = {
          ...normalized,
          quantity: 1,
        };
        return [...prev, targetItem];
      });

      setLastAddedItem(targetItem);
      setCartStatus("success");
      return true;
    } catch (error) {
      console.error("Add to cart error:", error);
      setCartStatus("error");
      return false;
    }
  }, []);

  // Remove Item
  const removeFromCart = useCallback((id: number | string) => {
    setCart((prev) => prev.filter((item) => String(item.id) !== String(id)));
  }, []);

  // Increase Quantity
  const increaseQuantity = useCallback((id: number | string) => {
    setCart((prev) =>
      prev.map((item) =>
        String(item.id) === String(id)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }, []);

  // Decrease Quantity
  const decreaseQuantity = useCallback((id: number | string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          String(item.id) === String(id)
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  // Clear Cart
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const totalItems = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
        cartStatus,
        lastAddedItem,
        clearCartStatus,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within CartProvider.");
  }

  return context;
}