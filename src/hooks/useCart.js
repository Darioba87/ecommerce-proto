import { useEffect, useState } from "react";
import { openDB } from "idb";

const CART_DB_NAME = "cartDB";
const CART_STORE_NAME = "cart";

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  const initDB = async () => {
    try {
      return await openDB(CART_DB_NAME, 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains(CART_STORE_NAME)) {
            db.createObjectStore(CART_STORE_NAME, { keyPath: "id" });
          }
        },
      });
    } catch (error) {
      console.error("Failed to initialize IndexedDB:", error);
      throw error;
    }
  };

  const loadCart = async () => {
    try {
      const db = await initDB();
      const allItems = await db.getAll(CART_STORE_NAME);
      setCart(allItems || []);
      setCartLength(allItems.length || 0);
    } catch (error) {
      console.error("Failed to load cart from IndexedDB:", error);
    }
  };

  const getCartLength = async () => {
    try {
      const db = await initDB();
      const count = await db.count(CART_STORE_NAME); // Count items in the store
      return count;
    } catch (error) {
      console.error("Failed to get cart length from IndexedDB:", error);
      return 0;
    }
  };

  const saveCartItem = async (product) => {
    try {
      const db = await initDB();
      await db.put(CART_STORE_NAME, product);
      await getCartLength(); // Update cart length after saving
    } catch (error) {
      console.error("Failed to save item to IndexedDB:", error);
    }
  };

  const deleteCartItem = async (productId) => {
    try {
      const db = await initDB();
      await db.delete(CART_STORE_NAME, productId);
      await getCartLength(); // Update cart length after deletion
    } catch (error) {
      console.error("Failed to delete item from IndexedDB:", error);
    }
  };

  const clearCartDB = async () => {
    try {
      const db = await initDB();
      await db.clear(CART_STORE_NAME);
      await getCartLength(); // Update cart length after clearing
    } catch (error) {
      console.error("Failed to clear cart in IndexedDB:", error);
    }
  };

  const addToCart = async (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some((item) => item.id === product.id);

      if (isProductInCart) {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        saveCartItem(updatedCart.find((item) => item.id === product.id));
        return updatedCart;
      }

      const newProduct = { ...product, quantity: 1 };
      saveCartItem(newProduct);
      return [...prevCart, newProduct];
    });
  };

  const removeFromCart = async (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      deleteCartItem(productId);
      return updatedCart;
    });
  };

  const clearCart = async () => {
    setCart([]);
    clearCartDB();
  };

  useEffect(() => {
    loadCart();
  }, []);

  return {
    cart,
    cartLength,
    addToCart,
    removeFromCart,
    clearCart,
    getCartLength,
  };
};
