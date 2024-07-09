import { Product } from "@/components/data";
import { create } from "zustand";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
  updateItem: (name: string, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  updateItem: (name, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.name === name ? { ...item, quantity } : item
      ),
    })),

  clearCart: () =>
    set(() => ({
      items: [],
    })),
}));

export default useCartStore;
